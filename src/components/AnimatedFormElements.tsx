import { useState } from "react";
import { motion } from "framer-motion";
import type {
  AnimatedInputProps,
  AnimatedTextareaProps,
  AnimatedSelectProps,
} from "../types/formElements";

export function AnimatedInput({
  label,
  type = "text",
  required = false,
  name,
  value,
  onChange,
}: AnimatedInputProps) {
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
          isFocused ? "text-[var(--primary)]" : "text-[var(--text-primary)]"
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

export function AnimatedTextarea({
  label,
  required = false,
  name,
  value,
  onChange,
}: AnimatedTextareaProps) {
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
          isFocused ? "text-[var(--primary)]" : "text-[var(--text-primary)]"
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

export function AnimatedSelect({
  label,
  name,
  value,
  onChange,
  children,
}: AnimatedSelectProps) {
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
          isFocused ? "text-[var(--primary)]" : "text-[var(--text-primary)]"
        }`}>
        {label}
      </motion.label>

      <select
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full bg-transparent text-[var(--text-primary)] border-none outline-none py-1 text-base font-light focus:ring-0 focus:outline-none [&>option]:bg-white [&>option]:text-black dark:[&>option]:bg-[#120826] dark:[&>option]:text-white">
        {children}
      </select>

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
