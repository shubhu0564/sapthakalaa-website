import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ResearchCard } from "@/components/ResearchCard";
import { researchPapers } from "@/data/research";
import { useState } from "react";

export default function Research() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPapers = selectedCategory
    ? researchPapers.filter((p) => p.category === selectedCategory)
    : researchPapers;

  const categories = ["thesis", "study", "paper"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="px-6 lg:px-12 py-12">
          <div className="container mx-auto max-w-4xl">
            <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-6">
              Research
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our research explores fundamental questions in architecture, urbanism, and
              environmental design. Through theoretical and practical investigations, we
              develop knowledge that informs our practice.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="px-6 lg:px-12 py-8 border-t border-border bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === null
                    ? "bg-foreground text-background"
                    : "bg-white border border-border hover:border-accent"
                }`}
              >
                All Research
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
                    selectedCategory === cat
                      ? "bg-foreground text-background"
                      : "bg-white border border-border hover:border-accent"
                  }`}
                >
                  {cat === "thesis"
                    ? "Thesis Work"
                    : cat === "study"
                    ? "Design Studies"
                    : "Papers"}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Research Grid */}
        <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPapers.map((paper) => (
                <ResearchCard key={paper.id} paper={paper} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
