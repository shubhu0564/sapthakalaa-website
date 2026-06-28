import { Navigation } from "@/components/Navigation";
import { PublicationCard } from "@/components/PublicationCard";
import { publications } from "@/data/publications";
import { useState } from "react";

export default function Publications() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filteredPublications = selectedType
    ? publications.filter((p) => p.type === selectedType)
    : publications;

  const types = ["journal", "conference", "article"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="px-6 lg:px-12 py-12">
          <div className="container mx-auto max-w-4xl">
            <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-6">
              Publications
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our published works appear in leading journals, conferences, and design
              publications. We contribute to the broader discourse on architecture, urbanism,
              and sustainability.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="px-6 lg:px-12 py-8 border-t border-border bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setSelectedType(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedType === null
                    ? "bg-foreground text-background"
                    : "bg-white border border-border hover:border-accent"
                }`}
              >
                All Publications
              </button>
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
                    selectedType === type
                      ? "bg-foreground text-background"
                      : "bg-white border border-border hover:border-accent"
                  }`}
                >
                  {type === "journal"
                    ? "Journals"
                    : type === "conference"
                    ? "Conferences"
                    : "Articles"}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Publications List */}
        <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-4">
              {filteredPublications.length > 0 ? (
                filteredPublications.map((publication) => (
                  <PublicationCard
                    key={publication.id}
                    publication={publication}
                  />
                ))
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground">
                    No publications found in this category.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
