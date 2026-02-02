import { Layout } from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Privacy() {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="bg-primary py-16">
        <div className="container-wide text-center">
          <h1 className="text-primary-foreground mb-4">
            {t("Privacybeleid", "Privacy Policy")}
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <div className="prose prose-lg">
            <p className="text-muted-foreground mb-8">
              {t("Laatst bijgewerkt: januari 2024", "Last updated: January 2024")}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("1. Inleiding", "1. Introduction")}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t(
                "TopHuis respecteert uw privacy en zorgt ervoor dat de persoonlijke informatie die u ons verstrekt vertrouwelijk wordt behandeld. In dit privacybeleid leggen we uit welke gegevens we verzamelen en hoe we deze gebruiken.",
                "TopHuis respects your privacy and ensures that the personal information you provide is treated confidentially. This privacy policy explains what data we collect and how we use it."
              )}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("2. Gegevensverzameling", "2. Data Collection")}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t(
                "Wij verzamelen gegevens die u rechtstreeks aan ons verstrekt, zoals uw naam, e-mailadres, telefoonnummer en adres wanneer u contact met ons opneemt of een offerte aanvraagt.",
                "We collect data that you provide directly to us, such as your name, email address, phone number, and address when you contact us or request a quote."
              )}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("3. Gebruik van Gegevens", "3. Use of Data")}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t(
                "Uw gegevens worden uitsluitend gebruikt voor het beantwoorden van uw vragen, het opstellen van offertes en het uitvoeren van onze diensten. Wij delen uw gegevens niet met derden zonder uw toestemming.",
                "Your data is used exclusively for answering your questions, preparing quotes, and executing our services. We do not share your data with third parties without your consent."
              )}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("4. Beveiliging", "4. Security")}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t(
                "Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen verlies of onrechtmatige verwerking.",
                "We take appropriate technical and organizational measures to protect your personal data against loss or unlawful processing."
              )}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("5. Uw Rechten", "5. Your Rights")}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t(
                "U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. Neem hiervoor contact met ons op via info@tophuis.be.",
                "You have the right to access, correct, or delete your personal data. Please contact us at info@tophuis.be for this."
              )}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("6. Contact", "6. Contact")}
            </h2>
            <p className="text-muted-foreground">
              {t(
                "Voor vragen over dit privacybeleid kunt u contact opnemen met TopHuis via info@tophuis.be of +32 123 456 789.",
                "For questions about this privacy policy, you can contact TopHuis at info@tophuis.be or +32 123 456 789."
              )}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
