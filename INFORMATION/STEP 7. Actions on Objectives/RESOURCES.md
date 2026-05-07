# Actions on Objectives Resources

Actions on Objectives is the final phase where intruders take actions to achieve their original goals, such as data exfiltration or lateral movement.

## Exfiltration

*   **[SharpExfiltrate](https://github.com/Flangvik/SharpExfiltrate)** <span class="badge badge-opensource">Open Source</span>: Modular C# framework to exfiltrate loot over secure channels.
*   **[DNSExfiltrator](https://github.com/Arno0x/DNSExfiltrator)** <span class="badge badge-opensource">Open Source</span>: Data exfiltration over DNS request covert channel.
*   **[Egress-Assess](https://github.com/FortyNorthSecurity/Egress-Assess)** <span class="badge badge-opensource">Open Source</span>: Tool used to test egress data detection capabilities.
*   **[VeilTransfer](https://github.com/infosecn1nja/VeilTransfer)** <span class="badge badge-opensource">Open Source</span>: Data exfiltration utility designed to test and enhance detection capabilities.

## Credential Dumping

*   **[NetExec (nxc)](https://www.netexec.wiki/)** <span class="badge badge-free">Free</span>: The successor to CrackMapExec. The #1 tool for network pentesting (SMB/WinRM spraying, AD enumeration).
*   **[TruffleHog](https://trufflesecurity.com/trufflehog)** <span class="badge badge-free">Free</span>: The modern standard for finding secrets (API keys, creds) in code. Replaces gitGraber/Shhgit.
*   **[Hashcat](https://hashcat.net/hashcat/)** <span class="badge badge-free">Free</span>: The industry standard for password cracking (GPU-based).
*   **[John the Ripper](https://www.openwall.com/john/)** <span class="badge badge-free">Free</span>: Free and Open Source software, distributed primarily in a source code form.
*   **[Mimikatz](https://github.com/gentilkiwi/mimikatz)** <span class="badge badge-opensource">Open Source</span>: Allows users to view and save authentication credentials.
*   **[LaZagne](https://github.com/AlessandroZ/LaZagne)** <span class="badge badge-opensource">Open Source</span>: Retrieve lots of passwords stored on a local computer.
*   **[Dumpert](https://github.com/outflanknl/Dumpert)** <span class="badge badge-opensource">Open Source</span>: LSASS memory dumper using direct system calls and API unhooking.
*   **[CredBandit](https://github.com/xforcered/CredBandit)** <span class="badge badge-opensource">Open Source</span>: BOF to perform a complete in memory dump of a process.
*   **[CloneVault](https://github.com/mdsecactivebreach/CloneVault)** <span class="badge badge-opensource">Open Source</span>: Export and import entries from Windows Credential Manager.
*   **[SharpLAPS](https://github.com/swisskyrepo/SharpLAPS)** <span class="badge badge-opensource">Open Source</span>: Retrieve LAPS password from LDAP.
*   **[SharpDPAPI](https://github.com/GhostPack/SharpDPAPI)** <span class="badge badge-opensource">Open Source</span>: C# port of some DPAPI functionality from Mimikatz.
*   **[KeeThief](https://github.com/GhostPack/KeeThief)** <span class="badge badge-opensource">Open Source</span>: Extraction of KeePass 2.X key material from memory.
*   **[SafetyKatz](https://github.com/GhostPack/SafetyKatz)** <span class="badge badge-opensource">Open Source</span>: Combination of Mimikatz and .NET PE Loader.
*   **[forkatz](https://github.com/Barbarisch/forkatz)** <span class="badge badge-opensource">Open Source</span>: Credential dump using forshaw technique.
*   **[PPLKiller](https://github.com/RedCursorSecurityConsulting/PPLKiller)** <span class="badge badge-opensource">Open Source</span>: Tool to bypass LSA Protection.
*   **[AndrewSpecial](https://github.com/hoangprod/AndrewSpecial)** <span class="badge badge-opensource">Open Source</span>: Dumping lsass' memory stealthily.
*   **[Net-GPPPassword](https://github.com/outflanknl/Net-GPPPassword)** <span class="badge badge-opensource">Open Source</span>: .NET implementation of Get-GPPPassword.
*   **[SharpChromium](https://github.com/djhohnstein/SharpChromium)** <span class="badge badge-opensource">Open Source</span>: Retrieve Chromium data, such as cookies, history and saved logins.
*   **[Chlonium](https://github.com/rxwx/chlonium)** <span class="badge badge-opensource">Open Source</span>: Application designed for cloning Chromium Cookies.
*   **[SharpCloud](https://github.com/chrismaddalena/SharpCloud)** <span class="badge badge-opensource">Open Source</span>: Simple C# utility for checking for the existence of credential files.
*   **[pypykatz](https://github.com/skelsec/pypykatz)** <span class="badge badge-opensource">Open Source</span>: Mimikatz implementation in pure Python.
*   **[nanodump](https://github.com/helpsystems/nanodump)** <span class="badge badge-opensource">Open Source</span>: A Beacon Object File that creates a minidump of the LSASS process.
*   **[Koh](https://github.com/GhostPack/Koh)** <span class="badge badge-opensource">Open Source</span>: C# and BOF toolset to capture user credential material.
*   **[PPLBlade](https://github.com/tastypepperoni/PPLBlade)** <span class="badge badge-opensource">Open Source</span>: Protected Process Dumper Tool.
*   **[TrickDump](https://github.com/ricardojoserf/TrickDump)** <span class="badge badge-opensource">Open Source</span>: Dump lsass using only NTAPIS.
*   **[RemoteMonologue](https://github.com/3lp4tr0n/RemoteMonologue)** <span class="badge badge-opensource">Open Source</span>: Windows credential harvesting technique leveraging Interactive User RunAs key.
*   **[Cain and Abel](https://www.techspot.com/downloads/2416-cain-abel.html)** <span class="badge badge-free">Free</span>: Password recovery tool for Windows.
*   **[RainbowCrack](http://project-rainbowcrack.com/)** <span class="badge badge-free">Free</span>: Hash cracker using rainbow tables.
*   **[THC Hydra](https://sourceforge.net/projects/thc-hydra.mirror/)** <span class="badge badge-opensource">Open Source</span>: Parallelized network login cracker.
*   **[L0phtCrack](https://l0phtcrack.gitlab.io/)** <span class="badge badge-opensource">Open Source</span>: Password auditing and recovery tool.

## Lateral Movement

*   **[Ligolo-ng](https://github.com/nicocha30/ligolo-ng)** <span class="badge badge-opensource">Open Source</span>: The new standard for pivoting/tunneling. Replaces clunky VPN/proxychains setups.
*   **[Responder](https://github.com/lgandx/Responder)** <span class="badge badge-opensource">Open Source</span>: Essential for poisoning LLMNR/NBT-NS protocols to capture hashes.
*   **[Liquid Snake](https://github.com/RiccardoAncarani/LiquidSnake)** <span class="badge badge-opensource">Open Source</span>: Fileless lateral movement using WMI Event Subscriptions.
*   **[PowerUpSQL](https://github.com/NetSPI/PowerUpSQL)** <span class="badge badge-opensource">Open Source</span>: PowerShell Toolkit for Attacking SQL Server.
*   **[SQLRecon](https://github.com/skahwah/SQLRecon)** <span class="badge badge-opensource">Open Source</span>: C# MS SQL toolkit designed for offensive reconnaissance.
*   **[SCShell](https://github.com/Mr-Un1k0d3r/SCShell)** <span class="badge badge-opensource">Open Source</span>: Fileless lateral movement tool that relies on ChangeServiceConfigA.
*   **[SharpRDP](https://github.com/0xthirteen/SharpRDP)** <span class="badge badge-opensource">Open Source</span>: RDP Console Application for Authenticated Command Execution.
*   **[MoveKit](https://github.com/0xthirteen/MoveKit)** <span class="badge badge-opensource">Open Source</span>: Extension of built in Cobalt Strike lateral movement.
*   **[SharpNoPSExec](https://github.com/juliourena/SharpNoPSExec)** <span class="badge badge-opensource">Open Source</span>: File less command execution for lateral movement.
*   **[impacket](https://github.com/SecureAuthCorp/impacket)** <span class="badge badge-opensource">Open Source</span>: Collection of Python classes for working with network protocols.
*   **[Farmer](https://github.com/mdsecactivebreach/Farmer)** <span class="badge badge-opensource">Open Source</span>: Project for collecting NetNTLM hashes.
*   **[CIMplant](https://github.com/FortyNorthSecurity/CIMplant)** <span class="badge badge-opensource">Open Source</span>: C# port of WMImplant.
*   **[PowerLessShell](https://github.com/Mr-Un1k0d3r/PowerLessShell)** <span class="badge badge-opensource">Open Source</span>: Rely on MSBuild.exe to remotely execute PowerShell scripts.
*   **[SharpGPOAbuse](https://github.com/FSecureLABS/SharpGPOAbuse)** <span class="badge badge-opensource">Open Source</span>: Take advantage of a user's edit rights on a Group Policy Object.
*   **[kerbrute](https://github.com/ropnop/kerbrute)** <span class="badge badge-opensource">Open Source</span>: Quickly bruteforce and enumerate valid Active Directory accounts.
*   **[mssqlproxy](https://github.com/blackarrowsec/mssqlproxy)** <span class="badge badge-opensource">Open Source</span>: Toolkit to perform lateral movement through Microsoft SQL Server.
*   **[Invoke-TheHash](https://github.com/Kevin-Robertson/Invoke-TheHash)** <span class="badge badge-opensource">Open Source</span>: PowerShell Pass The Hash Utils.
*   **[InveighZero](https://github.com/Kevin-Robertson/InveighZero)** <span class="badge badge-opensource">Open Source</span>: .NET IPv4/IPv6 machine-in-the-middle tool.
*   **[SharpSpray](https://github.com/jnqpblc/SharpSpray)** <span class="badge badge-opensource">Open Source</span>: Password spraying attack against all users of a domain.
*   **[CrackMapExec](https://github.com/byt3bl33d3r/CrackMapExec)** <span class="badge badge-opensource">Open Source</span>: A swiss army knife for pentesting networks.
*   **[SharpAllowedToAct](https://github.com/pkb1s/SharpAllowedToAct)** <span class="badge badge-opensource">Open Source</span>: C# implementation of a computer object takeover through RBCD.
*   **[SharpRDPHijack](https://github.com/bohops/SharpRDPHijack)** <span class="badge badge-opensource">Open Source</span>: RDP session hijack utility for disconnected sessions.
*   **[CheeseTools](https://github.com/klezVirus/CheeseTools)** <span class="badge badge-opensource">Open Source</span>: Tools based on MiscTool.
*   **[LatLoader](https://github.com/icyguider/LatLoader)** <span class="badge badge-opensource">Open Source</span>: Automated lateral movement with Havoc C2.
*   **[MalSCCM](https://github.com/nettitude/MalSCCM)** <span class="badge badge-opensource">Open Source</span>: Abuse local or remote SCCM servers.
*   **[Coercer](https://github.com/p0dalirius/Coercer)** <span class="badge badge-opensource">Open Source</span>: Coerce a Windows server to authenticate on an arbitrary machine.
*   **[orpheus](https://github.com/trustedsec/orpheus)** <span class="badge badge-opensource">Open Source</span>: Bypassing Kerberoast Detections.
*   **[goexec](https://github.com/FalconOpsLLC/goexec)** <span class="badge badge-opensource">Open Source</span>: Remote execution on Windows devices.
*   **[BitlockMove](https://github.com/rtecCyberSec/BitlockMove)** <span class="badge badge-opensource">Open Source</span>: Lateral Movement via Bitlocker DCOM interfaces & COM Hijacking.

## Tunneling

*   **[Chisel](https://github.com/jpillora/chisel)** <span class="badge badge-opensource">Open Source</span>: Fast TCP/UDP tunnel, transported over HTTP, secured via SSH.
*   **[frp](https://github.com/fatedier/frp)** <span class="badge badge-opensource">Open Source</span>: Fast reverse proxy.
*   **[SockTail](https://github.com/Yeeb1/SockTail)** <span class="badge badge-opensource">Open Source</span>: Joins a device to a Tailscale network and exposes a local SOCKS5 proxy.

## Network & Analysis
*   **[Wireshark](https://www.wireshark.org/)** <span class="badge badge-free">Free</span>: Network protocol analyzer.
*   **[Ettercap](https://www.ettercap-project.org/)** <span class="badge badge-free">Free</span>: Open-source network security tool for man-in-the-middle attacks.
*   **[Bettercap](https://www.bettercap.org/)** <span class="badge badge-free">Free</span>: The "Swiss Army knife" for network attacks and monitoring.
*   **[FoxyProxy](https://addons.mozilla.org/en-US/firefox/addon/foxyproxy-standard/)** <span class="badge badge-free">Free</span>: Advanced proxy management tool.
*   **[CyberChef](https://gchq.github.io/CyberChef/)** <span class="badge badge-opensource">Open Source</span>: The Cyber Swiss Army Knife - a web app for encryption, encoding, compression and data analysis.
*   **[tcpdump](https://www.tcpdump.org/)** <span class="badge badge-opensource">Open Source</span>: Command-line network packet analyzer.
*   **[Snort](https://www.snort.org/)** <span class="badge badge-opensource">Open Source</span>: Intrusion detection and prevention system.
*   **[Ngrep](https://github.com/jpr5/ngrep)** <span class="badge badge-opensource">Open Source</span>: Network packet analyzer that uses grep-like patterns.
*   **[NetworkMiner](https://www.netresec.com/?page=NetworkMiner)** <span class="badge badge-opensource">Open Source</span>: Network forensic analysis tool.
*   **[Hping3](https://www.kali.org/tools/hping3/)** <span class="badge badge-opensource">Open Source</span>: Command-line packet crafting and analysis tool.
*   **[Nemesis](https://github.com/libnet/nemesis)** <span class="badge badge-opensource">Open Source</span>: Packet crafting and injection tool.
