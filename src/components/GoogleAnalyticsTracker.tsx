import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  hasAnalyticsConsent,
  initGoogleAnalytics,
  removeGoogleAnalytics,
  trackPageView,
} from "@/lib/analytics";

/**
 * GDPR-compliant Google Analytics tracker.
 * Listens for cookieConsentUpdated events and initializes/removes GA accordingly.
 */
export function GoogleAnalyticsTracker() {
  const location = useLocation();
  const loadedRef = useRef(false);

  // Sync GA state with consent
  useEffect(() => {
    const sync = () => {
      if (hasAnalyticsConsent()) {
        initGoogleAnalytics();
        loadedRef.current = true;
      } else {
        removeGoogleAnalytics();
        loadedRef.current = false;
      }
    };

    sync();

    const onStorage = (e: StorageEvent) => {
      if (e.key === "cookieConsent") sync();
    };
    const onConsent = () => sync();

    window.addEventListener("storage", onStorage);
    window.addEventListener("cookieConsentUpdated", onConsent);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("cookieConsentUpdated", onConsent);
    };
  }, []);

  // Track route changes
  useEffect(() => {
    if (!hasAnalyticsConsent()) return;
    trackPageView(location.pathname + location.search, document.title);
  }, [location.pathname, location.search]);

  return null;
}
