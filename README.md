# Yotsuba Haru Portfolio Site

This repository contains a static portfolio site for the illustrator **Yotsuba Haru**.  The pages are built with HTML, CSS and JavaScript.  Artwork data is stored in `data/works.json` and each detailed page can be generated automatically.

## Generating work pages

Install Python 3 and run:

```bash
python3 generator.py
```

The command reads `data/works.json` and creates HTML files in the `works/` directory.

Image files used in the demo (e.g. `images/sample1.jpg`) are not included in the
repository. Add your own images with matching file names or adjust the paths in
`data/works.json` and `index.html`.

## Updating news

News entries are stored in `data/news.json`. The `news.html` page reads this file via JavaScript and lists each item. Edit the JSON to add or remove announcements.

## About page

The `about.html` file contains a brief profile of the artist. Feel free to edit the text or add images as needed.

## Index page

`index.html` shows the latest news and a scrolling preview of works. The
JavaScript in `js/index.js` loads up to five items from `data/news.json` and ten
items from `data/works.json`. After editing these files, run `python3
generator.py` to regenerate the detail pages.
