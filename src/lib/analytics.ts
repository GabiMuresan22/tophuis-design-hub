/**
 * Google Analytics (GA4) - loads and tracks only after user accepts cookie consent.
 * Measurement ID: G-KD3JP0LL2G
 */

export const GA_MEASUREMENT_ID = "G-KD3JP0LL2G";

const COOKIE_CONSENT_KEY = "tophuis_cookie_consent";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

let initialized = false;

export function hasConsent(): boolean {
  if (typeof window === "undefined" || !window.localStorage) return false;
  return window.localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted";
}

/**
 * Load gtag.js and configure GA4. Only runs once and only when consent is given.
 */
export function initGoogleAnalytics(): void {
  if (typeof window === "undefined" || !hasConsent()) return;
  if (initialized) return;

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);

  // Load the gtag.js script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  initialized = true;
}

/**
 * Send a page_view event. Call on initial load (after consent) and on every route change.
 */
export function trackPageView(path?: string, title?: string): void {
  if (!hasConsent()) return;
  if (!initialized) initGoogleAnalytics();

  const pagePath = path ?? window.location.pathname + window.location.search;
  const pageTitle = title ?? document.title;

  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "page_view", {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
}
