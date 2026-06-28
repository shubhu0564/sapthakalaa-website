import { Navigation } from "@/components/Navigation";
import { Youtube, Instagram, ExternalLink } from "lucide-react";

export default function Media() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="px-6 lg:px-12 py-12">
          <div className="container mx-auto max-w-4xl">
            <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-6">
              Media
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Follow our latest work, behind-the-scenes content, and design insights across
              our social media channels.
            </p>
          </div>
        </section>

        {/* Media Channels */}
        <section className="px-6 lg:px-12 py-16">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* YouTube */}
              <div className="rounded-lg overflow-hidden bg-white border border-border hover:border-accent transition-all duration-300 hover:shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                  <Youtube size={80} className="text-white/80" />
                </div>
                <div className="p-8 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif font-medium">YouTube</h3>
                    <p className="text-muted-foreground">
                      Explore our latest design projects, timelapse videos, and architectural
                      documentaries.
                    </p>
                  </div>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent font-medium hover:text-foreground transition-colors"
                  >
                    Visit Channel
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="rounded-lg overflow-hidden bg-white border border-border hover:border-accent transition-all duration-300 hover:shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center">
                  <Instagram size={80} className="text-white/80" />
                </div>
                <div className="p-8 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif font-medium">Instagram</h3>
                    <p className="text-muted-foreground">
                      Visual stories of our projects, design process, and studio culture.
                    </p>
                  </div>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent font-medium hover:text-foreground transition-colors"
                  >
                    Follow Us
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-6 lg:px-12 py-16 bg-muted/50 border-t border-border">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-2xl font-medium mb-4">
              Stay Connected
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our channels to get updates on new projects, events, and
              architectural insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-foreground text-background font-medium rounded hover:bg-accent transition-colors inline-flex items-center justify-center gap-2"
              >
                <Youtube size={20} />
                Subscribe on YouTube
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors font-medium rounded inline-flex items-center justify-center gap-2"
              >
                <Instagram size={20} />
                Follow on Instagram
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
