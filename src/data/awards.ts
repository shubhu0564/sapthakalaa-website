export interface Award {
  id: string;
  name: string;
  category: string;
  year: number;
  project: string;
  organization: string;
  description: string;
  certificateImage?: string;
}

export const awards: Award[] = [
  {
    id: "award-01",
    name: "Best Architectural Design",
    category: "Architecture",
    year: 2023,
    project: "Downtown Revitalization",
    organization: "Indian Institute of Architects",
    description: "Recognition for innovative urban design and sustainable planning",
    certificateImage: "https://images.unsplash.com/photo-1540575467063-178f50002cbc?w=800&h=600&fit=crop",
  },
  {
    id: "award-02",
    name: "Landscape Excellence Award",
    category: "Landscape Design",
    year: 2023,
    project: "Green Spine Park",
    organization: "International Landscape Federation",
    description: "Award for outstanding landscape design and environmental integration",
    certificateImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  },
  {
    id: "award-03",
    name: "Heritage Conservation Prize",
    category: "Conservation",
    year: 2022,
    project: "Historic Fort Restoration",
    organization: "UNESCO Heritage Foundation",
    description: "Recognition for exemplary conservation and restoration work",
    certificateImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  },
  {
    id: "award-04",
    name: "Emerging Design Firm Award",
    category: "Studio",
    year: 2022,
    project: "Overall Studio Portfolio",
    organization: "Design Innovation Summit",
    description: "Recognition as a leading emerging design firm in Asia",
    certificateImage: "https://images.unsplash.com/photo-1540575467063-178f50002cbc?w=800&h=600&fit=crop",
  },
  {
    id: "award-05",
    name: "Sustainability Achievement Award",
    category: "Sustainability",
    year: 2021,
    project: "Smart City Initiative",
    organization: "Global Sustainability Council",
    description: "Award for innovative sustainable design practices",
    certificateImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  },
];

export const awardCategories = [
  "Architecture",
  "Landscape Design",
  "Conservation",
  "Sustainability",
  "Urban Planning",
  "Studio",
];
