import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  CloudCog,
  Github,
  Linkedin,
  LockKeyhole,
  Mail,
  Moon,
  ServerCog,
  ShieldCheck,
  Sun,
  TerminalSquare,
} from "lucide-react";

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
          <span className="brand-mark">SE</span>
          <span>
            <strong>Sulaiman Eksambi</strong>
            <small>DevOps / Cybersecurity</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Portfolio sections">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="theme-toggle" type="button" onClick={toggleTheme}>
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          <span>{themeLabel}</span>
        </button>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">
            <ShieldCheck size={18} />
            Fresher focused on secure, automated infrastructure
          </p>
          <h1>Building reliable pipelines and security-minded systems.</h1>
          <p className="hero-copy">
            I am a DevOps and Cybersecurity fresher who enjoys turning Linux,
            cloud, automation, and security fundamentals into practical,
            documented projects.
          </p>

          <div className="hero-actions" aria-label="Hero actions">
            <a className="button button-primary" href="#projects">
              View Projects
              <ArrowUpRight size={18} />
            </a>
            <a className="button button-secondary" href="#contact">
              Contact Me
              <Mail size={18} />
            </a>
          </div>

          <div className="social-links" aria-label="Professional links">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <Github size={18} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <Linkedin size={18} />
              LinkedIn
            </a>
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
              <code>$ git push origin main</code>
              <code>lint: passed</code>
              <code>scan: no critical issues</code>
              <code>deploy: queued to Netlify</code>
            </div>

            <div className="metric-panel status-panel">
              <div className="panel-heading">
                <LockKeyhole size={18} />
                <span>security posture</span>
              </div>
              <div className="status-ring">
                <span>92%</span>
              </div>
              <p>Headers, dependency checks, and access reviews tracked.</p>
            </div>

            <div className="signal-row">
              <div>
                <CloudCog size={22} />
                <strong>Cloud</strong>
                <span>Netlify ready</span>
              </div>
              <div>
                <ServerCog size={22} />
                <strong>Linux</strong>
                <span>Automation labs</span>
              </div>
              <div>
                <ShieldCheck size={22} />
                <strong>Security</strong>
                <span>OWASP basics</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
