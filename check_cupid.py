import urllib.request
import json
url = "https://api.github.com/search/repositories?q=CupidCr4wl"
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        data = json.loads(response.read().decode())
        if data['items']:
            repo = data['items'][0]
            print(f"Repo: {repo['full_name']}")
            print(f"Description: {repo.get('description')}")
            print(f"URL: {repo['html_url']}")
except Exception as e:
    print(f"Failed to fetch {url}: {e}")

url_phonia = "https://api.github.com/search/repositories?q=Phonia+osint"
try:
    req = urllib.request.Request(url_phonia, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        data = json.loads(response.read().decode())
        if data['items']:
            repo = data['items'][0]
            print(f"Repo: {repo['full_name']}")
            print(f"Description: {repo.get('description')}")
            print(f"URL: {repo['html_url']}")
except Exception as e:
    pass
