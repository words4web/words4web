import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
} from "lucide-react";
import { footerData } from "../data/footerData";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-[var(--background-secondary)] pt-24 pb-12 px-6 md:px-12 border-t border-[var(--border)] overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--primary)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full relative z-10">
        {/* Multi-column Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-[var(--border)] text-left">
          {/* Column 1: Brand Info & Socials */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center">
              <img
                src="/logo/logo_purple.png"
                alt="Words4Web logo"
                style={{ height: "150px", width: "auto" }}
                className="object-contain"
              />
            </div>

            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              At Words4Web, we blend strategy, storytelling, and smart design to
              turn your brand’s potential into real, measurable growth.
            </p>

            <div className="flex gap-4 items-center">
              <a
                href="#"
                className="hover:text-[var(--primary)] text-[var(--text-secondary)] transition-colors interactive"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="hover:text-[var(--primary)] text-[var(--text-secondary)] transition-colors interactive"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="hover:text-[var(--primary)] text-[var(--text-secondary)] transition-colors interactive"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="hover:text-[var(--primary)] text-[var(--text-secondary)] transition-colors interactive"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>

            <div className="mt-2">
              <span className="text-sm uppercase tracking-widest font-semibold text-[var(--primary)] block mb-1">
                Affiliate
              </span>
              <a
                href="#education"
                className="text-base font-semibold hover:text-[var(--primary)] transition-colors"
              >
                Words4Web Education
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-xl mb-6 uppercase tracking-wider text-[var(--text-primary)]">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3.5 text-base text-[var(--text-secondary)]">
              {footerData.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[var(--primary)] transition-colors interactive"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-display font-semibold text-xl mb-6 uppercase tracking-wider text-[var(--text-primary)]">
              Services
            </h4>
            <ul className="flex flex-col gap-3.5 text-base text-[var(--text-secondary)]">
              {footerData.services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="hover:text-[var(--primary)] transition-colors interactive"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Offices */}
          <div className="flex flex-col gap-8">
            {/* Main Office */}
            <div>
              <h4 className="font-display font-semibold text-base mb-4 uppercase tracking-widest text-[var(--primary)]">
                Main Office
              </h4>
              <div className="flex flex-col gap-2.5 text-base text-[var(--text-secondary)]">
                <span className="flex items-center gap-2">
                  <Mail size={14} className="shrink-0" />
                  <a
                    href={`mailto:${footerData.mainOffice.email}`}
                    className="hover:text-[var(--primary)] transition-colors"
                  >
                    {footerData.mainOffice.email}
                  </a>
                </span>
                <span className="flex items-center gap-2">
                  <Phone size={14} className="shrink-0" />
                  <a
                    href={`tel:${footerData.mainOffice.phone}`}
                    className="hover:text-[var(--primary)] transition-colors"
                  >
                    {footerData.mainOffice.phone}
                  </a>
                </span>
                <span className="flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  <span>{footerData.mainOffice.address}</span>
                </span>
              </div>
            </div>

            {/* Branch Office */}
            <div>
              <h4 className="font-display font-semibold text-base mb-4 uppercase tracking-widest text-[var(--primary)]">
                Branch Office
              </h4>
              <div className="flex flex-col gap-2.5 text-base text-[var(--text-secondary)]">
                <span className="flex items-center gap-2">
                  <Mail size={14} className="shrink-0" />
                  <a
                    href={`mailto:${footerData.branchOffice.email}`}
                    className="hover:text-[var(--primary)] transition-colors"
                  >
                    {footerData.branchOffice.email}
                  </a>
                </span>
                <span className="flex items-center gap-2">
                  <Phone size={14} className="shrink-0" />
                  <a
                    href={`tel:${footerData.branchOffice.phone}`}
                    className="hover:text-[var(--primary)] transition-colors"
                  >
                    {footerData.branchOffice.phone}
                  </a>
                </span>
                <span className="flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  <span>{footerData.branchOffice.address}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom copyright */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center pt-8 gap-4 text-center sm:text-left">
          <p className="text-sm text-[var(--text-secondary)]">
            Copyright &copy; 2026 Words4Web | All rights reserved
          </p>
          <p className="text-sm text-[var(--text-secondary)]/50">
            Founder of Words4Web Digital Marketing Agency
          </p>
        </div>
      </div>
    </footer>
  );
}
