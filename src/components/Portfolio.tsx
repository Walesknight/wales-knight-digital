import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Restaurant Website",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    description:
      "Modern restaurant website with online reservations and menu display.",
  },
  {
    title: "Real Estate Website",
    category: "Business Website",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    description:
      "Property listing platform with search and lead generation.",
  },
  {
    title: "Church Website",
    category: "Organization",
    image:
      "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800",
    description:
      "Church website featuring events, sermons and online giving.",
  },
  {
    title: "Medical Clinic",
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
    description:
      "Clinic website with appointment booking and service pages.",
  },
  {
    title: "E-Commerce Store",
    category: "Online Store",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    description:
      "Responsive online shop built to increase sales and conversions.",
  },
  {
    title: "Corporate Company",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
    description:
      "Professional company website designed to attract enterprise clients.",
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

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-[-200px] top-1/4 h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-[120px]" />

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
            Recent Projects
          </motion.span>

          <motion.h2
            variants={item}
            className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Our <span className="text-orange-500">Portfolio</span>
          </motion.h2>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8"
          >
            A selection of websites and digital solutions designed to help
            businesses establish a stronger online presence.
          </motion.p>
        </motion.div>

        {/* ================= PROJECT GRID ================= */}

        <motion.div
          className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-colors duration-300 hover:border-orange-500/30"
            >
              {/* Project Image */}

              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5 }}
                  className="h-56 w-full object-cover"
                />

                {/* Image Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />

                {/* Category */}

                <span className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1.5 text-xs font-medium text-orange-400 backdrop-blur-md">
                  {project.category}
                </span>
              </div>

              {/* Project Content */}

              <div className="p-6">
                <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-orange-400">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-500 transition-all duration-300 hover:gap-3"
                >
                  Discuss Your Project
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* ================= BOTTOM CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <p className="text-sm text-slate-500">
            Have a project in mind?
          </p>

          <a
            href="#contact"
            className="mt-3 inline-flex items-center gap-2 font-semibold text-orange-500 transition-all duration-300 hover:gap-3 hover:text-orange-400"
          >
            Let's build it together
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}