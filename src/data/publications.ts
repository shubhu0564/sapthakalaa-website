export interface Publication {
  id: string;
  title: string;
  type: "journal" | "conference" | "article";
  publication: string;
  author: string;
  date: string;
  year: number;
  description: string;
  link?: string;
}

export const publications: Publication[] = [
  {
    id: "pub-01",
    title: "Adaptive Reuse Strategies for Urban Heritage",
    type: "journal",
    publication: "Journal of Urban Design",
    author: "Dr. Omkar Sharma, Team sapthakalaa",
    date: "March 2023",
    year: 2023,
    description: "Research on integrating modern functionality into heritage structures",
    link: "#",
  },
  {
    id: "pub-02",
    title: "Biophilic Design in High-Density Urban Environments",
    type: "conference",
    publication: "International Urban Design Conference",
    author: "Omkar Design Studio",
    date: "September 2022",
    year: 2022,
    description: "Conference paper on incorporating nature into dense urban spaces",
    link: "#",
  },
  {
    id: "pub-03",
    title: "Water Management in Climate-Resilient Cities",
    type: "article",
    publication: "Architecture Today Magazine",
    author: "Team sapthakalaa",
    date: "June 2022",
    year: 2022,
    description: "Article exploring sustainable water systems in urban design",
    link: "#",
  },
  {
    id: "pub-04",
    title: "Vernacular Architecture and Contemporary Design",
    type: "journal",
    publication: "South Asian Architecture Review",
    author: "Dr. Omkar Sharma",
    date: "November 2021",
    year: 2021,
    description: "Study on blending traditional building practices with modern architecture",
    link: "#",
  },
  {
    id: "pub-05",
    title: "Parametric Design in Landscape Architecture",
    type: "conference",
    publication: "Digital Architecture Symposium",
    author: "Omkar Design Studio",
    date: "April 2021",
    year: 2021,
    description: "Presentation on using computational design in landscape planning",
    link: "#",
  },
];

export const publicationTypes = [
  { id: "journal", label: "Journal Publications", description: "Peer-reviewed journal articles" },
  { id: "conference", label: "Conference Papers", description: "Conference presentations and papers" },
  { id: "article", label: "Articles", description: "Magazine and online articles" },
];
