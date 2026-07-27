import { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { ParticleSphere } from "./ParticleSphere";
import { MagneticButton } from "./MagneticButton";

export function Hero() {
  const { theme } = useTheme();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    helpWith: "Website",
    details: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submit
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        helpWith: "Website",
        details: "",
      });
    }, 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-28 pb-16 px-4 md:px-8">
      {/* Background Radial Gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--background-secondary)_0%,_var(--background)_100%)] opacity-50" />

      {/* 3D Canvas Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: y1, opacity }}>
        <Canvas camera={{ position: [0, 0, 5], fof: 45 } as any}>
          <ambientLight intensity={0.5} />
          <ParticleSphere theme={theme} />
          <Environment preset="city" />
        </Canvas>
      </motion.div>

      {/* Hero Content Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Typography & CTAs (7/12) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-panel px-4 py-1.5 rounded-full mb-6 flex items-center gap-2 pointer-events-auto interactive"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]">
              Best Digital Marketing Agency
            </span>
          </motion.div>

          <motion.h1
            className="font-display font-bold text-4xl md:text-7xl tracking-tight leading-[1.1] mb-6 text-[var(--text-primary)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Build Your Brand <br />
            <span className="text-gradient">with Words4Web</span>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-[var(--text-secondary)] max-w-2xl font-light mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Words4Web builds websites and apps, runs your SEO and social media,
            manages your paid ads and handles your ecommerce storefront — all
            under one roof, with a real team behind every campaign.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#contact">
              <MagneticButton className="rounded-xl px-6 py-3.5 bg-gradient-to-r from-[var(--primary)] to-[#9d4edd] font-bold text-sm text-white shadow-[0_0_20px_rgba(123,44,191,0.3)] border-none">
                Book a Free Strategy Call →
              </MagneticButton>
            </a>
            <a href="#work">
              <MagneticButton className="rounded-xl px-6 py-3.5 glass-panel font-bold text-sm text-[var(--text-primary)] border border-white/10 hover:bg-white/5 transition-all">
                See Our Work →
              </MagneticButton>
            </a>
          </motion.div>

          <motion.p
            className="text-xs text-[var(--text-secondary)] font-normal border-l-2 border-[var(--primary)] pl-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Trusted by 150+ brands across India, the UK, Europe, and beyond
            since 2020.
          </motion.p>
        </div>

        {/* Right Column: Lead Form (5/12) */}
        <motion.div
          className="lg:col-span-5 w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-full rounded-3xl p-6 md:p-8 glass-panel border border-white/10 relative overflow-hidden bg-black/10 dark:bg-white/[0.02] shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            <h3 className="font-display text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-1">
              Tell Us About Your Business
            </h3>
            <p className="text-xs text-[var(--text-secondary)] mb-6">
              We'll get back to you with a plan — no obligation, no spam.
            </p>

            {formSubmitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] mb-4 animate-bounce">
                  ✓
                </div>
                <h4 className="font-display text-lg font-bold text-[var(--text-primary)] mb-2">
                  Thank You!
                </h4>
                <p className="text-xs text-[var(--text-secondary)]">
                  Your message has been sent. We'll contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[var(--text-secondary)] font-bold mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/20 dark:bg-white/[0.03] border border-white/10 text-sm text-[var(--text-primary)] placeholder-white/30 focus:outline-none focus:border-[var(--primary)] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[var(--text-secondary)] font-bold mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/20 dark:bg-white/[0.03] border border-white/10 text-sm text-[var(--text-primary)] placeholder-white/30 focus:outline-none focus:border-[var(--primary)] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[var(--text-secondary)] font-bold mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/20 dark:bg-white/[0.03] border border-white/10 text-sm text-[var(--text-primary)] placeholder-white/30 focus:outline-none focus:border-[var(--primary)] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[var(--text-secondary)] font-bold mb-1.5">
                    What do you need help with?
                  </label>
                  <select
                    name="helpWith"
                    value={formData.helpWith}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/20 dark:bg-white/[0.03] border border-white/10 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] transition-all [&>option]:bg-[#120826] [&>option]:text-white"
                  >
                    <option value="Website">Website</option>
                    <option value="App">App</option>
                    <option value="SEO">SEO</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Amazon/Etsy">Amazon/Etsy</option>
                    <option value="Paid Ads">Paid Ads</option>
                    <option value="Not Sure Yet">Not Sure Yet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[var(--text-secondary)] font-bold mb-1.5">
                    Project Details
                  </label>
                  <textarea
                    name="details"
                    rows={3}
                    value={formData.details}
                    onChange={handleInputChange}
                    placeholder="Tell us a bit about your project..."
                    className="w-full px-4 py-2.5 rounded-xl bg-black/20 dark:bg-white/[0.03] border border-white/10 text-sm text-[var(--text-primary)] placeholder-white/30 focus:outline-none focus:border-[var(--primary)] transition-all resize-none"
                  />
                </div>

                <MagneticButton className="w-full py-3 rounded-xl bg-gradient-to-r from-[var(--primary)] to-[#9d4edd] font-bold text-xs text-white border-none flex items-center justify-center gap-2 mt-2 shadow-[0_0_15px_rgba(123,44,191,0.2)]">
                  <span>Submit →</span>
                </MagneticButton>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
