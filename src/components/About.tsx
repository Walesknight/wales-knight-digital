import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaArrowRight,
  FaLightbulb,
  FaRocket,
  FaChartLine,
} from "react-icons/fa";

const points = [
  "Professional Website Development",
  "Google Business Profile Optimization",
  "Search Engine Optimization (SEO)",
  "AI-Powered Business Solutions",
  "Digital Marketing & Branding",
];

const stats = [
  {
    value: "100%",
    label: "Client Focused",
  },
  {
    value: "Fast",
    label: "Project Delivery",
  },
  {
    value: "24/7",
    label: "Digital Presence",
  },
];

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-200px] top-1/3 h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
            About Us
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Technology That Helps Your{" "}
            <span className="text-orange-500">Business Grow</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            We combine strategy, creativity and technology to help businesses
            establish a stronger digital presence and turn online visibility
            into real opportunities.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
              Building Digital Solutions That Work For Your Business
            </h3>

            <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
              At Wales Knight Digital Technologies, we don't believe in
              one-size-fits-all digital solutions. We understand your
              business, identify opportunities and build solutions around
              your goals.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-400">
              Whether you need a professional website, better Google
              visibility, stronger branding or smarter business automation,
              our goal is simple: help your business compete and grow in the
              digital world.
            </p>

            {/* Services List */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {points.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.07,
                  }}
                  className="flex items-start gap-3"
                >
                  <FaCheckCircle className="mt-1 shrink-0 text-orange-500" />

                  <span className="text-sm leading-6 text-slate-300">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#services"
              whileHover={{ x: 4 }}
              className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-orange-400 transition-colors hover:text-orange-300"
            >
              Explore Our Services
              <FaArrowRight className="text-xs" />
            </motion.a>
          </motion.div>

          {/* ================= RIGHT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-700/70 bg-gradient-to-br from-orange-500/10 via-slate-900 to-slate-950 p-7 shadow-2xl sm:p-9">
              {/* Decorative Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-orange-500/10 blur-3xl" />

              <div className="relative">
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                  <FaRocket className="text-xl" />
                </div>

                <h3 className="mt-7 text-2xl font-bold text-white sm:text-3xl">
                  Why Businesses Choose Us
                </h3>

                <p className="mt-5 leading-7 text-slate-400">
                  We don't just create digital products that look good. We
                  focus on building practical solutions designed to improve
                  visibility, attract customers and support business growth.
                </p>

                {/* Mini Features */}
                <div className="mt-8 space-y-5">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-orange-500">
                      <FaLightbulb />
                    </div>

                    <div>
                      <h4 className="font-semibold text-white">
                        Strategy First
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        Solutions built around your business goals.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-orange-500">
                      <FaChartLine />
                    </div>

                    <div>
                      <h4 className="font-semibold text-white">
                        Results Driven
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        Focused on visibility, leads and sustainable growth.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-9 grid grid-cols-3 gap-3 border-t border-slate-800 pt-7">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <h4 className="text-xl font-bold text-orange-500 sm:text-2xl">
                        {stat.value}
                      </h4>

                      <p className="mt-1 text-[10px] leading-4 text-slate-500 sm:text-xs">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Card */}
            <div className="absolute -bottom-4 -right-3 -z-10 h-full w-full rounded-3xl border border-orange-500/10 bg-orange-500/5 sm:-bottom-5 sm:-right-5" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}