import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import heroCenterImage from "@/assets/sapthaklaa name.jpg";
import featuredImage from "@/assets/ARCHITECTURE.jpg";
import innovationParkImage from "@/assets/URBANISM.jpg";
import publicLibraryImage from "@/assets/RESEARCH & PUBLICATION.jpg";
import environmentalImage from "@/assets/ENV DESIGN PLANNING MANAGEMENT.jpg";

const editorialSections = [
  {
    title: "Architecture",
    description:
      "Sapthakalaa approaches architecture as a dialogue between people, culture, climate, and place. Our work ranges from residential, institutional, and public projects to adaptive reuse and landscape-integrated developments. Through context-sensitive design, we create environments that are functional, sustainable, and deeply connected to their surroundings.",
    image: featuredImage,
    href: "/projects",
  },
  {
    title: "Urbanism",
    description:
      "Sapthakalaa's urbanism projects span urban design, planning, landscape strategies, and community-based development. We work across neighbourhoods, public spaces, settlements, and cultural landscapes, integrating environmental systems, social needs, and local identities to create resilient and inclusive places for present and future generations.",
    image: innovationParkImage,
    href: "/projects/urbanism",
  },
  {
    title: "Research & Publications",
    description:
      "At Sapthakalaa, research extends beyond documentation to become a tool for understanding places and shaping their future. Through interdisciplinary inquiry, publications, and knowledge-sharing, we explore emerging challenges and opportunities in architecture, urbanism, culture, ecology, and environmental resilience.",
    image: publicLibraryImage,
    href: "/research",
  },
];

const Index = () => {
  const scrollToEnvironmental = () => {
    document.getElementById("environmental-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen" style={{ background: "#ffffff", backgroundColor: "#ffffff" }}>
      <Navigation />

      {/* Hero Section - HCP Style */}
      <section
        className="relative -mt-16 flex min-h-screen items-center justify-center lg:-mt-20"
        style={{ background: "#ffffff", backgroundColor: "#ffffff" }}
      >
        <div className="animate-fade-in flex h-full w-full items-center justify-center px-6">
          <img
            src={heroCenterImage}
            alt="Sapthakalaa"
            className="h-auto max-w-[500px] object-contain sm:max-w-[560px] lg:max-w-[600px]"
          />
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToEnvironmental}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </section>

      {/* New Environmental Section Below Hero */}
      <section
        id="environmental-section"
        className="w-full"
        style={{ background: "#ffffff", backgroundColor: "#ffffff" }}
      >
        <div className="mx-auto grid min-h-[320px] max-w-7xl items-center gap-6 px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1.6fr_0.95fr] lg:px-10 lg:py-14">
          <div className="overflow-hidden">
            <img
              src={environmentalImage}
              alt="Environmental Design, Planning & Management"
              className="h-[280px] w-full object-cover sm:h-[340px] lg:h-[420px]"
            />
          </div>
          <div className="flex items-center justify-start">
            <div className="max-w-[30rem] text-left">
              <h2 className="font-serif text-2xl font-bold leading-tight tracking-[-0.02em] text-[#211911] sm:text-3xl lg:text-[2rem]">
                Environmental Design, Planning & Management
              </h2>
              <p className="mt-5 text-base leading-7 text-[#211911] sm:text-[1rem] lg:text-[1.05rem]">
                At Sapthakalaa, we believe design has the power to reconnect people, culture, and ecology. Through an approach centred on climate, culture, and community resilience, we integrate architecture, urbanism, and environmental thinking to shape places that are rooted in context, responsive to change, and meaningful to the communities they serve. Our work aspires to create lasting value while contributing to a more resilient and sustainable future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Sections */}
      <section id="homepage-sections" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="space-y-10 sm:space-y-12 lg:space-y-14">
            {editorialSections.map((section, index) => (
              <Link
                key={section.title}
                to={section.href}
                className="group block cursor-pointer"
                id={index === 0 ? "architecture-section" : undefined}
              >
                <div className="grid items-center gap-6 md:gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(320px,0.95fr)]">
                  <div className="overflow-hidden">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="h-[280px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[340px] lg:h-[420px]"
                    />
                  </div>

                  <div className="flex items-center">
                    <div className="max-w-[30rem]">
                      <h3 className="font-serif text-2xl font-bold leading-tight tracking-[-0.02em] text-[#211911] sm:text-3xl lg:text-[2rem]">
                        {section.title}
                      </h3>
                      <p className="mt-4 text-base leading-7 text-[#211911] sm:text-[1rem] lg:text-[1.05rem]">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;