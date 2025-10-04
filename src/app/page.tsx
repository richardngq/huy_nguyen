'use client';
import { useEffect, useState } from 'react';
import { Work } from '@/components/Work';
import { ShowCases } from '@/components/ShowCases';
import { Backers } from '@/components/Backets';
import About from '@/components/About';
import { Loading } from '@/components/common/Loading';
import SplineWrapper from '@/components/SplineWrapper';
import PlayVideo from '@/utils/Video';
import LightRays from '@/components/ui/LightRays';
import DarkVeil from '@/components/ui/DarkVeil';
import Prism from '@/components/ui/Prism';
import { motion } from 'framer-motion';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []);

  return (
    <>
      {
        !loading ?
          <div className="md:min-h-svh">
            <div className="h-svh lg:h-svh relative w-full bg-black flex flex-col items-center justify-center rounded-lg lg:py-0">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "linear" }} className='absolute inset-0 transition-all overflow-hidden'>
                {/* <DarkVeil
                  hueShift={219}
                /> */}
                <Prism
                  animationType="rotate"
                  timeScale={0.5}
                  height={3.5}
                  baseWidth={5.5}
                  scale={3.6}
                  hueShift={-0.34}
                  colorFrequency={0.8}
                  noise={0.5}
                  glow={1}
                />

                <div className="">
                  <div className='absolute h-1/4 bottom-0 inset-x-0 bg-gradient-to-t from-black to-transparent backdrop-blur-sm' />
                </div>
              </motion.div>
              <About />
            </div>
            <ShowCases />
            <div className='relative overflow-hidden'>
              <Work />
            </div>
            <Backers />
          </div >
          : <Loading />
      }
    </>
  );
}
