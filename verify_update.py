from playwright.sync_api import sync_playwright
import os

def verify_update():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Verify index.html
        print("Verifying index.html...")
        page.goto("file:///app/index.html")

        # Check Version Number
        version = page.get_by_text("v2026.01.28")
        if version.is_visible():
            print("Version number found in index.html")
        else:
            print("Version number NOT found in index.html")

        # Open The Cyber Kill Chain -> Reconnaissance
        ckc = page.locator("summary").filter(has_text="The Cyber Kill Chain").first
        ckc.click()

        recon = page.locator("summary").filter(has_text="STEP 1. Reconnaissance").first
        recon.click()

        # Check D0rkerR3con
        dorker = page.get_by_role("link", name="D0rkerR3con Framework")
        if dorker.is_visible():
            print("D0rkerR3con Framework found in index.html")
        else:
            print("D0rkerR3con Framework NOT found in index.html")

        # Open Command and Control to check SpecterInsight removal
        c2 = page.locator("summary").filter(has_text="STEP 6. Command and Control").first
        c2.click()

        specter = page.get_by_role("link", name="SpecterInsight")
        if not specter.is_visible():
            print("SpecterInsight NOT found in index.html (Correct)")
        else:
            print("SpecterInsight found in index.html (Incorrect)")

        # Verify indexnl.html
        print("Verifying indexnl.html...")
        page.goto("file:///app/indexnl.html")

        # Check Version Number
        version_nl = page.get_by_text("v2026.01.28")
        if version_nl.is_visible():
            print("Version number found in indexnl.html")

        # Open Aanval -> The Cyber Kill Chain -> Reconnaissance
        ckc_nl = page.locator("summary").filter(has_text="De Cyber Kill Chain").first
        ckc_nl.click()

        recon_nl = page.locator("summary").filter(has_text="STAP 1. Verkenning").first
        recon_nl.click()

        dorker_nl = page.get_by_role("link", name="D0rkerR3con Framework")
        if dorker_nl.is_visible():
            print("D0rkerR3con Framework found in indexnl.html")

        # Open Command and Control
        c2_nl = page.locator("summary").filter(has_text="STAP 6. Command & Control").first
        c2_nl.click()

        specter_nl = page.get_by_role("link", name="SpecterInsight")
        if not specter_nl.is_visible():
            print("SpecterInsight NOT found in indexnl.html (Correct)")

        browser.close()

if __name__ == "__main__":
    verify_update()
