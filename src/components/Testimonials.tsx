import { motion } from "framer-motion";
import { Star } from "lucide-react";

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

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Testimonials() {
  return (
    <motion.section
      id="testimonials"
      className="bg-slate-900 py-24"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          className="text-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.p
            variants={item}
            className="font-semibold uppercase tracking-widest text-orange-500"
          >
            Testimonials
          </motion.p>

          <motion.h2
            variants={item}
            className="mt-4 text-4xl font-bold text-white"
          >
            What Our Clients Say
          </motion.h2>

          <motion.p
            variants={item}
            className="mx-auto mt-4 max-w-3xl text-slate-400"
          >
            We build websites and digital solutions that help businesses grow.
          </motion.p>
        </motion.div>

        {/* Testimonial Cards */}

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={item}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-8 shadow-lg cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="mb-6 flex gap-1 text-orange-500"
              >
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    fill="currentColor"
                  />
                ))}
              </motion.div>

              <p className="leading-7 text-slate-400">
                "{testimonial.text}"
              </p>

              <div className="mt-8 border-t border-slate-800 pt-6">
                <h4 className="font-semibold text-white">
                  {testimonial.name}
                </h4>

                <p className="text-sm text-slate-500">
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}