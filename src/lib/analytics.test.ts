import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const COOKIE_CONSENT_KEY = "cookieConsent";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: ReturnType<typeof vi.fn>;
  }
}

describe("analytics", () => {
  beforeEach(() => {
    vi.resetModules();
    vi.restoreAllMocks();
    window.localStorage.clear();
    delete (window as Partial<Window>).dataLayer;
    delete (window as Partial<Window>).gtag;
    document.head.innerHTML = "";
    document.body.innerHTML = "";
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("defaults analytics consent to false", async () => {
    const { hasAnalyticsConsent } = await import("./analytics");

    expect(hasAnalyticsConsent()).toBe(false);
  });

  it("reads analytics consent from cookie preferences", async () => {
    window.localStorage.setItem(
      COOKIE_CONSENT_KEY,
      JSON.stringify({ essential: true, analytics: true, marketing: false })
    );
    const { hasAnalyticsConsent } = await import("./analytics");

    expect(hasAnalyticsConsent()).toBe(true);
  });

  it("does not load GA when analytics consent is missing", async () => {
    const appendChildSpy = vi.spyOn(document.head, "appendChild");
    const { initGoogleAnalytics } = await import("./analytics");

    initGoogleAnalytics();

    expect(window.dataLayer).toBeUndefined();
    expect(window.gtag).toBeUndefined();
    expect(appendChildSpy).not.toHaveBeenCalled();
  });

  it("loads GA once when analytics consent is granted", async () => {
    window.localStorage.setItem(
      COOKIE_CONSENT_KEY,
      JSON.stringify({ essential: true, analytics: true, marketing: false })
    );
    const appendChildSpy = vi.spyOn(document.head, "appendChild");
    const { GA_MEASUREMENT_ID, initGoogleAnalytics } = await import("./analytics");

    initGoogleAnalytics();
    initGoogleAnalytics();

    expect(Array.isArray(window.dataLayer)).toBe(true);
    expect(typeof window.gtag).toBe("function");
    expect(appendChildSpy).toHaveBeenCalledTimes(1);

    const script = appendChildSpy.mock.calls[0][0] as HTMLScriptElement;
    expect(script.tagName).toBe("SCRIPT");
    expect(script.src).toContain("googletagmanager.com/gtag/js");
    expect(script.src).toContain(GA_MEASUREMENT_ID);
  });

  it("tracks route changes with GA config calls", async () => {
    window.localStorage.setItem(
      COOKIE_CONSENT_KEY,
      JSON.stringify({ essential: true, analytics: true, marketing: false })
    );
    const { GA_MEASUREMENT_ID, trackPageView } = await import("./analytics");

    window.gtag = vi.fn();
    trackPageView("/diensten", "Diensten - TopHuis");

    expect(window.gtag).toHaveBeenCalledWith("config", GA_MEASUREMENT_ID, {
      page_path: "/diensten",
      page_title: "Diensten - TopHuis",
    });
  });

  it("tracks custom events only after consent", async () => {
    const { trackEvent } = await import("./analytics");
    window.gtag = vi.fn();

    trackEvent("generate_lead", { form_name: "contact" });
    expect(window.gtag).not.toHaveBeenCalled();

    window.localStorage.setItem(
      COOKIE_CONSENT_KEY,
      JSON.stringify({ essential: true, analytics: true, marketing: false })
    );

    trackEvent("generate_lead", { form_name: "contact" });
    expect(window.gtag).toHaveBeenCalledWith("event", "generate_lead", {
      form_name: "contact",
    });
  });

  it("removes GA cookies and disables tracking when consent is revoked", async () => {
    window.localStorage.setItem(
      COOKIE_CONSENT_KEY,
      JSON.stringify({ essential: true, analytics: true, marketing: false })
    );
    const { removeGoogleAnalytics, trackEvent } = await import("./analytics");

    document.cookie = "_ga=test-ga-cookie; path=/";
    document.cookie = "_gid=test-gid-cookie; path=/";
    window.dataLayer = [];
    window.gtag = (...args: unknown[]) => {
      window.dataLayer.push(args);
    };

    window.localStorage.setItem(
      COOKIE_CONSENT_KEY,
      JSON.stringify({ essential: true, analytics: false, marketing: false })
    );
    removeGoogleAnalytics();
    trackEvent("generate_lead", { form_name: "contact" });

    expect(document.cookie).not.toContain("_ga=");
    expect(document.cookie).not.toContain("_gid=");
    expect(window.dataLayer).toEqual([]);
  });
});
