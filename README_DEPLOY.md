Deployment and local run instructions
===================================

1) Quick local build

  # Build frontend
  npm run build

  # Start backend (foreground)
  npm run server

  # Start dev server (separate terminal for development)
  npm run dev

2) One-command helper (Windows PowerShell)

  ./make-all.ps1

  - If Docker is installed this runs `docker-compose up -d --build`.
  - Otherwise it builds the frontend and opens two new PowerShell windows for `npm run server` and `npm run dev`.

3) Docker (production-like)

  # Build and start
  docker-compose up -d --build

  # Stop
  docker-compose down

4) Environment variables

Place production secrets in environment (DO NOT commit to git). Example `.env` keys used by this project:

For the live domain `saphakalaa.co.in`, set:

- VITE_MAIL_API_URL=/api/send-email

This keeps the contact form calling the same origin as the site on production.

- SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS
- MAIL_TO, MAIL_FROM
- MYSQL_HOST, MYSQL_PORT, MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD

5) Deploying to `saphakalaa.co.in`

- Option A: VPS (DigitalOcean/Hetzner)
  - Push code to the server, install Docker, run `docker-compose up -d --build`.
  - Point `saphakalaa.co.in` and `www.saphakalaa.co.in` to the server IP in DNS.
  - Use Caddy or Nginx + Let's Encrypt to terminate HTTPS.
  - Keep `VITE_MAIL_API_URL=/api/send-email` in the production environment so the contact form works on the custom domain.

- Option B: Managed services (Render/Railway)
  - Deploy backend as a Node service, set environment variables in the service settings.
  - Deploy frontend as a static site or serve with backend; configure custom domain in the platform dashboard.
