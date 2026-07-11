import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
} from "lucide-react";

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
                href="#"
                className="hover:text-[var(--primary)] text-[var(--text-secondary)] transition-colors interactive"
                aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="hover:text-[var(--primary)] text-[var(--text-secondary)] transition-colors interactive"
                aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="hover:text-[var(--primary)] text-[var(--text-secondary)] transition-colors interactive"
                aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="hover:text-[var(--primary)] text-[var(--text-secondary)] transition-colors interactive"
                aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>

            <div className="mt-2">
              <span className="text-sm uppercase tracking-widest font-semibold text-[var(--primary)] block mb-1">
                Affiliate
              </span>
              <a
                href="#education"
                className="text-base font-semibold hover:text-[var(--primary)] transition-colors">
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
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--primary)] transition-colors interactive">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[var(--primary)] transition-colors interactive">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="hover:text-[var(--primary)] transition-colors interactive">
                  Our Works
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="hover:text-[var(--primary)] transition-colors interactive">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[var(--primary)] transition-colors interactive">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="hover:text-[var(--primary)] transition-colors interactive">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="hover:text-[var(--primary)] transition-colors interactive">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-display font-semibold text-xl mb-6 uppercase tracking-wider text-[var(--text-primary)]">
              Services
            </h4>
            <ul className="flex flex-col gap-3.5 text-base text-[var(--text-secondary)]">
              <li>
                <a
                  href="#services"
                  className="hover:text-[var(--primary)] transition-colors interactive">
                  Amazon Marketing Services
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[var(--primary)] transition-colors interactive">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[var(--primary)] transition-colors interactive">
                  Web Designing
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[var(--primary)] transition-colors interactive">
                  Social Media Optimization
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[var(--primary)] transition-colors interactive">
                  Graphic Designing
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[var(--primary)] transition-colors interactive">
                  SEO Services
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[var(--primary)] transition-colors interactive">
                  Content Writing
                </a>
              </li>
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
                    href="mailto:info@words4web.com"
                    className="hover:text-[var(--primary)] transition-colors">
                    info@words4web.com
                  </a>
                </span>
                <span className="flex items-center gap-2">
                  <Phone size={14} className="shrink-0" />
                  <a
                    href="tel:+917020207611"
                    className="hover:text-[var(--primary)] transition-colors">
                    +91 7020207611
                  </a>
                </span>
                <span className="flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  <span>
                    5037, SSRF, Near City Center Mall, Lavate Nagar, Nashik
                    422002
                  </span>
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
                    href="mailto:info@words4web.com"
                    className="hover:text-[var(--primary)] transition-colors">
                    info@words4web.com
                  </a>
                </span>
                <span className="flex items-center gap-2">
                  <Phone size={14} className="shrink-0" />
                  <a
                    href="tel:+447344861555"
                    className="hover:text-[var(--primary)] transition-colors">
                    +44 7344861555
                  </a>
                </span>
                <span className="flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  <span>
                    56, Morgan drive, Greenhithe, Dartford DA9 9DT, United
                    Kingdom
                  </span>
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
