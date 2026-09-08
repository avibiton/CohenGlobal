export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Cohen Global Properties Inc.",
    alternateName: "Cohen Global",
    url: "https://cohen-global.com",
    logo: "https://cohen-global.com/logo.png",
    description:
      "New York City real estate development company specializing in acquisition, rehabilitation, new construction, and residential sales across the five boroughs.",
    foundingDate: "2005",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1967 Bedford Avenue",
      addressLocality: "Brooklyn",
      addressRegion: "NY",
      postalCode: "11225",
      addressCountry: "US",
    },
    telephone: ["+1-516-312-1668", "+1-917-468-4315"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "New York City" },
      { "@type": "Borough", name: "Brooklyn" },
      { "@type": "Borough", name: "Queens" },
      { "@type": "Borough", name: "The Bronx" },
      { "@type": "Borough", name: "Manhattan" },
      { "@type": "Borough", name: "Staten Island" },
    ],
    knowsAbout: [
      "Real Estate Development",
      "Property Acquisition",
      "Residential Construction",
      "Property Rehabilitation",
      "New York City Real Estate",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Cohen Global Properties",
    url: "https://cohen-global.com",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
