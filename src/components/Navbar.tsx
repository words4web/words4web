import { useTheme } from "./ThemeProvider";
import { Moon, Sun, ChevronDown } from "lucide-react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { MagneticButton } from "./MagneticButton";
import { useState, useEffect } from "react";
import { cn } from "@/src/lib/utils";
import { navData } from "../data/navData";

const dropdownVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 24,
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    scale: 0.95,
    transition: { duration: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 24,
    },
  },
} as const;

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScrolled(window.scrollY > 50);
    }
    return scrollY.onChange((latest) => {
      setScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-[padding,background-color,border-color] duration-500 px-6 md:px-12 py-4",
        scrolled ? "py-2 navbar-glass" : "bg-transparent",
      )}
      style={{ border: "none" }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center interactive">
          <img
            src="/logo/logo_purple.png"
            alt="words4web logo"
            style={{ height: "96px", width: "auto" }}
            className="object-contain logo-glow"
          />
        </div>

        <div className="hidden lg:flex items-center gap-10 text-base xl:text-lg font-medium">
          {navData.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            return (
              <div
                key={item.label}
                className="relative py-4"
                onMouseEnter={() =>
                  hasChildren && setActiveDropdown(item.label)
                }
                onMouseLeave={() => hasChildren && setActiveDropdown(null)}>
                {hasChildren ? (
                  <button className="flex items-center gap-1.5 interactive hover:text-[var(--primary)] transition-colors py-2 whitespace-nowrap">
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={cn(
                        "transition-transform duration-300",
                        activeDropdown === item.label && "rotate-180",
                      )}
                    />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="interactive hover:text-[var(--primary)] transition-colors relative group py-2 whitespace-nowrap block">
                    {item.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[var(--primary)] transition-all group-hover:w-full" />
                  </a>
                )}

                <AnimatePresence>
                  {hasChildren && activeDropdown === item.label && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-72 dropdown-glass rounded-2xl p-4 flex flex-col gap-1.5 shadow-2xl z-50 text-left"
                      style={{ border: "none" }}>
                      {item.children!.map((child) => (
                        <motion.a
                          variants={itemVariants}
                          key={child.label}
                          href={child.href}
                          className="px-4 py-2.5 rounded-xl hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] hover:translate-x-1.5 duration-200 transition-all text-sm font-semibold whitespace-nowrap block">
                          {child.label}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <MagneticButton
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            variant="glass"
            className="w-10 h-10 p-0 rounded-full flex items-center justify-center">
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </MagneticButton>
          <MagneticButton
            variant="primary"
            className="hidden md:block py-2.5 px-6 text-sm">
            Let's Talk
          </MagneticButton>
        </div>
      </div>
    </motion.nav>
  );
}
