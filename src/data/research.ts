import researchPdf from "@/assets/Omkar Dawale_Urban Commons_Banganga Tank (1).pdf";
import researchImage from "@/assets/RESEARCH & PUBLICATION.jpg";

export interface ResearchPaper {
  id: string;
  title: string;
  subtitle: string;
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
    title: "Reading the Urban Commons – The Paradox of Governance: State vs Community in the Case of Banganga",
    subtitle: "",
    author: "Omkar Dawale",
    year: 2025,
    category: "paper",
    description:
      "This paper examines the tension between state-led governance and community-led stewardship in the case of Banganga, revealing how urban commons are negotiated, contested, and preserved in rapidly changing city environments.",
    imageUrl: researchImage,
    pdfUrl: researchPdf,
  },
];

export const researchCategories = [
  { id: "paper", label: "Research Papers", description: "Published research papers" },
];

