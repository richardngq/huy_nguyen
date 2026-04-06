'use client';
import { motion } from 'framer-motion';
import RippleGrid from '@/components/ui/RippleGrid';
import { Work } from '@/components/Work';
import { ShowCases } from '@/components/ShowCases';
import About from '@/components/About';
import LightRays from '@/components/ui/LightRays';


export default function Home() {

  return (
    <div className="md:min-h-svh">
      <div className="h-svh lg:h-svh relative w-full bg-black flex flex-col items-center justify-center rounded-lg lg:py-0">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.4, ease: "linear" }} className='absolute inset-0 transition-all overflow-hidden'>
          {/* <RippleGrid
            enableRainbow={false}
            gridColor="#2970ff"
            rippleIntensity={0.05}
            gridSize={10}
            gridThickness={15}
            mouseInteraction={true}
            mouseInteractionRadius={1.2}
            opacity={0.8}
          /> */}
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <LightRays
              raysOrigin="top-center"
              raysColor="#ededed"
              raysSpeed={1.5}
              lightSpread={0.5}
              rayLength={3}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0}
              distortion={0}
              className="custom-rays"
              pulsating={false}
              fadeDistance={1}
              saturation={1}
            />
          </div>

        </motion.div>
        <About />
      </div>
      <ShowCases />
      <div className='relative overflow-hidden'>
        <Work />
      </div>
    </div>
  );
}
