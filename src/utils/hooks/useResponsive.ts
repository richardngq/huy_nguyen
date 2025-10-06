'use client';
import { useEffect, useState } from 'react';

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface ResponsiveState {
  isSm: boolean; // >= 640px
  isMd: boolean; // >= 768px
  isLg: boolean; // >= 1024px
  isXl: boolean; // >= 1280px
  is2Xl: boolean; // >= 1536px
  current: Breakpoint | 'xs';
}

export const useResponsive = (): ResponsiveState => {
  const [responsive, setResponsive] = useState<ResponsiveState>({
    isSm: false,
    isMd: false,
    isLg: false,
    isXl: false,
    is2Xl: false,
    current: 'xs',
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setResponsive({
        isSm: width >= 640,
        isMd: width >= 768,
        isLg: width >= 1024,
        isXl: width >= 1280,
        is2Xl: width >= 1536,
        current:
          width >= 1536
            ? '2xl'
            : width >= 1280
            ? 'xl'
            : width >= 1024
            ? 'lg'
            : width >= 768
            ? 'md'
            : width >= 640
            ? 'sm'
            : 'xs',
      });
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return responsive;
};

// Example usage:
// const { isMd, isLg, current } = useResponsive();
// if (isLg) console.log('Large screen');
// console.log(`Current breakpoint: ${current}`);
