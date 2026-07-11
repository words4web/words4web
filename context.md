# words4web Website Project Context

This is the repository for the **words4web** official website, a premium/luxury digital agency landing page featuring interactive 3D elements, modern smooth scrolling, and dark/light modes.

## Technical Stack

- **Framework**: [Astro](https://astro.build/) + [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: Vite 6 (via Astro)
- **Styling**: Vanilla CSS + Tailwind CSS v4 (Astro plugin config)
- **3D Graphics**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://r3f.docs.pmnd.rs/) + [@react-three/drei](https://github.com/pmndrs/drei)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

---

## File Structure

- **`/public/`**: Contains static assets served directly at the root path.
  - **`logo/`**: Contains the brand logo variations (`logo_purple.png`, `logo_black.png`, etc.).
  - **`services/`**: Generated high-resolution illustrations for each service and case study.
- **`/src/`**: Contains the source code of the application.
  - **`pages/`**:
    - **`index.astro`**: Main page template mounting the components.
  - **`layouts/`**:
    - **`Layout.astro`**: Main HTML layout wrapper.
  - **`index.css`**: Core theme overrides (variables for dark/light mode, custom glassmorphic styling, neon racing border comets, logo glows, and scrollbar details).
  - **`components/`**:
    - **`ThemeProvider.tsx`**: Context provider managing light/dark mode states.
    - **`SmoothScroll.tsx`**: Sets up Lenis smooth scrolling.
    - **`CustomCursor.tsx`**: Follow-cursor animation with hover scale adjustments.
    - **`ScrollProgress.tsx`**: A full-height wavy sinusoidal path that draws on scroll with a trailing neon glow.
    - **`Navbar.tsx`**: Responsive header navigation with dark mode black-glass styling and dropdown link font improvements.
    - **`Hero.tsx`**: Main hero entry utilizing the 3D Canvas, particle sphere, floating cards, and shooting star queue.
    - **`ParticleSphere.tsx`**: 3D Canvas particle sphere logic.
    - **`FloatingCard.tsx`**: Individual floating cards featuring a sliding left-to-right fill animation.
    - **`Services.tsx`**: Custom service section containing the EU commission case study banner and interactive 3D Flip Cards.
    - **`CaseStudies.tsx`**: Selected Works showcase section featuring mock browser containers, neon overlays, and page-scrolling hover animations.
    - **`About.tsx`**: Story section layout featuring Milestone statistics.
    - **`Testimonials.tsx`**: Client carousel reviews.
    - **`Contact.tsx`**: Premium Contact Us form section with input animations.
    - **`Footer.tsx`**: 4-column detailed responsive footer.
    - **`MagneticButton.tsx`**: Premium physics-based micro-interactive button.
  - **`data/`**: Modular dataset folder.
    - **`navData.ts`**: Contains the site navigation links structure and sub-services.
    - **`heroCardsData.ts`**: Coordinates, delays, and titles for all 7 floating cards in the Hero section.
    - **`servicesData.ts`**: Detailed descriptions for the core services.
    - **`workData.ts`**: Stores data (titles, descriptions, screenshot paths) for the 3 selected works projects.
    - **`aboutData.ts`**: Stores about details copy and milestone statistics.
  - **`types/`**: TypeScript interfaces folder.
    - **`hero.ts`**: Type structures for `ShootingStar`, `HeroCardItem`, and `FloatingCardProps`.
    - **`navigation.ts`**: Type structures for `NavItem` links.
    - **`services.ts`**: Type structures for `ServiceItem` blocks.
    - **`work.ts`**: Type structures for `WorkItem` blocks.
    - **`about.ts`**: Type structures for About content configurations.
  - **`lib/`**:
    - **`utils.ts`**: Core CSS class merger utility.

---

## Key Configuration Files

- **`package.json`**: Manages node dependencies and run scripts.
- **`astro.config.mjs`**: Astro integration configuration settings.
- **`tsconfig.json`**: TypeScript compiler options.

---

## Available Commands

- **`pnpm dev`**: Run the Astro development server (port `3000`).
- **`pnpm build`**: Build production assets. _Note: The AI assistant should NOT run this command; the user will handle builds manually._
- **`pnpm preview`**: Preview the built site locally.
- **`pnpm astro ...`**: Run native Astro CLI tools.
