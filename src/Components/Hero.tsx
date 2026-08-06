import { motion, type Variants } from "framer-motion";
import HeroVisual from "./HeroVisual";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 pt-24"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="relative mx-auto grid min-h-[85vh] max-w-7xl grid-cols-1 items-center gap-20 px-6 py-20 lg:grid-cols-2">
        {/* Left Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.span
            variants={item}
            className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm text-orange-400"
          >
            🚀 Build • Grow • Dominate Online
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-8 text-5xl font-extrabold leading-tight text-white lg:text-6xl xl:text-7xl"
          >
            Transform Your Business Into
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              A Powerful Digital Brand
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 text-xl leading-9 text-slate-400"
          >
            Professional websites, SEO, Google Business Profile optimization,
            AI automation and digital marketing that generate real business
            growth.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-5 sm:flex-row"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl bg-orange-500 px-8 py-4 text-center font-semibold text-white shadow-lg transition hover:bg-orange-600"
            >
              Start Your Project
            </motion.a>

            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl border border-slate-700 px-8 py-4 text-center text-white transition hover:border-orange-500"
            >
              View Portfolio
            </motion.a>
          </motion.div>

          {/* Features */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap gap-6 text-slate-400"
          >
            <span>✓ Responsive Websites</span>
            <span>✓ SEO Optimized</span>
            <span>✓ Google Business Profile</span>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}