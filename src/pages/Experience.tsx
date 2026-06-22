import { Navigation } from "@/components/Navigation";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Award, Briefcase, Trophy } from "lucide-react";

const experiences = [
  {
    type: "internship",
    title: "Architecture Intern",
    organization: "Design Studio Mumbai",
    period: "Jun 2022 – Aug 2022",
    description:
      "Contributed to residential and commercial projects, developing detailed drawings and 3D visualizations. Collaborated with senior architects on client presentations and site documentation.",
  },
  {
    type: "internship",
    title: "Design Intern",
    organization: "Urban Planning Consultancy",
    period: "Dec 2021 – Feb 2022",
    description:
      "Assisted in master planning projects for mixed-use developments. Gained experience in urban design principles, zoning analysis, and stakeholder coordination.",
  },
];

const achievements = [
  {
    type: "competition",
    title: "National Architecture Design Competition",
    organization: "Council of Architecture",
    year: "2022",
    description: "Finalist – Sustainable Housing Design Challenge",
  },
  {
    type: "award",
    title: "Academic Excellence Award",
    organization: "Mumbai University",
    year: "2021",
    description: "Recognition for outstanding design thesis proposal",
  },
  {
    type: "competition",
    title: "NASA India Design Competition",
    organization: "National Association of Students of Architecture",
    year: "2020",
    description: "Participated in national-level design competition",
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="pt-32 lg:pt-40 pb-section-sm">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeader
            overline="Career"
            title="Experience & Achievements"
            description="Professional internships, academic recognitions, and competition participations that have shaped my architectural journey."
          />
        </div>
      </section>

      {/* Experience Section */}
      <section className="pb-section">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Experience */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-8">
                  <Briefcase className="w-5 h-5 text-accent" />
                  <h2 className="font-serif text-heading-2">Professional Experience</h2>
                </div>
              </ScrollReveal>

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <ScrollReveal key={exp.title} delay={index * 100}>
                    <article className="border-l-2 border-border pl-8 relative">
                      <span className="absolute left-0 top-0 w-3 h-3 bg-accent rounded-full -translate-x-[7px]" />
                      <span className="text-overline uppercase text-muted-foreground">
                        {exp.period}
                      </span>
                      <h3 className="font-serif text-heading-3 mt-2">
                        {exp.title}
                      </h3>
                      <p className="text-accent font-medium mt-1">
                        {exp.organization}
                      </p>
                      <p className="text-muted-foreground mt-4">
                        {exp.description}
                      </p>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="lg:col-span-5">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-8">
                  <Trophy className="w-5 h-5 text-accent" />
                  <h2 className="font-serif text-heading-2">Achievements</h2>
                </div>
              </ScrollReveal>

              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <ScrollReveal key={achievement.title} delay={index * 100}>
                    <article className="p-6 bg-card border border-border">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                          {achievement.type === "award" ? (
                            <Award className="w-5 h-5 text-accent" />
                          ) : (
                            <Trophy className="w-5 h-5 text-accent" />
                          )}
                        </div>
                        <div>
                          <span className="text-overline uppercase text-muted-foreground">
                            {achievement.year}
                          </span>
                          <h3 className="font-medium mt-1">
                            {achievement.title}
                          </h3>
                          <p className="text-sm text-accent mt-1">
                            {achievement.organization}
                          </p>
                          <p className="text-sm text-muted-foreground mt-2">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Skills */}
      <section className="py-section bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-overline uppercase text-muted-foreground">
                Professional Development
              </span>
              <h2 className="font-serif text-heading-2 mt-4">
                Continuous Learning
              </h2>
              <div className="section-divider mt-8" />
              <div className="mt-8 space-y-4 text-body-lg text-muted-foreground">
                <p>
                  Beyond formal education and internships, I actively engage with 
                  the broader architectural community through workshops, webinars, 
                  and self-directed learning in emerging technologies.
                </p>
                <p>
                  Current areas of exploration include parametric design, 
                  sustainable building systems, and computational design tools 
                  that enhance the architectural workflow.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Experience;
