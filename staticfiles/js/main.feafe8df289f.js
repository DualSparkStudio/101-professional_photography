/**
 * 3D CINEMATIC PHOTOGRAPHY PORTFOLIO
 * Main JavaScript File
 * ===================================
 */

// Global Variables
let isLoading = true;
let navbar, backToTopBtn, loadingScreen;
let scroll, lightbox;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize the application
function initializeApp() {
    // Cache DOM elements
    navbar = document.getElementById('mainNav');
    backToTopBtn = document.getElementById('backToTop');
    loadingScreen = document.getElementById('loading-screen');
    
    // Initialize components
    initializeLoading();
    initializeNavigation();
    initializeScrollEffects();
    initializeLightbox();
    initializeAnimations();
    initializeParticles();
    initializeFormHandlers();
    initializeLazyLoading();
    
    // Initialize page-specific functionality
    if (document.body.classList.contains('home-page')) {
        initializeHomePage();
    }
    
    console.log('🎉 Photography Portfolio Initialized Successfully!');
}

// ===== LOADING SCREEN =====
function initializeLoading() {
    if (!loadingScreen) return;
    
    // Simulate loading progress
    const progressBar = loadingScreen.querySelector('.loading-progress');
    let progress = 0;
    
    const interval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            // Hide loading screen after a short delay
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                isLoading = false;
                
                // Initialize AOS after loading
                if (typeof AOS !== 'undefined') {
                    AOS.init({
                        duration: 1000,
                        offset: 100,
                        once: true,
                        easing: 'ease-out-cubic'
                    });
                }
                
                // Start entrance animations
                startEntranceAnimations();
            }, 500);
        }
        
        if (progressBar) {
            progressBar.style.width = progress + '%';
        }
    }, 100);
}

// ===== NAVIGATION EFFECTS =====
function initializeNavigation() {
    if (!navbar) return;
    
    // Navbar scroll effect
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add scrolled class when not at top
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 500) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
    
    // Active nav link highlighting
    const navLinks = navbar.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    if (sections.length > 0) {
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
}

// ===== SCROLL EFFECTS =====
function initializeScrollEffects() {
    // Back to top button
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Parallax effects for background elements
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (parallaxElements.length > 0) {
        window.addEventListener('scroll', () => {
            parallaxElements.forEach(element => {
                const speed = element.getAttribute('data-parallax') || 0.5;
                const yPos = -(window.pageYOffset * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
    
    // Smooth scrolling for anchor links
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
}

// ===== LIGHTBOX INITIALIZATION =====
function initializeLightbox() {
    if (typeof GLightbox !== 'undefined') {
        lightbox = GLightbox({
            touchNavigation: true,
            loop: true,
            autoplayVideos: true,
            plyr: {
                config: {
                    ratio: '16:9',
                    youtube: {
                        noCookie: true,
                        rel: 0,
                        showinfo: 0,
                        iv_load_policy: 3
                    }
                }
            }
        });
    }
}

// ===== ANIMATIONS =====
function initializeAnimations() {
    // Register GSAP plugins
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        // Set up timeline for page transitions
        const tl = gsap.timeline();
        
        // Fade in page content
        gsap.set('main', { opacity: 0, y: 30 });
        
        // Animate cards on scroll
        gsap.utils.toArray('.card, .gallery-item').forEach(card => {
            gsap.fromTo(card, 
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        end: 'bottom 15%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });
        
        // Animate text elements
        gsap.utils.toArray('.display-1, .display-2, .display-3, .display-4, .display-5').forEach(title => {
            gsap.fromTo(title.children || title,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: title,
                        start: 'top 85%'
                    }
                }
            );
        });
        
        // Floating animations for images
        gsap.utils.toArray('.float').forEach(element => {
            gsap.to(element, {
                y: -20,
                duration: 3,
                ease: 'power2.inOut',
                repeat: -1,
                yoyo: true
            });
        });
    }
}

// ===== ENTRANCE ANIMATIONS =====
function startEntranceAnimations() {
    if (typeof gsap !== 'undefined') {
        const tl = gsap.timeline();
        
        tl.to('main', { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: 'power3.out' 
        });
        
        // Animate hero content if on home page
        if (document.querySelector('.hero-content')) {
            tl.from('.hero-title', { 
                y: 100, 
                opacity: 0, 
                duration: 1, 
                ease: 'power3.out' 
            }, '-=0.5')
            .from('.hero-subtitle', { 
                y: 50, 
                opacity: 0, 
                duration: 0.8, 
                ease: 'power3.out' 
            }, '-=0.3')
            .from('.hero-cta', { 
                y: 30, 
                opacity: 0, 
                duration: 0.6, 
                ease: 'power3.out' 
            }, '-=0.2');
        }
    }
}

// ===== PARTICLE SYSTEM =====
function initializeParticles() {
    const particleContainer = document.querySelector('.particles-container');
    if (!particleContainer) return;
    
    // Create floating particles
    for (let i = 0; i < 50; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        pointer-events: none;
        animation: float-particle ${Math.random() * 10 + 5}s infinite linear;
        left: ${Math.random() * 100}%;
        animation-delay: ${Math.random() * 5}s;
    `;
    
    container.appendChild(particle);
}

// ===== FORM HANDLERS =====
function initializeFormHandlers() {
    // Contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }
    
    // Newsletter form
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', handleNewsletterSubmission);
    });
    
    // Form field animations
    const formFields = document.querySelectorAll('.form-control');
    formFields.forEach(field => {
        field.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        field.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
}

// Handle form submission
async function handleFormSubmission(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Show loading state
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
            }
        });
        
        const data = await response.json();
        
        if (data.success) {
            showNotification('Message sent successfully!', 'success');
            form.reset();
        } else {
            showNotification('Please correct the errors and try again.', 'error');
        }
    } catch (error) {
        showNotification('An error occurred. Please try again.', 'error');
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

// Handle newsletter submission
async function handleNewsletterSubmission(e) {
    e.preventDefault();
    
    const form = e.target;
    const email = form.querySelector('input[type="email"]').value;
    
    if (!email) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate newsletter subscription
    showNotification('Thank you for subscribing!', 'success');
    form.reset();
}

// ===== LAZY LOADING =====
function initializeLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
    }
}

// ===== HOME PAGE SPECIFIC =====
function initializeHomePage() {
    initializeHeroEffects();
    initializeStatsCounters();
    initializeTestimonialSlider();
    initializeGalleryEffects();
}

// Hero section effects
function initializeHeroEffects() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;
    
    // Parallax effect for hero background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = heroSection.querySelector('.hero-bg');
        if (parallax) {
            parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Typing effect for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle && typeof gsap !== 'undefined') {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        gsap.to(heroTitle, {
            duration: 2,
            text: text,
            ease: 'none',
            delay: 1
        });
    }
}

// Animated statistics counters
function initializeStatsCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.7 });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.floor(current);
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 20);
}

// Testimonial slider
function initializeTestimonialSlider() {
    if (typeof Swiper !== 'undefined') {
        const testimonialSwiper = new Swiper('.testimonialSwiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            }
        });
    }
}

// Gallery 3D effects
function initializeGalleryEffects() {
    // 3D cube rotation
    const galleryCube = document.querySelector('.gallery-cube');
    if (galleryCube && typeof gsap !== 'undefined') {
        gsap.to(galleryCube, {
            rotationY: 360,
            duration: 20,
            ease: 'none',
            repeat: -1
        });
        
        // Floating animation
        gsap.to(galleryCube, {
            y: -30,
            duration: 3,
            ease: 'power2.inOut',
            repeat: -1,
            yoyo: true
        });
    }
    
    // Gallery item hover effects
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            if (typeof gsap !== 'undefined') {
                gsap.to(this, { scale: 1.05, duration: 0.3 });
                gsap.to(this.querySelector('img'), { scale: 1.1, duration: 0.3 });
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (typeof gsap !== 'undefined') {
                gsap.to(this, { scale: 1, duration: 0.3 });
                gsap.to(this.querySelector('img'), { scale: 1, duration: 0.3 });
            }
        });
    });
}

// ===== UTILITY FUNCTIONS =====

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = `
        top: 20px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
    `;
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Debounce function
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Device detection
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i.test(navigator.userAgent);

// Export for use in other scripts
window.PhotographyPortfolio = {
    showNotification,
    debounce,
    throttle,
    isMobile,
    isTablet
};

// Add some CSS animations via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes float-particle {
        0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
    }
    
    .lazy {
        filter: blur(5px);
        transition: filter 0.3s;
    }
    
    .lazy.loaded {
        filter: blur(0);
    }
`;
document.head.appendChild(style);

console.log('🚀 3D Cinematic Photography Portfolio JavaScript Loaded!'); 