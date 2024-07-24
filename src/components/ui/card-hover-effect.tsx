import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PinContainer } from "./3d-pin";
import { Icon } from "@iconify/react/dist/iconify.js";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    link: string;
    image: any;
    online: boolean;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-4 lg:p-6 h-full w-full mx-0 lg:-mx-3"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          data-aos="zoom-out"
          data-aos-delay={200 + 200 * idx}
        >
          {/* <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence> */}
          <Card>
            <CardImage>
              <div>
                <Image src={item.image} alt='' fill className="!relative" />
              </div>
            </CardImage>
            <div className={`w-10 h-10 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm ${item?.online ? `text-green-400` : `text-blue-500`} absolute right-2 top-2 lg:right-2 lg:top-2 flex flex-col justify-center items-center rounded-xl`}>
              <Icon icon={`${item?.online ? `ph:globe-bold` : `fa6-brands:behance`}`} className="text-lg" />
            </div>
          </Card>
          <div className="absolute inset-0">
            <PinContainer title={item?.title} href={item?.link}>
              <div />
            </PinContainer>
          </div>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-30",
        className
      )}
    >
      <div className="relative z-50">
        <div className="">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("absolute top-0 left-0 right-0 text-zinc-100 font-bold tracking-wide bg-[rgba(0,0,0,0.25)] backdrop-blur-sm px-4 py-2 text-base", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
export const CardImage = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "w-full h-full object-contain",
        className
      )}
    >
      {children}
    </div>
  );
};

