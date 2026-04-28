"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

const exploreLinks = [
  { name: "About Company", href: "/" },
  { name: "Meet the Team", href: "/team" },
  { name: "News & Articles", href: "/blog" },
  { name: "Our Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { name: "Industrial Robotics", href: "/services" },
  { name: "Building Automation", href: "/services" },
  { name: "UV Disinfection", href: "/services" },
  { name: "Process Control", href: "/services" },
  { name: "System Integration", href: "/services" },
];

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      const current = new Date().getFullYear();
      if (current !== year) setYear(current);
    }, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, [year]);

  return (
    <footer className="bg-[#1d2228] text-gray-400">
      {/* ── MAIN FOOTER CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/FlexaLuxe-logo.svg"
                alt="FlexaLuxe"
                width={160}
                height={36}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Flexa-luxe s.r.o. is an international company based in Prague, specializing in advanced technological solutions for the industrial sector across Europe.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-[#f5a523] hover:text-white transition-colors"
              >
                <FaTwitter size={13} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-[#f5a523] hover:text-white transition-colors"
              >
                <FaFacebook size={13} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-[#f5a523] hover:text-white transition-colors"
              >
                <FaInstagram size={13} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-[#f5a523] hover:text-white transition-colors"
              >
                <FaPinterest size={13} />
              </a>
            </div>
          </div>

          {/* Explore links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 pb-2 border-b border-white/10">
              Explore
            </h4>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#f5a523] transition-colors flex items-center gap-2 group"
                  >
                    <svg className="w-3 h-3 text-[#f5a523] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 pb-2 border-b border-white/10">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#f5a523] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="leading-relaxed">
                  Korunní 2569/108, Vinohrady<br />
                  101 00 Prague 10, Czech Republic
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#f5a523] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:info@flexa-luxe.com" className="hover:text-[#f5a523] transition-colors">
                  info@flexa-luxe.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#f5a523] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
                <span>Reg. No.: 216 91 622</span>
              </li>
            </ul>
          </div>

          {/* Service links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 pb-2 border-b border-white/10">
              Service Link
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#f5a523] transition-colors flex items-center gap-2 group"
                  >
                    <svg className="w-3 h-3 text-[#f5a523] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            &copy; {year} Flexa-luxe s.r.o. — Reg. No. 216 91 622. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link href="/privacy-policy" className="hover:text-[#f5a523] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
