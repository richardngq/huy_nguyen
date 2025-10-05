'use client';
import { useEffect, useState } from 'react';
import { Work } from '@/components/Work';
import { ShowCases } from '@/components/ShowCases';
import { Backers } from '@/components/Backets';
import About from '@/components/About';
import { Loading } from '@/components/common/Loading';
import { motion } from 'framer-motion';
import Orb from '@/components/ui/Orb';
import RippleGrid from '@/components/ui/RippleGrid';


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
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.4, ease: "linear" }} className='absolute inset-0 transition-all overflow-hidden'>
                {/* <Orb
                  hoverIntensity={0.05}
                  rotateOnHover={true}
                  hue={360}
                  forceHoverState={false}
                /> */}
                <RippleGrid
                  enableRainbow={false}
                  gridColor="#2970ff"
                  rippleIntensity={0.05}
                  gridSize={10}
                  gridThickness={15}
                  mouseInteraction={true}
                  mouseInteractionRadius={1.2}
                  opacity={0.8}
                />

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
