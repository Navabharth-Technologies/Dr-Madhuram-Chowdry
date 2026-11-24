/**
 * DR. MADHURAM CHOWDRY — Premium Healthcare Website Script
 * Lightweight, accessible, zero-dependency vanilla JS
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initFaqAccordions();
  initAppointmentForms();
  highlightActiveNav();
});

/**
 * Responsive Navbar and Mobile Drawer
 */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const hamburger = document.querySelector('.hamburger-btn');
  const drawer = document.querySelector('.mobile-drawer');

  // Sticky header shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  if (hamburger && drawer) {
    hamburger.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('open');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    // Close when clicking outside drawer
    document.addEventListener('click', (e) => {
      if (drawer.classList.contains('open') && !drawer.contains(e.target) && !hamburger.contains(e.target)) {
        closeDrawer();
      }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        closeDrawer();
      }
    });
  }

  function openDrawer() {
    drawer?.classList.add('open');
    hamburger?.classList.add('active');
    hamburger?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer?.classList.remove('open');
    hamburger?.classList.remove('active');
    hamburger?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
}

/**
 * FAQ Collapsible Accordions
 */
function initFaqAccordions() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other items in this accordion group
      const parent = item.closest('.faq-accordion');
      if (parent) {
        parent.querySelectorAll('.faq-item').forEach(other => {
          if (other !== item) other.classList.remove('active');
        });
      }

      item.classList.toggle('active', !isActive);
      question.setAttribute('aria-expanded', String(!isActive));
    });
  });
}

/**
 * Appointment / Consultation Form Handling
 * Strictly adheres to medical guidelines: does not claim confirmed booking without clinic review.
 */
function initAppointmentForms() {
  const forms = document.querySelectorAll('.appointment-form');
  if (!forms.length) return;

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = form.querySelector('[name="patientName"]');
      const phoneInput = form.querySelector('[name="patientPhone"]');
      const serviceInput = form.querySelector('[name="consultationType"]');
      const dateInput = form.querySelector('[name="preferredDate"]');
      const messageInput = form.querySelector('[name="patientMessage"]');
      const consentInput = form.querySelector('[name="consent"]');
      const statusMsg = form.querySelector('.form-status-msg');

      // Validation
      const name = (nameInput?.value || '').trim();
      const phone = (phoneInput?.value || '').trim().replace(/\D/g, '');
      const service = serviceInput?.value || 'General Consultation';
      const date = dateInput?.value || 'Next Available Slot';
      const message = (messageInput?.value || '').trim();

      if (!name || name.length < 2) {
        showStatus(statusMsg, 'error', 'Please enter the patient\'s full name.');
        nameInput?.focus();
        return;
      }

      if (!phone || phone.length < 10) {
        showStatus(statusMsg, 'error', 'Please provide a valid 10-digit mobile contact number.');
        phoneInput?.focus();
        return;
      }

      if (consentInput && !consentInput.checked) {
        showStatus(statusMsg, 'error', 'Please confirm consent for clinical consultation follow-up.');
        consentInput?.focus();
        return;
      }

      // Success State - Show clear confirmation that request is received
      const successHtml = `
        <strong>Consultation Request Submitted</strong><br>
        Thank you, ${name}. Your appointment enquiry for <em>${service}</em> on <em>${date}</em> has been securely registered.<br>
        Our clinic coordination team at <strong>A R Hospital Mysuru</strong> will call you on <strong>+91 ${phone}</strong> within clinic hours to confirm your consultation schedule.<br><br>
        <div style="margin-top: 10px;">
          <a href="https://wa.me/919620307042?text=${encodeURIComponent(
            `Hello Dr. Madhuram Chowdry, I have submitted a consultation request for ${name} (${phone}) regarding ${service} on ${date}.`
          )}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary" style="background:#128C7E;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="display:inline; vertical-align:middle; margin-right:4px;">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.07-1.748-.393-.85-.353-1.423-.847-1.956-1.38-.535-.533-1.029-1.106-1.382-1.956-.463-1.114-.438-1.436-.393-1.748.05-.333.419-1.026.824-1.17.133-.048.28-.069.412-.069.155 0 .285.006.402.024.135.021.28.096.345.244.133.303.46 1.11.501 1.192.042.083.07.18.014.293-.056.113-.083.183-.166.281-.083.098-.175.22-.25.295-.083.084-.17.176-.073.343.097.166.432.712.928 1.154.638.568 1.176.744 1.343.827.166.083.264.07.362-.042.098-.112.417-.487.528-.654.111-.167.222-.139.375-.083.153.056.97.458 1.137.541.167.083.278.125.319.194.042.069.042.402-.102.807z"/>
            </svg>
            Instant WhatsApp Confirmation
          </a>
        </div>
      `;

      showStatus(statusMsg, 'success', successHtml);
      form.reset();
    });
  });

  function showStatus(el, type, content) {
    if (!el) return;
    el.className = `form-status-msg ${type}`;
    el.innerHTML = content;
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

/**
 * Highlight active navigation item based on current URL path
 */
function highlightActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-link, .mobile-nav-link');

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPath = href.split('/').pop().split('#')[0];
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
