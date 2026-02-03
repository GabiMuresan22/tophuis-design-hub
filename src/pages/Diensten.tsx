import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import galleryVloer from "@/assets/floor.webp";
import galleryKitchen from "@/assets/keuken-renovatie-1.webp";
import galleryBathroom from "@/assets/bad-kamer-renovatie.webp";

export default function Diensten() {
  const { t } = useLanguage();

  const services = [
    {
      id: "vloeren",
      title: t("Vloeren", "Flooring"),
      description: t(
        "Een mooie vloer geeft uw interieur karakter. Van klassiek parket tot moderne tegels, wij leggen elke vloer met precisie en vakmanschap. Wij adviseren u graag over de beste keuze voor uw ruimte en budget.",
        "A beautiful floor gives your interior character. From classic parquet to modern tiles, we lay every floor with precision and craftsmanship. We're happy to advise you on the best choice for your space and budget."
      ),
      features: [
        t("Parket en laminaat", "Parquet and laminate"),
        t("Tegels en natuursteen", "Tiles and natural stone"),
        t("Polybeton en gietvloeren", "Polished concrete and poured floors"),
        t("Vinyl en PVC", "Vinyl and PVC"),
        t("Vloerverwarming integratie", "Underfloor heating integration"),
        t("Bestaande vloeren renoveren", "Renovating existing floors"),
      ],
      image: galleryVloer,
    },
    {
      id: "schilderwerken",
      title: t("Schilderwerken", "Painting"),
      description: t(
        "Een frisse verflaag maakt een wereld van verschil. Onze schilders werken met de beste verven en technieken voor een perfecte, duurzame afwerking. Zowel binnen als buiten zorgen wij voor een strak resultaat.",
        "A fresh coat of paint makes a world of difference. Our painters work with the best paints and techniques for a perfect, durable finish. Both inside and outside, we ensure a sleek result."
      ),
      features: [
        t("Binnenschilderwerken", "Interior painting"),
        t("Buitenschilderwerken", "Exterior painting"),
        t("Behangwerken", "Wallpaper installation"),
        t("Houtrot behandeling", "Wood rot treatment"),
        t("Decoratieve technieken", "Decorative techniques"),
        t("Kleuradvies", "Color consultation"),
      ],
      image: galleryKitchen,
    },
    {
      id: "sanitair",
      title: t("Sanitair & Loodgieterij", "Plumbing & Fixtures"),
      description: t(
        "Van een nieuwe badkamer tot loodgieterijreparaties, wij verzorgen al uw sanitaire installaties. Met oog voor design en functionaliteit creëren wij badkamers waar u elke dag van geniet.",
        "From a new bathroom to plumbing repairs, we handle all your sanitary installations. With an eye for design and functionality, we create bathrooms you'll enjoy every day."
      ),
      features: [
        t("Complete badkamerrenovatie", "Complete bathroom renovation"),
        t("Toilet en wastafel installatie", "Toilet and sink installation"),
        t("Douche en bad plaatsing", "Shower and bath installation"),
        t("Leidingwerk en aansluitingen", "Pipework and connections"),
        t("Verwarming en boilers", "Heating and boilers"),
        t("Reparaties en onderhoud", "Repairs and maintenance"),
      ],
      image: galleryBathroom,
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container-wide text-center">
          <h1 className="text-primary-foreground mb-4">
            {t("Onze Diensten", "Our Services")}
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-primary-foreground/80">
            {t(
              "Van dak tot vloer bieden wij een complete renovatieservice. Ontdek hoe wij uw woning kunnen transformeren.",
              "From roof to floor, we offer a complete renovation service. Discover how we can transform your home."
            )}
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="mb-4">{service.title}</h2>
                  <p className="text-lg mb-6">{service.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-secondary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="blueprint" asChild>
                    <Link to="/contact">
                      {t("Offerte Aanvragen", "Request Quote")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded shadow-architect-lg w-full h-80 lg:h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-blueprint-light">
        <div className="container-wide text-center">
          <h2 className="mb-4">
            {t("Heeft U Een Specifieke Vraag?", "Do You Have a Specific Question?")}
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            {t(
              "Uw project is uniek, en wij bieden oplossingen op maat. Neem contact op om uw wensen te bespreken.",
              "Your project is unique, and we offer tailored solutions. Contact us to discuss your needs."
            )}
          </p>
          <Button variant="blueprint" size="xl" asChild>
            <Link to="/contact">{t("Neem Contact Op", "Get In Touch")}</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
