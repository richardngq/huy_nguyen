import { FC } from "react";
import Image from "next/image";
import Marquee from 'react-fast-marquee';
import Image01 from '@/assets/img/img-slide-01.png'
import Image02 from '@/assets/img/img-slide-02.png'
import Image03 from '@/assets/img/img-slide-03.png'
import Image04 from '@/assets/img/img-slide-04.png'
import Image05 from '@/assets/img/img-slide-05.png'
import Image06 from '@/assets/img/img-slide-06.png'
import Image07 from '@/assets/img/img-slide-07.png'
import Image08 from '@/assets/img/img-slide-08.png'
import Image09 from '@/assets/img/img-slide-09.png'
import Image10 from '@/assets/img/logo-mooncat.png'

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

  const Card = ({ index, src, classNames }: { index?: any, src: string, classNames?: any }) => {
    return (
      <div className="w-fit h-14 mx-4" data-aos='fade-left' data-aos-delay={100 + 10 * index}>
        <Image src={src} alt="" className={`!relative block !w-fit h-full object-contain ${classNames}`} fill />
      </div>
    )
  }

  return (
    <section className="relative flex flex-col gap-6 mt-20 z-10">
      <div className="container mx-auto">
        <p className="text-base text-center" data-aos='fade-up'>Special thanks for trusting and growing up together</p>
      </div>
      <Marquee className="bg-[rgba(0,0,0,0.75)] py-3 backdrop-blur-[2px]">
        {listImage.map((item, i) => (
          <Card
            key={i}
            src={item?.src}
            index={i}
          />
        ))}
        {listImage.map((item, i) => (
          <Card
            key={i}
            src={item?.src}
            index={i}
          />
        ))}
      </Marquee>
    </section>
  )
}