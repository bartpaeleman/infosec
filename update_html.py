from bs4 import BeautifulSoup
import glob

html_files = glob.glob("*.html")
dead_links = [
    "https://github.com/wgpsec/ENScan_GO",
    "https://github.com/mandiant/ReelPhish",
    "https://github.com/jasonxtn/Kraken",
    "https://github.com/mdsecactivebreach/SharpShooter",
    "https://github.com/kgretzky/pwndrop",
    "https://github.com/OWASP/cve-lite-cli",
    "https://github.com/cyberark/kubesploit",
    "https://github.com/zricethezav/gitleaks",
    "https://github.com/Barbarisch/forkatz"
]

print("Ready to process.")
