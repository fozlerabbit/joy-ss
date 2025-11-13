/* ========================================
   CONTACT PAGE JAVASCRIPT - ScriptySphere
   Interactive Features & Form Validation
   ======================================== */

/* ============================================
   INITIALIZATION
   Wait for DOM to be fully loaded
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all features
  initParticleBackground();
  initContactForm();
  initFAQAccordion();
  initKeyboardNavigation();
  initAnimationsOnScroll();
  initFormFieldEffects();
});

/* ============================================
   PARTICLE BACKGROUND ANIMATION
   Creates animated particle canvas background
   ============================================ */
function initParticleBackground() {
  const canvas = document.getElementById('particleCanvas');
  
  // Exit if canvas not found
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;
  
  // Mouse position tracker
  let mouse = { 
    x: null, 
    y: null, 
    radius: 120 
  };

  /* ============================================
     RESIZE CANVAS
     Set canvas size to window dimensions
     ============================================ */
  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  /* ============================================
     MOUSE MOVE EVENT
     Track mouse position for particle interaction
     ============================================ */
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  // Reset mouse position when leaving window
  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  /* ============================================
     PARTICLE CLASS
     Individual particle with physics
     ============================================ */
  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      // Random position
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      
      // Random size (1-4 pixels)
      this.size = Math.random() * 3 + 1;
      
      // Random velocity
      this.speedX = (Math.random() - 0.5) * 1.5;
      this.speedY = (Math.random() - 0.5) * 1.5;
      
      // Random color with opacity
      this.color = `rgba(14, 165, 233, ${Math.random() * 0.5 + 0.3})`;
    }

    /* ============================================
       UPDATE PARTICLE POSITION
       Apply physics and mouse interaction
       ============================================ */
    update() {
      // Mouse interaction - repel particles
      if (mouse.x != null && mouse.y != null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // If particle is within mouse radius
        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const dirX = dx / distance;
          const dirY = dy / distance;
          
          // Push particle away from mouse
          this.x -= dirX * force * 4;
          this.y -= dirY * force * 4;
        }
      }

      // Apply velocity
      this.x += this.speedX;
      this.y += this.speedY;

      // Wrap around screen edges
      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
    }

    /* ============================================
       DRAW PARTICLE
       Render particle on canvas
       ============================================ */
    draw() {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  /* ============================================
     INITIALIZE PARTICLES
     Create particle array based on screen size
     ============================================ */
  const initParticles = () => {
    particles = [];
    // Calculate particle count based on screen area
    const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  };

  /* ============================================
     ANIMATION LOOP
     Main render loop using requestAnimationFrame
     ============================================ */
  const animate = () => {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw each particle
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });

    // Draw connection lines between nearby particles
    particles.forEach((p1, i) => {
      particles.slice(i + 1).forEach(p2 => {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Draw line if particles are close enough
        if (distance < 100) {
          ctx.strokeStyle = `rgba(14, 165, 233, ${0.3 * (1 - distance / 100)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      });
    });

    // Continue animation loop
    animationId = requestAnimationFrame(animate);
  };

  /* ============================================
     START ANIMATION
     Initialize and begin rendering
     ============================================ */
  resizeCanvas();
  initParticles();
  animate();

  /* ============================================
     WINDOW RESIZE HANDLER
     Recreate particles on window resize
     ============================================ */
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      resizeCanvas();
      initParticles();
    }, 250);
  }, { passive: true });

  /* ============================================
     CLEANUP
     Cancel animation on page unload
     ============================================ */
  window.addEventListener('beforeunload', () => {
    cancelAnimationFrame(animationId);
  });
}

/* ============================================
   CONTACT FORM HANDLING
   Form validation and submission
   ============================================ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  
  if (!form) return;

  // Get form elements
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');
  const submitBtn = form.querySelector('.btn-submit');
  const successMsg = document.getElementById('formSuccess');

  /* ============================================
     FORM SUBMISSION HANDLER
     Validate and submit form data
     ============================================ */
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    clearErrors();
    
    // Validate all fields
    let isValid = true;
    
    // Validate name
    if (!validateName(nameInput.value)) {
      showError('nameError', 'Please enter your full name');
      nameInput.classList.add('error');
      isValid = false;
    }
    
    // Validate email
    if (!validateEmail(emailInput.value)) {
      showError('emailError', 'Please enter a valid email address');
      emailInput.classList.add('error');
      isValid = false;
    }
    
    // Validate phone (optional, but check format if provided)
    if (phoneInput.value && !validatePhone(phoneInput.value)) {
      showError('phoneError', 'Please enter a valid phone number');
      phoneInput.classList.add('error');
      isValid = false;
    }
    
    // Validate subject
    if (!validateSubject(subjectInput.value)) {
      showError('subjectError', 'Please enter a subject');
      subjectInput.classList.add('error');
      isValid = false;
    }
    
    // Validate message
    if (!validateMessage(messageInput.value)) {
      showError('messageError', 'Please enter a message (at least 10 characters)');
      messageInput.classList.add('error');
      isValid = false;
    }
    
    // Exit if validation failed
    if (!isValid) return;
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    try {
      // Simulate API call (replace with actual endpoint)
      await submitFormData({
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        subject: subjectInput.value,
        message: messageInput.value,
        timestamp: new Date().toISOString()
      });
      
      // Show success message
      successMsg.classList.add('visible');
      
      // Reset form
      form.reset();
      
      // Scroll to success message
      successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        successMsg.classList.remove('visible');
      }, 5000);
      
    } catch (error) {
      // Show error notification
      showNotification('Oops! Something went wrong. Please try again.', 'error');
      console.error('Form submission error:', error);
    } finally {
      // Remove loading state
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
    }
  });

  /* ============================================
     REAL-TIME VALIDATION
     Remove error state on input
     ============================================ */
  [nameInput, emailInput, phoneInput, subjectInput, messageInput].forEach(input => {
    if (input) {
      input.addEventListener('input', () => {
        input.classList.remove('error');
        const errorId = input.id + 'Error';
        const errorElement = document.getElementById(errorId);
        if (errorElement) {
          errorElement.classList.remove('visible');
        }
      });
    }
  });
}

/* ============================================
   VALIDATION FUNCTIONS
   Individual field validators
   ============================================ */

// Validate name (at least 2 characters)
function validateName(name) {
  return name.trim().length >= 2;
}

// Validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate phone format (optional)
function validatePhone(phone) {
  // Allow various phone formats
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  return phone.length >= 10 && phoneRegex.test(phone);
}

// Validate subject (at least 3 characters)
function validateSubject(subject) {
  return subject.trim().length >= 3;
}

// Validate message (at least 10 characters)
function validateMessage(message) {
  return message.trim().length >= 10;
}

/* ============================================
   ERROR HANDLING
   Display and clear error messages
   ============================================ */

// Show error message
function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.classList.add('visible');
  }
}

// Clear all error messages
function clearErrors() {
  const errorElements = document.querySelectorAll('.form-error');
  errorElements.forEach(el => {
    el.classList.remove('visible');
    el.textContent = '';
  });
  
  const inputs = document.querySelectorAll('.form-input, .form-textarea');
  inputs.forEach(input => input.classList.remove('error'));
}

/* ============================================
   FORM SUBMISSION
   Simulate API call (replace with actual endpoint)
   ============================================ */
async function submitFormData(data) {
  // Simulate network delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Log form data (in production, send to server)
      console.log('Form submitted:', data);
      
      // Store in localStorage for demo purposes
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push(data);
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
      
      // Simulate 95% success rate
      if (Math.random() > 0.05) {
        resolve({ success: true });
      } else {
        reject(new Error('Network error'));
      }
    }, 1500);
  });
}

/* ============================================
   NOTIFICATION SYSTEM
   Display toast notifications
   ============================================ */
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(n => n.remove());

  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      ${type === 'error' ? 
        '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>' : 
        '<polyline points="20 6 9 17 4 12"/>'}
    </svg>
    <span>${message}</span>
    <button class="notification-close" aria-label="Close">×</button>
  `;

  // Add styles if not exists
  if (!document.querySelector('#notificationStyles')) {
    const style = document.createElement('style');
    style.id = 'notificationStyles';
    style.textContent = `
      .notification {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        gap: 1rem;
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        max-width: 400px;
      }
      
      .notification-error {
        border-left: 4px solid #EF4444;
      }
      
      .notification svg {
        width: 24px;
        height: 24px;
        flex-shrink: 0;
      }
      
      .notification-error svg {
        color: #EF4444;
      }
      
      .notification-close {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        margin-left: auto;
      }
      
      @keyframes slideInRight {
        from {
          transform: translateX(400px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      
      @media (max-width: 768px) {
        .notification {
          bottom: 1rem;
          right: 1rem;
          left: 1rem;
          max-width: none;
        }
      }
    `;
    document.head.appendChild(style);
  }

  document.body.appendChild(notification);

  // Close button handler
  const closeBtn = notification.querySelector('.notification-close');
  closeBtn.addEventListener('click', () => {
    notification.style.animation = 'slideInRight 0.3s ease-out reverse';
    setTimeout(() => notification.remove(), 300);
  });

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.style.animation = 'slideInRight 0.3s ease-out reverse';
      setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
}

/* ============================================
   FAQ ACCORDION
   Expandable FAQ items
   ============================================ */
function initFAQAccordion() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const isExpanded = question.getAttribute('aria-expanded') === 'true';
      
      // Close all other FAQs
      faqQuestions.forEach(q => {
        if (q !== question) {
          q.setAttribute('aria-expanded', 'false');
        }
      });
      
      // Toggle current FAQ
      question.setAttribute('aria-expanded', !isExpanded);
    });
  });
}

/* ============================================
   KEYBOARD NAVIGATION
   Accessibility support
   ============================================ */
function initKeyboardNavigation() {
  // Add keyboard navigation class
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-nav');
    }
  });

  // Remove on mouse use
  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
  });

  // Add focus styles if not exists
  if (!document.querySelector('#keyboardNavStyles')) {
    const style = document.createElement('style');
    style.id = 'keyboardNavStyles';
    style.textContent = `
      .keyboard-nav *:focus {
        outline: 3px solid var(--color-primary);
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);
  }
}

/* ============================================
   ANIMATIONS ON SCROLL
   Reveal elements as they come into view
   ============================================ */
function initAnimationsOnScroll() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe cards
  const cards = document.querySelectorAll('.form-card, .info-card, .social-card, .faq-card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
    observer.observe(card);
  });
}

/* ============================================
   FORM FIELD EFFECTS
   Enhanced input interactions
   ============================================ */
function initFormFieldEffects() {
  const inputs = document.querySelectorAll('.form-input, .form-textarea');
  
  inputs.forEach(input => {
    // Add focus effect
    input.addEventListener('focus', () => {
      input.parentElement.style.transform = 'scale(1.01)';
    });
    
    // Remove focus effect
    input.addEventListener('blur', () => {
      input.parentElement.style.transform = '';
    });
    
    // Add floating label effect
    if (input.value) {
      input.classList.add('has-value');
    }
    
    input.addEventListener('input', () => {
      if (input.value) {
        input.classList.add('has-value');
      } else {
        input.classList.remove('has-value');
      }
    });
  });
}

/* ============================================
   EXPORT FUNCTIONS
   For potential module usage
   ============================================ */
export {
  initParticleBackground,
  initContactForm,
  initFAQAccordion,
  validateEmail,
  showNotification
};