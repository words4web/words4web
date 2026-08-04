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
- [**`services/`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/public/services) - Generated high-resolution illustrations for services and case studies.
- [**`work/`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/public/work) - High-resolution screenshots and visuals for selected work projects.

### 💻 Source Code (`/src/`)

- [**`pages/`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/pages)
  - [**`index.astro`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/pages/index.astro) - Main page template mounting the components.
- [**`layouts/`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/layouts)
  - [**`Layout.astro`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/layouts/Layout.astro) - Main HTML layout wrapper.
- [**`index.css`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/index.css) - Core theme overrides (variables for dark/light mode, custom glassmorphic styling, neon racing border comets, logo glows, and scrollbar details).
- [**`components/`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components)
  - [**`ThemeProvider.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/ThemeProvider.tsx) - Context provider managing light/dark mode states.
  - [**`SmoothScroll.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/SmoothScroll.tsx) - Sets up Lenis smooth scrolling.
  - [**`CustomCursor.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/CustomCursor.tsx) - Follow-cursor animation with hover scale adjustments.
  - [**`ScrollProgress.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/ScrollProgress.tsx) - A full-height wavy sinusoidal path that draws on scroll with a trailing neon glow.
  - [**`Navbar.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/Navbar.tsx) - Responsive header navigation with dark mode black-glass styling and dropdown link font improvements.
  - [**`Hero.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/Hero.tsx) - Main hero entry utilizing the 3D Canvas, particle sphere, floating cards, and shooting star queue.
  - [**`ParticleSphere.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/ParticleSphere.tsx) - 3D Canvas particle sphere logic.
  - [**`FloatingCard.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/FloatingCard.tsx) - Individual floating cards featuring a sliding left-to-right fill animation.
  - [**`Services.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/Services.tsx) - Custom service section containing the EU commission case study banner and interactive 3D Flip Cards.
  - [**`FlipCard.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/FlipCard.tsx) - 3D card flip card component.
  - [**`CaseStudies.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/CaseStudies.tsx) - Selected Works showcase section featuring mock browser containers, neon overlays, and page-scrolling hover animations.
  - [**`About.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/About.tsx) - Story section layout featuring Milestone statistics.
  - [**`Counter.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/Counter.tsx) - Interactive statistical scroll counter.
  - [**`Testimonials.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/Testimonials.tsx) - Client carousel reviews.
  - [**`TestimonialCard.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/TestimonialCard.tsx) - Card layout for individual user reviews.
  - [**`Contact.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/Contact.tsx) - Premium Contact Us form section with input animations.
  - [**`Footer.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/Footer.tsx) - 4-column detailed responsive footer.
  - [**`MagneticButton.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/MagneticButton.tsx) - Premium physics-based micro-interactive button.
  - [**`Section.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/Section.tsx) - Structured wrapper for sections.
- [**`data/`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/data)
  - [**`navData.ts`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/data/navData.ts) - Site navigation links structure and sub-services.
  - [**`heroCardsData.ts`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/data/heroCardsData.ts) - Coordinates, delays, and titles for all 7 floating cards in the Hero section.
  - [**`servicesData.ts`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/data/servicesData.ts) - Detailed descriptions for the core services.
  - [**`workData.ts`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/data/workData.ts) - Stores data (titles, descriptions, screenshot paths) for the 3 selected works projects.
  - [**`aboutData.tsx`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/data/aboutData.tsx) - Stores about details copy and milestone statistics.
  - [**`testimonialsData.ts`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/data/testimonialsData.ts) - Modular testimonial quotes list.
  - [**`tickerData.ts`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/data/tickerData.ts) - Fast marquee logos list.
- [**`types/`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/types)
  - [**`hero.ts`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/types/hero.ts), [**`navigation.ts`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/types/navigation.ts), [**`services.ts`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/types/services.ts), [**`work.ts`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/types/work.ts), [**`about.ts`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/types/about.ts), [**`section.ts`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/types/section.ts), [**`testimonial.ts`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/types/testimonial.ts) - Strongly typed TypeScript interface folders.
- [**`lib/`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/lib)
  - [**`utils.ts`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/lib/utils.ts) - Core CSS class merger utility.

---

## ⚙️ Key Configuration Files

- [**`package.json`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/package.json) - Manages node dependencies and scripts.
- [**`astro.config.mjs`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/astro.config.mjs) - Astro integration configuration settings.
- [**`tsconfig.json`**](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/tsconfig.json) - TypeScript compiler options.

---

## 🚀 Available Commands

Run these scripts from the website root directory:

```bash
pnpm dev      # Starts the Astro local development server (default: port 3000)
pnpm preview  # Preview the production-built site locally
pnpm astro    # Run Astro CLI utility commands directly
```

> [!NOTE]
> **`pnpm build`** builds production assets. The AI assistant should **NOT** run this command; the user will handle builds manually.

---

## 📝 Homepage Content & Section Migration Plan

All homepage components and section order configurations are aligned with the client's provided SEO homepage structure spec (`W4W Homepage Content.docx`).

### Section Mapping & Implementation Status

| Docx Section   | Section Title / Target Page Section | Status      | Component & Implementation Context                                                                                                                                                                                                                                                     |
| :------------- | :---------------------------------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Section 1**  | Hero Section                        | `Completed` | Integrated the lead form, stats bar, and "Who We Are" content in [Hero.tsx](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/Hero.tsx).                                                                                                          |
| **Section 2**  | Trusted By / Client Logos           | `Completed` | Added the scrolling [Ticker.tsx](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/Ticker.tsx) using data from [tickerData.ts](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/data/tickerData.ts).                   |
| **Section 3**  | Portfolio / Work Showcase           | `Completed` | Configured projects showcase in [CaseStudies.tsx](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/CaseStudies.tsx) using data from [workData.ts](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/data/workData.ts). |
| **Section 4**  | Why Choose Us (6-Feature Grid)      | `Completed` | Formed a clean grid system layout inside [WhyChooseUs.tsx](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/WhyChooseUs.tsx).                                                                                                                    |
| **Section 5**  | Client Spotlight / Testimonials     | `Completed` | Created a high-end testimonial slider in [Testimonials.tsx](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/Testimonials.tsx) with a brand trust banner.                                                                                        |
| **Section 6**  | Services Grid (8 Core Services)     | `Completed` | Implemented 3D flip card grids inside [Services.tsx](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/Services.tsx) and [servicesData.ts](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/data/servicesData.ts).     |
| **Section 7**  | Industries We Serve (5 Industries)  | `Completed` | Rendered key market industry blocks inside [Industries.tsx](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/Industries.tsx).                                                                                                                    |
| **Section 8**  | Our Process (5 Steps)               | `Completed` | Built sequential execution pipeline visualizations inside [Process.tsx](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/Process.tsx).                                                                                                           |
| **Section 10** | Meet Our Founder                    | `Completed` | Personal bio, story, and signatures implemented in [Founder.tsx](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/Founder.tsx).                                                                                                                  |
| **Section 11** | Tools & Platforms We Work With      | `Completed` | Organized stack tool badges in [Tools.tsx](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/Tools.tsx).                                                                                                                                          |
| **Section 12** | Countries We Have Served            | `Completed` | High-fidelity interactive layout showcasing served regions in [Countries.tsx](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/Countries.tsx).                                                                                                   |
| **Section 13** | Contact / Lead Form                 | `Completed` | Formulated input animation layout for conversions inside [Contact.tsx](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/Contact.tsx).                                                                                                            |
| **Section 14** | FAQs (6 key questions)              | `Completed` | Structured collapsible accordion menu in [FAQs.tsx](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/FAQs.tsx).                                                                                                                                  |
| **Section 15** | Closing CTA Banner                  | `Completed` | Catchy bottom-funnel redirect section rendered in [CTA.tsx](file:///home/mazahir/projects/work/Words4Web%20Project/word4web_website/src/components/CTA.tsx).                                                                                                                           |

---

## 🔒 Backend Integration & Spam Protection

The website communicates with a secure Express API backend located in `../word4web_backend`:

- **Port**: Runs on port `5005` (configurable via environment variables).
- **Functionality**: Standardizes lead/contact validation rules and processes forms for delivery.
- **CORS Config**: The Astro origin must be whitelisted in the backend environment.

### 🛡️ Anti-Spam & Bot Protection Pipeline

> [!IMPORTANT]
> **Honeypot Validation**: A hidden `website` input field is embedded in both the `Contact` and `LeadForm` components.
>
> - **Client-Side:** If a bot fills in this honeypot field, the client fakes a successful submission instantly to the bot but cancels all actual network request pipelines.
> - **Backend Guard:** The Express server strictly checks that the incoming `website` request body parameter is empty before processing any submission.
> - **Rate & Speed Limiting:** Backed by progressive speed-limiting (`express-slow-down`) and endpoint rate-limiting (`express-rate-limit`) to prevent DDoS and spam abuse.
