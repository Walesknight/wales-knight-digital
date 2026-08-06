import {
  Monitor,
  Bot,
  Search,
  MapPinned,
  BarChart3,
} from "lucide-react";

export default function HeroVisual() {
  return (
    <div className="relative hidden lg:flex items-center justify-center">

      {/* Background Glow */}
      <div className="absolute h-[520px] w-[520px] rounded-full bg-orange-500/10 blur-3xl" />

      {/* Laptop */}
      <div className="relative z-10 w-[520px] rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl">

        {/* Browser Header */}
        <div className="flex items-center gap-2 border-b border-slate-700 px-5 py-4">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>

        {/* Screen */}
        <div className="space-y-6 p-8">

          <div className="flex items-center gap-3">
            <Monitor className="text-orange-500" size={32} />

            <div>
              <h3 className="font-heading text-xl text-white">
                Wales Knight
              </h3>

              <p className="text-slate-400 text-sm">
                Digital Technologies
              </p>
            </div>
          </div>

          <div className="h-3 rounded bg-slate-700"></div>
          <div className="h-3 w-5/6 rounded bg-slate-700"></div>
          <div className="h-3 w-4/6 rounded bg-slate-700"></div>

          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-xl bg-slate-800 p-5">
              <Search className="text-orange-500" />
              <p className="mt-3 text-sm text-white">
                SEO Growth
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-5">
              <MapPinned className="text-orange-500" />
              <p className="mt-3 text-sm text-white">
                Google Maps
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-5">
              <Bot className="text-orange-500" />
              <p className="mt-3 text-sm text-white">
                AI Automation
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 p-5">
              <BarChart3 className="text-orange-500" />
              <p className="mt-3 text-sm text-white">
                Analytics
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Floating Card */}
      <div className="absolute -right-10 top-10 rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-xl">
        <p className="text-sm text-slate-400">
          Monthly Growth
        </p>

        <h3 className="mt-2 text-3xl font-bold text-orange-500">
          +245%
        </h3>
      </div>

      {/* Floating Card */}
      <div className="absolute -left-8 bottom-12 rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-xl">
        <p className="text-sm text-slate-400">
          Google Ranking
        </p>

        <h3 className="mt-2 text-3xl font-bold text-white">
          #1
        </h3>
      </div>

    </div>
  );
}