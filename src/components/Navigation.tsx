import { useState, useEffect, useMemo, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Menu, X, Search } from "lucide-react";
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

const navigationSections: Array<{
  id: string;
  label: string;
  href: string;
  image: string;
  items?: Array<{ label: string; href: string }>;
}> = [
  {
    id: "about",
    label: "About Us",
    href: "/about",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "projects",
    label: "Projects",
    href: "/projects",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
    items: [
      { label: "Architecture", href: "/projects/architecture" },
      { label: "Urbanism", href: "/projects/urbanism" },
      { label: "Landscape", href: "/projects/landscape" },
      { label: "Conservation", href: "/projects/conservation" },
    ],
  },
  {
    id: "research",
    label: "Research & Publication",
    href: "/research",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    items: [
      { label: "Papers", href: "/research/papers" },
      { label: "Books", href: "/research/books" },
      { label: "Videos", href: "/research/videos" },
    ],
  },
  {
    id: "studio",
    label: "Studio",
    href: "/studio/archive",
    image:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200&q=80",
    items: [
      { label: "Archive", href: "/studio/archive" },
      { label: "Communication", href: "/studio/communication" },
      { label: "Photography", href: "/studio/photography" },
      { label: "Model Making", href: "/studio/model-making" },
      { label: "Sketches", href: "/studio/sketches" },
    ],
  },
  {
    id: "practice",
    label: "Practice",
    href: "/practice/people",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
    items: [
      { label: "People", href: "/practice/people" },
      { label: "Achievements", href: "/practice/achievements" },
      { label: "Careers", href: "/practice/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
] as const;

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
  const [openSection, setOpenSection] = useState<string>("projects");
  const [hoveredSection, setHoveredSection] = useState<string>("projects");
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

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

  const featuredSection =
    navigationSections.find((section) => section.id === (hoveredSection || openSection)) ||
    navigationSections[0];

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

  const isPathActive = useCallback(
    (href: string) => {
      if (href === "/") {
        return location.pathname === "/";
      }

      return location.pathname === href || location.pathname.startsWith(`${href}/`);
    },
    [location.pathname]
  );

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

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const matchedSection = navigationSections.find((section) =>
      section.items?.some((item) => isPathActive(item.href))
    );

    if (matchedSection) {
      setOpenSection(matchedSection.id);
      setHoveredSection(matchedSection.id);
    }
  }, [isOpen, location.pathname, isPathActive]);

  const toggleSection = (sectionId: string) => {
    setOpenSection((current) => (current === sectionId ? "" : sectionId));
  };

  const handleItemNavigate = (href: string) => {
    navigate(href);
    setIsOpen(false);
    setSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#FFFFFF] border-none shadow-none"
      )}
    >
      <nav className="container mx-auto px-6 lg:px-12 border-none">
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

          {!isHomePage ? (
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
          ) : (
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setSearchOpen((prev) => !prev)}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Open search"
              >
                <Search size={18} />
              </button>
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="p-2 text-foreground"
                aria-label="Toggle menu"
              >
                <Menu size={20} />
              </button>
            </div>
          )}

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setSearchOpen((prev) => !prev)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Open search"
            >
              <Search size={20} />
            </button>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-x-0 top-16 z-[60] h-[calc(100vh-4rem)] bg-[#F8F7F4] lg:top-20 lg:h-[calc(100vh-5rem)]"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#211911]/10 bg-[#F8F7F4] text-[#211911] transition-opacity duration-300 hover:opacity-80 md:right-6 md:top-6"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>

            <div className="grid h-full grid-cols-1 md:grid-cols-[45%_55%]">
              <div className="relative hidden h-full overflow-hidden md:block">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={featuredSection.id}
                    src={featuredSection.image}
                    alt={featuredSection.label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="h-full w-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-r from-[#F8F7F4]/10 to-[#F8F7F4]/0" />
              </div>

              <div className="flex h-full flex-col overflow-y-auto px-6 pb-12 pt-16 md:px-10 md:pt-16 lg:px-16">
                <div className="mb-10 md:mb-14">
                  <p className="text-xs uppercase tracking-[0.5em] text-[#211911]/50">Menu</p>
                </div>

                <div className="space-y-3">
                  {navigationSections.map((section) => {
                    const isOpenSection = openSection === section.id;
                    const hasItems = Boolean(section.items?.length);
                    const isSectionActive = isPathActive(section.href) ||
                      (section.items?.some((item) => isPathActive(item.href)) ?? false);

                    return (
                      <div key={section.id} className="border-b border-[#211911]/8 pb-3 last:border-b-0">
                        {hasItems ? (
                          <button
                            type="button"
                            onClick={() => toggleSection(section.id)}
                            onMouseEnter={() => setHoveredSection(section.id)}
                            onMouseLeave={() => setHoveredSection(openSection || "projects")}
                            className="flex w-full items-center justify-between py-2 text-left"
                          >
                            <span
                              className={cn(
                                "text-2xl font-light tracking-wide transition-colors duration-300 md:text-3xl",
                                isSectionActive ? "text-[#211911]" : "text-[#211911]/60"
                              )}
                            >
                              {section.label}
                            </span>
                            <ChevronRight
                              className={cn(
                                "h-5 w-5 text-[#211911]/60 transition-transform duration-300",
                                isOpenSection && "rotate-90"
                              )}
                            />
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleItemNavigate(section.href)}
                            onMouseEnter={() => setHoveredSection(section.id)}
                            onMouseLeave={() => setHoveredSection(openSection || "projects")}
                            className="flex w-full items-center justify-between py-2 text-left"
                          >
                            <span
                              className={cn(
                                "text-2xl font-light tracking-wide transition-colors duration-300 md:text-3xl",
                                isSectionActive ? "text-[#211911]" : "text-[#211911]/60"
                              )}
                            >
                              {section.label}
                            </span>
                          </button>
                        )}

                        <AnimatePresence initial={false}>
                          {hasItems && isOpenSection && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="space-y-2 pb-2 pt-2">
                                {section.items?.map((item) => (
                                  <button
                                    key={item.href}
                                    type="button"
                                    onClick={() => handleItemNavigate(item.href)}
                                    className={cn(
                                      "block w-full py-2 text-left text-base md:text-lg",
                                      isPathActive(item.href)
                                        ? "text-[#211911]"
                                        : "text-[#211911]/60 hover:text-[#211911]"
                                    )}
                                  >
                                    <span className="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:scale-x-0 after:bg-[#211911] after:transition-transform after:duration-300 hover:after:scale-x-100">
                                      {item.label}
                                    </span>
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
