import { Navigation } from "@/components/Navigation";
import { Archive } from "lucide-react";

export default function StudioArchive() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="px-6 lg:px-12 py-12">
          <div className="container mx-auto max-w-4xl">
            <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-6">
              Studio Archive
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A collection of historical works and previous studio projects that shaped our
              design philosophy.
            </p>
          </div>
        </section>

        {/* Archive Content */}
        <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto max-w-4xl space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1487189377518-eefc06f6b752?w=600&h=400&fit=crop"
                  alt="Archive project"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-serif text-2xl font-medium mb-4">Early Studio Works</h3>
                <p className="text-muted-foreground mb-4">
                  From 2015 to 2018, the studio focused on foundational projects that
                  established our design principles. These works demonstrate our commitment
                  to contextual design and environmental sensitivity.
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Residential Projects in Tier-2 Cities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Small-Scale Institutional Buildings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Heritage Documentation Studies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Landscape and Public Space Interventions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-muted/50 p-8 rounded-lg">
              <h3 className="font-serif text-xl font-medium mb-4">Project Categories</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Residential",
                    desc: "Thoughtful homes designed for families and communities",
                  },
                  {
                    title: "Institutional",
                    desc: "Schools, libraries, and community centers",
                  },
                  {
                    title: "Commercial",
                    desc: "Offices, retail, and mixed-use developments",
                  },
                  {
                    title: "Heritage",
                    desc: "Documentation and conservation studies",
                  },
                ].map((cat) => (
                  <div key={cat.title}>
                    <h4 className="font-medium text-foreground mb-2">{cat.title}</h4>
                    <p className="text-sm text-muted-foreground">{cat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
