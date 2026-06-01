import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.jpg";

const navItems = [
  { label: "About Us", href: "/about-us" },
  {
    label: "Projects",
    href: "/projects",
    submenu: [
      { label: "Archive", href: "/projects?category=archive" },
      { label: "Urbanization", href: "/projects?category=urbanization" },
      { label: "Landscape", href: "/projects?category=landscape" },
      { label: "Conservation", href: "/projects?category=conservation" },
    ],
  },
  {
    label: "Research",
    href: "/research",
    submenu: [
      { label: "Research Papers", href: "/research" },
      { label: "Publications", href: "/publications" },
    ],
  },
  { label: "Media", href: "/media" },
  { label: "Academic", href: "/academic" },
  {
    label: "Studio",
    href: "/studio",
    submenu: [
      { label: "Archive", href: "/studio/archive" },
      { label: "Library", href: "/studio/library" },
      { label: "Project Management", href: "/studio/project-management" },
    ],
  },
  {
    label: "Practice",
    href: "/practice",
    submenu: [
      { label: "People", href: "/practice/people" },
      { label: "Awards", href: "/practice/awards" },
      { label: "Contact", href: "/practice/contact" },
    ],
  },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const handleMouseEnter = (label: string) => {
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      return;
    }
    window.alert(`Search: ${searchQuery.trim()}`);
    setSearchQuery("");
    setSearchOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md"
          : "bg-background"
      )}
    >
      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-70 transition-opacity duration-300"
          >
            <img
              src={logo}
              alt="sapthakalaa logo"
              className="h-10 w-10 lg:h-12 lg:w-12 object-contain"
            />
            <div className="hidden sm:block">
              <span className="font-serif text-lg lg:text-xl tracking-tight text-foreground font-medium">
                sapthakalaa
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={() => handleMouseLeave()}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "font-sans text-sm tracking-wide transition-colors duration-300 flex items-center gap-1",
                    location.pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                  {item.submenu && (
                    <ChevronDown
                      size={16}
                      className={cn(
                        "transition-transform duration-300",
                        openDropdown === item.label && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.submenu && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-none shadow-lg border border-border z-50 animate-in fade-in slide-in-from-top-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.href}
                        to={subitem.href}
                        className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-all first:rounded-t-lg last:rounded-b-lg"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {searchOpen ? (
              <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="h-12 rounded-full border border-border bg-background px-4 text-sm text-foreground outline-none focus:border-accent"
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close search"
                >
                  <X size={18} />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Open search"
              >
                <Search size={18} />
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              <Menu size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 -mr-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-40 transition-all duration-500",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 p-2 text-foreground hover:text-muted-foreground transition-colors"
          aria-label="Close menu"
        >
          <X size={28} />
        </button>

        <div className="h-full flex flex-col items-center justify-center px-4">
          <form onSubmit={handleSearchSubmit} className="mb-10 w-full max-w-md">
            <div className="relative">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search the site..."
                className="w-full rounded-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
              />
            </div>
          </form>

          <div className="flex flex-col items-center gap-8">
            {navItems.map((item, index) => (
              <div key={item.href} className="text-center">
                <Link
                  to={item.href}
                  className={cn(
                    "font-serif text-3xl lg:text-4xl transition-all duration-500 block",
                    isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                    location.pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  style={{ transitionDelay: isOpen ? `${index * 100}ms` : "0ms" }}
                >
                  {item.label}
                </Link>
                {item.submenu && isOpen && (
                  <div className="mt-6 space-y-3">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.href}
                        to={subitem.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer in Menu */}
          <div
            className={cn(
              "absolute bottom-12 text-center transition-all duration-500",
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
            style={{ transitionDelay: isOpen ? "400ms" : "0ms" }}
          >
            <p className="text-sm text-muted-foreground">
              sapthakalaa Environmental Design, Planning & Management
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              Mumbai, India
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
