import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const navItems = {
  nl: [
    { name: "Home", path: "/" },
    { name: "Diensten", path: "/diensten" },
    { name: "Realisaties", path: "/realisaties" },
    { name: "Over Ons", path: "/over-ons" },
    { name: "Contact", path: "/contact" },
  ],
  en: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/diensten" },
    { name: "Projects", path: "/realisaties" },
    { name: "About Us", path: "/over-ons" },
    { name: "Contact", path: "/contact" },
  ],
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const currentNavItems = navItems[language];

  const toggleLanguage = () => {
    setLanguage(language === "nl" ? "en" : "nl");
  };

  return (
    <header className="sticky top-0 z-50 bg-card shadow-architect-sm">
      <div className="container-wide">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/assets/logo.png" 
              alt="TopHuis - Uw Visie, Onze Perfectie" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {currentNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-heading text-sm font-medium transition-colors hover:text-secondary ${
                  location.pathname === item.path
                    ? "text-secondary"
                    : "text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Tablet Navigation */}
          <nav className="hidden md:flex lg:hidden items-center gap-4">
            {currentNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-heading text-xs font-medium transition-colors hover:text-secondary ${
                  location.pathname === item.path
                    ? "text-secondary"
                    : "text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button + Language Toggle - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-border text-sm font-medium text-primary hover:bg-muted transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4" />
              <span>{language.toUpperCase()}</span>
            </button>
            <a
              href="tel:+32493288887"
              className="flex items-center gap-2 text-primary font-medium"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm">+32 493 28 88 87</span>
            </a>
            <Button variant="blueprint" asChild>
              <Link to="/contact">{t("Offerte Aanvragen", "Get a Quote")}</Link>
            </Button>
          </div>

          {/* CTA Button + Language Toggle - Tablet */}
          <div className="hidden md:flex lg:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded border border-border text-xs font-medium text-primary hover:bg-muted transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>{language.toUpperCase()}</span>
            </button>
            <Button variant="blueprint" size="sm" asChild>
              <Link to="/contact">{t("Offerte", "Quote")}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {currentNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-heading text-base font-medium px-2 py-2 transition-colors hover:text-secondary ${
                    location.pathname === item.path
                      ? "text-secondary"
                      : "text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-2 py-2 text-primary font-medium"
              >
                <Globe className="h-5 w-5" />
                <span>{language === "nl" ? "English" : "Nederlands"}</span>
              </button>
              <div className="pt-4 border-t border-border">
                <Button variant="blueprint" className="w-full" asChild>
                  <Link to="/contact">{t("Offerte Aanvragen", "Get a Quote")}</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
