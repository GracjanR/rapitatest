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

// Obsługa nawigacji
document.addEventListener('DOMContentLoaded', function() {
    // Obsługa kliknięć w linki nawigacyjne
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');
            showPageAnimated(targetPage);
            
            // Aktualizacja aktywnych linków
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Aktualizacja URL bez przeładowania strony
            history.pushState(null, null, this.getAttribute('href'));
        });
    });

    // Obsługa przycisku ZOBACZ WIĘCEJ
    document.body.addEventListener('click', function(e) {
        if (e.target.classList.contains('action-button')) {
            e.preventDefault();
            const link = document.querySelector('a[data-page="process"]');
            if (link) link.click();
        }
    });

    // Obsługa przycisku wstecz/przód przeglądarki
    window.addEventListener('popstate', function() {
        const page = window.location.pathname.split('/').pop().replace('.html', '') || 'home';
        showPageAnimated(page);
        
        // Aktualizacja aktywnych linków
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === page) {
                link.classList.add('active');
            }
        });
    });

    // Obsługa formularza kontaktowego
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Dziękuję za wiadomość! Odpowiem najszybciej jak to możliwe.');
            this.reset();
        });
    }

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
    
    function toggleMobileMenu() {
        nav.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        closeMenuBtn.style.display = nav.classList.contains('active') ? 'flex' : 'none';
    }

    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    closeMenuBtn.addEventListener('click', toggleMobileMenu);
    mobileMenuOverlay.addEventListener('click', toggleMobileMenu);

    // Close menu when a nav link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                toggleMobileMenu();
            }
        });
    });

    // Hide mobile menu on desktop when resizing window
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && nav.classList.contains('active')) {
            toggleMobileMenu();
        }
    });

    // Ustawianie aktualnego roku w stopce
    var yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
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