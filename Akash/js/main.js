/*===========================================
   Akash Mishra Portfolio - Main JavaScript
===========================================*/

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initPreloader();
    initTyped();
    initParticles();
    initAOS();
    initScrollEffects();
    // Conservative initialization of optional features
    if (document.querySelector('.project-card')) {
        initVanillaTilt();
    }
    if (document.getElementById('lottie-dev')) {
        initLottie();
    }
});

// Remove preloader when page is fully loaded
function initPreloader() {
    window.addEventListener('load', () => {
        const preloader = document.querySelector('.preloader');
        setTimeout(() => {
            preloader.classList.add('hide');
            document.body.classList.remove('loading');
            
            // Initialize the cursor after preloader
            setTimeout(() => {
                document.body.classList.add('cursor-loaded');
            }, 300);
        }, 1000);
    });
}

// Initialize Typed.js for the hero section
function initTyped() {
    if (document.getElementById('typed-text')) {
        const typed = new Typed('#typed-text', {
            strings: ['Commerce student.', 'Web Developer.', 'Hardcore Gamer.'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1500,
            startDelay: 1000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }
}

// Initialize Particles.js for hero background with more subtle configuration
function initParticles() {
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 50,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ['#4a6cf7', '#64748b', '#3b82f6']
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    },
                },
                opacity: {
                    value: 0.3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 0.5,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 2,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#4a6cf7',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 0.5,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.3
                        }
                    },
                    push: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Initialize AOS (Animate on Scroll) library with more subtle settings
function initAOS() {
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true,
        offset: 100,
        disable: 'mobile'
    });
}

// Initialize VanillaTilt for subtle 3D hover effects
function initVanillaTilt() {
    VanillaTilt.init(document.querySelectorAll('.project-card'), {
        max: 5,
        speed: 300,
        glare: true,
        'max-glare': 0.1
    });
}

// Initialize Lottie animations
function initLottie() {
    lottie.loadAnimation({
        container: document.getElementById('lottie-dev'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets10.lottiefiles.com/packages/lf20_pwohahvd.json' // Coding animation
    });
}

// Handle scrolling effects
function initScrollEffects() {
    // Navbar color change on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Reveal elements on scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    function checkReveal() {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('active');
            }
        });
    }
    
    // Initial check for elements in view
    checkReveal();
    
    // Check on scroll
    window.addEventListener('scroll', checkReveal);
}

// Handle page transitions
function handlePageTransition(url) {
    if (url === window.location.href) return;
    
    // Create transition overlay
    const transition = document.createElement('div');
    transition.className = 'page-transition';
    document.body.appendChild(transition);
    
    // Start transition animation
    setTimeout(() => {
        transition.classList.add('enter');
        
        // Navigate to new page after animation
        setTimeout(() => {
            window.location.href = url;
        }, 400);
    }, 10);
}

// Add event listeners to all internal links for page transitions
document.querySelectorAll('a').forEach(link => {
    // Only apply to internal links
    if (link.href && link.href.includes(window.location.origin) && !link.dataset.noTransition) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            handlePageTransition(this.href);
        });
    }
}); 