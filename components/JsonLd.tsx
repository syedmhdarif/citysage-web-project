export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CitySage",
    url: "https://citysage.my",
    logo: "https://citysage.my/icon.png",
    description:
      "CitySage is Malaysia's leading AI-powered urban intelligence platform deploying specialised AI workers for smart city planning, traffic optimisation, environmental monitoring, and infrastructure resilience.",
    foundingDate: "2024",
    founders: [
      { "@type": "Person", name: "Daniel Wallis", jobTitle: "Co-Founder & CEO" },
      { "@type": "Person", name: "Dr. Nazri Bajuri", jobTitle: "Co-Founder & CTO" },
      { "@type": "Person", name: "Datuk Prof. Ian Davies", jobTitle: "Co-Founder & CSO" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Level 12, Menara KL Sentral",
      addressLocality: "Kuala Lumpur",
      addressCountry: "MY",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@citysage.ai",
      contactType: "sales",
      availableLanguage: ["English", "Malay"],
    },
    sameAs: [
      "https://linkedin.com/company/citysage",
      "https://twitter.com/citysage",
      "https://instagram.com/citysage",
    ],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 3.1339,
        longitude: 101.6869,
      },
      geoRadius: "5000",
    },
    knowsAbout: [
      "Smart City Planning",
      "Urban Intelligence",
      "Artificial Intelligence",
      "IoT Integration",
      "Geospatial Analytics",
      "Digital Twin",
      "Urban Data Analytics",
      "Environmental Monitoring",
      "Traffic Optimisation",
      "Sustainable Urban Development",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CitySage",
    url: "https://citysage.my",
    description:
      "AI-powered urban intelligence platform for smart city planning, mobility optimisation, and sustainable urban development in Malaysia and Southeast Asia.",
    publisher: { "@id": "https://citysage.my/#organization" },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://citysage.my/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "CitySage",
    image: "https://citysage.my/icon.png",
    url: "https://citysage.my",
    telephone: "",
    email: "hello@citysage.ai",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Level 12, Menara KL Sentral",
      addressLocality: "Kuala Lumpur",
      addressRegion: "Wilayah Persekutuan",
      postalCode: "50470",
      addressCountry: "MY",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 3.1339,
      longitude: 101.6869,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "$$",
    aggregateRating: undefined,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
