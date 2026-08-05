import { motion } from "framer-motion";
import {
  Globe,
  Search,
  MapPinned,
  Megaphone,
  Palette,
  Bot,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Fast, modern and responsive websites built to convert visitors into customers.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Improve your Google rankings and increase organic traffic to your business.",
  },
  {
    icon: MapPinned,
    title: "Google Business Profile",
    description:
      "Rank higher on Google Maps and attract more local customers.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Generate qualified leads through Facebook, Instagram and Google Ads.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "Professional logos, graphics and brand assets that build trust.",
  },
  {
    icon: Bot,
    title: "AI Business Solutions",
    description:
      "Automate repetitive tasks and improve business efficiency with AI.",
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

export default function Services() {
  return (
    <motion.section
      id="services"
      className="bg-slate-900 py-24"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          className="mb-16 text-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.span
            variants={item}
            className="rounded-full bg-orange-500/10 px-4 py-2 text-sm text-orange-400"
          >
            Our Services
          </motion.span>

          <motion.h2
            variants={item}
            className="font-heading mt-6 text-4xl font-bold text-white"
          >
            Everything Your Business Needs
          </motion.h2>

          <motion.p
            variants={item}
            className="mx-auto mt-4 max-w-2xl text-slate-400"
          >
            We combine technology, design and marketing to help businesses
            grow online and reach more customers.
          </motion.p>
        </motion.div>

        {/* Cards */}

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={item}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{ duration: 0.25 }}
                className="group rounded-2xl border border-slate-800 bg-slate-950 p-8 cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  className="mb-6 inline-flex rounded-xl bg-orange-500/10 p-4"
                >
                  <Icon className="h-8 w-8 text-orange-500" />
                </motion.div>

                <h3 className="font-heading text-xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {service.description}
                </p>

                <motion.a
                  href="#contact"
                  whileHover={{ x: 5 }}
                  className="mt-6 inline-block font-semibold text-orange-500"
                >
                  Learn More →
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}