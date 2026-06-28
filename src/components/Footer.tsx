import { Instagram, Linkedin, Youtube, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/sapthakalaa/",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sapthakalaa/",
    icon: Instagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UC5ahbS6HcySAQgvpaBWK4mA",
    icon: Youtube,
  },
  {
    label: "Email",
    href: "mailto:connect.sapthakalaa@gmail.com",
    icon: Mail,
  },
];

const footerLinks = [
  { label: "Careers", href: "/practice/careers" },
  { label: "Contact", href: "/practice/contact" },
  { label: "Terms & Conditions", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="mt-12 bg-[#A79C73] sm:mt-16 lg:mt-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        <div className="mx-auto flex w-full max-w-4xl justify-center border-t border-white/20 pt-5 sm:pt-6">
          <div className="flex w-full flex-col items-center justify-between gap-8 py-5 md:flex-row md:gap-10">

            {/* Social Icons */}
            <div className="flex items-center gap-7">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === "Email" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition duration-300 hover:scale-110 hover:bg-gray-100"
                  >
                    <Icon size={20} strokeWidth={2} />
                  </a>
                );
              })}
            </div>

            {/* Footer Navigation */}
            <nav className="flex flex-wrap items-center justify-center gap-10 lg:gap-14">
              {footerLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-[13px] font-medium uppercase tracking-[0.25em] text-white transition hover:text-gray-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

          </div>

        </div>
      </div>
    </footer>
  );
}