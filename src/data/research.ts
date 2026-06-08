export interface ResearchPaper {
  id: string;
  title: string;
  author: string;
  year: number;
  category: "thesis" | "study" | "paper";
  description: string;
  pdfUrl?: string;
  imageUrl: string;
}

export const researchPapers: ResearchPaper[] = [
  {
    id: "research-01",
    title: "Sustainable Urban Densification",
    author: "Dr. Omkar Sharma",
    year: 2023,
    category: "thesis",
    description: "Exploring strategies for increasing urban density while maintaining livability and environmental quality",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=700&fit=crop",
    pdfUrl: "#",
  },
  {
    id: "research-02",
    title: "Climate-Responsive Architecture",
    author: "Omkar Design Studio",
    year: 2022,
    category: "study",
    description: "Design studies on passive cooling strategies for tropical climates",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=700&fit=crop",
    pdfUrl: "#",
  },
  {
    id: "research-03",
    title: "Heritage Conservation in Modern Context",
    author: "Team sapthkalaa",
    year: 2021,
    category: "paper",
    description: "Research on integrating historical preservation with contemporary functionality",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=700&fit=crop",
    pdfUrl: "#",
  },
  {
    id: "research-04",
    title: "Landscape Ecology and Urban Planning",
    author: "Dr. Omkar Sharma",
    year: 2020,
    category: "thesis",
    description: "Integrating ecological principles into urban landscape design",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=700&fit=crop",
    pdfUrl: "#",
  },
];

export const researchCategories = [
  { id: "thesis", label: "Thesis Work", description: "Academic thesis projects" },
  { id: "study", label: "Design Studies", description: "Design research and studies" },
  { id: "paper", label: "Research Papers", description: "Published research papers" },
];
