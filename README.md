# Online Portfolio

A personal portfolio website for a fresher focused on DevOps and Cybersecurity. The site uses an Electric Sunstone color theme, responsive sections, and a light/dark mode toggle.

## Tech Stack

- React
- Vite
- Node.js tooling
- CSS3
- Lucide React icons
- Netlify for hosting
- GitHub for version control

## Local Development

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Editing Portfolio Content

Most placeholder values are managed from one file:

```text
src/data/portfolioContent.js
```

Edit that file to update your name, role, hero text, social links, projects, skills, certificates, education, contact details, and resume path.

When your resume is ready, add it here:

```text
public/Resume.pdf
```

The current resume link points to `/Resume.pdf`.

Certificate PDF paths are also managed in `src/data/portfolioContent.js`. Add certificate PDFs under:

```text
public/certificates/
```

Resume and certificate PDFs in `public/` are intended to be tracked in Git because they are public portfolio assets.

## Deployment

This project is configured for Netlify with `netlify.toml`.

- Build command: `npm run build`
- Publish directory: `dist`

## Git Ignore Notes

The `.gitignore` excludes generated, local, or sensitive files that should not be pushed to GitHub:

- `node_modules/`
- `dist/`
- `.netlify/`
- `.env` and `.env.*`
- `.DS_Store`
- log files
