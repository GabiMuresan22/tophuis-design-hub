import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  GA_MEASUREMENT_ID,
  hasConsent,
  initGoogleAnalytics,
  trackPageView,
} from "./analytics";

const CONSENT_KEY = "tophuis_cookie_consent";

describe("Google Analytics (consent-gated)", () => {
  let appendChildSpy: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    appendChildSpy = vi.fn();
    Object.defineProperty(document, "head", {
      value: { appendChild: appendChildSpy },
      writable: true,
    });
    window.localStorage.clear();
    // Reset module state by re-mocking: we test behavior, not internal state
    vi.resetModules();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("hasConsent", () => {
    it("returns false when localStorage has no consent", () => {
      expect(hasConsent()).toBe(false);
    });

    it("returns false when user declined", () => {
      window.localStorage.setItem(CONSENT_KEY, "declined");
      expect(hasConsent()).toBe(false);
    });

    it("returns true when user accepted", () => {
      window.localStorage.setItem(CONSENT_KEY, "accepted");
      expect(hasConsent()).toBe(true);
    });
  });

  describe("initGoogleAnalytics", () => {
    it("does not set up gtag or load script when consent is missing", () => {
      initGoogleAnalytics();
      expect(window.dataLayer).toBeUndefined();
      expect(window.gtag).toBeUndefined();
      expect(appendChildSpy).not.toHaveBeenCalled();
    });

    it("sets dataLayer, gtag and loads script when consent is given", () => {
      window.localStorage.setItem(CONSENT_KEY, "accepted");
      initGoogleAnalytics();
      expect(Array.isArray(window.dataLayer)).toBe(true);
      expect(typeof window.gtag).toBe("function");
      expect(appendChildSpy).toHaveBeenCalledTimes(1);
      const script = appendChildSpy.mock.calls[0][0];
      expect(script.tagName).toBe("SCRIPT");
      expect(script.src).toContain("googletagmanager.com/gtag/js");
      expect(script.src).toContain(GA_MEASUREMENT_ID);
    });

    it("does not load script twice when called multiple times with consent", async () => {
      vi.resetModules();
      const { initGoogleAnalytics: initGA } = await import("./analytics");
      window.localStorage.setItem(CONSENT_KEY, "accepted");
      initGA();
      initGA();
      expect(appendChildSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe("trackPageView", () => {
    it("does nothing when consent is not given", () => {
      const gtagSpy = vi.fn();
      window.gtag = gtagSpy;
      window.dataLayer = [];
      trackPageView("/test", "Test Page");
      expect(gtagSpy).not.toHaveBeenCalled();
    });

    it("sends page_view with path and title when consent is given", () => {
      window.localStorage.setItem(CONSENT_KEY, "accepted");
      const gtagSpy = vi.fn();
      window.gtag = gtagSpy;
      window.dataLayer = [];
      // Prevent init from actually appending (already tested above)
      initGoogleAnalytics();
      window.gtag = gtagSpy;
      gtagSpy.mockClear();
      trackPageView("/diensten", "Diensten - TopHuis");
      expect(gtagSpy).toHaveBeenCalledWith("event", "page_view", {
        page_path: "/diensten",
        page_title: "Diensten - TopHuis",
      });
    });
  });

  describe("GA configuration", () => {
    it("uses the correct measurement ID", () => {
      expect(GA_MEASUREMENT_ID).toBe("G-KD3JP0LL2G");
    });
  });
});
