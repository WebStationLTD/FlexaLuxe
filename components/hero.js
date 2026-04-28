import Link from "next/link";
import LazyImageObserver from "./LazyImageObserver";

export default function Hero() {
  return (
    <>
      <LazyImageObserver />
      <div className="bg-white">
        {/* Mobile Hero */}
        <div className="lg:hidden relative">
          <div className="w-full">
            <img
              src="/hero-image-mobile.jpg"
              width={640}
              height={400}
              alt="Flexa-luxe industrial technology"
              className="w-full h-auto object-cover aspect-[4/3]"
              loading="eager"
              decoding="sync"
              fetchPriority="high"
              style={{
                objectFit: "cover",
                contentVisibility: "auto",
                containIntrinsicSize: "640px 400px",
              }}
              id="hero-mobile-lcp"
            />
          </div>
          <div className="px-6 py-10">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Industrial Innovation for the Future of Industry
            </h1>
            <p className="mt-4 text-xl font-semibold text-[#f5a523]">
              Precision Automation & Disinfection Systems
            </p>
            <p className="mt-5 text-sm text-gray-500 leading-relaxed">
              Flexa-luxe s.r.o. is an international company based in Prague, specializing in advanced technological solutions for the industrial sector — from robotics to UV disinfection.
            </p>
            <div className="mt-8 flex items-center gap-x-4">
              <Link
                href="/services"
                className="rounded-sm bg-[#f5a523] hover:bg-[#e09415] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors uppercase tracking-wide"
              >
                Our Services
              </Link>
              <Link href="/contact" className="text-sm font-semibold text-gray-900 hover:text-[#f5a523] transition-colors">
                Contact Us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Hero */}
        <div className="hidden lg:block relative">
          <div className="mx-auto max-w-7xl">
            <div className="relative z-10 pt-0 lg:w-full lg:max-w-2xl">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute inset-y-0 right-8 h-full w-80 translate-x-1/2 transform fill-white"
              >
                <polygon points="0,0 90,0 50,100 0,100" />
              </svg>
              <div className="relative px-6 py-14 lg:px-8 lg:py-20 lg:pr-0">
                <div className="ml-0 mr-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                  <div className="mt-2 mb-8 flex">
                    <div className="relative rounded-full px-3 py-1 text-sm text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                      Advanced Industrial Technology Solutions.{" "}
                      <Link
                        href="/services"
                        className="font-semibold whitespace-nowrap text-[#f5a523]"
                      >
                        <span aria-hidden="true" className="absolute inset-0" />
                        Explore Services <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Industrial Innovation for the Future of Industry
                  </h1>
                  <p className="mt-6 text-2xl font-semibold text-[#f5a523]">
                    Precision Automation & Disinfection Systems
                  </p>
                  <p className="mt-6 text-lg text-gray-500 leading-relaxed">
                    Flexa-luxe s.r.o. is an international company based in Prague, specializing in the supply of advanced technological solutions for the industrial sector — from industrial robotics and automation to UV and UVC disinfection systems.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <Link
                      href="/services"
                      className="rounded-sm bg-[#f5a523] hover:bg-[#e09415] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors uppercase tracking-wide"
                    >
                      Our Services
                    </Link>
                    <Link href="/contact" className="text-sm font-semibold text-gray-900 hover:text-[#f5a523] transition-colors">
                      Contact Us <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 absolute inset-y-0 right-0 w-1/2">
            <img
              src="/hero-image-desktop.jpg"
              width={955}
              height={776}
              alt="Flexa-luxe industrial automation"
              className="h-full w-full object-cover"
              loading="eager"
              decoding="sync"
              fetchPriority="high"
              style={{
                objectFit: "cover",
                contentVisibility: "auto",
                containIntrinsicSize: "955px 776px",
              }}
              id="hero-desktop-lcp"
            />
          </div>
        </div>
      </div>
    </>
  );
}
