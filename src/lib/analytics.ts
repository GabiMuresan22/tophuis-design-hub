/**
 * Google Analytics (GA4) - GDPR-compliant, event-driven consent.
 * Measurement ID: G-KD3JP0LL2G
 */

export const GA_MEASUREMENT_ID = "G-KD3JP0LL2G";

const DEBUG = import.meta.env.DEV;

const CONSENT_KEY = "tophuis_cookie_consent";

interface CookiePreferences {
  analytics: boolean;
  marketing: boolean;
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/**
 * Returns true when the user has accepted analytics cookies.
 * Reads from `tophuis_cookie_consent` (simple "accepted"/"declined" or JSON).
 */
export function hasConsent(): boolean {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (raw === null) return false;
    if (raw === "accepted") return true;
    if (raw === "declined") return false;
    // Granular JSON format: { analytics: bool, marketing: bool }
    const prefs = JSON.parse(raw) as CookiePreferences;
    return prefs.analytics === true;
  } catch {
    return false;
  }
}

/** @deprecated Use hasConsent() instead */
export function hasAnalyticsConsent(): boolean {
  return hasConsent();
}

let loaded = false;

/**
 * Load gtag.js and configure GA4. Only runs once and only when analytics consent is given.
 */
export function initGoogleAnalytics(): void {
  if (typeof window === "undefined" || !hasConsent()) return;

  const existing = document.querySelector('script[src*="googletagmanager.com/gtag/js"]');
  if (existing || loaded) {
    if (!loaded) loaded = true;
    if (DEBUG) console.log("[Analytics] GA script already present");
    return;
  }

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
  loaded = true; // Set before appending to prevent double-load on repeated calls
  script.onload = () => {
    if (DEBUG) console.log("[Analytics] GA script loaded OK");
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
 * Send a page_view event to GA4.
 */
export function trackPageView(path?: string, title?: string): void {
  if (!hasConsent() || typeof window.gtag !== "function") return;

  const pagePath = path ?? window.location.pathname + window.location.search;
  const pageTitle = title ?? document.title;

  window.gtag("event", "page_view", {
    page_path: pagePath,
    page_title: pageTitle,
  });
  if (DEBUG) console.log("[Analytics] page_view", { page_path: pagePath, page_title: pageTitle });
}

/**
 * Send a custom event to GA4. Only sends when user has accepted analytics cookies.
 */
export function trackEvent(eventName: string, eventParams?: Record<string, unknown>): void {
  if (!hasConsent() || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, eventParams);
  if (DEBUG) console.log("[Analytics] event", eventName, eventParams);
}
