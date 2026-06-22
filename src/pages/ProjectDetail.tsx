import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Layers, Maximize } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getProjectById, projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id || "");
  const [activeSlide, setActiveSlide] = useState(0);
  const galleryImages = project?.images?.filter(Boolean) ?? [];
  const descriptionParagraphs = project?.description.split("\n\n").filter(Boolean) ?? [];

  const handlePrev = () => {
    setActiveSlide((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setActiveSlide((prev) => Math.min(prev + 1, galleryImages.length - 1));
  };

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // Get adjacent projects for navigation
  const currentIndex = projects.findIndex((p) => p.id === id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-24 lg:pt-32">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Back Link */}
          <ScrollReveal>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300 mb-12"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              All Projects
            </Link>
          </ScrollReveal>

          {/* Project Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <ScrollReveal className="lg:col-span-8">
              <span className="text-overline uppercase text-muted-foreground">
                {project.category}
              </span>
              <h1 className="font-serif text-heading-1 mt-4">{project.title}</h1>
              <p className="font-serif text-heading-3 text-muted-foreground mt-2">
                {project.subtitle}
              </p>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-4" delay={200}>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{project.year} {project.semester && `— ${project.semester}`}</span>
                </div>
                {project.siteArea && (
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Layers className="w-4 h-4" />
                    <span>Site: {project.siteArea}</span>
                  </div>
                )}
                {project.builtUpArea && (
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Maximize className="w-4 h-4" />
                    <span>Built-up: {project.builtUpArea}</span>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="mt-12 lg:mt-16">
        <ScrollReveal>
          <div className="aspect-[21/9] bg-muted overflow-hidden">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Project Content */}
      <section className="py-section">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-16">
              {/* Description */}
              <ScrollReveal>
                <h2 className="font-serif text-heading-2 mb-6">Project Overview</h2>
                <div className="space-y-6 text-body-lg text-muted-foreground leading-relaxed">
                  {descriptionParagraphs.map((paragraph, index) => (
                    <p key={index} className="text-justify">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </ScrollReveal>

              {/* Concept */}
              <ScrollReveal>
                <h2 className="font-serif text-heading-2 mb-6">Design Concept</h2>
                <p className="text-body-lg text-muted-foreground leading-relaxed">
                  {project.concept}
                </p>
              </ScrollReveal>

              {/* Image Gallery */}
              <ScrollReveal>
                <h2 className="font-serif text-heading-2 mb-8">Drawings & Visuals</h2>
                <div className="relative -mx-6 lg:-mx-12">
                  <div className="relative overflow-hidden bg-black min-h-[55vh] sm:min-h-[65vh]">
                    <div className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-2 text-sm text-white backdrop-blur-sm">
                      {galleryImages.length > 0 ? `${activeSlide + 1} / ${galleryImages.length}` : "0 / 0"}
                    </div>

                    {galleryImages.length > 0 ? (
                      <>
                        <img
                          src={galleryImages[activeSlide]}
                          alt={`${project.title} - View ${activeSlide + 1}`}
                          className="block w-full h-full object-cover"
                        />

                        <button
                          type="button"
                          onClick={handlePrev}
                          disabled={activeSlide === 0}
                          className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/40 text-white transition hover:bg-black/60 disabled:cursor-not-allowed disabled:opacity-40"
                          aria-label="Previous image"
                        >
                          <ArrowLeft className="h-5 w-5" />
                        </button>

                        <button
                          type="button"
                          onClick={handleNext}
                          disabled={activeSlide === galleryImages.length - 1}
                          className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/40 text-white transition hover:bg-black/60 disabled:cursor-not-allowed disabled:opacity-40"
                          aria-label="Next image"
                        >
                          <ArrowRight className="h-5 w-5" />
                        </button>
                      </>
                    ) : (
                      <div className="flex h-full items-center justify-center px-6 text-sm text-white">
                        No gallery images available.
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <ScrollReveal>
                <div className="sticky top-32 space-y-8">
                  <div className="p-8 bg-card border border-border">
                    <h3 className="font-serif text-heading-3 mb-6">Project Details</h3>
                    <dl className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
                      <div>
                        <dt className="text-muted-foreground">Type</dt>
                        <dd className="mt-1 font-medium">{project.category}</dd>
                      </div>
                      <div>
                        <dt className="text-muted-foreground">Location</dt>
                        <dd className="mt-1 font-medium">{project.location}</dd>
                      </div>
                      <div>
                        <dt className="text-muted-foreground">Year</dt>
                        <dd className="mt-1 font-medium">{project.year}</dd>
                      </div>
                      {project.semester && (
                        <div>
                          <dt className="text-muted-foreground">Academic</dt>
                          <dd className="mt-1 font-medium">{project.semester}</dd>
                        </div>
                      )}
                      {project.siteArea && (
                        <div>
                          <dt className="text-muted-foreground">Site Area</dt>
                          <dd className="mt-1 font-medium">{project.siteArea}</dd>
                        </div>
                      )}
                      {project.builtUpArea && (
                        <div>
                          <dt className="text-muted-foreground">Built-up Area</dt>
                          <dd className="mt-1 font-medium">{project.builtUpArea}</dd>
                        </div>
                      )}
                    </dl>

                    {project.info && (
                      <div className="mt-6 grid grid-cols-1 gap-4 border-t border-border pt-6 sm:grid-cols-2">
                        {project.info.map((item) => (
                          <div key={item.label}>
                            <dt className="text-muted-foreground">{item.label}</dt>
                            <dd className="mt-1 font-medium">{item.value}</dd>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            </aside>
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="py-section-sm border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-8">
            {prevProject ? (
              <Link
                to={`/projects/${prevProject.id}`}
                className="group"
              >
                <span className="text-overline uppercase text-muted-foreground flex items-center gap-2">
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform duration-300" />
                  Previous
                </span>
                <h3 className="font-serif text-heading-3 mt-2 group-hover:text-accent transition-colors duration-300">
                  {prevProject.title}
                </h3>
              </Link>
            ) : (
              <div />
            )}
            
            {nextProject && (
              <Link
                to={`/projects/${nextProject.id}`}
                className="group text-right"
              >
                <span className="text-overline uppercase text-muted-foreground flex items-center gap-2 justify-end">
                  Next
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <h3 className="font-serif text-heading-3 mt-2 group-hover:text-accent transition-colors duration-300">
                  {nextProject.title}
                </h3>
              </Link>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
