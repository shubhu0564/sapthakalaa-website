import { useState, useEffect, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { BRAND } from "@/lib/brand";
import logo from "@/assets/saptha..jpg";
import { projects } from "@/data/projects";
import { researchPapers } from "@/data/research";

interface NavItem {
  label: string;
  href: string;
}

interface SearchItem {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  category: string;
  description: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Architecture", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Studio Library", href: "/studio/library" },
  { label: "Studio Archive", href: "/studio/archive" },
  { label: "Contact", href: "/contact" },
];

const studioLibraryItems: SearchItem[] = [
  {
    id: "library-01",
    title: "Patterns in Architecture",
    subtitle: "Design Books",
    href: "/studio/library",
    category: "Studio Library",
    description: "A curated collection of architecture books and references.",
  },
  {
    id: "library-02",
    title: "Indian Architecture: Climate and Design",
    subtitle: "Reference Materials",
    href: "/studio/library",
    category: "Studio Library",
    description: "Technical resources for climate-responsive architectural design.",
  },
  {
    id: "library-03",
    title: "Landscape Design Principles",
    subtitle: "Reference Materials",
    href: "/studio/library",
    category: "Studio Library",
    description: "Architectural research focused on landscape and urban ecology.",
  },
];

const studioArchiveItems: SearchItem[] = [
  {
    id: "archive-01",
    title: "Early Studio Works",
    subtitle: "Studio Archive",
    href: "/studio/archive",
    category: "Studio Archive",
    description: "Historical projects that shaped the studio's design philosophy.",
  },
  {
    id: "archive-02",
    title: "Heritage Conservation Studies",
    subtitle: "Studio Archive",
    href: "/studio/archive",
    category: "Studio Archive",
    description: "Conservation research and documentation from early studio work.",
  },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const searchIndex: SearchItem[] = useMemo(() => {
    const pageItems = navItems.map((item) => ({
      id: item.href,
      title: item.label,
      subtitle: "Page",
      href: item.href,
      category: "Navigation",
      description: `Open the ${item.label} page`,
    }));

    const projectItems = projects.map((project) => ({
      id: project.id,
      title: project.title,
      subtitle: project.subtitle,
      href: `/projects/${project.id}`,
      category: "Architecture",
      description: project.description,
    }));

    const researchItems = researchPapers.map((paper) => ({
      id: paper.id,
      title: paper.title,
      subtitle:
        paper.category === "paper"
          ? "Research Paper"
          : paper.category === "thesis"
          ? "Thesis"
          : "Design Study",
      href: "/research",
      category: "Research",
      description: paper.description,
    }));

    return [
      ...pageItems,
      ...projectItems,
      ...researchItems,
      ...studioLibraryItems,
      ...studioArchiveItems,
    ];
  }, []);

  const filteredResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return searchIndex;
    }

    return searchIndex.filter((item) =>
      [item.title, item.subtitle, item.category, item.description].some((field) =>
        field.toLowerCase().includes(query)
      )
    );
  }, [searchIndex, searchQuery]);

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
      setSearchOpen(true);
      return;
    }

    if (filteredResults.length === 1) {
      navigate(filteredResults[0].href);
      setSearchOpen(false);
      setIsOpen(false);
      setSearchQuery("");
      return;
    }

    setSearchOpen(true);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-background/95 backdrop-blur-md" : "bg-background"
      )}
    >
      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300"
          >
            <img src={logo} alt={`${BRAND.name} logo`} className="h-6 w-6 lg:h-8 lg:w-8 object-contain" />
            <span className="hidden sm:block font-serif text-lg lg:text-xl tracking-tight text-foreground font-medium">
              {BRAND.name}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "font-sans text-sm tracking-wide transition-colors duration-300",
                  location.pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}

            <div className="relative">
              <button
                onClick={() => setSearchOpen((prev) => !prev)}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Open search"
              >
                <Search size={18} />
              </button>

              {searchOpen && (
                <div className="absolute right-0 top-full mt-3 w-[340px] rounded-[28px] border border-border bg-card p-4 shadow-2xl shadow-foreground/10">
                  <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
                    <input
                      type="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search architecture, research, library..."
                      className="w-full rounded-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchQuery("");
                      }}
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Close search"
                    >
                      <X size={18} />
                    </button>
                  </form>

                  <div className="mt-4 max-h-72 overflow-y-auto pr-1">
                    {searchQuery.trim().length === 0 ? (
                      <p className="text-sm text-muted-foreground">
                        Type to filter projects, research, studio library, and archive.
                      </p>
                    ) : filteredResults.length > 0 ? (
                      <div className="space-y-2">
                        {filteredResults.slice(0, 6).map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => {
                              navigate(item.href);
                              setSearchOpen(false);
                              setSearchQuery("");
                            }}
                            className="w-full rounded-3xl border border-border bg-background px-4 py-3 text-left text-sm text-foreground transition-colors hover:bg-muted"
                          >
                            <span className="block font-medium">{item.title}</span>
                            <span className="block text-xs text-muted-foreground">
                              {item.subtitle} • {item.category}
                            </span>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">No results found.</p>
                    )}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              <Menu size={20} />
            </button>
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden p-2 -mr-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-sm z-50 transition-all duration-500",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 p-2 text-foreground hover:text-muted-foreground transition-colors"
          aria-label="Close menu"
        >
          <X size={28} />
        </button>

        <div className="h-full overflow-y-auto px-6 py-10">
          <div className="mx-auto flex w-full max-w-xl flex-col gap-8">
            <form onSubmit={handleSearchSubmit} className="w-full">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, research, library..."
                className="w-full rounded-full border border-border bg-card px-4 py-4 text-sm text-foreground outline-none focus:border-accent"
              />
            </form>

            <div className="space-y-3">
              {searchQuery.trim().length > 0 ? (
                filteredResults.length > 0 ? (
                  filteredResults.slice(0, 8).map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        navigate(item.href);
                        setIsOpen(false);
                        setSearchOpen(false);
                        setSearchQuery("");
                      }}
                      className="w-full rounded-3xl border border-border bg-background px-5 py-4 text-left text-sm text-foreground transition-colors hover:bg-muted"
                    >
                      <span className="block font-medium">{item.title}</span>
                      <span className="block text-xs text-muted-foreground">
                        {item.subtitle} • {item.category}
                      </span>
                    </button>
                  ))
                ) : (
                  <div className="rounded-3xl border border-border bg-background px-5 py-6 text-sm text-muted-foreground">
                    No results found.
                  </div>
                )
              ) : (
                <div className="rounded-3xl border border-border bg-background px-5 py-6 text-sm text-muted-foreground">
                  Search across architecture work, research, studio library, and archive.
                </div>
              )}
            </div>

            <div className="space-y-6 pt-6 border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block text-center text-3xl font-serif text-foreground transition-colors hover:text-accent"
                  onClick={() => {
                    setIsOpen(false);
                    setSearchOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
