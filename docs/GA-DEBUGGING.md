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

## 5. GA4 Realtime

- In GA4: **Reports** → **Realtime**.
- Open your site in another tab, accept cookies, browse a few pages.
- Within a short time you should see at least 1 user in Realtime. Standard reports can take 24–48 hours.

## 6. Checklist

| Check | What to verify |
|-------|----------------|
| Cookie banner | You clicked **Accepteren** (not Weigeren / close). |
| Local Storage | `tophuis_cookie_consent` = `"accepted"`. |
| Script in DOM | After accept, a `<script src="...gtag/js?id=G-KD3JP0LL2G">` appears in `<head>`. |
| Measurement ID | Exactly **G-KD3JP0LL2G** (digit 0, not letter O). |
| Ad blocker | Disabled for tophuis.be when testing. |
| GA4 property | Realtime report and correct web data stream selected. |
