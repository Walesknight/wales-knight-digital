import CountUp from "react-countup";

const stats = [
  { end: 100, suffix: "%", label: "Client Focused" },
  { end: 24, suffix: "/7", label: "Support" },
  { end: 6, suffix: "+", label: "Core Services" },
  { end: 1, suffix: "", label: "Mission" },
];

export default function Stats() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <h2 className="text-5xl font-bold text-orange-500">
              <CountUp end={stat.end} duration={2} />
              {stat.suffix}
            </h2>

            <p className="mt-3 text-slate-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}