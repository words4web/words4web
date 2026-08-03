import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import {
  AnimatedInput,
  AnimatedTextarea,
  AnimatedSelect,
} from "./AnimatedFormElements";
import { PhoneInput } from "./PhoneInput";
import { useForm } from "../hooks/useForm";
import { FormSuccess } from "./FormSuccess";
import { contactFormDefaults } from "../constants/formDefaults";
import { validateContactFields } from "../utils/validation";

export function Contact() {
  const {
    formData,
    errors,
    submitted,
    handleFieldChange,
    handleSubmit,
    resetForm,
  } = useForm(contactFormDefaults, (values) =>
    validateContactFields(
      values.fullName,
      values.email,
      values.phoneDialCode,
      values.phoneNumber,
    ),
  );

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
                  <div>
                    <AnimatedInput
                      label="Full Name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={(val) => handleFieldChange("fullName", val)}
                    />
                    {errors?.fullName && (
                      <span className="text-red-500 text-xs mt-1 block text-left font-light">
                        {errors?.fullName}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <AnimatedInput
                        label="Email Address"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(val) => handleFieldChange("email", val)}
                      />
                      {errors?.email && (
                        <span className="text-red-500 text-xs mt-1 block text-left font-light">
                          {errors?.email}
                        </span>
                      )}
                    </div>
                    <div>
                      <PhoneInput
                        label="Phone Number"
                        value={formData.phoneNumber}
                        onChange={(val) =>
                          handleFieldChange("phoneNumber", val)
                        }
                        onCountryChange={(c) =>
                          handleFieldChange("phoneDialCode", c.dialCode)
                        }
                      />
                      {errors?.phone && (
                        <span className="text-red-500 text-xs mt-1 block text-left font-light">
                          {errors?.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  <AnimatedSelect
                    label="Service(s) you need"
                    name="service"
                    value={formData.service}
                    onChange={(val) => handleFieldChange("service", val)}>
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
                    <option value="Graphic Designing">Graphic Designing</option>
                    <option value="E-Commerce Marketing">
                      E-Commerce Marketing
                    </option>
                    <option value="Paid Ads Management">
                      Paid Ads Management
                    </option>
                    <option value="Not Sure Yet">Not Sure Yet</option>
                  </AnimatedSelect>

                  <div>
                    <AnimatedTextarea
                      label="Project Details"
                      name="details"
                      value={formData.details}
                      onChange={(val) => handleFieldChange("details", val)}
                    />
                    {errors?.details && (
                      <span className="text-red-500 text-xs mt-1 block text-left font-light">
                        {errors?.details}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="mt-8 flex justify-start">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="group relative overflow-hidden rounded-xl px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[#9d4edd] font-bold text-xs text-white shadow-[0_0_15px_rgba(123,44,191,0.2)] border-none flex items-center gap-2 cursor-pointer">
                      <span className="relative z-10">Submit →</span>
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <FormSuccess
                fullName={formData?.fullName}
                email={formData?.email}
                phone={formData?.phone}
                serviceLabel="Service"
                serviceValue={formData?.service}
                formType={formData?.formType}
                onReset={resetForm}
              />
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
