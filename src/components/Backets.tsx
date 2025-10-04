import { FC } from "react";
import Image from "next/image";
import Marquee from 'react-fast-marquee';
import Image01 from '@/assets/backers/dark/img-logo-01.png'
import Image02 from '@/assets/backers/dark/img-logo-02.png'
import Image03 from '@/assets/backers/dark/img-logo-03.png'
import Image04 from '@/assets/backers/dark/img-logo-04.png'
import Image05 from '@/assets/backers/dark/img-logo-05.png'
import Image06 from '@/assets/backers/dark/img-logo-06.png'
import Image07 from '@/assets/backers/dark/img-logo-07.png'
import Image08 from '@/assets/backers/dark/img-logo-08.png'
import Image09 from '@/assets/backers/dark/img-logo-09.png'
import Image10 from '@/assets/backers/dark/img-logo-10.png'
import { motion } from "framer-motion";

export const Backers: FC = () => {
  const listImage = [
    Image01,
    Image02,
    Image03,
    Image04,
    Image05,
    Image06,
    Image07,
    Image08,
    Image09,
    Image10
  ]

  return (
    // <div className="relative mt-20" data-aos="fade" data-aos-delay={400}>
    <div className="relative mt-20 z-10">
      <div className="absolute bg-gradient-to-r from-black to-transparent w-40 h-full top-0 left-0 z-10" />
      <Marquee className="py-1">
        {listImage.map((item, i) => (
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "linear", duration: 2, delay: .1 + i * .05 }} viewport={{ once: true }} key={i} className="w-fit h-10 md:h-12 mx-4 hover:scale-105 marque-item">
            <Image src={item.src} alt='' className={`!relative block !w-fit h-full object-contain`} fill />
          </motion.div>
        ))}
      </Marquee>
      <div className="absolute bg-gradient-to-l from-black to-transparent w-40 h-full top-0 right-0 z-10" />
    </div>
  )
}