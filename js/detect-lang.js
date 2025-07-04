document.addEventListener('DOMContentLoaded', function() {
    const target = document.getElementById('artist-name');
    if (!target) return;
    const lang = navigator.language.startsWith('ja') ? 'ja' : 'en';
    const name = lang === 'ja' ? '四葉はる' : 'Yotsuba Haru';
    target.innerHTML = '';
    name.split('').forEach((ch, idx) => {
        const span = document.createElement('span');
        span.textContent = ch;
        span.className = 'char';
        span.style.animationDelay = (idx * 0.1) + 's';
        target.appendChild(span);
    });
});
