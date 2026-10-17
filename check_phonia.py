import urllib.request
import re

url_termux_phonia = "https://termux.achik.us/phonia-phone-number-information-osint-tool/"
try:
    req = urllib.request.Request(url_termux_phonia, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        links = re.findall(r'href="(https://github.com/[^"]+)"', html)
        print(f"Phonia links: {links}")
except Exception as e:
    print(f"Error: {e}")

url_termux_cupid = "https://termux.achik.us/cupidcr4wl-in-termux-installation-usage-commands/"
try:
    req = urllib.request.Request(url_termux_cupid, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        links = re.findall(r'href="(https://github.com/[^"]+)"', html)
        print(f"Cupid links: {links}")
except Exception as e:
    print(f"Error: {e}")
