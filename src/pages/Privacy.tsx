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
            <p className="text-muted-foreground mb-2">
              {t("Laatst bijgewerkt: april 2026", "Last updated: April 2026")}
            </p>
            <p className="text-sm text-muted-foreground/80 mb-8">
              {t("Deze pagina is beschikbaar in het Nederlands en Engels. Gebruik de taalkeuze in het menu om van taal te wisselen.", "This page is available in Dutch and English. Use the language selector in the menu to switch languages.")}
            </p>

            <p className="text-muted-foreground mb-8">
              {t(
                "TopHuis (hierna \"wij\", \"ons\" of \"onze\") hecht veel waarde aan de bescherming van uw persoonsgegevens. In deze privacyverklaring geven wij heldere en transparante informatie over hoe wij omgaan met persoonsgegevens van onze klanten, leveranciers en websitebezoekers.",
                "TopHuis (hereinafter \"we\", \"us\" or \"our\") attaches great importance to the protection of your personal data. In this privacy policy we provide clear and transparent information about how we handle the personal data of our customers, suppliers and website visitors."
              )}
            </p>
            <p className="text-muted-foreground mb-10">
              {t(
                "Wij houden ons aan de toepasselijke wet- en regelgeving, waaronder de Algemene Verordening Gegevensbescherming (AVG/GDPR) en het Belgisch Wetboek van Economisch Recht (Boek XII).",
                "We comply with applicable laws and regulations, including the General Data Protection Regulation (GDPR) and the Belgian Code of Economic Law (Book XII)."
              )}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("1. Wie is verantwoordelijk?", "1. Who is responsible?")}
            </h2>
            <p className="text-muted-foreground mb-6">
              TopHuis BV<br />
              {t("Adres", "Address")}: Grote Baan 21, 9920 Lievegem, {t("België", "Belgium")}<br />
              {t("Ondernemingsnummer (KBO)", "Company number (KBO)")}: BE 1022.501.249<br />
              {t("BTW-nummer", "VAT number")}: BE 1022.501.249<br />
              E-mail: info@tophuis.be<br />
              {t("Telefoon", "Phone")}: +32 493 28 88 87<br />
              {t("Hosting", "Hosting")}: Combell NV, Skaldenstraat 121, 9042 Gent, {t("België", "Belgium")}
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
              <li><strong>{t("Direct Marketing", "Direct Marketing")}:</strong> {t("Om u updates of wensen te sturen (enkel indien u hiervoor toestemming heeft gegeven of een bestaande klant bent).", "To send you updates or offers (only if you have given consent or are an existing customer.")}</li>
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
              <li><strong>{t("Google Analytics", "Google Analytics")}:</strong> {t("Enkel indien u analytische cookies accepteert, worden anonieme bezoekersgegevens gedeeld met Google LLC (VS) via Google Analytics 4. IP-adressen worden geanonimiseerd.", "Only if you accept analytics cookies, anonymous visitor data is shared with Google LLC (USA) via Google Analytics 4. IP addresses are anonymised.")}</li>
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
              {t(
                "Op grond van de AVG/GDPR heeft u de volgende rechten:",
                "Under the GDPR you have the following rights:"
              )}
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li><strong>{t("Recht op inzage (Art. 15)", "Right of access (Art. 15)")}:</strong> {t("U kunt opvragen welke persoonsgegevens wij van u verwerken.", "You can request which personal data we process about you.")}</li>
              <li><strong>{t("Recht op rectificatie (Art. 16)", "Right to rectification (Art. 16)")}:</strong> {t("U kunt onjuiste of onvolledige gegevens laten corrigeren.", "You can have incorrect or incomplete data corrected.")}</li>
              <li><strong>{t("Recht op gegevenswissing (Art. 17)", "Right to erasure (Art. 17)")}:</strong> {t("U kunt verwijdering van uw gegevens vragen, tenzij wij deze wettelijk moeten bewaren (bijv. voor belastingen of aansprakelijkheid).", "You can request deletion of your data, unless we are legally required to keep it (e.g. for tax or liability purposes).")}</li>
              <li><strong>{t("Recht op beperking van de verwerking (Art. 18)", "Right to restriction of processing (Art. 18)")}:</strong> {t("U kunt in bepaalde gevallen vragen om de verwerking van uw gegevens tijdelijk te beperken.", "In certain cases you can ask us to temporarily restrict the processing of your data.")}</li>
              <li><strong>{t("Recht op gegevensoverdraagbaarheid (Art. 20)", "Right to data portability (Art. 20)")}:</strong> {t("U kunt vragen om uw persoonsgegevens in een gestructureerd, gangbaar en machineleesbaar formaat te ontvangen, voor zover van toepassing.", "You can request to receive your personal data in a structured, commonly used and machine-readable format, where applicable.")}</li>
              <li><strong>{t("Recht van bezwaar (Art. 21)", "Right to object (Art. 21)")}:</strong> {t("U kunt bezwaar maken tegen de verwerking van uw gegevens op basis van gerechtvaardigd belang of voor direct-marketingdoeleinden.", "You can object to the processing of your data on the basis of legitimate interest or for direct marketing purposes.")}</li>
              <li><strong>{t("Recht om toestemming in te trekken", "Right to withdraw consent")}:</strong> {t("U kunt uw toestemming (bijv. voor marketingfoto's of analytische cookies) op elk moment intrekken, zonder dat dit gevolgen heeft voor de rechtmatigheid van de verwerking vóór de intrekking.", "You can withdraw your consent (e.g. for marketing photos or analytics cookies) at any time, without affecting the lawfulness of processing before the withdrawal.")}</li>
              <li><strong>{t("Recht om niet onderworpen te worden aan geautomatiseerde besluitvorming (Art. 22)", "Right not to be subject to automated decision-making (Art. 22)")}:</strong> {t("Wij maken geen gebruik van geautomatiseerde besluitvorming of profilering met rechtsgevolgen.", "We do not use automated decision-making or profiling with legal effects.")}</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              {t(
                "Om deze rechten uit te oefenen, kunt u contact met ons opnemen via info@tophuis.be. Wij reageren binnen 30 dagen.",
                "To exercise these rights, you can contact us at info@tophuis.be. We will respond within 30 days."
              )}
            </p>
            <p className="text-muted-foreground mb-6">
              {t(
                "U heeft ook het recht om een klacht in te dienen bij de Gegevensbeschermingsautoriteit (GBA): Drukpersstraat 35, 1000 Brussel — contact@apd-gba.be — www.gegevensbeschermingsautoriteit.be.",
                "You also have the right to lodge a complaint with the Belgian Data Protection Authority (GBA): Rue de la Presse 35, 1000 Brussels — contact@apd-gba.be — www.dataprotectionauthority.be."
              )}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("8. Beveiliging", "8. Security")}
            </h2>
            <p className="text-muted-foreground mb-10">
              {t(
                "Wij hebben passende technische en organisatorische maatregelen genomen om uw persoonsgegevens te beveiligen tegen onrechtmatige verwerking, waaronder het beveiligen van onze IT-systemen en het maken van geheimhoudingsafspraken met onze onderaannemers.",
                "We have taken appropriate technical and organizational measures to protect your personal data against unlawful processing, including securing our IT systems and entering into confidentiality agreements with our subcontractors."
              )}
            </p>

            <h2 id="cookies" className="text-xl font-heading font-semibold mb-4">
              {t("9. Cookiebeleid", "9. Cookie Policy")}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t(
                "Onze website maakt gebruik van cookies en vergelijkbare technologieën. Een cookie is een klein tekstbestand dat op uw apparaat wordt opgeslagen wanneer u onze website bezoekt.",
                "Our website uses cookies and similar technologies. A cookie is a small text file stored on your device when you visit our website."
              )}
            </p>

            <h3 className="text-lg font-heading font-semibold mb-3">
              {t("9.1 Essentiële cookies", "9.1 Essential cookies")}
            </h3>
            <p className="text-muted-foreground mb-2">
              {t(
                "Deze cookies zijn strikt noodzakelijk voor de werking van de website en kunnen niet worden uitgeschakeld.",
                "These cookies are strictly necessary for the functioning of the website and cannot be disabled."
              )}
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted-foreground border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 pr-4 font-semibold">{t("Naam", "Name")}</th>
                    <th className="text-left py-2 pr-4 font-semibold">{t("Doel", "Purpose")}</th>
                    <th className="text-left py-2 font-semibold">{t("Bewaartermijn", "Retention")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-mono text-xs">tophuis_cookie_consent</td>
                    <td className="py-2 pr-4">{t("Slaat uw cookievoorkeur op (localStorage)", "Stores your cookie preference (localStorage)")}</td>
                    <td className="py-2">{t("Tot u de browser cache wist", "Until you clear browser storage")}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-heading font-semibold mb-3">
              {t("9.2 Analytische cookies", "9.2 Analytics cookies")}
            </h3>
            <p className="text-muted-foreground mb-2">
              {t(
                "Deze cookies worden enkel geplaatst na uw toestemming. Ze helpen ons begrijpen hoe bezoekers de website gebruiken, zodat wij de gebruikerservaring kunnen verbeteren.",
                "These cookies are only placed after your consent. They help us understand how visitors use the website so we can improve the user experience."
              )}
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted-foreground border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 pr-4 font-semibold">{t("Naam", "Name")}</th>
                    <th className="text-left py-2 pr-4 font-semibold">{t("Aanbieder", "Provider")}</th>
                    <th className="text-left py-2 pr-4 font-semibold">{t("Doel", "Purpose")}</th>
                    <th className="text-left py-2 font-semibold">{t("Bewaartermijn", "Retention")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-mono text-xs">_ga</td>
                    <td className="py-2 pr-4">Google Analytics</td>
                    <td className="py-2 pr-4">{t("Onderscheidt bezoekers (anoniem)", "Distinguishes visitors (anonymous)")}</td>
                    <td className="py-2">2 {t("jaar", "years")}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-mono text-xs">_ga_*</td>
                    <td className="py-2 pr-4">Google Analytics 4</td>
                    <td className="py-2 pr-4">{t("Sessie- en paginaweergave-tracking (anoniem)", "Session and page view tracking (anonymous)")}</td>
                    <td className="py-2">2 {t("jaar", "years")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mb-4">
              {t(
                "IP-adressen worden geanonimiseerd. Wij delen geen gegevens met Google voor advertentiedoeleinden.",
                "IP addresses are anonymised. We do not share data with Google for advertising purposes."
              )}
            </p>

            <h3 className="text-lg font-heading font-semibold mb-3">
              {t("9.3 Marketing cookies", "9.3 Marketing cookies")}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t(
                "Wij maken momenteel geen gebruik van marketing- of advertentiecookies van derden. Mocht dit in de toekomst veranderen, dan zal deze pagina worden bijgewerkt en opnieuw uw toestemming worden gevraagd.",
                "We currently do not use third-party marketing or advertising cookies. Should this change in the future, this page will be updated and your consent will be requested again."
              )}
            </p>

            <h3 className="text-lg font-heading font-semibold mb-3">
              {t("9.4 Cookies beheren", "9.4 Managing cookies")}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t(
                "U kunt uw cookievoorkeuren op elk moment aanpassen via de cookiebanner onderaan de pagina. Daarnaast kunt u cookies beheren of verwijderen via de instellingen van uw browser:",
                "You can adjust your cookie preferences at any time via the cookie banner at the bottom of the page. You can also manage or delete cookies via your browser settings:"
              )}
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-1">
              <li>Chrome: {t("Instellingen → Privacy en beveiliging → Cookies", "Settings → Privacy and security → Cookies")}</li>
              <li>Firefox: {t("Instellingen → Privacy & Beveiliging → Cookies", "Settings → Privacy & Security → Cookies")}</li>
              <li>Safari: {t("Voorkeuren → Privacy → Cookies", "Preferences → Privacy → Cookies")}</li>
              <li>Edge: {t("Instellingen → Privacy, zoeken en services → Cookies", "Settings → Privacy, search and services → Cookies")}</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
