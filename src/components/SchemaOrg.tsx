import { useEffect } from "react";

interface SchemaOrgProps {
  type?: "LocalBusiness" | "Service" | "FAQPage" | "BreadcrumbList";
  data?: Record<string, unknown>;
}

export function SchemaOrg({ type = "LocalBusiness", data }: SchemaOrgProps) {
  useEffect(() => {
    const getSchemaData = () => {
      switch (type) {
        case "LocalBusiness":
          return {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.tophuis.be/#organization",
            "name": "TopHuis Design Hub",
            "legalName": "TopHuis BV",
            "url": "https://www.tophuis.be",
            "logo": "https://www.tophuis.be/android-chrome-512x512.png",
            "image": "https://www.tophuis.be/og-image-renovatie.jpg",
            "description": "Totaalrenovatie & Interieur specialist in West-Vlaanderen. Van 3D-ontwerp tot oplevering met één aanspreekpunt.",
            "telephone": "+32493288887",
            "email": "info@tophuis.be",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Grote Baan 21",
              "addressLocality": "Lievegem",
              "postalCode": "9920",
              "addressCountry": "BE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.1309",
              "longitude": "3.5664"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Roeselare"
              },
              {
                "@type": "City",
                "name": "Kortrijk"
              },
              {
                "@type": "City",
                "name": "Lievegem"
              },
              {
                "@type": "State",
                "name": "West-Vlaanderen"
              }
            ],
            "priceRange": "€€€",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "17:00"
              }
            ],
            "sameAs": [
              "https://www.facebook.com/tophuis",
              "https://www.instagram.com/tophuis"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Renovatie Diensten",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Totaalrenovatie",
                    "description": "Volledige renovatie van woning of appartement"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Badkamerrenovatie",
                    "description": "Complete badkamerrenovatie op maat"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Interieurinrichting",
                    "description": "Professionele interieurinrichting en design"
                  }
                }
              ]
            }
          };
        
        case "Service":
          return data || {};
        
        case "FAQPage":
          return data || {};
        
        case "BreadcrumbList":
          return data || {};
        
        default:
          return {};
      }
    };

    const schemaData = getSchemaData();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemaData);
    script.id = `schema-${type}`;
    
    // Remove existing schema of same type
    const existing = document.getElementById(`schema-${type}`);
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      const scriptToRemove = document.getElementById(`schema-${type}`);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, data]);

  return null;
}

// Helper function to create breadcrumb schema
export function createBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

// Helper function to create FAQ schema
export function createFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
