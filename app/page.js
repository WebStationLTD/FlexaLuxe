import HeroSection from "../components/hero";
import { WebVitals } from "./web-vitals";
import dynamic from "next/dynamic";

const MarqueeSection = dynamic(() => import("../components/MarqueeSection"), { ssr: true });
const AboutSection = dynamic(() => import("../components/AboutSection"), { ssr: true });
const ServicesSection = dynamic(() => import("../components/ServicesSection"), { ssr: true });
const StatsSection = dynamic(() => import("../components/StatsSection"), { ssr: true });
const Partners = dynamic(() => import("../components/clients"), { ssr: true });
const TestimonialsSection = dynamic(() => import("../components/TestimonialsSection"), { ssr: true });
const WhatWeOffer = dynamic(() => import("../components/WhatWeOffer"), { ssr: true });
const LatestPosts = dynamic(() => import("../components/latestposts"), { ssr: true });
const MapCTA = dynamic(() => import("../components/MapCTA"), { ssr: true });

export const revalidate = 3600;

export const metadata = {
  title: "Flexa-luxe s.r.o. — Industrial Technology Solutions",
  description:
    "Flexa-luxe s.r.o. is an international company based in Prague, specializing in advanced technological solutions for the industrial sector — industrial robotics, automation, and UV disinfection systems.",
  keywords: [
    "industrial robotics",
    "building automation",
    "UV disinfection",
    "UVC lamps",
    "industrial technology",
    "Prague",
    "Flexa-luxe",
  ],
  openGraph: {
    title: "Flexa-luxe s.r.o. — Industrial Technology Solutions",
    description:
      "Advanced technological solutions for the industrial sector — robotics, automation, and UV disinfection systems.",
    images: [
      {
        url: "/hero-image-desktop.jpg",
        width: 1200,
        height: 630,
        alt: "Flexa-luxe Industrial Technology",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flexa-luxe s.r.o. — Industrial Technology Solutions",
    description: "Advanced industrial technology solutions from Prague.",
    images: ["/hero-image-desktop.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <WebVitals />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <Partners />
      <TestimonialsSection />
      <WhatWeOffer />
      <LatestPosts />
      <MapCTA />
    </>
  );
}
