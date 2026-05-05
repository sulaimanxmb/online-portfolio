import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  Award,
  BookOpenCheck,
  CloudCog,
  Download,
  GraduationCap,
  Github,
  Linkedin,
  LockKeyhole,
  Mail,
  Moon,
  Network,
  ServerCog,
  ShieldCheck,
  Sun,
  TerminalSquare,
} from "lucide-react";
import { portfolioContent } from "./data/portfolioContent";

const THEME_KEY = "portfolio-theme";

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "dark";
  }

  const storedTheme = window.localStorage.getItem(THEME_KEY);
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const { personal } = portfolioContent;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const themeLabel = useMemo(
    () => (theme === "dark" ? "Switch to light mode" : "Switch to dark mode"),
    [theme]
  );

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Primary">
        <a className="brand" href="#home" aria-label="Portfolio home">
          <span className="brand-mark">{personal.initials}</span>
          <span>
            <strong>{personal.name}</strong>
            <small>{personal.role}</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Portfolio sections">
          {portfolioContent.navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button className="theme-toggle" type="button" onClick={toggleTheme}>
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          <span>{themeLabel}</span>
        </button>
      </header>

      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <LabsSection />
      <EducationSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

function HeroSection() {
  const { hero, personal, socialLinks } = portfolioContent;

  return (
    <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">
            <ShieldCheck size={18} />
            {hero.eyebrow}
          </p>
          <h1>{hero.title}</h1>
          <p className="hero-copy">{hero.summary}</p>

          <div className="hero-actions" aria-label="Hero actions">
            <a className="button button-primary" href={hero.primaryAction.href}>
              {hero.primaryAction.label}
              <ArrowUpRight size={18} />
            </a>
            <a className="button button-secondary" href={personal.resumePath}>
              {hero.secondaryAction.label}
              <Download size={18} />
            </a>
          </div>

          <div className="social-links" aria-label="Professional links">
            {socialLinks.map((link) => (
              <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
                {link.type === "github" ? <Github size={18} /> : <Linkedin size={18} />}
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="DevOps and cybersecurity workspace">
          <div className="visual-header">
            <span />
            <span />
            <span />
            <p>secure-deploy.yml</p>
          </div>

          <div className="pipeline-grid">
            <div className="metric-panel terminal-panel">
              <div className="panel-heading">
                <TerminalSquare size={18} />
                <span>pipeline</span>
              </div>
              {hero.terminalLines.map((line) => (
                <code key={line}>{line}</code>
              ))}
            </div>

            <div className="metric-panel status-panel">
              <div className="panel-heading">
                <LockKeyhole size={18} />
                <span>{hero.metrics[0].label}</span>
              </div>
              <div className="status-ring">
                <span>{hero.metrics[0].value}</span>
              </div>
              <p>{hero.metrics[0].detail}</p>
            </div>

            <div className="signal-row">
              {hero.metrics.map((metric, index) => (
                <div key={metric.label}>
                  {index === 0 ? <ShieldCheck size={22} /> : null}
                  {index === 1 ? <CloudCog size={22} /> : null}
                  {index === 2 ? <ServerCog size={22} /> : null}
                  <strong>{metric.value}</strong>
                  <span>{metric.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="section-heading">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <span>{children}</span> : null}
    </div>
  );
}

function AboutSection() {
  const { about } = portfolioContent;

  return (
    <section className="page-section split-section" id="about">
      <SectionHeading eyebrow="Profile" title={about.heading}>
        {about.intro}
      </SectionHeading>
      <div className="highlight-list">
        {about.highlights.map((highlight) => (
          <article className="highlight-card" key={highlight}>
            <ShieldCheck size={20} />
            <p>{highlight}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="page-section" id="skills">
      <SectionHeading eyebrow="Toolbox" title="Core Skills" />
      <div className="card-grid">
        {portfolioContent.skills.map((group) => (
          <article className="content-card" key={group.category}>
            <div className="card-icon">
              <Network size={20} />
            </div>
            <h3>{group.category}</h3>
            <div className="tag-list">
              {group.items.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="page-section" id="projects">
      <SectionHeading eyebrow="Builds" title="Projects" />
      <div className="project-grid">
        {portfolioContent.projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-topline">
              <span>{project.status}</span>
              <TerminalSquare size={18} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div className="tag-list">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <div className="card-actions">
              <a href={project.repo} target="_blank" rel="noreferrer">
                Repo <ArrowUpRight size={16} />
              </a>
              <a href={project.demo}>Demo <ArrowUpRight size={16} /></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CertificationsSection() {
  return (
    <section className="page-section" id="certifications">
      <SectionHeading eyebrow="Learning" title="Certifications" />
      <div className="timeline-list">
        {portfolioContent.certifications.map((certification) => (
          <article className="timeline-item" key={certification.name}>
            <Award size={20} />
            <div>
              <h3>{certification.name}</h3>
              <p>{certification.issuer}</p>
            </div>
            <span>{certification.status}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function LabsSection() {
  return (
    <section className="page-section" id="labs">
      <SectionHeading eyebrow="Practice" title="Labs & Notes" />
      <div className="card-grid">
        {portfolioContent.labs.map((lab) => (
          <article className="content-card" key={lab.title}>
            <div className="card-icon">
              <BookOpenCheck size={20} />
            </div>
            <h3>{lab.title}</h3>
            <p>{lab.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="page-section" id="education">
      <SectionHeading eyebrow="Background" title="Education" />
      <div className="timeline-list">
        {portfolioContent.education.map((item) => (
          <article className="timeline-item" key={`${item.degree}-${item.institution}`}>
            <GraduationCap size={20} />
            <div>
              <h3>{item.degree}</h3>
              <p>{item.institution}</p>
              <small>{item.details}</small>
            </div>
            <span>{item.year}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function ResumeSection() {
  const { personal } = portfolioContent;

  return (
    <section className="page-section resume-band" id="resume">
      <div>
        <p className="eyebrow">Resume</p>
        <h2>Keep the PDF at one predictable path.</h2>
        <p>
          Add your resume as <strong>public/Resume.pdf</strong> later. The button
          will automatically point to the value configured in the content file.
        </p>
      </div>
      <a className="button button-primary" href={personal.resumePath}>
        Download Resume
        <Download size={18} />
      </a>
    </section>
  );
}

function ContactSection() {
  const { contact, personal, socialLinks } = portfolioContent;

  return (
    <section className="page-section contact-section" id="contact">
      <SectionHeading eyebrow="Next step" title={contact.heading}>
        {contact.summary}
      </SectionHeading>
      <div className="contact-panel">
        <a href={`mailto:${personal.email}`}>
          <Mail size={20} />
          {contact.emailLabel}
        </a>
        {socialLinks.map((link) => (
          <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
            {link.type === "github" ? <Github size={20} /> : <Linkedin size={20} />}
            {link.label}
          </a>
        ))}
        <p>{contact.availability}</p>
      </div>
    </section>
  );
}

function Footer() {
  const { personal } = portfolioContent;

  return (
    <footer className="footer">
      <p>{personal.name}</p>
      <span>Built with React, Vite, and Netlify.</span>
    </footer>
  );
}

export default App;
