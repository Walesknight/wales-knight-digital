import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-slate-950 px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-orange-500/20 bg-gradient-to-r from-orange-500/15 via-slate-900 to-slate-900 p-8 md:p-12"
      >
        <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div>
            <p className="font-semibold uppercase tracking-widest text-orange-500">
              Let's Work Together
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Your business deserves a stronger digital presence.
            </h2>

            <p className="mt-4 max-w-2xl text-slate-400">
              Let's identify the right digital solution to help your
              business attract more customers and grow.
            </p>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
          >
            Start a Conversation
            <ArrowRight size={18} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}