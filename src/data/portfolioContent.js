export const portfolioContent = {
  personal: {
    name: "Sulaiman Eksambi",
    initials: "SE",
    role: "DevOps & Cybersecurity Fresher",
    location: "India",
    email: "your.email@example.com",
    resumePath: "/Resume.pdf",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/your-username", type: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/your-profile",
      type: "linkedin",
    },
  ],
  hero: {
    eyebrow: "Fresher focused on secure, automated infrastructure",
    title: "Building reliable pipelines and security-minded systems.",
    summary:
      "I am a DevOps and Cybersecurity fresher who enjoys turning Linux, cloud, automation, and security fundamentals into practical, documented projects.",
    primaryAction: { label: "View Projects", href: "#projects" },
    secondaryAction: { label: "Download Resume", href: "/Resume.pdf" },
    terminalLines: [
      "$ git push origin main",
      "lint: passed",
      "scan: no critical issues",
      "deploy: queued to Netlify",
    ],
    metrics: [
      { label: "Security posture", value: "92%", detail: "Placeholder score" },
      { label: "Build status", value: "Green", detail: "CI/CD ready" },
      { label: "Learning mode", value: "Active", detail: "Certs planned" },
    ],
  },
  about: {
    heading: "About Me",
    intro:
      "I am a fresher building a strong foundation across DevOps, Cybersecurity, Linux, networking, and cloud deployment.",
    highlights: [
      "Interested in CI/CD, infrastructure automation, and secure deployment workflows.",
      "Practicing vulnerability assessment, web security basics, and defensive monitoring.",
      "Comfortable learning in public through documented projects and GitHub repositories.",
    ],
  },
  skills: [
    {
      category: "DevOps",
      items: ["Git", "GitHub", "CI/CD", "Docker", "Linux", "Bash"],
    },
    {
      category: "Cloud & Hosting",
      items: ["Netlify", "AWS Basics", "Cloud Concepts", "DNS Basics"],
    },
    {
      category: "Cybersecurity",
      items: ["Networking", "OWASP Basics", "Vulnerability Assessment", "SIEM Basics"],
    },
    {
      category: "Tools",
      items: ["Nmap", "Wireshark", "Burp Suite", "Metasploit", "GitHub Actions"],
    },
  ],
  projects: [
    {
      title: "CI/CD Pipeline Portfolio",
      status: "Placeholder",
      summary:
        "A GitHub-to-Netlify deployment workflow with build checks, clean project structure, and documented release steps.",
      tech: ["React", "Vite", "GitHub", "Netlify"],
      repo: "https://github.com/your-username/project-repo",
      demo: "#",
    },
    {
      title: "Dockerized Web App",
      status: "Placeholder",
      summary:
        "A small application containerized with Docker to practice repeatable local environments and deployment basics.",
      tech: ["Docker", "Linux", "Bash"],
      repo: "https://github.com/your-username/project-repo",
      demo: "#",
    },
    {
      title: "Vulnerability Scanning Lab",
      status: "Placeholder",
      summary:
        "A controlled lab documenting scanning workflow, findings, severity notes, and remediation recommendations.",
      tech: ["Nmap", "OWASP", "Burp Suite"],
      repo: "https://github.com/your-username/project-repo",
      demo: "#",
    },
  ],
  certifications: [
    {
      name: "Google Cybersecurity Certificate",
      issuer: "Google",
      status: "Planned",
      issued: "Add date",
      pdfPath: "/certificates/google-cybersecurity.pdf",
      credentialUrl: "#",
    },
    {
      name: "AWS Cloud Practitioner",
      issuer: "AWS",
      status: "Planned",
      issued: "Add date",
      pdfPath: "/certificates/aws-cloud-practitioner.pdf",
      credentialUrl: "#",
    },
    {
      name: "TryHackMe Learning Path",
      issuer: "TryHackMe",
      status: "In Progress",
      issued: "Add date",
      pdfPath: "/certificates/tryhackme-learning-path.pdf",
      credentialUrl: "#",
    },
  ],
  education: [
    {
      degree: "Your Degree / Program",
      institution: "Your College or University",
      year: "2026",
      details: "Relevant coursework: networking, operating systems, cloud, and security basics.",
    },
  ],
  contact: {
    heading: "Contact",
    summary:
      "Open to fresher DevOps, Cybersecurity, Cloud, and technical support opportunities.",
    emailLabel: "your.email@example.com",
    availability: "Available for internships and entry-level roles",
  },
};
