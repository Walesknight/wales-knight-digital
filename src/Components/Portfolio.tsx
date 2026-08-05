import { motion } from "framer-motion";
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

export default function Portfolio() {
  return (
    <motion.section
      id="portfolio"
      className="bg-slate-950 py-24"
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
            Recent Projects
          </motion.p>

          <motion.h2
            variants={item}
            className="mt-4 text-4xl font-bold text-white md:text-5xl"
          >
            Our Portfolio
          </motion.h2>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-3xl text-lg text-slate-400"
          >
            A selection of websites and digital solutions designed to help
            businesses establish a stronger online presence.
          </motion.p>
        </motion.div>

        {/* Portfolio Grid */}

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{ duration: 0.25 }}
              className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 cursor-pointer"
            >
              <div className="overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="h-60 w-full object-cover"
                />
              </div>

              <div className="p-6">
                <span className="text-sm text-orange-500">
                  {project.category}
                </span>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {project.description}
                </p>

                <motion.a
                  href="#contact"
                  whileHover={{ x: 6 }}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-500"
                >
                  View Project
                  <ArrowUpRight size={18} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}