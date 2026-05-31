export const portfolioContent = {
  personal: {
    name: "Mohammed Sulaiman Eksambi",
    initials: "SE",
    role: "Cybersecurity and Cloud infrastructure Specialist",
    location: "India",
    email: "sulaimaneksambi@gmail.com",
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
    { label: "GitHub", href: "https://github.com/sulaimanxmb", type: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohammed-sulaiman-eksambi/",
      type: "linkedin",
    },
  ],
  hero: {
    eyebrow: "Hi, I am Mohammed Sulaiman Eksambi.",
    title: "Building reliable pipelines and security-minded systems.",
    summary:
      "A DevOps and Cybersecurity fresher focused on Linux, cloud, automation, secure deployment workflows, and practical hands-on projects.",
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
      "When I'm not configuring servers, you can usually find me analyzing Real Madrid's weekend tactics or playing Saturday football.",
    ],
  },
  skills: [
    {
      category: "DevOps",
      items: ["Git", "GitHub", "CI/CD", "Docker", "Linux", "Python"],
    },
    {
      category: "Cloud & Hosting",
      items: ["AWS", "Cloud Concepts", "DNS Basics"],
    },
    {
      category: "Cybersecurity",
      items: ["Networking", "OWASP Basics", "Vulnerability Assessment", "SIEM Basics"],
    },
    {
      category: "Tools",
      items: ["Nmap", "Caido", "Metasploit", "Jenkins"],
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
      title: "Technical Blog",
      summary:
        "This is a Technical Blog by me where I track my journey while learning anything new",
      tech: ["Github Pages", "Github Actions", "Obsidian", "Quartz"],
      repo: "https://github.com/sulaimanxmb/Notes",
      demo: "https://sulaimanxmb.github.io/Notes/",
    },
  ],
  certifications: [
    {
      name: "Google Cybersecurity Certificate",
      issuer: "Google",
      status: "Completed",
      issued: "27th Feb 2026",
      pdfPath: "/certificates/google-certification.pdf",
      credentialUrl: "https://www.coursera.org/account/accomplishments/professional-cert/GJGAYXZ55TWI",
    },
    {
      name: "AWS Cloud Practitioner",
      issuer: "AWS",
      status: "Planned",
      issued: "Add date",
      pdfPath: "/certificates/aws-cloud-practitioner.pdf",
      credentialUrl: "#",
    }
  ],
  education: [
    {
      degree: "B.tech in Computer Science and Cybersecurity",
      institution: "Dayananada Sagar University",
      year: "2026",
      details: "Relevant coursework: networking, operating systems, cloud, and security basics.",
    },
  ],
  contact: {
    heading: "Contact",
    summary:
      "Open to fresher DevOps, Cybersecurity, Cloud, and technical support opportunities.",
    emailLabel: "sulaimaneksambi@gmail.com",
    availability: "Available for internships and entry-level roles",
  },
};
