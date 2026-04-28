"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { FaTwitter, FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { getServicesNav } from "../services/services";
import { searchContent } from "../services/search";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [services, setServices] = useState([]);
  const searchRef = useRef(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    getServicesNav().then((data) => {
      if (Array.isArray(data)) setServices(data);
    });
  }, []);

  useEffect(() => {
    if (searchQuery.length < 3) {
      setSearchResults([]);
      return;
    }
    setIsSearching(true);
    const t = setTimeout(async () => {
      const results = await searchContent(searchQuery);
      setSearchResults(results || []);
      setIsSearching(false);
    }, 300);
    return () => clearTimeout(t);
  }, [searchQuery]);

  useEffect(() => {
    const handler = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      {/* ── TOP BAR ── */}
      <div className="bg-[#1d2228] text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-gray-300">
              <svg className="w-3.5 h-3.5 text-[#f5a523] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              info@flexa-luxe.com
            </span>
            <span className="flex items-center gap-1.5 text-gray-300">
              <svg className="w-3.5 h-3.5 text-[#f5a523] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Korunní 2569/108, 101 00 Prague 10
            </span>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1 text-gray-400 text-xs">
              <Link href="/contact" className="hover:text-[#f5a523] transition-colors">Help</Link>
              <span className="text-gray-600 mx-1">/</span>
              <Link href="/contact" className="hover:text-[#f5a523] transition-colors">Support</Link>
              <span className="text-gray-600 mx-1">/</span>
              <Link href="/contact" className="hover:text-[#f5a523] transition-colors">Contact</Link>
            </div>
            <div className="flex items-center gap-2.5 text-gray-500">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#f5a523] transition-colors"><FaTwitter size={12} /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#f5a523] transition-colors"><FaFacebook size={12} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#f5a523] transition-colors"><FaInstagram size={12} /></a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#f5a523] transition-colors"><FaPinterest size={12} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN NAV ── */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[70px]">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/FlexaLuxe-logo.svg"
                alt="FlexaLuxe"
                width={170}
                height={38}
                priority
                className="h-9 w-auto"
              />
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[#1d2228] font-medium text-sm hover:text-[#f5a523] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              {services.length > 0 && (
                <div className="relative">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center gap-1 text-[#1d2228] font-medium text-sm hover:text-[#f5a523] transition-colors cursor-pointer"
                  >
                    All Services
                    <ChevronDownIcon
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-60 bg-white shadow-xl rounded-sm py-2 z-50 border border-gray-100">
                      {services.map((s) => (
                        <Link
                          key={s.id}
                          href={`/services/${s.slug}`}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#f5a523] hover:text-white transition-colors"
                          onClick={() => setServicesOpen(false)}
                        >
                          {s.title.rendered}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right side: search + phone + CTA */}
            <div className="hidden lg:flex items-center gap-5">
              {/* Search */}
              <div ref={searchRef} className="relative">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="text-[#1d2228] hover:text-[#f5a523] transition-colors p-1"
                  aria-label="Search"
                >
                  <MagnifyingGlassIcon className="h-5 w-5" />
                </button>
                {searchOpen && (
                  <div className="absolute right-0 top-full mt-2 w-72 z-50">
                    <input
                      type="text"
                      autoFocus
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-sm shadow-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#f5a523]"
                    />
                    {searchQuery.length >= 3 && (
                      <div className="mt-1 bg-white rounded-sm shadow-lg border border-gray-100 max-h-60 overflow-y-auto">
                        {isSearching ? (
                          <div className="p-3 text-center text-sm text-gray-500">Searching...</div>
                        ) : searchResults.length > 0 ? (
                          searchResults.map((r) => (
                            <Link
                              key={r.id}
                              href={`/${r.type}/${r.slug}`}
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 border-b border-gray-50 last:border-0"
                              onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                            >
                              {r.title}
                            </Link>
                          ))
                        ) : (
                          <div className="p-3 text-center text-sm text-gray-500">No results found</div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full border-2 border-[#f5a523] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#f5a523]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <p className="text-[10px] text-gray-400 uppercase tracking-wide">Call Anytime</p>
                  <p className="text-sm font-bold text-[#1d2228]">+420 216 916 22</p>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="bg-[#f5a523] text-white font-semibold px-5 py-2.5 text-sm hover:bg-[#e09415] transition-colors uppercase tracking-wide rounded-sm whitespace-nowrap"
              >
                Get Solution
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-[#1d2228] hover:text-[#f5a523] transition-colors"
              aria-label="Open menu"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* ── MOBILE MENU DRAWER ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-[300px] bg-white flex flex-col overflow-y-auto shadow-2xl">
            {/* Drawer header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <Image src="/FlexaLuxe-logo.svg" alt="FlexaLuxe" width={140} height={32} className="h-8 w-auto" />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 text-gray-400 hover:text-[#f5a523] transition-colors rounded"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-5 py-3 text-[#1d2228] font-medium hover:text-[#f5a523] hover:bg-orange-50 transition-colors border-b border-gray-50 text-sm"
                >
                  {link.name}
                </Link>
              ))}
              {services.length > 0 && (
                <>
                  <div className="px-5 py-2 text-xs uppercase tracking-widest text-gray-400 mt-2">Services</div>
                  {services.map((s) => (
                    <Link
                      key={s.id}
                      href={`/services/${s.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center px-5 py-2.5 text-gray-600 hover:text-[#f5a523] hover:bg-orange-50 transition-colors border-b border-gray-50 text-sm"
                    >
                      {s.title.rendered}
                    </Link>
                  ))}
                </>
              )}
            </div>

            {/* Drawer footer */}
            <div className="p-5 border-t border-gray-100 space-y-3 bg-gray-50">
              <p className="text-xs text-gray-500 flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-[#f5a523]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                info@flexa-luxe.com
              </p>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block bg-[#f5a523] text-white text-center font-semibold py-3 rounded-sm text-sm hover:bg-[#e09415] transition-colors uppercase tracking-wide"
              >
                Get Solution
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
