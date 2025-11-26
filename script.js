// 1. Theme Toggle (Dark/Light Mode)
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');
const body = document.body;

// Check saved theme
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark');
    }
});

// 2. Mobile Menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const hamIcon = hamburger.querySelector('i');
    if(navMenu.classList.contains('active')){
        hamIcon.classList.replace('fa-bars', 'fa-xmark');
    } else {
        hamIcon.classList.replace('fa-xmark', 'fa-bars');
    }
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
    });
});

// 3. Scroll Animation (Reveal)
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    revealElements.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Trigger once on load

// 4. Contact Form Mock Submit (English Messages)
const contactForm = document.getElementById('contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;
        
        // Change button text to indicate loading
        btn.innerText = 'Sending...';
        btn.style.opacity = '0.7';
        
        // Simulate sending delay
        setTimeout(() => {
            btn.innerText = 'Message Sent! ✅';
            btn.style.backgroundColor = '#10b981'; // Green
            btn.style.borderColor = '#10b981';
            contactForm.reset();
            
            // Revert button after 3 seconds
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = '';
                btn.style.borderColor = '';
                btn.style.opacity = '1';
            }, 3000);
        }, 1500);
    });
}

// 5. Footer Year
document.getElementById('year').textContent = new Date().getFullYear();