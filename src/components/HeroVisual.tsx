import {
  Monitor,
  Bot,
  Search,
  MapPinned,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] px-3 sm:px-0">
      {/* Main Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[100px] sm:h-[500px] sm:w-[500px]" />

      {/* ================= MAIN DASHBOARD ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="relative z-10 overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900 shadow-2xl shadow-black/40 sm:rounded-3xl"
      >
        {/* Browser Header */}
        <div className="flex items-center justify-between border-b border-slate-700/80 bg-slate-950/60 px-4 py-3 sm:px-5 sm:py-4">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500 sm:h-3 sm:w-3" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500 sm:h-3 sm:w-3" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500 sm:h-3 sm:w-3" />
          </div>

          <div className="hidden rounded-md bg-slate-800 px-3 py-1 text-[10px] text-slate-500 sm:block">
            walesknight.com
          </div>

          <div className="h-2 w-2 rounded-full bg-orange-500/70" />
        </div>

        {/* Dashboard */}
        <div className="p-5 sm:p-7">
          {/* Brand Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 sm:h-12 sm:w-12">
                <Monitor className="text-orange-500" size={25} />
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-white sm:text-xl">
                  Wales Knight
                </h3>

                <p className="text-xs text-slate-400 sm:text-sm">
                  Digital Technologies
                </p>
              </div>
            </div>

            <div className="hidden rounded-lg border border-green-500/20 bg-green-500/10 px-3 py-1.5 text-xs font-medium text-green-400 sm:block">
              Online
            </div>
          </div>

          {/* Dashboard Lines */}
          <div className="mt-6 space-y-3">
            <div className="h-2.5 w-full rounded-full bg-slate-800" />
            <div className="h-2.5 w-5/6 rounded-full bg-slate-800" />
            <div className="h-2.5 w-3/5 rounded-full bg-slate-800" />
          </div>

          {/* Services Grid */}
          <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4">
            {/* SEO */}
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-xl border border-slate-700/60 bg-slate-800/70 p-4 transition-colors hover:border-orange-500/30 sm:p-5"
            >
              <Search className="h-5 w-5 text-orange-500 sm:h-6 sm:w-6" />

              <p className="mt-3 text-xs font-medium text-white sm:text-sm">
                SEO Growth
              </p>

              <div className="mt-2 h-1.5 w-3/4 rounded-full bg-orange-500/20">
                <div className="h-full w-4/5 rounded-full bg-orange-500" />
              </div>
            </motion.div>

            {/* Google Maps */}
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-xl border border-slate-700/60 bg-slate-800/70 p-4 transition-colors hover:border-orange-500/30 sm:p-5"
            >
              <MapPinned className="h-5 w-5 text-orange-500 sm:h-6 sm:w-6" />

              <p className="mt-3 text-xs font-medium text-white sm:text-sm">
                Google Maps
              </p>

              <div className="mt-2 flex gap-1">
                <div className="h-1.5 w-5 rounded-full bg-orange-500" />
                <div className="h-1.5 w-5 rounded-full bg-orange-500" />
                <div className="h-1.5 w-5 rounded-full bg-orange-500/40" />
              </div>
            </motion.div>

            {/* AI Automation */}
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-xl border border-slate-700/60 bg-slate-800/70 p-4 transition-colors hover:border-orange-500/30 sm:p-5"
            >
              <Bot className="h-5 w-5 text-orange-500 sm:h-6 sm:w-6" />

              <p className="mt-3 text-xs font-medium text-white sm:text-sm">
                AI Automation
              </p>

              <div className="mt-2 h-1.5 w-full rounded-full bg-slate-700">
                <div className="h-full w-3/5 rounded-full bg-orange-500" />
              </div>
            </motion.div>

            {/* Analytics */}
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-xl border border-slate-700/60 bg-slate-800/70 p-4 transition-colors hover:border-orange-500/30 sm:p-5"
            >
              <BarChart3 className="h-5 w-5 text-orange-500 sm:h-6 sm:w-6" />

              <p className="mt-3 text-xs font-medium text-white sm:text-sm">
                Analytics
              </p>

              <div className="mt-2 flex h-5 items-end gap-1">
                <div className="h-2 w-1.5 rounded-sm bg-orange-500/40" />
                <div className="h-3 w-1.5 rounded-sm bg-orange-500/60" />
                <div className="h-4 w-1.5 rounded-sm bg-orange-500/80" />
                <div className="h-5 w-1.5 rounded-sm bg-orange-500" />
              </div>
            </motion.div>
          </div>

          {/* Growth Bar */}
          <div className="mt-5 rounded-xl border border-slate-700/60 bg-slate-950/50 p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Digital Performance
              </span>

              <span className="text-xs font-semibold text-orange-400">
                Growing
              </span>
            </div>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "82%" }}
                transition={{ duration: 1.2, delay: 0.7 }}
                className="h-full rounded-full bg-gradient-to-r from-orange-500 to-orange-400"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ================= GROWTH CARD ================= */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="absolute -right-1 top-5 z-20 rounded-xl border border-slate-700 bg-slate-900/95 p-3 shadow-xl backdrop-blur sm:-right-6 sm:top-10 sm:rounded-2xl sm:p-5"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-green-500/10 sm:h-9 sm:w-9">
            <TrendingUp className="h-4 w-4 text-green-400 sm:h-5 sm:w-5" />
          </div>

          <div>
            <p className="text-[9px] text-slate-400 sm:text-xs">
              Monthly Growth
            </p>

            <h3 className="text-lg font-bold text-green-400 sm:text-2xl">
              +245%
            </h3>
          </div>
        </div>
      </motion.div>

      {/* ================= RANKING CARD ================= */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="absolute -bottom-3 left-0 z-20 rounded-xl border border-slate-700 bg-slate-900/95 p-3 shadow-xl backdrop-blur sm:-left-6 sm:bottom-8 sm:rounded-2xl sm:p-5"
      >
        <p className="text-[9px] text-slate-400 sm:text-xs">
          Google Ranking
        </p>

        <div className="mt-1 flex items-center gap-2">
          <span className="text-xl font-bold text-white sm:text-3xl">
            #1
          </span>

          <span className="text-[9px] text-green-400 sm:text-xs">
            Top Result
          </span>
        </div>
      </motion.div>
    </div>
  );
}