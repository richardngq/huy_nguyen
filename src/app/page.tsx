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
            <div className="h-auto lg:h-svh relative w-full bg-black flex flex-col items-center justify-center rounded-lg py-20 lg:py-0">
              <About />
              <div id="spline" className="h-svh w-svw absolute top-0">
                <SplineWrapper />
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
