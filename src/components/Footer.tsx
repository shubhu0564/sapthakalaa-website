import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
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
    label: "Facebook",
    href: "https://www.facebook.com",
    icon: Facebook,
  },
];

const footerLinks = [
  { label: "Careers", href: "/contact" },
  { label: "Contact", href: "/contact" },
  { label: "Terms & Conditions", href: "/contact" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#A79C73] pt-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-2 flex justify-end">
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-sm uppercase tracking-[0.3em] text-[#FFFFFF] transition-colors duration-300 hover:text-[#F5F1D8]"
          >
            Top <span>↑</span>
          </button>
        </div>

        <div className="flex h-[50px] items-center justify-between border-t border-[#FFFFFF]/10">
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="inline-flex h-8 w-8 items-center justify-center text-[#FFFFFF] transition-colors duration-300 hover:text-[#F5F1D8]"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>

          <nav className="flex items-center gap-4 sm:gap-6">
            {footerLinks.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-xs uppercase tracking-[0.25em] text-[#FFFFFF] transition-colors duration-300 hover:text-[#F5F1D8]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
