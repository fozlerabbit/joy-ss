// Mobile Navigation Toggle with unique IDs
        document.addEventListener('DOMContentLoaded', function() {
            const ssMobileToggle = document.getElementById('ssMobileToggle');
            const ssMobileMenu = document.getElementById('ssMobileMenu');
            const ssMobileMenuOverlay = document.getElementById('ssMobileMenuOverlay');
            const ssMobileMenuClose = document.getElementById('ssMobileMenuClose');
            const ssMobileMenuLinks = document.querySelectorAll('.ss-mobile-menu-link');
            const ssNavLinks = document.querySelectorAll('.ss-nav-link');

            // Function to open mobile menu
            function openMobileMenu() {
                ssMobileToggle.classList.add('active');
                ssMobileMenu.classList.add('active');
                ssMobileMenuOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }

            // Function to close mobile menu
            function closeMobileMenu() {
                ssMobileToggle.classList.remove('active');
                ssMobileMenu.classList.remove('active');
                ssMobileMenuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }

            // Toggle mobile menu when hamburger is clicked
            if (ssMobileToggle) {
                ssMobileToggle.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    if (ssMobileMenu.classList.contains('active')) {
                        closeMobileMenu();
                    } else {
                        openMobileMenu();
                    }
                });
            }

            // Close mobile menu when close button is clicked
            if (ssMobileMenuClose) {
                ssMobileMenuClose.addEventListener('click', function(e) {
                    e.preventDefault();
                    closeMobileMenu();
                });
            }

            // Close mobile menu when overlay is clicked
            if (ssMobileMenuOverlay) {
                ssMobileMenuOverlay.addEventListener('click', function() {
                    closeMobileMenu();
                });
            }

            // Close mobile menu when clicking on mobile menu links
            ssMobileMenuLinks.forEach(link => {
                link.addEventListener('click', function() {
                    closeMobileMenu();
                    
                    // Remove active class from all mobile links
                    ssMobileMenuLinks.forEach(l => l.classList.remove('active'));
                    // Add active class to clicked link
                    this.classList.add('active');

                    // Also update desktop nav active state
                    const href = this.getAttribute('href');
                    ssNavLinks.forEach(navLink => {
                        navLink.classList.remove('active');
                        if (navLink.getAttribute('href') === href) {
                            navLink.classList.add('active');
                        }
                    });
                });
            });

            // Close mobile menu when clicking on desktop nav links
            ssNavLinks.forEach(link => {
                link.addEventListener('click', function() {
                    closeMobileMenu();
                    
                    // Remove active class from all links
                    ssNavLinks.forEach(l => l.classList.remove('active'));
                    // Add active class to clicked link (except CTA button)
                    if (!this.classList.contains('ss-cta-button')) {
                        this.classList.add('active');
                        
                        // Also update mobile nav active state
                        const href = this.getAttribute('href');
                        ssMobileMenuLinks.forEach(mobileLink => {
                            mobileLink.classList.remove('active');
                            if (mobileLink.getAttribute('href') === href) {
                                mobileLink.classList.add('active');
                            }
                        });
                    }
                });
            });

            // Close mobile menu on escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && ssMobileMenu && ssMobileMenu.classList.contains('active')) {
                    closeMobileMenu();
                }
            });

            // Navbar scroll effect - Keep it sticky
            window.addEventListener('scroll', function() {
                const ssNavbar = document.querySelector('.ss-navbar-container');
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                // Add/remove scroll class for styling changes if needed
                if (scrollTop > 50) {
                    ssNavbar.classList.add('scrolled');
                } else {
                    ssNavbar.classList.remove('scrolled');
                }
            });

            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });

            // Handle window resize
            window.addEventListener('resize', function() {
                if (window.innerWidth > 992 && ssMobileMenu && ssMobileMenu.classList.contains('active')) {
                    closeMobileMenu();
                }
            });

            console.log('✅ ScriptySphere Navigation & Footer initialized with unique IDs');
        });
