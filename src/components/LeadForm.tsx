import React, { useState } from "react";
import { motion } from "framer-motion";
import type { LeadFormProps } from "../types/leadForm";

export function LeadForm({ onSubmitSuccess }: LeadFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    helpWith: "Website",
    details: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (onSubmitSuccess) {
      onSubmitSuccess();
    }
  };

  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      animate={isFocused ? { y: 0 } : { y: [0, -15, 0] }}
      transition={
        isFocused
          ? { type: "spring", stiffness: 300, damping: 25 }
          : {
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
            }
      }
      style={{
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        willChange: "transform",
      }}
      className="w-full max-w-lg mx-auto rounded-3xl p-6 md:p-8 border border-[var(--glass-border)] relative overflow-hidden bg-white/95 dark:bg-neutral-950/95 shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
      <h3 className="font-display text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-1">
        Tell Us About Your Business
      </h3>
      <p className="text-xs md:text-sm text-[var(--text-secondary)] mb-6">
        We'll get back to you with a plan — no obligation, no spam.
      </p>

      {formSubmitted ? (
        <div className="py-16 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] text-2xl mb-6 animate-bounce">
            ✓
          </div>
          <h4 className="font-display text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-3">
            Thank You!
          </h4>
          <p className="text-sm md:text-base text-[var(--text-secondary)]">
            Your message has been sent. We'll contact you within 24 hours.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) {
              setIsFocused(false);
            }
          }}
          className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[var(--text-primary)] font-bold mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="w-full px-4 py-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-sm text-[var(--text-primary)] placeholder-black/35 dark:placeholder-white/30 focus:outline-none focus:border-[var(--primary)] transition-all"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[var(--text-primary)] font-bold mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                className="w-full px-4 py-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-sm text-[var(--text-primary)] placeholder-black/35 dark:placeholder-white/30 focus:outline-none focus:border-[var(--primary)] transition-all"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[var(--text-primary)] font-bold mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1 (555) 123-4567"
                className="w-full px-4 py-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-sm text-[var(--text-primary)] placeholder-black/35 dark:placeholder-white/30 focus:outline-none focus:border-[var(--primary)] transition-all"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[var(--text-primary)] font-bold mb-1.5">
                What do you need help with?
              </label>
              <select
                name="helpWith"
                value={formData.helpWith}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] transition-all [&>option]:bg-white [&>option]:text-black dark:[&>option]:bg-[#120826] dark:[&>option]:text-white">
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
          </div>

          <div className="w-full">
            <label className="block text-[10px] uppercase tracking-wider text-[var(--text-primary)] font-bold mb-1.5">
              Project Details
            </label>
            <textarea
              name="details"
              rows={3}
              value={formData.details}
              onChange={handleInputChange}
              placeholder="Tell us a bit about your project..."
              className="w-full px-4 py-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-sm text-[var(--text-primary)] placeholder-black/35 dark:placeholder-white/30 focus:outline-none focus:border-[var(--primary)] transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[var(--primary)] to-[#9d4edd] font-bold text-xs text-white border-none flex items-center justify-center gap-2 mt-1 shadow-[0_0_15px_rgba(123,44,191,0.2)] hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer">
            <span>Submit →</span>
          </button>
        </form>
      )}
    </motion.div>
  );
}
