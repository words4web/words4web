# Words4Web Website

A modern, high-performance, and interactive digital agency website built with **Astro**, **React**, **Tailwind CSS v4**, **Three.js (React Three Fiber)**, and **Framer Motion**.

## Tech Stack & Architecture

- **Framework**: [Astro](https://astro.build/) (leveraging Islands Architecture for zero-JS footprints on static elements)
- **UI Components**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (integrated via `@tailwindcss/vite` plugin)
- **3D WebGL Graphics**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://r3f.docs.pmnd.rs/) + [@react-three/drei](https://github.com/pmndrs/drei)
- **Scroll & Motion**: [Lenis](https://lenis.darkroom.engineering/) (Smooth scroll) and [Framer Motion](https://www.framer.com/motion/)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+)
- [pnpm](https://pnpm.io/) (v10+ recommended)

### Installation

1. Clone the repository and install dependencies:

   ```bash
   pnpm install
   ```

2. Start the local development server:
   ```bash
   pnpm dev
   ```
   _The server will run locally, by default on port `3000` (or `3001` if port 3000 is occupied)._

---

## Build & Preview

To verify compilation and test the production-ready build locally:

- **Build Static Site**:

  ```bash
  pnpm build
  ```

  Generates fully rendered, SEO-optimized HTML pages and minified bundles in the `dist/` directory.

- **Preview Build**:

  ```bash
  pnpm preview
  ```

  Launches a local static server hosting the compiled production assets in `dist/`.

- **Type Check**:

  ```bash
  pnpm lint
  ```

  Runs the TypeScript typechecker (`tsc --noEmit`) to verify type safety without outputting files.

- **Clean Cache**:
  ```bash
  pnpm clean
  ```
  Deletes the build output (`dist/`) and Astro's internal compilation cache (`.astro/`).
