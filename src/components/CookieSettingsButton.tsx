import { Cookie } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function CookieSettingsButton() {
  const { t } = useLanguage();

  const openCookiePreferences = () => {
    window.dispatchEvent(new Event("openCookiePreferences"));
  };

  return (
    <button
      type="button"
      onClick={openCookiePreferences}
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full border border-border bg-background/95 px-4 py-3 text-sm font-medium text-foreground shadow-lg backdrop-blur transition-colors hover:bg-accent hover:text-accent-foreground"
      aria-label={t("Cookie-instellingen openen", "Open cookie settings")}
      title={t("Cookie-instellingen", "Cookie Settings")}
    >
      <Cookie className="h-4 w-4" />
      <span>{t("Cookies", "Cookies")}</span>
    </button>
  );
}
