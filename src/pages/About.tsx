import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeader } from "@/components/SectionHeader";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const skills = [
  {
    category: "Design Software",
    items: ["AutoCAD", "Revit", "SketchUp", "Rhino 3D"],
  },
  {
    category: "Visualization",
    items: ["Lumion", "Enscape", "V-Ray", "Twinmotion"],
  },
  {
    category: "Graphics",
    items: ["Photoshop", "Illustrator", "InDesign", "Figma"],
  },
  {
    category: "Traditional",
    items: ["Hand Sketching", "Physical Models", "Technical Drawing", "Watercolor"],
  },
];

const philosophy = [
  {
    title: "Human-Centered Design",
    description:
      "We create spaces that enhance everyday experiences by prioritizing comfort, functionality, and user well-being.",
  },
  {
    title: "Climate-Responsive Architecture",
    description:
      "Our designs respond intelligently to local climate conditions, maximizing natural light, ventilation, and energy efficiency.",
  },
  {
    title: "Contextual Design",
    description:
      "Every project is shaped by its surroundings, cultural identity, and environmental characteristics, creating architecture that belongs to its place.",
  },
  {
    title: "Sustainable Thinking",
    description:
      "We embrace responsible design practices that reduce environmental impact while delivering long-term value.",
  },
];

const expertise = [
  "Architectural Design",
  "Interior Design",
  "Residential Projects",
  "Commercial Projects",
  "Institutional Buildings",
  "Landscape Design",
  "Urban Planning",
  "Sustainable Design Solutions",
  "3D Visualization & Presentation",
  "Construction Documentation",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-section">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <ScrollReveal className="lg:col-span-5">
              <div className="aspect-[3/4] bg-muted overflow-hidden sticky top-32 rounded-3xl">
                <img
                  src="/portrait.jpg"
                  alt="Studio portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>

            <div className="lg:col-span-7 space-y-12">
              <ScrollReveal>
                <span className="text-overline uppercase text-muted-foreground">
                  About the Studio
                </span>
                <h1 className="font-serif text-heading-1 mt-4">
                  sapthkalaa Environmental Design, Planning & Management
                </h1>
                <p className="font-serif text-heading-3 text-muted-foreground max-w-2xl mt-6">
                  sapthkalaa is a multidisciplinary architectural and environmental design practice committed to creating thoughtful, sustainable, and timeless spaces.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="space-y-6 text-body-lg text-muted-foreground max-w-3xl">
                  <p>
                    Founded by <strong>AR.RD Omkar Madhav</strong>, the studio is driven by a passion for architecture that balances innovation, functionality, and environmental responsibility.
                  </p>
                  <p>
                    Based in Maharashtra, India, sapthkalaa works across residential, commercial, institutional, hospitality, and landscape projects. Every design is rooted in context, culture, climate, and human experience.
                  </p>
                  <p>
                    We believe architecture is more than building—it is the art of shaping experiences, improving quality of life, and creating environments that inspire future generations.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-section bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeader
            overline="Founder & Principal Architect"
            title="AR.RD Omkar Madhav"
            description="Founder and creative force behind sapthkalaa, leading every project with hands-on design leadership and technical precision."
          />

          <div className="mt-12 space-y-6 text-body-lg text-muted-foreground max-w-4xl">
            <p>
              AR.RD Omkar Madhav established sapthkalaa Environmental Design, Planning & Management with a vision to create architecture that harmonizes aesthetics, functionality, and environmental consciousness.
            </p>
            <p>
              His design philosophy is rooted in understanding the relationship between people, space, and nature. Successful architecture emerges from a careful balance of form, materiality, climate responsiveness, and user experience.
            </p>
            <p>
              Through sapthkalaa, Omkar leads every project with a hands-on approach, ensuring that each design reflects the highest standards of creativity, precision, and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-section bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeader
            overline="Our Design Philosophy"
            title="Principles that shape every project"
            description="We apply thoughtful, climate-responsive, and context-driven strategies to create meaningful architecture."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {philosophy.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="rounded-3xl border border-border bg-card p-8 h-full">
                  <span className="font-serif text-heading-4 text-accent">0{index + 1}</span>
                  <h3 className="font-serif text-heading-3 mt-4 mb-4 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-body text-muted-foreground">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-section bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeader
            overline="Expertise"
            title="A wide range of architectural services"
            description="We deliver tailored design solutions for a variety of project types, combining technical strength with creative vision."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item) => (
              <ScrollReveal key={item}>
                <div className="rounded-3xl border border-border bg-background p-6 text-body text-muted-foreground">
                  {item}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-section bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeader
            overline="Skills & Tools"
            title="The technical toolkit behind our work"
            description="A combination of digital software and traditional craft supports every stage of the design process."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <ScrollReveal key={skill.category} delay={index * 100}>
                <div className="p-8 bg-card border border-border h-full">
                  <h3 className="font-serif text-heading-3 mb-6 text-foreground">
                    {skill.category}
                  </h3>
                  <ul className="space-y-3 text-body text-muted-foreground">
                    {skill.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section bg-background">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-heading-1">
              Interested in working together?
            </h2>
            <div className="section-divider mx-auto mt-8" />
            <div className="mt-10">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-foreground text-background px-10 py-5 text-sm uppercase tracking-widest hover:bg-accent transition-colors duration-300"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
