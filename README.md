# Ibnu Alif  Portfolio

Dark editorial portfolio built with **React + Vite + Tailwind CSS v3**.

## Stack
- React 18
- Vite 5
- Tailwind CSS 3 (utility-first, no CSS Modules)
- Google Fonts: Syne + DM Mono

## Structure
```
src/
├── components/
│   ├── Cursor.jsx     ← custom cursor, auto-disabled on mobile
│   ├── Navbar.jsx     ← sticky + mobile hamburger full-screen menu
│   ├── Hero.jsx       ← cycling role words animation
│   ├── About.jsx
│   ├── Projects.jsx   ← hover expand description
│   ├── SkillBar.jsx   ← animated bars on scroll
│   ├── Skills.jsx
│   ├── Training.jsx   ← vertical timeline
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── FadeIn.jsx     ← reusable scroll-reveal wrapper
├── hooks/index.js     ← useInView, useWindowSize, useMousePosition
├── data/index.js      ← all content lives here
├── index.css          ← @tailwind directives + google font import
├── App.jsx
└── main.jsx
```

## Quick Start
```bash
npm install
npm run dev
```

## Deploy
```bash
npm run build
# drag dist/ to vercel.com OR connect repo in Vercel dashboard
```

## Customize
- **Content** → `src/data/index.js`
- **Colors / tokens** → `tailwind.config.js` (accent, dark, muted, etc.)
- **Font** → `src/index.css` @import + tailwind.config.js fontFamily