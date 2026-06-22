import innovationPark from "@/assets/innovation-park.jpg";
import innovationParkPlan from "@/assets/00_gf plan.jpg";
import innovationParkFirstFloor from "@/assets/01_1st plan.jpg";
import innovationParkFp from "@/assets/fp.jpg";
import innovationPark12 from "@/assets/12.jpg";
import innovationPark19 from "@/assets/19.jpg";
import innovationPark23 from "@/assets/23.jpg";
import innovationPark24 from "@/assets/24.jpg";
import innovationPark25 from "@/assets/25.jpg";
import innovationPark30 from "@/assets/30.jpg";
import publicLibrary from "@/assets/public-library.jpg";
import virologyCenter from "@/assets/virology-center.jpg";
import massHousing from "@/assets/mass-housing.jpg";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  year: string;
  semester?: string;
  category: string;
  siteArea?: string;
  builtUpArea?: string;
  description: string;
  concept: string;
  thumbnail: string;
  images: string[];
  featured: boolean;
  info?: Array<{
    label: string;
    value: string;
  }>;
}

export const projects: Project[] = [
  {
    id: "innovation-park",
    title: "Innovation Park",
    subtitle: "Tech Hub & Research Campus",
    location: "Indore, Madhya Pradesh",
    year: "2022",
    semester: "8th Semester",
    category: "Institutional",
    siteArea: "25,000 sq.m",
    builtUpArea: "18,500 sq.m",
    description: "Innovation Park is envisioned as an integrated Exhibition, Convention, Information Technology Park, and Start-up Hub that addresses the growing need for world-class infrastructure in emerging Indian cities.\n\nIndia currently lacks integrated international-standard facilities capable of meeting the requirements of global exhibition and convention operators in terms of space, flexibility, accessibility, transportation, and supporting infrastructure. While a few organized convention centers exist in major metropolitan cities such as Mumbai, Delhi, and Chennai, similar facilities are largely absent in rapidly developing cities like Indore.\n\nThe project explores the potential of creating a comprehensive Innovation Park that combines exhibition spaces, convention facilities, IT offices, research environments, and start-up incubation spaces within a single development. Beyond serving as an event venue, the proposal positions the Innovation Park as an important catalyst for urban development and economic growth.\n\nThe design focuses on creating a world-class destination while respecting the regional architectural identity of the site. The proposal integrates sustainable planning principles, public spaces, advanced infrastructure, and international-quality amenities to support innovation, entrepreneurship, business, and knowledge exchange.\n\nThe expected outcome of the project is to strengthen the regional start-up ecosystem, encourage business development, expand the MICE (Meetings, Incentives, Conferences and Exhibitions) industry, promote tourism, and create stronger connections between international industries and local communities. Ultimately, the Innovation Park contributes to economic development and supports India's long-term growth in business, technology, and innovation.",
    concept: "The design emerges from the intersection of geometric clarity and organic flow. Central courtyards create microclimates while connecting various program elements. The stepped massing responds to Indore's climate, maximizing shaded areas and natural ventilation.",
    thumbnail: innovationPark,
    images: [
      innovationPark,
      innovationParkPlan,
      innovationParkFirstFloor,
      innovationParkFp,
      innovationPark12,
      innovationPark19,
      innovationPark23,
      innovationPark24,
      innovationPark25,
      innovationPark30,
    ],
    featured: true,
    info: [
      { label: "Client", value: "Indore Development Authority (IDA)" },
      { label: "Location", value: "Village Awalkhed, Igatpuri, Maharashtra" },
      { label: "Year", value: "2009–2011" },
      { label: "Area", value: "8,500 sq ft" },
      { label: "Structural Consultant", value: "Ruikar & Associates" },
      { label: "Photography", value: "Atul Kanetkar Photography" },
      { label: "Project Team", value: "Prachi Nikam, Amruta Bhagwat, Cressida Fonseca, Khushru Irani" },
    ],
  },
  {
    id: "public-library",
    title: "Public Library",
    subtitle: "Urban Knowledge Hub",
    location: "Pune, Maharashtra",
    year: "2021",
    semester: "6th Semester",
    category: "Cultural",
    siteArea: "4,500 sq.m",
    builtUpArea: "6,200 sq.m",
    description: "A contemporary public library that reimagines the traditional reading space as a vibrant urban living room. The design integrates digital resources, traditional collections, and community gathering spaces within an architecturally expressive envelope.",
    concept: "Stacked volumes create intimate reading niches while a central atrium floods the interior with natural light. The façade's parametric screen modulates daylight and provides visual privacy while maintaining connection to the street.",
    thumbnail: publicLibrary,
    images: [publicLibrary, publicLibrary, publicLibrary],
    featured: true,
  },
  {
    id: "virology-center",
    title: "Institute of Virology",
    subtitle: "Advanced Research Facility",
    location: "Nashik, Maharashtra",
    year: "2022",
    semester: "7th Semester",
    category: "Healthcare / Research",
    siteArea: "12,000 sq.m",
    builtUpArea: "8,800 sq.m",
    description: "A state-of-the-art virology research center designed with stringent biosafety protocols while maintaining human-centric work environments. The facility houses BSL-2 and BSL-3 laboratories, administrative wings, and staff amenities.",
    concept: "The design separates public and restricted zones through a clear zoning strategy. Natural elements are integrated wherever safety permits, with internal courtyards providing respite for researchers. The building envelope responds to solar orientation, minimizing heat gain on laboratory wings.",
    thumbnail: virologyCenter,
    images: [virologyCenter, virologyCenter, virologyCenter],
    featured: true,
  },
  {
    id: "mass-housing",
    title: "Mass Housing",
    subtitle: "Affordable Urban Living",
    location: "Pune, Maharashtra",
    year: "2021",
    semester: "5th Semester",
    category: "Residential",
    siteArea: "8,000 sq.m",
    builtUpArea: "22,000 sq.m",
    description: "A socially conscious housing development that challenges the monotony of typical mass housing. The design provides diverse unit typologies, shared community spaces, and integrated green infrastructure while maintaining economic viability.",
    concept: "Cluster housing creates semi-private courtyards that encourage community interaction. Staggered building masses ensure adequate light and ventilation for all units. Ground floors integrate retail and community facilities, activating the street edge.",
    thumbnail: massHousing,
    images: [massHousing, massHousing, massHousing],
    featured: true,
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
