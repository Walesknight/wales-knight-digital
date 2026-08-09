import { motion, type Variants } from "framer-motion";
import {
  Globe,
  Search,
  MapPinned,
  Megaphone,
  Palette,
  Bot,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    number: "01",
    title: "Website Development",
    description:
      "Fast, modern and responsive websites designed to establish credibility and turn visitors into customers.",
  },
  {
    icon: Search,
    number: "02",
    title: "SEO Optimization",
    description:
      "Improve your search visibility, attract relevant organic traffic and give your business a stronger presence on Google.",
  },
  {
    icon: MapPinned,
    number: "03",
    title: "Google Business Profile",
    description:
      "Optimize your Google Business Profile to improve local visibility and help nearby customers discover your business.",
  },
  {
    icon: Megaphone,
    number: "04",
    title: "Digital Marketing",
    description:
      "Reach the right audience through strategic social media campaigns, paid advertising and conversion-focused marketing.",
  },
  {
    icon: Palette,
    number: "05",
    title: "Brand Identity",
    description:
      "Build a consistent and professional visual identity with logos, graphics and brand assets that create trust.",
  },
  {
    icon: Bot,
    number: "06",
    title: "AI Business Solutions",
    description:
      "Use AI and automation to reduce repetitive work, improve efficiency and create smarter business processes.",
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
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

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-900 py-24 sm:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-[-200px] top-1/4 h-[450px] w-[450px] rounded-full bg-orange-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.span
            variants={item}
            className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400"
          >
            Our Services
          </motion.span>

          <motion.h2
            variants={item}
            className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Digital Solutions Built For{" "}
            <span className="text-orange-500">Business Growth</span>
          </motion.h2>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8"
          >
            From building your digital foundation to attracting customers and
            automating your operations, we provide the tools your business
            needs to compete online.
          </motion.p>
        </motion.div>

        {/* ================= SERVICE CARDS ================= */}
        <motion.div
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                variants={item}
                whileHover={{ y: -7 }}
                transition={{ duration: 0.25 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-6 transition-colors duration-300 hover:border-orange-500/30 sm:p-7"
              >
                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-orange-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  {/* Top Row */}
                  <div className="flex items-start justify-between">
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.08 }}
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500"
                    >
                      <Icon className="h-6 w-6" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="mt-7 text-xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 min-h-[84px] text-sm leading-7 text-slate-400">
                    {service.description}
                  </p>

                  {/* Link */}
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-500 transition-all duration-300 hover:gap-3 hover:text-orange-400"
                  >
                    Discuss Your Project
                    <ArrowUpRight className="h-4 w-4" />
                  </a>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-[-28px] left-0 h-1 w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* ================= BOTTOM CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-6 text-center sm:flex-row sm:text-left sm:p-7"
        >
          <div>
            <h3 className="font-semibold text-white">
              Not sure which service your business needs?
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Tell us about your business and we'll help you identify the right
              digital solution.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
          >
            Talk To Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}