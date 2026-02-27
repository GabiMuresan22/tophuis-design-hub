import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { hasConsent, initGoogleAnalytics, trackPageView } from "@/lib/analytics";

/**
 * Runs GA only after the user has accepted cookies (see CookieConsent).
 * - Does nothing until hasConsent() is true (set when user clicks "Accepteren").
 * - For returning visitors: inits GA and tracks current page when consent was already given.
 * - On every route change: sends page_view only when consent is given.
 */
export function GoogleAnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (!hasConsent()) return;
    initGoogleAnalytics();
  }, []);

  useEffect(() => {
    if (!hasConsent()) return;
    trackPageView(location.pathname + location.search, document.title);
  }, [location.pathname, location.search]);

  return null;
}
