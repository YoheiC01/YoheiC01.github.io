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

// Sticky nav border on scroll
window.addEventListener('scroll', function() {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 10);
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
