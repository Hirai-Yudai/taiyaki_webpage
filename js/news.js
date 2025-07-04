document.addEventListener('DOMContentLoaded', function() {
    fetch('data/news.json')
        .then(res => res.json())
        .then(list => {
            const container = document.getElementById('news-container');
            list.forEach(item => {
                const section = document.createElement('section');
                section.className = 'news-item';
                section.innerHTML = `<h3>${item.title}</h3>` +
                                    `<p class="date">${item.date}</p>` +
                                    `<p>${item.content}</p>`;
                container.appendChild(section);
            });
        });
});
