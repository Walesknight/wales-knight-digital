import logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* ================= FOOTER GRID ================= */}

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* ================= COMPANY ================= */}

          <div>
            <a
              href="#home"
              className="mb-6 flex items-center gap-3"
            >
              <img
                src={logo}
                alt="Wales Knight Digital Technologies"
                className="h-11 w-auto object-contain"
              />

              <div className="leading-tight">
                <h3 className="font-heading text-xl font-bold text-white">
                  Wales Knight
                </h3>

                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-500">
                  Digital Technologies
                </p>
              </div>
            </a>

            <p className="max-w-sm leading-7 text-slate-400">
              We help businesses grow through websites, SEO, Google Business
              Profile optimization, branding, AI solutions and digital
              marketing.
            </p>
          </div>

          {/* ================= SERVICES ================= */}

          <div>
            <h4 className="font-heading text-lg font-semibold text-white">
              Services
            </h4>

            <ul className="mt-6 space-y-4 text-slate-400">
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-orange-500"
                >
                  Website Development
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-orange-500"
                >
                  SEO Optimization
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-orange-500"
                >
                  Google Business Profile
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-orange-500"
                >
                  Digital Marketing
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-orange-500"
                >
                  AI Business Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* ================= COMPANY LINKS ================= */}

          <div>
            <h4 className="font-heading text-lg font-semibold text-white">
              Company
            </h4>

            <ul className="mt-6 space-y-4 text-slate-400">
              <li>
                <a
                  href="#about"
                  className="transition-colors hover:text-orange-500"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-orange-500"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#portfolio"
                  className="transition-colors hover:text-orange-500"
                >
                  Portfolio
                </a>
              </li>

              <li>
                <a
                  href="#testimonials"
                  className="transition-colors hover:text-orange-500"
                >
                  Testimonials
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition-colors hover:text-orange-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* ================= FOLLOW US ================= */}

          <div>
            <h4 className="font-heading text-lg font-semibold text-white">
              Follow Us
            </h4>

            <p className="mt-4 leading-7 text-slate-400">
              Follow Wales Knight for updates, digital tips and new projects.
            </p>

            <div className="mt-6 flex gap-3">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/Walesknightech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <FaFacebookF size={17} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/Walesknight_tech"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <FaInstagram size={17} />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <FaLinkedinIn size={17} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Walesknight"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <FaGithub size={17} />
              </a>

            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Wales Knight Digital Technologies.
            All rights reserved.
          </p>

          <a
            href="#home"
            className="transition-colors hover:text-orange-500"
          >
            Back to top ↑
          </a>

        </div>

      </div>
    </footer>
  );
}