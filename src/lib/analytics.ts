/**
 * Google Analytics (GA4) - GDPR-compliant, event-driven consent.
 * Measurement ID: G-KD3JP0LL2G
 */

export const GA_MEASUREMENT_ID = "G-KD3JP0LL2G";

const DEBUG = import.meta.env.DEV;

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function getCookiePreferences(): CookiePreferences {
  try {
    const consent = localStorage.getItem("cookieConsent");
    if (consent) return JSON.parse(consent) as CookiePreferences;
  } catch {
    // ignore
  }
  return { essential: true, analytics: false, marketing: false };
}

export function hasAnalyticsConsent(): boolean {
  return getCookiePreferences().analytics === true;
}

let loaded = false;

/**
 * Load gtag.js and configure GA4. Only runs once and only when analytics consent is given.
 */
export function initGoogleAnalytics(): void {
  if (typeof window === "undefined" || !hasAnalyticsConsent()) return;

  const existing = document.querySelector('script[src*="googletagmanager.com/gtag/js"]');
  if (existing) {
    loaded = true;
    if (DEBUG) console.log("[Analytics] GA script already present");
    return;
  }
  if (loaded) return;

  if (DEBUG) console.log("[Analytics] Initializing GA4", { measurementId: GA_MEASUREMENT_ID });

  if (typeof window.gtag !== "function") {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };
  }

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    allow_google_signals: false,
    page_path: window.location.pathname + window.location.search,
    page_title: document.title,
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.onload = () => {
    if (DEBUG) console.log("[Analytics] GA script loaded OK");
    loaded = true;
  };
  script.onerror = () => {
    console.error("[Analytics] GA script failed to load (e.g. ad blocker or network)");
    loaded = false;
  };
  document.head.appendChild(script);
}

/**
 * Remove GA tracking (when consent is revoked).
 */
export function removeGoogleAnalytics(): void {
  document.querySelectorAll('script[src*="googletagmanager.com/gtag/js"]').forEach((s) => s.remove());
  if (window.dataLayer) window.dataLayer = [];
  window.gtag = () => {};
  loaded = false;
  if (DEBUG) console.log("[Analytics] GA removed (consent revoked)");
}

/**
 * Send a page_view event.
 */
export function trackPageView(path?: string, title?: string): void {
  if (!hasAnalyticsConsent() || typeof window.gtag !== "function") return;

  const pagePath = path ?? window.location.pathname + window.location.search;
  const pageTitle = title ?? document.title;

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: pagePath,
    page_title: pageTitle,
  });
  if (DEBUG) console.log("[Analytics] page_view", { page_path: pagePath, page_title: pageTitle });
}

/**
 * Send a custom event to GA4. Only sends when user has accepted analytics cookies.
 */
export function trackEvent(eventName: string, eventParams?: Record<string, unknown>): void {
  if (!hasAnalyticsConsent() || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, eventParams);
  if (DEBUG) console.log("[Analytics] event", eventName, eventParams);
}
