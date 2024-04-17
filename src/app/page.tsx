"use client"
import About from "@/components/About";
import { Work } from "@/components/Work";
import Image from "next/image";
import { GlowFloating } from "@/components/GlowFloating";
import { ShowCases } from "@/components/ShowCases";
import { motion, useScroll } from 'framer-motion'
import { Backers } from "@/components/Backets";
import { Suspense, useEffect, useState } from "react";
import { Loading } from "@/components/Loading";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setLoading(false)
    }, 1000);
  });

  return (
    <div>
      <Suspense fallback={<Loading />}>
        {!loading ?
          <>
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
          </>
          : <Loading />}
      </Suspense>
    </div>
  );
}
