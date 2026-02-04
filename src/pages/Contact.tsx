import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    budget: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: t("Bericht Verzonden!", "Message Sent!"),
      description: t(
        "Wij nemen zo snel mogelijk contact met u op.",
        "We will contact you as soon as possible."
      ),
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            {/* Contact Info */}
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
                      Kerkstraat 123<br />
                      9940 Lievegem, {t("België", "Belgium")}
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
                      href="tel:+32123456789"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      +32 123 456 789
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
                      href="mailto:info@tophuis.be"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      info@tophuis.be
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
                      {t("Zaterdag", "Saturday")}: 9:00 - 13:00<br />
                      {t("Zondag", "Sunday")}: {t("Gesloten", "Closed")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded shadow-architect">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-secondary mx-auto mb-4" />
                  <h3 className="text-2xl font-heading font-semibold mb-2">
                    {t("Bedankt!", "Thank You!")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(
                      "Uw bericht is verzonden. Wij nemen zo snel mogelijk contact met u op.",
                      "Your message has been sent. We will contact you as soon as possible."
                    )}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("Naam", "Name")} *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t("Uw naam", "Your name")}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("E-mail", "Email")} *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t("uw@email.be", "your@email.com")}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t("Telefoon", "Phone")}</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+32 XXX XX XX XX"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">{t("Onderwerp", "Subject")} *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={t("Waar gaat het over?", "What is it about?")}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>{t("Geschat Budget", "Estimated Budget")}</Label>
                    <Select
                      name="budget"
                      value={formData.budget}
                      onValueChange={(val) =>
                        setFormData({ ...formData, budget: val })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue
                          placeholder={t("Kies een budget", "Select a budget")}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">€10.000 - €25.000</SelectItem>
                        <SelectItem value="medium">€25.000 - €50.000</SelectItem>
                        <SelectItem value="large">€50.000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t("Bericht", "Message")} *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t(
                        "Vertel ons meer over uw project...",
                        "Tell us more about your project..."
                      )}
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="blueprint"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      t("Verzenden...", "Sending...")
                    ) : (
                      <>
                        {t("Bericht Versturen", "Send Message")}
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40154.07438849!2d3.5707!3d51.1167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c37b4e3bb9c9e7%3A0x1f0e9d7c99f3b3f0!2s9940%20Lievegem%2C%20Belgium!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
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
