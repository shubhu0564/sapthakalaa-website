import { Publication } from "@/data/publications";
import { ExternalLink } from "lucide-react";

interface PublicationCardProps {
  publication: Publication;
}

export function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <div className="group rounded-lg p-6 bg-white border border-border hover:border-accent hover:shadow-lg transition-all duration-300">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-2">
            <span className="inline-block px-2 py-1 bg-muted rounded text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {publication.type}
            </span>
            <h3 className="text-base font-serif font-medium text-foreground group-hover:text-accent transition-colors">
              {publication.title}
            </h3>
          </div>
          {publication.link && (
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>

        <p className="text-sm text-muted-foreground">{publication.description}</p>

        <div className="space-y-2 text-xs text-muted-foreground border-t border-border pt-4">
          <p>
            <span className="font-medium text-foreground">Publication:</span>{" "}
            {publication.publication}
          </p>
          <p>
            <span className="font-medium text-foreground">Author:</span>{" "}
            {publication.author}
          </p>
          <div className="flex items-center justify-between">
            <p>
              <span className="font-medium text-foreground">Date:</span> {publication.date}
            </p>
            <span className="text-xs font-medium text-accent">{publication.year}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
