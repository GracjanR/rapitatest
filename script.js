// Animowane przejścia między stronami
function showPageAnimated(newPageId) {
    const current = document.querySelector('.page.active');
    const next = document.getElementById(newPageId);

    if (current === next) return;

    if (current) {
        current.classList.remove('active');
        current.classList.add('page-exit');
        setTimeout(() => {
            current.classList.remove('page-exit');
            current.style.display = 'none';
        }, 500);
    }

    if (next) {
        next.classList.add('page-enter');
        next.style.display = 'block';
        setTimeout(() => {
            next.classList.add('active', 'page-active');
            next.classList.remove('page-enter');
            setTimeout(() => {
                next.classList.remove('page-active');
            }, 500);
        }, 10);
    }
}

// Automatyczna obsługa kliknięć w nawigacji (jeśli istnieje nav-links)
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').replace('#', '');
            if (document.getElementById(targetId)) {
                e.preventDefault();
                showPageAnimated(targetId);
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Pokaż domyślną stronę na start
    const firstPage = document.querySelector('.page');
    if (firstPage) {
        showPageAnimated(firstPage.id);
        // Ustaw aktywny link
        navLinks.forEach(link => {
            if (link.getAttribute('href').replace('#', '') === firstPage.id) {
                link.classList.add('active');
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Obsługa formularza kontaktowego
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Dziękuję za wiadomość! Odpowiem najszybciej jak to możliwe.');
            this.reset();
        });
    }

    // Animacje wejścia elementów
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate').forEach(element => {
        observer.observe(element);
    });
});


// Dodaj tę funkcjonalność do istniejącego script.js

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '☰';
    document.body.appendChild(mobileMenuBtn);
    
    const nav = document.querySelector('nav');
    const closeMenuBtn = document.createElement('button');
    closeMenuBtn.className = 'close-menu-btn';
    closeMenuBtn.innerHTML = '×';
    nav.prepend(closeMenuBtn);
    
    mobileMenuBtn.addEventListener('click', function() {
        document.body.classList.add('menu-open');
        nav.classList.add('active');
    });
    
    closeMenuBtn.addEventListener('click', function() {
        closeMobileMenu();
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (document.body.classList.contains('menu-open') && 
            !nav.contains(e.target) && 
            e.target !== mobileMenuBtn) {
            closeMobileMenu();
        }
    });
    
    function closeMobileMenu() {
        document.body.classList.remove('menu-open');
        nav.classList.remove('active');
    }
    
    // Close menu when a nav link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }
        });
    });
});


// Dodaj tę funkcjonalność do istniejącego script.js

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '☰';
    mobileMenuBtn.setAttribute('aria-label', 'Otwórz menu');
    document.body.appendChild(mobileMenuBtn);
    
    const closeMenuBtn = document.createElement('button');
    closeMenuBtn.className = 'close-menu-btn';
    closeMenuBtn.innerHTML = '×';
    closeMenuBtn.setAttribute('aria-label', 'Zamknij menu');
    document.body.appendChild(closeMenuBtn);
    
    const mobileMenuOverlay = document.createElement('div');
    mobileMenuOverlay.className = 'mobile-menu-overlay';
    document.body.appendChild(mobileMenuOverlay);
    
    const nav = document.querySelector('nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeMenuBtn.addEventListener('click', closeMobileMenu);
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    
    function closeMobileMenu() {
        nav.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Close menu when a nav link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }
        });
    });
    
    // Hide mobile menu on desktop when resizing window
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
});

// Mobile menu functionality
const mobileMenuBtn = document.createElement('button');
mobileMenuBtn.className = 'mobile-menu-btn';
mobileMenuBtn.innerHTML = '☰';
mobileMenuBtn.setAttribute('aria-label', 'Otwórz menu');
document.body.appendChild(mobileMenuBtn);

const closeMenuBtn = document.createElement('button');
closeMenuBtn.className = 'close-menu-btn';
closeMenuBtn.innerHTML = '×';
closeMenuBtn.setAttribute('aria-label', 'Zamknij menu');
closeMenuBtn.style.display = 'none'; // Początkowo ukryty
document.body.appendChild(closeMenuBtn);

const mobileMenuOverlay = document.createElement('div');
mobileMenuOverlay.className = 'mobile-menu-overlay';
document.body.appendChild(mobileMenuOverlay);

const nav = document.querySelector('nav');

mobileMenuBtn.addEventListener('click', function() {
    nav.classList.add('active');
    mobileMenuOverlay.classList.add('active');
    closeMenuBtn.style.display = 'flex'; // Pokazujemy X tylko gdy menu jest otwarte
    document.body.style.overflow = 'hidden';
});

closeMenuBtn.addEventListener('click', function() {
    closeMobileMenu();
});

mobileMenuOverlay.addEventListener('click', function() {
    closeMobileMenu();
});

function closeMobileMenu() {
    nav.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    closeMenuBtn.style.display = 'none'; // Chowamy X gdy menu jest zamknięte
    document.body.style.overflow = '';
}

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Sprawdź czy to urządzenie mobilne
    if (window.innerWidth <= 768) {
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '☰';
        mobileMenuBtn.setAttribute('aria-label', 'Otwórz menu');
        document.body.appendChild(mobileMenuBtn);

        const closeMenuBtn = document.createElement('button');
        closeMenuBtn.className = 'close-menu-btn';
        closeMenuBtn.innerHTML = '×';
        closeMenuBtn.setAttribute('aria-label', 'Zamknij menu');
        document.body.appendChild(closeMenuBtn);

        const mobileMenuOverlay = document.createElement('div');
        mobileMenuOverlay.className = 'mobile-menu-overlay';
        document.body.appendChild(mobileMenuOverlay);

        const nav = document.querySelector('nav');

        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.add('active');
            mobileMenuOverlay.classList.add('active');
            closeMenuBtn.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });

        closeMenuBtn.addEventListener('click', closeMobileMenu);
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);

        function closeMobileMenu() {
            nav.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            closeMenuBtn.style.display = 'none';
            document.body.style.overflow = '';
        }

        // Zamknij menu po kliknięciu linku
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }
});