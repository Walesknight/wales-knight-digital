import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
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

      setSuccess(
        "Your message has been sent successfully."
      );

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error(err);

      setError(
        "Unable to send your message. Please try again."
      );
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="bg-slate-950 py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-semibold uppercase tracking-widest text-orange-500">
            Contact Us
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Let's Build Your Next Project
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Need a professional website, SEO,
            Google Business Profile optimization
            or AI solutions? Send us a message
            and we'll get back to you within
            24 hours.
          </p>

          <div className="mt-10 space-y-6">

            <div className="flex items-center gap-4">
              <Phone className="text-orange-500" />
              <span className="text-slate-300">
                +234 905 891 0187
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-orange-500" />
              <span className="text-slate-300">
                hello@walesknight.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-orange-500" />
              <span className="text-slate-300">
                Lagos, Nigeria
              </span>
            </div>

            <div className="flex items-center gap-4">
              <MessageCircle className="text-orange-500" />
              <span className="text-slate-300">
                Available on WhatsApp
              </span>
            </div>

          </div>
        </motion.div>
                {/* Right */}

                <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-8"
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none transition focus:border-orange-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none transition focus:border-orange-500"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none transition focus:border-orange-500"
            />

            <textarea
              rows={6}
              name="message"
              placeholder="Tell us about your project..."
              value={form.message}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none transition focus:border-orange-500"
            />

            {success && (
              <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-400">
                {success}
              </div>
            )}

            {error && (
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
                {error}
              </div>
            )}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={loading}
              className="w-full rounded-xl bg-orange-500 py-4 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}