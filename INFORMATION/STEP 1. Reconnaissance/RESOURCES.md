# Reconnaissance Resources

Reconnaissance is the first phase of the Cyber Kill Chain, involving research, identification, and selection of targets.

## Tools

### Scanners & Frameworks
*   **[RustScan](https://github.com/RustScan/RustScan)**: The Modern Port Scanner. Find ports quickly (3 seconds at its fastest). Run scripts through our scripting engine (Python, Lua, Shell supported).
*   **[Amass](https://github.com/OWASP/Amass)**: In-depth Attack Surface Mapping and Asset Discovery.
*   **[Nmap](https://nmap.org/)**: The "Network Mapper", free and open source utility for network discovery and security auditing.
*   **[Masscan](https://github.com/robertdavidgraham/masscan)**: Internet-scale port scanner, transmitting 10 million packets per second.
*   **[Naabu](https://github.com/projectdiscovery/naabu)**: A fast port scanning tool written in Go that enumerates valid ports in a reliable manner.
*   **[OpenVAS](https://www.openvas.org/)**: Full-featured vulnerability scanner with extensive testing capabilities.
*   **[Nikto](https://cirt.net/Nikto2)**: Open Source web server scanner for over 6700 potentially dangerous files/programs.
*   **[Sn1per](https://github.com/1N3/Sn1per)**: Automated scanner for enumeration and vulnerability scanning.
*   **[Osmedeus](https://github.com/j3ssie/Osmedeus)**: Workflow engine for offensive security, running awesome tools for recon and vulnerability scanning.
*   **[D0rkerR3con Framework](https://github.com/blackhatethicalhacking/D0rkerR3con-Framework)**: Offensive Recon toolkit to discover exposed files, secrets, and launch weaponized Google Dorks.
*   **[Recon-ng](https://github.com/lanmaster53/recon-ng)**: Open Source Intelligence gathering tool aimed at reducing the time spent harvesting information from open sources.
*   **[Scanners-Box](https://github.com/We5ter/Scanners-Box)**: A powerful and open-source toolkit for hackers and security automation.
*   **[Reconness](https://github.com/reconness/reconness)**: ReconNess helps you to run and keep all your recon in the same place.
*   **[Lazyrecon](https://github.com/nahamsec/lazyrecon)**: Script written in Bash to automate tedious tasks of reconnaissance and information gathering.
*   **[reconFTW](https://github.com/six2dez/reconftw)**: A powerful automated reconnaissance tool designed for security researchers.
*   **[axiom](https://github.com/pry0cc/axiom)**: A distributed dynamic infrastructure framework for offensive security operations.
*   **[Trivy](https://github.com/aquasecurity/trivy)**: Comprehensive and versatile security scanner for vulnerabilities and misconfigurations.

### Domain & DNS
*   **[Subfinder](https://github.com/projectdiscovery/subfinder)**: Subdomain discovery tool that discovers valid subdomains for websites by using passive online sources.
*   **[Puredns](https://github.com/d3mondev/puredns)**: Fast, professional DNS resolver. Replaces Altdns/Massdns for many workflows.
*   **[Chaos](https://chaos.projectdiscovery.io/)**: Actively scans and maintains internet-wide assets' data.
*   **[Dnsprobe](https://github.com/projectdiscovery/dnsprobe)**: Tool built on top of retryabledns that allows you to perform multiple DNS queries.
*   **[Shuffledns](https://github.com/projectdiscovery/shuffledns)**: Wrapper around massdns that allows you to enumerate valid subdomains using active bruteforce.
*   **[Findomain](https://github.com/Edu4rdSHL/findomain)**: Offers dedicated monitoring service for target domains and alerts.
*   **[Dnsgen](https://github.com/ProjectAnte/dnsgen)**: Generates a combination of domain names from the provided input.
*   **[Gotator](https://github.com/Josue87/gotator)**: Powerful permutation generation for subdomains.
*   **[Massdns](https://github.com/blechschmidt/massdns)**: High-performance DNS stub resolver.
*   **[Sublert](https://github.com/yassineaboukir/sublert)**: Security and reconnaissance tool to leverage certificate transparency for monitoring new subdomains.
*   **[Subjack](https://github.com/haccer/subjack)**: Subdomain Takeover tool written in Go.
*   **[dnscan](https://github.com/rbsec/dnscan)**: A python wordlist-based DNS subdomain scanner.

### Web & OSINT
*   **[Wappalyzer](https://addons.mozilla.org/en-US/firefox/addon/wappalyzer/)**: Browser extension that uncovers the technologies used on websites.
*   **[BuiltWith](https://addons.mozilla.org/en-US/firefox/addon/builtwith/)**: Helps find out what technologies web pages are using.
*   **[WhatWeb](https://github.com/urbanadventurer/WhatWeb)**: Recognizes web technologies including CMS, blogging platforms, statistic/analytics packages, etc.
*   **[Gau](https://github.com/lc/gau)**: Fetch known URLs from AlienVault's Open Threat Exchange, the Wayback Machine, and Common Crawl.
*   **[Waybackurls](https://github.com/tomnomnom/waybackurls)**: Fetch known URLs from the Wayback Machine.
*   **[Meg](https://github.com/tomnomnom/meg)**: Tool for fetching lots of URLs without taking a toll on the servers.
*   **[Katana](https://github.com/projectdiscovery/katana)**: A next-generation crawling and spidering framework.
*   **[Feroxbuster](http://github.com/epi052/feroxbuster)**: A Rust-based content discovery tool. Faster, smarter, and more modern than Dirb/DirBuster.
*   **[Dirsearch](https://github.com/maurosoria/dirsearch)**: A simple command line tool designed to brute force directories and files in websites.
*   **[Ffuf](https://github.com/ffuf/ffuf)**: A fast web fuzzer written in Go.
*   **[httpx](https://www.python-httpx.org/)**: Fast and multi-purpose HTTP toolkit that allows running multiple probes.
*   **[EyeWitness](https://github.com/FortyNorthSecurity/EyeWitness)**: Designed to take screenshots of websites, provide some server header info, and identify default credentials.
*   **[Gowitness](https://github.com/sensepost/gowitness)**: Website screenshot utility written in Golang using Chrome Headless.
*   **[SpiderFoot](https://github.com/smicallef/spiderfoot)**: Open source intelligence (OSINT) automation tool.
*   **[Maltego](https://www.maltego.com/)**: OSINT and graphical link analysis tool for gathering and connecting information.
*   **[Shodan](https://www.shodan.io/)**: Search engine for Internet-connected devices.
*   **[Censys](https://censys.io/)**: Scans the most ports and houses the biggest certificate database in the world.
*   **[Jsluice](https://github.com/BishopFox/jsluice)**: Extract URLs, paths, secrets, and other interesting data from JavaScript source code.
*   **[Unfurl](https://github.com/tomnomnom/unfurl)**: Parse URLs and pull out content based on criteria.
*   **[Asnlookup](https://www.ultratools.com/tools/asnInfo)**: Displays information about an IP address's Autonomous System Number (ASN).
*   **[Virtual-host-discovery](https://github.com/jobertabma/virtual-host-discovery)**: Enumerates virtual hosts on a given IP address.
*   **[WitnessMe](https://github.com/byt3bl33d3r/WitnessMe)**: Web Inventory tool, takes screenshots of webpages using Pyppeteer.
*   **[BBOT](https://github.com/blacklanternsecurity/bbot)**: Recursive internet scanner designed to be faster and more reliable.
*   **[ENScan_GO](https://github.com/wgpsec/ENScan_GO)**: Tool based on major enterprise information APIs to solve problems in collecting domestic enterprise information (ICP, APP, WeChat, etc.).
*   **[dismap](https://github.com/zhzyker/dismap)**: Asset discovery and identification tool for rapid web fingerprint recognition.

### Cloud & Git
*   **[gitGraber](https://github.com/hisxo/gitGraber)**: Monitor GitHub to search and find sensitive data in real time.
*   **[Shhgit](https://github.com/eth0izzle/shhgit)**: Finds secrets and sensitive files across GitHub code and Gists in real-time.
*   **[gitleaks](https://github.com/zricethezav/gitleaks)**: SAST tool for detecting hardcoded secrets in git repos.
*   **[cloud_enum](https://github.com/initstring/cloud_enum)**: Multi-cloud OSINT tool.
*   **[S3Scanner](https://github.com/sa7mon/S3Scanner)**: Scan for open S3 buckets and dump the contents.
*   **[Gato (Github Attack TOolkit)](https://github.com/praetorian-inc/gato)**: Enumeration and attack tool for GitHub organizations.
*   **[apk2url](https://github.com/n0mi1k/apk2url)**: OSINT tool to extract IP and URL endpoints from APKs.
*   **[Checkov](https://github.com/bridgecrewio/checkov)**: Static analysis tool for Infrastructure as Code (IaC) security and compliance.

### Social Media
*   **[buster](https://github.com/sham00n/buster)**: An advanced tool for email reconnaissance.
*   **[linkedin2username](https://github.com/initstring/linkedin2username)**: Generate username lists for companies on LinkedIn.
*   **[LinkedInt](https://github.com/vysecurity/LinkedInt)**: LinkedIn Recon Tool.
