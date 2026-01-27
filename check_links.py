import re
import urllib.request
import urllib.error
import os
from concurrent.futures import ThreadPoolExecutor

files_to_check = [
    "INFORMATION/DEFENSE/RESOURCES.md",
    "INFORMATION/STEP 1. Reconnaissance/RESOURCES.md",
    "INFORMATION/STEP 2. Weaponization/RESOURCES.md",
    "INFORMATION/STEP 3. Delivery/RESOURCES.md",
    "INFORMATION/STEP 4. Exploitation/RESOURCES.md",
    "INFORMATION/STEP 5. Installation/RESOURCES.md",
    "INFORMATION/STEP 6. Command and Control/RESOURCES.md",
    "INFORMATION/STEP 7. Actions on Objectives/RESOURCES.md"
]

def check_url(url, file_path, line_no):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=5) as response:
            if response.getcode() >= 400:
                return f"Broken: {url} (Status: {response.getcode()}) in {file_path}:{line_no}"
    except urllib.error.HTTPError as e:
        return f"Broken: {url} (Status: {e.code}) in {file_path}:{line_no}"
    except urllib.error.URLError as e:
        return f"Error: {url} ({e.reason}) in {file_path}:{line_no}"
    except Exception as e:
        return f"Error: {url} ({str(e)}) in {file_path}:{line_no}"
    return None

def process_file(file_path):
    issues = []
    if not os.path.exists(file_path):
        return [f"File not found: {file_path}"]

    with open(file_path, 'r') as f:
        lines = f.readlines()

    urls_to_check = []
    for i, line in enumerate(lines):
        # Markdown link pattern [text](url)
        matches = re.findall(r'\[([^\]]+)\]\((http[s]?://[^)]+)\)', line)
        for text, url in matches:
            urls_to_check.append((url, file_path, i + 1))

    with ThreadPoolExecutor(max_workers=10) as executor:
        futures = [executor.submit(check_url, url, fp, ln) for url, fp, ln in urls_to_check]
        for future in futures:
            result = future.result()
            if result:
                issues.append(result)

    return issues

all_issues = []
for file_path in files_to_check:
    print(f"Checking {file_path}...")
    all_issues.extend(process_file(file_path))

if all_issues:
    print("\nIssues found:")
    for issue in all_issues:
        print(issue)
else:
    print("\nNo broken links found.")
