# Tanvir Singh | Portfolio

My personal portfolio site: I'm a Data Analyst in Toronto working on analytics, data pipelines and AI automation.

**Live site:** [my-portfolio-opal-pi-52.vercel.app](https://my-portfolio-opal-pi-52.vercel.app)

## What's on the site

- **About**: who I am and what I work on
- **Work Experience**: Hotspex Media, CBV Collection Services, CGI
- **Projects**: fraud analytics, agentic AI workflows, RAG chatbot, ML and DevOps projects, each linked to its repo
- **Skills**: grouped into analytics, BI, AI & automation, data pipelines, marketing data, and development & testing
- **Education**, **Awards & Leadership**, and a **Contact** form
- Light and dark mode, plus a downloadable resume

## Tech stack

- React 18 (Create React App)
- Bootstrap 5 for layout
- Framer Motion, typewriter-effect, react-vertical-timeline-component and react-scroll for animation and navigation
- react-icons for icons
- EmailJS for the contact form
- Google Tag Manager for analytics
- Deployed on Vercel

## Run it locally

Requires Node.js 24.x (pinned in `package.json`).

```bash
npm install
npm start
```

The site runs at [http://localhost:3000](http://localhost:3000).

To create a production build in `build/`:

```bash
npm run build
```

### Environment variables

The contact form uses EmailJS. Create a `.env` file in this folder with:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

`.env` is git-ignored. On Vercel, set the same variables under Project Settings → Environment Variables.

## Updating content

Most content lives in data arrays, so you rarely need to change any markup:

| Section | File |
| --- | --- |
| Work experience | `src/pages/workExp/WorkExp.js` (`jobs` array) |
| Projects | `src/pages/Projects/Project.js` (`projects` array) |
| Skills | `src/utils/Techstacklist.js` |
| Awards & leadership | `src/pages/Awards/Awards.js` |
| Menu items and order | `src/utils/navItems.js` (keep in the same order as `src/App.js`) |
| About text | `src/pages/About/about.js` |
| Resume download | `src/assets/docs/Resume.pdf` |

## Contact

- LinkedIn: [tanvir-singh-b66471293](https://www.linkedin.com/in/tanvir-singh-b66471293/)
- GitHub: [tanvirsingh1](https://github.com/tanvirsingh1)
- Email: tnvir2182002@gmail.com
