// Publication numbering (newest = highest) is seeded by index.html via an
// inline counter-reset, so the list is numbered correctly without scripting.

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in');

    // CSS hides these only under .js, so anything that stops the observer from
    // running has to reveal them again or the page reads as blank.
    if (!('IntersectionObserver' in window)) {
        sections.forEach(el => el.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                observer.unobserve(entry.target);
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.05 });

    sections.forEach(el => observer.observe(el));
});

// Mobile menu toggle
function toggleMenu() {
    document.getElementById('nav-links').classList.toggle('open');
}

// Close menu on link click (mobile)
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('nav-links').classList.remove('open');
    });
});

// Reset menu on resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 640) {
        document.getElementById('nav-links').classList.remove('open');
    }
});

// Highlights lightbox (highlights.html only — elements are absent elsewhere)
(() => {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    const lightboxImg = document.getElementById('lightbox-img');

    function open(frame) {
        lightboxImg.src = frame.dataset.img;
        lightboxImg.alt = frame.dataset.alt || '';
        lightbox.classList.add('open');
    }

    function close() {
        lightbox.classList.remove('open');
        // Wait for the fade/scale-out to finish before dropping the image,
        // so it doesn't just vanish mid-transition.
        setTimeout(() => {
            if (!lightbox.classList.contains('open')) lightboxImg.src = '';
        }, 200);
    }

    document.querySelectorAll('.gallery-frame').forEach(frame => {
        frame.addEventListener('click', () => open(frame));
    });
    lightbox.addEventListener('click', close);
    document.getElementById('lightbox-close').addEventListener('click', (e) => {
        e.stopPropagation();
        close();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('open')) close();
    });
})();
