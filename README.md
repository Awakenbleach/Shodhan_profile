# Shodhan K Ganiga — Developer Portfolio

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.x-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

A modern, production-quality personal developer portfolio website. Fully responsive, dark/light mode, accessibility-focused, and deployment-ready for Vercel/Netlify/GitHub Pages.

---

## 🚀 Live Demo

> Deploy to Vercel or Netlify and update this link with your live URL.

---

## 🛠 Technology Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19.x | UI framework |
| Vite | 6.x | Build tool and dev server |
| TypeScript | 6.x | Type safety |
| Tailwind CSS | 3.x | Utility-first styling |
| Lucide React | Latest | Icon library |
| Prettier | 3.x | Code formatting |
| ESLint / Oxlint | Latest | Code linting |

---

## 📁 Project Structure

```text
shodhan-portfolio/
├── public/
│   ├── favicon.svg            # SVG favicon (developer icon)
│   ├── robots.txt             # SEO robots configuration
│   ├── sitemap.xml            # XML sitemap
│   ├── profile.jpg            # ← REPLACE with your photo (optional)
│   └── resume/
│       └── resume.pdf         # ← REPLACE with your actual resume PDF
│
├── src/
│   ├── components/
│   │   ├── About.tsx          # Professional summary section
│   │   ├── Certifications.tsx # Certifications (hidden if empty)
│   │   ├── Contact.tsx        # Contact section with email/socials
│   │   ├── Education.tsx      # Academic qualifications
│   │   ├── Experience.tsx     # Timeline work experience
│   │   ├── FeaturedProject.tsx# Featured project + case study
│   │   ├── Footer.tsx         # Footer with back-to-top
│   │   ├── Hero.tsx           # Landing hero section
│   │   ├── Icons.tsx          # Custom SVG icons (GitHub, LinkedIn)
│   │   ├── Navbar.tsx         # Sticky navbar with theme toggle
│   │   ├── Projects.tsx       # Other projects grid
│   │   ├── ResumeCTA.tsx      # Resume download call-to-action
│   │   ├── ResumeModal.tsx    # In-browser PDF preview modal
│   │   └── Skills.tsx         # Categorized skills chips
│   │
│   ├── data/
│   │   └── portfolio.ts       # ← ALL YOUR PERSONAL INFO HERE
│   │
│   ├── hooks/
│   │   └── useTheme.ts        # Dark/light/system theme hook
│   │
│   ├── types/
│   │   └── portfolio.ts       # TypeScript type definitions
│   │
│   ├── App.tsx                # Root component
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles + Tailwind
│
├── scripts/
│   └── generate-resume.mjs    # Script to generate placeholder PDF
│
├── .env                       # Local environment variables
├── .env.example               # Environment variable template
├── .gitignore                 # Git ignore rules
├── .prettierrc                # Prettier config
├── index.html                 # HTML entry with SEO meta tags
├── package.json               # Dependencies and scripts
├── postcss.config.js          # PostCSS config for Tailwind
├── tailwind.config.js         # Tailwind theme configuration
├── tsconfig.json              # TypeScript project references
├── tsconfig.app.json          # App TypeScript config
├── tsconfig.node.json         # Node TypeScript config
├── vercel.json                # Vercel SPA rewrite rules
└── vite.config.ts             # Vite build configuration
```

---

## ⚡ Quick Start

### Prerequisites

- **Node.js** v18+ (recommended v20+)
- **npm** v8+

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/shodhan-portfolio.git
cd shodhan-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Visit **http://localhost:5173** in your browser.

---

## 📦 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start local development server with HMR |
| `npm run build` | Create optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run format` | Format all files with Prettier |
| `npm run lint` | Run Oxlint code linter |
| `npm run generate-resume` | Generate a placeholder resume PDF |

---

## 🎨 How to Customize Your Portfolio

**All personal data lives in one file.** You do not need to touch any component files.

### Step 1: Edit Your Personal Information

Open **`src/data/portfolio.ts`** and update every field:

```typescript
export const portfolio = {
  personal: {
    name: "Your Full Name",
    title: "Your Professional Title",
    location: "Your City, Country",
    email: "your@email.com",
    phone: "+1 234 567 8900",
    profileImage: "/profile.jpg",
    availability: "Open to opportunities",
  },
  // ... see file for complete structure
};
```

### Step 2: Add Your Profile Photo

Replace the placeholder with your own photo:

```text
public/profile.jpg
```

- Use a square or portrait photo (400×400px or larger)
- Supported formats: `.jpg`, `.png`, `.webp`
- If not added, the site gracefully shows your initials

### Step 3: Add Your Resume PDF

Replace the placeholder with your actual resume:

```text
public/resume/resume.pdf
```

> ⚠️ The file must be named exactly `resume.pdf` and placed in `public/resume/`

### Step 4: Update Social Links

In `src/data/portfolio.ts`:

```typescript
social: {
  github: "https://github.com/YOUR_USERNAME",
  linkedin: "https://linkedin.com/in/YOUR_USERNAME",
  twitter: "",  // leave empty to hide
},
```

### Step 5: Add Work Experience

```typescript
experience: [
  {
    company: "Company Name",
    role: "Your Role",
    location: "City, Country",
    startDate: "Jan 2023",
    endDate: "Present",
    description: "Brief role overview.",
    responsibilities: [
      "What you built and accomplished",
    ],
    technologies: ["Java", "Spring Boot", "MySQL"],
  },
],
```

### Step 6: Add Projects

Mark one project as `featured: true` for the detailed case study view:

```typescript
projects: [
  {
    title: "Project Name",
    description: "What it does and why it matters.",
    technologies: ["React", "TypeScript"],
    github: "https://github.com/user/repo",
    demo: "https://your-demo.com",
    featured: true,
    highlights: ["Key engineering achievement"],
    caseStudy: {
      problem: "The challenge...",
      approach: "How you approached it...",
      architecture: "System design...",
      challenges: "What was hard...",
      solution: "How you solved it...",
      outcome: "Measurable results...",
    },
  },
],
```

For private/enterprise projects, set `isPrivate: true`:

```typescript
{
  isPrivate: true,
  privateLabel: "Enterprise Project (Company Name)",
}
```

### Step 7: Update Skills

```typescript
skills: {
  languages: ["Java 17", "TypeScript", "Python"],
  backend: ["Spring Boot", "Node.js"],
  databases: ["MySQL", "PostgreSQL"],
  tools: ["Git", "Docker"],
},
```

Only include categories that apply to you. Empty categories are automatically hidden.

### Step 8: Configure Environment Variables

Copy the template and fill in your values:

```bash
cp .env.example .env
```

```env
VITE_SITE_URL=https://your-domain.com
VITE_GITHUB_URL=https://github.com/YOUR_USERNAME
VITE_LINKEDIN_URL=https://linkedin.com/in/YOUR_USERNAME
VITE_EMAIL=your@email.com
```

### Step 9: Update SEO Metadata

In `index.html`, update the title, description, and Open Graph tags to match your name and specialty.

### Step 10: Build and Deploy

```bash
npm run build
```

The production files are in `dist/`. Deploy this folder to your hosting provider.

---

## 🌐 Deployment

### Vercel (Recommended)

1. Push the repository to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your repository
4. Leave all settings as defaults (Vite is auto-detected)
5. Click **Deploy**

The `vercel.json` in the root handles SPA routing automatically.

### Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → **Add New Site**
3. Connect GitHub repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy

### GitHub Pages

```bash
npm run build
```

Deploy the `dist/` folder using `gh-pages` or GitHub Actions.

> **Note:** For GitHub Pages, set the `base` in `vite.config.ts` to your repo name:
> ```ts
> base: '/your-repo-name/'
> ```

---

## 🌙 Dark Mode

The portfolio supports three theme modes:

| Mode | Behavior |
|---|---|
| `light` | Always light theme |
| `dark` | Always dark theme |
| `system` | Follows OS preference (default) |

The selected mode is persisted in `localStorage` and applied before the page renders (no flash of unstyled content).

---

## ♿ Accessibility

- Semantic HTML with correct heading hierarchy
- Keyboard-navigable with visible focus indicators
- Skip-to-content link for screen readers
- ARIA labels on all interactive elements
- Alt text on all images
- `prefers-reduced-motion` support (animations disabled when requested)
- Sufficient color contrast in both light and dark modes

---

## 📊 Performance Targets

| Metric | Target |
|---|---|
| Lighthouse Performance | 90+ |
| Lighthouse Accessibility | 95+ |
| Lighthouse Best Practices | 95+ |
| Lighthouse SEO | 95+ |

---

## 🔧 Customization Tips

- **Add education entries**: Fill the `education` array in `portfolio.ts`
- **Add certifications**: Fill the `certifications` array — the section auto-hides if empty
- **Change color scheme**: Modify `tailwind.config.js` theme tokens
- **Change fonts**: Update the Google Fonts link in `index.html` and font config in `tailwind.config.js`
- **Add sections**: Create a new component, import it in `App.tsx`, add data to `portfolio.ts`

---

## 📄 License

MIT License — Free to use and customize for your own portfolio.

---

Built with ⚡ Vite + React + TypeScript + Tailwind CSS
