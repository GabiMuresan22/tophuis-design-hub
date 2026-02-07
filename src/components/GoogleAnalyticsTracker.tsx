import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { hasConsent, initGoogleAnalytics, trackPageView } from "@/lib/analytics";

/**
 * Initializes GA when the app loads if user has already accepted cookies (returning visitors).
 * Tracks page_view on every route change when consent is given.
 */
export function GoogleAnalyticsTracker() {
  const location = useLocation();

  // On mount: if user already accepted before, init GA (returning visitors)
  useEffect(() => {
    if (hasConsent()) initGoogleAnalytics();
  }, []);

  // On route change (and initial load): track page view when consent is given
  useEffect(() => {
    if (hasConsent()) {
      trackPageView(location.pathname + location.search, document.title);
    }
  }, [location.pathname, location.search]);

  return null;
}
