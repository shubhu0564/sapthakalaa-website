import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Mail, Phone, MapPin, ArrowUpRight, Send, Instagram, Linkedin, Youtube } from "lucide-react";

const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2C7.6 2 4 5.6 4 10c0 2.5 1.3 4.7 3.2 5.9-.1.4-.6 2.1-.6 2.1s-.2.8-.2 2.1c0 .5.4.9.9.9.9 0 1.6-.6 1.6-1.4 0-.9-.3-1.5-.3-2.2 0-.9.5-1.6 1.2-1.6.6 0 .9.4.9.9 0 .7-.4 1.7-.6 2.6-.2.8.4 1.4 1.1 1.4 1.3 0 2.2-1.2 2.2-2.9 0-1.5-1-2.5-2.4-2.5-.8 0-1.4.4-1.6.8-.3.7-.8 2.1-.9 2.7-.1.4-.4.8-.7.8-.3 0-.6-.3-.6-.8 0-.9.4-1.7.6-2.4.2-.5.9-1.1 1.4-1.1.8 0 1.4.7 1.4 1.6 0 .9-.5 1.4-1 1.4-.3 0-.6-.3-.5-.7.1-.2.3-.5.3-.7 0-.3-.2-.6-.6-.6-1.1 0-1.8 1.2-1.8 2.7 0 1 .3 1.8.9 2.3.1.1.1.2.1.3 0 .3-.2.8-.2 1 .0.2-.1.5-.1.7 0 .2.1.4.4.4 1.4 0 2.4-1.4 2.4-3.4 0-1.8-1.4-3.1-3.3-3.1-2.2 0-3.6 1.6-3.6 3.4 0 .7.3 1.6.8 2.1.1.1.1.2.1.3 0 .5-.2 1-.7 1.3-.3.2-.7.3-1.1.3-.1 0-.2 0-.3 0-.2 0-.4-.2-.4-.4 0-.1 0-.2.1-.3 1.5-1.4 2.4-3.4 2.4-5.6C4 5.1 7.6 2 12 2Z" />
  </svg>
);
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "connect.sapthakalaa@gmail.com",
    href: "mailto:connect.sapthakalaa@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8928236838",
    href: "tel:+918928236838",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mumbai, Maharashtra, India",
    href: null,
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ar-rd-omkar-madhav-595a4b297?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/saptha7799/",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@saptha7799",
  },
  {
    label: "Pinterest",
    href: "https://pin.it/5XmsvTXWL",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const apiUrl = import.meta.env.VITE_MAIL_API_URL ?? "http://localhost:5000/api/send-email";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || result.success === false) {
        const errorMessage = result.error || "Unable to send the message.";
        throw new Error(errorMessage);
      }

      toast({
        title: "Message sent!",
        description:
          result.message || "Thank you for reaching out. Your message has been delivered.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      toast({
        title: "Send failed",
        description:
          error instanceof Error
            ? error.message
            : "Unable to send the message. Please try again or email connect.sapthakalaa@gmail.com directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="pt-32 lg:pt-40 pb-section-sm">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeader
            overline="Get in Touch"
            title="Let's Connect"
            description="Interested in collaboration, have a project in mind, or just want to say hello? I'd love to hear from you."
          />
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-section">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Contact Info */}
            <div className="lg:col-span-5">
              <ScrollReveal>
                <div className="space-y-8">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <span className="text-overline uppercase text-muted-foreground block">
                          {item.label}
                        </span>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-serif text-heading-3 hover:text-accent transition-colors duration-300"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="font-serif text-heading-3">
                            {item.value}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="mt-12 pt-12 border-t border-border">
                  <span className="text-overline uppercase text-muted-foreground block mb-6">
                    Social
                  </span>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((link) => {
                      const icons = {
                        LinkedIn: Linkedin,
                        Instagram: Instagram,
                        YouTube: Youtube,
                        Pinterest: PinterestIcon,
                      };
                      const Icon = icons[link.label as keyof typeof icons];

                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={link.label}
                          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground hover:border-accent hover:text-accent transition-colors duration-300"
                        >
                          {Icon ? <Icon size={20} /> : link.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="mt-12 p-8 bg-card border border-border">
                  <h3 className="font-serif text-heading-3 mb-4">
                    Open for Projects
                  </h3>
                  <p className="text-muted-foreground">
                    sapthakalaa is currently accepting new projects and collaborations 
                    in environmental design, planning, management, visualization, 
                    and research across India.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="mt-10 p-8 bg-card border border-border rounded-3xl">
                  <span className="text-overline uppercase text-muted-foreground block mb-4">
                    Location
                  </span>
                  <div className="overflow-hidden rounded-3xl border border-border">
                    <iframe
                      title="Mumbai location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d376740.06095414636!2d72.74109998897324!3d19.08219783949357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63c0e7da0fb%3A0xae3000ba126e1cd2!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1714558703528!5m2!1sen!2sin"
                      className="w-full h-72 border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-overline uppercase text-muted-foreground block mb-3"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-border focus:border-foreground focus:ring-0 transition-colors duration-300 outline-none"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-overline uppercase text-muted-foreground block mb-3"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-border focus:border-foreground focus:ring-0 transition-colors duration-300 outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="text-overline uppercase text-muted-foreground block mb-3"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-border focus:border-foreground focus:ring-0 transition-colors duration-300 outline-none"
                      placeholder="What is this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-overline uppercase text-muted-foreground block mb-3"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-border focus:border-foreground focus:ring-0 transition-colors duration-300 outline-none resize-none"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center gap-3 bg-foreground text-background px-10 py-5 text-sm uppercase tracking-widest hover:bg-accent transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
