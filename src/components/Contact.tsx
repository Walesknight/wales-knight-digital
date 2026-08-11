declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

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

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          title: "New Website Enquiry",
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Google Analytics conversion event
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "generate_lead", {
          event_category: "engagement",
          event_label: "Contact Form Submission",
        });
      }
      
      setSuccess("Your message has been sent successfully. We will get back to you shortly.");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error(err);

      setError("Something went wrong while sending your message. Please try again or contact us on WhatsApp.");
    }

    setLoading(false);
  };

  return (
    <motion.section
      id="contact"
      className="bg-slate-900 py-24"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* ================= CONTACT HEADING ================= */}

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
            Contact Us
          </motion.span>

          <motion.h2
            variants={item}
            className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Let's Build <span className="text-orange-500">Something Great</span>
          </motion.h2>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8"
          >
            Have a project in mind? Tell us what you need and let's create a digital solution that helps your business grow.
          </motion.p>
        </motion.div>

        {/* ================= CONTACT CONTENT ================= */}

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* ================= LEFT CARD ================= */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-800 bg-slate-950 p-8 md:p-10"
          >
            <h3 className="text-3xl font-bold text-white">
              Let's Talk About Your Project
            </h3>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Whether you need a website, SEO, Google Business Profile
              optimization, digital marketing, branding or AI solutions,
              we're ready to help.
            </p>

            <div className="mt-10 space-y-6">

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10">
                  <Phone className="text-orange-500" size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Phone
                  </p>

                  <p className="mt-1 font-medium text-white">
                    +234 905 891 0187
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10">
                  <Mail className="text-orange-500" size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Email
                  </p>

                  <p className="mt-1 font-medium text-white">
                    info@walesknight.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10">
                  <MapPin className="text-orange-500" size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Location
                  </p>

                  <p className="mt-1 font-medium text-white">
                    Abule Pan, Ibeju Lekki, Lagos, Nigeria
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10">
                  <MessageCircle
                    className="text-orange-500"
                    size={22}
                  />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    WhatsApp
                  </p>

                  <p className="mt-1 font-medium text-white">
                    Available on WhatsApp
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* ================= RIGHT CARD ================= */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-800 bg-slate-950 p-8 md:p-10"
          >
            <h3 className="text-3xl font-bold text-white">
              Send Us a Message
            </h3>

            <p className="mt-3 text-slate-400">
              Fill out the form and we'll get back to you.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              {/* Name + Email */}
              <div className="grid gap-5 md:grid-cols-2">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 text-white placeholder:text-slate-500 outline-none transition focus:border-orange-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 text-white placeholder:text-slate-500 outline-none transition focus:border-orange-500"
                />

              </div>

              {/* Phone */}
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 text-white placeholder:text-slate-500 outline-none transition focus:border-orange-500"
              />

              {/* Message */}
              <textarea
                rows={6}
                name="message"
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={handleChange}
                required
                className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900 p-4 text-white placeholder:text-slate-500 outline-none transition focus:border-orange-500"
              />

              {/* Success */}
              {success && (
                <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-400">
                  {success}
                </div>
              )}

              {/* Error */}
              {error && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
                  {error}
                </div>
              )}

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                disabled={loading}
                className="w-full rounded-xl bg-orange-500 py-4 font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}