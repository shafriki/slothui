document.addEventListener('DOMContentLoaded', function() {

    // mobile menu toggle
    const navbarToggle = document.querySelector('.navbar-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    navbarToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });
    
    // close mobile menu 
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });
    
    // smooth scrolling 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // add active class to current nav link 
    const navLinks = document.querySelectorAll('.navbar-links a, .mobile-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// testimonial hover marker logic
const testimonialItems = document.querySelectorAll('.testimonial-item');
const firstTestimonial = testimonialItems[0];

if (firstTestimonial) {
    firstTestimonial.classList.add('active');

    testimonialItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            testimonialItems.forEach(t => t.classList.remove('active'));
            item.classList.add('active');
        });

        item.addEventListener('mouseleave', () => {
            testimonialItems.forEach(t => t.classList.remove('active'));
            firstTestimonial.classList.add('active');
        });
    });
}

// Load More button logic
const loadMoreBtn = document.querySelector('.load-more-btn');
const testimonialCards = document.querySelectorAll('.testimonial-card');

if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        testimonialCards.forEach(card => {
            card.style.display = 'block';
        });
        loadMoreBtn.style.display = 'none';
    });
}

// Live Button Scroll to Top
const liveButton = document.querySelector('.live-button');

if (liveButton) {
    liveButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

