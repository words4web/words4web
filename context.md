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
  - **`assets/`**: General styling, fonts, or helper media.
  - **`contact/`**: Assets related to the Contact section.
  - **`logo/`**: Contains the brand logo variations (`logo_purple.png`, `logo_black.png`, etc.).
  - **`services/`**: Generated high-resolution illustrations for each service and case study.
  - **`work/`**: High-resolution screenshots and visuals for selected work projects.
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
    - **`FlipCard.tsx`**: 3D card flip card component.
    - **`CaseStudies.tsx`**: Selected Works showcase section featuring mock browser containers, neon overlays, and page-scrolling hover animations.
    - **`About.tsx`**: Story section layout featuring Milestone statistics.
    - **`Counter.tsx`**: Interactive statistical scroll counter.
    - **`Testimonials.tsx`**: Client carousel reviews.
    - **`TestimonialCard.tsx`**: Card layout for individual user reviews.
    - **`Contact.tsx`**: Premium Contact Us form section with input animations.
    - **`Footer.tsx`**: 4-column detailed responsive footer.
    - **`MagneticButton.tsx`**: Premium physics-based micro-interactive button.
    - **`Section.tsx`**: Structured wrapper for sections.
  - **`data/`**: Modular dataset folder.
    - **`navData.ts`**: Contains the site navigation links structure and sub-services.
    - **`heroCardsData.ts`**: Coordinates, delays, and titles for all 7 floating cards in the Hero section.
    - **`servicesData.ts`**: Detailed descriptions for the core services.
    - **`workData.ts`**: Stores data (titles, descriptions, screenshot paths) for the 3 selected works projects.
    - **`aboutData.tsx`**: Stores about details copy and milestone statistics.
    - **`testimonialsData.ts`**: Modular testimonial quotes list.
    - **`tickerData.ts`**: Fast marquee logos list.
  - **`types/`**: TypeScript interfaces folder.
    - **`hero.ts`**: Type structures for `ShootingStar`, `HeroCardItem`, and `FloatingCardProps`.
    - **`navigation.ts`**: Type structures for `NavItem` links.
    - **`services.ts`**: Type structures for `ServiceItem` blocks.
    - **`work.ts`**: Type structures for `WorkItem` blocks.
    - **`about.ts`**: Type structures for About content configurations.
    - **`section.ts`**: Type structures for section layouts.
    - **`testimonial.ts`**: Type structures for user testimonials.
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

---

### Homepage Content & Section Migration Plan (Completed)

All homepage components and section orders have been updated to align strictly with the client's provided SEO homepage structure (`W4W Homepage Content.docx`).

### 1. Section Order & Structure Comparison

Here is the final structure mapped to what is rendered in [index.astro](file:///home/mazahir/projects/work/word4web_website/src/pages/index.astro):

| Docx Section   | Section Title / Target Page Section                              | Current Status | Required Action / Component Change                                                                                                                                                                                                        |
| :------------- | :--------------------------------------------------------------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Section 1**  | Hero Section (H1, Subhead, 2 CTAs, Lead Form, Stats, Who We Are) | Completed      | Modified [Hero.tsx](file:///home/mazahir/projects/work/word4web_website/src/components/Hero.tsx) to align text, add the lead form, stats bar, and "Who We Are" content.                                                                   |
| **Section 2**  | Trusted By / Client Logos (Ticker Animation)                     | Completed      | Added the [Ticker.tsx](file:///home/mazahir/projects/work/word4web_website/src/components/Ticker.tsx) layout using `tickerData.ts` as a section below Hero.                                                                               |
| **Section 3**  | Portfolio / Work Showcase                                        | Completed      | Refactored [CaseStudies.tsx](file:///home/mazahir/projects/work/word4web_website/src/components/CaseStudies.tsx) and [workData.ts](file:///home/mazahir/projects/work/word4web_website/src/data/workData.ts) to match specified template. |
| **Section 4**  | Why Choose Us (6-Feature Grid)                                   | Completed      | Created [WhyChooseUs.tsx](file:///home/mazahir/projects/work/word4web_website/src/components/WhyChooseUs.tsx) and its data file.                                                                                                          |
| **Section 5**  | Client Spotlight (Testimonial reviews + trust strip)             | Completed      | Refactored [Testimonials.tsx](file:///home/mazahir/projects/work/word4web_website/src/components/Testimonials.tsx) and added the trust strip.                                                                                             |
| **Section 6**  | Services Grid (All 8 Core Services)                              | Completed      | Refactored [Services.tsx](file:///home/mazahir/projects/work/word4web_website/src/components/Services.tsx) and [servicesData.ts](file:///home/mazahir/projects/work/word4web_website/src/data/servicesData.ts) to detail all 8 services.  |
| **Section 7**  | Industries We Serve (5 Industries list)                          | Completed      | Created [Industries.tsx](file:///home/mazahir/projects/work/word4web_website/src/components/Industries.tsx) and associated data structures.                                                                                               |
| **Section 8**  | Our Process (5 Steps: Discovery to Track & Grow)                 | Completed      | Created [Process.tsx](file:///home/mazahir/projects/work/word4web_website/src/components/Process.tsx) and data configurations.                                                                                                            |
| **Section 10** | Meet Our Founder (Priya Khatod)                                  | Completed      | Created [Founder.tsx](file:///home/mazahir/projects/work/word4web_website/src/components/Founder.tsx) for bio and story.                                                                                                                  |
| **Section 11** | Tools & Platforms We Work With (6 Categories)                    | Completed      | Created [Tools.tsx](file:///home/mazahir/projects/work/word4web_website/src/components/Tools.tsx) and categories listing.                                                                                                                 |
| **Section 12** | Countries We Have Served (Flags / Map)                           | Completed      | Created [Countries.tsx](file:///home/mazahir/projects/work/word4web_website/src/components/Countries.tsx) containing country flags.                                                                                                       |
| **Section 13** | Contact / Lead Form                                              | Completed      | Refactored [Contact.tsx](file:///home/mazahir/projects/work/word4web_website/src/components/Contact.tsx) to match client titles and the Trust strip.                                                                                      |
| **Section 14** | FAQs (6 key questions)                                           | Completed      | Created [FAQs.tsx](file:///home/mazahir/projects/work/word4web_website/src/components/FAQs.tsx) accordion component.                                                                                                                      |
| **Section 15** | Closing CTA Banner                                               | Completed      | Created [CTA.tsx](file:///home/mazahir/projects/work/word4web_website/src/components/CTA.tsx) banner.                                                                                                                                     |

### 2. Implementation Steps

1. **Step 1: Update Data Store & Types** (Done)
   - Declared interfaces for the new sections in `src/types/`.
   - Updated data structures in `src/data/` for services, why-choose-us, process, founder, tools, countries, and FAQs.
2. **Step 2: Refactor Existing Components** (Done)
   - Updated `Hero.tsx`, `CaseStudies.tsx`, `Testimonials.tsx`, and `Contact.tsx`.
3. **Step 3: Build New Components** (Done)
   - Created components for Ticker, WhyChooseUs, Industries, Process, Founder, Tools, Countries, FAQs, and CTA.
4. **Step 4: Update Layout & Routing** (Done)
   - Imported all updated and new components into `src/pages/index.astro` and ordered them according to the client-specified sequence.
