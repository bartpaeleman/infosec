1. **Add new tools to `INFORMATION/STEP 1. Reconnaissance/RESOURCES.md`**:
   - Use `replace_with_git_merge_diff` to add:
     - `akca` (https://github.com/akha-security/akca) under "Scanners & Frameworks".
     - `jshound` (https://github.com/AmbitSecurity/jshound) under "Web & OSINT".
     - `footprint-osint` (https://github.com/BillyBobMcgee/footprint-osint) under "Web & OSINT".
     - `Phonia` (https://github.com/coredamage/phonia) under "Web & OSINT".
     - `CupidCr4wl` (https://github.com/OSINTI4L/cupidcr4wl) under "Web & OSINT".

2. **Add new tools to `INFORMATION/DEFENSE/RESOURCES.md`**:
   - Use `replace_with_git_merge_diff` to add:
     - `GearHound` (https://github.com/LiteshGhute/GearHound) under "Cybersecurity HomeLab".
     - `FlaskPS` (https://github.com/PayloadShield/FlaskPS) under "Application Security".
     - `soroban-security-scanner` (https://github.com/StellarFoundry/soroban-security-scanner) under "Application Security".

3. **Add new tools to `INFORMATION/STEP 6. Command and Control/RESOURCES.md`**:
   - Use `replace_with_git_merge_diff` to add `TornadoC2` (https://github.com/kamalx06/TornadoC2) under "Remote Access Tools (RAT) & C2 Frameworks".

4. **Add new tools to `INFORMATION/STEP 7. Actions on Objectives/RESOURCES.md`**:
   - Use `replace_with_git_merge_diff` to add `Tor` (https://termux.achik.us/tor-in-termux-installation-usage-basic-commands/) under "Tunneling".

5. **Remove dead link from `INFORMATION/STEP 1. Reconnaissance/RESOURCES.md`**:
   - Use `replace_with_git_merge_diff` to remove `ENScan_GO` and `gitleaks`.

6. **Remove dead link from `INFORMATION/STEP 4. Exploitation/RESOURCES.md`**:
   - Use `replace_with_git_merge_diff` to remove `Kraken`.

7. **Remove dead link from `INFORMATION/STEP 3. Delivery/RESOURCES.md`**:
   - Use `replace_with_git_merge_diff` to remove `ReelPhish`.

8. **Remove dead link from `INFORMATION/STEP 2. Weaponization/RESOURCES.md`**:
   - Use `replace_with_git_merge_diff` to remove `SharpShooter`.

9. **Remove dead links from `INFORMATION/STEP 6. Command and Control/RESOURCES.md`**:
   - Use `replace_with_git_merge_diff` to remove `pwndrop` and `Kubesploit`.

10. **Remove dead link from `INFORMATION/DEFENSE/RESOURCES.md`**:
    - Use `replace_with_git_merge_diff` to remove `OWASP CVE Lite CLI`.

11. **Remove dead link from `INFORMATION/STEP 7. Actions on Objectives/RESOURCES.md`**:
    - Use `replace_with_git_merge_diff` to remove `forkatz`.

12. **Update `index.html`**:
    - Use `replace_with_git_merge_diff` to manually insert the new tool `<li>` elements under the correct `<ul>` headers.
    - Use `replace_with_git_merge_diff` to remove the 9 dead links `<li>` entries.
    - Use `replace_with_git_merge_diff` to update the version number to `v2026.10.17`.

13. **Update `indexnl.html`**:
    - Use `replace_with_git_merge_diff` to manually insert the translated new tool `<li>` elements under the correct `<ul>` headers.
    - Use `replace_with_git_merge_diff` to remove the 9 dead links `<li>` entries.
    - Use `replace_with_git_merge_diff` to update the version number to `v2026.10.17`.

14. **Update `CHANGELOG.md`**:
    - Use `replace_with_git_merge_diff` to add a new entry `[17-10-2026]` noting the newly added tools and the removal of the dead links.

15. **Verify changes using Frontend Verification**:
    - Create, execute, and then explicitly delete a Playwright script (`verify_update.py`) to verify that the HTML updates are correct, including checking for the presence of the new tools and absence of dead links, and taking screenshots of the changes.

16. **Complete pre-commit steps**:
    - Complete pre-commit steps to ensure proper testing, verification, review, and reflection are done.

17. **Submit**:
    - Commit and submit changes with a descriptive message.
