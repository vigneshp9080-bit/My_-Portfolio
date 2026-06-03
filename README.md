# Vignesh P — Portfolio Website

**AI Engineer & Data Scientist Portfolio**

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
# → Open http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 📁 Project Structure

```
vignesh-portfolio/
├── public/
│   └── Vignesh_P_Resume.pdf      ← Add your resume PDF here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             ← Fixed navbar with dark/light toggle
│   │   ├── Navbar.css
│   │   ├── Hero.jsx               ← Animated hero with orbs + grid
│   │   ├── Hero.css
│   │   ├── allComponents.jsx      ← About, Skills, Projects, Experience,
│   │   │                             Certifications, Contact, Footer
│   │   └── components.css        ← All component styles
│   ├── data/
│   │   └── resumeData.js          ← ★ Single source of truth for all content
│   ├── styles/
│   │   └── globals.css            ← Design tokens, animations, base styles
│   └── App.jsx                    ← Root component
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## ✏️ Customizing Content

All content lives in **`src/data/resumeData.js`** — edit that file only:

```js
// Update personal info
export const personal = {
  name: "Vignesh P",
  email: "vigneshp9080@gmail.com",
  // ...
};

// Add/edit projects
export const projects = [
  {
    id: "01",
    title: "Your Project",
    description: "Description...",
    tags: ["React", "ML"],
    features: ["Feature 1", "Feature 2"],
    github: "https://github.com/...",
    demo: "https://your-demo.vercel.app",  // or null
  },
];
```

---

## 🌐 Deploy to Vercel (Recommended)

### Option A — GitHub + Vercel (Easiest)

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/vignesh-portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo

3. Vercel auto-detects Vite. Click **Deploy**. Done! ✅

4. Your portfolio will be live at: `https://vignesh-portfolio.vercel.app`

### Option B — Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts → your site is live!
```

### Option C — Netlify

```bash
# Build first
npm run build

# Go to netlify.com → Drag & drop the /dist folder
```

---

## 🎨 Customizing Design

### Colors (edit `src/styles/globals.css`)
```css
:root {
  --accent: #6c63ff;    /* Primary purple */
  --accent2: #00d4aa;   /* Teal accent */
  --accent3: #ff6b6b;   /* Coral accent */
}
```

### Fonts
Currently uses:
- **Syne** (headings) — distinctive geometric display font
- **DM Sans** (body) — clean, modern sans-serif
- **JetBrains Mono** (code/tags) — developer-style monospace

Change in `src/styles/globals.css` and update the Google Fonts link in `index.html`.

---

## 📄 Adding Your Resume PDF

1. Add `Vignesh_P_Resume.pdf` to the `/public` folder
2. The Download Resume button in the Hero section will automatically link to it

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite | Build tool (fast HMR) |
| CSS Modules | Component styling |
| CSS Custom Properties | Design tokens + dark/light mode |
| IntersectionObserver | Scroll animations |
| Google Fonts | Typography |

---

## 📱 Features

- ✅ Dark / Light mode toggle (persists across session)
- ✅ Smooth scroll-triggered reveal animations
- ✅ Animated skill bars (triggered on scroll into view)
- ✅ Responsive: Mobile, Tablet, Desktop
- ✅ Contact form → mailto integration
- ✅ Mobile hamburger menu
- ✅ SEO-friendly (semantic HTML, meta tags)
- ✅ Fast loading (no heavy dependencies)
- ✅ Glassmorphism nav + backdrop blur
- ✅ Animated gradient hero with floating orbs

---

## 🔧 vite.config.js

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
        },
      },
    },
  },
})
```

---

## 📧 Contact

Built with ❤️ for **Vignesh P** — vigneshp9080@gmail.com
