import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "District Dermatology | McLean & Vienna, VA",
    template: "%s | District Dermatology",
  },
  description:
    "Premier medical, surgical, and cosmetic dermatology in McLean and Vienna, VA. Board-certified physicians, Mohs surgery, and advanced skin rejuvenation.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <Header />
        <main id="main" className="site-main">
          {children}
        </main>
        <CtaBand />
        <Footer />
      </body>
    </html>
  );
}
