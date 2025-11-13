/* ============================================
   SCRIPTYSPHERE BLOG - COMPLETE JAVASCRIPT
   Interactive, Dynamic, Fully Functional
   ============================================ */

// ==================== BLOG DATA ====================
const blogPosts = [
  // Education Category
  {
    id: 1,
    title: "Transforming Education Through Digital Innovation",
    excerpt: "Discover how ScriptySphere is revolutionizing education for children and youth across Bangladesh with cutting-edge digital tools and innovative teaching methods.",
    category: "education",
    date: "2025-11-08",
    readTime: "5 min read",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%230EA5E9;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2306B6D4;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23grad1)'/%3E%3Ctext x='400' y='300' font-family='Arial' font-size='48' fill='white' text-anchor='middle'%3EEducation%3C/text%3E%3C/svg%3E",
    featured: true
  },
  {
    id: 2,
    title: "Building Tomorrow's Leaders: Youth Leadership Program",
    excerpt: "Our comprehensive leadership development program is equipping young minds with the skills they need to lead Bangladesh into a brighter future.",
    category: "education",
    date: "2025-11-05",
    readTime: "4 min read",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%238B5CF6;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2306B6D4;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23grad2)'/%3E%3Ctext x='400' y='300' font-family='Arial' font-size='48' fill='white' text-anchor='middle'%3ELeadership%3C/text%3E%3C/svg%3E"
  },
  {
    id: 3,
    title: "Child Education Support: Creating Equal Opportunities",
    excerpt: "Learn about our initiatives providing educational resources, books, and digital learning tools to underprivileged children across the nation.",
    category: "education",
    date: "2025-11-01",
    readTime: "6 min read",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='grad3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2310B981;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%230EA5E9;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23grad3)'/%3E%3Ctext x='400' y='300' font-family='Arial' font-size='48' fill='white' text-anchor='middle'%3ESupport%3C/text%3E%3C/svg%3E"
  },
  
  // Technology Category
  {
    id: 4,
    title: "Coding for Kids: Preparing the Next Generation",
    excerpt: "Our coding bootcamp is introducing children to programming languages and computational thinking, preparing them for a digital future.",
    category: "technology",
    date: "2025-10-28",
    readTime: "7 min read",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='grad4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2306B6D4;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%238B5CF6;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23grad4)'/%3E%3Ctext x='400' y='300' font-family='Arial' font-size='48' fill='white' text-anchor='middle'%3ECoding%3C/text%3E%3C/svg%3E"
  },
  {
    id: 5,
    title: "AI & Machine Learning Workshop Success Story",
    excerpt: "Highlights from our recent AI workshop where youth learned about artificial intelligence and its applications in solving real-world problems.",
    category: "technology",
    date: "2025-10-25",
    readTime: "5 min read",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='grad5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23F59E0B;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23EF4444;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23grad5)'/%3E%3Ctext x='400' y='300' font-family='Arial' font-size='48' fill='white' text-anchor='middle'%3EAI Workshop%3C/text%3E%3C/svg%3E"
  },
  {
    id: 6,
    title: "Web Development: From Beginner to Builder",
    excerpt: "Success stories from our web development bootcamp where students built their first websites and launched their tech careers.",
    category: "technology",
    date: "2025-10-20",
    readTime: "6 min read",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='grad6' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%230EA5E9;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2310B981;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23grad6)'/%3E%3Ctext x='400' y='300' font-family='Arial' font-size='48' fill='white' text-anchor='middle'%3EWeb Dev%3C/text%3E%3C/svg%3E"
  },
  
  // Community Category
  {
    id: 7,
    title: "Community Impact: 300 Members Strong",
    excerpt: "Celebrating our growing community of passionate young individuals working together to create positive change in Bangladesh.",
    category: "community",
    date: "2025-10-15",
    readTime: "4 min read",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='grad7' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%238B5CF6;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23EC4899;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23grad7)'/%3E%3Ctext x='400' y='300' font-family='Arial' font-size='48' fill='white' text-anchor='middle'%3ECommunity%3C/text%3E%3C/svg%3E"
  },
  {
    id: 8,
    title: "Youth Voices: Stories of Transformation",
    excerpt: "Real stories from our members about how ScriptySphere changed their lives and helped them discover their potential.",
    category: "community",
    date: "2025-10-10",
    readTime: "8 min read",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='grad8' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2306B6D4;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%230EA5E9;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23grad8)'/%3E%3Ctext x='400' y='300' font-family='Arial' font-size='48' fill='white' text-anchor='middle'%3EStories%3C/text%3E%3C/svg%3E"
  },
  {
    id: 9,
    title: "Gender Equality: Building an Inclusive Future",
    excerpt: "Our initiatives promoting gender equality and fighting discrimination to create a safe and equal society for all.",
    category: "community",
    date: "2025-10-05",
    readTime: "5 min read",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='grad9' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2310B981;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2306B6D4;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23grad9)'/%3E%3Ctext x='400' y='300' font-family='Arial' font-size='48' fill='white' text-anchor='middle'%3EEquality%3C/text%3E%3C/svg%3E"
  },
  
  // Events Category
  {
    id: 10,
    title: "National Youth Tech Festival 2025",
    excerpt: "Join us for the biggest youth technology festival in Bangladesh featuring workshops, competitions, and networking opportunities.",
    category: "events",
    date: "2025-12-01",
    readTime: "3 min read",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='grad10' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23F59E0B;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2306B6D4;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23grad10)'/%3E%3Ctext x='400' y='300' font-family='Arial' font-size='48' fill='white' text-anchor='middle'%3EFestival%3C/text%3E%3C/svg%3E"
  },
  {
    id: 11,
    title: "Workshop Series: Digital Skills for the Future",
    excerpt: "Announcing our new series of hands-on workshops covering essential digital skills for youth and children.",
    category: "events",
    date: "2025-11-15",
    readTime: "4 min read",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='grad11' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%238B5CF6;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%230EA5E9;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23grad11)'/%3E%3Ctext x='400' y='300' font-family='Arial' font-size='48' fill='white' text-anchor='middle'%3EWorkshop%3C/text%3E%3C/svg%3E"
  },
  {
    id: 12,
    title: "Hackathon 2025: Code for Change",
    excerpt: "48-hour hackathon challenge where young developers create solutions for social problems in Bangladesh.",
    category: "events",
    date: "2025-11-20",
    readTime: "5 min read",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='grad12' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23EF4444;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%238B5CF6;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23grad12)'/%3E%3Ctext x='400' y='300' font-family='Arial' font-size='48' fill='white' text-anchor='middle'%3EHackathon%3C/text%3E%3C/svg%3E"
  }
];

// ==================== STATE MANAGEMENT ====================
let currentFilter = 'all';
let currentPage = 1;
const postsPerPage = 6;
let filteredPosts = [...blogPosts];

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

function initializeApp() {
  // Initialize all features
  initScrollProgress();
  initAOS();
  initSearch();
  initFilters();
  initBackToTop();
  initNewsletterForm();
  initCategoryCards();
  
  // Render content
  renderFeaturedPost();
  renderBlogPosts();
  updateCategoryCounts();
}

// ==================== SCROLL PROGRESS BAR ====================
function initScrollProgress() {
  const progressBar = document.getElementById('scrollProgress');
  
  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = `${scrolled}%`;
  }, { passive: true });
}

// ==================== AOS ANIMATION ====================
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
      delay: 100
    });
  }
}

// ==================== SEARCH FUNCTIONALITY ====================
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

function filterAndRender(searchTerm = '') {
  // Filter posts by category and search term
  filteredPosts = blogPosts.filter(post => {
    const matchesCategory = currentFilter === 'all' || post.category === currentFilter;
    const matchesSearch = !searchTerm || 
      post.title.toLowerCase().includes(searchTerm) ||
      post.excerpt.toLowerCase().includes(searchTerm) ||
      post.category.toLowerCase().includes(searchTerm);
    
    return matchesCategory && matchesSearch;
  });
  
  // Reset to page 1 when filtering
  currentPage = 1;
  renderBlogPosts();
}

// ==================== FILTER BUTTONS ====================
function initFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Update filter and render
      currentFilter = button.dataset.category;
      filterAndRender();
    });
  });
}

// ==================== RENDER FEATURED POST ====================
function renderFeaturedPost() {
  const featuredPost = blogPosts.find(post => post.featured);
  if (!featuredPost) return;
  
  const container = document.getElementById('featuredPost');
  
  container.innerHTML = `
    <div class="featured-image">
      <img src="${featuredPost.image}" alt="${featuredPost.title}">
      <div class="featured-badge">Featured</div>
    </div>
    <div class="featured-content">
      <span class="featured-category">${formatCategory(featuredPost.category)}</span>
      <h3 class="featured-title">${featuredPost.title}</h3>
      <p class="featured-excerpt">${featuredPost.excerpt}</p>
      <div class="featured-meta">
        <div class="meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          ${formatDate(featuredPost.date)}
        </div>
        <div class="meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          ${featuredPost.readTime}
        </div>
      </div>
      <button class="btn-read-more" onclick="readArticle(${featuredPost.id})">
        Read Full Article
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </button>
    </div>
  `;
}

// ==================== RENDER BLOG POSTS ====================
function renderBlogPosts() {
  const container = document.getElementById('blogGrid');
  const emptyState = document.getElementById('emptyState');
  const loadMoreContainer = document.getElementById('loadMoreContainer');
  
  // Show/hide empty state
  if (filteredPosts.length === 0) {
    container.innerHTML = '';
    emptyState.style.display = 'block';
    loadMoreContainer.style.display = 'none';
    return;
  }
  
  emptyState.style.display = 'none';
  
  // Calculate posts to show
  const postsToShow = filteredPosts.slice(0, currentPage * postsPerPage);
  const hasMore = postsToShow.length < filteredPosts.length;
  
  // Render posts
  container.innerHTML = postsToShow.map((post, index) => `
    <article class="blog-card" data-aos="fade-up" data-aos-delay="${Math.min(index * 50, 300)}" onclick="readArticle(${post.id})">
      <div class="blog-image">
        <img src="${post.image}" alt="${post.title}" loading="lazy">
        <span class="blog-category">${formatCategory(post.category)}</span>
      </div>
      <div class="blog-content">
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.excerpt}</p>
        <div class="blog-footer">
          <div class="blog-date">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            ${formatDate(post.date)}
          </div>
          <div class="blog-read-time">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            ${post.readTime}
          </div>
        </div>
      </div>
    </article>
  `).join('');
  
  // Show/hide load more button
  loadMoreContainer.style.display = hasMore ? 'block' : 'none';
  
  // Refresh AOS
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
}

// ==================== LOAD MORE FUNCTIONALITY ====================
document.addEventListener('DOMContentLoaded', () => {
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      currentPage++;
      renderBlogPosts();
      
      // Smooth scroll to new content
      setTimeout(() => {
        const lastCard = document.querySelector('.blog-card:nth-last-child(1)');
        if (lastCard) {
          lastCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    });
  }
});

// ==================== READ ARTICLE FUNCTION ====================
function readArticle(id) {
  const post = blogPosts.find(p => p.id === id);
  if (!post) return;
  
  // In a real application, this would navigate to the article page
  alert(`📖 Reading: "${post.title}"\n\nCategory: ${formatCategory(post.category)}\nDate: ${formatDate(post.date)}\n\nThis would open the full article page with complete content, images, and comments.`);
}

// Make readArticle available globally
window.readArticle = readArticle;

// ==================== BACK TO TOP BUTTON ====================
function initBackToTop() {
  const backToTop = document.getElementById('backToTop');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }, { passive: true });
  
  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ==================== NEWSLETTER FORM ====================
function initNewsletterForm() {
  const form = document.getElementById('newsletterForm');
  const emailInput = document.getElementById('emailInput');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    
    if (!email || !isValidEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    // Show success message
    alert(`🎉 Successfully subscribed!\n\nThank you for subscribing to ScriptySphere's newsletter. We'll send the latest updates to ${email}`);
    
    // Reset form
    emailInput.value = '';
    
    // In a real application, send email to server
    console.log('Subscription email:', email);
  });
}

// ==================== EMAIL VALIDATION ====================
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ==================== CATEGORY CARDS ====================
function initCategoryCards() {
  const categoryCards = document.querySelectorAll('.category-card');
  
  categoryCards.forEach(card => {
    card.addEventListener('click', () => {
      const category = card.dataset.category;
      
      // Update filter
      currentFilter = category;
      
      // Update active filter button
      const filterButtons = document.querySelectorAll('.filter-btn');
      filterButtons.forEach(btn => {
        if (btn.dataset.category === category) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
      
      // Filter and render
      filterAndRender();
      
      // Scroll to blog section
      const blogSection = document.querySelector('.blog-section');
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ==================== UPDATE CATEGORY COUNTS ====================
function updateCategoryCounts() {
  const categories = ['education', 'technology', 'community', 'events'];
  
  categories.forEach(category => {
    const count = blogPosts.filter(post => post.category === category).length;
    const countElements = document.querySelectorAll(`[data-category-count="${category}"]`);
    
    countElements.forEach(element => {
      element.textContent = `${count} Article${count !== 1 ? 's' : ''}`;
    });
  });
}

// ==================== UTILITY FUNCTIONS ====================

// Format category name
function formatCategory(category) {
  const categoryMap = {
    education: 'Education',
    technology: 'Technology',
    community: 'Community',
    events: 'Events'
  };
  return categoryMap[category] || category;
}

// Format date
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

// ==================== PERFORMANCE OPTIMIZATION ====================

// Lazy load images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  });
  
  // Observe all images with data-src attribute
  document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
  });
}

// ==================== ACCESSIBILITY ENHANCEMENTS ====================

// Keyboard navigation for cards
document.addEventListener('keydown', (e) => {
  const focusedElement = document.activeElement;
  
  if (e.key === 'Enter' && focusedElement.classList.contains('blog-card')) {
    const postId = focusedElement.onclick?.toString().match(/\d+/)?.[0];
    if (postId) readArticle(parseInt(postId));
  }
  
  if (e.key === 'Enter' && focusedElement.classList.contains('category-card')) {
    focusedElement.click();
  }
});

// Make cards focusable
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.blog-card, .category-card');
  cards.forEach(card => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
  });
});

// ==================== SMOOTH SCROLL POLYFILL ====================
// For browsers that don't support smooth scrolling
if (!('scrollBehavior' in document.documentElement.style)) {
  const smoothScrollTo = (element, to, duration) => {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;
    
    const animateScroll = () => {
      currentTime += increment;
      const val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    
    animateScroll();
  };
  
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };
}

// ==================== ERROR HANDLING ====================
window.addEventListener('error', (e) => {
  console.error('An error occurred:', e.error);
  // In production, you might want to log this to a service
});

// ==================== ANALYTICS TRACKING ====================
// Track page views
function trackPageView() {
  // In a real application, integrate with Google Analytics or similar
  console.log('Page view tracked:', window.location.pathname);
}

// Track clicks on articles
function trackArticleClick(articleId, articleTitle) {
  // In a real application, send to analytics service
  console.log('Article clicked:', { id: articleId, title: articleTitle });
}

// Track newsletter subscriptions
function trackNewsletterSubscription(email) {
  // In a real application, send to analytics service
  console.log('Newsletter subscription:', email);
}

// ==================== LOCAL STORAGE UTILS ====================
// NOTE: localStorage is disabled in artifacts, but including for reference

// Save user preferences (for when deployed)
function saveUserPreferences(preferences) {
  try {
    // localStorage.setItem('userPreferences', JSON.stringify(preferences));
    console.log('User preferences saved:', preferences);
  } catch (e) {
    console.warn('Could not save preferences:', e);
  }
}

// Load user preferences (for when deployed)
function loadUserPreferences() {
  try {
    // const prefs = localStorage.getItem('userPreferences');
    // return prefs ? JSON.parse(prefs) : null;
    return null;
  } catch (e) {
    console.warn('Could not load preferences:', e);
    return null;
  }
}

// ==================== SOCIAL SHARING ====================
function shareOnSocialMedia(platform, post) {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(post.title);
  const text = encodeURIComponent(post.excerpt);
  
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`,
    whatsapp: `https://wa.me/?text=${title}%20${url}`
  };
  
  if (shareUrls[platform]) {
    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  }
}

// Make sharing function available globally
window.shareOnSocialMedia = shareOnSocialMedia;

// ==================== READING PROGRESS ====================
// Track reading progress for individual articles
function trackReadingProgress() {
  const article = document.querySelector('article.blog-content');
  if (!article) return;
  
  window.addEventListener('scroll', () => {
    const articleTop = article.offsetTop;
    const articleHeight = article.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight;
    const progress = ((scrollPosition - articleTop) / articleHeight) * 100;
    
    console.log('Reading progress:', Math.min(Math.max(progress, 0), 100).toFixed(0) + '%');
  }, { passive: true });
}

// ==================== RELATED POSTS ====================
// Get related posts based on category
function getRelatedPosts(currentPostId, limit = 3) {
  const currentPost = blogPosts.find(post => post.id === currentPostId);
  if (!currentPost) return [];
  
  return blogPosts
    .filter(post => post.id !== currentPostId && post.category === currentPost.category)
    .slice(0, limit);
}

// ==================== SEARCH HIGHLIGHTING ====================
// Highlight search terms in results
function highlightSearchTerms(text, searchTerm) {
  if (!searchTerm) return text;
  
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

// ==================== INFINITE SCROLL (Alternative to Load More) ====================
function initInfiniteScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const postsToShow = currentPage * postsPerPage;
        if (postsToShow < filteredPosts.length) {
          currentPage++;
          renderBlogPosts();
        }
      }
    });
  }, {
    rootMargin: '100px',
    threshold: 0.1
  });
  
  // Observe the load more button
  const loadMoreContainer = document.getElementById('loadMoreContainer');
  if (loadMoreContainer) {
    observer.observe(loadMoreContainer);
  }
}

// Uncomment to use infinite scroll instead of load more button
// initInfiniteScroll();

// ==================== DARK MODE TOGGLE ====================
// (Optional feature for future implementation)
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  
  // Save preference
  saveUserPreferences({ darkMode: isDarkMode });
  
  console.log('Dark mode:', isDarkMode ? 'enabled' : 'disabled');
}

// ==================== READING TIME CALCULATOR ====================
// Calculate estimated reading time for articles
function calculateReadingTime(text) {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

// ==================== VIEW COUNTER ====================
// Track article views (for when deployed with backend)
function incrementViewCount(postId) {
  // In a real application, this would make an API call
  console.log('View count incremented for post:', postId);
}

// ==================== COMMENT SYSTEM ====================
// Basic comment structure (for future implementation)
const comments = {};

function addComment(postId, author, text) {
  if (!comments[postId]) {
    comments[postId] = [];
  }
  
  comments[postId].push({
    id: Date.now(),
    author,
    text,
    timestamp: new Date().toISOString()
  });
  
  console.log('Comment added:', { postId, author, text });
}

function getComments(postId) {
  return comments[postId] || [];
}

// ==================== BOOKMARKING ====================
// Save favorite articles (for when deployed)
const bookmarkedPosts = new Set();

function toggleBookmark(postId) {
  if (bookmarkedPosts.has(postId)) {
    bookmarkedPosts.delete(postId);
    console.log('Post unbookmarked:', postId);
  } else {
    bookmarkedPosts.add(postId);
    console.log('Post bookmarked:', postId);
  }
  
  // Save to localStorage when deployed
  // saveUserPreferences({ bookmarks: Array.from(bookmarkedPosts) });
}

function isBookmarked(postId) {
  return bookmarkedPosts.has(postId);
}

// ==================== NOTIFICATION SYSTEM ====================
// Show toast notifications
function showNotification(message, type = 'info') {
  console.log(`[${type.toUpperCase()}]`, message);
  
  // In a real application, create and show a toast notification
  // const toast = document.createElement('div');
  // toast.className = `toast toast-${type}`;
  // toast.textContent = message;
  // document.body.appendChild(toast);
  // setTimeout(() => toast.remove(), 3000);
}

// ==================== PERFORMANCE MONITORING ====================
// Monitor page load performance
window.addEventListener('load', () => {
  if (window.performance) {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log('Page load time:', pageLoadTime + 'ms');
  }
});

// ==================== EXPORT FUNCTIONS ====================
// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    formatCategory,
    formatDate,
    getRelatedPosts,
    calculateReadingTime,
    isValidEmail
  };
}

// ==================== INITIALIZATION COMPLETE ====================
console.log('✅ ScriptySphere Blog initialized successfully');
console.log(`📝 Loaded ${blogPosts.length} blog posts`);
console.log('🎨 All features active and ready');

// ==================== END OF SCRIPT ====================