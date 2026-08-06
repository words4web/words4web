import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { cn } from "@/src/lib/utils";
import type { MobileMenuProps } from "../types/navigation";

export function MobileMenu({
  onClose,
  navData,
  getHref,
  isMobile,
}: MobileMenuProps) {
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(
    null,
  );

  return (
    <>
      {/* Dark blurred background overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className={cn(
          "fixed inset-0 bg-black/45 dark:bg-black/60 backdrop-blur-sm z-40",
          isMobile ? "block" : "hidden",
        )}
      />

      {/* Slide-over Menu Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 26, stiffness: 220 }}
        className={cn(
          "fixed top-0 right-0 bottom-0 h-full w-[85vw] max-w-[360px] bg-[var(--background)] border-l border-black/5 dark:border-white/5 p-8 shadow-2xl z-50 flex flex-col justify-between overflow-y-auto text-left",
          isMobile ? "flex" : "hidden",
        )}>
        <div className="flex flex-col gap-8">
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-6 border-b border-black/5 dark:border-white/5">
            <span className="font-display text-lg font-black bg-gradient-to-r from-[var(--primary)] to-[#9d4edd] bg-clip-text text-transparent">
              Words4Web
            </span>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-xl font-light hover:bg-black/5 dark:hover:bg-white/5 active:scale-90 transition-all cursor-pointer text-[var(--text-primary)]"
              aria-label="Close Menu">
              &times;
            </button>
          </div>

          {/* Navigation Links list */}
          <div className="flex flex-col gap-5">
            {navData.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              return (
                <div key={item.label} className="flex flex-col gap-2">
                  {hasChildren ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileDropdownOpen(
                            mobileDropdownOpen === item.label
                              ? null
                              : item.label,
                          )
                        }
                        className="flex items-center justify-between w-full py-1.5 text-lg font-bold text-[var(--text-primary)] px-1 cursor-pointer">
                        <span>{item.label}</span>
                        <ChevronDown
                          size={18}
                          className={cn(
                            "text-[var(--text-secondary)] transition-transform duration-300",
                            mobileDropdownOpen === item.label && "rotate-180",
                          )}
                        />
                      </button>
                      {mobileDropdownOpen === item.label && (
                        <div className="flex flex-col gap-2.5 pl-3 border-l border-black/10 dark:border-white/10 ml-1 mt-1">
                          {item.children!.map((child) => (
                            <a
                              key={child.label}
                              href={getHref(child.href)}
                              onClick={() => {
                                onClose();
                                setMobileDropdownOpen(null);
                              }}
                              className="py-1 text-sm font-semibold hover:text-[var(--primary)] transition-colors text-[var(--text-secondary)]">
                              {child.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={getHref(item.href)}
                      onClick={onClose}
                      className="py-1.5 px-1 text-lg font-bold hover:text-[var(--primary)] transition-colors text-[var(--text-primary)]">
                      {item.label}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Drawer Actions */}
        <div className="flex flex-col gap-3 pt-6 border-t border-black/5 dark:border-white/5">
          <a
            href="https://api.whatsapp.com/send/?phone=917020207611&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full block">
            <MagneticButton
              variant="primary"
              className="w-full py-3.5 rounded-full bg-green-500 hover:bg-green-600 border-green-500 hover:border-green-600 active:scale-98 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              spanClassName="flex flex-row items-center justify-center gap-2">
              <img
                src="/tools/whatsapp.svg"
                alt="WhatsApp"
                className="w-5.5 h-5.5 object-contain flex-shrink-0"
              />
              <span className="whitespace-nowrap">WhatsApp Chat</span>
            </MagneticButton>
          </a>
          <a href="#contact" onClick={onClose}>
            <MagneticButton
              variant="primary"
              className="w-full py-3.5 text-sm font-bold text-center flex items-center justify-center shadow-lg">
              Let's Talk
            </MagneticButton>
          </a>
        </div>
      </motion.div>
    </>
  );
}
