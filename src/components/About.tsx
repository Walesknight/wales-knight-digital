import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const points = [
  "Professional Website Development",
  "Google Business Profile Optimization",
  "Search Engine Optimization (SEO)",
  "AI-Powered Business Solutions",
  "Digital Marketing & Branding",
];

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-slate-950 py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        {/* Left */}
        <div>
          <p className="font-semibold text-orange-500">ABOUT US</p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-white">
            Helping Businesses Build a Strong Digital Presence
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            At Wales Knight Digital Technologies, we combine strategy,
            creativity and technology to help businesses grow online.
            From websites to SEO, branding and AI automation,
            we create solutions that generate real business results.
          </p>

          <div className="mt-10 space-y-5">
            {points.map((point) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-3"
              >
                <FaCheckCircle className="text-orange-500" />
                <span className="text-slate-300">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center"
        >
          <div className="w-full rounded-3xl border border-slate-800 bg-gradient-to-br from-orange-500/20 to-slate-900 p-10">
            <h3 className="text-3xl font-bold text-white">
              Why Choose Us?
            </h3>

            <p className="mt-6 leading-8 text-slate-300">
              We don't just build beautiful websites. We build digital
              experiences that help businesses attract customers,
              increase visibility and grow revenue.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-4xl font-bold text-orange-500">100%</h4>
                <p className="text-slate-400">Client Focused</p>
              </div>

              <div>
                <h4 className="text-4xl font-bold text-orange-500">Fast</h4>
                <p className="text-slate-400">Delivery</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}