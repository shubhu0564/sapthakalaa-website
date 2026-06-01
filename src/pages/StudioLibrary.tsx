import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BookOpen, BookMarked } from "lucide-react";

export default function StudioLibrary() {
  const resources = [
    {
      category: "Design Books",
      items: [
        "Patterns in Architecture - Christopher Alexander",
        "The Eyes of the Skin - Juhani Pallasmaa",
        "Thinking Architecture - Peter Zumthor",
        "Design of Cities - Edmund Bacon",
      ],
    },
    {
      category: "Reference Materials",
      items: [
        "Indian Architecture: Climate and Design",
        "Urban Planning Studies - Indian Cities",
        "Landscape Design Principles",
        "Conservation Guidelines for Heritage",
      ],
    },
    {
      category: "Publications",
      items: [
        "Architectural Record Magazine",
        "Journal of Urban Design",
        "Places Journal",
        "Landscape Architecture Magazine",
      ],
    },
    {
      category: "Research Documents",
      items: [
        "Climate Data Analysis for Regional Design",
        "Sustainable Material Studies",
        "Cultural Mapping of Urban Spaces",
        "Ecological Assessment Reports",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="px-6 lg:px-12 py-12">
          <div className="container mx-auto max-w-4xl">
            <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-6">
              Studio Library
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our curated collection of books, design references, publications, and research
              materials that inform our design practice.
            </p>
          </div>
        </section>

        {/* Library Content */}
        <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resources.map((section) => (
                <div
                  key={section.category}
                  className="rounded-lg border border-border p-8 hover:border-accent transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <BookOpen className="text-accent" size={24} />
                    <h3 className="font-serif text-xl font-medium">{section.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="text-accent font-bold mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 lg:px-12 py-16 bg-muted/50 border-t border-border">
          <div className="container mx-auto max-w-4xl text-center">
            <BookMarked className="text-accent mx-auto mb-6" size={48} />
            <h2 className="font-serif text-2xl font-medium mb-4">
              Knowledge Shapes Design
            </h2>
            <p className="text-muted-foreground mb-8">
              Our library is constantly growing. We invest in understanding contemporary
              and historical design practices to create more thoughtful solutions.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
