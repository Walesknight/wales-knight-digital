import { motion, type Variants } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Adeyemi",
    company: "Restaurant Owner",
    text: "Wales Knight delivered a modern website that significantly improved our online visibility and customer inquiries.",
  },
  {
    name: "Sarah Okafor",
    company: "CEO, Bloom Fashion",
    text: "Professional, responsive and easy to work with. The project exceeded our expectations.",
  },
  {
    name: "Michael Daniel",
    company: "Church Administrator",
    text: "Our church website looks amazing. Members can now access information and sermons much more easily.",
  },
];

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
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-slate-900 py-24 sm:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-180px] top-1/3 h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-[120px]" />

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
            Testimonials
          </motion.span>

          <motion.h2
            variants={item}
            className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            What Our <span className="text-orange-500">Clients Say</span>
          </motion.h2>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8"
          >
            We build websites and digital solutions designed to help
            businesses grow, attract customers and build a stronger online
            presence.
          </motion.p>
        </motion.div>

        {/* ================= TESTIMONIAL CARDS ================= */}

        <motion.div
          className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.name}
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className="group relative rounded-2xl border border-slate-800 bg-slate-950 p-7 transition-colors duration-300 hover:border-orange-500/30 sm:p-8"
            >
              {/* Quote Icon */}

              <div className="absolute right-7 top-7 text-orange-500/20">
                <Quote size={34} />
              </div>

              {/* Stars */}

              <div className="mb-6 flex gap-1 text-orange-500">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={17}
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Testimonial */}

              <p className="text-base leading-7 text-slate-300">
                "{testimonial.text}"
              </p>

              {/* Client */}

              <div className="mt-8 border-t border-slate-800 pt-6">
                <h4 className="font-semibold text-white">
                  {testimonial.name}
                </h4>

                <p className="mt-1 text-sm text-slate-500">
                  {testimonial.company}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}