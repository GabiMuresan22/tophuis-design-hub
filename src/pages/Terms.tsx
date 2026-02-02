import { Layout } from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Terms() {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="bg-primary py-16">
        <div className="container-wide text-center">
          <h1 className="text-primary-foreground mb-4">
            {t("Algemene Voorwaarden", "Terms & Conditions")}
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
              {t("1. Algemeen", "1. General")}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t(
                "Deze algemene voorwaarden zijn van toepassing op alle offertes, overeenkomsten en leveringen van TopHuis, gevestigd te Lievegem, België.",
                "These terms and conditions apply to all quotations, agreements, and deliveries by TopHuis, located in Lievegem, Belgium."
              )}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("2. Offertes", "2. Quotations")}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t(
                "Alle offertes zijn vrijblijvend en geldig voor 30 dagen, tenzij anders vermeld. Prijzen zijn exclusief BTW tenzij anders aangegeven.",
                "All quotations are non-binding and valid for 30 days unless otherwise stated. Prices are exclusive of VAT unless otherwise indicated."
              )}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("3. Uitvoering van Werkzaamheden", "3. Execution of Work")}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t(
                "TopHuis zal de werkzaamheden uitvoeren naar beste kunnen en met inachtneming van de geldende kwaliteitsnormen. Wijzigingen in de opdracht kunnen leiden tot prijsaanpassingen.",
                "TopHuis will execute the work to the best of its ability and in accordance with applicable quality standards. Changes to the assignment may lead to price adjustments."
              )}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("4. Betaling", "4. Payment")}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t(
                "Betaling dient te geschieden binnen 14 dagen na factuurdatum, tenzij schriftelijk anders overeengekomen. Bij niet-tijdige betaling kunnen wettelijke rente en incassokosten in rekening worden gebracht.",
                "Payment must be made within 14 days of the invoice date unless otherwise agreed in writing. Late payment may result in statutory interest and collection costs."
              )}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("5. Garantie", "5. Warranty")}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t(
                "TopHuis biedt een garantie op uitgevoerde werkzaamheden conform de wettelijke bepalingen. Gebreken dienen binnen 8 dagen na oplevering schriftelijk te worden gemeld.",
                "TopHuis provides a warranty on completed work in accordance with legal provisions. Defects must be reported in writing within 8 days of completion."
              )}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("6. Aansprakelijkheid", "6. Liability")}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t(
                "De aansprakelijkheid van TopHuis is beperkt tot het bedrag dat door de verzekering wordt gedekt. Indirecte schade, waaronder gevolgschade, wordt uitgesloten.",
                "TopHuis's liability is limited to the amount covered by insurance. Indirect damage, including consequential damage, is excluded."
              )}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("7. Toepasselijk Recht", "7. Applicable Law")}
            </h2>
            <p className="text-muted-foreground">
              {t(
                "Op alle overeenkomsten is het Belgisch recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechtbank te Gent.",
                "Belgian law applies to all agreements. Disputes will be submitted to the competent court in Ghent."
              )}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
