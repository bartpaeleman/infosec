# Defense Resources

Defensive strategies, frameworks, and tools are essential for the Blue Team to detect, prevent, and respond to cyber threats.

## Cybersecurity Frameworks

*   **[NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)**: A set of guidelines for private sector companies to follow to be better prepared in identifying, detecting, and responding to cyber attacks. ([Resources Library](https://github.com/gabrielcurrie/nist-cybersecurity-library), [NIST CSF 2.0](https://github.com/murf1/NIST-CSF-2.0))
*   **[CIS Controls](https://www.cisecurity.org/controls)**: Prioritized set of actions to protect your organization and data from known cyber attack vectors. ([Assessment Tool](https://github.com/martinsohn/CIS-Controls))
*   **[NIST SP 800-53](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final)**: Security and Privacy Controls for Information Systems and Organizations. ([Machine Readable Data](https://github.com/GovReady/nist-sp-800-53-r5-data))
*   **[PCI DSS](https://www.pcisecuritystandards.org/)**: Payment Card Industry Data Security Standard for organizations that handle branded credit cards.
*   **[SOC 2](https://www.aicpa.org/topic/audit-assurance/audit-and-assurance-greater-than-soc-2)**: Service Organization Control 2 - Trust Services Criteria for Service Organizations.
*   **[COBIT](https://www.isaca.org/resources/cobit)**: Control Objectives for Information and Related Technologies, a framework for IT management and governance. ([Auditing COBIT 2019](https://github.com/Lucho-A/Auditing-COBIT-2019))
*   **[ISO 27001/27002 Toolkit](https://github.com/PehanIn/ISO-27001-2022-Toolkit)**: A repository containing a comprehensive toolkit designed to help organizations implement the ISO 27001:2022 Information Security Management System (ISMS).
*   **[ISF SOGP](https://www.securityforum.org/solutions-and-insights/standard-of-good-practice-for-information-security/)**: The ISF Standard of Good Practice for Information Security (SOGP) is the leading authority on information security.

## Threat Modeling Frameworks

*   **[MITRE ATT&CK](https://attack.mitre.org/)**: A globally-accessible knowledge base of adversary tactics and techniques based on real-world observations.
*   **[Cyber Kill Chain](https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html)**: Developed by Lockheed Martin, this framework identifies what the adversaries must complete in order to achieve their objective.
*   **[Diamond Model](https://www.threatintel.academy/diamond/)**: A cognitive model for intrusion analysis.
*   **[STRIDE](https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool-threats)**: A threat modeling methodology developed by Microsoft (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege).
*   **[PASTA](https://versprite.com/blog/what-is-pasta-threat-modeling/)**: Process for Attack Simulation and Threat Analysis, a risk-centric threat modeling methodology.
*   **[LINDDUN](https://linddun.org/)**: Privacy threat modeling framework (Linkability, Identifiability, Non-repudiation, Detectability, Disclosure of information, Unawareness, Non-compliance). ([PILLAR AI Tool](https://github.com/stfbk/PILLAR))
*   **[OCTAVE](https://cert.org/)**: Operationally Critical Threat, Asset, and Vulnerability Evaluation, a risk-based strategic assessment and planning technique.
*   **[VAST](https://threatmodeler.com/vast/)**: Visual, Agile, and Simple Threat modeling, a scalable framework for DevOps and Agile.
*   **[Trike](http://www.octotrike.org/)**: A risk-based threat modeling methodology and tool. ([GitHub Repo](https://github.com/octotrike/trike))
*   **[Attack Trees](https://www.schneier.com/academic/archives/1999/12/attack_trees.html)**: Conceptual diagrams showing how an asset, or target, might be attacked. ([ATTop Analysis Tool](https://github.com/utwente-fmt/attop))

## Threat Modeling Tools

*   **[OWASP Threat Dragon](https://github.com/OWASP/threat-dragon)**: An open source threat modeling tool from OWASP.
*   **[pytm](https://github.com/OWASP/pytm)**: A Pythonic framework for threat modeling.
*   **[Threagile](https://github.com/Threagile/threagile)**: Agile Threat Modeling Toolkit.
*   **[Threat Composer](https://github.com/awslabs/threat-composer)**: A simple threat modeling tool to help humans to reduce time-to-value when threat modeling.
*   **[Microsoft Threat Modeling Tool](https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool)**: A tool to create data flow diagrams to identify threats.

## Blue Team Tools

### Security Monitoring & SIEM
*   **[Sysmon](https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon)**: Windows system monitor that tracks system activity and logs it to the Windows event log.
*   **[Wazuh](https://wazuh.com/)**: Free and open source security platform that unifies XDR and SIEM capabilities.
*   **[Security Onion](https://securityon.ion/)**: A free and open platform for threat hunting, enterprise security monitoring, and log management.
*   **[Elastic Security (ELK)](https://www.elastic.co/security)**: Unified protection for everyone.
*   **[Velociraptor](https://github.com/Velocidex/velociraptor)**: Endpoint visibility and collection tool.
*   **[SysmonSearch](https://github.com/JPCERTCC/SysmonSearch)**: Aggregates event logs generated by Microsoft's Sysmon.

### Incident Response & Forensics
*   **[TheHive](https://thehive-project.org/)**: A scalable, open source and free Security Incident Response Platform.
*   **[Cortex](https://github.com/TheHive-Project/Cortex)**: Powerful Observable Analysis and Active Response Engine.
*   **[SANS SIFT](https://www.sans.org/tools/sift-workstation/)**: SANS Investigative Forensic Toolkit.
*   **[Autopsy](https://www.autopsy.com/)**: Digital forensics platform and graphical interface to The Sleuth Kit.
*   **[Volatility](https://github.com/volatilityfoundation/volatility)**: Advanced memory forensics framework.
*   **[KAPE](https://www.kroll.com/en/services/cyber-risk/incident-response-litigation-support/kroll-artifact-parser-extractor-kape)**: Kroll Artifact Parser and Extractor.

### Threat Intelligence
*   **[MISP](https://www.misp-project.org/)**: Malware Information Sharing Platform and Threat Sharing.
*   **[OpenCTI](https://github.com/OpenCTI-Platform/opencti)**: Open Cyber Threat Intelligence Platform.
*   **[YARA](https://github.com/VirusTotal/yara)**: The pattern matching swiss knife for malware researchers.

### Analysis & Sandboxing
*   **[Cuckoo Sandbox](https://cuckoosandbox.org/)**: Automated Malware Analysis System.
*   **[CyberChef](https://gchq.github.io/CyberChef/)**: The Cyber Swiss Army Knife.
*   **[VirusTotal](https://www.virustotal.com/)**: Analyze suspicious files, domains, IPs and URLs.

## Detection Engineering
*   **[Sigma](https://github.com/SigmaHQ/sigma)**: Generic Signature Format for SIEM Systems.
*   **[Unprotect Project](https://unprotect.it/)**: Malware evasion techniques knowledge base.
*   **[LOLBAS](https://lolbas-project.github.io/)**: Living Off The Land Binaries, Scripts and Libraries.
*   **[GTFOBins](https://gtfobins.github.io/)**: List of Unix binaries that can be used to bypass local security restrictions.
