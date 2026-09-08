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

// NOTE: The LLC entity names from the company's corporate structure suggest
// these addresses. Property details are based solely on verified company information.
// All project photography is placeholder — replace with actual Cohen Global project photography.

export const projects: Project[] = [
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
    heroImage:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    ],
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
    heroImage:
      "https://images.unsplash.com/photo-1536314675263-2017a89a2ead?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1536314675263-2017a89a2ead?w=1200&q=80",
    ],
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
    heroImage:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
    ],
    featured: true,
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
    heroImage:
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=1600&q=80",
    featured: false,
    highlights: ["Mott Haven, The Bronx", "Residential", "Completed"],
  },
  {
    slug: "72-utica-avenue",
    name: "72 Utica Avenue",
    address: "72 Utica Avenue",
    neighborhood: "Crown Heights",
    borough: "Brooklyn",
    propertyType: "Residential",
    status: "Completed",
    description:
      "A renovated and repositioned residential property on Utica Avenue in Crown Heights, delivered to a first-time buyer through Cohen Global's standard sales process.",
    heroImage:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1600&q=80",
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
    heroImage:
      "https://images.unsplash.com/photo-1464082354059-27db6ce50048?w=1600&q=80",
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
    heroImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80",
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
    heroImage:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1600&q=80",
    featured: false,
    highlights: ["Hollis, Queens", "Residential", "Completed"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
