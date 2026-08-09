import { motion, type Variants } from "framer-motion";
import {
  FaBolt,
  FaHandshake,
  FaLightbulb,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";

const features = [
  {
    icon: FaBolt,
    number: "01",
    title: "Fast Delivery",
    text: "Projects delivered efficiently without compromising quality, performance or attention to detail.",
  },
  {
    icon: FaHandshake,
    number: "02",
    title: "Client-Focused",
    text: "We work closely with you to understand your goals and build solutions around your business.",
  },
  {
    icon: FaLightbulb,
    number: "03",
    title: "Smart Solutions",
    text: "Modern websites, digital strategies and AI-powered solutions designed to solve real business problems.",
  },
  {
    icon: FaHeadset,
    number: "04",
    title: "Reliable Support",
    text: "We're available to help you maintain, improve and get more value from your digital presence.",
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
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
      duration: 0.55,
      ease: "easeOut" as const,
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-200px] top-1/3 h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}

        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.span
            variants={item}
            className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400"
          >
            Why Choose Us
          </motion.span>

          <motion.h2
            variants={item}
            className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Built Around Your{" "}
            <span className="text-orange-500">Business Goals</span>
          </motion.h2>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8"
          >
            We combine technology, strategy and creativity to create digital
            solutions that help businesses improve visibility, attract
            customers and grow.
          </motion.p>
        </motion.div>

        {/* ================= FEATURES ================= */}

        <motion.div
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                variants={item}
                whileHover={{ y: -7 }}
                transition={{ duration: 0.25 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-colors duration-300 hover:border-orange-500/30 sm:p-7"
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 5,
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500"
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="mt-7 text-xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {feature.text}
                </p>

                {/* Bottom line */}
                <div className="mt-6 h-0.5 w-0 bg-orange-500 transition-all duration-500 group-hover:w-10" />

                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-orange-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              </motion.article>
            );
          })}
        </motion.div>

        {/* ================= BOTTOM MESSAGE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-center sm:p-7 md:flex-row md:text-left"
        >
          <div>
            <h3 className="text-lg font-bold text-white">
              Your business deserves a stronger digital presence.
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              Let's identify the right digital solution for your business.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:gap-3"
          >
            Start a Conversation
            <FaArrowRight className="text-xs" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}