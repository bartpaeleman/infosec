import urllib.request
import re
import json

urls_to_check = [
    "https://github.com/akha-security/akca",
    "https://github.com/LiteshGhute/GearHound",
    "https://github.com/PayloadShield/FlaskPS",
    "https://github.com/kamalx06/TornadoC2",
    "https://github.com/AmbitSecurity/jshound",
    "https://github.com/BillyBobMcgee/footprint-osint",
    "https://github.com/StellarFoundry/soroban-security-scanner"
]

def check_link(url):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        urllib.request.urlopen(req, timeout=5)
        return True
    except Exception as e:
        return False

for url in urls_to_check:
    is_valid = check_link(url)
    print(f"{url}: {'Valid' if is_valid else 'Invalid'}")
