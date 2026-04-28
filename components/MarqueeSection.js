import Link from "next/link";

const marqueeText = "ADVANCED INDUSTRIAL TECHNOLOGY & WORKING AREA";

const services = [
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2.5" />
        <path d="M20 32h24M32 20v24M26 26l12 12M38 26L26 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Industrial Robotics",
    href: "/services",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="20" width="48" height="30" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="M22 20V16a2 2 0 012-2h16a2 2 0 012 2v4" stroke="currentColor" strokeWidth="2.5" />
        <path d="M32 30v8M28 34h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Building Automation",
    href: "/services",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 44V28l20-12 20 12v16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="24" y="32" width="16" height="12" rx="1" stroke="currentColor" strokeWidth="2.5" />
        <path d="M32 32v12" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
    title: "Process Automation",
    href: "/services",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="32" cy="32" rx="16" ry="20" stroke="currentColor" strokeWidth="2.5" />
        <path d="M32 12v40M16 32h32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M18 22c3.8 2.2 8 3.2 14 3.2s10.2-1 14-3.2M18 42c3.8-2.2 8-3.2 14-3.2s10.2 1 14 3.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "UV Disinfection",
    href: "/services",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
        <rect x="22" y="10" width="20" height="40" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="M32 14v4M32 46v4M28 50h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M22 20h-6l-4 8 4 8h6M42 20h6l4 8-4 8h-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "UVC Lamps",
    href: "/services",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="12" cy="32" r="5" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="52" cy="32" r="5" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="32" cy="12" r="5" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="32" cy="52" r="5" stroke="currentColor" strokeWidth="2.5" />
        <path d="M17 32h9M38 32h9M32 17v9M32 38v9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    title: "System Integration",
    href: "/services",
  },
];

export default function MarqueeSection() {
  const items = Array(6).fill(marqueeText);

  return (
    <>
      {/* ── SCROLLING MARQUEE ── */}
      <div className="bg-[#1d2228] py-5 overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap">
          {items.map((text, i) => (
            <span key={i} className="flex items-center gap-4 mx-8 flex-shrink-0">
              <span className="text-white font-bold text-sm tracking-[0.2em] uppercase">
                {text}
              </span>
              <span className="text-[#f5a523] font-bold text-xl">&amp;</span>
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {items.map((text, i) => (
            <span key={`dup-${i}`} className="flex items-center gap-4 mx-8 flex-shrink-0">
              <span className="text-white font-bold text-sm tracking-[0.2em] uppercase">
                {text}
              </span>
              <span className="text-[#f5a523] font-bold text-xl">&amp;</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── 6 SERVICE BOXES ── */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group flex flex-col items-center text-center p-6 border border-gray-100 rounded-sm hover:border-[#f5a523] hover:shadow-lg transition-all duration-300"
              >
                <div className="text-gray-400 group-hover:text-[#f5a523] transition-colors duration-300 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-sm font-semibold text-[#1d2228] group-hover:text-[#f5a523] transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <p className="text-gray-600 text-base">
              Advanced technological solutions built specifically for your business.
            </p>
            <Link
              href="/services"
              className="flex-shrink-0 bg-[#f5a523] text-white font-semibold px-6 py-2.5 text-sm hover:bg-[#e09415] transition-colors uppercase tracking-wide rounded-sm"
            >
              Find Your Solution
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
