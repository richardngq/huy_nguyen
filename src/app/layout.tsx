import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { Oswald } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Navbar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { AOSInit } from "@/components/AnimateOnScroll";
import "./globals.css";
import "@/assets/style/App.scss";
import Transition from "@/components/Transition";

const font = Oswald({ subsets: ["latin"], weight: ["300", "400", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL(`https://huy-nguyen.vercel.app/`),
  title: "Huy Nguyen - Product Designer",
  description: "Portfolio created by Huy Nguyen - Product Designer",
  icons: {
    icon: ["/favicon.ico?v=1"],
    apple: ["/apple-touch-icon.png?v=1"],
    shortcut: ["/apple-touch-icon.png"],
  },
  openGraph: {
    title: 'Huy Nguyen - Product Designer',
    description: 'Portfolio created by Huy Nguyen - Product Designer',
    images: '/opengraph-image.png'
  },
  twitter: {
    card: 'summary_large_image',
    site: `${process.env.NEXT_PUBLIC_VITE_METADATA}`,
    title: 'Huy Nguyen - Product Designer',
    description: 'Portfolio created by Huy Nguyen - Product Designer',
    images: 'twitter-image.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={font.className}
        suppressHydrationWarning={true}
      >
        <div className="text-[#6B7280] flex flex-col h-screen">
          <Navbar />

          <Transition>
            {/* <div className="flex-auto"> */}
            {children}
            {/* </div> */}
          </Transition>

          <Footer />
        </div>
        <SpeedInsights />
      </body>
      <AOSInit />
      <Analytics />
    </html>
  );
}
