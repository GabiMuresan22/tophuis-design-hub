# Deploy TopHuis naar Combell

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
├── site.webmanifest
├── (andere bestanden uit dist)
└── assets/            ← deze map moet bestaan
    ├── index-BrxaqUr7.js
    ├── index-BFAGwWZ4.css
    ├── hero-img-BOzMTo8F.webp
    └── (alle andere bestanden uit dist/assets)
```

- Upload **niet** de map `dist` zelf: upload de **inhoud** van `dist`.
- Zorg dat de map **`assets`** (met alle .js-, .css- en afbeeldingenbestanden) op de server staat.

## 3. Controleren

1. Open **https://tophuis.be/assets/index-BrxaqUr7.js** in de browser.  
   - Als je JavaScript-code ziet → bestand staat goed.  
   - Als je een 404-pagina ziet → de map `assets` ontbreekt of staat op de verkeerde plek.

2. Daarna **https://tophuis.be** openen; de site zou moeten laden.

## 4. Bij een 404 op /assets/...

- Controleer in je FTP/filemanager of de map **assets** in dezelfde map staat als **index.html** (beide in de webroot).
- Controleer of **index-BrxaqUr7.js** (en de andere bestanden) echt in **assets** staan.
- Na een nieuwe build kunnen bestandsnamen veranderen (bijv. `index-XXXXX.js`). Upload dan opnieuw de **hele** inhoud van `dist`.
