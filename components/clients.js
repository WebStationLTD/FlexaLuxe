const partners = [
  {
    name: "Siemens",
    svg: (
      <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <text x="10" y="28" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" fill="currentColor">SIEMENS</text>
      </svg>
    ),
  },
  {
    name: "ABB",
    svg: (
      <svg viewBox="0 0 80 40" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <rect x="0" y="5" width="30" height="30" rx="2" fill="currentColor" />
        <text x="5" y="26" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="white">AB</text>
        <text x="36" y="26" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" fill="currentColor">ABB</text>
      </svg>
    ),
  },
  {
    name: "Philips",
    svg: (
      <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <circle cx="10" cy="20" r="6" fill="currentColor" />
        <circle cx="24" cy="20" r="6" fill="currentColor" />
        <circle cx="38" cy="20" r="6" fill="currentColor" />
        <text x="50" y="26" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="currentColor">PHILIPS</text>
      </svg>
    ),
  },
  {
    name: "Osram",
    svg: (
      <svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <text x="5" y="28" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" fill="currentColor">OSRAM</text>
      </svg>
    ),
  },
  {
    name: "Bosch",
    svg: (
      <svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <circle cx="18" cy="20" r="16" fill="currentColor" />
        <text x="8" y="26" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white">B</text>
        <text x="38" y="27" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="currentColor">BOSCH</text>
      </svg>
    ),
  },
];

export default function Partners() {
  return (
    <section className="bg-white py-14 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-10">
          Trusted Partners & Suppliers
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="text-gray-300 hover:text-[#f5a523] transition-colors duration-300 cursor-default"
              title={partner.name}
            >
              {partner.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
