/* =====================================================
   SQUISITA PASSIONE - Cookie Consent & GA4
   Handles GDPR/PIPEDA compliant consent management
   ===================================================== */

(function() {
  'use strict';

  const CONSENT_KEY = 'sp_cookie_consent';
  const GA_ID = 'G-5YKDY10FVN';

  // Check if user already consented
  const consent = localStorage.getItem(CONSENT_KEY);

  if (consent === 'accepted') {
    loadGA4();
  } else if (consent !== 'declined') {
    // No decision yet — show the banner after a short delay
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(showBanner, 1500);
    });
  }

  function loadGA4() {
    // Don't load twice
    if (document.getElementById('ga4-script')) return;

    const script = document.createElement('script');
    script.id = 'ga4-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', GA_ID);
  }

  function showBanner() {
    const banner = document.getElementById('cookieConsent');
    if (banner) {
      banner.classList.add('active');

      // Update text if i18n is loaded
      if (window.i18n && window.i18n.currentLang) {
        updateBannerLanguage(window.i18n.currentLang);
      }
    }
  }

  function hideBanner() {
    const banner = document.getElementById('cookieConsent');
    if (banner) {
      banner.classList.remove('active');
      banner.classList.add('hiding');
      setTimeout(() => {
        banner.classList.remove('hiding');
        banner.style.display = 'none';
      }, 400);
    }
  }

  function acceptCookies() {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    loadGA4();
    hideBanner();
  }

  function declineCookies() {
    localStorage.setItem(CONSENT_KEY, 'declined');
    hideBanner();
  }

  function updateBannerLanguage(lang) {
    const banner = document.getElementById('cookieConsent');
    if (!banner || !window.i18n) return;

    const textEl = banner.querySelector('[data-i18n="consent.text"]');
    const acceptEl = banner.querySelector('[data-i18n="consent.accept"]');
    const declineEl = banner.querySelector('[data-i18n="consent.decline"]');
    const linkEl = banner.querySelector('[data-i18n="consent.link"]');

    if (textEl) textEl.textContent = window.i18n.translate('consent.text') || textEl.textContent;
    if (acceptEl) acceptEl.textContent = window.i18n.translate('consent.accept') || acceptEl.textContent;
    if (declineEl) declineEl.textContent = window.i18n.translate('consent.decline') || declineEl.textContent;
    if (linkEl) linkEl.textContent = window.i18n.translate('consent.link') || linkEl.textContent;
  }

  // Expose functions globally
  window.spConsent = {
    accept: acceptCookies,
    decline: declineCookies,
    updateLanguage: updateBannerLanguage
  };
})();
