import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGeoDialCode } from "../hooks/useGeoDialCode";
import type { CountryCode } from "../data/homepage/countryCodes";
import type { PhoneInputProps } from "../types/formElements";

export function PhoneInput({
  label,
  name = "phone",
  value,
  onChange,
  onCountryChange,
  selectedCountry: externalCountry,
  variant = "floating",
}: PhoneInputProps) {
  const { country: geoCountry, loading, countryCodes } = useGeoDialCode();
  const [internalCountry, setInternalCountry] = useState<CountryCode | null>(
    null,
  );
  const country = externalCountry ?? internalCountry ?? geoCountry;

  const [isFocused, setIsFocused] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // Sync geo result into internal state
  useEffect(() => {
    if (!loading && !externalCountry) {
      setInternalCountry(geoCountry);
    }
  }, [loading, geoCountry, externalCountry]);

  // Close dropdown on outside click
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
        setSearch("");
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // Focus search when dropdown opens
  useEffect(() => {
    if (dropdownOpen) {
      setTimeout(() => searchRef.current?.focus(), 50);
    }
  }, [dropdownOpen]);

  const filtered = countryCodes.filter((c) => {
    const query = search?.toLowerCase?.()?.trim?.() || "";
    if (!query) return true;

    const labelMatch = c?.label?.toLowerCase?.()?.includes(query);
    const dialMatch = c?.dialCode?.includes?.(query);
    const isoMatch = c?.iso2?.toLowerCase?.()?.includes(query);

    // Support common abbreviations
    let aliasMatch = false;
    if (query === "usa" && c?.iso2 === "US") aliasMatch = true;
    if (query === "uk" && c?.iso2 === "GB") aliasMatch = true;
    if (query === "uae" && c?.iso2 === "AE") aliasMatch = true;

    return labelMatch || dialMatch || isoMatch || aliasMatch;
  });

  const handleCountrySelect = (c: CountryCode) => {
    setInternalCountry(c);
    onCountryChange?.(c);
    setDropdownOpen(false);
    setSearch("");
  };

  // Label is always floated — the dial code selector is always visible in the field
  const isFloated = true;

  return (
    <div
      className={`relative w-full text-left ${variant === "floating" ? "mt-4" : ""}`}>
      {/* Floating label (only for floating variant) */}
      {variant === "floating" && label && (
        <motion.label
          initial={{ y: 0, scale: 1 }}
          animate={{
            y: isFloated ? -24 : 0,
            scale: isFloated ? 0.85 : 1,
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={`absolute left-0 top-3 font-light text-base pointer-events-none origin-left transition-colors duration-200 z-10 ${
            isFocused ? "text-[var(--primary)]" : "text-[var(--text-primary)]"
          }`}>
          {label}
        </motion.label>
      )}

      {/* Input row */}
      <div
        className={
          variant === "box"
            ? `flex items-center w-full px-4 py-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border transition-all ${
                isFocused
                  ? "border-[var(--primary)] shadow-[0_0_0_1px_var(--primary)]"
                  : "border-black/10 dark:border-white/10"
              }`
            : "flex items-center border-b border-[var(--text-secondary)]/15 py-2"
        }
        ref={dropdownRef}>
        {/* Country selector trigger */}
        <button
          type="button"
          onClick={() => setDropdownOpen((o) => !o)}
          className={`flex items-center gap-1.5 pr-3 mr-3 shrink-0 text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors focus:outline-none ${
            variant === "box"
              ? "border-r border-black/10 dark:border-white/10"
              : "border-r border-[var(--text-secondary)]/20"
          }`}
          aria-label="Select country code">
          <span className="text-xl leading-none select-none">
            {country.flag}
          </span>
          <span className="text-sm font-medium tabular-nums">
            {country.dialCode}
          </span>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            className={`transition-transform duration-200 opacity-50 ${dropdownOpen ? "rotate-180" : ""}`}
            fill="currentColor">
            <path d="M0 0l5 6 5-6z" />
          </svg>
        </button>

        {/* Number input */}
        <input
          type="tel"
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value.replace(/\D/g, ""))}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={variant === "box" ? "e.g. 98765 43210" : ""}
          className={`flex-1 min-w-0 bg-transparent text-[var(--text-primary)] border-none outline-none py-1 focus:ring-0 focus:outline-none ${
            variant === "box" ? "text-sm" : "text-base font-light"
          }`}
        />

        {/* Animated underline (only for floating variant) */}
        {variant === "floating" && (
          <motion.div
            initial={{ width: 0, left: "50%" }}
            animate={{
              width: isFocused ? "100%" : "0%",
              left: isFocused ? "0%" : "50%",
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute bottom-0 h-[2px] bg-[var(--primary)] z-10"
          />
        )}
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute top-full left-0 z-50 mt-2 w-72 rounded-2xl border border-[var(--glass-border)] bg-white/95 dark:bg-neutral-950/95 shadow-2xl backdrop-blur-xl">
            {/* Search box */}
            <div className="p-2 border-b border-[var(--glass-border)]">
              <input
                ref={searchRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search country or dial code…"
                className="w-full bg-transparent text-[var(--text-primary)] text-sm px-3 py-2 rounded-lg border border-[var(--glass-border)] outline-none focus:border-[var(--primary)]/50 transition-colors placeholder:text-[var(--text-secondary)]/50"
              />
            </div>

            {/* List */}
            <ul
              style={{ maxHeight: "14rem", overflowY: "auto" }}
              onWheel={(e) => e.stopPropagation()}
              className="py-1.5 scrollbar-purple">
              {filtered.length === 0 ? (
                <li className="px-4 py-3 text-xs text-[var(--text-secondary)] text-center">
                  No results found
                </li>
              ) : (
                filtered.map((c) => (
                  <li key={c.iso2}>
                    <button
                      type="button"
                      onClick={() => handleCountrySelect(c)}
                      className={`w-full text-left flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-[var(--primary)]/8 ${
                        country.iso2 === c.iso2
                          ? "bg-[var(--primary)]/10 text-[var(--primary)] font-semibold"
                          : "text-[var(--text-primary)]"
                      }`}>
                      <span className="text-lg leading-none">{c.flag}</span>
                      <span className="flex-1 truncate">{c.label}</span>
                      <span className="tabular-nums text-xs text-[var(--text-secondary)] font-medium">
                        {c.dialCode}
                      </span>
                    </button>
                  </li>
                ))
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
