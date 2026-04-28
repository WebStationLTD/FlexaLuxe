"use client";

import { useCountUp } from "../hooks/useCountUp";

const stats = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Partner Companies" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

function StatItem({ value, suffix, label }) {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div ref={ref} className="text-center px-6">
      <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
        {count}
        <span className="text-[#f5a523]">{suffix}</span>
      </div>
      <p className="text-gray-400 text-sm uppercase tracking-widest font-medium">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="overflow-hidden">
      {/* ── TOP: Orange panel + image ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Orange left panel */}
        <div className="bg-[#f5a523] px-8 py-16 lg:px-16 lg:py-20 flex flex-col justify-center relative overflow-hidden">
          {/* Background circuit pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M0 200 Q100 100 200 200 T400 200" stroke="white" strokeWidth="1" fill="none" />
              <path d="M0 100 Q100 0 200 100 T400 100" stroke="white" strokeWidth="1" fill="none" />
              <path d="M0 300 Q100 200 200 300 T400 300" stroke="white" strokeWidth="1" fill="none" />
              <circle cx="100" cy="200" r="4" fill="white" />
              <circle cx="200" cy="100" r="4" fill="white" />
              <circle cx="300" cy="200" r="4" fill="white" />
              <circle cx="200" cy="300" r="4" fill="white" />
            </svg>
          </div>
          <div className="relative z-10">
            <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-3">
              Tech Management
            </p>
            <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight mb-8">
              Your Success with the Best Industrial Solutions
            </h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                  01
                </div>
                <p className="text-white/90 text-sm leading-relaxed pt-1.5">
                  Optimization of production processes through reliable and integrated technologies, reducing operational risks.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                  02
                </div>
                <p className="text-white/90 text-sm leading-relaxed pt-1.5">
                  High flexibility and adaptability to various industrial applications with fast, personalized technical support.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: image */}
        <div className="relative h-72 lg:h-auto">
          <img
            src="/hero-image-desktop.jpg"
            alt="Industrial technology solutions"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#1d2228]/40" />
        </div>
      </div>

      {/* ── BOTTOM: Animated counters ── */}
      <div className="bg-[#1d2228] py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x-0 lg:divide-x divide-gray-700">
            {stats.map((stat) => (
              <StatItem key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
