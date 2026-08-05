import { motion } from "framer-motion";
import {
  FaBolt,
  FaHandshake,
  FaLightbulb,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: FaBolt,
    title: "Fast Delivery",
    text: "Projects delivered efficiently without compromising quality.",
  },
  {
    icon: FaHandshake,
    title: "Client-Focused",
    text: "We work closely with you to achieve your business goals.",
  },
  {
    icon: FaLightbulb,
    title: "Smart Solutions",
    text: "Modern websites and AI-powered solutions built for growth.",
  },
  {
    icon: FaHeadset,
    title: "Reliable Support",
    text: "We're available to help even after your project is launched.",
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

export default function WhyChooseUs() {
  return (
    <motion.section
      id="why-us"
      className="bg-slate-950 py-28"
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
            className="font-semibold text-orange-500"
          >
            WHY CHOOSE US
          </motion.p>

          <motion.h2
            variants={item}
            className="font-heading mt-4 text-5xl font-bold text-white"
          >
            Digital Solutions Built for Business Growth
          </motion.h2>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-3xl text-slate-400"
          >
            We combine web development, digital marketing, SEO, branding,
            and AI solutions to help businesses increase visibility,
            generate leads, and achieve sustainable growth.
          </motion.p>
        </motion.div>

        {/* Cards */}

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                variants={item}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{ duration: 0.25 }}
                className="group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900 p-8"
              >
                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.15,
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <Icon className="text-5xl text-orange-500" />
                </motion.div>

                <h3 className="font-heading mt-6 text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {feature.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}