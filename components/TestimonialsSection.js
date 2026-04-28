"use client";

import { useState } from "react";

const tabs = [
  {
    letter: "R",
    title: "Industrial Robotics",
    description:
      "We provide carefully selected robotic systems designed to meet the highest standards of automation, control, and safety in advanced industrial environments.",
  },
  {
    letter: "A",
    title: "Building & Process Automation",
    description:
      "From building management systems to complex process automation, we deliver integrated solutions that enhance performance and reduce operational costs.",
  },
  {
    letter: "D",
    title: "UV & UVC Disinfection",
    description:
      "High-performance germicidal UV solutions ensuring high hygiene standards and effective sanitization of air, surfaces, and equipment in compliance with European regulations.",
  },
];

export default function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT: Heading + quote ── */}
          <div>
            <p className="text-[#f5a523] font-semibold text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="inline-block w-8 h-0.5 bg-[#f5a523]"></span>
              What We Offer
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1d2228] leading-tight mb-6">
              We&apos;re Leading in Industrial Technology Market
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              There are many variations of passages of available market solutions, but the majority require alteration. We deliver cutting-edge technologies and scalable solutions that integrate seamlessly into existing systems.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 italic">
              &ldquo;Choosing Flexa-luxe s.r.o. means partnering with a reliable, results-driven company capable of supporting your technological growth. We build long-term relationships based on trust, expertise, and tangible value.&rdquo;
            </p>

            {/* Person */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#f5a523] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                F
              </div>
              <div>
                <p className="font-bold text-[#1d2228] text-sm">Anyuta Zdravkova</p>
                <p className="text-gray-400 text-xs">Managing Director, Flexa-luxe s.r.o.</p>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Service tab cards ── */}
          <div className="space-y-4">
            {tabs.map((tab, i) => (
              <button
                key={tab.title}
                onClick={() => setActiveTab(i)}
                className={`w-full text-left p-5 rounded-sm border-l-4 transition-all duration-300 flex items-start gap-4 ${
                  activeTab === i
                    ? "border-[#f5a523] bg-[#f5a523]/5 shadow-md"
                    : "border-gray-200 bg-gray-50 hover:border-[#f5a523]/50"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-colors ${
                    activeTab === i
                      ? "bg-[#f5a523] text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {tab.letter}
                </div>
                <div className="text-left">
                  <h4
                    className={`font-bold text-sm mb-1 transition-colors ${
                      activeTab === i ? "text-[#f5a523]" : "text-[#1d2228]"
                    }`}
                  >
                    {tab.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {tab.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
