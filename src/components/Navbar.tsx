import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 top-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/85 backdrop-blur-xl"
    >
      {/* ================= NAVBAR CONTAINER ================= */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

        {/* ================= LOGO ================= */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-2.5"
        >
          <motion.img
            src={logo}
            alt="Wales Knight Digital Technologies"
            className="h-11 w-auto object-contain sm:h-12"
            whileHover={{ scale: 1.06, rotate: 2 }}
            transition={{ duration: 0.2 }}
          />

          <div className="leading-tight">
            <h1 className="font-heading text-base font-bold tracking-tight text-white sm:text-lg">
              Wales Knight
            </h1>

            <p className="mt-0.5 text-[8px] uppercase tracking-[0.16em] text-slate-400 sm:text-[10px] sm:tracking-[0.18em]">
              Digital Technologies
            </p>
          </div>
        </motion.a>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ y: -2 }}
              className="group relative text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-orange-500"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        {/* ================= DESKTOP CTA ================= */}
        <motion.a
          href="#contact"
          whileHover={{
            scale: 1.04,
            y: -2,
          }}
          whileTap={{ scale: 0.96 }}
          className="hidden rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-shadow duration-300 hover:shadow-orange-500/40 md:block"
        >
          Get Started
        </motion.a>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.9 }}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-xl text-white transition hover:border-orange-500 hover:text-orange-500 md:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-slate-800 bg-slate-950/95 md:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col px-6 py-5">
              {links.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-slate-800/70 py-4 text-slate-300 transition-colors hover:text-orange-500"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                whileTap={{ scale: 0.97 }}
                onClick={() => setMenuOpen(false)}
                className="mt-5 rounded-xl bg-orange-500 py-3.5 text-center font-semibold text-white transition hover:bg-orange-600"
              >
                Get Started
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}