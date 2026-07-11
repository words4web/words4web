# words4web Website Project Context

This is the repository for the **words4web** official website, a premium/luxury digital agency landing page featuring interactive 3D elements, modern smooth scrolling, and dark/light modes.

## Technical Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using `@tailwindcss/vite` plugin)
- **3D Graphics**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://r3f.docs.pmnd.rs/) + [@react-three/drei](https://github.com/pmndrs/drei)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/) + [@studio-freight/react-lenis](https://github.com/darkroomengineering/react-lenis)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

---

## File Structure

- **`/public/`**: Contains static assets served directly at the root path.
  - **`logo/`**: Contains the brand logo variations (`logo_purple.png`, `logo_black.png`, `logo_white.png`).
  - **`services/`**: Generated high-resolution illustrations for each service and case study (`eu_isle_logo.png`, `digital_marketing.jpg`, `amazon_marketing.jpg`, etc.).
  - **`contact/`**: Houses contact details illustrations (`representative.jpg`).
- **`/src/`**: Contains the source code of the React application.
  - **`main.tsx`**: Application entry point.
  - **`App.tsx`**: Main layout component hosting the cursor, navigation header, landing sections, and footer structure.
  - **`index.css`**: Core Tailwind theme overrides (variables for dark/light mode, custom glassmorphic styling, and scrollbar details).
  - **`components/`**:
    - **`ThemeProvider.tsx`**: Context provider managing light/dark mode states.
    - **`SmoothScroll.tsx`**: Sets up Lenis smooth scrolling.
    - **`CustomCursor.tsx`**: Follow-cursor animation with hover scale adjustments.
    - **`Navbar.tsx`**: Responsive header navigation with dynamic hover-dropdown stagger animations for Services.
    - **`Hero.tsx`**: 3D Canvas rendering a particle sphere, floating UI cards, and the agency hero copy text.
    - **`Services.tsx`**: Custom service section containing the EU commission case study banner and interactive 3D Flip Cards (which alternate between X and Y axes).
    - **`CaseStudies.tsx`**: Selected Works showcase section featuring mock browser containers and automated page-scrolling animations on hover.
    - **`About.tsx`**: Story section layout featuring CEO portrait, standout feature block, and animated count indicators.
    - **`Testimonials.tsx`**: Client carousel reviews.
    - **`Contact.tsx`**: Premium Contact Us form section featuring floating labels, input focus border expansions, support team image layout, and a success confirmation screen.
    - **`Footer.tsx`**: 4-column detailed responsive footer containing office details, socials, and quick links.
    - **`MagneticButton.tsx`**: Premium physics-based micro-interactive button.
  - **`data/`**: Modular dataset folder.
    - **`navData.ts`**: Contains the site navigation links structure and sub-services.
    - **`servicesData.ts`**: Contains detailed descriptions and image paths for the 6 core services.
    - **`workData.ts`**: Stores data (titles, descriptions, screenshot paths) for the 3 selected works projects.
    - **`aboutData.ts`**: Stores about details copy and counter milestone statistics.
  - **`types/`**: TypeScript interfaces folder.
    - **`navigation.ts`**: Type structures for `NavItem` links.
    - **`services.ts`**: Type structures for `ServiceItem` blocks.
    - **`work.ts`**: Type structures for `WorkItem` blocks.
    - **`about.ts`**: Type structures for About content configurations.
  - **`lib/`**:
    - **`utils.ts`**: Core CSS class merger utility.

---

## Key Configuration Files

- **`package.json`**: Manages node dependencies and run scripts.
- **`vite.config.ts`**: Vite bundle configurations using Tailwind v4 compiler plugins.
- **`tsconfig.json`**: TypeScript compiler options.
- **`pnpm-workspace.yaml`**: Workspace configuration (if pnpm monorepo setup is used).

---

## Available Commands

- **`pnpm dev`**: Run the development server (configured on port `3000` with host `0.0.0.0`).
- **`pnpm build`**: Build production assets (outputs to `dist/`). _Note: The developer/AI assistant should NOT run this command; the user will handle builds manually._
- **`pnpm preview`**: Preview the built site locally.
- **`pnpm clean`**: Removes build output folder `dist/`.
- **`pnpm lint`**: Runs TypeScript type checking with `tsc --noEmit`.
