/* ========================================
   FILE: /assets/js/main-template.js
   Minimal JS for loading header and footer
   ======================================== */

import { loadPartials } from './partials.js';

document.addEventListener('DOMContentLoaded', async () => {
  // Load header and footer partials
  await loadPartials();
});







document.addEventListener('partial-loaded', (e) => {
  if (e.detail.partialName === 'header') initNavbar();
});

function initNavbar() {
  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    toggle.classList.toggle('active');
  });

  // Highlight current page
  const currentPath = window.location.pathname;
  document.querySelectorAll('#nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
}
