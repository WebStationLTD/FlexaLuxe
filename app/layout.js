import { headers } from "next/headers";
import Navigation from "../components/nav";
import CookieConsentBanner from "../components/cookieConsentBanner";
import Footer from "../components/footer";
import Script from "next/script";
import ImagePreloader from "../components/ImagePreloader";
import { CriticalCSS } from "./critical-css";
import BackToTop from "../components/BackToTop";
import CallButton from "../components/CallButton";
import NextTopLoader from "nextjs-toploader";
import "../styles/globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: true,
});

export async function generateMetadata() {
  const host = (await headers()).get("host"); // Get the current domain
  const protocol = host?.includes("localhost") ? "http" : "https"; // Adjust for local dev

  return {
    metadataBase: new URL(`${protocol}://${host}`),
    title: {
      template: "%s | Flexa-luxe s.r.o.",
      default: "Flexa-luxe s.r.o. | Industrial Technology Solutions",
    },
    description:
      "Flexa-luxe s.r.o. is an international company based in Prague, specializing in advanced technological solutions for the industrial sector — robotics, automation, and UV disinfection.",
    openGraph: {
      title: "Flexa-luxe s.r.o. | Industrial Technology Solutions",
      description:
        "Advanced technological solutions for the industrial sector — robotics, automation, and UV disinfection.",
      images: "/hero-image-desktop.jpg",
      type: "website",
      locale: "en_US",
      siteName: "Flexa-luxe s.r.o.",
    },
    twitter: {
      card: "summary_large_image",
      title: "Flexa-luxe s.r.o.",
      description: "Advanced industrial technology solutions from Prague.",
      images: ["/hero-image-desktop.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
      alternates: {
        canonical: "/",
        languages: {
          en: "/",
        },
      },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <CriticalCSS />
        <link
          rel="preconnect"
          href="https://flexaluxe.admin-panels.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://flexaluxe.admin-panels.com" />

        {/* Директно използване на preload тагове с правилния синтаксис */}
        <link
          rel="preload"
          as="image"
          href="/hero-image-mobile.jpg"
          type="image/jpg"
          media="(max-width: 640px)"
        />

        <link
          rel="preload"
          as="image"
          href="/hero-image-desktop.jpg"
          type="image/jpg"
          media="(min-width: 641px)"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={roboto.className}>
        <NextTopLoader showSpinner={false} color="#f5a523" />
        <BackToTop />
        <CallButton />
        <ImagePreloader />
        <Navigation />
        <main>{children}</main>
        <CookieConsentBanner />
        <Footer />
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Flexa-luxe s.r.o.",
              description:
                "International company based in Prague specializing in advanced technological solutions for the industrial sector — industrial robotics, automation, and UV/UVC disinfection systems.",
              url: "https://flexa-luxe.com",
              email: "info@flexa-luxe.com",
              identifier: "216 91 622",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Korunní 2569/108",
                addressLocality: "Prague",
                addressRegion: "Vinohrady",
                postalCode: "101 00",
                addressCountry: "CZ",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
