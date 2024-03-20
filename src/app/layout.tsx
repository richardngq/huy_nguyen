import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { Navbar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { AOSInit } from "@/components/AnimateOnScroll";
import "./globals.css";
import "@/assets/style/App.scss";

const font = Work_Sans({ subsets: ["latin"], weight: ["300", "400", "600"] });

export const metadata: Metadata = {
  title: "Huy Nguyen - Product Designer",
  description: "Portfolio created by Huy Nguyen - Product Designer",
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
        <div className="text-white flex flex-col h-screen">
          <Navbar />

          <div className="container mx-auto flex-auto">
            {children}
          </div>

          <Footer />
        </div>
      </body>
      <AOSInit />
      <Analytics />
    </html>
  );
}
