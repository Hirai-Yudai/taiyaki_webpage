document.addEventListener('DOMContentLoaded', function() {
    fetch('data/works.json')
        .then(res => res.json())
        .then(list => {
            const container = document.getElementById('works-container');
            list.forEach(work => {
                const a = document.createElement('a');
                a.href = `works/${work.id}.html`;
                a.className = 'work-card';
                a.setAttribute('data-aos', 'fade-up');

                const img = document.createElement('img');
                img.src = work.thumbnail;
                img.loading = 'lazy';
                a.appendChild(img);

                const meta = document.createElement('div');
                meta.className = 'meta';
                meta.innerHTML = `<h3>${work.title}</h3><p class="date">${work.date.slice(0,7)}</p>`;
                a.appendChild(meta);

                container.appendChild(a);
            });
            if (window.AOS) AOS.init();
        });
});
