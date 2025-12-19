/* ========================================
   ScriptySphere Members Directory - JavaScript
   Modern, Animated, Feature-Rich
   ======================================== */

// ========== STATE MANAGEMENT ==========
let allMembers = [];
let directors = [];
let pets = [];
let currentView = 'all';
let displayedMembers = 12;
let filteredMembers = [];

// ========== COUNTRY FLAGS ==========
const countryFlags = {
  'Bangladesh': '🇧🇩',
  'India': '🇮🇳',
  'Pakistan': '🇵🇰',
  'Nepal': '🇳🇵',
  'Sri Lanka': '🇱🇰',
  'Bhutan': '🇧🇹',
  'Maldives': '🇲🇻',
  'Afghanistan': '🇦🇫'
};

// ========== DIVISION DATA ==========
const divisionsData = {
  "Dhaka": { icon: "🏛️", color: "#0EA5E9" },
  "Chattogram": { icon: "🌊", color: "#06B6D4" },
  "Rajshahi": { icon: "🌾", color: "#10B981" },
  "Khulna": { icon: "🐅", color: "#F59E0B" },
  "Barishal": { icon: "⛵", color: "#8B5CF6" },
  "Sylhet": { icon: "☕", color: "#EC4899" },
  "Rangpur": { icon: "🌾", color: "#14B8A6" },
  "Mymensingh": { icon: "🎓", color: "#6366F1" }
};

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', async () => {
  await loadData();
  initScrollProgress();
  initCursorGlow();
  initParticleBackground();
  initAOS();
  initCountUp();
  initTabs();
  initSearch();
  initSort();
  initModal();
  loadAllMembers();
  checkUrlParams();
});

// ========== LOAD DATA ==========
async function loadData() {
  try {
    const [membersRes, directorsRes, petsRes] = await Promise.all([
      fetch('members.json'),
      fetch('directors.json'),
      fetch('pets.json')
    ]);
    
    allMembers = await membersRes.json();
    directors = await directorsRes.json();
    pets = await petsRes.json();
    
    filteredMembers = [...allMembers];
    
    // Populate country filter
    populateCountryFilter();
  } catch (error) {
    console.error('Error loading data:', error);
  }
}

// ========== POPULATE COUNTRY FILTER ==========
function populateCountryFilter() {
  const countryFilter = document.getElementById('countryFilter');
  const countries = [...new Set(allMembers.map(m => m.country))].sort();
  
  countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = `${countryFlags[country] || ''} ${country}`;
    countryFilter.appendChild(option);
  });
  
  countryFilter.addEventListener('change', (e) => {
    const country = e.target.value;
    if (country === 'all') {
      filteredMembers = [...allMembers];
    } else {
      filteredMembers = allMembers.filter(m => m.country === country);
    }
    displayedMembers = 12;
    loadAllMembers();
  });
}

// ========== SCROLL PROGRESS ==========
function initScrollProgress() {
  const progress = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / height) * 100;
    progress.style.width = `${scrolled}%`;
  }, { passive: true });
}

// ========== CURSOR GLOW ==========
function initCursorGlow() {
  const cursorGlow = document.getElementById('cursorGlow');
  document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
  }, { passive: true });
}

// ========== PARTICLE BACKGROUND ==========
function initParticleBackground() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const particles = [];
  for (let i = 0; i < 50; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5
    });
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
      
      p.x += p.dx;
      p.y += p.dy;
      
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });
    requestAnimationFrame(animate);
  }
  
  animate();
  
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// ========== AOS INITIALIZATION ==========
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }
}

// ========== COUNTUP ANIMATIONS ==========
function initCountUp() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        const target = entry.target;
        const endValue = parseInt(target.getAttribute('data-count'));
        animateCount(target, 0, endValue, 2000);
        target.classList.add('counted');
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => observer.observe(counter));
}

function animateCount(element, start, end, duration) {
  const increment = (end - start) / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= end) {
      element.textContent = end;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// ========== TAB FUNCTIONALITY ==========
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      
      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      
      switchView(category);
    });
  });
}

function switchView(view) {
  currentView = view;
  const sections = document.querySelectorAll('.content-section');
  
  sections.forEach(section => section.classList.remove('active'));
  
  switch(view) {
    case 'all':
      document.getElementById('allMembersSection').classList.add('active');
      loadAllMembers();
      break;
    case 'directors':
      document.getElementById('directorsSection').classList.add('active');
      loadDirectors();
      break;
    case 'countries':
      document.getElementById('countriesSection').classList.add('active');
      loadCountries();
      break;
    case 'divisions':
      document.getElementById('divisionsSection').classList.add('active');
      loadDivisions();
      break;
    case 'pets':
      document.getElementById('petsSection').classList.add('active');
      loadPets();
      break;
  }
  
  updatePageTitle();
}

// ========== SEARCH FUNCTIONALITY ==========
function initSearch() {
  const searchInput = document.getElementById('memberSearch');
  let debounceTimer;
  
  searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const query = e.target.value.toLowerCase().trim();
      filterMembers(query);
    }, 300);
  });
}

function filterMembers(query) {
  if (!query) {
    filteredMembers = [...allMembers];
  } else {
    filteredMembers = allMembers.filter(member => 
      member.name.toLowerCase().includes(query) ||
      member.role.toLowerCase().includes(query) ||
      (member.skills && member.skills.some(skill => skill.toLowerCase().includes(query))) ||
      member.country.toLowerCase().includes(query) ||
      (member.division && member.division.toLowerCase().includes(query)) ||
      (member.district && member.district.toLowerCase().includes(query))
    );
  }
  
  displayedMembers = 12;
  loadAllMembers();
}

// ========== SORT FUNCTIONALITY ==========
function initSort() {
  const sortSelect = document.getElementById('sortSelect');
  
  sortSelect.addEventListener('change', (e) => {
    const sortType = e.target.value;
    sortMembers(sortType);
  });
}

function sortMembers(type) {
  switch(type) {
    case 'name-asc':
      filteredMembers.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      filteredMembers.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'date-new':
      filteredMembers.sort((a, b) => b.joinYear - a.joinYear);
      break;
    case 'date-old':
      filteredMembers.sort((a, b) => a.joinYear - b.joinYear);
      break;
    case 'country':
      filteredMembers.sort((a, b) => a.country.localeCompare(b.country));
      break;
  }
  
  loadAllMembers();
}

// ========== LOAD ALL MEMBERS ==========
function loadAllMembers() {
  const grid = document.getElementById('membersGrid');
  const noResults = document.getElementById('noResults');
  const memberCount = document.getElementById('memberCount');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  const loadMoreWrapper = document.getElementById('loadMoreWrapper');
  
  grid.innerHTML = '';
  
  if (filteredMembers.length === 0) {
    noResults.style.display = 'block';
    loadMoreWrapper.style.display = 'none';
    memberCount.textContent = '0';
    return;
  }
  
  noResults.style.display = 'none';
  memberCount.textContent = filteredMembers.length;
  
  const membersToShow = filteredMembers.slice(0, displayedMembers);
  
  membersToShow.forEach((member, index) => {
    const card = createMemberCard(member, index);
    grid.appendChild(card);
  });
  
  if (displayedMembers < filteredMembers.length) {
    loadMoreWrapper.style.display = 'block';
  } else {
    loadMoreWrapper.style.display = 'none';
  }
  
  loadMoreBtn.onclick = () => {
    displayedMembers += 12;
    loadAllMembers();
  };
}

// ========== CREATE MEMBER CARD ==========
function createMemberCard(member, index) {
  const card = document.createElement('div');
  card.className = 'member-card';
  card.setAttribute('data-aos', 'fade-up');
  card.setAttribute('data-aos-delay', (index % 3) * 100);
  
  const skills = member.skills ? member.skills.slice(0, 3).map(skill => 
    `<span class="skill-tag">${skill}</span>`
  ).join('') : '';
  
  card.innerHTML = `
    <div class="member-card-header">
    <div class="director-badge">${member.membershipId}</div>
      <div class="member-flag">${countryFlags[member.country] || '🌍'}</div>
      <div class="member-avatar-wrapper">
        <img 
          src="${member.photo}" 
          alt="${member.name} - ${member.role} at ScriptySphere" 
          class="member-avatar"
          loading="lazy"
        >
      </div>
    </div>
    <div class="member-card-body">
      <h3 class="member-name">${member.name}</h3>
      <p class="member-role">${member.role}</p>
      <div class="member-location">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        <span>${member.district || member.city}, ${member.country}</span>
      </div>
      ${skills ? `<div class="member-skills">${skills}</div>` : ''}
      <div class="member-actions">
        <button class="btn-action" onclick="openMemberModal('${member.membershipId}')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 16v-4M12 8h.01"/>
          </svg>
          View Profile
        </button>
        <button class="btn-action btn-share" onclick="shareMember('${member.membershipId}')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="18" cy="5" r="3"/>
            <circle cx="6" cy="12" r="3"/>
            <circle cx="18" cy="19" r="3"/>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
          </svg>
        </button>
      </div>
    </div>
  `;
  
  return card;
}

// ========== LOAD DIRECTORS ==========
function loadDirectors() {
  const grid = document.getElementById('directorsGrid');
  grid.innerHTML = '';
  
  directors.forEach((director, index) => {
    const card = document.createElement('div');
    card.className = 'director-card member-card';
    card.setAttribute('data-aos', 'zoom-in');
    card.setAttribute('data-aos-delay', index * 100);
    
    const skills = director.skills ? director.skills.slice(0, 3).map(skill => 
      `<span class="skill-tag">${skill}</span>`
    ).join('') : '';
    
    card.innerHTML = `
      <div class="director-card-header member-card-header">
        <div class="director-badge">DIRECTOR</div>
        <div class="member-flag">${countryFlags[director.country] || '🌍'}</div>
        <div class="member-avatar-wrapper">
          <img 
            src="${director.photo}" 
            alt="${director.name} - ${director.role}" 
            class="member-avatar"
            loading="lazy"
          >
        </div>
      </div>
      <div class="member-card-body">
        <h3 class="member-name">${director.name}</h3>
        <p class="member-role">${director.role}</p>
        <div class="member-location">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>${director.country}</span>
        </div>
        ${skills ? `<div class="member-skills">${skills}</div>` : ''}
        <div class="member-actions">
          <button class="btn-action" onclick="openMemberModal('${director.membershipId}', true)">
            View Profile
          </button>
          <button class="btn-action btn-share" onclick="shareMember('${director.membershipId}')">
            Share
          </button>
        </div>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

// ========== LOAD COUNTRIES ==========
function loadCountries() {
  const grid = document.getElementById('countriesGrid');
  grid.innerHTML = '';
  
  const countries = {};
  allMembers.forEach(member => {
    if (!countries[member.country]) {
      countries[member.country] = 0;
    }
    countries[member.country]++;
  });
  
  // Add all countries even if no members
  Object.values(countryFlags).forEach((flag, index) => {
    const countryName = Object.keys(countryFlags)[index];
    if (!countries[countryName]) {
      countries[countryName] = 0;
    }
  });
  
  Object.keys(countries).sort().forEach((country, index) => {
    const card = document.createElement('div');
    card.className = 'country-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', index * 50);
    
    card.innerHTML = `
      <div class="country-icon">${countryFlags[country] || '🌍'}</div>
      <h3 class="country-name">${country}</h3>
      <div class="country-stats">
        <span class="stat-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
          </svg>
          ${countries[country]} Members
        </span>
      </div>
    `;
    
    card.onclick = () => showCountryMembers(country);
    
    grid.appendChild(card);
  });
}

function showCountryMembers(country) {
  const members = allMembers.filter(m => m.country === country);
  
  const grid = document.getElementById('countriesGrid');
  grid.innerHTML = '';
  
  // Back button
  const backBtn = document.createElement('button');
  backBtn.className = 'back-btn';
  backBtn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M19 12H5M12 19l-7-7 7-7"/>
    </svg>
    Back to Countries
  `;
  backBtn.onclick = loadCountries;
  grid.appendChild(backBtn);
  
  // Title
  const title = document.createElement('h2');
  title.style.cssText = 'color: white; text-align: center; margin: 2rem 0; font-size: 2rem;';
  title.textContent = `${countryFlags[country] || '🌍'} ${country}`;
  grid.appendChild(title);
  
  if (members.length === 0) {
    // Empty state
    const emptyState = document.createElement('div');
    emptyState.className = 'empty-state';
    emptyState.innerHTML = `
      <div class="empty-icon">🌟</div>
      <h3>Be the First Member!</h3>
      <p>No members from ${country} yet. Join ScriptySphere and represent your country!</p>
      <a href="https://scriptysphere.org/join" class="btn-join">
        <span>Join ScriptySphere</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    `;
    grid.appendChild(emptyState);
  } else {
    // Members grid
    const membersContainer = document.createElement('div');
    membersContainer.className = 'members-grid';
    membersContainer.style.gridColumn = '1 / -1';
    
    members.forEach((member, index) => {
      const card = createMemberCard(member, index);
      membersContainer.appendChild(card);
    });
    
    grid.appendChild(membersContainer);
  }
}

// ========== LOAD DIVISIONS ==========
function loadDivisions() {
  const grid = document.getElementById('divisionsGrid');
  grid.innerHTML = '';
  
  Object.keys(divisionsData).forEach((division, index) => {
    const memberCount = allMembers.filter(m => m.division === division).length;
    
    const card = document.createElement('div');
    card.className = 'division-card';
    card.setAttribute('data-aos', 'zoom-in');
    card.setAttribute('data-aos-delay', index * 50);
    
    card.innerHTML = `
      <div class="division-icon">${divisionsData[division].icon}</div>
      <h3 class="division-name">${division}</h3>
      <div class="division-stats">
        <span class="stat-badge">
          ${memberCount} Members
        </span>
      </div>
    `;
    
    card.onclick = () => showDivisionMembers(division);
    
    grid.appendChild(card);
  });
}

function showDivisionMembers(division) {
  const members = allMembers.filter(m => m.division === division);
  
  const grid = document.getElementById('divisionsGrid');
  grid.innerHTML = '';
  
  // Back button
  const backBtn = document.createElement('button');
  backBtn.className = 'back-btn';
  backBtn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M19 12H5M12 19l-7-7 7-7"/>
    </svg>
    Back to Divisions
  `;
  backBtn.onclick = loadDivisions;
  grid.appendChild(backBtn);
  
  // Title
  const title = document.createElement('h2');
  title.style.cssText = 'color: white; text-align: center; margin: 2rem 0; font-size: 2rem;';
  title.textContent = `${divisionsData[division].icon} ${division} Division`;
  grid.appendChild(title);
  
  if (members.length === 0) {
    // Empty state
    const emptyState = document.createElement('div');
    emptyState.className = 'empty-state';
    emptyState.innerHTML = `
      <div class="empty-icon">🌟</div>
      <h3>Be the First Member!</h3>
      <p>No members from ${division} division yet. Join ScriptySphere and represent your division!</p>
      <a href="https://scriptysphere.org/join" class="btn-join">
        <span>Join ScriptySphere</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    `;
    grid.appendChild(emptyState);
  } else {
    // Members grid
    const membersContainer = document.createElement('div');
    membersContainer.className = 'members-grid';
    membersContainer.style.gridColumn = '1 / -1';
    
    members.forEach((member, index) => {
      const card = createMemberCard(member, index);
      membersContainer.appendChild(card);
    });
    
    grid.appendChild(membersContainer);
  }
}

// ========== LOAD PETS ==========
function loadPets() {
  const grid = document.getElementById('petsGrid');
  grid.innerHTML = '';
  
  pets.forEach((pet, index) => {
    const card = document.createElement('div');
    card.className = 'pet-card member-card';
    card.setAttribute('data-aos', 'flip-left');
    card.setAttribute('data-aos-delay', index * 100);
    
    // Create skills HTML (limit to 3 for pets)
    const skills = pet.skills ? pet.skills.slice(0, 3).map(skill => 
      `<span class="skill-tag">${skill}</span>`
    ).join('') : '';
    
    card.innerHTML = `
      <div class="pet-card-header member-card-header">
        <div class="pet-badge">🐾 HONORARY MEMBER</div>
        <div class="pet-avatar-wrapper member-avatar-wrapper">
          <img 
            src="${pet.photo}" 
            alt="${pet.name} - ${pet.role}" 
            class="pet-avatar member-avatar"
            loading="lazy"
          >
        </div>
      </div>
      <div class="pet-card-body member-card-body">
        <h3 class="pet-name member-name">${pet.name}</h3>
        <p class="pet-role member-role">${pet.role}</p>
        <div class="member-location">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="10" r="3"/>
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/>
          </svg>
          <span>${pet.species} • ${pet.country}</span>
        </div>
        ${skills ? `<div class="member-skills">${skills}</div>` : ''}
        <div class="member-actions pet-actions">
          <button class="btn-action" onclick="openMemberModal('${pet.membershipId}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16v-4M12 8h.01"/>
            </svg>
            View Profile
          </button>
          <button class="btn-action btn-share" onclick="shareMember('${pet.membershipId}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="18" cy="5" r="3"/>
              <circle cx="6" cy="12" r="3"/>
              <circle cx="18" cy="19" r="3"/>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
            </svg>
          </button>
        </div>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

// ========== MODAL FUNCTIONALITY ==========
function initModal() {
  const modal = document.getElementById('memberModal');
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');
  
  closeBtn.onclick = closeModal;
  overlay.onclick = closeModal;
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

window.openMemberModal = function(membershipId, isDirector = false) {
  const member = isDirector ? 
    directors.find(d => d.membershipId === membershipId) :
    allMembers.find(m => m.membershipId === membershipId) || 
    pets.find(p => p.membershipId === membershipId);
  
  if (!member) return;
  
  const modal = document.getElementById('memberModal');
  const modalBody = document.getElementById('modalBody');
  
  const skills = member.skills ? member.skills.map(skill => 
    `<span class="skill-tag">${skill}</span>`
  ).join('') : '';
  
  // Check if it's a pet
  const isPet = member.species;
  
  // Format expiry date if exists
  const expiryDate = member.expiryDate ? new Date(member.expiryDate).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }) : 'Lifetime';
  
  modalBody.innerHTML = `
    <div class="modal-header" style="text-align: center; margin-bottom: 2rem;">
      <div style="position: relative; display: inline-block;">
        <img 
          src="${member.photo}" 
          alt="${member.name}" 
          style="width: 180px; height: 180px; border-radius: 50%; border: 6px solid var(--primary); margin-bottom: 1rem; object-fit: cover; box-shadow: 0 10px 30px rgba(0,0,0,0.2);"
        >
        ${member.bloodGroup ? `
          <div style="position: absolute; bottom: 1rem; right: -10px; background: var(--gradient-1); color: white; padding: 0.5rem 1rem; border-radius: 50px; font-weight: 700; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
            ${member.bloodGroup}
          </div>
        ` : ''}
      </div>
      <h2 style="font-size: 2rem; margin-bottom: 0.5rem; color: var(--gray-900);">${member.name}</h2>
      <p style="color: var(--primary); font-weight: 600; font-size: 1.25rem; margin-bottom: 0.5rem;">${member.role}</p>
      <p style="color: var(--gray-600); font-size: 1rem;">
        ${countryFlags[member.country] || (isPet ? '🐾' : '🌍')} 
        ${isPet ? member.species : `${member.district || member.city || ''}, ${member.country}`}
      </p>
    </div>
    
    ${member.quote ? `
      <div style="background: linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%); padding: 1.5rem; border-radius: var(--radius-xl); margin-bottom: 2rem; border-left: 4px solid var(--primary);">
        <svg style="width: 24px; height: 24px; color: var(--primary); margin-bottom: 0.5rem;" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
        </svg>
        <p style="font-style: italic; color: var(--gray-700); line-height: 1.8; font-size: 1.125rem;">
          "${member.quote}"
        </p>
      </div>
    ` : ''}
    
    <div style="display: grid; gap: 1rem; margin-bottom: 2rem;">
      <div class="info-card">
        <div class="info-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          </svg>
        </div>
        <div>
          <strong style="display: block; color: var(--gray-600); font-size: 0.875rem; margin-bottom: 0.25rem;">Membership ID</strong>
          <span style="font-size: 1rem; color: var(--gray-900); font-weight: 600; font-family: monospace;">${member.membershipId}</span>
        </div>
      </div>
      
      <div class="info-card">
        <div class="info-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        </div>
        <div>
          <strong style="display: block; color: var(--gray-600); font-size: 0.875rem; margin-bottom: 0.25rem;">Joined</strong>
          <span style="font-size: 1rem; color: var(--gray-900); font-weight: 600;">${member.joinYear} - ${expiryDate}</span>
        </div>
      </div>
      
      ${member.email ? `
        <div class="info-card">
          <div class="info-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </div>
          <div>
            <strong style="display: block; color: var(--gray-600); font-size: 0.875rem; margin-bottom: 0.25rem;">Email</strong>
            <a href="mailto:${member.email}" style="font-size: 1rem; color: var(--primary); font-weight: 600; text-decoration: none;">${member.email}</a>
          </div>
        </div>
      ` : ''}
      
      ${member.phone ? `
        <div class="info-card">
          <div class="info-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </div>
          <div>
            <strong style="display: block; color: var(--gray-600); font-size: 0.875rem; margin-bottom: 0.25rem;">Phone</strong>
            <a href="tel:${member.phone}" style="font-size: 1rem; color: var(--primary); font-weight: 600; text-decoration: none;">${member.phone}</a>
          </div>
        </div>
      ` : ''}
    </div>
    
    ${skills ? `
      <div style="margin-bottom: 2rem;">
        <strong style="display: block; margin-bottom: 1rem; color: var(--gray-900); font-size: 1.125rem;">
          <svg style="width: 20px; height: 20px; display: inline-block; vertical-align: middle; margin-right: 0.5rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 20v-6M6 20V10M18 20V4"/>
          </svg>
          Skills & Interests
        </strong>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${skills}
        </div>
      </div>
    ` : ''}
    
    ${member.bio ? `
      <div style="margin-bottom: 2rem; padding: 1.5rem; background: var(--gray-50); border-radius: var(--radius-lg);">
        <strong style="display: block; margin-bottom: 0.75rem; color: var(--gray-900); font-size: 1.125rem;">
          <svg style="width: 20px; height: 20px; display: inline-block; vertical-align: middle; margin-right: 0.5rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
          </svg>
          About
        </strong>
        <p style="color: var(--gray-700); line-height: 1.8;">${member.bio}</p>
      </div>
    ` : ''}
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
      <button class="btn-action" onclick="shareMember('${member.membershipId}')" style="width: 100%;">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="18" cy="5" r="3"/>
          <circle cx="6" cy="12" r="3"/>
          <circle cx="18" cy="19" r="3"/>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
        </svg>
        Share Profile
      </button>
      ${member.email ? `
        <a href="mailto:${member.email}" class="btn-action" style="width: 100%; text-decoration: none;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          Contact
        </a>
      ` : `
        <button class="btn-action" onclick="closeModal()" style="width: 100%; background: var(--gray-200); color: var(--gray-700);">
          Close
        </button>
      `}
    </div>
  `;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  updateMetaTags(member);
};

function closeModal() {
  const modal = document.getElementById('memberModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
  updatePageTitle();
}

// ========== SHARE MEMBER ==========
window.shareMember = function(membershipId) {
  const baseUrl = window.location.origin + window.location.pathname;
  const shareUrl = `${baseUrl}?id=${membershipId}`;
  
  if (navigator.share) {
    navigator.share({
      title: 'ScriptySphere Member Profile',
      url: shareUrl
    }).catch(() => {});
  } else {
    copyToClipboard(shareUrl);
  }
};

function copyToClipboard(text) {
  const input = document.createElement('input');
  input.value = text;
  document.body.appendChild(input);
  input.select();
  
  try {
    document.execCommand('copy');
    showToast();
  } catch (err) {
    console.error('Failed to copy:', err);
  }
  
  document.body.removeChild(input);
}

function showToast() {
  const toast = document.getElementById('shareToast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ========== CHECK URL PARAMS ==========
function checkUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const memberId = params.get('id');
  
  if (memberId) {
    setTimeout(() => {
      openMemberModal(memberId);
    }, 500);
  }
}

// ========== UPDATE META TAGS ==========
function updateMetaTags(member) {
  document.title = `${member.name} - ${member.role} | ScriptySphere`;
  
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', `${member.name} is a ${member.role} at ScriptySphere from ${member.country}.`);
  }
  
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', `${member.name} - ${member.role} | ScriptySphere`);
  }
  
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) {
    ogDesc.setAttribute('content', `Meet ${member.name}, ${member.role} from ${member.country}`);
  }
}

function updatePageTitle() {
  document.title = 'Global Members Directory | ScriptySphere - 500+ Youth Innovators Worldwide';
}

// ========== EXPORT FOR GLOBAL ACCESS ==========
window.openMemberModal = openMemberModal;
window.shareMember = shareMember;
