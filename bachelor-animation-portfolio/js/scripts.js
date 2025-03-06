// script.js - Dynamically load images

document.addEventListener('DOMContentLoaded', function() {
    // Configuration object for images
    const imageConfig = {
        'logo': {
            src: 'images/Creative-Industries-_hrz-gld-blk.png',
            alt: 'Creative Industries Logo'
        },
        'character-rotation': {
            src: 'images/Connie_the_Mouse.jpg',
            alt: 'Connie the Mouse Character Rotation Example'
        },
        'storyboard-template': {
            src: 'images/Storyboard_Panels.jpg',
            alt: 'Storyboard Template Example'
        }
        // You can add more images here as needed
    };

    // Load all images with data-image attribute
    const imagePlaceholders = document.querySelectorAll('[data-image]');
    
    imagePlaceholders.forEach(placeholder => {
        const imageKey = placeholder.getAttribute('data-image');
        if (imageConfig[imageKey]) {
            placeholder.src = imageConfig[imageKey].src;
            placeholder.alt = imageConfig[imageKey].alt;
            
            // If there's a loading animation, you can remove it here
            const loadingElement = placeholder.parentElement.querySelector('.loading-animation');
            if (loadingElement) {
                loadingElement.style.display = 'none';
            }
        } else {
            console.warn(`Image configuration for "${imageKey}" not found`);
        }
    });

    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Toggle active class on the header
            this.classList.toggle('active');
            
            // Get the content panel
            const content = this.nextElementSibling;
            
            // Toggle active class on the content
            content.classList.toggle('active');
        });
    });
    
    // Example accordion functionality
    const exampleHeaders = document.querySelectorAll('.example-header');
    
    exampleHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Toggle active class on the header
            this.classList.toggle('active');
            
            // Get the content panel
            const content = this.nextElementSibling;
            
            // Toggle active class on the content
            content.classList.toggle('active');
        });
    });

    // Back to top button visibility
    const backToTopButton = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // Navigation smooth scrolling
    document.querySelectorAll('nav a, a.back-to-top').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target element
            let targetId = this.getAttribute('href');
            if (targetId === '#') {
                // Back to top button
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                // Navigation links
                const targetElement = document.querySelector(targetId);
                const navHeight = document.querySelector('nav').offsetHeight;
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - navHeight,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
