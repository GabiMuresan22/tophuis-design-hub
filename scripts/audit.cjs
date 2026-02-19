#!/usr/bin/env node

/**
 * Website Audit Script for Tophuis Design Hub
 * 
 * This script performs automated checks on the website to ensure
 * compliance with security, SEO, and accessibility standards.
 * 
 * Usage: node scripts/audit.js
 */

const fs = require('fs');
const path = require('path');

const results = {
  passed: [],
  failed: [],
  warnings: []
};

function checkFile(filePath, description) {
  if (fs.existsSync(filePath)) {
    results.passed.push(`✓ ${description}`);
    return true;
  } else {
    results.failed.push(`✗ ${description}`);
    return false;
  }
}

function checkFileContains(filePath, searchString, description) {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(searchString)) {
      results.passed.push(`✓ ${description}`);
      return true;
    }
  }
  results.failed.push(`✗ ${description}`);
  return false;
}

function warn(message) {
  results.warnings.push(`⚠ ${message}`);
}

console.log('🔍 Starting Website Audit...\n');

// 1. Security Checks
console.log('=== Security Audit ===');
checkFile('public/.htaccess', 'Security headers in .htaccess');
checkFileContains('public/.htaccess', 'X-Frame-Options', 'X-Frame-Options header configured');
checkFileContains('public/.htaccess', 'Content-Security-Policy', 'Content-Security-Policy header configured');
checkFileContains('public/.htaccess', 'Strict-Transport-Security', 'HSTS header configured');
checkFile('src/components/CookieConsent.tsx', 'Cookie consent component exists');
console.log('');

// 2. SEO Checks
console.log('=== SEO Audit ===');
checkFile('public/robots.txt', 'robots.txt exists');
checkFileContains('public/robots.txt', 'Sitemap:', 'Sitemap referenced in robots.txt');
checkFile('public/sitemap.xml', 'XML sitemap exists');
checkFileContains('index.html', 'og:title', 'Open Graph tags present');
checkFileContains('index.html', 'twitter:card', 'Twitter Card tags present');
checkFile('src/components/SchemaOrg.tsx', 'Schema.org structured data component exists');
checkFile('src/components/CanonicalTag.tsx', 'Canonical tag component exists');
console.log('');

// 3. Legal & Compliance Checks
console.log('=== Legal & Compliance Audit ===');
checkFile('src/pages/Privacy.tsx', 'Privacy Policy page exists');
checkFile('src/pages/Terms.tsx', 'Terms & Conditions page exists');
checkFile('src/pages/Accessibility.tsx', 'Accessibility Statement page exists');
checkFileContains('src/pages/Privacy.tsx', 'GDPR', 'GDPR compliance mentioned in Privacy Policy');
checkFileContains('src/pages/Privacy.tsx', 'info@tophuis.be', 'Contact email in Privacy Policy');
console.log('');

// 4. Performance Checks
console.log('=== Performance Audit ===');
checkFile('vite.config.ts', 'Vite build configuration exists');
checkFileContains('vite.config.ts', 'build', 'Build configuration present');
warn('Manual check required: Run PageSpeed Insights test');
warn('Manual check required: Test Core Web Vitals (LCP, CLS, INP)');
warn('Manual check required: Verify image optimization and lazy loading');
console.log('');

// 5. Accessibility Checks
console.log('=== Accessibility Audit ===');
checkFileContains('index.html', 'lang=', 'HTML lang attribute set');
checkFileContains('index.html', 'viewport', 'Viewport meta tag present');
warn('Manual check required: Run WAVE or axe accessibility scan');
warn('Manual check required: Test keyboard navigation');
warn('Manual check required: Verify color contrast ratios');
console.log('');

// 6. Technical Checks
console.log('=== Technical Audit ===');
checkFile('package.json', 'package.json exists');
checkFile('tsconfig.json', 'TypeScript configuration exists');
checkFileContains('package.json', '"lint"', 'Linting script configured');
checkFileContains('package.json', '"build"', 'Build script configured');
checkFileContains('package.json', '"test"', 'Test script configured');
console.log('');

// 7. Documentation Checks
console.log('=== Documentation Audit ===');
checkFile('README.md', 'README.md exists');
checkFile('docs/WEBSITE-AUDIT.md', 'Website Audit documentation exists');
console.log('');

// Print Summary
console.log('=================================');
console.log('AUDIT SUMMARY');
console.log('=================================');
console.log(`✓ Passed: ${results.passed.length}`);
console.log(`✗ Failed: ${results.failed.length}`);
console.log(`⚠ Warnings: ${results.warnings.length}`);
console.log('');

if (results.failed.length > 0) {
  console.log('Failed Checks:');
  results.failed.forEach(item => console.log(item));
  console.log('');
}

if (results.warnings.length > 0) {
  console.log('Warnings (Manual Checks Required):');
  results.warnings.forEach(item => console.log(item));
  console.log('');
}

console.log('Passed Checks:');
results.passed.forEach(item => console.log(item));
console.log('');

// Exit with appropriate code
if (results.failed.length > 0) {
  console.log('⚠️  Some checks failed. Please review the audit results above.');
  process.exit(1);
} else {
  console.log('✅ All automated checks passed!');
  console.log('📋 Please complete the manual checks listed in the warnings.');
  process.exit(0);
}
