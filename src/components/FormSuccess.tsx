import { motion } from "framer-motion";
import type { FormSuccessProps } from "../types/formElements";
import { MagneticButton } from "./MagneticButton";

export function FormSuccess({
  fullName,
  email,
  phone,
  serviceLabel,
  serviceValue,
  details,
  formType,
  onReset,
}: FormSuccessProps) {
  return (
    <motion.div
      key="success-screen"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="flex flex-col items-center justify-center py-6 gap-6 text-center w-full max-w-md mx-auto">
      {/* Animated Success Ring */}
      <div className="relative flex items-center justify-center w-24 h-24">
        {/* Outer rotating dashed ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-dashed border-[var(--primary)]/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        {/* Inner breathing glow circle */}
        <motion.div
          className="absolute inset-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/40 flex items-center justify-center"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
          <svg
            className="w-8 h-8 text-[var(--primary)]"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </motion.div>
      </div>

      {/* Header Info */}
      <div>
        <h3 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-2">
          Message Sent!
        </h3>
        <p className="text-[var(--text-secondary)] font-light max-w-sm text-sm leading-relaxed">
          We've received your request and will get back to you within 24 hours.
        </p>
      </div>

      {/* Premium Receipt / Details Card */}
      <div className="w-full mt-2 rounded-2xl bg-black/[0.02] dark:bg-white/[0.01] border border-black/5 dark:border-white/5 relative overflow-hidden shadow-lg backdrop-blur-sm">
        {/* Dynamic subtle accent background gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/5 to-transparent pointer-events-none opacity-40" />

        <div className="relative p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-black/5 dark:border-white/5 pb-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)]/60">
              Submission Receipt
            </span>
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/15">
              {formType}
            </span>
          </div>

          <div className="space-y-3 text-left">
            {/* Grid fields */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs">
              <ReceiptField label="Name" value={fullName} isBold />
              <ReceiptField label="Email" value={email} truncate />
              <ReceiptField label="Phone" value={phone} />
              <ReceiptField
                label="Service"
                value={serviceValue}
                labelAlt={serviceLabel}
              />
            </div>
          </div>

          {details && (
            <div className="border-t border-black/5 dark:border-white/5 pt-3 mt-3">
              <span className="block text-[10px] uppercase tracking-wider text-[var(--text-secondary)]/60 mb-1">
                Details
              </span>
              <div className="p-3 rounded-lg bg-black/[0.01] dark:bg-white/[0.01] border border-black/5 dark:border-white/5 text-xs text-[var(--text-secondary)] leading-relaxed italic">
                "{details}"
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Revert Button */}
      <MagneticButton
        onClick={onReset}
        variant="ghost"
        className="mt-4 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[var(--primary)]/10 to-[#9d4edd]/10 border border-[var(--primary)]/30 hover:border-[var(--primary)]/60 text-[var(--text-primary)] font-semibold text-xs transition-colors cursor-pointer">
        Send Another Message
      </MagneticButton>
    </motion.div>
  );
}

interface ReceiptFieldProps {
  label: string;
  value: string;
  labelAlt?: string;
  isBold?: boolean;
  truncate?: boolean;
}

function ReceiptField({
  label,
  value,
  labelAlt,
  isBold = false,
  truncate = false,
}: ReceiptFieldProps) {
  return (
    <div>
      <span className="block text-[10px] uppercase tracking-wider text-[var(--text-secondary)]/60 mb-0.5">
        {labelAlt || label}
      </span>
      <span
        className={`text-xs text-[var(--text-primary)] ${isBold ? "font-semibold" : "font-medium"} ${truncate ? "truncate block" : ""}`}>
        {value}
      </span>
    </div>
  );
}
