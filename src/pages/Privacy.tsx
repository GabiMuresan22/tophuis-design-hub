import { Layout } from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Privacy() {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="bg-primary py-16">
        <div className="container-wide text-center">
          <h1 className="text-primary-foreground mb-4">
            {t("Privacyverklaring - TopHuis", "Privacy Policy - TopHuis")}
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-8">
              {t("Laatst bijgewerkt: februari 2025", "Last updated: February 2025")}
            </p>

            <p className="text-muted-foreground mb-8">
              {t(
                "TopHuis (hierna \"wij\", \"ons\" of \"onze\") hecht veel waarde aan de bescherming van uw persoonsgegevens. In deze privacyverklaring geven wij heldere en transparante informatie over hoe wij omgaan met persoonsgegevens van onze klanten, leveranciers en websitebezoekers.",
                "TopHuis (hereinafter \"we\", \"us\" or \"our\") attaches great importance to the protection of your personal data. In this privacy policy we provide clear and transparent information about how we handle the personal data of our customers, suppliers and website visitors."
              )}
            </p>
            <p className="text-muted-foreground mb-10">
              {t(
                "Wij houden ons aan de toepasselijke wet- en regelgeving, waaronder de Algemene Verordening Gegevensbescherming (AVG/GDPR).",
                "We comply with applicable laws and regulations, including the General Data Protection Regulation (GDPR)."
              )}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("1. Wie is verantwoordelijk?", "1. Who is responsible?")}
            </h2>
            <p className="text-muted-foreground mb-6">
              TopHuis BV<br />
              {t("Adres", "Address")}: Kerkstraat 123, 9940 Lievegem, {t("België", "Belgium")}<br />
              {t("Ondernemingsnummer (KBO)", "Company number (KBO)")}: BE 1022.501.249<br />
              E-mail: privacy@tophuis.be<br />
              {t("Telefoon", "Phone")}: +32 123 456 789
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("2. Welke gegevens verwerken wij?", "2. What data do we process?")}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t(
                "Wij verwerken persoonsgegevens die noodzakelijk zijn voor onze renovatiewerkzaamheden. Dit omvat:",
                "We process personal data that is necessary for our renovation work. This includes:"
              )}
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li><strong>{t("Identiteitsgegevens", "Identity data")}:</strong> {t("Voornaam, achternaam.", "First name, last name.")}</li>
              <li><strong>{t("Contactgegevens", "Contact data")}:</strong> {t("Telefoonnummer, e-mailadres, facturatieadres.", "Phone number, email address, billing address.")}</li>
              <li><strong>{t("Projectgegevens", "Project data")}:</strong> {t("Werfadres (indien anders dan facturatieadres), technische plannen, toegangscodes (bijv. sleutelkluisjes) en foto's van de werken.", "Site address (if different from billing address), technical plans, access codes (e.g. key boxes) and photos of the works.")}</li>
              <li><strong>{t("Financiële gegevens", "Financial data")}:</strong> {t("Bankrekeningnummers, BTW-nummers (voor professionele klanten), facturatiehistoriek.", "Bank account numbers, VAT numbers (for professional clients), billing history.")}</li>
              <li><strong>{t("Elektronische gegevens", "Electronic data")}:</strong> {t("IP-adres en cookies (indien u onze website bezoekt).", "IP address and cookies (when you visit our website).")}</li>
            </ul>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("3. Waarom verwerken wij uw gegevens? (Doeleinden)", "3. Why do we process your data? (Purposes)")}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t("Wij gebruiken uw gegevens voor de volgende doelen:", "We use your data for the following purposes:")}
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li><strong>{t("Offerte & Communicatie", "Quote & Communication")}:</strong> {t("Om een offerte op te stellen, een werfbezoek in te plannen en de renovatieplannen te bespreken.", "To prepare a quote, schedule a site visit and discuss renovation plans.")}</li>
              <li><strong>{t("Uitvoering van de Overeenkomst", "Performance of the Contract")}:</strong> {t("Om de renovatiewerken uit te voeren, te coördineren met architecten/ingenieurs en de veiligheid op de werf te waarborgen.", "To carry out the renovation work, coordinate with architects/engineers and ensure safety on site.")}</li>
              <li><strong>{t("Facturatie & Boekhouding", "Billing & Accounting")}:</strong> {t("Om facturen te versturen en te voldoen aan de Belgische fiscale en boekhoudkundige verplichtingen.", "To send invoices and comply with Belgian tax and accounting obligations.")}</li>
              <li><strong>{t("Vergunningen & Administratie", "Permits & Administration")}:</strong> {t("Voor het aanvragen van bouwvergunningen of parkeerverbodsborden (inname openbaar domein) bij de stad/gemeente.", "For applying for building permits or no-parking signs (use of public domain) with the city/municipality.")}</li>
              <li><strong>{t("Direct Marketing", "Direct Marketing")}:</strong> {t("Om u updates of wensen te sturen (enkel indien u hiervoor toestemming heeft gegeven of een bestaande klant bent).", "To send you updates or offers (only if you have given consent or are an existing customer).")}</li>
            </ul>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("4. Rechtsgronden", "4. Legal bases")}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t("Wij verwerken uw gegevens op basis van de volgende rechtsgronden (Art. 6 AVG):", "We process your data on the basis of the following legal grounds (Art. 6 GDPR):")}
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li><strong>{t("Contractuele noodzaak", "Contractual necessity")}:</strong> {t("Wij kunnen uw woning niet renoveren zonder uw adres en contactgegevens.", "We cannot renovate your home without your address and contact details.")}</li>
              <li><strong>{t("Wettelijke verplichting", "Legal obligation")}:</strong> {t("Wij zijn verplicht facturen te bewaren voor de belastingdienst en, indien van toepassing, aanwezigheidsregistratie (Checkin@work) te doen voor de sociale zekerheid.", "We are required to keep invoices for the tax authorities and, where applicable, to record attendance (Checkin@work) for social security.")}</li>
              <li><strong>{t("Gerechtvaardigd belang", "Legitimate interest")}:</strong> {t("Voor de periode van de tienjarige aansprakelijkheid met betrekking tot bouwgebreken.", "For the ten-year liability period regarding construction defects.")}</li>
              <li><strong>{t("Toestemming", "Consent")}:</strong> {t("Voor het gebruik van foto's van uw afgewerkte project op onze sociale media of website (wij vragen dit altijd apart).", "For the use of photos of your completed project on our social media or website (we always ask this separately).")}</li>
            </ul>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("5. Delen van gegevens met derden", "5. Sharing data with third parties")}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t("Wij verkopen uw gegevens niet. Voor een renovatieproject moeten wij echter informatie delen met:", "We do not sell your data. However, for a renovation project we must share information with:")}
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li><strong>{t("Onderaannemers", "Subcontractors")}:</strong> {t("Elektriciens, loodgieters, dakdekkers of stukadoors die in onze opdracht op uw werf werken.", "Electricians, plumbers, roofers or plasterers who work on your site on our behalf.")}</li>
              <li><strong>{t("Professionele diensten", "Professional services")}:</strong> {t("Architecten, EPB-verslaggevers of veiligheidscoördinatoren.", "Architects, EPB reporters or safety coordinators.")}</li>
              <li><strong>{t("Overheidsinstanties", "Government bodies")}:</strong> {t("Gemeenten (voor vergunningen) of de RSZ (voor Checkin@work op grote werven).", "Municipalities (for permits) or the NSSO (for Checkin@work on large sites).")}</li>
              <li><strong>{t("IT & Administratie", "IT & Administration")}:</strong> {t("Onze boekhouder en softwareleveranciers (bijv. cloudopslag, facturatiesoftware).", "Our accountant and software suppliers (e.g. cloud storage, invoicing software).")}</li>
            </ul>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("6. Bewaartermijn", "6. Retention period")}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t("Wij bewaren gegevens niet langer dan noodzakelijk, met specifieke uitzonderingen voor de bouwsector:", "We do not keep data longer than necessary, with specific exceptions for the construction sector:")}
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li><strong>{t("Algemene klantgegevens", "General customer data")}:</strong> {t("Bewaard voor de duur van het project.", "Kept for the duration of the project.")}</li>
              <li><strong>{t("Facturatiegegevens", "Billing data")}:</strong> {t("Bewaard gedurende 7 jaar (wettelijke fiscale verplichting).", "Kept for 7 years (legal tax obligation).")}</li>
              <li><strong>{t("Technische/Aansprakelijkheidsgegevens", "Technical/Liability data")}:</strong> {t("Bewaard gedurende 10 jaar na de definitieve oplevering van de werken (om de tienjarige burgerlijke aansprakelijkheid te dekken).", "Kept for 10 years after final delivery of the works (to cover the ten-year civil liability).")}</li>
            </ul>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("7. Uw rechten", "7. Your rights")}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t("U heeft het recht om:", "You have the right to:")}
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>{t("Inzage te vragen in de persoonsgegevens die wij van u hebben.", "Request access to the personal data we hold about you.")}</li>
              <li>{t("Correctie van onjuiste gegevens te vragen.", "Request correction of incorrect data.")}</li>
              <li>{t("Verwijdering van gegevens te vragen (tenzij wij deze moeten bewaren voor belastingen of aansprakelijkheid).", "Request deletion of data (unless we must retain it for tax or liability purposes).")}</li>
              <li>{t("Uw toestemming in te trekken (bijv. voor marketingfoto's) op elk moment.", "Withdraw your consent (e.g. for marketing photos) at any time.")}</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              {t("Om deze rechten uit te oefenen, kunt u contact met ons opnemen via privacy@tophuis.be.", "To exercise these rights, you can contact us at privacy@tophuis.be.")}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("8. Beveiliging", "8. Security")}
            </h2>
            <p className="text-muted-foreground">
              {t(
                "Wij hebben passende technische en organisatorische maatregelen genomen om uw persoonsgegevens te beveiligen tegen onrechtmatige verwerking, waaronder het beveiligen van onze IT-systemen en het maken van geheimhoudingsafspraken met onze onderaannemers.",
                "We have taken appropriate technical and organizational measures to protect your personal data against unlawful processing, including securing our IT systems and entering into confidentiality agreements with our subcontractors."
              )}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
