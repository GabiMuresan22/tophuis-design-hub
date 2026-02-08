import { Layout } from "@/components/Layout";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container-wide text-center">
          <h1 className="text-primary-foreground mb-4">
            {t("Contacteer Ons", "Contact Us")}
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-primary-foreground/80">
            {t(
              "Heeft u een vraag of wilt u een offerte aanvragen? Wij staan voor u klaar.",
              "Do you have a question or would you like to request a quote? We're here for you."
            )}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info - Kept exactly as it was */}
            <div>
              <h2 className="mb-6">{t("Neem Contact Op", "Get In Touch")}</h2>
              <p className="text-lg mb-8">
                {t(
                  "Wij beantwoorden uw vragen graag. U kunt ons bereiken via onderstaande gegevens of het contactformulier invullen.",
                  "We're happy to answer your questions. You can reach us via the details below or fill in the contact form."
                )}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blueprint-light rounded flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{t("Adres", "Address")}</h3>
                    <p className="text-muted-foreground">
                      Grote Baan 21<br />
                      9920 Lievegem, {t("België", "Belgium")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blueprint-light rounded flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{t("Telefoon", "Phone")}</h3>
                    <a
                      href="tel:+32493288887"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      +32 493 28 88 87
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blueprint-light rounded flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{t("E-mail", "Email")}</h3>
                    <a
                      href="mailto:gabimuresa2289@gmail.com"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      gabimuresa2289@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blueprint-light rounded flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{t("Openingsuren", "Opening Hours")}</h3>
                    <p className="text-muted-foreground">
                      {t("Maandag - Vrijdag", "Monday - Friday")}: 08:00 - 17:00<br />
                      {t("Zondag", "Sunday")}: {t("Gesloten", "Closed")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - JotForm iframe */}
            <div className="bg-card p-4 rounded shadow-architect h-full min-h-[600px]">
              <iframe
                id="JotFormIFrame-260382173384357"
                title="TopHuis Contact Form"
                src="https://form.jotform.com/260382173384357"
                allowFullScreen
                allow="geolocation; microphone; camera"
                className="w-full h-full border-none"
                style={{ minHeight: "600px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40154.07438849!2d3.5707!3d51.1167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c37b4e3bb9c9e7%3A0x1f0e9d7c99f3b3f0!2s9920%20Lievegem%2C%20Belgium!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={t("TopHuis Locatie", "TopHuis Location")}
        />
      </section>
    </Layout>
  );
}
