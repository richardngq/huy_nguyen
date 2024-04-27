import { FC } from "react";
import Image from "next/image";
import Marquee from 'react-fast-marquee';
import Image01 from '@/assets/Backers/light/img-logo-01.png'
import Image02 from '@/assets/Backers/light/img-logo-02.png'
import Image03 from '@/assets/Backers/light/img-logo-03.png'
import Image04 from '@/assets/Backers/light/img-logo-04.png'
import Image05 from '@/assets/Backers/light/img-logo-05.png'
import Image06 from '@/assets/Backers/light/img-logo-06.png'
import Image07 from '@/assets/Backers/light/img-logo-07.png'
import Image08 from '@/assets/Backers/light/img-logo-08.png'
import Image09 from '@/assets/Backers/light/img-logo-09.png'
import Image10 from '@/assets/Backers/light/img-logo-10.png'

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
    <section className="relative flex flex-col gap-10 py-2 z-10 overflow-hidden" data-aos="fade">
      <Marquee className="py-1">
        {listImage.map((item, i) => (
          <div key={i} className="w-fit h-14 mx-4 hover:scale-105 marque-item grayscale opacity-75">
            <Image src={item.src} alt="" className={`!relative block !w-fit h-full object-contain`} fill />
          </div>
        ))}
      </Marquee>
    </section>
  )
}