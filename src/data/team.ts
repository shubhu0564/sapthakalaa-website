export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  expertise: string[];
  email?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "team-01",
    name: "Dr. Omkar Sharma",
    role: "Principal Architect & Founder",
    bio: "Visionary architect with 25+ years of experience in environmental design and urban planning. Founded sapthakalaa to bridge traditional wisdom with contemporary design practices.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    expertise: ["Urban Planning", "Sustainable Design", "Heritage Conservation", "Landscape Architecture"],
    email: "omkar@sapthakalaa.com",
  },
  {
    id: "team-02",
    name: "Priya Desai",
    role: "Lead Urban Designer",
    bio: "Specializes in sustainable urban development and transit-oriented design. Her work focuses on creating livable, walkable cities with strong community engagement.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
    expertise: ["Urban Design", "Community Planning", "Public Spaces", "Mobility"],
    email: "priya@sapthakalaa.com",
  },
  {
    id: "team-03",
    name: "Rajesh Patel",
    role: "Landscape Architect",
    bio: "Expert in ecological restoration and biodiverse landscape design. Brings nature and sustainability to urban environments through innovative green infrastructure.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    expertise: ["Landscape Design", "Ecology", "Water Management", "Biodiversity"],
    email: "rajesh@sapthakalaa.com",
  },
  {
    id: "team-04",
    name: "Anjali Verma",
    role: "Conservation Architect",
    bio: "Dedicated to preserving architectural heritage while integrating modern functionality. Specializes in adaptive reuse and restoration of historical structures.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    expertise: ["Heritage Conservation", "Restoration", "Adaptive Reuse", "Historical Research"],
    email: "anjali@sapthakalaa.com",
  },
  {
    id: "team-05",
    name: "Vikram Singh",
    role: "Design Consultant",
    bio: "Brings expertise in parametric design and digital fabrication. Bridges traditional architecture with cutting-edge computational design methodologies.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    expertise: ["Parametric Design", "Digital Tools", "3D Modeling", "Fabrication"],
    email: "vikram@sapthakalaa.com",
  },
  {
    id: "team-06",
    name: "Meera Reddy",
    role: "Project Manager",
    bio: "Ensures seamless project execution with attention to detail and client satisfaction. Manages complex timelines and stakeholder coordination.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
    expertise: ["Project Management", "Client Relations", "Documentation", "Quality Assurance"],
    email: "meera@sapthakalaa.com",
  },
];
