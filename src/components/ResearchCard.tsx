import { ResearchPaper } from "@/data/research";
import { Download } from "lucide-react";

interface ResearchCardProps {
  paper: ResearchPaper;
}

export function ResearchCard({ paper }: ResearchCardProps) {
  return (
    <div className="group rounded-lg overflow-hidden bg-white border border-border hover:border-accent transition-all duration-300 hover:shadow-lg">
      <div className="aspect-[3/4] overflow-hidden bg-muted relative">
        <img
          src={paper.imageUrl}
          alt={paper.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {paper.pdfUrl && (
          <div className="absolute top-4 right-4 p-3 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Download size={20} className="text-accent" />
          </div>
        )}
      </div>

      <div className="p-6 space-y-3">
        <div className="space-y-1">
          <span className="inline-block px-2 py-1 bg-muted rounded text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {paper.category}
          </span>
          <h3 className="text-base font-serif font-medium text-foreground group-hover:text-accent transition-colors line-clamp-2 mt-2">
            {paper.title}
          </h3>
        </div>

        <div className="space-y-1 text-xs text-muted-foreground">
          <p>
            <span className="font-medium text-foreground">Author:</span> {paper.author}
          </p>
          <p>
            <span className="font-medium text-foreground">Year:</span> {paper.year}
          </p>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-3">
          {paper.description}
        </p>

        {paper.pdfUrl && (
          <a
            href={paper.pdfUrl}
            download
            className="inline-flex items-center gap-2 text-xs font-medium text-accent hover:text-foreground transition-colors pt-2"
          >
            <Download size={14} />
            Download PDF
          </a>
        )}
      </div>
    </div>
  );
}
