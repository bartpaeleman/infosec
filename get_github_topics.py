import urllib.request
import json
import sys

repos = [
    "LiteshGhute/GearHound",
    "PayloadShield/FlaskPS",
    "kamalx06/TornadoC2",
    "AmbitSecurity/jshound",
    "BillyBobMcgee/footprint-osint",
    "StellarFoundry/soroban-security-scanner",
    "akha-security/akca"
]

for repo in repos:
    url = f"https://api.github.com/repos/{repo}"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            print(f"Repo: {repo}")
            print(f"Description: {data.get('description')}")
            print(f"Topics: {data.get('topics')}")
            print("-" * 20)
    except Exception as e:
        print(f"Failed to fetch {repo}: {e}")
