# Actions on Objectives Resources

Actions on Objectives is the final phase where intruders take actions to achieve their original goals, such as data exfiltration or lateral movement.

## Exfiltration

*   **[SharpExfiltrate](https://github.com/Flangvik/SharpExfiltrate)**: Modular C# framework to exfiltrate loot over secure channels.
*   **[DNSExfiltrator](https://github.com/Arno0x/DNSExfiltrator)**: Data exfiltration over DNS request covert channel.
*   **[Egress-Assess](https://github.com/FortyNorthSecurity/Egress-Assess)**: Tool used to test egress data detection capabilities.
*   **[VeilTransfer](https://github.com/infosecn1nja/VeilTransfer)**: Data exfiltration utility designed to test and enhance detection capabilities.

## Credential Dumping

*   **[NetExec (nxc)](https://www.netexec.wiki/)**: The successor to CrackMapExec. The #1 tool for network pentesting (SMB/WinRM spraying, AD enumeration).
*   **[TruffleHog](https://trufflesecurity.com/trufflehog)**: The modern standard for finding secrets (API keys, creds) in code. Replaces gitGraber/Shhgit.
*   **[Hashcat](https://hashcat.net/hashcat/)**: The industry standard for password cracking (GPU-based).
*   **[John the Ripper](https://www.openwall.com/john/)**: Free and Open Source software, distributed primarily in a source code form.
*   **[Mimikatz](https://github.com/gentilkiwi/mimikatz)**: Allows users to view and save authentication credentials.
*   **[LaZagne](https://github.com/AlessandroZ/LaZagne)**: Retrieve lots of passwords stored on a local computer.
*   **[Dumpert](https://github.com/outflanknl/Dumpert)**: LSASS memory dumper using direct system calls and API unhooking.
*   **[CredBandit](https://github.com/xforcered/CredBandit)**: BOF to perform a complete in memory dump of a process.
*   **[CloneVault](https://github.com/mdsecactivebreach/CloneVault)**: Export and import entries from Windows Credential Manager.
*   **[SharpLAPS](https://github.com/swisskyrepo/SharpLAPS)**: Retrieve LAPS password from LDAP.
*   **[SharpDPAPI](https://github.com/GhostPack/SharpDPAPI)**: C# port of some DPAPI functionality from Mimikatz.
*   **[KeeThief](https://github.com/GhostPack/KeeThief)**: Extraction of KeePass 2.X key material from memory.
*   **[SafetyKatz](https://github.com/GhostPack/SafetyKatz)**: Combination of Mimikatz and .NET PE Loader.
*   **[forkatz](https://github.com/Barbarisch/forkatz)**: Credential dump using forshaw technique.
*   **[PPLKiller](https://github.com/RedCursorSecurityConsulting/PPLKiller)**: Tool to bypass LSA Protection.
*   **[AndrewSpecial](https://github.com/hoangprod/AndrewSpecial)**: Dumping lsass' memory stealthily.
*   **[Net-GPPPassword](https://github.com/outflanknl/Net-GPPPassword)**: .NET implementation of Get-GPPPassword.
*   **[SharpChromium](https://github.com/djhohnstein/SharpChromium)**: Retrieve Chromium data, such as cookies, history and saved logins.
*   **[Chlonium](https://github.com/rxwx/chlonium)**: Application designed for cloning Chromium Cookies.
*   **[SharpCloud](https://github.com/chrismaddalena/SharpCloud)**: Simple C# utility for checking for the existence of credential files.
*   **[pypykatz](https://github.com/skelsec/pypykatz)**: Mimikatz implementation in pure Python.
*   **[nanodump](https://github.com/helpsystems/nanodump)**: A Beacon Object File that creates a minidump of the LSASS process.
*   **[Koh](https://github.com/GhostPack/Koh)**: C# and BOF toolset to capture user credential material.
*   **[PPLBlade](https://github.com/tastypepperoni/PPLBlade)**: Protected Process Dumper Tool.
*   **[TrickDump](https://github.com/ricardojoserf/TrickDump)**: Dump lsass using only NTAPIS.
*   **[RemoteMonologue](https://github.com/3lp4tr0n/RemoteMonologue)**: Windows credential harvesting technique leveraging Interactive User RunAs key.

## Lateral Movement

*   **[Ligolo-ng](https://github.com/nicocha30/ligolo-ng)**: The new standard for pivoting/tunneling. Replaces clunky VPN/proxychains setups.
*   **[Responder](https://github.com/lgandx/Responder)**: Essential for poisoning LLMNR/NBT-NS protocols to capture hashes.
*   **[Liquid Snake](https://github.com/RiccardoAncarani/LiquidSnake)**: Fileless lateral movement using WMI Event Subscriptions.
*   **[PowerUpSQL](https://github.com/NetSPI/PowerUpSQL)**: PowerShell Toolkit for Attacking SQL Server.
*   **[SQLRecon](https://github.com/skahwah/SQLRecon)**: C# MS SQL toolkit designed for offensive reconnaissance.
*   **[SCShell](https://github.com/Mr-Un1k0d3r/SCShell)**: Fileless lateral movement tool that relies on ChangeServiceConfigA.
*   **[SharpRDP](https://github.com/0xthirteen/SharpRDP)**: RDP Console Application for Authenticated Command Execution.
*   **[MoveKit](https://github.com/0xthirteen/MoveKit)**: Extension of built in Cobalt Strike lateral movement.
*   **[SharpNoPSExec](https://github.com/juliourena/SharpNoPSExec)**: File less command execution for lateral movement.
*   **[impacket](https://github.com/SecureAuthCorp/impacket)**: Collection of Python classes for working with network protocols.
*   **[Farmer](https://github.com/mdsecactivebreach/Farmer)**: Project for collecting NetNTLM hashes.
*   **[CIMplant](https://github.com/FortyNorthSecurity/CIMplant)**: C# port of WMImplant.
*   **[PowerLessShell](https://github.com/Mr-Un1k0d3r/PowerLessShell)**: Rely on MSBuild.exe to remotely execute PowerShell scripts.
*   **[SharpGPOAbuse](https://github.com/FSecureLABS/SharpGPOAbuse)**: Take advantage of a user's edit rights on a Group Policy Object.
*   **[kerbrute](https://github.com/ropnop/kerbrute)**: Quickly bruteforce and enumerate valid Active Directory accounts.
*   **[mssqlproxy](https://github.com/blackarrowsec/mssqlproxy)**: Toolkit to perform lateral movement through Microsoft SQL Server.
*   **[Invoke-TheHash](https://github.com/Kevin-Robertson/Invoke-TheHash)**: PowerShell Pass The Hash Utils.
*   **[InveighZero](https://github.com/Kevin-Robertson/InveighZero)**: .NET IPv4/IPv6 machine-in-the-middle tool.
*   **[SharpSpray](https://github.com/jnqpblc/SharpSpray)**: Password spraying attack against all users of a domain.
*   **[CrackMapExec](https://github.com/byt3bl33d3r/CrackMapExec)**: A swiss army knife for pentesting networks.
*   **[SharpAllowedToAct](https://github.com/pkb1s/SharpAllowedToAct)**: C# implementation of a computer object takeover through RBCD.
*   **[SharpRDPHijack](https://github.com/bohops/SharpRDPHijack)**: RDP session hijack utility for disconnected sessions.
*   **[CheeseTools](https://github.com/klezVirus/CheeseTools)**: Tools based on MiscTool.
*   **[LatLoader](https://github.com/icyguider/LatLoader)**: Automated lateral movement with Havoc C2.
*   **[MalSCCM](https://github.com/nettitude/MalSCCM)**: Abuse local or remote SCCM servers.
*   **[Coercer](https://github.com/p0dalirius/Coercer)**: Coerce a Windows server to authenticate on an arbitrary machine.
*   **[orpheus](https://github.com/trustedsec/orpheus)**: Bypassing Kerberoast Detections.
*   **[goexec](https://github.com/FalconOpsLLC/goexec)**: Remote execution on Windows devices.
*   **[BitlockMove](https://github.com/rtecCyberSec/BitlockMove)**: Lateral Movement via Bitlocker DCOM interfaces & COM Hijacking.

## Tunneling

*   **[Chisel](https://github.com/jpillora/chisel)**: Fast TCP/UDP tunnel, transported over HTTP, secured via SSH.
*   **[frp](https://github.com/fatedier/frp)**: Fast reverse proxy.
*   **[SockTail](https://github.com/Yeeb1/SockTail)**: Joins a device to a Tailscale network and exposes a local SOCKS5 proxy.

## Network & Analysis
*   **[Wireshark](https://www.wireshark.org/)**: Network protocol analyzer.
*   **[Ettercap](https://www.ettercap-project.org/)**: Open-source network security tool for man-in-the-middle attacks.
*   **[Bettercap](https://www.bettercap.org/)**: The "Swiss Army knife" for network attacks and monitoring.
*   **[FoxyProxy](https://addons.mozilla.org/en-US/firefox/addon/foxyproxy-standard/)**: Advanced proxy management tool.
*   **[CyberChef](https://gchq.github.io/CyberChef/)**: The Cyber Swiss Army Knife - a web app for encryption, encoding, compression and data analysis.
