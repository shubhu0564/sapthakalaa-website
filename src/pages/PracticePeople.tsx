import { Navigation } from "@/components/Navigation";
import { TeamCard } from "@/components/TeamCard";
import { teamMembers } from "@/data/team";

export default function PracticePeople() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="px-6 lg:px-12 py-12">
          <div className="container mx-auto max-w-4xl">
            <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-6">
              Our People
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Meet the talented architects, designers, and consultants who bring our vision
              to life. Each team member brings unique expertise and perspective to our work.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="px-6 lg:px-12 py-16 bg-muted/50 border-t border-border">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-medium mb-8">Studio Culture</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                We believe that the best design comes from diverse perspectives, collaborative
                thinking, and a shared commitment to excellence. Our studio is built on
                principles of intellectual rigor, creative exploration, and mutual respect.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                {[
                  {
                    title: "Learning",
                    desc: "Continuous professional development and knowledge sharing",
                  },
                  {
                    title: "Innovation",
                    desc: "Exploring new ideas and challenging conventional thinking",
                  },
                  {
                    title: "Excellence",
                    desc: "Commitment to the highest standards in our work",
                  },
                ].map((value) => (
                  <div key={value.title} className="text-center">
                    <h3 className="font-medium text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Careers CTA */}
        <section className="px-6 lg:px-12 py-16 border-t border-border">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-2xl font-medium mb-4">Join Our Team</h2>
            <p className="text-muted-foreground mb-8">
              We're always looking for talented architects, designers, and specialists who
              share our passion for thoughtful design.
            </p>
            <a
              href="/practice/contact"
              className="inline-block px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors rounded font-medium"
            >
              Get in Touch →
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
