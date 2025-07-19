
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
        const page = window.location.pathname.split('/').pop();
        let file = page || 'home.html';
        fetch(file)
            .then(res => res.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const newPage = doc.querySelector('.page.active');
                const newHeader = doc.querySelector('.page-header');
                const newFooter = doc.querySelector('footer');
                document.querySelector('.page').outerHTML = newPage.outerHTML;
                document.querySelector('.page-header').outerHTML = newHeader.outerHTML;
                document.querySelector('footer').outerHTML = newFooter.outerHTML;
                document.querySelectorAll('.nav-link').forEach(l => {
                    l.classList.remove('active');
                    if (l.getAttribute('href') === file) l.classList.add('active');
                });
            });

    });


    // spa.js - nowa wersja z animacjami
document.addEventListener('DOMContentLoaded', function() {
    // Obsługa przycisku ZOBACZ WIĘCEJ
    document.body.addEventListener('click', function(e) {
        if (e.target.classList.contains('action-button')){
            e.preventDefault();
            const link = document.querySelector('a[data-page="process"]');
            if (link) {
                // Animacja przejścia
                document.querySelector('.page.active').classList.add('page-exit');
                setTimeout(() => {
                    link.click();
                }, 500);
            }
        }
    });

    // Animowane przejścia między stronami
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) return; // Na mobile używamy standardowego ładowania
            
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            const targetPage = document.getElementById(pageId);
            
            if (!targetPage || targetPage.classList.contains('active')) return;
            
            // Animacja wyjścia
            const currentPage = document.querySelector('.page.active');
            currentPage.classList.add('page-exit');
            
            // Animacja wejścia
            setTimeout(() => {
                document.querySelectorAll('.page').forEach(page => {
                    page.classList.remove('active');
                    page.style.display = 'none';
                });
                
                targetPage.style.display = 'block';
                targetPage.classList.add('page-enter');
                
                setTimeout(() => {
                    targetPage.classList.add('active');
                    targetPage.classList.remove('page-enter');
                    
                    // Aktualizacja URL bez przeładowania
                    history.pushState(null, null, this.getAttribute('href'));
                    
                    // Aktualizacja aktywnych linków
                    document.querySelectorAll('.nav-link').forEach(navLink => {
                        navLink.classList.remove('active');
                    });
                    this.classList.add('active');
                }, 10);
            }, 500);
        });
    });

    // Obsługa przycisku wstecz/przód przeglądarki
    window.addEventListener('popstate', function() {
        const page = window.location.pathname.split('/').pop() || 'home.html';
        loadPage(page);
    });

    function loadPage(page) {
        fetch(page)
            .then(res => res.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const newContent = doc.querySelector('.page').outerHTML;
                document.querySelector('.page').outerHTML = newContent;
                
                // Ponowne zainicjowanie animacji
                document.querySelector('.page').classList.add('page-enter');
                setTimeout(() => {
                    document.querySelector('.page').classList.add('active');
                    document.querySelector('.page').classList.remove('page-enter');
                }, 10);
            });
    }
});
