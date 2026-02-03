import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-img.webp";
import galleryKitchen from "@/assets/kitchen.webp";
import galleryBathroom from "@/assets/bad-kamer-renovatie.webp";

export default function Index() {
  const { t } = useLanguage();

  // În loc de Roofing, Painting, etc., pune:
  const services = [
    {
      title: t("Totaalrenovatie", "Total Renovation"), // "Produsul" Principal
      description: t(
        "Van A tot Z coördinatie. Eén aanspreekpunt voor uw volledige verbouwing.",
        "A to Z coordination. One point of contact for your complete renovation."
      ),
      // Link către pagina dedicată Totaalrenovatie
    },
    {
      title: t("Badkamer in 10 Dagen", "Bathroom in 10 Days"), // "Produsul" Rapid (SaniXL style)
      description: t(
        "Kies uit onze Smart, Comfort of Wellness pakketten.",
        "Choose from our Smart, Comfort or Wellness packages."
      ),
    },
    {
      title: t("Energetische Renovatie", "Energy Renovation"), // "Produsul" Legislativ
      description: t(
        "EPC optimalisatie, warmtepompen en isolatie conform 2025.",
        "EPC optimization, heat pumps and insulation in line with 2025 standards."
      ),
    },
  ];

  const features = [
    t("Meer dan 15 jaar ervaring in de renovatiesector", "Over 15 years of experience in the renovation sector"),
    t("Volledig verzekerd en erkend aannemer", "Fully insured and certified contractor"),
    t("Gratis en vrijblijvende offertes", "Free and non-binding quotes"),
    t("Kwaliteitsgarantie op al onze werken", "Quality guarantee on all our work"),
    t("Vakbekwaam team van specialisten", "Skilled team of specialists"),
    t("Transparante communicatie en prijzen", "Transparent communication and pricing"),
  ];

  const testimonials = [
    {
      name: "Johan De Vries",
      location: "Lievegem",
      text: t(
        "Uitstekend werk geleverd bij onze dakvernieuwing. Professioneel team en perfecte afwerking.",
        "Excellent work on our roof renewal. Professional team and perfect finish."
      ),
      rating: 5,
    },
    {
      name: "Maria Peeters",
      location: "Gent",
      text: t(
        "Onze badkamer is volledig getransformeerd. Kwaliteit en vakmanschap van het hoogste niveau.",
        "Our bathroom has been completely transformed. Quality and craftsmanship of the highest level."
      ),
      rating: 5,
    },
    {
      name: "Peter Janssen",
      location: "Eeklo",
      text: t(
        "Van offerte tot oplevering was alles top geregeld. Zeker een aanrader!",
        "From quote to delivery, everything was perfectly arranged. Highly recommended!"
      ),
      rating: 5,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>
        <div className="container-wide relative z-10 py-20">
          <div className="max-w-2xl animate-fade-up">
            <h1 className="text-primary-foreground mb-6">
              {t("Renovatie met Precisie", "Renovation with Precision")}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-body">
              {t(
                "Wij transformeren uw woning met vakmanschap, kwaliteitsmaterialen en oog voor detail. TopHuis staat garant voor een perfect resultaat.",
                "We transform your home with craftsmanship, quality materials and attention to detail. TopHuis guarantees a perfect result."
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  {t("Offerte Aanvragen", "Request Quote")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline-white" size="xl" asChild>
                <Link to="/realisaties">{t("Bekijk Ons Werk", "View Our Work")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Strip */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t("Onze Diensten", "Our Services")}</h2>
            <p className="max-w-2xl mx-auto text-lg">
              {t(
                "Volledige interieur renovaties - wij bieden een complete service voor al uw renovatieprojecten.",
                "Complete interior renovations - we offer a complete service for all your renovation projects."
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-background p-8 rounded shadow-architect card-hover text-center"
              >
                <h3 className="mb-3">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link to="/diensten">
                {t("Alle Diensten Bekijken", "View All Services")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About/Trust Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">
                {t("Waarom Kiezen voor TopHuis?", "Why Choose TopHuis?")}
              </h2>
              <p className="text-lg mb-8">
                {t(
                  "Met meer dan 15 jaar ervaring in de renovatiesector staat TopHuis bekend om kwaliteit, betrouwbaarheid en vakmanschap. Wij behandelen elk project met dezelfde toewijding en precisie.",
                  "With over 15 years of experience in the renovation sector, TopHuis is known for quality, reliability and craftsmanship. We treat every project with the same dedication and precision."
                )}
              </p>
              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button variant="blueprint" asChild>
                  <Link to="/over-ons">{t("Meer Over Ons", "More About Us")}</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={galleryKitchen}
                alt={t("Keuken renovatie", "Kitchen renovation")}
                className="rounded shadow-architect-lg w-full h-64 object-cover"
              />
              <img
                src={galleryBathroom}
                alt={t("Badkamer renovatie", "Bathroom renovation")}
                className="rounded shadow-architect-lg w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-primary-foreground mb-4">
              {t("Wat Onze Klanten Zeggen", "What Our Clients Say")}
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-primary-foreground/80">
              {t(
                "De tevredenheid van onze klanten is onze beste referentie.",
                "Our customers' satisfaction is our best reference."
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded shadow-architect"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-secondary text-secondary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-heading font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blueprint-light">
        <div className="container-wide text-center">
          <h2 className="mb-4">{t("Klaar om Uw Project te Starten?", "Ready to Start Your Project?")}</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            {t(
              "Neem vandaag nog contact met ons op voor een gratis en vrijblijvende offerte. Wij bespreken graag uw renovatieplannen.",
              "Contact us today for a free, no-obligation quote. We'd love to discuss your renovation plans."
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="blueprint" size="xl" asChild>
              <Link to="/contact">
                {t("Gratis Offerte Aanvragen", "Request Free Quote")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="tel:+32123456789">{t("Bel Ons Direct", "Call Us Directly")}</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
