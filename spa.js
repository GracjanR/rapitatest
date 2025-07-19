
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
