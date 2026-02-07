# Contact form & email flow

The contact page submits to **Formspree** so messages are sent to your email without a backend on Combell.

## 1. Set up Formspree

1. Go to [formspree.io](https://formspree.io) and sign up (free tier is enough).
2. Click **New Form**, name it e.g. "TopHuis Contact".
3. Copy the **form ID** (the part after `/f/` in the form URL, e.g. `xyzabcde`).

## 2. Configure the project

1. In the project root, create a file `.env` (copy from `.env.example` if you prefer):
   ```
   VITE_FORMSPREE_FORM_ID=your_form_id_here
   ```
2. Replace `your_form_id_here` with your Formspree form ID.
3. Restart the dev server or run a new build:
   - Dev: `npm run dev`
   - Build: `npm run build`

**Important:** Do not commit `.env` (it should be in `.gitignore`). On Combell you’ll need to set this value in your hosting panel if they support env vars, or use a build step that injects it.

## 3. Test the email flow

### Option A: With Formspree configured

1. Run `npm run dev` and open the contact page.
2. Fill in the form (use a real email you can check) and click **Send**.
3. **Browser:** Open DevTools → **Console**. You should see:
   - `[Contact form] Submitting payload: { name, email, ... }`
   - `[Contact form] Response status: 200 OK`
4. **Formspree:** In the Formspree dashboard, open your form → **Submissions**. The new submission should appear.
5. **Email:** Check the inbox of the address you set in Formspree for that form (you receive a copy of each submission by default).

### Option B: Without Formspree (dev only)

1. Do **not** set `VITE_FORMSPREE_FORM_ID` (or leave `.env` empty).
2. Run `npm run dev`, open the contact page, fill and submit.
3. In **Console** you’ll see the payload and a warning that the form ID is not set; the UI will still show “Message sent” so you can test the flow.
4. In **production** (e.g. tophuis.be), if the env var is not set, the user will see a “Form not configured” error toast instead.

### Option C: Network tab

1. DevTools → **Network**.
2. Submit the form.
3. Find the request to `formspree.io/f/...`. Check:
   - **Status:** 200 = success.
   - **Payload:** your form fields in the request body.
   - **Response:** Formspree’s JSON response.

## 4. Troubleshooting

| Issue | What to do |
|-------|------------|
| "Form not configured" in production | Set `VITE_FORMSPREE_FORM_ID` in your build/deploy environment and rebuild. |
| 404 or "Form not found" | Check the form ID; ensure the form exists and is active in Formspree. |
| CORS or network error | Formspree allows browser submissions; if it still fails, check ad blockers or try another network. |
| No email received | In Formspree, check the form’s email settings and spam folder; confirm the submission appears under Submissions. |

## 5. Fields sent

The form sends: `name`, `email`, `phone`, `subject`, `budget`, `message`. These appear in Formspree submissions and in the email you configure for that form.
