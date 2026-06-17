import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { projects } from "@/data/projects";
import { BRAND } from "@/lib/brand";
import logo from "@/assets/saptha..jpg";
import featuredImage from "@/assets/fp.jpg";

const Index = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const featuredRef = useRef<HTMLElement | null>(null);

  const scrollToContent = () => {
    featuredRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - HCP Style */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img
              src={logo}
              alt={`${BRAND.name} logo`}
              className="mx-auto h-24 w-24 lg:h-32 lg:w-32 object-contain"
            />
          </div>

          {/* Studio Name */}
          <h1 
            className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            {BRAND.name}
          </h1>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </section>

      {/* Featured Intro Section */}
      <ScrollReveal>
        <section
          ref={featuredRef}
          className="relative overflow-hidden py-16 lg:py-24"
        >
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[70%_30%] lg:items-stretch">
              <div className="overflow-hidden rounded-[2rem] lg:rounded-[3rem]">
                <img
                  src={featuredImage}
                  alt="Featured architecture"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex items-center">
                <div className="text-foreground">
                  <p className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.92]">
                    Environmental
                  </p>
                  <p className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.92] mt-4">
                    Design, Planning &
                  </p>
                  <p className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.92] mt-4">
                    Management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Projects Grid - HCP Style */}
      <section id="projects-section" className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-background shadow-sm"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-serif text-2xl lg:text-3xl text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/80 uppercase tracking-widest">
                    {project.location}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                sapthakalaa's practice is informed by deep environmental research. 
                Our design work blends environmental planning, management, and climate-responsive architecture. 
                We believe in creating spaces that respond to their context while serving human needs.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-10 text-sm uppercase tracking-widest text-foreground hover:text-muted-foreground transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Architecture",
              description: "From concept to completion, designing spaces that inspire and endure.",
              href: "/projects",
            },
            {
              title: "Environmental Design",
              description: "Climate-responsive solutions that harmonize with their surroundings.",
              href: "/projects",
            },
            {
              title: "Research",
              description: "Deep site studies and environmental analysis informing every project.",
              href: "/about",
            },
            {
              title: "Visualization",
              description: "Bringing architectural visions to life through models and renders.",
              href: "/projects",
            },
          ].map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 100}>
              <Link
                to={service.href}
                className="group block p-8 lg:p-12 border-b md:border-r border-border last:border-r-0 hover:bg-card transition-colors duration-300"
              >
                <h3 className="font-serif text-xl mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ArrowRight className="w-4 h-4 mt-6 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl lg:text-4xl mb-6">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-10">
              Open to collaborations, projects, and opportunities. 
              Based in Mumbai, available across India.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm uppercase tracking-widest hover:bg-accent transition-colors duration-300"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

