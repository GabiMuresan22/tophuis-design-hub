# Deploy TopHuis naar Combell

## 0. Klaar voor upload (checklist)

- [x] Build zonder fouten: `npm run build`
- [x] Broken hero preload verwijderd (geen 404 in productie)
- [x] CSP bevat `frame-src` voor JotForm en Google Maps
- [x] Google Search Console verificatiebestand in `public/` → komt in `dist/`
- Upload **hele inhoud** van **`dist`** naar webroot (zie hieronder)

## 1. Build lokaal

```bash
npm run build
```

De output staat in de map **`dist`**.

## 2. Upload naar Combell

Upload **alle inhoud** van de map `dist` naar de **webroot** van je Combell hosting (bijv. `public_html` of `www`).

### Belangrijk: juiste mapstructuur

Op de server moet de structuur **exact** zo zijn:

```
public_html/          (of www/ – jouw webroot)
├── index.html
├── .htaccess
├── _redirects
├── favicon.ico
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── google29e48e1255385f07.html   (Google Search Console verificatie)
├── (overige bestanden uit dist)
└── assets/            ← deze map moet bestaan
    ├── index-XXXXX.js   (naam wijzigt per build)
    ├── index-XXXXX.css
    ├── *.webp, *.png, enz.
    └── (alle andere bestanden uit dist/assets)
```

- Upload **niet** de map `dist` zelf: upload de **inhoud** van `dist`.
- Zorg dat de map **`assets`** (met alle .js-, .css- en afbeeldingenbestanden) op de server staat.

## 3. Controleren

1. Open **https://tophuis.be** – de site moet laden.
2. Controleer in de bron van index.html de naam van het JS-bestand (bijv. `index-XXXXX.js`). Open **https://tophuis.be/assets/index-XXXXX.js** in de browser.  
   - JavaScript-code zichtbaar → assets staan goed.  
   - 404 → map `assets` ontbreekt of verkeerde plek.
3. Test contactpagina (JotForm iframe) en kaart (Google Maps iframe).
4. Google verificatie: **https://tophuis.be/google29e48e1255385f07.html** moet bereikbaar zijn (voor Search Console).

## 4. Bij een 404 op /assets/...

- Controleer in je FTP/filemanager of de map **assets** in dezelfde map staat als **index.html** (beide in de webroot).
- Controleer of **index-BrxaqUr7.js** (en de andere bestanden) echt in **assets** staan.
- Na een nieuwe build kunnen bestandsnamen veranderen (bijv. `index-XXXXX.js`). Upload dan opnieuw de **hele** inhoud van `dist`.
