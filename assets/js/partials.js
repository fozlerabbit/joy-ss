
/* ========================================
   FILE: /assets/js/partials.js
   Partial loader for header and footer
   Works on both localhost and GitHub Pages
   ======================================== */

export async function loadPartials() {
  const elements = document.querySelectorAll('[data-include]');
  if (elements.length === 0) return;

  // Auto-detect base path
  const basePath = window.location.hostname.includes('github.io')
    ? `/${window.location.pathname.split('/')[1]}/partials`
    : '/partials';

  const loadPromises = Array.from(elements).map(async (element) => {
    const partialName = element.getAttribute('data-include');
    const filePath = `${basePath}/${partialName}.html`;

    try {
      const response = await fetch(filePath);
      if (!response.ok) throw new Error(`Failed to load ${partialName}: ${response.statusText}`);

      const html = await response.text();
      element.innerHTML = html;

      element.dispatchEvent(new CustomEvent('partial-loaded', {
        detail: { partialName }
      }));
    } catch (error) {
      console.error(`Error loading partial ${partialName}:`, error);
      element.innerHTML = `<!-- Failed to load ${partialName} -->`;
    }
  });

  await Promise.all(loadPromises);
}

export default loadPartials;


// /* ========================================
//    FILE: /assets/js/partials.js
//    Partial loader for header and footer
//    ======================================== */

// export async function loadPartials() {
//   const elements = document.querySelectorAll('[data-include]');
  
//   if (elements.length === 0) return;
  
//   const loadPromises = Array.from(elements).map(async (element) => {
//     const partialName = element.getAttribute('data-include');
    
//     try {
//       const response = await fetch(`/partials/${partialName}.html`);
      
//       if (!response.ok) {
//         throw new Error(`Failed to load ${partialName}: ${response.statusText}`);
//       }
      
//       const html = await response.text();
//       element.innerHTML = html;
      
//       // Dispatch event for loaded partial
//       element.dispatchEvent(new CustomEvent('partial-loaded', {
//         detail: { partialName }
//       }));
//     } catch (error) {
//       console.error(`Error loading partial ${partialName}:`, error);
//       element.innerHTML = `<!-- Failed to load ${partialName} -->`;
//     }
//   });
  
//   await Promise.all(loadPromises);
// }

// // Export for use in other modules
// export default loadPartials;



