import { motion, type Variants } from "framer-motion";
import HeroVisual from "./HeroVisual";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 pt-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-250px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute right-[-200px] top-[30%] h-[400px] w-[400px] rounded-full bg-orange-600/5 blur-[100px]" />

      {/* Main Container */}
      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl grid-cols-1 items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-2xl"
        >
          {/* Badge */}
          <motion.div variants={item}>
            <span className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-xs font-medium tracking-wide text-orange-400 sm:text-sm">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-orange-500" />
              Build • Grow • Dominate Online
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="mt-7 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem]"
          >
            Transform Your Business Into{" "}
            <span className="mt-2 block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              A Powerful Digital Brand
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8"
          >
            We build professional websites, improve your online visibility,
            automate business processes and create digital marketing
            strategies that help businesses attract more customers and grow.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:shadow-orange-500/40 sm:px-8 sm:py-4 sm:text-base"
            >
              Start Your Project
            </motion.a>

            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-xl border border-slate-700 bg-slate-900/40 px-7 py-3.5 text-center text-sm font-semibold text-white transition-all duration-300 hover:border-orange-500/60 hover:bg-slate-900 sm:px-8 sm:py-4 sm:text-base"
            >
              View Our Work
            </motion.a>
          </motion.div>

          {/* Trust Points */}
          <motion.div
            variants={item}
            className="mt-9 grid grid-cols-1 gap-3 text-sm text-slate-400 sm:grid-cols-3 sm:gap-5"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500/10 text-xs text-orange-400">
                ✓
              </span>
              Responsive Websites
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500/10 text-xs text-orange-400">
                ✓
              </span>
              SEO Optimized
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500/10 text-xs text-orange-400">
                ✓
              </span>
              Business Growth
            </div>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT VISUAL ================= */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="relative flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-xl">
            {/* Glow behind visual */}
            <div className="absolute inset-10 rounded-full bg-orange-500/10 blur-3xl" />

            <div className="relative">
              <HeroVisual />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}