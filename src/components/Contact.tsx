import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";

function AnimatedInput({
  label,
  type = "text",
  required = false,
  name,
}: {
  label: string;
  type?: string;
  required?: boolean;
  name: string;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative w-full border-b border-[var(--text-secondary)]/15 py-2 mt-4 text-left">
      {/* Floating Label */}
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

      {/* Input Field */}
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full bg-transparent text-[var(--text-primary)] border-none outline-none py-1 text-base font-light focus:ring-0 focus:outline-none"
      />

      {/* Expanding Bottom Highlight Line */}
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
}: {
  label: string;
  required?: boolean;
  name: string;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative w-full border-b border-[var(--text-secondary)]/15 py-2 mt-6 text-left">
      {/* Floating Label */}
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

      {/* Textarea Field */}
      <textarea
        name={name}
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        rows={4}
        className="w-full bg-transparent text-[var(--text-primary)] border-none outline-none py-1 text-base font-light focus:ring-0 resize-none focus:outline-none"
      />

      {/* Expanding Bottom Highlight Line */}
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-[var(--text-secondary)] font-light leading-relaxed max-w-3xl">
              We’d love to connect with you! Whether you have a question, need a
              custom quote, or want to brainstorm your next big project, our
              team is here to provide expert guidance and tailored solutions.
              Let’s bring your vision to life!
            </p>
          </div>

          {/* Representative Card Image */}
          <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative border border-[var(--text-secondary)]/10 group">
            <img
              src="/contact/representative.jpg"
              alt="Smiling female customer support representative wearing a headset, sitting in a modern office workspace with computers in the background for contact"
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
                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-8 text-left leading-tight">
                  Need expert guidance? Let’s discuss your project and turn your
                  vision into reality.
                </h3>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnimatedInput
                      label="First Name"
                      name="firstName"
                      required
                    />
                    <AnimatedInput label="Last Name" name="lastName" required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnimatedInput
                      label="Email Address"
                      type="email"
                      name="email"
                      required
                    />
                    <AnimatedInput
                      label="Phone"
                      type="tel"
                      name="phone"
                      required
                    />
                  </div>

                  <AnimatedTextarea
                    label="Write your message here"
                    name="message"
                    required
                  />

                  {/* Submit Button */}
                  <div className="mt-8 flex justify-start">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="group relative overflow-hidden rounded-full px-8 py-4 glass-panel font-medium interactive text-sm flex items-center gap-2 border border-[var(--text-secondary)]/20">
                      <span className="relative z-10 text-[var(--text-primary)] transition-colors group-hover:text-white">
                        Submit Now
                      </span>
                      <span className="relative z-10 group-hover:text-white transition-colors group-hover:translate-x-1 duration-300">
                        →
                      </span>
                      <div className="absolute inset-0 bg-[var(--primary)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
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
                {/* Glowing Checkmark */}
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
                    Message Sent!
                  </h3>
                  <p className="text-[var(--text-secondary)] font-light max-w-sm">
                    Thank you for connecting. Our team is already reviewing your
                    details and will get back to you shortly.
                  </p>
                </div>
                <motion.button
                  onClick={() => setSubmitted(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 px-6 py-2.5 rounded-full border border-[var(--text-secondary)]/20 hover:border-[var(--primary)]/40 text-xs font-semibold text-[var(--text-secondary)] transition-all duration-300 hover:text-white">
                  Send Another Message
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  );
}
