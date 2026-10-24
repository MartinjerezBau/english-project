# Cozme Tech Landing Page

Landing page for Cozme Tech, a software and AI-focused digital agency website built as a modern single-page marketing site.

## Overview

This project is a static website designed to present the company, services, technology solutions, portfolio highlights, and a contact form. It uses semantic HTML, custom CSS, and vanilla JavaScript for interactions such as navigation, FAQ accordion behavior, reveal-on-scroll animations, and smooth scrolling.

## Project Structure

```text
CozmeTech/
├── assets/
│   ├── CozmeTech.webp
│   └── favicon.svg
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── index.html
├── robots.txt
├── sitemap.xml
└── README.md
```

## Features

- Responsive single-page layout
- Hero section with clear call-to-action buttons
- Services and solutions sections
- Portfolio showcase area
- FAQ accordion
- Contact form with client-side validation
- Smooth scroll and back-to-top behavior
- SEO-friendly files (`robots.txt` and `sitemap.xml`)
- Branded visual identity for Cozme Tech

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Static site hosting ready

## Run Locally

From the project folder, start a local web server:

```bash
python -m http.server 8000
```

Then open in the browser:

```text
http://localhost:8000/
```

## Customize the Site

### Brand and text
Update the company name, headings, CTA text, and service content directly in `index.html`.

### Styling
Edit the design system and component styles in `css/styles.css`.

### JavaScript interactions
Modify behavior for navigation, scroll effects, contact form, FAQ, and reveal animations in `js/main.js`.

### Contact details
Update links such as email, LinkedIn, GitHub, and other contact information in the relevant sections of `index.html`.

### Assets
Replace the logo in `assets/CozmeTech.webp` or update the favicon in `assets/favicon.svg` as needed.

## Deployment

This is a static landing page, so it can be hosted on any static hosting service such as:

- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- Any standard static web server

## Notes

The current contact form includes frontend validation and success feedback. To connect it to a real backend or email service, replace the current mock submission flow with your preferred endpoint or integration.

## License

This project is provided as a portfolio/static marketing site for Cozme Tech. If you plan to publish it publicly, confirm the legal rights for any assets, branding, and content before deployment.
