import { ThemeProvider } from "./components/ThemeProvider";
import { SmoothScroll } from "./components/SmoothScroll";
import { CustomCursor } from "./components/CustomCursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { CaseStudies } from "./components/CaseStudies";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="words4web-theme">
      <SmoothScroll>
        <div className="relative w-full min-h-screen selection:bg-[var(--primary)] selection:text-white">
          <CustomCursor />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <CaseStudies />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </ThemeProvider>
  );
}
