// ========================================
// Initialize AOS (Animate On Scroll)
// ========================================
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// ========================================
// Theme Toggle
// ========================================
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// ========================================
// Navigation
// ========================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Sticky Navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px var(--shadow)';
    } else {
        navbar.style.boxShadow = '0 2px 10px var(--shadow)';
    }
});

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active Link on Scroll
const sections = document.querySelectorAll('section');

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
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// ========================================
// Typing Animation
// ========================================
const typedTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const textArray = [
    'Software Engineer',
    'Flutter Developer',
    'AI & ML Enthusiast',
    'Cloud Engineer',
    'Problem Solver'
];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 500);
    }
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, newTextDelay + 250);
});

// ========================================
// Project Filtering
// ========================================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease';
            } else {
                const categories = card.getAttribute('data-category');
                if (categories.includes(filter)) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    });
});

// Add fadeIn animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ========================================
// Project Modal
// ========================================
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close-modal');
const demoBtns = document.querySelectorAll('.demo-btn');

// Project data
const projectData = {
    'smart-protector': {
        title: 'Smart Protector Application for Elderly People',
        description: 'A comprehensive mobile application designed to ensure the safety and well-being of elderly people through smart monitoring, fall detection, medication reminders, and caretaker connectivity. Built with Kotlin and Firebase for real-time synchronization with wearable devices.',
        technologies: ['Kotlin', 'XML', 'Firebase', 'SPAWearable', 'Real-time Monitoring'],
        github: 'https://github.com/Gokule7/SMART-PROTECTOR-APPLICATION-FOR--ELDERLY-PEOPLE-',
        document: 'projects/smart-protector-application/SMART PROTECTOR APP REPORT.pdf',
        videos: [
            'projects/smart-protector-application/VID-20250417-WA0002.mp4',
            'projects/smart-protector-application/VID-20250417-WA0003.mp4',
            'projects/smart-protector-application/VID-20250417-WA0004.mp4'
        ]
    },
    'eye-disease': {
        title: 'Eye Disease Prediction System',
        description: 'An AI-powered medical diagnostic system that predicts 5 different eye diseases using deep learning. Built with Flutter for cross-platform support and Flask backend with EfficientNetB3 model. Features Grad-CAM visualization for model interpretability.',
        technologies: ['Flutter', 'Flask', 'EfficientNetB3', 'Grad-CAM', 'Deep Learning'],
        github: 'https://github.com/Gokule7/eye-disease-prediction',
        document: 'projects/Eye_disease/Generalizable Ocular Disease Classification Across a Multi-Source Fundus Image Cohort Using Deep Transfer Learning.pdf',
        videos: []
    },
    'fraud-detection': {
        title: 'Real-Time Credit Card Fraud Detection',
        description: 'A cloud-based machine learning system for real-time credit card fraud detection. Leverages AWS services including Lambda for serverless computing, SageMaker for ML model deployment, API Gateway for RESTful APIs, CloudWatch for monitoring, and EC2 for scalable compute resources.',
        technologies: ['AWS Lambda', 'SageMaker', 'API Gateway', 'CloudWatch', 'EC2', 'Machine Learning'],
        github: 'https://github.com/Gokule7/Credit-Card-Fraud-Detection',
        document: 'projects/credit_card/Real_Time_Credit_Card_Fraud_Detection_Report(1).pdf',
        videos: []
    },
    'smart-traffic': {
        title: 'Smart Traffic Simulator',
        description: 'An intelligent traffic simulation system that uses neural networks for adaptive signal management. Built with JavaFX for rich UI and implements AI algorithms to optimize traffic flow in urban environments.',
        technologies: ['JavaFX', 'Neural Networks', 'AI', 'Simulation'],
        github: 'https://github.com/Gokule7/-Smart-Traffic-Simulator',
        document: 'projects/smart_trafic/SmartTrafficSimulator.pdf',
        videos: []
    },
    'legal-ai': {
        title: 'Legal-AI-Assistant',
        description: 'An AI-powered legal assistance system designed to analyze and understand legal documents. Uses natural language processing and machine learning to provide intelligent legal insights.',
        technologies: ['AI', 'NLP', 'Machine Learning', 'Document Analysis'],
        github: 'https://github.com/Gokule7/Legal-AI-Assistant',
        document: 'projects/Legal-AI/24MCA1031_Gokulnath(LegalAI_Report).pdf',
        videos: []
    }
};

demoBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = btn.getAttribute('data-project');
        const project = projectData[projectId];

        if (project) {
            let modalContent = `
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                
                <div class="modal-tags">
                    ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
                </div>
                
                <div style="margin: 2rem 0;">
                    ${project.github ? `<a href="${project.github}" target="_blank" class="modal-link"><i class="fab fa-github"></i> View on GitHub</a>` : ''}
                    ${project.document ? `<a href="${project.document}" target="_blank" class="modal-link"><i class="fas fa-file-pdf"></i> View Documentation</a>` : ''}
                </div>
            `;

            if (project.videos && project.videos.length > 0) {
                modalContent += '<h3 style="margin-top: 2rem; color: var(--text-color);">Demo Videos</h3>';
                project.videos.forEach((video, index) => {
                    modalContent += `
                        <video controls style="margin: 1rem 0;">
                            <source src="${video}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    `;
                });
            }

            modalBody.innerHTML = modalContent;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// ========================================
// EmailJS Initialization
// ========================================
(function() {
    emailjs.init('kDgcnvtMZN2H9zxcV');
})();

// ========================================
// Contact Form
// ========================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }

    // Show loading state
    const submitBtn = contactForm.querySelector('.btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;

    // Send email using EmailJS
    const templateParams = {
        to_name: 'Gokulnath',
        time: new Date().toLocaleString(),
        from_name: name,
        from_email: email,
        message: message
    };

    emailjs.send('service_6en1wyk', 'template_t55egm9', templateParams)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
        })
        .catch((error) => {
            console.error('EmailJS Error:', error);
            showNotification('Failed to send message. Please try again or email me directly at gokule710@gmail.com', 'error');
        })
        .finally(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
});

// Notification function
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 2rem;
        padding: 1rem 2rem;
        background: ${type === 'success' ? 'var(--accent-color)' : '#e74c3c'};
        color: white;
        border-radius: 10px;
        box-shadow: 0 5px 20px var(--shadow);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add notification animations
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyle);

// ========================================
// Smooth Scroll
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Scroll Reveal Animations
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// ========================================
// Preloader (Optional)
// ========================================
window.addEventListener('load', () => {
    document.body.style.overflow = 'auto';
});

// ========================================
// Console Message
// ========================================
console.log('%c👋 Welcome to Gokulnath\'s Portfolio!', 'color: #4f46e5; font-size: 20px; font-weight: bold;');
console.log('%c🚀 Built with HTML, CSS, and JavaScript', 'color: #06b6d4; font-size: 14px;');
console.log('%c💼 Looking for collaboration? Let\'s connect!', 'color: #10b981; font-size: 14px;');

// ========================================
// Performance Optimization
// ========================================
// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// Easter Egg (Konami Code)
// ========================================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join('') === konamiSequence.join('')) {
        showNotification('🎉 You found the easter egg! Gokulnath appreciates curious minds!', 'success');
        document.body.style.animation = 'rainbow 2s ease infinite';
    }
});

const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);
