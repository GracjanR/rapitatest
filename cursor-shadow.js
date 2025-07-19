// cursor-shadow.js - cień podążający za kursorem na każdej stronie

document.addEventListener('DOMContentLoaded', function() {
    const shadow = document.createElement('div');
    shadow.style.position = 'fixed';
    shadow.style.pointerEvents = 'none';
    shadow.style.zIndex = '9999';
    shadow.style.width = '80px';
    shadow.style.height = '80px';
    shadow.style.borderRadius = '50%';
    shadow.style.boxShadow = '0 0 40px 20px rgba(30,144,255,0.38), 0 0 80px 10px rgba(0,0,0,0.22)'; // jeszcze mocniejszy cień
    shadow.style.transition = 'transform 0.08s cubic-bezier(.4,1.6,.6,1)';
    shadow.style.transform = 'translate(-100px,-100px)';
    shadow.style.opacity = '1';
    document.body.appendChild(shadow);
    document.addEventListener('mousemove', function(e) {
        shadow.style.transform = `translate(${e.clientX - 40}px, ${e.clientY - 40}px)`;
        shadow.style.opacity = '1';
    });
    document.addEventListener('mouseleave', function() {
        shadow.style.opacity = '0';
    });
    document.addEventListener('mouseenter', function() {
        shadow.style.opacity = '1';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Check if device supports hover (desktop)
    if (window.matchMedia("(hover: hover)").matches) {
        const shadow = document.createElement('div');
        shadow.style.position = 'fixed';
        shadow.style.pointerEvents = 'none';
        shadow.style.zIndex = '9999';
        shadow.style.width = '80px';
        shadow.style.height = '80px';
        shadow.style.borderRadius = '50%';
        shadow.style.boxShadow = '0 0 40px 20px rgba(30,144,255,0.38), 0 0 80px 10px rgba(0,0,0,0.22)';
        shadow.style.transition = 'transform 0.08s cubic-bezier(.4,1.6,.6,1)';
        shadow.style.transform = 'translate(-100px,-100px)';
        shadow.style.opacity = '1';
        document.body.appendChild(shadow);
        
        document.addEventListener('mousemove', function(e) {
            shadow.style.transform = `translate(${e.clientX - 40}px, ${e.clientY - 40}px)`;
            shadow.style.opacity = '1';
        });
        
        document.addEventListener('mouseleave', function() {
            shadow.style.opacity = '0';
        });
        
        document.addEventListener('mouseenter', function() {
            shadow.style.opacity = '1';
        });
    }
});


// cursor-shadow.js - tylko dla desktopów
document.addEventListener('DOMContentLoaded', function() {
    // Sprawdź czy to nie urządzenie dotykowe
    if (!('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
        const shadow = document.createElement('div');
        shadow.style.position = 'fixed';
        shadow.style.pointerEvents = 'none';
        shadow.style.zIndex = '9999';
        shadow.style.width = '80px';
        shadow.style.height = '80px';
        shadow.style.borderRadius = '50%';
        shadow.style.boxShadow = '0 0 40px 20px rgba(30,144,255,0.38), 0 0 80px 10px rgba(0,0,0,0.22)';
        shadow.style.transition = 'transform 0.08s cubic-bezier(.4,1.6,.6,1)';
        shadow.style.transform = 'translate(-100px,-100px)';
        shadow.style.opacity = '1';
        document.body.appendChild(shadow);
        
        document.addEventListener('mousemove', function(e) {
            shadow.style.transform = `translate(${e.clientX - 40}px, ${e.clientY - 40}px)`;
            shadow.style.opacity = '1';
        });
        
        document.addEventListener('mouseleave', function() {
            shadow.style.opacity = '0';
        });
        
        document.addEventListener('mouseenter', function() {
            shadow.style.opacity = '1';
        });
    }
});

// cursor-shadow.js - tylko dla desktopów
document.addEventListener('DOMContentLoaded', function() {
    // Sprawdzamy czy to desktop (szerokość > 768px i mysz)
    if (window.innerWidth > 768 && matchMedia('(pointer:fine)').matches) {
        const shadow = document.createElement('div');
        shadow.style.position = 'fixed';
        shadow.style.pointerEvents = 'none';
        shadow.style.zIndex = '9999';
        shadow.style.width = '80px';
        shadow.style.height = '80px';
        shadow.style.borderRadius = '50%';
        shadow.style.boxShadow = '0 0 40px 20px rgba(30,144,255,0.38), 0 0 80px 10px rgba(0,0,0,0.22)';
        shadow.style.transition = 'transform 0.08s cubic-bezier(.4,1.6,.6,1)';
        shadow.style.transform = 'translate(-100px,-100px)';
        shadow.style.opacity = '1';
        document.body.appendChild(shadow);
        
        document.addEventListener('mousemove', function(e) {
            shadow.style.transform = `translate(${e.clientX - 40}px, ${e.clientY - 40}px)`;
            shadow.style.opacity = '1';
        });
        
        document.addEventListener('mouseleave', function() {
            shadow.style.opacity = '0';
        });
        
        document.addEventListener('mouseenter', function() {
            shadow.style.opacity = '1';
        });
    }
});