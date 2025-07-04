document.addEventListener('DOMContentLoaded', function() {
    // Load latest 5 news
    fetch('data/news.json')
        .then(res => res.json())
        .then(list => {
            const ul = document.getElementById('top-news');
            list.slice(0,5).forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `<span class="date">${item.date}</span> <span class="title">${item.title}</span>`;
                ul.appendChild(li);
            });
        });

    // Load latest 10 works and build slider
    fetch('data/works.json')
        .then(res => res.json())
        .then(list => {
            const container = document.getElementById('top-works');
            const top = list.slice(0, 10);
            const items = top.concat(top); // duplicate for seamless loop
            const top = list.slice(0,10);
            const items = top.concat(top); // duplicate for smooth loop
            items.forEach(work => {
                const a = document.createElement('a');
                a.href = `works/${work.id}.html`;
                a.className = 'work-card';

                const img = document.createElement('img');
                img.src = work.thumbnail;
                img.loading = 'lazy';
                a.appendChild(img);

                const p = document.createElement('p');
                p.textContent = work.title;
                a.appendChild(p);

                container.appendChild(a);
            });
            container.style.setProperty('--item-count', items.length);
        });
});
