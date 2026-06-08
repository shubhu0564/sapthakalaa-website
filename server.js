import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const app = express();
const port = process.env.PORT ?? 5000;
const apiOrigin = process.env.MAIL_API_ORIGIN ?? process.env.VITE_MAIL_API_ORIGIN ?? "*";
const mailRecipient = process.env.MAIL_TO ?? "connect.saphakalaa@gmail.com";
const mailFrom = process.env.MAIL_FROM ?? process.env.SMTP_USER ?? "no-reply@connect.saphakalaa.com";

const mysqlHost = process.env.MYSQL_HOST;
const mysqlPort = parseInt(process.env.MYSQL_PORT ?? "3306", 10);
const mysqlDatabase = process.env.MYSQL_DATABASE;
const mysqlUser = process.env.MYSQL_USER;
const mysqlPassword = process.env.MYSQL_PASSWORD;

if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
  console.warn(
    "Warning: SMTP_HOST, SMTP_USER, and SMTP_PASS are required to send email.\n" +
      "Create a .env file with SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, and optional MAIL_TO."
  );
}

const mysqlConfigured = Boolean(mysqlHost && mysqlDatabase && mysqlUser && mysqlPassword);
const smtpConfigured = Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);

let mysqlPool = null;
if (mysqlConfigured) {
  try {
    const createDbConnection = await mysql.createConnection({
      host: mysqlHost,
      port: mysqlPort,
      user: mysqlUser,
      password: mysqlPassword,
    });

    await createDbConnection.query(
      `CREATE DATABASE IF NOT EXISTS \`${mysqlDatabase}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`
    );
    await createDbConnection.end();

    mysqlPool = mysql.createPool({
      host: mysqlHost,
      port: mysqlPort,
      user: mysqlUser,
      password: mysqlPassword,
      database: mysqlDatabase,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  } catch (error) {
    console.warn("MySQL configuration is present but failed to connect:", error.message);
  }
}

let transporter = null;
if (smtpConfigured) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT ?? "587", 10),
    secure: process.env.SMTP_SECURE === "true",
    requireTLS: process.env.SMTP_SECURE !== "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

app.use(cors({ origin: apiOrigin, credentials: true }));
app.use(express.json());

const distPath = path.join(process.cwd(), "dist");
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get(/^(?!\/api\/).*/, (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

app.post("/api/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    let dbSaved = false;
    let emailSent = false;
    let emailMessage = "";

    if (mysqlConfigured && mysqlPool) {
      await mysqlPool.execute(
        `CREATE TABLE IF NOT EXISTS contact_submissions (
          id INT UNSIGNED NOT NULL AUTO_INCREMENT,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          subject VARCHAR(255) NOT NULL,
          message TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          PRIMARY KEY (id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`
      );

      await mysqlPool.execute(
        "INSERT INTO contact_submissions (name, email, subject, message) VALUES (?, ?, ?, ?)",
        [name, email, subject, message]
      );
      dbSaved = true;
    }

    if (transporter) {
      try {
        const info = await transporter.sendMail({
          from: `saphakalaa Contact <${mailFrom}>`,
          to: mailRecipient,
          replyTo: email,
          subject: `[saphakalaa Contact] ${subject}`,
          text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
          html: `
            <h2>saphakalaa Contact Form</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br />")}</p>
          `,
        });

        console.log("Email sent:", info.messageId);
        emailSent = true;
        emailMessage = "Your message was delivered successfully.";
      } catch (sendErr) {
        console.error("Email send failed:", sendErr);
        emailSent = false;
        emailMessage = "Message saved to database, but email delivery failed.";
      }
    } else {
      if (dbSaved) {
        emailMessage = "Message saved to database. SMTP not configured, so email was not sent.";
        console.warn("No mail transporter configured. Contact submission saved to MySQL only.");
      } else {
        emailMessage = "Neither SMTP nor MySQL is configured. The message could not be saved or delivered.";
        console.warn("No mail transporter configured and no MySQL configuration provided.");
      }
    }

    if (!dbSaved && !emailSent) {
      return res.status(500).json({
        success: false,
        saved: false,
        emailSent: false,
        error: emailMessage,
      });
    }

    return res.json({
      success: true,
      saved: dbSaved,
      emailSent,
      message: emailMessage,
    });
  } catch (error) {
    console.error("Error processing contact submission:", error);
    return res.status(500).json({ error: "Unable to process contact submission." });
  }
});

app.listen(port, async () => {
  if (mysqlConfigured && mysqlPool) {
    try {
      await mysqlPool.query("SELECT 1");
      console.log(`MySQL connected to ${mysqlDatabase}@${mysqlHost}:${mysqlPort}`);
    } catch (error) {
      console.warn("MySQL connection failed:", error.message);
    }
  } else {
    console.warn("MySQL is not fully configured. Contact submissions will not be stored.");
  }

  console.log(`Mail API listening at http://localhost:${port}`);
  console.log(`Allowed origin: ${apiOrigin}`);
  console.log(`Mail recipient: ${mailRecipient}`);
});

// Admin: list stored contact submissions (requires ADMIN_TOKEN header if set)
app.get('/api/messages', async (req, res) => {
  try {
    const adminToken = process.env.ADMIN_TOKEN;
    if (adminToken) {
      const supplied = req.header('x-admin-token') || '';
      if (supplied !== adminToken) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
    }

    if (!mysqlConfigured || !mysqlPool) {
      return res.status(503).json({ error: 'MySQL not configured' });
    }

    const [rows] = await mysqlPool.execute(
      'SELECT id, name, email, subject, message, created_at FROM contact_submissions ORDER BY created_at DESC LIMIT 200'
    );

    return res.json({ success: true, messages: rows });
  } catch (err) {
    console.error('Error fetching messages:', err);
    return res.status(500).json({ error: 'Unable to fetch messages' });
  }
});
