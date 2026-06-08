import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="px-6 lg:px-12 py-12">
          <div className="container mx-auto max-w-4xl">
            <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-6">
              About sapthkalaa
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              sapthkalaa is an architecture, planning and design practice founded by Dr.
              Omkar Sharma. The studio believes in the power of thoughtful design to
              transform environments and enhance quality of life.
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="px-6 lg:px-12 py-16 border-t border-border">
          <div className="container mx-auto max-w-4xl space-y-12">
            <div>
              <h2 className="font-serif text-2xl font-medium mb-4">
                About the Studio
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2015, sapthkalaa represents a commitment to environmental
                design, planning, and management. The studio works across multiple scales—
                from individual buildings to urban masterplans—always with a focus on
                sustainability, cultural sensitivity, and timeless design.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium mb-4">
                Vision & Philosophy
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We believe architecture should:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Respond authentically to its context and culture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Integrate environmental sustainability from inception</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Create spaces that nurture community and connection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Balance tradition with innovation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Serve people and planet equally</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium mb-4">
                Founder / Principal Architect
              </h2>
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="font-medium text-lg mb-3">Dr. Omkar Sharma</h3>
                <p className="text-muted-foreground leading-relaxed">
                  With over 25 years of experience in architecture and urban planning, Dr.
                  Sharma has led numerous award-winning projects across India and South Asia.
                  His work bridges traditional wisdom with contemporary design practices,
                  always seeking solutions that are both beautiful and sustainable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Overview */}
        <section className="px-6 lg:px-12 py-16 bg-muted/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-medium mb-6">Team Overview</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our multidisciplinary team brings together architects, landscape designers,
              urban planners, and conservators, each bringing unique expertise and vision.
              Together, we create spaces that matter.
            </p>
            <a
              href="/practice/people"
              className="inline-block px-6 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors rounded"
            >
              Meet the Team →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
