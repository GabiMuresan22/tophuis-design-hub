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
              {t(
                "Totaalrenovatie en Interieurwerken in West-Vlaanderen en Oost-Vlaanderen",
                "Total Renovation and Interior Works in West Flanders and East Flanders"
              )}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-body">
              {t(
                "Tophuis Design Hub is gespecialiseerd in totaalrenovaties, interieurwerken en technische installaties in Vlaanderen. Wij realiseren renovatieprojecten van ontwerp tot afwerking in steden zoals Gent, Roeselare, Kortrijk en omgeving.",
                "Tophuis Design Hub specialises in total renovations, interior works and technical installations in Flanders. We deliver renovation projects from design to completion in cities such as Ghent, Roeselare, Kortrijk and surrounding areas."
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

      {/* SEO Section – Totaalrenovatie West- en Oost-Vlaanderen */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide max-w-3xl">
          <h2 className="mb-6">
            {t(
              "Totaalrenovatie in West-Vlaanderen en Oost-Vlaanderen",
              "Total Renovation in West Flanders and East Flanders"
            )}
          </h2>
          <div className="prose prose-lg text-muted-foreground max-w-none">
            <p className="mb-4">
              {t(
                "Tophuis Design Hub is uw partner voor totaalrenovatie en interieurwerken in West-Vlaanderen en Oost-Vlaanderen. Of u nu een volledige woningrenovatie, badkamerrenovatie of interieurverbouwing plant, wij begeleiden u van ontwerp tot afwerking. Onze ervaring in steden zoals Gent, Roeselare, Kortrijk en omgeving garandeert een professionele aanpak en een afgewerkt resultaat op maat van uw verwachtingen. Wij combineren vakmanschap met moderne technieken en werken met kwaliteitsmaterialen voor duurzame renovaties.",
                "Tophuis Design Hub is your partner for total renovation and interior works in West Flanders and East Flanders. Whether you are planning a full home renovation, bathroom renovation or interior refurbishment, we guide you from design to completion. Our experience in cities such as Ghent, Roeselare, Kortrijk and the surrounding area guarantees a professional approach and a finished result tailored to your expectations. We combine craftsmanship with modern techniques and work with quality materials for sustainable renovations."
              )}
            </p>
            <p>
              {t(
                "Voor particulieren en bedrijven leveren wij onder meer badkamerrenovaties, parket en tegelwerken, gyproc en pleisterwerken, schilderwerken, elektrische en sanitaire installaties, warmtepompen en airconditioning, en keuken- en maatmeubilair. Vraag een vrijblijvende offerte aan voor uw renovatieproject in Vlaanderen.",
                "For private clients and businesses we deliver bathroom renovations, parquet and tiling, gypsum and plastering, painting, electrical and sanitary installations, heat pumps and air conditioning, and kitchen and custom furniture. Request a no-obligation quote for your renovation project in Flanders."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Actief in Gent, Roeselare, Kortrijk en heel Vlaanderen */}
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <h2 className="mb-6">
            {t(
              "Actief in Gent, Roeselare, Kortrijk en heel Vlaanderen",
              "Active in Ghent, Roeselare, Kortrijk and all of Flanders"
            )}
          </h2>
          <p className="text-muted-foreground mb-6">
            {t(
              "Tophuis Design Hub voert renovatieprojecten uit in verschillende steden in Vlaanderen. Wij zijn actief in zowel West-Vlaanderen als Oost-Vlaanderen en realiseren totaalrenovaties, badkamerrenovaties en interieurwerken voor particulieren en bedrijven.",
              "Tophuis Design Hub carries out renovation projects in various cities in Flanders. We are active in both West Flanders and East Flanders and deliver total renovations, bathroom renovations and interior works for private clients and businesses."
            )}
          </p>
          <p className="text-muted-foreground mb-4">
            {t("Onze belangrijkste werkgebieden zijn onder andere:", "Our main service areas include:")}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground mb-6 list-disc list-inside">
            <li>Gent</li>
            <li>Roeselare</li>
            <li>Kortrijk</li>
            <li>Brugge</li>
            <li>Oostende</li>
            <li>Waregem</li>
            <li>Deinze</li>
            <li>Sint-Niklaas</li>
            <li>Aalst</li>
          </ul>
          <p className="text-muted-foreground">
            {t(
              "Dankzij onze ervaring en professionele aanpak kunnen wij renovatieprojecten van elke grootte uitvoeren, van kleine interieurwerken tot volledige woningrenovaties.",
              "Thanks to our experience and professional approach we can carry out renovation projects of any size, from small interior works to full home renovations."
            )}
          </p>
        </div>
      </section>

      {/* Onze Renovatie Diensten */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="text-center mb-10">
            <h2 className="mb-4">
              {t("Onze Renovatie Diensten", "Our Renovation Services")}
            </h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto list-disc list-inside text-muted-foreground">
            <li>{t("Totaalrenovatie van woningen", "Total renovation of homes")}</li>
            <li>{t("Badkamerrenovatie", "Bathroom renovation")}</li>
            <li>{t("Parket plaatsen en renovatie", "Parquet laying and renovation")}</li>
            <li>{t("Tegels en keramiek plaatsen", "Tiles and ceramics installation")}</li>
            <li>{t("Gyproc en pleisterwerken", "Gypsum and plastering")}</li>
            <li>{t("Schilderwerken", "Painting")}</li>
            <li>{t("Elektrische installaties met certificaat", "Electrical installations with certificate")}</li>
            <li>{t("Smart Home en Loxone domotica", "Smart Home and Loxone home automation")}</li>
            <li>{t("Installatie van airconditioning", "Air conditioning installation")}</li>
            <li>{t("Installatie van warmtepompen", "Heat pump installation")}</li>
            <li>{t("Sanitaire installaties", "Sanitary installations")}</li>
            <li>{t("Keuken en maatmeubilair installatie", "Kitchen and custom furniture installation")}</li>
          </ul>
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
                loading="lazy"
                decoding="async"
                width={400}
                height={256}
              />
              <img
                src={galleryBathroom}
                alt={t("Badkamer renovatie", "Bathroom renovation")}
                className="rounded shadow-architect-lg w-full h-64 object-cover mt-8"
                loading="lazy"
                decoding="async"
                width={400}
                height={256}
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
              <a href="tel:+32493288887">{t("Bel Ons Direct", "Call Us Directly")}</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
