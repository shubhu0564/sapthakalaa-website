import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* About Section */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about" element={<About />} />
          
          {/* Projects */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          
          {/* Research */}
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          
          {/* Media */}
          <Route path="/media" element={<Media />} />
          
          {/* Academic */}
          <Route path="/academic" element={<Academic />} />
          
          {/* Studio */}
          <Route path="/studio/archive" element={<StudioArchive />} />
          <Route path="/studio/library" element={<StudioLibrary />} />
          <Route path="/studio/project-management" element={<StudioProjectManagement />} />
          
          {/* Practice */}
          <Route path="/practice/people" element={<PracticePeople />} />
          <Route path="/practice/awards" element={<PracticeAwards />} />
          <Route path="/practice/contact" element={<PracticeContact />} />
          
          {/* Legacy Routes */}
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
