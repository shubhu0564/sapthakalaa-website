import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function StudioProjectManagement() {
  const stages = [
    {
      number: "01",
      title: "Concept & Planning",
      description: "Initial site analysis, stakeholder engagement, and conceptual development",
      activities: [
        "Site surveys and analysis",
        "Client briefing sessions",
        "Conceptual sketches",
        "Feasibility studies",
      ],
    },
    {
      number: "02",
      title: "Design Development",
      description: "Detailed design refined through iterations and feedback",
      activities: [
        "Design drawings and models",
        "Material specifications",
        "Technical coordination",
        "Regulatory compliance",
      ],
    },
    {
      number: "03",
      title: "Documentation",
      description: "Comprehensive construction documents and tender specifications",
      activities: [
        "Working drawings",
        "BOM preparation",
        "Cost estimation",
        "Tender documentation",
      ],
    },
    {
      number: "04",
      title: "Execution & Supervision",
      description: "On-site monitoring and quality assurance during construction",
      activities: [
        "Site meetings",
        "Quality inspections",
        "Variation management",
        "Progress documentation",
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
              Project Management
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our systematic approach to project delivery ensures quality, sustainability,
              and client satisfaction at every stage.
            </p>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-medium mb-12">Design & Delivery Process</h2>
            <div className="space-y-8">
              {stages.map((stage, index) => (
                <div key={stage.number}>
                  <div className="flex gap-6 md:gap-8">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center font-serif text-xl font-medium text-accent">
                        {stage.number}
                      </div>
                      {index < stages.length - 1 && (
                        <div className="w-1 h-24 bg-accent/20 my-4" />
                      )}
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="font-serif text-xl font-medium mb-2">{stage.title}</h3>
                      <p className="text-muted-foreground mb-4">{stage.description}</p>
                      <div className="space-y-2">
                        {stage.activities.map((activity) => (
                          <div key={activity} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                            <span>{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Diagrams */}
        <section className="px-6 lg:px-12 py-16 bg-muted/50 border-t border-border">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-medium mb-8">Key Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Collaboration",
                  desc: "Close coordination with clients, consultants, and contractors",
                },
                {
                  title: "Transparency",
                  desc: "Clear communication and documentation at every stage",
                },
                {
                  title: "Quality",
                  desc: "Rigorous oversight ensuring design intent and standards",
                },
                {
                  title: "Efficiency",
                  desc: "Optimized timelines and resource management",
                },
              ].map((principle) => (
                <div key={principle.title} className="bg-white rounded-lg p-6 border border-border">
                  <h3 className="font-medium text-foreground mb-2">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground">{principle.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
