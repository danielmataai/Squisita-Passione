/* =====================================================
   SQUISITA PASSIONE - Main JavaScript
   Chef Davide Rizzardi | Luxury Italian Culinary Experiences
   ===================================================== */

document.addEventListener('DOMContentLoaded', function() {
  
  // ==================== PRELOADER ====================
  const preloader = document.getElementById('preloader');
  
  window.addEventListener('load', function() {
    setTimeout(() => {
      preloader.classList.add('preloader--hidden');
    }, 800);
  });

  // ==================== HEADER SCROLL BEHAVIOR ====================
  const header = document.getElementById('header');
  let lastScrollY = window.scrollY;
  let ticking = false;
  
  function updateHeader() {
    const scrollY = window.scrollY;
    
    if (scrollY > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
    
    lastScrollY = scrollY;
    ticking = false;
  }
  
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  });

  // ==================== MOBILE MENU ====================
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  const navLinks = nav.querySelectorAll('.nav__link');
  let isMenuOpen = false;
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    nav.classList.toggle('nav--open', isMenuOpen);
    menuToggle.classList.toggle('is-active', isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }
  
  menuToggle.addEventListener('click', toggleMenu);
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isMenuOpen) {
        toggleMenu();
      }
    });
  });

  // ==================== PASSIONE MODE ON SCROLL BACK ====================
  const heroSection = document.getElementById('hero');
  let hasScrolledPastHero = false;
  
  if (heroSection) {
    window.addEventListener('scroll', function() {
      const heroBottom = heroSection.offsetHeight;
      const scrollY = window.scrollY;
      
      // User has scrolled past the hero
      if (scrollY > heroBottom) {
        hasScrolledPastHero = true;
      }
      
      // User is back near top AND had scrolled past before
      if (scrollY < heroBottom * 0.5 && hasScrolledPastHero && !document.body.classList.contains('passione-mode')) {
        document.body.classList.add('passione-mode');
      }
    });
  }

  // ==================== SMOOTH SCROLL ====================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        const headerHeight = header.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==================== REVEAL ON SCROLL ====================
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // ==================== ACTIVE NAV LINK ====================
  const sections = document.querySelectorAll('section[id]');
  
  function updateActiveNav() {
    const scrollY = window.scrollY + header.offsetHeight + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('nav__link--active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('nav__link--active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', updateActiveNav);

  // ==================== FORM HANDLING ====================
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);
      
      // Add loading state
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      try {
        // Simulate form submission (replace with actual endpoint)
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Success message
        showNotification('Thank you! Your message has been sent. I will get back to you soon.', 'success');
        contactForm.reset();
      } catch (error) {
        showNotification('Something went wrong. Please try again.', 'error');
      } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  }

  // ==================== NOTIFICATION SYSTEM ====================
  function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
      <p>${message}</p>
      <button class="notification__close" aria-label="Close">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      max-width: 400px;
      padding: 1rem 1.5rem;
      background-color: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
      color: white;
      border-radius: 8px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      z-index: 9999;
      animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Close button
    notification.querySelector('.notification__close').addEventListener('click', () => {
      notification.remove();
    });
    
    // Auto remove
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateX(100%)';
      notification.style.transition = 'all 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    }, 5000);
  }

  // ==================== GALLERY LIGHTBOX ====================
  const galleryItems = document.querySelectorAll('.gallery__item');
  
  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      const img = this.querySelector('img');
      const caption = this.querySelector('.gallery__item-caption');
      
      openLightbox(img.src, caption ? caption.textContent : '');
    });
  });
  
  function openLightbox(src, caption) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
      <div class="lightbox__overlay"></div>
      <div class="lightbox__content">
        <img src="${src}" alt="${caption}">
        ${caption ? `<p class="lightbox__caption">${caption}</p>` : ''}
        <button class="lightbox__close" aria-label="Close">&times;</button>
      </div>
    `;
    
    // Add styles
    lightbox.style.cssText = `
      position: fixed;
      inset: 0;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: fadeIn 0.3s ease;
    `;
    
    const overlay = lightbox.querySelector('.lightbox__overlay');
    overlay.style.cssText = `
      position: absolute;
      inset: 0;
      background-color: rgba(0,0,0,0.9);
    `;
    
    const content = lightbox.querySelector('.lightbox__content');
    content.style.cssText = `
      position: relative;
      max-width: 90vw;
      max-height: 90vh;
      animation: fadeInUp 0.3s ease;
    `;
    
    const imgEl = lightbox.querySelector('img');
    imgEl.style.cssText = `
      max-width: 100%;
      max-height: 85vh;
      object-fit: contain;
      border-radius: 4px;
    `;
    
    const captionEl = lightbox.querySelector('.lightbox__caption');
    if (captionEl) {
      captionEl.style.cssText = `
        text-align: center;
        color: white;
        margin-top: 1rem;
        font-size: 1rem;
      `;
    }
    
    const closeBtn = lightbox.querySelector('.lightbox__close');
    closeBtn.style.cssText = `
      position: absolute;
      top: -40px;
      right: 0;
      background: none;
      border: none;
      color: white;
      font-size: 2rem;
      cursor: pointer;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
    
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
    
    // Close events
    function closeLightbox() {
      lightbox.style.opacity = '0';
      lightbox.style.transition = 'opacity 0.3s ease';
      document.body.style.overflow = '';
      setTimeout(() => lightbox.remove(), 300);
    }
    
    closeBtn.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', function escHandler(e) {
      if (e.key === 'Escape') {
        closeLightbox();
        document.removeEventListener('keydown', escHandler);
      }
    });
  }

  // ==================== PARALLAX EFFECT ====================
  const hero = document.querySelector('.hero');
  const heroBackground = document.querySelector('.hero__background img');
  
  if (hero && heroBackground) {
    window.addEventListener('scroll', function() {
      const scrollY = window.scrollY;
      const heroHeight = hero.offsetHeight;
      
      if (scrollY < heroHeight) {
        const parallaxValue = scrollY * 0.4;
        heroBackground.style.transform = `translateY(${parallaxValue}px) scale(1.1)`;
      }
    });
  }

  // ==================== CURRENT YEAR ====================
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ==================== SERVICE CARDS HOVER ====================
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.zIndex = '';
    });
  });

  // ==================== LAZY LOADING IMAGES ====================
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    }, {
      rootMargin: '100px'
    });
    
    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  }

  // ==================== EXPERIENCE TAGS ANIMATION ====================
  const experienceTags = document.querySelectorAll('.experience-tag');
  
  experienceTags.forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.05}s`;
  });

});

// ==================== FORM VALIDATION HELPERS ====================
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^[\d\s\-\+\(\)]{10,}$/;
  return re.test(phone);
}

// ==================== UTILITY FUNCTIONS ====================
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// ==================== PERFORMANCE OPTIMIZATION ====================
// Defer non-critical JavaScript
window.addEventListener('load', function() {
  // Load any third-party scripts here
  // Example: Analytics, chat widgets, etc.
});
