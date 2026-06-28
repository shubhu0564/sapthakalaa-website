import { Navigation } from "@/components/Navigation";
import { AwardCard } from "@/components/AwardCard";
import { awards, awardCategories } from "@/data/awards";
import { useState } from "react";

export default function PracticeAwards() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredAwards = selectedCategory
    ? awards.filter((a) => a.category === selectedCategory)
    : awards;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="px-6 lg:px-12 py-12">
          <div className="container mx-auto max-w-4xl">
            <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-6">
              Awards & Recognition
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our work has been recognized by leading national and international design
              organizations, validating our commitment to excellence and innovation.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="px-6 lg:px-12 py-8 border-t border-border bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === null
                    ? "bg-foreground text-background"
                    : "bg-white border border-border hover:border-accent"
                }`}
              >
                All Awards
              </button>
              {awardCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === cat
                      ? "bg-foreground text-background"
                      : "bg-white border border-border hover:border-accent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Grid */}
        <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAwards.length > 0 ? (
                filteredAwards.map((award) => (
                  <AwardCard key={award.id} award={award} />
                ))
              ) : (
                <div className="col-span-full text-center py-16">
                  <p className="text-muted-foreground">
                    No awards found in this category.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-6 lg:px-12 py-16 bg-muted/50 border-t border-border">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { number: "15+", label: "Awards Won" },
                { number: "20+", label: "Recognized Projects" },
                { number: "5", label: "Countries" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-4xl font-medium text-accent mb-2">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
