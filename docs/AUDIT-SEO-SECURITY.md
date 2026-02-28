# Website audit: SEO, security & developer improvements

**Site:** TopHuis (tophuis.be)  
**Stack:** React, Vite, TypeScript  
**Date:** 2026

**Master checklist:** For the full audit across all areas (Security, SEO, Google Visibility, Design/UX, Performance, Content, CRO, Legal), see **[WEBSITE-AUDIT.md](./WEBSITE-AUDIT.md)**. This document is a **technical deep-dive** on SEO, security, and developer improvements only.

---

## Executive summary

The site has a solid base: meta tags, sitemap, security headers, semantic structure, and consent-gated analytics. The list below focuses on actionable improvements for SEO, security, and performance.

---

## 1. SEO – improvements

### High priority

| # | Issue | Recommendation |
|---|--------|----------------|
| 1 | **Single `<title>` / meta in index.html** | All routes share the same title and description. Add per-route `<title>` and meta (e.g. React Helmet or a custom `<DocumentHead>`) so /diensten, /contact, /privacy, etc. have unique titles and descriptions for better SERP and sharing. |
| 2 | **OG image path** | `og:image` is `/og-image-renovatie.jpg`. Ensure this file exists in `public/` and is served correctly (correct size ~1200×630 for social previews). |
| 3 | **Preload hero image** | In `index.html`, preload uses `href="/src/assets/hero-img.webp"`. In production, assets live under `/assets/` with hashed names. Remove this preload or replace it with a build-time path so it doesn’t 404 and doesn’t preload the wrong URL. |
| 4 | **Canonical URLs** | Add `<link rel="canonical" href="https://www.tophuis.be/..." />` per page to avoid duplicate content (especially with NL/EN). |

### Medium priority

| # | Issue | Recommendation |
|---|--------|----------------|
| 5 | **Structured data** | Add JSON-LD (LocalBusiness and/or Organization) on the homepage and Contact page so search engines can show rich results (e.g. address, phone, opening hours). |
| 6 | **Sitemap lastmod** | `sitemap.xml` uses fixed `lastmod` (2026-02-25). Update when content changes or automate (e.g. build script) so crawlers see fresh dates. |
| 7 | **hreflang** | Sitemap has `hreflang` for nl/en but same URL for both. If you add language-specific URLs later (e.g. /nl/, /en/), point hreflang to those URLs. |
| 8 | **Image alt text** | Most images have alt text; keep ensuring every `<img>` has meaningful, concise alt (you already do this in Index, Diensten, Realisaties, etc.). |

### Low priority

| # | Issue | Recommendation |
|---|--------|----------------|
| 9 | **robots.txt** | Sitemap is `https://www.tophuis.be/sitemap.xml`. Ensure `sitemap.xml` is in `public/` and reachable at that URL on production. |
| 10 | **Breadcrumbs** | Add breadcrumb markup (and optional JSON-LD) on inner pages to improve SERP snippets. |

---

## 2. Security – improvements

### High priority

| # | Issue | Recommendation |
|---|--------|----------------|
| 1 | **Dependency vulnerabilities** | `npm audit` reports 11 issues (5 moderate, 6 high), including React Router (XSS/open redirect), rollup, glob, minimatch, etc. Run `npm audit fix` and then `npm audit` again; fix remaining issues by upgrading or replacing affected packages. |
| 2 | **CSP and iframes** | `.htaccess` CSP has no `frame-src`. The site embeds JotForm and Google Maps. Add e.g. `frame-src 'self' https://form.jotform.com https://www.google.com https://maps.google.com;` so those iframes are allowed and not blocked by default-src. |
| 3 | **CSP script-src** | `'unsafe-inline'` and `'unsafe-eval'` weaken XSS protection. GA/gtag often need them. Consider moving to nonces or hashes for inline scripts if you can (e.g. with a build step); otherwise document the trade-off. |

### Medium priority

| # | Issue | Recommendation |
|---|--------|----------------|
| 4 | **Permissions-Policy vs iframe** | Header sets `geolocation=(), microphone=(), camera=()`. The JotForm iframe uses `allow="geolocation; microphone; camera"`. For the iframe to use those features, allow them for its origin, e.g. `geolocation=(self "https://form.jotform.com")` (and similarly if you need mic/camera only for the form). |
| 5 | **HTTPS** | HSTS is set (max-age=31536000). Ensure Combell serves the site over HTTPS only and that the certificate is valid. |
| 6 | **Sensitive data** | No API keys or secrets found in front-end code. Keep using env vars (e.g. VITE_*) for any future keys and never commit `.env`. |

### Low priority

| # | Issue | Recommendation |
|---|--------|----------------|
| 7 | **dangerouslySetInnerHTML** | Used in `chart.tsx`; ensure the content is sanitized or from a trusted source. |
| 8 | **Subresource Integrity (SRI)** | For critical third-party scripts (e.g. gtag), consider adding `integrity` hashes if the provider supports it. |

---

## 3. General / developer – improvements

### Performance

| # | Issue | Recommendation |
|---|--------|----------------|
| 1 | **Fonts** | Google Fonts loaded with `media="print"` + `onload` is good. Consider self-hosting Montserrat/Inter to reduce external requests and improve privacy. |
| 2 | **Lazy loading** | Routes are lazy-loaded (Diensten, Contact, etc.); Index is eager. Good balance. Ensure images below the fold use `loading="lazy"` where appropriate (e.g. gallery images). |
| 3 | **Bundle size** | Run `npm run build` and review bundle size; consider code-splitting for heavy libs (e.g. recharts) if they’re only used on specific pages. |

### Accessibility

| # | Issue | Recommendation |
|---|--------|----------------|
| 4 | **Skip link** | Add a “Skip to main content” link at the top for keyboard users (you have `accessibility.skipToContent` in one place; ensure it’s present and visible on focus). |
| 5 | **Focus states** | Ensure interactive elements (links, buttons, form controls) have visible focus styles so keyboard navigation is clear. |
| 6 | **Iframe titles** | Contact form iframe has `title="TopHuis Contact Form"`; map iframe uses `title={t(...)}`. Good. Keep titles descriptive for screen readers. |

### Best practices

| # | Issue | Recommendation |
|---|--------|----------------|
| 7 | **Preconnect to analytics** | You preconnect to googletagmanager.com; GA loads after consent. Fine. Ensure you don’t preconnect before consent if you want to avoid any early connection; otherwise current setup is acceptable. |
| 8 | **404 and error handling** | NotFound page exists. Consider logging 404s to GA (e.g. event) to see broken links or missing routes. |
| 9 | **Browserslist** | Build warns that caniuse data is old. Run `npx update-browserslist-db@latest` occasionally for up-to-date browser targets. |

---

## 4. Quick wins (do first)

1. Run **`npm audit fix`** and fix any remaining vulnerabilities (especially React Router and build tools).
2. **Fix or remove** the hero image preload in `index.html` (use correct production path or remove).
3. **Add `frame-src`** to CSP in `.htaccess` for JotForm and Google Maps.
4. **Add per-page `<title>` and meta** (and optionally canonical) for main routes.
5. **Confirm** `/og-image-renovatie.jpg` exists in `public/` and is accessible at `https://www.tophuis.be/og-image-renovatie.jpg`.

---

## 5. Already in good shape

- **Meta tags:** Title, description, keywords, og:*, twitter:* in index.html.
- **robots.txt:** Allows crawlers and references sitemap.
- **sitemap.xml:** All main routes and accessibility page included; hreflang present.
- **Security headers:** X-Frame-Options, X-XSS-Protection, X-Content-Type-Options, Referrer-Policy, HSTS, Permissions-Policy.
- **GA:** Consent-gated; measurement ID correct; no double page_view.
- **Semantic HTML:** h1 per page, sections, nav, alt on images.
- **PWA manifest:** site.webmanifest present with name, icons, theme.

---

*Next step: tackle the “Quick wins” and high-priority items, then re-run `npm audit` and a quick manual test of CSP (iframes and console for blocked resources).*
