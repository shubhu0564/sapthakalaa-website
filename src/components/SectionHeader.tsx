import { cn } from "@/lib/utils";
import { ScrollReveal } from "./ScrollReveal";

interface SectionHeaderProps {
  overline?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  overline,
  title,
  description,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <ScrollReveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {overline && (
        <span className="text-overline uppercase text-muted-foreground block mb-4">
          {overline}
        </span>
      )}
      <h2 className="font-serif text-heading-1 text-balance">{title}</h2>
      {description && (
        <p className="mt-6 text-body-lg text-muted-foreground max-w-2xl">
          {description}
        </p>
      )}
      <div
        className={cn(
          "section-divider mt-8",
          align === "center" && "mx-auto"
        )}
      />
    </ScrollReveal>
  );
}
