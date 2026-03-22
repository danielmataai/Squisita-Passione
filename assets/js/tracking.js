/* =====================================================
   SQUISITA PASSIONE - GA4 Custom Event Tracking
   Tracks key user interactions for conversion analysis
   ===================================================== */

(function() {
  'use strict';

  // Helper: only fire events if GA4 is loaded (user accepted cookies)
  function trackEvent(eventName, params) {
    if (typeof gtag === 'function') {
      gtag('event', eventName, params);
    }
  }

  // Helper: get current language
  function getLang() {
    return (window.i18n && window.i18n.currentLang) || 'en';
  }

  // Helper: get current page name
  function getPageName() {
    const path = window.location.pathname;
    if (path.includes('tours')) return 'tours';
    if (path.includes('workshops')) return 'workshops';
    if (path.includes('private-chef')) return 'private_chef';
    if (path.includes('privacy')) return 'privacy';
    return 'home';
  }

  // ==================== INIT ON DOM READY ====================
  document.addEventListener('DOMContentLoaded', function() {

    // ==================== 1. CONTACT FORM SUBMISSION ====================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function() {
        const service = contactForm.querySelector('#service');
        const guests = contactForm.querySelector('#guests');

        trackEvent('generate_lead', {
          event_category: 'contact',
          event_label: service ? service.value : 'unknown',
          service_type: service ? service.value : 'unknown',
          guest_count: guests ? guests.value : '',
          language: getLang(),
          page: getPageName()
        });

        trackEvent('form_submit', {
          form_id: 'contact_form',
          form_name: 'Contact Form',
          service_type: service ? service.value : 'unknown'
        });
      });
    }

    // ==================== 2. WHATSAPP CLICKS ====================
    document.addEventListener('click', function(e) {
      const link = e.target.closest('a[href*="wa.me"]');
      if (link) {
        const href = link.getAttribute('href');
        const isItaly = href.includes('3937731001944');
        
        trackEvent('whatsapp_click', {
          event_category: 'contact',
          event_label: isItaly ? 'italy' : 'canada',
          phone_region: isItaly ? 'IT' : 'CA',
          page: getPageName(),
          language: getLang()
        });
      }
    });

    // ==================== 3. EMAIL CLICKS ====================
    document.addEventListener('click', function(e) {
      const link = e.target.closest('a[href^="mailto:"]');
      if (link) {
        trackEvent('email_click', {
          event_category: 'contact',
          event_label: link.getAttribute('href').replace('mailto:', ''),
          page: getPageName()
        });
      }
    });

    // ==================== 4. CTA BUTTON CLICKS ====================
    document.addEventListener('click', function(e) {
      const btn = e.target.closest('.btn, .header__cta');
      if (btn) {
        const text = btn.textContent.trim();
        const href = btn.getAttribute('href') || '';

        // Skip if it's a WhatsApp or mailto (tracked separately)
        if (href.includes('wa.me') || href.includes('mailto:')) return;

        trackEvent('cta_click', {
          event_category: 'engagement',
          event_label: text,
          button_text: text,
          destination: href,
          page: getPageName(),
          language: getLang()
        });
      }
    });

    // ==================== 5. TOUR SELECTOR CLICKS ====================
    document.addEventListener('click', function(e) {
      const card = e.target.closest('.tour-selector__card');
      if (card) {
        const href = card.getAttribute('href') || '';
        let tourType = 'unknown';
        
        if (href.includes('tour1')) tourType = 'full_experience';
        else if (href.includes('tour2')) tourType = 'activities_only';
        else if (href.includes('tour3')) tourType = 'day_experience';

        trackEvent('tour_select', {
          event_category: 'engagement',
          event_label: tourType,
          tour_type: tourType,
          language: getLang()
        });
      }
    });

    // ==================== 6. LANGUAGE CHANGE ====================
    // Hook into i18n language change
    const checkI18n = setInterval(function() {
      if (window.i18n) {
        clearInterval(checkI18n);
        const origSetLang = window.i18n.setLanguage.bind(window.i18n);
        
        window.i18n.setLanguage = function(lang) {
          trackEvent('language_change', {
            event_category: 'engagement',
            event_label: lang,
            new_language: lang,
            page: getPageName()
          });
          origSetLang(lang);
        };
      }
    }, 200);

    // ==================== 7. SOCIAL LINK CLICKS ====================
    document.addEventListener('click', function(e) {
      const link = e.target.closest('a[href*="instagram.com"], a[href*="linkedin.com"]');
      if (link) {
        const href = link.getAttribute('href');
        const platform = href.includes('instagram') ? 'instagram' : 'linkedin';

        trackEvent('social_click', {
          event_category: 'engagement',
          event_label: platform,
          platform: platform,
          page: getPageName()
        });
      }
    });

    // ==================== 8. SCROLL DEPTH ====================
    const scrollThresholds = [25, 50, 75, 90];
    const scrolledPast = {};

    window.addEventListener('scroll', throttle(function() {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      scrollThresholds.forEach(function(threshold) {
        if (scrollPercent >= threshold && !scrolledPast[threshold]) {
          scrolledPast[threshold] = true;
          trackEvent('scroll_depth', {
            event_category: 'engagement',
            event_label: threshold + '%',
            percent_scrolled: threshold,
            page: getPageName()
          });
        }
      });
    }, 500));

    // ==================== 9. FAQ INTERACTIONS ====================
    document.addEventListener('click', function(e) {
      const faqBtn = e.target.closest('.faq__question');
      if (faqBtn) {
        const question = faqBtn.textContent.trim().substring(0, 80);
        trackEvent('faq_click', {
          event_category: 'engagement',
          event_label: question,
          question_text: question,
          page: getPageName()
        });
      }
    });

    // ==================== 10. AVAILABILITY WIDGET ====================
    const availBtn = document.getElementById('availabilityBtn');
    if (availBtn) {
      availBtn.addEventListener('click', function() {
        trackEvent('availability_view', {
          event_category: 'engagement',
          event_label: 'availability_widget',
          page: getPageName()
        });
      });
    }

  }); // end DOMContentLoaded

  // ==================== THROTTLE UTILITY ====================
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      var args = arguments;
      var context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(function() { inThrottle = false; }, limit);
      }
    };
  }

})();
