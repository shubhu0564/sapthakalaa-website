import { Navigation } from "@/components/Navigation";
import { researchPapers } from "@/data/research";
import { Download, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Research() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const paper = researchPapers[0];

  const categories = [
    { id: null, label: "All Research" },
    { id: "thesis", label: "Thesis Work" },
    { id: "study", label: "Design Studies" },
    { id: "paper", label: "Papers" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 lg:pt-32">
        <section className="px-6 py-10 sm:py-14 lg:px-12 lg:py-16">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:gap-10">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                Research
              </p>
              <h1 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
                Research
              </h1>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
                Explore the studio’s research work, publications, and academic investigations.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.label}
                  type="button"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-background text-foreground hover:border-foreground/30"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {selectedCategory === "paper" && paper ? (
              <div className="overflow-hidden rounded-[2rem] border border-border bg-white p-4 shadow-[0_20px_70px_-30px_rgba(15,23,42,0.25)] sm:p-6 lg:p-8">
                <div className="overflow-hidden rounded-[1.5rem] border border-border bg-muted/20">
                  <iframe
                    src={paper.pdfUrl}
                    title={`${paper.title} PDF`}
                    className="h-[60vh] min-h-[420px] w-full md:h-[70vh] lg:h-[78vh]"
                  />
                </div>

                <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                      Research Paper
                    </p>
                    <h2 className="mt-3 font-serif text-3xl font-medium text-foreground sm:text-4xl">
                      {paper.title}
                    </h2>
                    <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Author: {paper.author}</span>
                      <span>•</span>
                      <span>Year: {paper.year}</span>
                    </div>
                    <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
                      {paper.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                    {paper.pdfUrl && (
                      <>
                        <a
                          href={paper.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/15 bg-background px-5 py-3 text-sm font-medium text-foreground transition hover:border-foreground hover:bg-foreground hover:text-background"
                        >
                          <ExternalLink size={16} />
                          View PDF
                        </a>
                        <a
                          href={paper.pdfUrl}
                          download
                          className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/15 bg-background px-5 py-3 text-sm font-medium text-foreground transition hover:border-foreground hover:bg-foreground hover:text-background"
                        >
                          <Download size={16} />
                          Download PDF
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ) : selectedCategory && selectedCategory !== "paper" ? (
              <div className="rounded-[2rem] border border-dashed border-border bg-muted/20 px-8 py-16 text-center text-muted-foreground">
                No research items are available in this category yet.
              </div>
            ) : (
              <div className="rounded-[2rem] border border-dashed border-border bg-muted/20 px-8 py-16 text-center text-muted-foreground">
                Select a category to view the available research work.
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
