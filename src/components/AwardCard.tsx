import { Award } from "@/data/awards";
import { Award as AwardIcon } from "lucide-react";

interface AwardCardProps {
  award: Award;
}

export function AwardCard({ award }: AwardCardProps) {
  return (
    <div className="group rounded-lg overflow-hidden bg-white border border-border hover:border-accent transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={award.certificateImage}
          alt={award.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 p-3 bg-accent/10 rounded-full">
          <AwardIcon size={24} className="text-accent" />
        </div>
      </div>

      <div className="p-6 space-y-3">
        <div className="space-y-1">
          <h3 className="text-base font-serif font-medium text-foreground group-hover:text-accent transition-colors">
            {award.name}
          </h3>
          <p className="text-xs font-medium uppercase tracking-wide text-accent">
            {award.category}
          </p>
        </div>

        <p className="text-sm text-muted-foreground">{award.description}</p>

        <div className="pt-4 border-t border-border space-y-2 text-xs text-muted-foreground">
          <p>
            <span className="font-medium text-foreground">Project:</span> {award.project}
          </p>
          <p>
            <span className="font-medium text-foreground">Organization:</span>{" "}
            {award.organization}
          </p>
          <p>
            <span className="font-medium text-foreground">Year:</span> {award.year}
          </p>
        </div>
      </div>
    </div>
  );
}
