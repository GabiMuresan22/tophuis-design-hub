import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Cookie, X } from "lucide-react";
import { initGoogleAnalytics, trackPageView } from "@/lib/analytics";

const COOKIE_CONSENT_KEY = "tophuis_cookie_consent";

export function CookieConsent() {
  const { t } = useLanguage();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
    // Start Google Analytics only after user accepts
    initGoogleAnalytics();
    trackPageView(location.pathname + location.search, document.title);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in">
      <div className="container-wide">
        <div className="bg-card border border-border rounded-lg shadow-architect-lg p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading font-semibold text-primary mb-1">
                  {t("Wij gebruiken cookies", "We use cookies")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(
                    "Wij gebruiken cookies om uw ervaring te verbeteren en onze website te analyseren. Door op 'Accepteren' te klikken, gaat u akkoord met ons gebruik van cookies conform ons ",
                    "We use cookies to improve your experience and analyze our website. By clicking 'Accept', you agree to our use of cookies in accordance with our "
                  )}
                  <Link 
                    to="/privacy" 
                    className="text-secondary hover:underline"
                  >
                    {t("privacybeleid", "privacy policy")}
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDecline}
                className="flex-1 md:flex-none"
              >
                {t("Weigeren", "Decline")}
              </Button>
              <Button
                variant="blueprint"
                size="sm"
                onClick={handleAccept}
                className="flex-1 md:flex-none"
              >
                {t("Accepteren", "Accept")}
              </Button>
            </div>
            <button
              onClick={handleDecline}
              className="absolute top-3 right-3 md:static p-1 text-muted-foreground hover:text-primary transition-colors"
              aria-label={t("Sluiten", "Close")}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
