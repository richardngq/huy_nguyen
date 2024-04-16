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
import ImageIso from '@/assets/image/image-iso--03.png'

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
    <section className="relative flex flex-col gap-10 mt-20 z-10 py-10 lg:py-20 bg-[linear-gradient(360deg,rgba(0,0,0,1)_0%,rgba(81,91,135,1)_50%,rgba(81,91,135,.75)_100%)] overflow-hidden" data-aos="fade">
      <div className="w-full h-full absolute inset-0 mix-blend-darken inline-flex items-center gap-0">
        <Image src={ImageIso} alt="" className="w-full h-full object-contain" />
        <Image src={ImageIso} alt="" className="w-full h-full object-contain" />
        <Image src={ImageIso} alt="" className="w-full h-full object-contain" />
        <Image src={ImageIso} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="inline-flex justify-center items-center gap-4 text-white font-semibold text-4xl uppercase relative">
        More Impact Works
      </div>
      <Marquee className="py-3">
        {listImage.map((item, i) => (
          <div key={i} className="w-fit h-14 mx-4 hover:scale-105 marque-item">
            <Image src={item.src} alt="" className={`!relative block !w-fit h-full object-contain`} fill />
          </div>
        ))}
      </Marquee>
    </section>
  )
}