# Engineering Decisions

## Decision: Use a Static Vite React SPA

### Context
- The project is a personal portfolio that needs fast loading, low maintenance, and free hosting on Netlify.
- The site does not require server-side rendering, authentication, databases, or backend APIs.

### Decision
- Build the portfolio as a static React single-page application using Vite.

### Alternatives Considered
- Plain HTML/CSS/JavaScript
- Next.js or another full-stack React framework
- Static site generators such as Astro

### Trade-offs
- Pros: simple deployment, fast builds, familiar component model, easy Netlify compatibility.
- Cons: more tooling than plain HTML, no built-in server-side rendering, and limited SEO enhancements compared with SSR/SSG frameworks.

### Impact
- Keeps hosting inexpensive and operationally simple.
- Produces static assets that Netlify can serve globally without running an application server.

## Decision: Centralize Portfolio Content in One Data File

### Context
- Portfolio details such as projects, skills, certificates, links, and resume path need frequent updates.
- The owner should be able to edit content without hunting through component markup.

### Decision
- Store editable portfolio content in `src/data/portfolioContent.js` and render sections from that data in React.

### Alternatives Considered
- Hardcode all content directly in JSX
- Use Markdown files
- Use a CMS or external data source

### Trade-offs
- Pros: simple update workflow, no CMS dependency, and clear separation between data and presentation.
- Cons: content edits still require code changes and redeployment; no validation layer prevents malformed data.

### Impact
- Makes future updates faster and safer for a small portfolio.
- Keeps the app fully static while still supporting structured content.

## Decision: Track Resume and Certificates as Public Assets

### Context
- Resume and certificate PDFs are intended to be visible to visitors and linked directly from the site.
- Netlify/Vite can serve static files from `public/` without additional backend logic.

### Decision
- Store public portfolio documents in `public/`, including `public/Resume.pdf` and certificate PDFs under `public/certificates/`.

### Alternatives Considered
- Host PDFs on Google Drive, LinkedIn, or another external service
- Store files outside Git and upload them manually to Netlify
- Add a private storage service

### Trade-offs
- Pros: documents deploy with the site, links are stable, and no third-party document hosting is required.
- Cons: files are public in the repository and increase repository size over time.

### Impact
- Simplifies deployment and guarantees assets are versioned with the website.
- Requires care not to commit documents that should remain private.

## Decision: Deploy Through Netlify from GitHub

### Context
- The project needs free hosting and a straightforward deployment flow tied to the GitHub repository.
- The app builds to static files in `dist`.

### Decision
- Configure Netlify with `netlify.toml`: build command `npm run build`, publish directory `dist`, and SPA fallback redirect to `index.html`.

### Alternatives Considered
- GitHub Pages
- Manual Netlify deploys
- Vercel or another static hosting platform

### Trade-offs
- Pros: automatic deploys from Git, simple custom domain support, CDN hosting, and good Vite support.
- Cons: production availability depends on Netlify configuration outside the repository; free-tier limits still apply.

### Impact
- Enables a low-friction CI/CD-style workflow for portfolio updates.
- Keeps deployment settings explicit in version control.

## Decision: Implement Theme Switching Client-Side

### Context
- The site needs a light/dark mode toggle while remaining fully static.
- Light mode should be the default visual state.

### Decision
- Store the selected theme in `localStorage` and apply it via `document.documentElement.dataset.theme`.

### Alternatives Considered
- CSS-only theme based on `prefers-color-scheme`
- Server-side theme persistence
- No theme toggle

### Trade-offs
- Pros: no backend required, user choice persists, and CSS custom properties keep theme styling centralized.
- Cons: depends on browser storage and introduces a small client-side state concern.

### Impact
- Supports personalization without increasing infrastructure complexity.
- Theme styling remains maintainable through CSS variables.

## Decision: Use Browser-Native PDF Embeds for Certificates

### Context
- Certificates should appear visually on the webpage, not only as download links.
- Certificate files are PDFs, and adding a custom PDF renderer would increase complexity.

### Decision
- Render certificate previews with the browser-native `<object type="application/pdf">` element and provide direct PDF links.

### Alternatives Considered
- Convert certificate PDFs to images
- Use a JavaScript PDF rendering library
- Link to PDFs without inline previews

### Trade-offs
- Pros: minimal code, no extra rendering dependency, and direct access to the original PDF.
- Cons: PDF preview behavior varies by browser, especially on mobile.

### Impact
- Keeps the certificate section lightweight and static.
- Preserves direct access to credential files even when inline preview support is limited.
