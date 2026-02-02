import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, ThumbsUp, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-img.webp";

export default function OverOns() {
  const { t } = useLanguage();

  const stats = [
    { icon: Clock, value: "15+", label: t("Jaar Ervaring", "Years Experience") },
    { icon: Users, value: "500+", label: t("Tevreden Klanten", "Happy Clients") },
    { icon: Award, value: "100%", label: t("Kwaliteitsgarantie", "Quality Guarantee") },
    { icon: ThumbsUp, value: "1000+", label: t("Projecten Afgerond", "Projects Completed") },
  ];

  const values = [
    {
      title: t("Vakmanschap", "Craftsmanship"),
      description: t(
        "Elk detail telt. Wij werken met de hoogste standaarden en laten niets aan het toeval over.",
        "Every detail counts. We work to the highest standards and leave nothing to chance."
      ),
    },
    {
      title: t("Betrouwbaarheid", "Reliability"),
      description: t(
        "Afspraak is afspraak. Wij komen onze beloftes na, zowel qua timing als budget.",
        "A promise is a promise. We keep our commitments, both in timing and budget."
      ),
    },
    {
      title: t("Transparantie", "Transparency"),
      description: t(
        "Geen verrassingen. U weet altijd precies waar u aan toe bent, van offerte tot oplevering.",
        "No surprises. You always know exactly where you stand, from quote to delivery."
      ),
    },
    {
      title: t("Klantgerichtheid", "Customer Focus"),
      description: t(
        "Uw wensen staan centraal. Wij luisteren, adviseren en leveren op maat.",
        "Your wishes are central. We listen, advise and deliver tailored solutions."
      ),
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container-wide text-center">
          <h1 className="text-primary-foreground mb-4">
            {t("Over TopHuis", "About TopHuis")}
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-primary-foreground/80">
            {t(
              "Met passie voor renovatie en oog voor detail bouwen wij al meer dan 15 jaar aan de dromen van onze klanten.",
              "With passion for renovation and attention to detail, we've been building our clients' dreams for over 15 years."
            )}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">{t("Ons Verhaal", "Our Story")}</h2>
              <p className="text-lg mb-4">
                {t(
                  "TopHuis werd opgericht met een simpele missie: renovaties leveren waar klanten trots op zijn. Wat begon als een klein familiebedrijf groeide uit tot een gerespecteerde naam in de renovatiesector.",
                  "TopHuis was founded with a simple mission: delivering renovations that clients are proud of. What started as a small family business grew into a respected name in the renovation sector."
                )}
              </p>
              <p className="text-lg mb-4">
                {t(
                  "Onze kracht ligt in de combinatie van traditioneel vakmanschap en moderne technieken. Elk project benaderen wij met dezelfde toewijding, of het nu gaat om een kleine badkamerrenovatie of een volledige woningtransformatie.",
                  "Our strength lies in combining traditional craftsmanship with modern techniques. We approach every project with the same dedication, whether it's a small bathroom renovation or a complete home transformation."
                )}
              </p>
              <p className="text-lg">
                {t(
                  "Gevestigd in Lievegem zijn wij actief in heel Oost-Vlaanderen. Onze klanten waarderen onze persoonlijke aanpak, eerlijke communicatie en de kwaliteit die wij leveren.",
                  "Based in Lievegem, we are active throughout East Flanders. Our clients appreciate our personal approach, honest communication and the quality we deliver."
                )}
              </p>
            </div>
            <div>
              <img
                src={heroImage}
                alt={t("TopHuis team aan het werk", "TopHuis team at work")}
                className="rounded shadow-architect-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-10 w-10 text-secondary mx-auto mb-4" />
                <div className="text-4xl font-heading font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t("Onze Waarden", "Our Values")}</h2>
            <p className="max-w-2xl mx-auto text-lg">
              {t(
                "Deze kernwaarden vormen de basis van alles wat wij doen.",
                "These core values form the foundation of everything we do."
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card p-8 rounded shadow-architect text-center card-hover"
              >
                <h3 className="mb-4">{value.title}</h3>
                <p className="text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-blueprint-light">
        <div className="container-wide text-center">
          <h2 className="mb-4">{t("Laten We Samenwerken", "Let's Work Together")}</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            {t(
              "Bent u klaar om uw renovatieproject te starten? Neem contact met ons op voor een persoonlijk gesprek.",
              "Ready to start your renovation project? Contact us for a personal consultation."
            )}
          </p>
          <Button variant="blueprint" size="xl" asChild>
            <Link to="/contact">
              {t("Neem Contact Op", "Get In Touch")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
