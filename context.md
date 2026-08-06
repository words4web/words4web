# 🌐 Words4Web Website Project Context

This repository contains the official codebase for the **words4web** official website—a premium, luxury digital agency landing page featuring interactive 3D elements, modern smooth scrolling, and dynamic dark/light modes.

---

## 🛠️ Technical Stack

- **Framework**: [Astro](https://astro.build/) + [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: Vite 6 (via Astro)
- **Styling**: Vanilla CSS + Tailwind CSS v4 (Astro plugin config)
- **3D Graphics**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://r3f.docs.pmnd.rs/) + [@react-three/drei](https://github.com/pmndrs/drei)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

---

## 📂 File Structure

### 📦 Static Assets (`/public/`)

- [**`assets/`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/public/assets) - General styling, fonts, and helper media.
- [**`contact/`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/public/contact) - Assets specific to the Contact section.
- [**`logo/`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/public/logo) - Brand logo variations (`logo_purple.png`, `logo_black.png`, etc.).
- [**`services/`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/public/services) - Hero images for each service page (`web_development.jpg`, `mobile_app.jpg`, `seo.jpg`, etc.).
- [**`tools/`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/public/tools) - SVG icons for tools/technologies used in case studies (e.g., `canva.svg`, `translate-language.svg`).
- [**`work/`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/public/work) - High-resolution screenshots and visuals for selected work and case study projects (e.g., `box2box.png`, `dadoos.jpeg`, `filipe_carrera.jpeg`, `rkb.webp`, `isle_project.png`).

### 💻 Source Code (`/src/`)

- [**`pages/`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/pages)
  - [**`index.astro`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/pages/index.astro) - Main homepage template mounting all section components.
  - [**`contact.astro`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/pages/contact.astro) - Standalone contact page.
  - [**`our-works/`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/pages/our-works)
    - [**`index.astro`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/pages/our-works/index.astro) - Portfolio listing page with Contact section.
    - [**`[slug].astro`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/pages/our-works/%5Bslug%5D.astro) - Dynamic case study detail page. Renders single-column layout with services-offered cards grid, technologies used, and CTA. Pulls data from `caseStudiesData.ts`.
  - [**`services/`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/pages/services)
    - [**`index.astro`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/pages/services/index.astro) - Services listing page. Shows all 8 services as image cards with badge, number, description, and "Learn More" link. Fully mobile responsive.
    - [**`[slug].astro`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/pages/services/%5Bslug%5D.astro) - Dynamic service detail page. Hero image (top on mobile, side-by-side on lg), hero tagline, content sections from `servicesData.ts`, related services grid, and CTA banner. Fully mobile responsive.
  - [**`blog/`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/pages/blog) - Blog index and individual article pages.
  - [**`privacy.astro`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/pages/privacy.astro) - Privacy policy page.
  - [**`terms.astro`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/pages/terms.astro) - Terms & conditions page.
- [**`layouts/`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/layouts)
  - [**`Layout.astro`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/layouts/Layout.astro) - Main HTML layout wrapper with full SEO meta tags (title, description, canonical, OG, Twitter cards), theme flash prevention script, and global smooth scroll handler.
- [**`index.css`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/index.css) - Core theme overrides (variables for dark/light mode, custom glassmorphic styling, neon racing border comets, logo glows, scrollbar details, and opaque dark navbar on scroll).
- [**`components/`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components)
  - [**`ThemeProvider.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/ThemeProvider.tsx) - Context provider managing light/dark mode states.
  - [**`SmoothScroll.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/SmoothScroll.tsx) - Sets up Lenis smooth scrolling.
  - [**`CustomCursor.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/CustomCursor.tsx) - Follow-cursor animation with hover scale adjustments.
  - [**`ScrollProgress.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/ScrollProgress.tsx) - A full-height wavy sinusoidal path that draws on scroll with a trailing neon glow.
  - [**`Navbar.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/Navbar.tsx) - Responsive header navigation with dark mode black-glass styling and dropdown link font improvements.
  - [**`Hero.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/Hero.tsx) - Main hero entry utilizing the 3D Canvas, particle sphere, floating cards, and shooting star queue.
  - [**`ParticleSphere.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/ParticleSphere.tsx) - 3D Canvas particle sphere logic.
  - [**`FloatingCard.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/FloatingCard.tsx) - Individual floating cards featuring a sliding left-to-right fill animation.
  - [**`Services.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/Services.tsx) - Home page services section. Renders 8 `ServiceCard` components in a 4-column grid.
  - [**`ServiceCard.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/ServiceCard.tsx) - 3D tilt card with icon, title, description, badge pill, and a "Learn More →" button linking to `/services/[slug]`. Badge and button are always on the same row (no wrapping).
  - [**`CaseStudies.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/CaseStudies.tsx) - Selected Works showcase section. "See Our Work" CTA links to `/our-works`.
  - [**`About.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/About.tsx) - Story section layout featuring Milestone statistics.
  - [**`Counter.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/Counter.tsx) - Interactive statistical scroll counter.
  - [**`Testimonials.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/Testimonials.tsx) - Client carousel reviews.
  - [**`TestimonialCard.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/TestimonialCard.tsx) - Card layout for individual user reviews.
  - [**`Contact.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/Contact.tsx) - Premium Contact Us form section with input animations.
  - [**`Footer.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/Footer.tsx) - 4-column detailed responsive footer. Services column links to individual `/services/[slug]` pages.
  - [**`MagneticButton.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/MagneticButton.tsx) - Premium physics-based micro-interactive button.
  - [**`Section.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/Section.tsx) - Structured wrapper for sections.
  - [**`PortfolioTabs.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/PortfolioTabs.tsx) - Portfolio category tab navigation with high-contrast solid scroll arrows.
  - [**`PortfolioGrid.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/PortfolioGrid.tsx) - Portfolio sub-category grid with scroll arrows matching main tab style.
  - [**`PortfolioCards.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/PortfolioCards.tsx) - Renders portfolio items. Passes `showAnimatedBorder` only to Packaging cards.
  - [**`AmazonCard.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/AmazonCard.tsx) - Amazon/Packaging card with optional purple animated border trace via `showAnimatedBorder` prop.

### 🗄️ Structured Data (`/src/data/`)

The data layer is modularized into subdirectories to keep configurations organized:

- [**`site-structure/`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/data/site-structure)
  - `navData.ts` - Header menu definitions (Services links mapped to dedicated detail routes).
  - `footerData.ts` - Footer menu items and office contacts (Services mapped to detail routes).
- [**`services/`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/data/services)
  - `servicesData.ts` - Multi-section copywriting arrays for the 8 services index and slug templates.
- [**`case-studies/`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/data/case-studies)
  - `caseStudiesData.ts` - Fully detailed copywriting content, partners, dynamic CTAs, and SVG tech icons for the 5 dynamic case study pages.
  - `workData.ts` - Homepage case studies teaser cards data.
- [**`portfolio/`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/data/portfolio)
  - `portfolioData.ts` - Unified entry point for the tabbed portfolio grid. Case study listings are mapped dynamically from `caseStudiesData` to prevent listing duplication.
  - Individual sub-tab category lists (`websiteDesignData.ts`, `brochureData.ts`, `catalogData.ts`, `logosData.ts`, `socialMediaData.ts`, `tataData.ts`, `amazonData.ts`, `mobileAppData.ts`, `packagingData.ts`).
- [**`homepage/`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/data/homepage)
  - Miscellaneous landing section items (`faqData.ts`, `founderData.ts`, `heroCardsData.ts`, `testimonialsData.ts`, `tickerData.ts`, `toolsData.ts`, `whyChooseUsData.tsx`, `industriesData.tsx`, `processData.tsx`, `statsData.tsx`, `countriesData.ts`, `countryCodes.ts`).

---

## ⚙️ Key Configuration Files

- [**`package.json`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/package.json) - Manages node dependencies and scripts.
- [**`astro.config.mjs`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/astro.config.mjs) - Astro integration configuration settings.
- [**`tsconfig.json`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/tsconfig.json) - TypeScript compiler options.
- [**`services.md`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/services.md) - Source of truth for all service page copy (7 services). Content is structured as `ServiceName => "..."` blocks and mapped into `servicesData.ts` sections verbatim.

---

## 🚀 Available Commands

Run these scripts from the website root directory:

```bash
pnpm dev      # Starts the Astro local development server (default: port 3000)
pnpm build    # Builds the production static site to /dist
pnpm preview  # Preview the production-built site locally
pnpm astro    # Run Astro CLI utility commands directly
```

> [!NOTE]
> The user handles `pnpm build` and `git push` manually after changes are made.

---

## 🗺️ Page Routes

| Route               | Page               | Notes                                                  |
| :------------------ | :----------------- | :----------------------------------------------------- |
| `/`                 | Homepage           | All section components mounted                         |
| `/services`         | Services listing   | Image card grid of all 8 services                      |
| `/services/[slug]`  | Service detail     | Hero image, content sections, related services, CTA    |
| `/our-works`        | Portfolio index    | PortfolioTabs + Contact form                           |
| `/our-works/[slug]` | Case study detail  | Single-column: about, services grid, technologies, CTA |
| `/blog`             | Blog index         | Article listing                                        |
| `/blog/[slug]`      | Blog article       | Individual post                                        |
| `/contact`          | Contact page       | Standalone contact form                                |
| `/privacy`          | Privacy policy     | Full legal page                                        |
| `/terms`            | Terms & conditions | Full legal page                                        |

---

## 🗒️ Developer Notes

- **Services content source**: All service page copy lives in [`services.md`](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/services.md). When updating service copy, update that file first, then sync into `servicesData.ts` sections.
- **Dark mode navbar**: On scroll, the navbar becomes fully opaque black (`#000000`) in dark mode via `.dark .navbar-glass` in `index.css`.
- **Canva SVG**: Stored at `public/tools/canva.svg`. Has no background so wrap in `bg-white p-2 rounded-xl` when rendering on dark backgrounds.
- **Packaging border animation**: The animated purple border trace (`animate-border-trace`) is applied only to Packaging portfolio cards via the `showAnimatedBorder` prop on `AmazonCard`. Amazon listing cards have no border animation.
- **Case study technologies**: Use `iconUrl` on a technology entry to override the default SimpleIcons CDN URL (e.g., for Canva which uses a local SVG).
- **ScrollArrow Component**: Used to unify horizontal scrolling control buttons on tabs and sub-tabs. Sizes, shadows, and hover transition states are centralized here. Inverts background themes (`bg-neutral-950` in light mode, `bg-neutral-50` in dark mode) for maximum readability.
- **Custom Tool Icon backgrounds**: Specific tools with black-colored logos (e.g., Buffer, TikTok, Twitter) are configured with a solid white background class to prevent invisibility on dark canvases.
- **Local SVGs registered**: Newly added toolkit integrations (Screaming Frog, Ubersuggest, TikTok, Pinterest, Twitter, YouTube, LinkedIn, Flutter, Photoshop) are mapped to their local public folder path inside `Tools.tsx`.
