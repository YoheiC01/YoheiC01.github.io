// Publication list: reverse numbering (newest = highest number)
function updatePubCounters() {
    const pubList = document.querySelector('.pub-list');
    if (pubList) {
        const items = pubList.querySelectorAll('.pub-item');
        pubList.style.counterReset = `pub-counter ${items.length + 1}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updatePubCounters();

    // Fade-in on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.05 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
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
