# Google Search Console – Tophuis Design Hub

Complete checklist to add **https://www.tophuis.be** to Google Search Console and keep it healthy.

---

## ✅ Already done (in this repository)

| Item | File / Location |
|------|-----------------|
| HTML verification file | `public/google29e48e1255385f07.html` |
| Meta-tag verification | `index.html` – `<meta name="google-site-verification" content="29e48e1255385f07">` |
| XML sitemap | `public/sitemap.xml` (all pages listed) |
| robots.txt with sitemap URL | `public/robots.txt` |
| Canonical tags (per page) | `src/components/CanonicalTag.tsx` (auto-injected in Layout) |
| Schema.org structured data | `src/components/SchemaOrg.tsx` (LocalBusiness JSON-LD) |
| Google Analytics GA4 | `src/lib/analytics.ts` – Measurement ID **G-KD3JP0LL2G** |

---

## 📋 Checklist – steps you need to complete in Google Search Console

### 1. Sign in to Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console).
2. Sign in with the Google account that owns or manages the website.

### 2. Add property (if not yet added)

1. Click **Add property** (top-left dropdown).
2. Choose **URL prefix** and enter: `https://www.tophuis.be/`
   > Use the exact URL with `https://` and `www.` to match the canonical URL used in the code.
3. Click **Continue**.

### 3. Verify ownership

Two verification methods are already set up – use whichever GSC suggests:

**Option A – HTML file (already deployed)**
1. GSC will ask you to download a verification file.  
   The file `google29e48e1255385f07.html` is already in the `public/` folder and served at `https://www.tophuis.be/google29e48e1255385f07.html`.
2. Click **Verify** in GSC.

**Option B – HTML meta tag (already in index.html)**
1. In GSC select **HTML tag** as the verification method.
2. The tag `<meta name="google-site-verification" content="29e48e1255385f07">` is already in `index.html`.
3. Deploy the latest code (if not already live), then click **Verify** in GSC.

### 4. Submit your sitemap

After verification:

1. In the left sidebar click **Sitemaps**.
2. Under "Add a new sitemap" enter: `sitemap.xml`
3. Click **Submit**.

GSC will fetch `https://www.tophuis.be/sitemap.xml`.  
Expect the status to change from "Pending" to "Success" within a few hours.

### 5. Request indexing of the homepage

1. In GSC, paste `https://www.tophuis.be/` into the search bar at the top.
2. Click **Request Indexing** → **Got it**.  
   Repeat for key pages: `/diensten`, `/realisaties`, `/contact`.

### 6. Check Coverage report

After a few days:

1. Go to **Indexing → Pages** in the left sidebar.
2. All pages from `sitemap.xml` should appear under **Indexed, not submitted in sitemap** or **Submitted and indexed**.
3. If pages show errors (e.g. redirect, 404, soft 404) – investigate and fix the underlying issue.

---

## ✅ Google Analytics – implementation status

| Check | Status | Detail |
|-------|--------|--------|
| Measurement ID | ✅ Correct | `G-KD3JP0LL2G` (digit `0`, not letter `O`) |
| Script loading | ✅ Consent-gated | gtag.js only loads after user clicks **Accepteren** |
| Double page_view | ✅ Fixed | `send_page_view: false` in config; only `trackPageView()` fires events |
| Route tracking | ✅ Working | `GoogleAnalyticsTracker` fires `page_view` on every React Router navigation |
| Cookie consent key | ✅ | `tophuis_cookie_consent = "accepted"` in localStorage |

### How to verify GA is working live

1. Open the site in a **new incognito window** (extensions disabled).
2. Accept the cookie banner (**Accepteren**).
3. Browse a few pages.
4. In GA4 → **Reports → Realtime**: you should see ≥ 1 active user and `page_view` events.
5. In DevTools → **Network**, filter `gtag`: you should see `gtag/js?id=G-KD3JP0LL2G` (200) and `google-analytics.com/g/collect` requests.

For more detailed debugging steps see [`docs/GA-DEBUGGING.md`](./GA-DEBUGGING.md).

---

## 🔗 Link GA4 to Google Search Console (recommended)

Linking GA4 and GSC lets you see organic search queries inside GA4.

1. In GA4 → **Admin** → **Product Links** → **Search Console Links** → **Link**.
2. Select your GSC property (`https://www.tophuis.be/`).
3. Click **Next** → **Submit**.

After 24–48 hours, GA4 → **Reports → Acquisition → Search Console** will show organic query data.
