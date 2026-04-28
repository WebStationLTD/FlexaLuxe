export default function AboutSection() {
  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT: Text Content ── */}
          <div>
            <p className="text-[#f5a523] font-semibold text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="inline-block w-8 h-0.5 bg-[#f5a523]"></span>
              Welcome to Flexa-luxe
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1d2228] leading-tight mb-4">
              Best Industrial Technology Services you can Trust
            </h2>
            <p className="text-[#f5a523] font-medium text-base mb-5 italic">
              The professional approach to industrial automation.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Flexa-luxe s.r.o. is an international company based in Prague, specializing in the supply of advanced technological solutions for the industrial sector. We operate across Europe, supporting companies, system integrators, and industrial operators in the development of modern, efficient, and high-performance systems.
            </p>

            {/* Feature items */}
            <div className="grid grid-cols-2 gap-5 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#f5a523]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#f5a523]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1d2228] text-sm mb-1">Industrial Robotics</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">Advanced robotic systems for precision manufacturing and automation.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#f5a523]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#f5a523]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1d2228] text-sm mb-1">UV Disinfection</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">High-performance UV and UVC germicidal lamps for industrial hygiene.</p>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-1.5">
                <span className="text-sm font-semibold text-[#1d2228]">Technology Efficiency</span>
                <span className="text-sm font-bold text-[#f5a523]">95%</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#f5a523] rounded-full" style={{ width: "95%" }}></div>
              </div>
              <div className="flex justify-between mt-3 mb-1.5">
                <span className="text-sm font-semibold text-[#1d2228]">Client Satisfaction</span>
                <span className="text-sm font-bold text-[#f5a523]">98%</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#f5a523] rounded-full" style={{ width: "98%" }}></div>
              </div>
            </div>

            <a
              href="/services"
              className="inline-block bg-[#f5a523] text-white font-semibold px-7 py-3 text-sm hover:bg-[#e09415] transition-colors uppercase tracking-wide rounded-sm"
            >
              Discover More
            </a>
          </div>

          {/* ── RIGHT: Images ── */}
          <div className="relative">
            {/* Orange accent bar */}
            <div className="absolute -left-4 top-8 bottom-8 w-1.5 bg-[#f5a523] rounded-full hidden lg:block"></div>

            {/* Main large image */}
            <div className="relative rounded-sm overflow-hidden shadow-2xl">
              <img
                src="/hero-image-desktop.jpg"
                alt="Industrial technology"
                className="w-full h-72 lg:h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1d2228]/30 to-transparent"></div>
            </div>

            {/* Bottom smaller image, overlapping */}
            <div className="absolute -bottom-8 -left-6 w-44 h-36 lg:w-52 lg:h-44 rounded-sm overflow-hidden shadow-xl border-4 border-white hidden sm:block">
              <img
                src="/hero-image-mobile.jpg"
                alt="Automation solutions"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Orange badge */}
            <div className="absolute -right-4 top-6 bg-[#f5a523] text-white px-4 py-3 rounded-sm shadow-lg hidden lg:block">
              <p className="text-2xl font-bold leading-none">10+</p>
              <p className="text-xs font-medium mt-0.5 leading-tight">Years of<br />Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
