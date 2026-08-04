"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import type { OfficeCardProps } from "../types/contact";

export function OfficeCard({
  label,
  city,
  address,
  phone,
  email,
}: OfficeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative p-[2px] rounded-3xl overflow-hidden group transition-all duration-500 cursor-pointer w-full hover:-translate-y-1">
      {/* Glowing Line Tracing Around Border */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-border-trace"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, transparent 320deg, var(--primary) 340deg, #9d4edd 350deg, #c084fc 360deg)",
          }}
        />
      </div>

      {/* Inner Card Content */}
      <div className="relative z-10 p-8 rounded-[22px] bg-[var(--background)] dark:bg-[#0c0c0e] h-full flex flex-col gap-6 border border-black/[0.03] dark:border-white/[0.02] shadow-[0_8px_30px_rgba(123,44,191,0.04)] dark:shadow-[inset_0_0_30px_rgba(123,44,191,0.1)] group-hover:shadow-[0_15px_45px_rgba(123,44,191,0.08)] dark:group-hover:shadow-[inset_0_0_30px_rgba(123,44,191,0.2)] transition-shadow duration-500">
        {/* Dynamic Hover Glow */}
        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-tr from-purple-500 to-blue-500 opacity-5 blur-2xl group-hover:scale-150 group-hover:opacity-15 transition-all duration-700 pointer-events-none rounded-full" />

        {/* Header Block */}
        <div className="flex items-center gap-4 relative z-10">
          <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-105 transition-transform duration-300">
            <Globe size={24} />
          </div>
          <div className="text-left">
            <span className="text-[10px] font-bold tracking-widest text-purple-400 uppercase">
              {label}
            </span>
            <h3 className="text-2xl font-light text-[var(--text-primary)] mt-0.5">
              {city}
            </h3>
          </div>
        </div>

        {/* Contact info list */}
        <div className="flex flex-col gap-4 text-left border-t border-black/[0.08] dark:border-white/[0.06] pt-6 relative z-10">
          <div className="flex items-start gap-4">
            <MapPin
              size={18}
              className="text-purple-400 mt-1 shrink-0 group-hover:translate-y-[-2px] transition-transform"
            />
            <p className="text-base text-[var(--text-secondary)] font-light leading-relaxed">
              {address}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Phone size={18} className="text-purple-400 shrink-0" />
            <a
              href={`tel:${phone.replace(/\s+/g, "")}`}
              className="text-base text-[#a855f7] hover:text-[#c084fc] hover:underline font-light transition-colors">
              {phone}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Mail size={18} className="text-purple-400 shrink-0" />
            <a
              href={`mailto:${email}`}
              className="text-base text-[#a855f7] hover:text-[#c084fc] hover:underline font-light transition-colors">
              {email}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
