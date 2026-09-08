export type Project = {
  slug: string;
  name: string;
  address?: string;
  neighborhood?: string;
  borough?: string;
  propertyType: string;
  status: "Completed" | "In Progress" | "Planned";
  year?: string;
  description?: string;
  heroImage: string;
  gallery?: string[];
  featured?: boolean;
  highlights?: string[];
};

export const projects: Project[] = [
  {
    slug: "207-prospect-place",
    name: "207 Prospect Place",
    address: "207 Prospect Place",
    neighborhood: "Crown Heights",
    borough: "Brooklyn",
    propertyType: "New Construction",
    status: "Completed",
    description:
      "A completed new construction development in Crown Heights, Brooklyn. This project delivered a modern multi-story residential building with high-quality finishes — including marble countertops, herringbone hardwood floors, chef's kitchens with professional-grade appliances, and renovated brownstone units with preserved original architectural details.",
    heroImage: "/images/projects/207-prospect-front.jpg",
    gallery: [
      "/images/projects/207-prospect-front.jpg",
      "/images/hero/hero-2.jpg",
      "/images/hero/hero-1.jpg",
      "/images/hero/hero-6.jpg",
      "/images/hero/hero-5.jpg",
      "/images/hero/hero-4.jpg",
      "/images/hero/hero-3.jpg",
      "/images/projects/207-prospect-bathroom.png",
      "/images/projects/207-prospect-garden.png",
      "/images/projects/207-prospect-kitchen.png",
    ],
    featured: true,
    highlights: ["Crown Heights, Brooklyn", "New Construction", "Completed"],
  },
  {
    slug: "1750-dean-street",
    name: "1750 Dean Street",
    address: "1750 Dean Street",
    neighborhood: "Crown Heights",
    borough: "Brooklyn",
    propertyType: "Residential",
    status: "Completed",
    description:
      "A completed residential development in Crown Heights, Brooklyn, bringing quality housing to one of Brooklyn's most dynamic neighborhoods.",
    heroImage: "/images/hero/hero-6.jpg",
    gallery: ["/images/hero/hero-6.jpg", "/images/hero/hero-5.jpg"],
    featured: true,
    highlights: ["Crown Heights, Brooklyn", "Residential", "Completed"],
  },
  {
    slug: "419-pulaski",
    name: "419 Pulaski Street",
    address: "419 Pulaski Street",
    neighborhood: "Bed-Stuy",
    borough: "Brooklyn",
    propertyType: "Residential",
    status: "Completed",
    description:
      "A residential project in Bed-Stuy bringing a newly completed home to a neighborhood experiencing significant investment and growth.",
    heroImage: "/images/hero/hero-1.jpg",
    gallery: ["/images/hero/hero-1.jpg", "/images/hero/hero-2.jpg"],
    featured: true,
    highlights: ["Bed-Stuy, Brooklyn", "Residential", "Completed"],
  },
  {
    slug: "325-cypress",
    name: "325 Cypress Avenue",
    address: "325 Cypress Avenue",
    neighborhood: "The South Bronx",
    borough: "The Bronx",
    propertyType: "Residential",
    status: "Completed",
    description:
      "A completed residential project in the South Bronx, representing Cohen Global's commitment to creating quality housing across all five boroughs.",
    heroImage: "/images/hero/hero-4.jpg",
    gallery: ["/images/hero/hero-4.jpg"],
    featured: false,
    highlights: ["South Bronx", "Residential", "Completed"],
  },
  {
    slug: "461-willis-avenue",
    name: "461 Willis Avenue",
    address: "461 Willis Avenue",
    neighborhood: "Mott Haven",
    borough: "The Bronx",
    propertyType: "Residential",
    status: "Completed",
    description:
      "A residential development in Mott Haven, contributing to the growing wave of quality housing in one of the Bronx's most active neighborhoods.",
    heroImage: "/images/hero/hero-5.jpg",
    featured: false,
    highlights: ["Mott Haven, The Bronx", "Residential", "Completed"],
  },
  {
    slug: "72-utica-avenue",
    name: "72 Utica Avenue",
    address: "72 Utica Avenue",
    neighborhood: "Crown Heights",
    borough: "Brooklyn",
    propertyType: "Renovation",
    status: "Completed",
    description:
      "A renovated and repositioned residential property on Utica Avenue in Crown Heights, delivered to a first-time buyer through Cohen Global's standard sales process.",
    heroImage: "/images/hero/hero-3.jpg",
    featured: false,
    highlights: ["Crown Heights, Brooklyn", "Renovation", "Completed"],
  },
  {
    slug: "1520-lincoln-place",
    name: "1520 Lincoln Place",
    address: "1520 Lincoln Place",
    neighborhood: "Crown Heights",
    borough: "Brooklyn",
    propertyType: "Residential",
    status: "Completed",
    description:
      "A completed residential project at Lincoln Place in Crown Heights, continuing Cohen Global's long history of quality development in Brooklyn.",
    heroImage: "/images/hero/hero-2.jpg",
    featured: false,
    highlights: ["Crown Heights, Brooklyn", "Residential", "Completed"],
  },
  {
    slug: "41-wolcott-street",
    name: "41 Wolcott Street",
    address: "41 Wolcott Street",
    neighborhood: "Red Hook",
    borough: "Brooklyn",
    propertyType: "Residential",
    status: "Completed",
    description:
      "A residential project in Red Hook, Brooklyn — one of the borough's most distinctly positioned neighborhoods — completed to Cohen Global's standard.",
    heroImage: "/images/projects/207-prospect-exterior.jpg",
    featured: false,
    highlights: ["Red Hook, Brooklyn", "Residential", "Completed"],
  },
  {
    slug: "92-17-190-street",
    name: "92-17 190th Street",
    address: "92-17 190th Street",
    neighborhood: "Hollis",
    borough: "Queens",
    propertyType: "Residential",
    status: "Completed",
    description:
      "A completed residential project in Hollis, Queens, extending Cohen Global's multi-borough reach into one of Queens' established residential communities.",
    heroImage: "/images/hero/hero-5.jpg",
    featured: false,
    highlights: ["Hollis, Queens", "Residential", "Completed"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
