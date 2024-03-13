"use client"
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface CarouselProps {
  children: React.ReactNode;
  slideDuration?: number;
  slideDelay?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  slideDuration = 1,
  slideDelay = 0.5,
}) => {
  const controls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    controls.start({ x: 0 });

    const intervalId = setInterval(() => {
      controls.start({ x: -100 * (carouselRef.current!.children.length - 1) });
    }, (slideDuration + slideDelay) * 1000);

    return () => clearInterval(intervalId);
  }, [controls, slideDuration, slideDelay]);

  return (
    <motion.div
      ref={carouselRef}
      style={{ display: 'flex', overflow: 'hidden' }}
      animate={controls}
      transition={{
        duration: slideDuration,
        repeat: Infinity,
        repeatType: 'loop',
        delay: slideDelay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Carousel;