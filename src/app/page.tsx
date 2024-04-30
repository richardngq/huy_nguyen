"use client"
import { Work } from "@/components/Work";
import { ShowCases } from "@/components/ShowCases";
import { useEffect, useRef, useState } from "react";
import { Backers } from "@/components/Backets";
import { Boxes } from "@/components/ui/background-boxes";
import { motion } from "framer-motion";
import About from "@/components/About";
import { Loading } from "@/components/common/Loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setLoading(false)
    }, 600);
  });

  return (
    <>
      {
        !loading ?
          <div className="md:min-h-svh">
            <div className="h-auto lg:h-svh relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
              <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
              <div className="lg:absolute z-20 flex flex-col justify-center items-center">
                <About />
              </div>
              <Boxes />
            </div>
            <ShowCases />
            <Work />
            <Backers />
          </div>
          : <Loading />
      }
    </>
  );
}
