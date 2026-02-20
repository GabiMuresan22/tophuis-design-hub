# Quick Audit Reference Guide

This document provides quick commands and links to run manual audits on the Tophuis Design Hub website.

## Automated Audit

Run the automated audit script to check compliance:

```bash
npm run audit
```

This checks:
- ✓ Security headers configuration
- ✓ SEO elements (sitemap, robots.txt, meta tags)
- ✓ Legal pages (Privacy, Terms, Accessibility)
- ✓ Technical configuration
- ✓ Documentation

## Manual Audits

### 1. Security Audit

#### Test Security Headers
Visit your deployed site and check headers:
- [SecurityHeaders.com](https://securityheaders.com/)
- [Mozilla Observatory](https://observatory.mozilla.org/)

```bash
# Test with curl (replace with your domain)
curl -I https://www.tophuis.be | grep -E 'X-Frame-Options|Content-Security-Policy|Strict-Transport-Security'
```

#### SSL Certificate Check
- [SSL Labs Test](https://www.ssllabs.com/ssltest/)

### 2. SEO Audit

#### PageSpeed Insights
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- Test both mobile and desktop
- Target: 90+ score

#### Core Web Vitals
Check in PageSpeed Insights or Google Search Console:
- **LCP** (Largest Contentful Paint): < 2.5s
- **CLS** (Cumulative Layout Shift): < 0.1
- **INP** (Interaction to Next Paint): < 200ms

#### Structured Data Validation
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

Test URLs:
- Homepage: `https://www.tophuis.be/`
- Services: `https://www.tophuis.be/diensten`
- Contact: `https://www.tophuis.be/contact`

#### Search Console Setup
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://www.tophuis.be`
3. Verify ownership (via DNS or HTML file)
4. Submit sitemap: `https://www.tophuis.be/sitemap.xml`

#### Check Indexing
```
site:tophuis.be
```
Run this search in Google to see indexed pages.

### 3. Accessibility Audit

#### Automated Tools
- [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/)
- Chrome DevTools Lighthouse (Accessibility section)
- [axe DevTools Extension](https://www.deque.com/axe/devtools/)

#### Manual Checks
1. **Keyboard Navigation**: Tab through all interactive elements
2. **Screen Reader**: Test with NVDA (Windows) or VoiceOver (Mac)
3. **Color Contrast**: Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
4. **Alt Text**: Verify all images have meaningful alt attributes

### 4. Performance Audit

#### GTmetrix
- [GTmetrix](https://gtmetrix.com/)
- Target: A grade, < 3s load time

#### WebPageTest
- [WebPageTest](https://www.webpagetest.org/)
- Test from multiple locations

#### Check Image Optimization
```bash
# Check image sizes in dist folder after build
npm run build
ls -lh dist/assets/*.{jpg,jpeg,png,webp,svg}
```

#### Lighthouse Audit
```bash
# Run Lighthouse from command line
npx lighthouse https://www.tophuis.be --view
```

### 5. Mobile Responsiveness

#### Test Responsive Design
- Chrome DevTools Device Mode
- [Responsinator](http://www.responsinator.com/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

#### Real Device Testing
Test on actual devices:
- iOS Safari
- Android Chrome
- Different screen sizes (phone, tablet)

### 6. Link & SEO Health

#### Broken Link Checker
```bash
# Using wget to check for broken links
wget --spider -r -nd -nv -o wget-log.txt https://www.tophuis.be 2>&1 | grep -B 2 '404'
```

Or use online tools:
- [Dead Link Checker](https://www.deadlinkchecker.com/)
- [Screaming Frog SEO Spider](https://www.screamingfrogseoseo.com/)

#### Meta Tags Validation
- [Metatags.io](https://metatags.io/)
- Test Open Graph and Twitter Cards

### 7. Analytics Setup

#### Google Analytics
1. Verify GA is loaded: Check browser console or use [Google Tag Assistant](https://tagassistant.google.com/)
2. Test tracking: Visit pages and check Real-Time reports in GA
3. Set up goals/conversions

#### Google Search Console
- Monitor crawl errors
- Check search performance
- Review index coverage

## Checklist for Production Deployment

Before deploying to production:

- [ ] Run `npm run audit` - all checks pass
- [ ] Run `npm run build` - builds without errors
- [ ] Run `npm run lint` - no critical errors
- [ ] Test locally with `npm run preview`
- [ ] Test all pages load correctly
- [ ] Test contact form submission
- [ ] Test mobile responsiveness
- [ ] Verify all links work
- [ ] Check images load correctly
- [ ] Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify HTTPS works with no mixed content
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics tracking
- [ ] Configure server caching headers
- [ ] Enable GZIP/Brotli compression
- [ ] Set up automated backups

## Ongoing Monitoring

### Weekly
- [ ] Check Google Analytics for traffic
- [ ] Review form submissions
- [ ] Check for console errors in production

### Monthly
- [ ] Run full audit (`npm run audit`)
- [ ] Review Google Search Console for issues
- [ ] Check Core Web Vitals
- [ ] Update content as needed
- [ ] Review and respond to any user feedback

### Quarterly
- [ ] Full security audit
- [ ] Performance optimization review
- [ ] Content strategy review
- [ ] SEO performance analysis
- [ ] Update dependencies (`npm update`)
- [ ] Review and update privacy policy if needed

## Quick Links

- **Production Site**: https://www.tophuis.be
- **Sitemap**: https://www.tophuis.be/sitemap.xml
- **Robots.txt**: https://www.tophuis.be/robots.txt
- **Privacy Policy**: https://www.tophuis.be/privacy
- **Terms**: https://www.tophuis.be/terms
- **Accessibility**: https://www.tophuis.be/accessibility

## Support

For questions or issues:
- Email: info@tophuis.be
- Phone: +32 493 28 88 87

## Documentation

- Full audit checklist: `/docs/WEBSITE-AUDIT.md`
- Deployment guide: `/DEPLOY-COMBELL.md`
- Project README: `/README.md`
