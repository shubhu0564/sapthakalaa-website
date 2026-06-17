import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
  variant?: "default" | "featured";
}

export function ProjectCard({ project, index, variant = "default" }: ProjectCardProps) {
  const isFeatured = variant === "featured";

  return (
    <Link
      to={`/projects/${project.id}`}
      className={cn(
        "group block",
        isFeatured && index === 0 && "lg:col-span-2 lg:row-span-2"
      )}
    >
      <article className="h-full">
        {/* Image Container */}
        <div
          className={cn(
            "project-card relative overflow-hidden bg-muted rounded-[1.25rem]",
            isFeatured && index === 0 ? "aspect-[4/3] lg:aspect-[16/10]" : "aspect-[4/3]"
          )}
        >
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover img-zoom"
            loading="lazy"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 lg:p-8 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
            <div className="text-white">
              <span className="text-overline uppercase opacity-80">
                {project.category}
              </span>
              <h3 className="font-serif text-heading-3 mt-2 text-white">
                {project.title}
              </h3>
              <p className="text-caption opacity-80 mt-1 text-white">
                {project.location}
              </p>
            </div>
          </div>

          {/* Arrow Icon */}
          <div className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
            <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
          </div>
        </div>

        {/* Text Content (visible on mobile, hidden on hover for desktop) */}
        <div className="mt-4 lg:mt-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-overline uppercase text-muted-foreground">
                {project.category}
              </span>
              <h3 className="font-serif text-heading-3 mt-1 group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-caption text-muted-foreground mt-1">
                {project.location} — {project.year}
              </p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-300 flex-shrink-0 mt-1" />
          </div>
        </div>
      </article>
    </Link>
  );
}
