import { Navigation } from "@/components/Navigation";
import { BookOpen } from "lucide-react";

export default function Academic() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="px-6 lg:px-12 py-12">
          <div className="container mx-auto max-w-4xl">
            <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-6">
              Academic
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our academic projects and collaborations with educational institutions.
            </p>
          </div>
        </section>

        {/* Coming Soon State */}
        <section className="px-6 lg:px-12 py-24">
          <div className="container mx-auto max-w-2xl text-center">
            <div className="mb-8 flex justify-center">
              <div className="p-6 bg-muted rounded-full">
                <BookOpen size={80} className="text-accent" />
              </div>
            </div>

            <h2 className="font-serif text-3xl font-medium mb-4">
              Academic Projects Coming Soon
            </h2>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              We are currently curating our academic projects, student work, and educational
              collaborations. This section will showcase our commitment to design education
              and research partnerships.
            </p>

            <div className="bg-muted/50 rounded-lg p-8 space-y-4">
              <h3 className="font-medium text-foreground">What to Expect</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  Student thesis projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  Design workshop outcomes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  Educational collaborations
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  Mentorship programs
                </li>
              </ul>
            </div>

            <p className="text-sm text-muted-foreground mt-8">
              Contact us for inquiries about academic partnerships and collaborations.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
