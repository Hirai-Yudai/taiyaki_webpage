document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.scroll-section');
    const options = { threshold: 0.6 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, options);
    sections.forEach(sec => observer.observe(sec));
});
