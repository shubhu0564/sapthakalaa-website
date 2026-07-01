import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import AboutUs from "./pages/AboutUs";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Research from "./pages/Research";
import Publications from "./pages/Publications";
import Media from "./pages/Media";
import Academic from "./pages/Academic";
import StudioArchive from "./pages/StudioArchive";
import StudioLibrary from "./pages/StudioLibrary";
import StudioProjectManagement from "./pages/StudioProjectManagement";
import PracticePeople from "./pages/PracticePeople";
import PracticeAwards from "./pages/PracticeAwards";
import PracticeContact from "./pages/PracticeContact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full border border-[#A79C73]/30 bg-[#A79C73] px-4 py-2 text-sm font-medium uppercase tracking-[0.25em] text-white shadow-lg transition hover:bg-[#8f825c] md:bottom-6 md:right-6"
      aria-label="Scroll to top"
    >
      Top <span>↑</span>
    </button>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />

          {/* About Section */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about" element={<About />} />

          {/* Projects */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/architecture" element={<Projects />} />
          <Route path="/projects/urbanism" element={<Projects />} />
          <Route path="/projects/landscape" element={<Projects />} />
          <Route path="/projects/conservation" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />

          {/* Research */}
          <Route path="/research" element={<Research />} />
          <Route path="/research/papers" element={<Research />} />
          <Route path="/research/books" element={<Research />} />
          <Route path="/research/videos" element={<Research />} />
          <Route path="/publications" element={<Publications />} />

          {/* Media */}
          <Route path="/media" element={<Media />} />

          {/* Academic */}
          <Route path="/academic" element={<Academic />} />

          {/* Studio */}
          <Route path="/studio/archive" element={<StudioArchive />} />
          <Route path="/studio/communication" element={<StudioLibrary />} />
          <Route path="/studio/photography" element={<StudioLibrary />} />
          <Route path="/studio/model-making" element={<StudioLibrary />} />
          <Route path="/studio/sketches" element={<StudioLibrary />} />
          <Route path="/studio/library" element={<StudioLibrary />} />
          <Route path="/studio/project-management" element={<StudioProjectManagement />} />

          {/* Practice */}
          <Route path="/practice/people" element={<PracticePeople />} />
          <Route path="/practice/achievements" element={<PracticeAwards />} />
          <Route path="/practice/careers" element={<PracticePeople />} />
          <Route path="/practice/contact" element={<PracticeContact />} />

          {/* Legacy Routes */}
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
