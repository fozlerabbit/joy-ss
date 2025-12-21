/* ===================================
   Redirect.js - Advanced URL Shortener
   =================================== */

// Configuration
const CONFIG = {
  redirectDelay: 3000, // 3 seconds
  countdownInterval: 1000, // 1 second
  progressUpdateInterval: 50, // 50ms for smooth animation
  targetUrl: 'https://forms.gle/fDU3ZNCQCSWK8Ym48',
  
  // Analytics (optional)
  enableAnalytics: false,
  analyticsEndpoint: '/api/analytics/redirect'
};

// State
const state = {
  countdown: Math.floor(CONFIG.redirectDelay / 1000),
  progress: 0,
  isRedirecting: false,
  startTime: Date.now()
};

// DOM Elements
const elements = {
  statusTitle: document.getElementById('statusTitle'),
  statusMessage: document.getElementById('statusMessage'),
  countdown: document.getElementById('countdown'),
  progressFill: document.getElementById('progressFill'),
  destinationUrl: document.getElementById('destinationUrl'),
  particleCanvas: document.getElementById('particleCanvas')
};

/* ===================================
   Initialization
   =================================== */
document.addEventListener('DOMContentLoaded', () => {
  init();
});

function init() {
  // Set destination URL
  setDestinationUrl();
  
  // Initialize particle background
  initParticleBackground();
  
  // Start countdown
  startCountdown();
  
  // Start progress animation
  startProgress();
  
  // Schedule redirect
  scheduleRedirect();
  
  // Track analytics (if enabled)
  if (CONFIG.enableAnalytics) {
    trackRedirect();
  }
  
  // Add keyboard shortcuts
  initKeyboardShortcuts();
  
  // Handle visibility changes
  handleVisibilityChange();
}

/* ===================================
   Destination URL Handling
   =================================== */
function setDestinationUrl() {
  // Try to get URL from query parameter first
  const urlParams = new URLSearchParams(window.location.search);
  const redirectUrl = urlParams.get('url') || urlParams.get('to') || CONFIG.targetUrl;
  
  // Validate URL
  if (isValidUrl(redirectUrl)) {
    CONFIG.targetUrl = redirectUrl;
    elements.destinationUrl.href = redirectUrl;
    elements.destinationUrl.textContent = truncateUrl(redirectUrl, 50);
  } else {
    console.error('Invalid redirect URL');
    showError('Invalid redirect URL');
  }
}

function isValidUrl(string) {
  try {
    const url = new URL(string);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (_) {
    return false;
  }
}

function truncateUrl(url, maxLength) {
  if (url.length <= maxLength) return url;
  
  try {
    const urlObj = new URL(url);
    const domain = urlObj.hostname;
    const path = urlObj.pathname + urlObj.search;
    
    if (domain.length + 10 >= maxLength) {
      return domain.substring(0, maxLength - 3) + '...';
    }
    
    const remainingLength = maxLength - domain.length - 3;
    return domain + path.substring(0, remainingLength) + '...';
  } catch (_) {
    return url.substring(0, maxLength - 3) + '...';
  }
}

/* ===================================
   Countdown Logic
   =================================== */
function startCountdown() {
  updateCountdownDisplay();
  
  const countdownTimer = setInterval(() => {
    state.countdown--;
    updateCountdownDisplay();
    
    if (state.countdown <= 0) {
      clearInterval(countdownTimer);
    }
  }, CONFIG.countdownInterval);
}

function updateCountdownDisplay() {
  if (elements.countdown) {
    elements.countdown.textContent = state.countdown;
  }
}

/* ===================================
   Progress Bar Animation
   =================================== */
function startProgress() {
  const totalSteps = CONFIG.redirectDelay / CONFIG.progressUpdateInterval;
  let currentStep = 0;
  
  const progressTimer = setInterval(() => {
    currentStep++;
    state.progress = (currentStep / totalSteps) * 100;
    
    if (elements.progressFill) {
      elements.progressFill.style.width = `${state.progress}%`;
    }
    
    if (currentStep >= totalSteps) {
      clearInterval(progressTimer);
      state.progress = 100;
      if (elements.progressFill) {
        elements.progressFill.style.width = '100%';
      }
    }
  }, CONFIG.progressUpdateInterval);
}

/* ===================================
   Redirect Execution
   =================================== */
function scheduleRedirect() {
  setTimeout(() => {
    performRedirect();
  }, CONFIG.redirectDelay);
}

function performRedirect() {
  if (state.isRedirecting) return;
  
  state.isRedirecting = true;
  
  // Update UI
  if (elements.statusTitle) {
    elements.statusTitle.textContent = 'Redirecting Now...';
  }
  if (elements.statusMessage) {
    elements.statusMessage.textContent = 'Taking you to your destination';
  }
  
  // Perform redirect with fallback
  try {
    // Try window.location.replace (doesn't add to history)
    window.location.replace(CONFIG.targetUrl);
    
    // Fallback after 500ms
    setTimeout(() => {
      window.location.href = CONFIG.targetUrl;
    }, 500);
  } catch (error) {
    console.error('Redirect error:', error);
    showError('Redirect failed. Please click the link below.');
  }
}

/* ===================================
   Particle Background Animation
   =================================== */
function initParticleBackground() {
  const canvas = elements.particleCanvas;
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;
  
  // Set canvas size
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // Particle class
  class Particle {
    constructor() {
      this.reset();
    }
    
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.radius = Math.random() * 2 + 0.5;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.opacity = Math.random() * 0.5 + 0.2;
      this.color = this.getColor();
    }
    
    getColor() {
      const colors = [
        'rgba(14, 165, 233, ',   // Primary
        'rgba(6, 182, 212, ',     // Secondary
        'rgba(139, 92, 246, ',    // Accent
        'rgba(16, 185, 129, '     // Success
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }
    
    update() {
      this.x += this.vx;
      this.y += this.vy;
      
      // Wrap around edges
      if (this.x < 0) this.x = canvas.width;
      if (this.x > canvas.width) this.x = 0;
      if (this.y < 0) this.y = canvas.height;
      if (this.y > canvas.height) this.y = 0;
    }
    
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color + this.opacity + ')';
      ctx.fill();
    }
  }
  
  // Create particles
  const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 100);
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
  
  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });
    
    // Draw connections
    drawConnections();
    
    animationId = requestAnimationFrame(animate);
  }
  
  // Draw connections between nearby particles
  function drawConnections() {
    const maxDistance = 120;
    
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * 0.15;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(14, 165, 233, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }
  
  // Start animation
  animate();
  
  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
  });
}

/* ===================================
   Keyboard Shortcuts
   =================================== */
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Press Space or Enter to redirect immediately
    if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault();
      performRedirect();
    }
    
    // Press Escape to cancel redirect (open link in new tab)
    if (e.code === 'Escape') {
      e.preventDefault();
      window.open(CONFIG.targetUrl, '_blank');
    }
  });
}

/* ===================================
   Visibility Change Handling
   =================================== */
function handleVisibilityChange() {
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      // Pause animations when tab is not visible
      console.log('Tab hidden - animations paused');
    } else {
      // Resume animations when tab is visible
      console.log('Tab visible - animations resumed');
    }
  });
}

/* ===================================
   Analytics (Optional)
   =================================== */
function trackRedirect() {
  const data = {
    url: CONFIG.targetUrl,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    referrer: document.referrer,
    screenSize: `${window.screen.width}x${window.screen.height}`,
    language: navigator.language
  };
  
  // Send analytics data
  fetch(CONFIG.analyticsEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).catch(error => {
    console.error('Analytics error:', error);
  });
}

/* ===================================
   Error Handling
   =================================== */
function showError(message) {
  if (elements.statusTitle) {
    elements.statusTitle.textContent = 'Error';
    elements.statusTitle.style.color = '#EF4444';
  }
  
  if (elements.statusMessage) {
    elements.statusMessage.textContent = message;
  }
  
  // Make destination URL more prominent
  if (elements.destinationUrl) {
    elements.destinationUrl.style.fontSize = '1.125rem';
    elements.destinationUrl.style.fontWeight = '600';
  }
}

/* ===================================
   Utility Functions
   =================================== */

// Get redirect duration for display
function getRedirectDuration() {
  return Math.floor((Date.now() - state.startTime) / 1000);
}

// Check if device is mobile
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Log redirect info (for debugging)
function logRedirectInfo() {
  console.log('Redirect Info:', {
    targetUrl: CONFIG.targetUrl,
    countdown: state.countdown,
    progress: state.progress,
    duration: getRedirectDuration(),
    isMobile: isMobile()
  });
}

/* ===================================
   Export for testing (if needed)
   =================================== */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    init,
    performRedirect,
    isValidUrl,
    truncateUrl
  };
}