import Link from "next/link";

const offerings = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2" />
        <path d="M10 20h20M20 10v20M14 14l12 12M26 14L14 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Robotics",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <rect x="6" y="14" width="28" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M14 14v-4a2 2 0 012-2h8a2 2 0 012 2v4" stroke="currentColor" strokeWidth="2" />
        <path d="M20 20v4M17 22h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Automation",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <path d="M8 32V18l12-8 12 8v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="15" y="22" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "Process Control",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <ellipse cx="20" cy="20" rx="10" ry="14" stroke="currentColor" strokeWidth="2" />
        <path d="M20 6v28M10 20h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 14c2.5 1.5 5 2 8 2s5.5-.5 8-2M12 26c2.5-1.5 5-2 8-2s5.5.5 8 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "UV Disinfection",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="2" />
        <circle cx="7" cy="20" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="33" cy="20" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="33" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M11 20h3M26 20h3M20 11v3M20 26v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Integration",
  },
];

export default function WhatWeOffer() {
  return (
    <section className="bg-[#0d1b2a] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT: Text ── */}
          <div>
            <p className="text-[#f5a523] font-semibold text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="inline-block w-8 h-0.5 bg-[#f5a523]"></span>
              What We Offer
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
              Help you Overcome your Industrial Challenges
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-10">
              We offer a comprehensive range of industrial technological solutions — from advanced robotics and building automation to high-performance UV disinfection systems. Our team provides end-to-end support, from technical consultation to supply and integration.
            </p>
            <Link
              href="/services"
              className="inline-block bg-[#f5a523] text-white font-semibold px-7 py-3 text-sm hover:bg-[#e09415] transition-colors uppercase tracking-wide rounded-sm"
            >
              Discover More
            </Link>
          </div>

          {/* ── RIGHT: 5 icon boxes ── */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {offerings.map((item, i) => (
              <div
                key={item.title}
                className={`group flex flex-col items-center text-center p-6 bg-white/5 border border-white/10 rounded-sm hover:bg-[#f5a523] hover:border-[#f5a523] transition-all duration-300 ${
                  i === 4 ? "sm:col-start-2 lg:col-start-2" : ""
                }`}
              >
                <div className="w-14 h-14 rounded-full bg-[#f5a523]/10 group-hover:bg-white/20 flex items-center justify-center text-[#f5a523] group-hover:text-white transition-colors duration-300 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-white text-sm font-semibold group-hover:text-white transition-colors">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
