export const company = {
  name: "Cohen Global Properties Inc.",
  shortName: "Cohen Global",
  legalName: "Cohen Global Property INC",
  founded: "2005",
  foundedState: "New York",
  tagline: "Building New York. Creating Opportunity.",
  address: {
    street: "1967 Bedford Avenue",
    city: "Brooklyn",
    state: "New York",
    zip: "11225",
    country: "United States",
    full: "1967 Bedford Avenue, Brooklyn, NY 11225",
    mapQuery: "1967+Bedford+Avenue+Brooklyn+NY+11225",
  },
  phone: {
    primary: "(516) 312-1668",
    primaryLabel: "Main",
    secondary: "(917) 468-4315",
    secondaryLabel: "Main",
    primaryHref: "tel:+15163121668",
    secondaryHref: "tel:+19174684315",
  },
  hours: [
    { day: "Monday", hours: "9:00 AM – 5:00 PM" },
    { day: "Tuesday", hours: "9:00 AM – 5:00 PM" },
    { day: "Wednesday", hours: "9:00 AM – 5:00 PM" },
    { day: "Thursday", hours: "9:00 AM – 5:00 PM" },
    { day: "Friday", hours: "9:00 AM – 5:00 PM" },
    { day: "Saturday", hours: "10:00 AM – 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ],
  hoursShort: "Mon–Fri 9am–5pm, Sat 10am–4pm, Closed Sunday",
  markets: ["Brooklyn", "Queens", "The Bronx", "Manhattan", "Staten Island"],
  description:
    "Cohen Global Properties Inc. is a New York City real estate development company engaged in the acquisition, renovation, new construction, and sale of residential properties across the five boroughs. Founded in 2005, the company operates across multiple commonly owned entities and focuses on creating quality homes for first-time buyers and working families in improving neighborhoods.",
  subsidiaries: [
    "1750 Dean St. LLC",
    "419 Pulaski LLC",
    "Dean-Utica LLC",
    "72 Utica LLC",
    "649 Willoughby LLC",
    "461 Willis Ave LLC",
    "325 Cypress LLC",
    "1520 Lincoln Pl LLC",
    "41 Wolcott St LLC",
    "92-17 190 Street LLC",
  ],
};

export const team = [
  {
    name: "Shlomi Cohen",
    title: "President",
    phone: "(917) 468-4315",
    phoneHref: "tel:+19174684315",
    photo: "/images/team/shlomi-cohen.jpg",
    bio: "Shlomi Cohen has built Cohen Global Properties into a multifaceted real estate corporation encompassing development, construction, property management, and brokerage. An experienced entrepreneur and operator, he brings strategic focus and hands-on leadership to each project the company undertakes—consistently demonstrating an ability to identify opportunity, execute development, and deliver results across the New York City market.",
  },
  {
    name: "Yona Cohen",
    title: "Chief Executive Officer",
    phone: "(516) 312-1668",
    phoneHref: "tel:+15163121668",
    photo: "/images/team/yona-cohen.jpg",
    bio: "Yona Cohen co-founded Cohen Global and has been central to the company's growth since its inception. Her career began in real estate brokerage, where she developed a comprehensive understanding of New York's residential markets before transitioning to acquisition and development. Over the course of her tenure, she has been instrumental in orchestrating the acquisition and development of over $150 million in real estate assets. Her expertise spans asset management, accounting, operational oversight, development feasibility, financing, and marketing for multifamily properties and residential projects across the five boroughs.",
  },
];

export const stats = [
  { value: "$150M+", label: "Real Estate Assets", source: "Verified from company biography" },
  { value: "20+", label: "Years of Experience", source: "Founded 2005" },
  { value: "5", label: "Boroughs Served", source: "NYC five boroughs" },
  { value: "NYC", label: "Primary Market", source: "Company description" },
];

export const capabilities = [
  {
    slug: "acquisition",
    title: "Acquisition",
    headline: "Identifying opportunity in every borough.",
    description:
      "We source and acquire strategically positioned properties, development sites, and value-add opportunities across New York City's five boroughs. Our market knowledge and established relationships give us access to off-market deals and positioned assets that others miss.",
  },
  {
    slug: "development",
    title: "Development",
    headline: "Ground-up development done right.",
    description:
      "From site control through permits, construction, and delivery, we manage every phase of residential development. New construction projects typically move from permit receipt to completion in 60 to 180 days, a pace driven by disciplined project management and experienced contractors.",
  },
  {
    slug: "rehabilitation",
    title: "Rehabilitation",
    headline: "Transforming existing properties.",
    description:
      "Our rehabilitation work repositions underperforming properties into quality homes. Operating on a 60-to-120-day turnaround for most projects, we've refined a repeatable process that delivers consistent outcomes while managing cost and timeline.",
  },
  {
    slug: "new-construction",
    title: "New Construction",
    headline: "Building for New York's future.",
    description:
      "We design and deliver newly constructed homes built around the needs of modern New York buyers. Our construction pipeline is focused on neighborhoods experiencing meaningful growth, producing homes that are accessible for first-time buyers and stable-income families.",
  },
  {
    slug: "property-sales",
    title: "Property Sales",
    headline: "Bringing great projects to market.",
    description:
      "We manage the sale of completed properties directly, leveraging deep market knowledge and buyer relationships built over more than two decades. Our buyer network includes first-time homeowners, municipal employees, healthcare workers, and trade-union members.",
  },
];
