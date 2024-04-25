"use client"
import About from "@/components/About";
import { Work } from "@/components/Work";
import Image from "next/image";
import { GlowFloating } from "@/components/GlowFloating";
import { ShowCases } from "@/components/ShowCases";
import { motion, useScroll } from 'framer-motion'
import { Backers } from "@/components/Backets";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="mx-auto overflow-hidden h-full flex flex-col justify-center">
        {/* <GlowFloating /> */}
        <About />
        <ShowCases />
        <Work />
      </div>
      <Backers />
    </div>
  );
}
