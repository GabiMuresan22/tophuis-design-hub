# Google Analytics debugging – TopHuis

## 0. Enable GA console logs (including on production)

- **Local dev** (`npm run dev`): GA logs appear automatically.
- **Production** (e.g. tophuis.be): In the browser console run:
  ```javascript
  localStorage.setItem('ga_debug', '1');
  ```
  Then refresh the page. You should see `[GA] initGoogleAnalytics called`, then `[GA] Initialized` if consent is accepted. Remove when done: `localStorage.removeItem('ga_debug');`

## 1. Confirm cookie consent

Analytics **only runs after the user clicks "Accepteren"** on the cookie banner.

- **First-time visitor:** Cookie banner must be accepted; only then is the gtag script loaded.
- **Check consent:** DevTools → **Application** → **Local Storage** → your domain → key `tophuis_cookie_consent` should be `"accepted"`.
- If it’s missing or `"declined"`, GA will not load. Accept the banner and reload.

## 2. Check measurement ID

The correct ID is **G-KD3JP0LL2G** (with a **zero** in the middle: `JP0LL`, not the letter O).

- In the page source / Elements, the script URL should be:  
  `https://www.googletagmanager.com/gtag/js?id=G-KD3JP0LL2G`
- In GA4: **Admin** → **Data streams** → your web stream → the **Measurement ID** must match exactly.

## 3. Network tab

- Open **Network**, filter by **gtag** or **googletagmanager**.
- Accept the cookie banner and reload.
- You should see:
  - `gtag/js?id=G-KD3JP0LL2G` (script) → status 200
  - Requests to `google-analytics.com/g/collect` or similar (events being sent).

If these are **blocked** (e.g. red or “blocked by client”), an ad blocker or privacy extension is blocking GA. Test in a private window with extensions disabled.

## 4. Console check

After accepting cookies, run in the **Console**:

```javascript
// Consent
console.log('Consent:', localStorage.getItem('tophuis_cookie_consent'));

// GA loaded?
console.log('gtag exists:', typeof window.gtag === 'function');
console.log('dataLayer:', window.dataLayer?.length, window.dataLayer);
```

- Consent should be `"accepted"`.
- `gtag` should be `function`, `dataLayer` should be an array with entries (e.g. `config`, `page_view`).

## 5. GA4 Realtime – walkthrough to confirm events

Use this to confirm that `page_view` (and other) events are reaching GA4.

### Step 1: Open Realtime in GA4

1. Go to [analytics.google.com](https://analytics.google.com) and sign in.
2. In the left sidebar, click **Reports** (or **Report**).
3. Under **Report snapshot** (or in the same left menu), click **Realtime**.

You should see the Realtime report (overview with users right now, top pages, etc.). If it’s empty, that’s normal until you send traffic in the next steps.

### Step 2: Confirm property and stream

1. At the top of the page, check the **property** (e.g. “TopHuis” or your site name).
2. If you have more than one property, use the dropdown to select the one that has your **web data stream** with Measurement ID **G-KD3JP0LL2G**.
3. In GA4: **Admin** (gear icon) → **Data streams** → click your **Web** stream and confirm the **Measurement ID** is exactly **G-KD3JP0LL2G**.

### Step 3: Generate traffic from your site

1. Open your site (e.g. **https://www.tophuis.be**) in a **new tab or window** (keep the Realtime tab open).
2. If the cookie banner appears, click **Accepteren**.
3. Stay on the homepage for a few seconds, then click to another page (e.g. **Diensten**, **Contact**).
4. Optionally open the same site in an **incognito/private** window, accept cookies there too, and click around. That will show as a second user.

### Step 4: What you should see in Realtime

- **Users in the last 30 minutes:** Should show at least **1** (you). If you used incognito too, you may see **2**.
- **Overview:** A simple map or “Users by region” may show your country.
- **Page view and event count:** Should increase as you navigate (each new page = new `page_view`).
- **View by page title / page path:** After a short delay (often 10–30 seconds), you should see your pages (e.g. “Home”, “Contact”, “Diensten”) and paths (e.g. `/`, `/contact`, `/diensten`).

If numbers stay at 0 after 1–2 minutes, see **Troubleshooting** below.

### Step 5: Optional – check “Event count by Event name”

- In Realtime, scroll to a section that shows **Event count by Event name** (or **Events**).
- You should see **page_view** (and possibly **first_visit** or **session_start**) with a count ≥ 1.

### Troubleshooting (Realtime stays at 0)

| Issue | What to do |
|-------|------------|
| Wrong property/stream | In Admin → Data streams, confirm the Measurement ID is G-KD3JP0LL2G and that you’re viewing Realtime for that property. |
| Cookie consent not given | On the site tab, accept the cookie banner and reload; then browse again. |
| Ad blocker / privacy extension | Disable for tophuis.be or test in incognito with extensions off. |
| Wrong measurement ID in code | In the repo, search for the GA ID and ensure it’s **G-KD3JP0LL2G** (digit 0), not G-KD3JPOLL2G (letter O). Rebuild and redeploy. |
| Delay | Realtime can lag by 10–30 seconds; wait 1–2 minutes before concluding nothing is coming in. |

Standard (non-Realtime) reports in GA4 can take **24–48 hours** to populate; use Realtime for same-day checks.

## 6. Double page view (fixed)

The app uses `send_page_view: false` in the GA config and sends `page_view` only via `trackPageView()`, so each load or route change is counted once, not twice.

## 7. Checklist

| Check | What to verify |
|-------|----------------|
| Cookie banner | You clicked **Accepteren** (not Weigeren / close). |
| Local Storage | `tophuis_cookie_consent` = `"accepted"`. |
| Script in DOM | After accept, a `<script src="...gtag/js?id=G-KD3JP0LL2G">` appears in `<head>`. |
| Measurement ID | Exactly **G-KD3JP0LL2G** (digit 0, not letter O). |
| Ad blocker | Disabled for tophuis.be when testing. |
| GA4 property | Realtime report and correct web data stream selected. |
