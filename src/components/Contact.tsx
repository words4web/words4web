import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";

function AnimatedInput({
  label,
  type = "text",
  required = false,
  name,
  value,
  onChange,
}: {
  label: string;
  type?: string;
  required?: boolean;
  name: string;
  value: string;
  onChange: (val: string) => void;
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full border-b border-[var(--text-secondary)]/15 py-2 mt-4 text-left">
      <motion.label
        initial={{ y: 0, scale: 1 }}
        animate={{
          y: isFocused || value ? -24 : 0,
          scale: isFocused || value ? 0.85 : 1,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`absolute left-0 top-3 font-light text-base pointer-events-none origin-left transition-colors duration-200 ${
          isFocused
            ? "text-[var(--primary)]"
            : "text-[var(--text-secondary)]/50"
        }`}>
        {label} {required && <span className="text-red-500">*</span>}
      </motion.label>

      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full bg-transparent text-[var(--text-primary)] border-none outline-none py-1 text-base font-light focus:ring-0 focus:outline-none"
      />

      <motion.div
        initial={{ width: 0, left: "50%" }}
        animate={{
          width: isFocused ? "100%" : "0%",
          left: isFocused ? "0%" : "50%",
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="absolute bottom-0 h-[2px] bg-[var(--primary)] z-10"
      />
    </div>
  );
}

function AnimatedTextarea({
  label,
  required = false,
  name,
  value,
  onChange,
}: {
  label: string;
  required?: boolean;
  name: string;
  value: string;
  onChange: (val: string) => void;
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full border-b border-[var(--text-secondary)]/15 py-2 mt-6 text-left">
      <motion.label
        initial={{ y: 0, scale: 1 }}
        animate={{
          y: isFocused || value ? -24 : 0,
          scale: isFocused || value ? 0.85 : 1,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`absolute left-0 top-3 font-light text-base pointer-events-none origin-left transition-colors duration-200 ${
          isFocused
            ? "text-[var(--primary)]"
            : "text-[var(--text-secondary)]/50"
        }`}>
        {label} {required && <span className="text-red-500">*</span>}
      </motion.label>

      <textarea
        name={name}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        rows={4}
        className="w-full bg-transparent text-[var(--text-primary)] border-none outline-none py-1 text-base font-light focus:ring-0 resize-none focus:outline-none"
      />

      <motion.div
        initial={{ width: 0, left: "50%" }}
        animate={{
          width: isFocused ? "100%" : "0%",
          left: isFocused ? "0%" : "50%",
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="absolute bottom-0 h-[2px] bg-[var(--primary)] z-10"
      />
    </div>
  );
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "Website Development",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "Website Development",
        details: "",
      });
    }, 4000);
  };

  return (
    <Section id="contact" hasBorderTop>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
        {/* Left Column - Info & Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8 text-left">
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)]">
                Contact us
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Let's Talk About{" "}
              <span className="text-gradient">Your Business</span>
            </h2>
            <p className="mt-6 text-lg text-[var(--text-secondary)] font-light leading-relaxed max-w-3xl">
              Tell us what you're looking for and our team will get back to you
              within 24 hours — no spam, no pressure.
            </p>
          </div>

          {/* Representative Card Image */}
          <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative border border-[var(--text-secondary)]/10 group">
            <img
              src="/contact/representative.jpg"
              alt="Smiling support representative"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden flex flex-col gap-8">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="contact-form"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <AnimatedInput
                    label="Full Name"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={(val) =>
                      setFormData((prev) => ({ ...prev, fullName: val }))
                    }
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnimatedInput
                      label="Email Address"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(val) =>
                        setFormData((prev) => ({ ...prev, email: val }))
                      }
                    />
                    <AnimatedInput
                      label="Phone Number"
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={(val) =>
                        setFormData((prev) => ({ ...prev, phone: val }))
                      }
                    />
                  </div>

                  <div className="relative w-full border-b border-[var(--text-secondary)]/15 py-2 mt-4 text-left">
                    <label className="block text-xs text-[var(--text-secondary)]/50 font-light mb-1.5">
                      Service(s) you need
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          service: e.target.value,
                        }))
                      }
                      className="w-full bg-transparent text-[var(--text-primary)] border-none outline-none py-1 text-base font-light focus:ring-0 focus:outline-none [&>option]:bg-[#120826] [&>option]:text-white">
                      <option value="Website Development">
                        Website Development
                      </option>
                      <option value="Mobile App Development">
                        Mobile App Development
                      </option>
                      <option value="SEO">SEO</option>
                      <option value="Social Media Management">
                        Social Media Management
                      </option>
                      <option value="Graphic Designing">
                        Graphic Designing
                      </option>
                      <option value="E-Commerce Marketing">
                        E-Commerce Marketing
                      </option>
                      <option value="Paid Ads Management">
                        Paid Ads Management
                      </option>
                      <option value="Not Sure Yet">Not Sure Yet</option>
                    </select>
                  </div>

                  <AnimatedTextarea
                    label="Project Details"
                    name="details"
                    required
                    value={formData.details}
                    onChange={(val) =>
                      setFormData((prev) => ({ ...prev, details: val }))
                    }
                  />

                  {/* Submit Button */}
                  <div className="mt-8 flex justify-start">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="group relative overflow-hidden rounded-xl px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[#9d4edd] font-bold text-xs text-white shadow-[0_0_15px_rgba(123,44,191,0.2)] border-none flex items-center gap-2">
                      <span className="relative z-10">Submit →</span>
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success-screen"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="flex flex-col items-center justify-center py-16 gap-6 text-center">
                <div className="w-20 h-20 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)] flex items-center justify-center relative">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-[var(--primary)]/20 blur-md"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <svg
                    className="w-10 h-10 text-[var(--primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-3">
                    Thank you!
                  </h3>
                  <p className="text-[var(--text-secondary)] font-light max-w-sm">
                    We will get back to you within 24 hours.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Trust Strip */}
      <div className="w-full max-w-5xl mx-auto mt-16 px-4 py-5 rounded-2xl glass-panel border border-white/5 bg-black/10 dark:bg-white/[0.01] flex flex-wrap justify-around items-center gap-4 text-center">
        <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-[var(--text-secondary)]">
          <span className="text-[var(--primary)] mr-1">150+</span> Brands Served
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] hidden md:block" />
        <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-[var(--text-secondary)]">
          <span className="text-[var(--primary)] mr-1">8</span> Services, 1 Team
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] hidden md:block" />
        <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-[var(--text-secondary)]">
          Response Within 24 Hours
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] hidden md:block" />
        <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-[var(--text-secondary)]">
          No Obligation Quote
        </div>
      </div>
    </Section>
  );
}
