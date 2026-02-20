import { Layout } from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Accessibility() {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="bg-primary py-16">
        <div className="container-wide text-center">
          <h1 className="text-primary-foreground mb-4">
            {t("Toegankelijkheidsverklaring", "Accessibility Statement")}
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-2">
              {t("Laatst bijgewerkt: februari 2025", "Last updated: February 2025")}
            </p>

            <p className="text-muted-foreground mb-8">
              {t(
                "TopHuis streeft ernaar om deze website toegankelijk te maken voor alle bezoekers, inclusief mensen met een beperking. Wij zijn toegewijd aan het verbeteren van de gebruikerservaring voor iedereen en het toepassen van de relevante toegankelijkheidsnormen.",
                "TopHuis strives to make this website accessible to all visitors, including people with disabilities. We are committed to improving the user experience for everyone and applying the relevant accessibility standards."
              )}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("Toegankelijkheidsnormen", "Accessibility Standards")}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t(
                "Deze website streeft naar conformiteit met de Web Content Accessibility Guidelines (WCAG) 2.1 niveau AA. Deze richtlijnen helpen om webinhoud toegankelijker te maken voor mensen met een breed scala aan beperkingen, waaronder visuele, auditieve, fysieke, spraak-, cognitieve, taal-, leer- en neurologische beperkingen.",
                "This website aims for compliance with Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines help make web content more accessible to people with a wide range of disabilities, including visual, auditory, physical, speech, cognitive, language, learning, and neurological disabilities."
              )}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("Toegankelijkheidsfuncties", "Accessibility Features")}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t("Onze website bevat de volgende toegankelijkheidsfuncties:", "Our website includes the following accessibility features:")}
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>{t("Semantische HTML voor betere schermlezerondersteuning", "Semantic HTML for better screen reader support")}</li>
              <li>{t("Toetsenbordnavigatie voor alle interactieve elementen", "Keyboard navigation for all interactive elements")}</li>
              <li>{t("Duidelijke en beschrijvende linkteksten", "Clear and descriptive link texts")}</li>
              <li>{t("Voldoende kleurcontrast voor tekst en achtergronden", "Sufficient color contrast for text and backgrounds")}</li>
              <li>{t("Responsief ontwerp voor verschillende apparaten en schermformaten", "Responsive design for various devices and screen sizes")}</li>
              <li>{t("Alternatieve tekst voor afbeeldingen waar van toepassing", "Alternative text for images where applicable")}</li>
              <li>{t("Duidelijke formulierlabels en foutmeldingen", "Clear form labels and error messages")}</li>
            </ul>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("Bekende beperkingen", "Known Limitations")}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t(
                "Hoewel we streven naar optimale toegankelijkheid, kunnen er nog enkele beperkingen zijn. We werken voortdurend aan het verbeteren van de toegankelijkheid van onze website en waarderen uw feedback.",
                "While we strive for optimal accessibility, there may still be some limitations. We are continuously working to improve the accessibility of our website and appreciate your feedback."
              )}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("Technische specificaties", "Technical Specifications")}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t(
                "De toegankelijkheid van deze website is afhankelijk van de volgende technologieën:",
                "The accessibility of this website relies on the following technologies:"
              )}
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (React)</li>
              <li>ARIA (Accessible Rich Internet Applications)</li>
            </ul>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("Feedback", "Feedback")}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t(
                "We verwelkomen uw feedback over de toegankelijkheid van onze website. Als u problemen ondervindt bij het openen van inhoud of het gebruik van functies op onze website, neem dan contact met ons op:",
                "We welcome your feedback on the accessibility of our website. If you encounter any problems accessing content or using features on our website, please contact us:"
              )}
            </p>
            <ul className="list-none text-muted-foreground mb-6 space-y-2">
              <li><strong>E-mail:</strong> info@tophuis.be</li>
              <li><strong>{t("Telefoon", "Phone")}:</strong> +32 493 28 88 87</li>
              <li><strong>{t("Adres", "Address")}:</strong> Grote Baan 21, 9920 Lievegem, {t("België", "Belgium")}</li>
            </ul>

            <p className="text-muted-foreground mb-6">
              {t(
                "Wij streven ernaar om binnen 2 werkdagen te reageren op toegankelijkheidsgerelateerde vragen of opmerkingen.",
                "We aim to respond to accessibility-related questions or comments within 2 business days."
              )}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("Evaluatie en testen", "Evaluation and Testing")}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t(
                "Deze website wordt regelmatig geëvalueerd en getest op toegankelijkheid met behulp van geautomatiseerde tools en handmatige beoordeling. We blijven werken aan het verbeteren van de toegankelijkheid van onze website.",
                "This website is regularly evaluated and tested for accessibility using automated tools and manual review. We continue to work on improving the accessibility of our website."
              )}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("Formele klachten", "Formal Complaints")}
            </h2>
            <p className="text-muted-foreground">
              {t(
                "Als u niet tevreden bent met onze reactie op uw toegankelijkheidsproblemen, kunt u contact opnemen met de Belgische Gegevensbeschermingsautoriteit of andere relevante instanties.",
                "If you are not satisfied with our response to your accessibility issues, you can contact the Belgian Data Protection Authority or other relevant authorities."
              )}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
