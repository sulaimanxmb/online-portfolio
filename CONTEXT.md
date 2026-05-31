# Project Context

## 1. Overview
- Personal online portfolio for Mohammed Sulaiman Eksambi, focused on cybersecurity, cloud infrastructure, DevOps, and practical technical projects.
- Presents profile summary, skills, projects, certificates, education, resume, and contact links in a responsive single-page site.
- Intended to be hosted on Netlify from the GitHub repository `sulaimanxmb/online-portfolio`.

## 2. Architecture
- Static React single-page application built with Vite.
- `index.html` mounts the React app into `#root`.
- `src/main.jsx` initializes React and imports global styles.
- `src/App.jsx` contains all presentational sections and maps content arrays into UI cards/sections.
- `src/data/portfolioContent.js` is the single content source for editable portfolio data: personal info, navigation, links, hero copy, skills, projects, certificates, education, and contact details.
- `src/styles.css` defines the Electric Sunstone visual system, responsive layout, light/dark theme variables, certificate status colors, and component styling.
- Static public assets are served from `public/`; resume and certificates are copied into the production build by Vite.

## 3. Tech Stack
- JavaScript / JSX
- React 18
- Vite 8
- CSS3 with custom properties and responsive media queries
- Lucide React icons
- Node.js/npm tooling
- GitHub for source control
- Netlify for hosting

## 4. Key Features
- Sticky responsive navigation with section anchors.
- Light/dark mode toggle with light mode as default and theme persistence via `localStorage`.
- Hero section with DevOps/Cybersecurity positioning and a pipeline/security visual.
- Data-driven About, Skills, Projects, Certificates, Education, Resume, Contact, and Footer sections.
- Certificate PDF preview cards using `<object>` embeds, with links to PDF files and credential URLs.
- Certificate status pills: `Completed` displays green, `In Progress` / `In-Progress` displays orange.
- Public resume download from `/Resume.pdf`.
- Netlify SPA fallback redirect to `index.html`.

## 5. Current State
- Core portfolio UI is implemented and responsive.
- Electric Sunstone theme is implemented for both light and dark modes.
- Resume is tracked at `public/Resume.pdf`.
- Google Cybersecurity certificate PDF is tracked at `public/certificates/google-certification.pdf`.
- Most content remains editable in `src/data/portfolioContent.js`.
- Some project entries and AWS certificate details are still placeholders.

## 6. Interfaces & Integrations
- External links:
  - GitHub profile and project repositories
  - LinkedIn profile
  - Coursera credential URL for the Google Cybersecurity Certificate
  - Technical blog demo hosted on GitHub Pages
- Browser APIs:
  - `localStorage` for theme persistence
  - `mailto:` link for contact email
- Netlify deployment:
  - Build command: `npm run build`
  - Publish directory: `dist`
  - SPA redirect: `/* -> /index.html`

## 7. Security Considerations
- No authentication or authorization; all site content is public.
- Resume and certificate PDFs are intentionally tracked as public portfolio assets.
- `.env` and `.env.*` files are ignored to prevent accidental secret commits.
- External links should be kept intentional and reviewed because they are user-facing trust signals.
- The site has a small static attack surface: client-rendered React, public assets, and outbound links only.

## 8. Known Issues / Limitations
- No automated tests or linting are configured.
- Certificate PDF preview support depends on the browser’s PDF rendering behavior.
- Some project repository/demo links are placeholders.
- AWS certificate PDF path is configured but the file is not present yet.
- Netlify site linking/deployment is configured in code but depends on connecting the GitHub repository in Netlify.

## 9. Next Steps
- Replace remaining placeholder project links and descriptions with real work.
- Add missing certificate PDFs and real credential URLs.
- Add basic lint/format scripts for safer updates.
- Connect the GitHub repository to Netlify and verify the production deploy URL.
- Consider adding security headers in `netlify.toml`.
