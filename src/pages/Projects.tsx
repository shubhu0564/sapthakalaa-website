import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/projects";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState<string | null>(selectedCategory);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "archive", label: "Archive" },
    { id: "urbanization", label: "Urbanization" },
    { id: "landscape", label: "Landscape" },
    { id: "conservation", label: "Conservation" },
  ];

  const filteredProjects =
    activeCategory && activeCategory !== "all"
      ? projects.filter((p) => p.category === activeCategory)
      : projects;

  const handleCategoryChange = (category: string | null) => {
    setActiveCategory(category === "all" ? null : category);
    if (category === "all" || !category) {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="pt-32 lg:pt-40 pb-section-sm">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeader
            overline="Portfolio"
            title="Selected Work"
            description="A comprehensive collection of architectural projects showcasing our design philosophy across multiple scales and typologies."
          />
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 lg:px-12 border-b border-border">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id === "all" ? null : cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  (!activeCategory && cat.id === "all") || activeCategory === cat.id
                    ? "bg-foreground text-background"
                    : "bg-white border border-border hover:border-accent text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-section">
        <div className="container mx-auto px-6 lg:px-12">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {filteredProjects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 100}>
                  <ProjectCard project={project} index={index} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
