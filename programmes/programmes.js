/* ============================================
   SCRIPTYSPHERE PROGRAMMES JAVASCRIPT
   ============================================ */

// Programme Data
const programmes = [
  {
    id: 1,
    title: "Child Rights Campaign",
    category: "child",
    tags: ["advocacy", "awareness", "rights"],
    description: "Comprehensive awareness campaigns against child labor, child marriage, and abuse. Creating a safer environment for every child to thrive and grow.",
    duration: "Ongoing",
    participants: "500+",
    age: "8-14 years",
    badge: "Child Focus",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5"/>
      <path d="M2 12l10 5 10-5"/>
    </svg>`
  },
  {
    id: 2,
    title: "Child Education Support",
    category: "child",
    tags: ["education", "learning", "support"],
    description: "Providing educational resources, books, and digital learning tools to underprivileged children. Building the foundation for lifelong learning.",
    duration: "12 months",
    participants: "300+",
    age: "6-16 years",
    badge: "Child Focus",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>`
  },
  {
    id: 3,
    title: "Child Health & Mental Care",
    category: "child",
    tags: ["health", "mental-health", "wellbeing"],
    description: "Mental health support and counseling services for children. Creating a safe space for emotional growth and psychological wellbeing.",
    duration: "Ongoing",
    participants: "200+",
    age: "8-16 years",
    badge: "Child Focus",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>`
  },
  {
    id: 4,
    title: "Child Safe Internet Program",
    category: "child",
    tags: ["technology", "safety", "digital"],
    description: "Teaching children about online safety, digital citizenship, and responsible internet usage. Protecting young minds in the digital age.",
    duration: "6 months",
    participants: "400+",
    age: "10-16 years",
    badge: "Child Focus",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>`
  },
  {
    id: 5,
    title: "Child Creativity Hub",
    category: "creative",
    tags: ["creative", "arts", "expression"],
    description: "Fostering creativity through storytelling, debates, arts, and creative workshops. Nurturing young talents and innovative thinking.",
    duration: "Ongoing",
    participants: "350+",
    age: "7-14 years",
    badge: "Creative",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>`
  },
  {
    id: 6,
    title: "Skill Development Programs",
    category: "youth",
    tags: ["technology", "skills", "training"],
    description: "Comprehensive training in coding, graphic design, digital marketing, and entrepreneurship. Preparing youth for the digital economy.",
    duration: "3-6 months",
    participants: "250+",
    age: "16-25 years",
    badge: "Youth Focus",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>`
  },
  {
    id: 7,
    title: "Youth Cyber Forum",
    category: "youth",
    tags: ["technology", "safety", "community"],
    description: "Addressing online safety, cyberbullying prevention, and digital ethics. Building a responsible digital community for the future.",
    duration: "Ongoing",
    participants: "180+",
    age: "15-24 years",
    badge: "Youth Focus",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"/>
      <path d="M2 12h20"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>`
  },
  {
    id: 8,
    title: "Research & Innovation Hub",
    category: "youth",
    tags: ["research", "innovation", "startup"],
    description: "Supporting youth research, innovative projects, and startup initiatives. Turning ideas into impactful solutions for Bangladesh.",
    duration: "12 months",
    participants: "150+",
    age: "18-28 years",
    badge: "Youth Focus",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>`
  },
  {
    id: 9,
    title: "Youth Media & Content Creation",
    category: "creative",
    tags: ["creative", "media", "content"],
    description: "Creating awareness and driving change through digital content creation, video production, and impactful social media campaigns.",
    duration: "Ongoing",
    participants: "200+",
    age: "16-26 years",
    badge: "Creative",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polygon points="23 7 16 12 23 17 23 7"/>
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
    </svg>`
  },
  {
    id: 10,
    title: "Youth Leadership Platform",
    category: "youth",
    tags: ["leadership", "development", "community"],
    description: "Developing leadership skills through debates, knowledge sharing, and community engagement. Building tomorrow's leaders today.",
    duration: "6 months",
    participants: "220+",
    age: "17-25 years",
    badge: "Youth Focus",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>`
  },
  {
    id: 11,
    title: "Gender Equality Campaign",
    category: "youth",
    tags: ["advocacy", "equality", "awareness"],
    description: "Engaging youth in fighting discrimination and sexual harassment. Creating a safe and equal society for all genders.",
    duration: "Ongoing",
    participants: "280+",
    age: "16-30 years",
    badge: "Youth Focus",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="8" r="7"/>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
    </svg>`
  },
  {
    id: 12,
    title: "Web Development Bootcamp",
    category: "tech",
    tags: ["technology", "coding", "web"],
    description: "Intensive training in HTML, CSS, JavaScript, and modern frameworks. Build real-world projects and launch your tech career.",
    duration: "4 months",
    participants: "120+",
    age: "16-28 years",
    badge: "Technology",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>`
  },
  {
    id: 13,
    title: "Mobile App Development",
    category: "tech",
    tags: ["technology", "mobile", "apps"],
    description: "Learn to build cross-platform mobile applications. From concept to deployment on app stores. Shape the mobile future.",
    duration: "5 months",
    participants: "90+",
    age: "18-30 years",
    badge: "Technology",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>`
  },
  {
    id: 14,
    title: "Data Science & AI Workshop",
    category: "tech",
    tags: ["technology", "ai", "data"],
    description: "Explore machine learning, data analysis, and artificial intelligence. Shape the future with data-driven solutions.",
    duration: "3 months",
    participants: "75+",
    age: "20-32 years",
    badge: "Technology",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
      <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>`
  },
  {
    id: 15,
    title: "Digital Art & Design",
    category: "creative",
    tags: ["creative", "design", "arts"],
    description: "Master graphic design, illustration, and digital art. Express yourself through visual creativity and modern design tools.",
    duration: "4 months",
    participants: "140+",
    age: "14-26 years",
    badge: "Creative",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <polyline points="21 15 16 10 5 21"/>
    </svg>`
  },
  {
    id: 16,
    title: "Creative Writing & Storytelling",
    category: "creative",
    tags: ["creative", "writing", "expression"],
    description: "Develop your voice through creative writing, storytelling, and content creation. Share stories that inspire and transform.",
    duration: "3 months",
    participants: "110+",
    age: "12-24 years",
    badge: "Creative",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 19l7-7 3 3-7 7-3-3z"/>
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
      <path d="M2 2l7.586 7.586"/>
      <circle cx="11" cy="11" r="2"/>
    </svg>`
  }
];

// State
let currentFilter = 'all';
let filteredData = [...programmes];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  initProgressBar();
  initAOS();
  initStats();
  initFilters();
  initSearch();
  initBackToTop();
  renderProgrammes();
}

// Progress Bar
function initProgressBar() {
  const progressBar = document.getElementById('progressBar');
  
  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = `${scrolled}%`;
  }, { passive: true });
}

// AOS Animation
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    });
  }
}

// Animated Stats Counter
function initStats() {
  const stats = document.querySelectorAll('.stat-number');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        animateCounter(entry.target);
        entry.target.classList.add('counted');
      }
    });
  }, { threshold: 0.5 });
  
  stats.forEach(stat => observer.observe(stat));
}

function animateCounter(element) {
  const target = parseInt(element.dataset.target);
  const duration = 2000;
  const step = Math.ceil(target / (duration / 16));
  let current = 0;
  
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = current.toLocaleString();
  }, 16);
}

// Filter Tabs
function initFilters() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active state
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Update filter
      currentFilter = tab.dataset.filter;
      filterAndRender();
    });
  });
}

// Search
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  let debounceTimer;
  
  searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      filterAndRender(e.target.value.toLowerCase());
    }, 300);
  });
}

// Filter and Render
function filterAndRender(searchTerm = '') {
  filteredData = programmes.filter(programme => {
    // Category filter
    const matchesCategory = currentFilter === 'all' || programme.category === currentFilter;
    
    // Search filter
    const matchesSearch = !searchTerm || 
      programme.title.toLowerCase().includes(searchTerm) ||
      programme.description.toLowerCase().includes(searchTerm) ||
      programme.tags.some(tag => tag.toLowerCase().includes(searchTerm));
    
    return matchesCategory && matchesSearch;
  });
  
  renderProgrammes();
}

// Render Programmes
function renderProgrammes() {
  const container = document.getElementById('programmesContainer');
  const emptyState = document.getElementById('emptyState');
  
  if (filteredData.length === 0) {
    container.innerHTML = '';
    emptyState.style.display = 'block';
    return;
  }
  
  emptyState.style.display = 'none';
  
  container.innerHTML = filteredData.map((programme, index) => `
    <div class="programme-card" data-aos="fade-up" data-aos-delay="${Math.min(index * 50, 300)}">
      <div class="card-header">
        <div class="card-badge">${programme.badge}</div>
        <div class="card-icon">
          ${programme.icon}
        </div>
      </div>
      
      <div class="card-body">
        <h3 class="card-title">${programme.title}</h3>
        <p class="card-description">${programme.description}</p>
        
        <div class="card-meta">
          <div class="meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            ${programme.duration}
          </div>
          <div class="meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            </svg>
            ${programme.participants}
          </div>
          <div class="meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            ${programme.age}
          </div>
        </div>
        
        <div class="card-tags">
          ${programme.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        
        <div class="card-actions">
          <button class="btn btn-primary btn-small" onclick="enrollProgramme(${programme.id})">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="8.5" cy="7" r="4"/>
              <line x1="20" y1="8" x2="20" y2="14"/>
              <line x1="23" y1="11" x2="17" y2="11"/>
            </svg>
            Enroll
          </button>
          <button class="btn btn-secondary btn-small" onclick="learnMore(${programme.id})">
            Learn More
          </button>
        </div>
      </div>
    </div>
  `).join('');
  
  // Refresh AOS
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
}

// Back to Top
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });
  
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Action Handlers
function enrollProgramme(id) {
  const programme = programmes.find(p => p.id === id);
  alert(`🎉 Successfully enrolled in "${programme.title}"!\n\nWe'll contact you soon with further details.\n\nEmail: ScriptySphere@gmail.com\nPhone: 01600-374396`);
}

function learnMore(id) {
  const programme = programmes.find(p => p.id === id);
  alert(`📚 ${programme.title}\n\n${programme.description}\n\n📅 Duration: ${programme.duration}\n👥 Participants: ${programme.participants}\n🎯 Age Group: ${programme.age}\n\nContact us to learn more:\nEmail: ScriptySphere@gmail.com\nPhone: 01600-374396`);
}

// Export for global access
window.enrollProgramme = enrollProgramme;
window.learnMore = learnMore;