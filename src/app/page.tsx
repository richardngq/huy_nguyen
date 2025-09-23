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
              <div className='absolute inset-0'>
                <DarkVeil
                  hueShift={219}
                />
              </div>
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
