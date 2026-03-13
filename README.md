🏠 **Tophuis Design Hub Website**

Official website of **Tophuis Design Hub**, a renovation and interior construction company operating in Belgium.

---

### 🌐 Live Website

`https://www.tophuis.be`

---

### 📖 Overview

Tophuis Design Hub specializes in **complete home renovations** and **interior construction**.
This repository contains the source code for the official company website.

The website is designed to:

- **Present renovation services**
- **Generate renovation leads**
- **Improve local SEO visibility in Belgium**
- **Provide a fast and modern user experience**

---

### 🧰 Services Presented On The Website

The website highlights (among others) the following services:

- Totaalrenovatie van woningen
- Interieur- en afwerkingswerken
- Badkamerrenovatie en installatie
- Vloeren (parket, laminaat, tegels)
- Elektrische installaties (met certificaat)
- Smart Home systemen (Loxone / domotica)
- Maatmeubilair en keukeninstallatie
- Gyproc, pleister- en schilderwerken
- Installatie van airconditioning
- Installatie van warmtepompen
- Sanitaire installaties
- Ramen en deuren (indien van toepassing in projecten)

**Belangrijkste regio’s / target service areas:**

- Gent
- Roeselare
- Kortrijk
- Oost-Vlaanderen
- West-Vlaanderen

---

### ⚙️ Tech Stack

This project uses a lightweight, modern frontend stack:

- **Vite** (build tooling, dev server)
- **React** (SPA frontend)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** + custom components

Infrastructure:

- **GitHub** – Version control (this repository)
- **Combell** – Domain & production hosting (`www.tophuis.be`)
- Optional: **Vercel / Netlify** – Can be used for preview deployments if desired (not required for production)

---

### 🚀 Deployment

Production hosting is currently done via **Combell**.

High-level deployment workflow:

1. Developer commits & pushes code to **GitHub**.
2. A production build is created locally with:
   - `npm install`
   - `npm run build`
3. The **contents of the `dist/` folder** (including the `assets/` directory, `index.html`, `.htaccess`, `sitemap.xml`, `robots.txt`, and verification files) are uploaded to the Combell webroot for `www.tophuis.be`.

For detailed Combell instructions, see `DEPLOY-COMBELL.md` in this repository.

---

### 🌍 Domain Configuration

- **Domain:** `https://www.tophuis.be`
- **DNS Provider:** Combell
- **Hosting:** Combell web hosting (uploads from Vite `dist/`)

HTTPS, redirects, and security headers are handled via the `.htaccess` file included in `public/` → built into `dist/`.

---

### 📈 SEO Features

The website is optimized for **local SEO in Belgium**.

Key SEO features:

- Optimized meta titles and descriptions
- Location-targeted homepage content (Gent, Roeselare, Kortrijk, Vlaanderen)
- Structured headings (H1/H2) for renovation services & regions
- XML sitemap at `https://www.tophuis.be/sitemap.xml`
- `robots.txt` with sitemap reference
- LocalBusiness **JSON-LD** structured data (Local SEO)
- Schema.org (LocalBusiness) injected via React (`SchemaOrg` component)
- **Google Analytics 4** (GA4) with **consent-gated** tracking
- **Google Search Console** integration and verification
- Fast loading using Vite, code-splitting, image optimization
- Responsive design for mobile, tablet, and desktop

Example target keywords:

- `totaalrenovatie gent`
- `renovatie oost vlaanderen`
- `badkamer renovatie belgië`
- `interieur renovatie west vlaanderen`

---

### 🖥️ Project Structure (simplified)

```text
tophuis-design-hub
│
├── public
│   ├── index.html          # HTML entry, meta tags, JSON-LD
│   ├── sitemap.xml         # XML sitemap
│   ├── robots.txt          # Robots + sitemap reference
│   ├── .htaccess           # Security headers, SPA routing (Combell)
│   └── *.png / *.ico ...   # Icons, favicons, manifest, verification files
│
├── src
│   ├── main.tsx            # React/Vite entry
│   ├── App.tsx             # Router + layout
│   ├── pages/              # `Index`, `Diensten`, `Realisaties`, `OverOns`, ...
│   ├── components/         # Layout, Header, Footer, SchemaOrg, GA tracker, etc.
│   └── assets/             # Images used in components
│
├── docs
│   ├── WEBSITE-AUDIT.md
│   ├── AUDIT-SEO-SECURITY.md
│   ├── GOOGLE-SEARCH-CONSOLE.md
│   └── ...                 # Other audit / implementation docs
│
├── vite.config.ts
├── package.json
└── README.md
```

---

### 🧑‍💻 Local Development

Requirements:

- Node.js (LTS) + npm

Clone the repository:

```bash
git clone https://github.com/GabiMuresan22/tophuis-design-hub.git
cd tophuis-design-hub
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The site will be available on a local dev URL shown in the terminal (typically `http://localhost:5173`).

Create a production build:

```bash
npm run build
```

The optimized site will be generated in the `dist/` folder, ready to upload to Combell.

---

### 🔒 License

This repository contains the **official website for Tophuis Design Hub**.

**All rights reserved.**

The code, design, branding, and assets may **not** be reused or distributed without prior written permission from Tophuis Design Hub.

---

### 📞 Contact

**Tophuis Design Hub**

- 🌐 Website: `https://www.tophuis.be`
- For renovation inquiries, please use the contact form on the website.

