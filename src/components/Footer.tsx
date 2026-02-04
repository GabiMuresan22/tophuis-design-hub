import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { name: t("Home", "Home"), path: "/" },
    { name: t("Diensten", "Services"), path: "/diensten" },
    { name: t("Realisaties", "Projects"), path: "/realisaties" },
    { name: t("Over Ons", "About Us"), path: "/over-ons" },
    { name: t("Contact", "Contact"), path: "/contact" },
  ];

  const services = [
    t("Vloeren", "Flooring"),
    t("Schilderwerken", "Painting"),
    t("Sanitair & Loodgieterij", "Plumbing & Fixtures"),
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src="/assets/logo.png" 
                alt="TopHuis - Uw Visie, Onze Perfectie" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 mb-6">
              {t(
                "Renovatie met Precisie. Wij transformeren uw woning met vakmanschap en oog voor detail.",
                "Renovation with Precision. We transform your home with craftsmanship and attention to detail."
              )}
            </p>
            <p className="text-sm text-primary-foreground/60">
              BTW: BE 1022.501.249
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6">
              {t("Snelle Links", "Quick Links")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6">
              {t("Onze Diensten", "Our Services")}
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-primary-foreground/80"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6">
              {t("Contact", "Contact")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                <span className="text-primary-foreground/80">
                  Grote Baan 21<br />
                  9920 Lievegem, {t("België", "Belgium")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary" />
                <a
                  href="tel:+32123456789"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  +32 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary" />
                <a
                  href="mailto:info@tophuis.be"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  info@tophuis.be
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-secondary mt-0.5" />
                <span className="text-primary-foreground/80">
                  {t("Ma - Vr", "Mon - Fri")}: 08:00 - 17:00<br />
                  {t("Za", "Sat")}: 9:00 - 13:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} TopHuis. {t("Alle rechten voorbehouden.", "All rights reserved.")}
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/60">
              <Link to="/privacy" className="hover:text-secondary transition-colors">
                {t("Privacybeleid", "Privacy Policy")}
              </Link>
              <Link to="/terms" className="hover:text-secondary transition-colors">
                {t("Algemene Voorwaarden", "Terms & Conditions")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
