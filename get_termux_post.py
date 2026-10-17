from bs4 import BeautifulSoup
import urllib.request
import re

url_termux_phonia = "https://termux.achik.us/phonia-phone-number-information-osint-tool/"
req = urllib.request.Request(url_termux_phonia, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        soup = BeautifulSoup(html, 'html.parser')
        print("Phonia commands:")
        print(soup.get_text()[:500])
        # Find all code blocks
        for pre in soup.find_all('pre'):
            print(pre.get_text())
        for code in soup.find_all('code'):
            print(code.get_text())
except Exception as e:
    pass
print("---")
url_termux_cupid = "https://termux.achik.us/cupidcr4wl-in-termux-installation-usage-commands/"
req = urllib.request.Request(url_termux_cupid, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        soup = BeautifulSoup(html, 'html.parser')
        print("Cupid commands:")
        for code in soup.find_all('code'):
            print(code.get_text())
except Exception as e:
    pass
