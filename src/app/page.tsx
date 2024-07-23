"use client"
import { Work } from "@/components/Work";
import { ShowCases } from "@/components/ShowCases";
import { useEffect, useRef, useState } from "react";
import { Backers } from "@/components/Backets";
import About from "@/components/About";
import { Loading } from "@/components/common/Loading";
import Spline from '@splinetool/react-spline';


export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 600);
  },);

  return (
    <>
      {
        !loading ?
          <div className="md:min-h-svh">
            <div className="h-auto lg:h-svh relative w-full bg-black flex flex-col items-center justify-center rounded-lg">
              <About />
              <div id="spline" className="h-svh w-svw absolute top-0 -translate-y-1/4">
                <Spline scene="https://prod.spline.design/AJx1xBJwBzUdNuPV/scene.splinecode" />
              </div>
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
