import urllib.request
from bs4 import BeautifulSoup
import re

url = "https://termux.achik.us/"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        soup = BeautifulSoup(html, 'html.parser')

        for article in soup.find_all('article'):
            h2 = article.find('h2')
            p = article.find('p')
            link = article.find('a', href=True)
            if h2 and p and link:
                print(f"Tool: {h2.text.strip()}")
                print(f"Desc: {p.text.strip()}")
                print(f"Link: {link['href']}")
                print("-" * 20)

except Exception as e:
    print(f"Failed to fetch {url}: {e}")
