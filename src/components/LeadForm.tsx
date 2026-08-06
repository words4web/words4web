import React, { useState } from "react";
import { motion } from "framer-motion";
import type { LeadFormProps } from "../types/leadForm";
import { useForm } from "../hooks/useForm";
import { FormSuccess } from "./FormSuccess";
import { PhoneInput } from "./PhoneInput";
import { leadFormDefaults } from "../constants/formDefaults";
import { validateContactFields } from "../utils/validation";

export function LeadForm({ onSubmitSuccess }: LeadFormProps) {
  const {
    formData,
    errors,
    submitted,
    isSubmitting,
    submitError,
    handleFieldChange,
    handleSubmit,
    resetForm,
  } = useForm(
    leadFormDefaults,
    (values) =>
      validateContactFields(
        values.fullName,
        values.email,
        values.phoneDialCode,
        values.phoneNumber,
      ),
    onSubmitSuccess,
    "/submit-lead",
  );

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
      className="w-full max-w-lg mx-auto rounded-3xl p-4 border border-[var(--glass-border)] relative overflow-hidden bg-white/95 dark:bg-neutral-950/95 shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
      <h3 className="font-display text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-1">
        Tell Us About Your Business
      </h3>
      <p className="text-xs md:text-sm text-[var(--text-secondary)] mb-6">
        We'll get back to you with a plan — no obligation, no spam.
      </p>

      {submitted ? (
        <FormSuccess
          fullName={formData?.fullName}
          email={formData?.email}
          phone={formData?.phone}
          serviceLabel="Help With"
          serviceValue={formData?.helpWith}
          formType={formData?.formType}
          onReset={resetForm}
        />
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
          <input
            type="text"
            name="website"
            aria-hidden="true"
            tabIndex={-1}
            autoComplete="off"
            style={{ display: "none" }}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[var(--text-primary)] font-bold mb-1.5 text-left">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={(e) => handleFieldChange("fullName", e.target.value)}
                placeholder="e.g. Priya Khatod"
                className="w-full px-4 py-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-sm text-[var(--text-primary)] placeholder-black/35 dark:placeholder-white/30 focus:outline-none focus:border-[var(--primary)] transition-all"
              />
              {errors.fullName && (
                <span className="text-red-500 text-[10px] mt-1 block text-left font-light">
                  {errors.fullName}
                </span>
              )}
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[var(--text-primary)] font-bold mb-1.5 text-left">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => handleFieldChange("email", e.target.value)}
                placeholder="priya@words4web.com"
                className="w-full px-4 py-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-sm text-[var(--text-primary)] placeholder-black/35 dark:placeholder-white/30 focus:outline-none focus:border-[var(--primary)] transition-all"
              />
              {errors.email && (
                <span className="text-red-500 text-[10px] mt-1 block text-left font-light">
                  {errors.email}
                </span>
              )}
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[var(--text-primary)] font-bold mb-1.5 text-left">
                Phone Number
              </label>
              <PhoneInput
                variant="box"
                value={formData.phoneNumber}
                onChange={(val) => handleFieldChange("phoneNumber", val)}
                onCountryChange={(c) =>
                  handleFieldChange("phoneDialCode", c.dialCode)
                }
              />
              {errors.phone && (
                <span className="text-red-500 text-[10px] mt-1 block text-left font-light">
                  {errors.phone}
                </span>
              )}
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[var(--text-primary)] font-bold mb-1.5 text-left">
                What do you need help with?
              </label>
              <select
                name="helpWith"
                value={formData.helpWith}
                onChange={(e) => handleFieldChange("helpWith", e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary)] transition-all [&>option]:bg-white [&>option]:text-black dark:[&>option]:bg-[#120826] dark:[&>option]:text-white">
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
            <label className="block text-[10px] uppercase tracking-wider text-[var(--text-primary)] font-bold mb-1.5 text-left">
              Project Details
            </label>
            <textarea
              name="details"
              rows={3}
              value={formData.details}
              onChange={(e) => handleFieldChange("details", e.target.value)}
              placeholder="Tell us a bit about your project..."
              className="w-full px-4 py-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-sm text-[var(--text-primary)] placeholder-black/35 dark:placeholder-white/30 focus:outline-none focus:border-[var(--primary)] transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[var(--primary)] to-[#9d4edd] font-bold text-xs text-white border-none flex items-center justify-center gap-2 mt-1 shadow-[0_0_15px_rgba(123,44,191,0.2)] hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
            <span>{isSubmitting ? "Submitting..." : "Submit →"}</span>
          </button>
          {submitError && (
            <div className="w-full p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-light text-left mt-2">
              {submitError}
            </div>
          )}
        </form>
      )}
    </motion.div>
  );
}
