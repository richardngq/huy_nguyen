"use client"
import About from "@/components/About";
import { Work } from "@/components/Work";
import Pattern from '@/assets/img/pattern.png';
import Image from "next/image";
import { GlowFloating } from "@/components/GlowFloating";
import { ShowCases } from "@/components/ShowCases";
import { motion, useScroll } from 'framer-motion'

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="relative p-3 lg:p-6 overflow-hidden h-full flex flex-col justify-center">
        <GlowFloating />
        <Image src={Pattern} alt='' className="absolute right-0 top-0" data-aos="fade-in" />
        <About />
        <ShowCases />
        {/* <Work /> */}
      </div>
    </>
  );
}
