// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('show');
            
            // Animate hamburger menu
            const hamburger = mobileMenuBtn.querySelector('.hamburger');
            if (mobileNav.classList.contains('show')) {
                hamburger.style.transform = 'rotate(45deg)';
                hamburger.style.background = 'transparent';
            } else {
                hamburger.style.transform = 'rotate(0deg)';
                hamburger.style.background = '#374151';
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.nav-mobile a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('show');
            const hamburger = mobileMenuBtn.querySelector('.hamburger');
            hamburger.style.transform = 'rotate(0deg)';
            hamburger.style.background = '#374151';
        });
    });
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll effect to header
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .step, .stat-card, .testimonial, .partner-card, .payment-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add parallax effect to hero decorations
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const decorations = document.querySelectorAll('.decoration');
        
        decorations.forEach((decoration, index) => {
            const speed = 0.5 + (index * 0.1);
            decoration.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Counter animation for stats
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target.toLocaleString();
            }
        }
        
        updateCounter();
    }
    
    // Animate stats when they come into view
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statElement = entry.target;
                const statText = statElement.textContent;
                
                // Extract number from text like "$2M+" or "50K+"
                const numberMatch = statText.match(/(\d+)/);
                if (numberMatch) {
                    const number = parseInt(numberMatch[1]);
                    const suffix = statText.replace(numberMatch[0], '');
                    
                    statElement.textContent = '0' + suffix;
                    
                    setTimeout(() => {
                        animateCounter(statElement, number);
                    }, 300);
                }
                
                statsObserver.unobserve(statElement);
            }
        });
    }, { threshold: 0.5 });
    
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
    
    // Add typing effect to hero title
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Add click handlers for CTA buttons
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-white');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add some visual feedback
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // You can add actual signup logic here
            console.log('CTA button clicked - redirect to signup');
        });
    });
    
    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '0';
            this.style.opacity = '1';
            this.style.transition = 'opacity 0.3s ease';
        });
    });
    
    // Add gradient animation to text
    const gradientTexts = document.querySelectorAll('.gradient-text');
    gradientTexts.forEach(text => {
        text.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #8b5cf6, #3b82f6, #10b981)';
            this.style.backgroundSize = '200% 200%';
            this.style.animation = 'gradient-shift 2s ease infinite';
        });
    });
    
    // Add CSS for gradient animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s ease;
        }
        
        .animate-on-scroll.animate-fade-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Performance optimization: Throttle scroll events
    function throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply throttling to scroll events
    window.addEventListener('scroll', throttle(function() {
        // Scroll-based animations go here
    }, 16)); // 60fps
});