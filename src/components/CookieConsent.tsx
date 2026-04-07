import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguage } from "@/contexts/LanguageContext";
import { Cookie, X } from "lucide-react";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = "tophuis_cookie_consent";

export function CookieConsent() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    try {
      const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!consent) {
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  const saveAndNotify = (prefs: CookiePreferences) => {
    try {
      // Store "accepted" / "declined" for full accept/reject; JSON for granular
      let value: string;
      if (prefs.analytics && prefs.marketing) {
        value = "accepted";
      } else if (!prefs.analytics && !prefs.marketing) {
        value = "declined";
      } else {
        value = JSON.stringify(prefs);
      }
      localStorage.setItem(COOKIE_CONSENT_KEY, value);
    } catch {
      // localStorage may be blocked
    }
    window.dispatchEvent(new Event("cookieConsentUpdated"));
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    saveAndNotify({ essential: true, analytics: true, marketing: true });
  };

  const handleRejectNonEssential = () => {
    saveAndNotify({ essential: true, analytics: false, marketing: false });
  };

  const handleSavePreferences = () => {
    saveAndNotify(preferences);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in">
      <div className="container-wide">
        <Card className="p-6 shadow-architect-lg bg-card border-border">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading font-semibold text-primary mb-1">
                  {t("Cookie Voorkeuren", "Cookie Preferences")}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(
                    "We gebruiken cookies om uw browse-ervaring te verbeteren, siteverkeer te analyseren en inhoud te personaliseren. U kunt kiezen welke cookies u toestaat.",
                    "We use cookies to improve your browsing experience, analyze site traffic, and personalize content. You can choose which cookies you allow."
                  )}{" "}
                  <Link to="/privacy" className="text-secondary hover:underline">
                    {t("Lees meer in ons privacybeleid", "Learn more in our privacy policy")}
                  </Link>
                  .
                </p>
              </div>
            </div>
            <button
              onClick={handleRejectNonEssential}
              className="p-1 text-muted-foreground hover:text-primary transition-colors ml-2"
              aria-label={t("Sluiten", "Close")}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {showDetails && (
            <div className="space-y-4 mb-4">
              <div className="flex items-start gap-3">
                <Checkbox checked disabled id="essential" />
                <div className="flex-1">
                  <label htmlFor="essential" className="text-sm font-medium text-foreground">
                    {t("Essentiële Cookies", "Essential Cookies")}
                  </label>
                  <p className="text-xs text-muted-foreground">
                    {t(
                      "Nodig voor websitefunctionaliteit (authenticatie, beveiliging)",
                      "Required for website functionality (authentication, security)"
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  checked={preferences.analytics}
                  onCheckedChange={(checked) =>
                    setPreferences({ ...preferences, analytics: checked as boolean })
                  }
                  id="analytics"
                />
                <div className="flex-1">
                  <label htmlFor="analytics" className="text-sm font-medium text-foreground">
                    {t("Analytische Cookies", "Analytics Cookies")}
                  </label>
                  <p className="text-xs text-muted-foreground">
                    {t(
                      "Helpen ons te begrijpen hoe bezoekers onze site gebruiken",
                      "Help us understand how visitors use our site"
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  checked={preferences.marketing}
                  onCheckedChange={(checked) =>
                    setPreferences({ ...preferences, marketing: checked as boolean })
                  }
                  id="marketing"
                />
                <div className="flex-1">
                  <label htmlFor="marketing" className="text-sm font-medium text-foreground">
                    {t("Marketing Cookies", "Marketing Cookies")}
                  </label>
                  <p className="text-xs text-muted-foreground">
                    {t(
                      "Gebruikt om relevante advertenties te leveren",
                      "Used to deliver relevant advertisements"
                    )}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {!showDetails ? (
              <>
                <Button variant="blueprint" size="sm" onClick={handleAcceptAll} className="flex-1 sm:flex-none">
                  {t("Accepteer Alles", "Accept All")}
                </Button>
                <Button variant="outline" size="sm" onClick={() => setShowDetails(true)} className="flex-1 sm:flex-none">
                  {t("Aanpassen", "Customize")}
                </Button>
                <Button variant="ghost" size="sm" onClick={handleRejectNonEssential} className="flex-1 sm:flex-none">
                  {t("Weiger Niet-Essentieel", "Reject Non-Essential")}
                </Button>
              </>
            ) : (
              <>
                <Button variant="blueprint" size="sm" onClick={handleSavePreferences} className="flex-1 sm:flex-none">
                  {t("Voorkeuren Opslaan", "Save Preferences")}
                </Button>
                <Button variant="outline" size="sm" onClick={handleAcceptAll} className="flex-1 sm:flex-none">
                  {t("Accepteer Alles", "Accept All")}
                </Button>
              </>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
