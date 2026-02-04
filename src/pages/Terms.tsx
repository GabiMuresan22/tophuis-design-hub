import { Layout } from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Terms() {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="bg-primary py-16">
        <div className="container-wide text-center">
          <h1 className="text-primary-foreground mb-4">
            {t("Algemene Voorwaarden - TopHuis", "Terms & Conditions - TopHuis")}
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-10">
              {t("Laatst bijgewerkt: februari 2025", "Last updated: February 2025")}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("1. Definities", "1. Definitions")}
            </h2>
            <p className="text-muted-foreground mb-4">
              <strong>TopHuis:</strong> {t("verwijst naar TopHuis BV, gevestigd te Kerkstraat 123, 9940 Lievegem, ingeschreven bij de Kruispuntbank van Ondernemingen (KBO) onder nummer BE 1022.501.249.", "refers to TopHuis BV, established at Kerkstraat 123, 9940 Lievegem, Belgium, registered with the Crossroads Bank for Enterprises (KBO) under number BE 1022.501.249.")}
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>{t("Klant", "Customer")}:</strong> {t("iedere natuurlijke persoon of rechtspersoon die gebruikmaakt van de diensten van TopHuis of een bestelling plaatst via de website.", "any natural or legal person who uses the services of TopHuis or places an order via the website.")}
            </p>
            <p className="text-muted-foreground mb-6">
              <strong>{t("Diensten", "Services")}:</strong> {t("alle werkzaamheden op het gebied van renovatie, inrichting en installatietechnieken zoals beschreven op de website of in de offerte.", "all work in the field of renovation, interior design and installation techniques as described on the website or in the quotation.")}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("2. Toepasselijkheid", "2. Applicability")}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t("Deze algemene voorwaarden zijn van toepassing op elk bezoek aan de website, elke aanvraag, offerte en overeenkomst tussen TopHuis en de klant, tenzij schriftelijk anders is overeengekomen.", "These terms and conditions apply to every visit to the website, every request, quotation and agreement between TopHuis and the customer, unless otherwise agreed in writing.")}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("3. Aanbod en Website", "3. Offer and Website")}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t("De informatie op de website is van algemene aard. TopHuis levert grote inspanningen om ervoor te zorgen dat de informatie volledig, juist en nauwkeurig is.", "The information on the website is of a general nature. TopHuis makes every effort to ensure that the information is complete, correct and accurate.")}
            </p>
            <p className="text-muted-foreground mb-6">
              <strong>{t("Let op", "Note")}:</strong> {t("Kleuren en materialen weergegeven op de website (bijvoorbeeld op foto's van realisaties) kunnen licht afwijken van de werkelijkheid door beeldscherminstellingen. Hieraan kunnen geen rechten worden ontleend.", "Colours and materials shown on the website (e.g. in photos of completed projects) may differ slightly from reality due to screen settings. No rights can be derived from this.")}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("4. Offertes en Totstandkoming Overeenkomst", "4. Quotations and Formation of Agreement")}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t("Alle offertes van TopHuis zijn vrijblijvend en 30 dagen geldig, tenzij anders vermeld (in verband met schommelende materiaalprijzen).", "All quotations from TopHuis are non-binding and valid for 30 days unless otherwise stated (due to fluctuating material prices).")}
            </p>
            <p className="text-muted-foreground mb-4">
              {t("Een overeenkomst komt tot stand op het moment dat de klant de offerte schriftelijk (of per e-mail) goedkeurt, of wanneer TopHuis start met de uitvoering van de werken.", "An agreement is formed when the customer approves the quotation in writing (or by e-mail), or when TopHuis starts executing the works.")}
            </p>
            <p className="text-muted-foreground mb-6">
              {t("Meerwerken die tijdens de uitvoering worden gevraagd door de klant, worden apart verrekend aan de op dat moment geldende tarieven.", "Additional work requested by the customer during execution will be charged separately at the then applicable rates.")}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("5. Prijzen en Betaling", "5. Prices and Payment")}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t("Tenzij anders overeengekomen, zijn onze facturen betaalbaar binnen 14 dagen na factuurdatum.", "Unless otherwise agreed, our invoices are payable within 14 days of the invoice date.")}
            </p>
            <p className="text-muted-foreground mb-4">
              {t("Voor renovatiewerken werken wij doorgaans met voorschotfacturen (bijvoorbeeld: 30% bij goedkeuring, 30% bij start werken, 30% tijdens werken, 10% bij oplevering).", "For renovation work we usually work with advance invoices (e.g. 30% on approval, 30% on start of work, 30% during work, 10% on completion).")}
            </p>
            <p className="text-muted-foreground mb-6">
              {t("Bij niet-tijdige betaling is de klant van rechtswege en zonder ingebrekestelling in verzuim. In dat geval is de klant een verwijlinterest verschuldigd van 10% per jaar, evenals een forfaitaire schadevergoeding van 10% van het factuurbedrag (met een minimum van € 50,00).", "In case of late payment, the customer is automatically in default without prior notice. In that case the customer owes default interest of 10% per year, as well as a fixed compensation of 10% of the invoice amount (with a minimum of €50.00).")}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("6. Uitvoering en Termijnen", "6. Execution and Deadlines")}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t("De opgegeven uitvoeringstermijnen zijn indicatief, tenzij uitdrukkelijk anders bepaald. Vertragingen door overmacht (bijv. weerverlet, late levering door leveranciers) geven geen recht op schadevergoeding.", "The stated execution periods are indicative unless expressly otherwise agreed. Delays due to force majeure (e.g. weather, late delivery by suppliers) do not entitle to compensation.")}
            </p>
            <p className="text-muted-foreground mb-6">
              {t("De klant zorgt ervoor dat de werf toegankelijk is en voorzien is van water en elektriciteit, tenzij anders afgesproken.", "The customer ensures that the site is accessible and equipped with water and electricity, unless otherwise agreed.")}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("7. Eigendomsvoorbehoud", "7. Retention of Title")}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t("Alle door TopHuis geleverde materialen en goederen blijven eigendom van TopHuis totdat de klant de volledige prijs (inclusief eventuele kosten en rente) heeft betaald. De klant mag deze goederen niet vervreemden of verpanden zolang de betaling niet is voldaan.", "All materials and goods supplied by TopHuis remain the property of TopHuis until the customer has paid the full price (including any costs and interest). The customer may not dispose of or pledge these goods as long as payment has not been made.")}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("8. Klachten en Garantie", "8. Complaints and Warranty")}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t("Klachten over zichtbare gebreken moeten onmiddellijk, of uiterlijk binnen 48 uur na de (voorlopige) oplevering, schriftelijk worden gemeld.", "Complaints about visible defects must be reported in writing immediately, or at the latest within 48 hours of (provisional) completion.")}
            </p>
            <p className="text-muted-foreground mb-4">
              {t("Klachten over de factuur dienen binnen 8 dagen na factuurdatum schriftelijk en gemotiveerd te worden ingediend.", "Complaints about the invoice must be submitted in writing and substantiated within 8 days of the invoice date.")}
            </p>
            <p className="text-muted-foreground mb-4">
              {t("Voor verborgen gebreken gelden de wettelijke garantiebepalingen.", "The statutory warranty provisions apply to hidden defects.")}
            </p>
            <p className="text-muted-foreground mb-6">
              {t("TopHuis is aansprakelijk voor de stabiliteit van het gebouw conform de tienjarige aansprakelijkheid (art. 1792 en 2270 BW) indien van toepassing.", "TopHuis is liable for the stability of the building in accordance with the ten-year liability (Art. 1792 and 2270 Belgian Civil Code) where applicable.")}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("9. Aansprakelijkheid", "9. Liability")}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t("TopHuis is niet aansprakelijk voor indirecte schade, gevolgschade, gederfde winst of bedrijfsschade.", "TopHuis is not liable for indirect damage, consequential damage, lost profit or business damage.")}
            </p>
            <p className="text-muted-foreground mb-6">
              {t("De aansprakelijkheid van TopHuis is te allen tijde beperkt tot het bedrag dat in het desbetreffende geval door onze bedrijfsaansprakelijkheidsverzekering wordt uitbetaald.", "The liability of TopHuis is at all times limited to the amount paid out in the relevant case by our professional liability insurance.")}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("10. Overmacht", "10. Force Majeure")}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t("In geval van overmacht (zoals pandemie, stakingen, extreme weersomstandigheden, onvoorziene tekorten aan grondstoffen) heeft TopHuis het recht om de uitvoering van de overeenkomst op te schorten of de overeenkomst geheel of gedeeltelijk te ontbinden, zonder tot enige schadevergoeding gehouden te zijn.", "In case of force majeure (such as pandemic, strikes, extreme weather conditions, unforeseen shortages of raw materials) TopHuis has the right to suspend the performance of the agreement or to dissolve the agreement in whole or in part, without being liable for any compensation.")}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("11. Toepasselijk recht en Geschillen", "11. Applicable Law and Disputes")}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t("Op alle rechtsbetrekkingen waarbij TopHuis partij is, is uitsluitend het Belgisch recht van toepassing.", "Belgian law exclusively applies to all legal relations to which TopHuis is a party.")}
            </p>
            <p className="text-muted-foreground mb-6">
              {t("In geval van geschillen zijn uitsluitend de rechtbanken van het gerechtelijk arrondissement Gent, afdeling Kortrijk bevoegd.", "In case of disputes, only the courts of the judicial district of Gent, division Kortrijk have jurisdiction.")}
            </p>

            <h2 className="text-xl font-heading font-semibold mb-4">
              {t("12. Wijzigingen", "12. Amendments")}
            </h2>
            <p className="text-muted-foreground">
              {t("TopHuis behoudt zich het recht voor om deze algemene voorwaarden te wijzigen. De versie gepubliceerd op de website is de geldende versie op het moment van het sluiten van de overeenkomst.", "TopHuis reserves the right to amend these terms and conditions. The version published on the website is the version in force at the time of conclusion of the agreement.")}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
