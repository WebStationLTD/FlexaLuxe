import Link from "next/link";

export default function MapCTA() {
  return (
    <>
      {/* ── ORANGE CTA BAR ── */}
      <div className="bg-[#f5a523] py-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg lg:text-xl">
              Need industrial solutions &amp; services consultation?
            </h3>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 bg-white text-[#1d2228] font-bold px-8 py-3 text-sm hover:bg-[#1d2228] hover:text-white transition-colors uppercase tracking-wide rounded-sm whitespace-nowrap"
          >
            Get Solution
          </Link>
        </div>
      </div>

      {/* ── GOOGLE MAP ── */}
      <div className="relative h-[420px] w-full overflow-hidden">
        <iframe
          title="Flexa-luxe Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.8308!2d14.4449!3d50.0740!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94eccc11f6d9%3A0xb3f5f65de0c36e7f!2sKorunn%C3%AD%2C%20101%2000%20Praha%2010-Vinohrady%2C%20Czechia!5e0!3m2!1sen!2scz!4v1714000000000!5m2!1sen!2scz"
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
