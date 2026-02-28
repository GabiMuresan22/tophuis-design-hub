# Comprehensive Website Audit

**Site:** TopHuis (tophuis.be)  
**Stack:** React, Vite, TypeScript  
**Last updated:** 2026  
**Related:** `AUDIT-SEO-SECURITY.md` (technical deep-dive), `AUDIT-QUICK-REFERENCE.md` (testing commands)

---

## Executive summary

The site has a strong base: security headers, cookie consent, GA (consent-gated), sitemap, robots.txt, Schema.org (LocalBusiness), canonical tags, privacy/terms/accessibility pages, and responsive design. Remaining work focuses on dependency updates, CSP for iframes, per-route meta/SEO, Google tools setup, performance tuning, and ongoing compliance checks.

---

## 1. Security

### A. Infrastructure & server

| Check | Status | Notes |
|-------|--------|------|
| HTTPS enabled | ✅ | Valid SSL; HSTS in .htaccess |
| No mixed content | ✅ | Resources over HTTPS |
| HSTS | ✅ | max-age=31536000; includeSubDomains; preload |
| Secure hosting (Combell) | ⬜ | Verify firewall, DDoS, backups with provider |
| No exposed admin | ✅ | Static site; no admin panel |

### B. Technical security headers (.htaccess)

| Header | Status | Notes |
|--------|--------|------|
| X-Frame-Options | ✅ | SAMEORIGIN |
| X-XSS-Protection | ✅ | 1; mode=block |
| X-Content-Type-Options | ✅ | nosniff |
| Referrer-Policy | ✅ | strict-origin-when-cross-origin |
| Content-Security-Policy | ⚠️ | Present but missing **frame-src** for JotForm/Maps; script-src uses unsafe-inline/unsafe-eval |
| Permissions-Policy | ✅ | geolocation, microphone, camera (restrictive; allow form.jotform.com if form needs them) |

**Action:** Add `frame-src 'self' https://form.jotform.com https://www.google.com https://maps.google.com;` to CSP.

### C. Application & data

| Check | Status | Notes |
|-------|--------|------|
| Cookie consent | ✅ | Banner (CookieConsent); accept/decline; GA only after accept |
| Privacy policy | ✅ | /privacy; GDPR-oriented |
| No sensitive data in front end | ✅ | No API keys in code; use .env for secrets |
| SQL injection / file upload | ✅ | N/A (static + JotForm iframe) |
| XSS | ✅ | React escaping; one dangerouslySetInnerHTML in chart (trusted source) |

### D. Dependencies

| Check | Status | Notes |
|-------|--------|------|
| npm audit | ⚠️ | Run `npm audit`; fix reported issues (e.g. React Router, rollup, glob) |

**Action:** Run `npm audit fix` and address remaining advisories.

---

## 2. SEO

### A. Technical SEO

| Check | Status | Notes |
|-------|--------|------|
| robots.txt | ✅ | Allows crawlers; Sitemap URL set |
| sitemap.xml | ✅ | All main routes + privacy, terms, accessibility; hreflang |
| Sitemap submitted to GSC | ⬜ | Submit https://www.tophuis.be/sitemap.xml |
| Canonical tags | ✅ | CanonicalTag component in Layout |
| No accidental noindex | ✅ | No noindex on key pages |
| Clean URLs | ✅ | /diensten, /contact, /privacy, etc. |
| Internal linking | ✅ | Nav + footer links |
| Breadcrumbs | ⬜ | Optional; add for SERP snippets |

### B. On-page SEO

| Check | Status | Notes |
|-------|--------|------|
| Title & description (index) | ✅ | In index.html |
| Per-route title/meta | ⬜ | Single set in index; add per-route (e.g. Helmet or DocumentHead) |
| Heading hierarchy | ✅ | H1 per page; logical structure |
| Keywords in meta | ✅ | index.html |
| Image alt text | ✅ | Alt on images (Index, Diensten, Realisaties, Header, Footer) |
| Schema markup | ✅ | SchemaOrg (LocalBusiness) in Layout |
| OG / Twitter meta | ✅ | index.html; ensure og-image exists in public/ |

**Action:** Add per-route `<title>` and meta; confirm `/og-image-renovatie.jpg` exists; fix or remove hero preload in index.html (path is dev-only).

### C. Off-page & local

| Check | Status | Notes |
|-------|--------|------|
| Google Business Profile | ⬜ | Claim and optimize (Lievegem) |
| NAP consistency | ✅ | Grote Baan 21, 9920 Lievegem; +32 493 28 88 87; info@tophuis.be |
| Backlink monitoring | ⬜ | Use SEO tools periodically |

---

## 3. Google visibility

### A. Tools setup

| Check | Status | Notes |
|-------|--------|------|
| Google Analytics 4 | ✅ | GoogleAnalyticsTracker; consent-gated; ID G-KD3JP0LL2G |
| Google Search Console | ⬜ | Add property; verify; submit sitemap |
| Sitemap in GSC | ⬜ | After GSC setup |
| Conversion tracking | ⬜ | Define goals/events in GA4 |
| Tag verification | ✅ | GA reports tag installed on tophuis.be |

### B. SERP & rich results

| Check | Status | Notes |
|-------|--------|------|
| Rich results test | ⬜ | Test with Google Rich Results Test |
| LocalBusiness in results | ⬜ | Validate SchemaOrg output |
| Indexation check | ⬜ | Search `site:tophuis.be` |

### C. Local SEO

| Check | Status | Notes |
|-------|--------|------|
| LocalBusiness schema | ✅ | SchemaOrg component |
| GBP verified | ⬜ | Same as Google Business Profile above |
| Reviews | ⬜ | Encourage and respond |

---

## 4. Design & UX

### A. Visual & layout

| Check | Status | Notes |
|-------|--------|------|
| Consistent palette | ✅ | Tailwind theme |
| Typography hierarchy | ✅ | Montserrat / Inter |
| Responsive layout | ✅ | Tailwind; mobile nav |
| Touch-friendly targets | ✅ | Buttons and links |
| No horizontal scroll | ✅ | Viewport meta |

### B. User experience

| Check | Status | Notes |
|-------|--------|------|
| Clear CTAs | ✅ | Quote, Contact, View Work |
| Navigation depth | ✅ | Shallow (home, diensten, realisaties, over-ons, contact) |
| Contact form | ✅ | JotForm iframe; clear contact info |
| Value proposition above fold | ✅ | Homepage hero |

### C. Accessibility

| Check | Status | Notes |
|-------|--------|------|
| Accessibility statement | ✅ | /accessibility |
| Alt text | ✅ | On images |
| Iframe titles | ✅ | Contact form and map |
| Keyboard navigation | ✅ | Standard focus; ensure visible focus styles |
| Skip to main content | ⬜ | Add skip link for keyboard users |
| WCAG / contrast | ⬜ | Run WAVE or axe; fix issues |

**Action:** Add skip link; run Lighthouse/WAVE and fix critical a11y issues.

---

## 5. Performance

### A. Speed & assets

| Check | Status | Notes |
|-------|--------|------|
| Minified JS/CSS | ✅ | Vite build |
| Code splitting | ✅ | Lazy routes; Index eager |
| Images (WebP etc.) | ✅ | WebP in use; keep optimizing new assets |
| Lazy loading | ✅ | Route lazy load; consider loading="lazy" for below-fold images |
| Hero preload | ⚠️ | index.html preload points to dev path; fix or remove |

### B. Metrics & server

| Check | Status | Notes |
|-------|--------|------|
| PageSpeed Insights | ⬜ | Run mobile + desktop; target 90+ |
| Core Web Vitals | ⬜ | LCP &lt; 2.5s, CLS &lt; 0.1, INP &lt; 200ms |
| Caching / compression | ⬜ | Configure on Combell (cache headers, GZIP/Brotli) |
| CDN | ⬜ | Optional; check with host |

---

## 6. Content quality

| Check | Status | Notes |
|-------|--------|------|
| Unique content | ✅ | Original copy |
| Clear messaging | ✅ | Renovation, precision, craftsmanship |
| NL/EN support | ✅ | useLanguage; key pages translated |
| Internal links | ✅ | Nav and in-content links |
| Regular updates | ⬜ | Plan content reviews |
| Blog / long-form | ⬜ | Optional for SEO |

---

## 7. Conversion optimization (CRO)

| Check | Status | Notes |
|-------|--------|------|
| Primary CTA | ✅ | “Offerte aanvragen” / “Request quote” |
| Contact form | ✅ | JotForm iframe |
| Contact visibility | ✅ | Phone, email, address on contact + footer |
| Trust / social proof | ✅ | Testimonials on homepage |
| Thank-you / confirmation | ⬜ | JotForm may provide; else consider post-submit message |
| Heatmaps / A/B | ⬜ | Optional (e.g. Hotjar, GA experiments) |

---

## 8. Legal & compliance

| Check | Status | Notes |
|-------|--------|------|
| Privacy policy | ✅ | /privacy; GDPR-oriented; contact info |
| Terms & conditions | ✅ | /terms |
| Cookie consent | ✅ | Banner; accept/decline; GA only after accept |
| Cookie policy | ✅ | Referenced in privacy; banner explains use |
| Accessibility statement | ✅ | /accessibility |
| Contact details | ✅ | info@tophuis.be; phone; address |
| GDPR alignment | ✅ | Consent, privacy notice, data subject rights mentioned |

**Action:** Keep privacy/terms/accessibility in sync with actual data flows (e.g. JotForm, GA).

---

## Priority actions

### High (do first)

1. Run **`npm audit fix`** and fix remaining vulnerabilities.
2. Add **frame-src** to CSP in `.htaccess` for JotForm and Google Maps.
3. **Fix or remove** hero image preload in `index.html`.
4. **Submit sitemap** and verify site in Google Search Console.
5. Confirm **og-image-renovatie.jpg** exists in `public/` and is reachable.

### Medium (this month)

1. Add **per-route title and meta** (and canonical if needed per locale).
2. Run **PageSpeed Insights** and Core Web Vitals; optimize as needed.
3. Add **skip to main content** link and run **accessibility scan** (WAVE/axe).
4. Set up **GA4 conversion events** (e.g. form submit, contact click).
5. **Google Business Profile**: claim and optimize for Lievegem.

### Low (ongoing)

1. Update **sitemap lastmod** when content changes (or automate in build).
2. Monitor **Search Console** and **analytics**; fix crawl/coverage issues.
3. **Quarterly:** dependency updates, content review, security/SEO re-check.

---

## Testing tools

| Area | Tools |
|------|--------|
| Security | SecurityHeaders.com, Mozilla Observatory, SSL Labs, `npm audit` |
| SEO | Google Search Console, PageSpeed Insights, Rich Results Test, Screaming Frog |
| Accessibility | WAVE, axe DevTools, Lighthouse |
| Performance | PageSpeed Insights, GTmetrix, WebPageTest, Chrome DevTools |
| Schema | Google Rich Results Test, validator.schema.org |

---

## Maintenance schedule

| Frequency | Tasks |
|-----------|--------|
| Weekly | Check GA and form submissions; spot-check key pages |
| Monthly | Search Console review; Core Web Vitals; content tweaks |
| Quarterly | Full audit pass; dependency updates; privacy/terms review |
| Annually | Broader security and SEO strategy review |

---

## Document index

- **This file:** Master checklist (Security, SEO, Google, Design/UX, Performance, Content, CRO, Legal).
- **AUDIT-SEO-SECURITY.md:** Technical deep-dive (CSP, dependencies, preload, frame-src, etc.).
- **AUDIT-QUICK-REFERENCE.md:** Commands and links for manual tests (curl, Lighthouse, tools).
- **AUDIT-IMPLEMENTATION.md:** Implementation summary and deployment checklist.
