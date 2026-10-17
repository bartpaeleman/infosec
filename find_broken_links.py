import urllib.request
import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

links = re.findall(r'href="(http[^"]+)"', content)
broken = []

import concurrent.futures

def check_link(url):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        urllib.request.urlopen(req, timeout=5)
        return (url, True)
    except urllib.error.HTTPError as e:
        if e.code == 404 or e.code == 410 or e.code == 500:
            return (url, False)
        return (url, True) # Treat 403, etc as valid for now
    except Exception as e:
        return (url, False)

with concurrent.futures.ThreadPoolExecutor(max_workers=20) as executor:
    results = executor.map(check_link, set(links))

for url, is_valid in results:
    if not is_valid:
        print(f"Broken: {url}")
