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

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>

            <div className="mb-6 flex items-center gap-3">
              <img
                src={logo}
                alt="Wales Knight"
                className="h-12 w-auto"
              />

              <div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Wales Knight
                </h3>

                <p className="text-xs uppercase tracking-widest text-slate-400">
                  Digital Technologies
                </p>
              </div>
            </div>

            <p className="leading-7 text-slate-400">
              We help businesses grow through websites, SEO, Google Business
              Profile optimization, branding, AI solutions and digital marketing.
            </p>

          </div>

          {/* Services */}
          <div>

            <h4 className="font-semibold text-white">
              Services
            </h4>

            <ul className="mt-6 space-y-3 text-slate-400">
              <li>Website Development</li>
              <li>SEO Optimization</li>
              <li>Google Business Profile</li>
              <li>Digital Marketing</li>
              <li>AI Automation</li>
            </ul>

          </div>

          {/* Company */}
          <div>

            <h4 className="font-semibold text-white">
              Company
            </h4>

            <ul className="mt-6 space-y-3 text-slate-400">
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

          </div>

          {/* Social */}
          <div>

            <h4 className="font-semibold text-white">
              Follow Us
            </h4>

            <div className="mt-6 flex gap-4">

              <a
                href="#"
                className="rounded-xl bg-slate-900 p-3 transition hover:bg-orange-500"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="rounded-xl bg-slate-900 p-3 transition hover:bg-orange-500"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="rounded-xl bg-slate-900 p-3 transition hover:bg-orange-500"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="rounded-xl bg-slate-900 p-3 transition hover:bg-orange-500"
              >
                <FaGithub />
              </a>

            </div>

          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-slate-500">
          © {new Date().getFullYear()} Wales Knight Digital Technologies. All rights reserved.
        </div>

      </div>
    </footer>
  );
}