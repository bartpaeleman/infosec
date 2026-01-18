#!/usr/bin/env python3
import sys
import socket
import urllib.request
import urllib.parse
import json
import subprocess
import os
import platform

def get_input_choice():
    print("\n--- Reconnaissance Tool (MacOS) ---")
    print("1. IP Address")
    print("2. Website / Domain")
    print("3. Company Name")
    print("4. Person Name")
    print("5. Exit")
    choice = input("Enter your choice (1-5): ").strip()
    return choice

def recon_ip(ip):
    report = []
    report.append(f"Reconnaissance Report for IP: {ip}")
    report.append("-" * 40)

    # GeoIP
    try:
        # Using ip-api.com (free for non-commercial use, rate limited)
        url = f"http://ip-api.com/json/{ip}"
        with urllib.request.urlopen(url, timeout=5) as response:
            data = json.loads(response.read().decode())
            if data['status'] == 'success':
                report.append(f"Country: {data.get('country')}")
                report.append(f"Region: {data.get('regionName')}")
                report.append(f"City: {data.get('city')}")
                report.append(f"ISP: {data.get('isp')}")
                report.append(f"Org: {data.get('org')}")
                report.append(f"Coordinates: {data.get('lat')}, {data.get('lon')}")
            else:
                report.append(f"GeoIP lookup failed: {data.get('message', 'Unknown error')}")
    except Exception as e:
        report.append(f"GeoIP Error: {str(e)}")

    # Reverse DNS
    try:
        host = socket.gethostbyaddr(ip)
        report.append(f"Reverse DNS: {host[0]}")
    except Exception as e:
        report.append(f"Reverse DNS Error: {str(e)}")

    return "\n".join(report)

def recon_domain(domain):
    report = []
    # Clean domain input
    if domain.startswith("http://") or domain.startswith("https://"):
        parsed = urllib.parse.urlparse(domain)
        domain = parsed.netloc

    report.append(f"Reconnaissance Report for Domain: {domain}")
    report.append("-" * 40)

    # Resolve IP
    try:
        ip = socket.gethostbyname(domain)
        report.append(f"IP Address: {ip}")
    except Exception as e:
        report.append(f"DNS Resolution Error: {str(e)}")
        return "\n".join(report) # Stop if can't resolve

    # HTTP Headers
    try:
        url = f"http://{domain}"
        req = urllib.request.Request(url, method="HEAD")
        # Fake User-Agent to avoid some blocks
        req.add_header('User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36')
        with urllib.request.urlopen(req, timeout=5) as response:
            report.append("\nHTTP Headers:")
            for k, v in response.headers.items():
                report.append(f"  {k}: {v}")
    except Exception as e:
        report.append(f"\nHTTP Headers Error: {str(e)}")

    return "\n".join(report)

def recon_company(company):
    report = []
    report.append(f"Reconnaissance Report for Company: {company}")
    report.append("-" * 40)
    report.append("Google Dorks (Copy and paste into browser):")

    # Simple Dork generation
    report.append(f"1. Public Documents: \"{company}\" filetype:pdf OR filetype:docx OR filetype:xlsx")
    report.append(f"2. LinkedIn Employees: site:linkedin.com/in/ \"{company}\"")
    report.append(f"3. Pastebin Leaks: site:pastebin.com \"{company}\"")
    report.append(f"4. StackOverflow References: site:stackoverflow.com \"{company}\"")
    report.append(f"5. Github Repositories: site:github.com \"{company}\"")

    return "\n".join(report)

def recon_person(name):
    report = []
    report.append(f"Reconnaissance Report for Person: {name}")
    report.append("-" * 40)

    # URL Encoding for links
    q_name = urllib.parse.quote(name)

    report.append("Social Media Search Dorks (Copy and paste into browser):")
    report.append(f"1. LinkedIn: site:linkedin.com \"{name}\"")
    report.append(f"2. Twitter/X: site:twitter.com \"{name}\" OR site:x.com \"{name}\"")
    report.append(f"3. Facebook: site:facebook.com \"{name}\"")
    report.append(f"4. Instagram: site:instagram.com \"{name}\"")
    report.append("-" * 20)

    report.append("Contact Info & Background Dorks:")
    report.append(f"5. Email/Phone: \"{name}\" AND (\"email\" OR \"@gmail.com\" OR \"phone\" OR \"contact\")")
    report.append(f"6. CV/Resume: \"{name}\" (cv OR resume OR curriculum vitae) filetype:pdf")
    report.append(f"7. General Info: \"{name}\" AND (location OR address OR history)")
    report.append("-" * 20)

    report.append("Direct Search Links (Click or Copy):")
    report.append(f"8. Google Search: https://www.google.com/search?q={q_name}")
    report.append(f"9. Google Images: https://www.google.com/search?tbm=isch&q={q_name}")
    report.append(f"10. Whitepages (US): https://www.whitepages.com/name/{q_name}")

    return "\n".join(report)

def output_report(report):
    print("\n--- Output Options ---")
    print("1. Display on Screen")
    print("2. Save to Text File")
    print("3. Deliver (Email)")
    choice = input("Enter your choice (1-3): ").strip()

    if choice == '1':
        print("\n" + report + "\n")
    elif choice == '2':
        filename = input("Enter filename (default: report.txt): ").strip() or "report.txt"
        try:
            with open(filename, "w") as f:
                f.write(report)
            print(f"Report saved to {os.path.abspath(filename)}")
        except Exception as e:
            print(f"Error saving file: {e}")
    elif choice == '3':
        subject = "Reconnaissance Report"
        # URL encode the body
        body = urllib.parse.quote(report)
        mailto = f"mailto:?subject={subject}&body={body}"

        if platform.system() == "Darwin": # macOS
            try:
                subprocess.run(["open", mailto])
                print("Opened default mail client with the report.")
            except Exception as e:
                print(f"Failed to open mail client: {e}")
        else:
            print("Delivery feature is optimized for macOS (uses 'open' command).")
            print("Here is the report instead:")
            print("\n" + report + "\n")

def main():
    while True:
        choice = get_input_choice()

        if choice == '1':
            target = input("Enter IP Address: ").strip()
            if target:
                report = recon_ip(target)
                output_report(report)
        elif choice == '2':
            target = input("Enter Website/Domain (e.g., example.com): ").strip()
            if target:
                report = recon_domain(target)
                output_report(report)
        elif choice == '3':
            target = input("Enter Company Name: ").strip()
            if target:
                report = recon_company(target)
                output_report(report)
        elif choice == '4':
            target = input("Enter Person Name: ").strip()
            if target:
                report = recon_person(target)
                output_report(report)
        elif choice == '5':
            print("Exiting...")
            break
        else:
            print("Invalid choice, please try again.")

if __name__ == "__main__":
    main()
