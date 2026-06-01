import { Link } from "react-router-dom";
import { ArrowUpRight, Instagram, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/logo.jpg";

const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2C7.6 2 4 5.6 4 10c0 2.5 1.3 4.7 3.2 5.9-.1.4-.6 2.1-.6 2.1s-.2.8-.2 2.1c0 .5.4.9.9.9.9 0 1.6-.6 1.6-1.4 0-.9-.3-1.5-.3-2.2 0-.9.5-1.6 1.2-1.6.6 0 .9.4.9.9 0 .7-.4 1.7-.6 2.6-.2.8.4 1.4 1.1 1.4 1.3 0 2.2-1.2 2.2-2.9 0-1.5-1-2.5-2.4-2.5-.8 0-1.4.4-1.6.8-.3.7-.8 2.1-.9 2.7-.1.4-.4.8-.7.8-.3 0-.6-.3-.6-.8 0-.9.4-1.7.6-2.4.2-.5.9-1.1 1.4-1.1.8 0 1.4.7 1.4 1.6 0 .9-.5 1.4-1 1.4-.3 0-.6-.3-.5-.7.1-.2.3-.5.3-.7 0-.3-.2-.6-.6-.6-1.1 0-1.8 1.2-1.8 2.7 0 1 .3 1.8.9 2.3.1.1.1.2.1.3 0 .3-.2.8-.2 1 .0.2-.1.5-.1.7 0 .2.1.4.4.4 1.4 0 2.4-1.4 2.4-3.4 0-1.8-1.4-3.1-3.3-3.1-2.2 0-3.6 1.6-3.6 3.4 0 .7.3 1.6.8 2.1.1.1.1.2.1.3 0 .3-.1.8-.1 1.2 0 .1.1.2.2.2.3 0 .5-.1.7-.4.7-.8 1-1.8 1-2.9 0-1.3-.8-2.3-2.3-2.3-1.7 0-2.8 1.3-2.8 3 0 1 .4 1.8 1.1 2.4.1.1.1.2.1.3 0 .5-.2 1-.7 1.3-.3.2-.7.3-1.1.3-.1 0-.2 0-.3 0-.2 0-.4-.2-.4-.4 0-.1 0-.2.1-.3 1.5-1.4 2.4-3.4 2.4-5.6C4 5.1 7.6 2 12 2Z" />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={logo} 
                alt="sapthakalaa logo" 
                className="h-12 w-12 object-contain invert"
              />
              <div>
                <h2 className="font-serif text-xl lg:text-2xl font-medium">
                  sapthakalaa
                </h2>
                <p className="text-xs text-primary-foreground/60 uppercase tracking-widest">
                  Environmental Design, Planning & Management
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-sm">
              Designing spaces that respond to environment, culture, and human experience. 
              Based in Mumbai, working across India.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-widest text-primary-foreground/50 mb-6">
              Explore
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Architecture", href: "/projects" },
                { label: "About", href: "/about" },
                { label: "Experience", href: "/experience" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
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
                href="mailto:connect.sapthakalaa@gmail.com"
                className="hover:text-primary-foreground transition-colors duration-300"
              >
                connect.sapthakalaa@gmail.com
              </a>
              <a
                href="tel:+918928236838"
                className="hover:text-primary-foreground transition-colors duration-300"
              >
                +91 8928236838
              </a>
              <span>Mumbai, Maharashtra, India</span>
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
          <span>© {currentYear} sapthakalaa Environmental Design, Planning & Management. All rights reserved.</span>
          <span>Architecture • Planning • Management</span>
        </div>
      </div>
    </footer>
  );
}
