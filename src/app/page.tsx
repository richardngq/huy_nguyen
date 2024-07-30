'use client'; // Đánh dấu là client-side

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { Work } from '@/components/Work';
import { ShowCases } from '@/components/ShowCases';
import { Backers } from '@/components/Backets';
import About from '@/components/About';
import { Loading } from '@/components/common/Loading';
import SplineWrapper from '@/components/SplineWrapper';

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
              <About />
              <div id="spline" className="max-h-full lg:max-h-max lg:h-svh w-svw absolute top-auto lg:top-0">
                <SplineWrapper scene='https://prod.spline.design/AJx1xBJwBzUdNuPV/scene.splinecode' />
              </div>
            </div>
            <ShowCases />
            <div className='relative overflow-hidden'>
              <Work />
              {/* <div id="spline3" className="absolute bottom-0 right-0 w-52 lg:w-[400px] aspect-square translate-x-1/4 fade">
                <SplineWrapper scene='https://prod.spline.design/ffzbJDOGnD-6Kiha/scene.splinecode' />
              </div> */}
            </div>
            <Backers />
          </div >
          : <Loading />
      }
    </>
  );
}
