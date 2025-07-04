document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('nav');
    const ham = document.getElementById('hamburger');
    if (!nav || !ham) return;
    ham.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});
