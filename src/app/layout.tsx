import type { Metadata } from "next";
import { Source_Sans_3 as TheFont } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
import { AOSInit } from "@/utils/AnimateOnScroll";

import "./globals.css";
import "@/assets/style/App.scss";
import Transition from "@/utils/Transition";
import { Navbar } from "@/components/common/NavBar";
import { Footer } from "@/components/common/Footer";

const font = TheFont({ subsets: ["latin"], weight: ["300", "400", "600"] });

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
    <html lang="en" suppressHydrationWarning={true} className="dark overflow-x-hidden">
      <body className={`dark:bg-black dark:text-white ${font.className}`}
        suppressHydrationWarning={true}
      >
        <main className="flex flex-col h-screen">

          <Transition>
            <Navbar />
            {/* <div className="flex-auto"> */}
            {children}
            {/* </div> */}
            <Footer />
          </Transition>

        </main>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QH12M3TSS8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QH12M3TSS8');
          `}
        </Script>
        <SpeedInsights />
      </body>
      <AOSInit />
      <Analytics />
    </html>
  );
}
