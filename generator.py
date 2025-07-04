import json
import os

TEMPLATE_PATH = 'template.html'
DATA_PATH = 'data/works.json'
OUTPUT_DIR = 'works'

os.makedirs(OUTPUT_DIR, exist_ok=True)

with open(TEMPLATE_PATH, encoding='utf-8') as f:
    template = f.read()

with open(DATA_PATH, encoding='utf-8') as f:
    works = json.load(f)

for work in works:
    html = template.format(
        title=work['title'],
        date=work['date'],
        tags=', '.join(work.get('tags', [])),
        image=work['image'],
        description=work['description']
    )
    out_path = os.path.join(OUTPUT_DIR, f"{work['id']}.html")
    with open(out_path, 'w', encoding='utf-8') as out:
        out.write(html)
print(f"Generated {len(works)} pages in '{OUTPUT_DIR}' directory.")
