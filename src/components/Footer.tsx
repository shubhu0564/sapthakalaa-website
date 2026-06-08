import { Link } from "react-router-dom";
import { ArrowUpRight, Instagram, Linkedin, Youtube } from "lucide-react";
import { BRAND } from "@/lib/brand";
import logo from "@/assets/saptha..jpg";

const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2C7.6 2 4 5.6 4 10c0 2.5 1.3 4.7 3.2 5.9-.1.4-.6 2.1-.6 2.1s-.2.8-.2 2.1c0 .5.4.9.9.9.9 0 1.6-.6 1.6-1.4 0-.9-.3-1.5-.3-2.2 0-.9.5-1.6 1.2-1.6.6 0 .9.4.9.9 0 .7-.4 1.7-.6 2.6-.2.8.4 1.4 1.1 1.4 1.3 0 2.2-1.2 2.2-2.9 0-1.5-1-2.5-2.4-2.5-.8 0-1.4.4-1.6.8-.3.7-.8 2.1-.9 2.7-.1.4-.4.8-.7.8-.3 0-.6-.3-.6-.8 0-.9.4-1.7.6-2.4.2-.5.9-1.1 1.4-1.1.8 0 1.4.7 1.4 1.6 0 .9-.5 1.4-1 1.4-.3 0-.6-.3-.5-.7.1-.2.3-.5.3-.7 0-.3-.2-.6-.6-.6-1.1 0-1.8 1.2-1.8 2.7 0 1 .3 1.8.9 2.3.1.1.1.2.1.3 0 .3-.2.8-.2 1 .0.2-.1.5-.1.7 0 .2.1.4.4.4 1.4 0 2.4-1.4 2.4-3.4 0-1.8-1.4-3.1-3.3-3.1-2.2 0-3.6 1.6-3.6 3.4 0 .7.3 1.6.8 2.1.1.1.1.2.1.3 0 .3-.1.8-.1 1.2 0 .1.1.2.2.2.3 0 .5-.1.7-.4.7-.8 1-1.8 1-2.9 0-1.3-.8-2.3-2.3-2.3-1.7 0-2.8 1.3-2.8 3 0 1 .4 1.8 1.1 2.4.1.1.1.2.1.3 0 .5-.2 1-.7 1.3-.3.2-.7.3-1.1.3-.1 0-.2 0-.3 0-.2 0-.4-.2-.4-.4 0-.1 0-.2.1-.3 1.5-1.4 2.4-3.4 2.4-5.6C4 5.1 7.6 2 12 2Z" />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={logo}
                alt={`${BRAND.name} logo`}
                className="h-8 w-8 object-contain"
              />
              <div>
                <h2 className="font-serif text-xl lg:text-2xl font-medium">
                  {BRAND.name}
                </h2>
                <p className="text-xs text-footer-foreground/60 uppercase tracking-widest">
                  {BRAND.tagline}
                </p>
              </div>
            </div>
            <p className="text-footer-foreground/70 text-sm leading-relaxed max-w-sm">
              {BRAND.description} Based in {BRAND.location.split(",")[0]}, working across India.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-widest text-footer-foreground/50 mb-6">
              Explore
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Architecture", href: "/projects" },
                { label: "Research", href: "/research" },
                { label: "Studio Library", href: "/studio/library" },
                { label: "Studio Archive", href: "/studio/archive" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm text-footer-foreground/80 hover:text-footer-foreground transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-widest text-primary-foreground/50 mb-6">
              Contact
            </h3>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/80">
              <a
                href={`mailto:${BRAND.email}`}
                className="hover:text-primary-foreground transition-colors duration-300"
              >
                {BRAND.email}
              </a>
              <a
                href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
                className="hover:text-primary-foreground transition-colors duration-300"
              >
                {BRAND.phone}
              </a>
              <span>{BRAND.location}</span>
            </div>
          </div>

          {/* Social */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-widest text-primary-foreground/50 mb-6">
              Connect
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/ar-rd-omkar-madhav-595a4b297?utm_source=share_via&utm_content=profile&utm_medium=member_android",
                  icon: Linkedin,
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/saptha7799/",
                  icon: Instagram,
                },
                {
                  label: "YouTube",
                  href: "https://www.youtube.com/@saptha7799",
                  icon: Youtube,
                },
                {
                  label: "Pinterest",
                  href: "https://pin.it/5XmsvTXWL",
                  icon: PinterestIcon,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/20 bg-white text-primary-foreground hover:border-primary-foreground hover:text-primary-foreground transition-colors duration-300"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
          <span>© {currentYear} {BRAND.name} {BRAND.tagline}. All rights reserved.</span>
          <span>Architecture • Planning • Management</span>
        </div>
      </div>
    </footer>
  );
}
