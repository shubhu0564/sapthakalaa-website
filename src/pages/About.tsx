import { Navigation } from "@/components/Navigation";
import { ScrollReveal } from "@/components/ScrollReveal";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="bg-[#F7F6F3] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <ScrollReveal>
                <h1 className="font-serif text-[48px] font-medium leading-tight text-[#211911] sm:text-[52px] lg:text-[56px]">
                  About Us
                </h1>
              </ScrollReveal>

              <ScrollReveal className="mt-8">
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src="/portrait.jpg"
                    alt="Studio portrait"
                    className="h-full w-full object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="space-y-7 text-[18px] leading-[1.9] text-[#211911] sm:text-[19px] lg:max-w-[750px] lg:text-[20px]">
                  <p className="text-justify">
                    <strong>Sapthakalaa Environmental Design, Planning and Management</strong> is an interdisciplinary practice focused on architecture, urbanism, research and environmental design. The practice explores the relationship between people, place, culture and ecology to create meaningful, resilient and context-responsive environments.
                  </p>
                  <p className="text-justify">
                    Founded by <strong>RD Omkar Madhav</strong>, with the belief that design is a tool for shaping both physical spaces and social futures, Sapthakalaa works across scales ranging from buildings and public spaces to settlements, landscapes and regional systems. The practice engages with architecture, urban design, planning, heritage, research, documentation and strategic development projects.
                  </p>
                  <p className="text-justify">
                    Our approach begins with a deep understanding of context. We seek to uncover the cultural, environmental and spatial forces that shape places and transform these insights into thoughtful design responses. Every project is viewed as an opportunity to balance functionality, sustainability, identity and long-term value.
                  </p>
                  <p className="text-justify">
                    At <strong>Sapthakalaa</strong>, research and design are closely connected. Through observation, mapping, documentation and engagement with communities, we strive to develop solutions that are grounded in local realities while addressing contemporary challenges.
                  </p>
                  <p className="text-justify">
                    The practice is committed to creating environments that are environmentally responsible, socially inclusive and culturally rooted. Through collaborative thinking and rigorous inquiry, Sapthakalaa aims to contribute to the evolving discourse of architecture, urbanism and sustainable development.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;

