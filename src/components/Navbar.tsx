import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 top-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}

        <a href="#home" className="flex items-center gap-4">
          <img
            src={logo}
            alt="Wales Knight Digital Technologies"
            className="h-12 w-auto object-contain"
          />

          <div className="leading-tight">
            <h1 className="text-xl font-bold text-white">
              Wales Knight
            </h1>

            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Digital Technologies
            </p>
          </div>
        </a>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ y: -2 }}
              className="relative text-slate-300 transition duration-300 hover:text-orange-500 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Desktop Button */}

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:shadow-orange-500/60 md:block"
        >
          Get Started
        </motion.a>

        {/* Mobile Menu Button */}

        <button
          className="text-2xl text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-slate-800 bg-slate-900 md:hidden"
        >
          <nav className="flex flex-col p-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-slate-300 transition hover:text-orange-500"
              >
                {link.name}
              </a>
            ))}

            <motion.a
              href="#contact"
              whileTap={{ scale: 0.95 }}
              onClick={() => setMenuOpen(false)}
              className="mt-5 rounded-xl bg-orange-500 py-3 text-center font-semibold text-white hover:bg-orange-600"
            >
              Get Started
            </motion.a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}