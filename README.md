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
