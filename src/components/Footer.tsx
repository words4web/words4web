import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
} from "lucide-react";
import { footerData } from "../data/site-structure/footerData";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-[var(--background-secondary)] pt-24 pb-12 px-6 md:px-12 border-t border-[var(--border)] overflow-hidden">
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
                href="https://www.instagram.com/words.4web/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--primary)] text-[var(--text-secondary)] transition-colors interactive"
                aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a
                href="https://in.linkedin.com/company/words-4-web"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--primary)] text-[var(--text-secondary)] transition-colors interactive"
                aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/people/Words4Web/61577399276059/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--primary)] text-[var(--text-secondary)] transition-colors interactive"
                aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a
                href="https://www.youtube.com/@words.4web"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--primary)] text-[var(--text-secondary)] transition-colors interactive"
                aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a
                href="https://in.pinterest.com/words4web/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--primary)] text-[var(--text-secondary)] transition-colors interactive"
                aria-label="Pinterest">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="transition-colors">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.41 7.61 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.906 2.17-2.906 1.024 0 1.517.768 1.517 1.686 0 1.026-.65 2.562-.988 3.981-.283 1.195.597 2.169 1.777 2.169 2.133 0 3.774-2.254 3.774-5.503 0-2.879-2.072-4.894-5.025-4.894-3.421 0-5.43 2.566-5.43 5.218 0 1.03.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.62 0 11.983-5.367 11.983-11.987C24 5.367 18.637 0 12.017 0z" />
                </svg>
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
                    className="hover:text-[var(--primary)] transition-colors interactive">
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
                    className="hover:text-[var(--primary)] transition-colors interactive">
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
                    className="hover:text-[var(--primary)] transition-colors">
                    {footerData.mainOffice.email}
                  </a>
                </span>
                <span className="flex items-center gap-2">
                  <Phone size={14} className="shrink-0" />
                  <a
                    href={`tel:${footerData.mainOffice.phone}`}
                    className="hover:text-[var(--primary)] transition-colors">
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
                    className="hover:text-[var(--primary)] transition-colors">
                    {footerData.branchOffice.email}
                  </a>
                </span>
                <span className="flex items-center gap-2">
                  <Phone size={14} className="shrink-0" />
                  <a
                    href={`tel:${footerData.branchOffice.phone}`}
                    className="hover:text-[var(--primary)] transition-colors">
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
        <div className="w-full flex items-center justify-center pt-8 text-center">
          <p className="text-sm text-[var(--text-secondary)]">
            Copyright &copy; 2026{" "}
            <span className="text-[var(--primary)] font-semibold">
              Words4Web
            </span>{" "}
            | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
