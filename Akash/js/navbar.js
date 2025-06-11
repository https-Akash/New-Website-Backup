/*===========================================
   Navigation Script for Akash's Portfolio
===========================================*/

document.addEventListener('DOMContentLoaded', function() {
    // Get navbar elements
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li a');
    
    // Return if navbar doesn't exist
    if (!menuBtn || !navLinks) return;
    
    // Toggle menu state
    let menuOpen = false;
    
    menuBtn.addEventListener('click', () => {
        if (!menuOpen) {
            openMenu();
        } else {
            closeMenu();
        }
    });
    
    // Open menu function
    function openMenu() {
        menuBtn.classList.add('open');
        navLinks.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        menuOpen = true;
        
        // Add fade-in animation to each link
        navLinksItems.forEach((link, index) => {
            link.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
        });
    }
    
    // Close menu function
    function closeMenu() {
        menuBtn.classList.remove('open');
        navLinks.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
        menuOpen = false;
        
        // Remove animations
        navLinksItems.forEach(link => {
            link.style.animation = '';
        });
    }
    
    // Close menu when clicking a navigation link 
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            if (menuOpen) {
                closeMenu();
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (menuOpen && 
            !navLinks.contains(e.target) && 
            !menuBtn.contains(e.target)) {
            closeMenu();
        }
    });
    
    // Close menu when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuOpen) {
            closeMenu();
        }
    });
    
    // Update active link based on current page
    function updateActiveLink() {
        // Get current page URL
        const currentLocation = window.location.pathname;
        
        // Remove active class from all links
        navLinksItems.forEach(link => {
            link.classList.remove('active');
            
            // Add active class to matching link
            if (link.getAttribute('href') === currentLocation || 
                (currentLocation === '/' && link.getAttribute('href') === 'index.html')) {
                link.classList.add('active');
            }
        });
    }
    
    // Call initially
    updateActiveLink();
    
    // Page resize handling
    window.addEventListener('resize', () => {
        // Close mobile menu if window is resized to desktop
        if (window.innerWidth > 991 && menuOpen) {
            closeMenu();
        }
    });
    
    // Add scroll effects for navigation
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        
        // Add scrolled class to navbar after scrolling 50px
        if (scrollPosition > 50) {
            document.querySelector('.navbar').classList.add('scrolled');
        } else {
            document.querySelector('.navbar').classList.remove('scrolled');
        }
    });
}); 