import Link from "next/link";

const services = [
  {
    category: "Robotics",
    title: "Industrial Robotics Solutions",
    description:
      "We supply and integrate advanced robotic systems for precision manufacturing, assembly, welding, and material handling across various industrial sectors.",
    image: "/hero-image-desktop.jpg",
    href: "/services",
  },
  {
    category: "Automation",
    title: "Building & Process Automation",
    description:
      "Complete building and process automation solutions — from HVAC and lighting control to full industrial process management and SCADA integration.",
    image: "/hero-image-mobile.jpg",
    href: "/services",
  },
  {
    category: "Disinfection",
    title: "UV & UVC Disinfection Systems",
    description:
      "High-performance germicidal UV and UVC lamp systems for industrial, healthcare, and production environments, ensuring maximum hygiene and compliance.",
    image: "/hero-image-desktop.jpg",
    href: "/services",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#f8f9fa] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#f5a523] font-semibold text-sm uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
            <span className="inline-block w-8 h-0.5 bg-[#f5a523]"></span>
            Our Core Services
            <span className="inline-block w-8 h-0.5 bg-[#f5a523]"></span>
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1d2228]">
            Innovation & Excellence in Industrial Technology
          </h2>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1d2228]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#f5a523] text-white text-xs font-semibold px-3 py-1 uppercase tracking-wide rounded-sm">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#1d2228] mb-3 group-hover:text-[#f5a523] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-[#f5a523] font-semibold text-sm hover:gap-3 transition-all duration-200 uppercase tracking-wide"
                >
                  Read More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
