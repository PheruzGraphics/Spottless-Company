// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Toggle mobile menu
  mobileMenuBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');

    // Change hamburger icon to X when menu is open
    if (mobileMenu.classList.contains('active')) {
      mobileMenuBtn.innerHTML = '✕';
    } else {
      mobileMenuBtn.innerHTML = '☰';
    }
  });

  // Close mobile menu when clicking on a link
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('active');
      mobileMenuBtn.innerHTML = '☰';
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function (event) {
    if (!mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
      mobileMenu.classList.remove('active');
      mobileMenuBtn.innerHTML = '☰';
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    var mpesaBtn = document.getElementById('mpesaPayBtn');
    var mpesaModal = document.getElementById('mpesaModal');
    var closeMpesaModal = document.getElementById('closeMpesaModal');

    if (mpesaBtn && mpesaModal && closeMpesaModal) {
      mpesaBtn.addEventListener('click', function () {
        mpesaModal.style.display = 'block';
      });
      closeMpesaModal.addEventListener('click', function () {
        mpesaModal.style.display = 'none';
      });
      window.addEventListener('click', function (event) {
        if (event.target === mpesaModal) {
          mpesaModal.style.display = 'none';
        }
      });
    }
  });
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Add scroll effect to navbar
  const navbar = document.querySelector('.navbar');
  let lastScrollTop = 0;

  window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add shadow when scrolled
    if (scrollTop > 10) {
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }

    lastScrollTop = scrollTop;
  });

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        // Also support new animation classes
        entry.target.classList.add('fade-in');
        entry.target.classList.add('fade-in-scale');
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll('.service-card, .benefit-card, .testimonial-card, .stat-item, .contact-card');
  animateElements.forEach(el => {
    observer.observe(el);
    // Removed hiding effect for entrance animation
  });

  // Add hover effects to service cards
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-8px)';
    });

    card.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0)';
    });
  });

  // Accessibility: Add focus states to cards
  serviceCards.forEach(card => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'region');
    card.setAttribute('aria-label', card.querySelector('.service-title')?.textContent || 'Service Card');
    card.addEventListener('focus', function () {
      this.style.boxShadow = '0 0 0 3px var(--primary)';
    });
    card.addEventListener('blur', function () {
      this.style.boxShadow = '';
    });
  });

  // Add click handlers for CTA buttons (ripple effect removed)
  const ctaButtons = document.querySelectorAll('.btn, .button');
  ctaButtons.forEach(button => {
    button.setAttribute('tabindex', '0');
    button.setAttribute('role', 'button');
    button.setAttribute('aria-label', button.textContent.trim());
  });

  // Phone number click handler
  const phoneButtons = document.querySelectorAll('.btn:contains("Call"), .btn:contains("0743")');
  phoneButtons.forEach(button => {
    if (button.textContent.includes('Call') || button.textContent.includes('0743')) {
      button.addEventListener('click', function () {
        window.location.href = 'tel:+254743413943';
      });
    }
  });

  // WhatsApp button click handler
  const whatsappButtons = document.querySelectorAll('.btn:contains("WhatsApp"), .btn:contains("💬")');
  whatsappButtons.forEach(button => {
    if (button.textContent.includes('WhatsApp') || button.textContent.includes('💬')) {
      button.addEventListener('click', function () {
        const message = encodeURIComponent('Hello! I would like to inquire about your cleaning services.');
        window.open(`https://wa.me/254743413943?text=${message}`, '_blank');
      });
    }
  });

  // Quote button click handler
  const quoteButtons = document.querySelectorAll('.btn:contains("Quote")');
  quoteButtons.forEach(button => {
    if (button.textContent.includes('Quote')) {
      button.addEventListener('click', function () {
        const message = encodeURIComponent('Hello! I would like to get a free quote for your cleaning services. Please contact me with more details.');
        window.open(`https://wa.me/254743413943?text=${message}`, '_blank');
      });
    }
  });

  // Book Now button click handler
  const bookButtons = document.querySelectorAll('.btn:contains("Book")');
  bookButtons.forEach(button => {
    if (button.textContent.includes('Book')) {
      button.addEventListener('click', function () {
        const serviceCard = this.closest('.service-card');
        const serviceName = serviceCard ? serviceCard.querySelector('.service-title').textContent : 'cleaning service';
        const message = encodeURIComponent(`Hello! I would like to book your ${serviceName}. Please contact me to schedule an appointment.`);
        window.open(`https://wa.me/254743413943?text=${message}`, '_blank');
      });
    }
  });

  // Add loading animation
  window.addEventListener('load', function () {
    document.body.classList.add('loaded');

    // Animate hero section on load
    const heroElements = document.querySelectorAll('.hero-text > *');
    heroElements.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, index * 200);
    });
  });

  // Parallax effect for hero section
  window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');

    if (heroImage) {
      const rate = scrolled * -0.5;
      heroImage.style.transform = `translateY(${rate}px)`;
    }
  });

  // Counter animation for stats
  const counters = document.querySelectorAll('.stat-number');
  const counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const suffix = counter.textContent.replace(/\d/g, '');
        let current = 0;
        const increment = target / 50;

        const updateCounter = () => {
          if (current < target) {
            current += increment;
            counter.textContent = Math.ceil(current) + suffix;
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target + suffix;
          }
        };

        updateCounter();
        counterObserver.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });

  // Add form validation if contact form exists
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const formData = new FormData(this);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');

      if (name && email && message) {
        const whatsappMessage = encodeURIComponent(
          `Hello! My name is ${name}. Email: ${email}. Message: ${message}`
        );
        window.open(`https://wa.me/254743413943?text=${whatsappMessage}`, '_blank');
      } else {
        alert('Please fill in all required fields.');
      }
    });
  }

  // Add testimonial carousel functionality if needed
  const testimonialGrid = document.querySelector('.testimonials-grid');
  if (testimonialGrid && window.innerWidth < 768) {
    // Convert to carousel on mobile
    testimonialGrid.style.display = 'flex';
    testimonialGrid.style.overflowX = 'auto';
    testimonialGrid.style.scrollSnapType = 'x mandatory';

    const testimonialCards = testimonialGrid.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
      card.style.minWidth = '280px';
      card.style.scrollSnapAlign = 'start';
    });
  }

  // Optimize images for lazy loading
  const allImages = document.querySelectorAll('img');
  allImages.forEach(img => {
    img.setAttribute('loading', 'lazy');
  });
});

// Add CSS for hero text and testimonial scrollbar only (ripple effect removed)
const style = document.createElement('style');
style.textContent = `
  .hero-text > * {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
  }
  .loaded .hero-text > * {
    opacity: 1;
    transform: translateY(0);
  }
  @media (max-width: 767px) {
    .testimonials-grid::-webkit-scrollbar {
      height: 4px;
    }
    .testimonials-grid::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 2px;
    }
    .testimonials-grid::-webkit-scrollbar-thumb {
      background: var(--primary);
      border-radius: 2px;
    }
  }
`;
document.head.appendChild(style);