import { FC } from "react";
import Image from "next/image"
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image1 from '@/assets/img/logo-shiseido.png';
import Image2 from '@/assets/img/logo-canon.png';
import Image3 from '@/assets/img/logo-F2NFT.png';
import Image4 from '@/assets/img/img-logo-L7.png';

interface IWork {
  classNames?: string
}

export const Work: FC<IWork> = ({ classNames = '' }) => {

  const dataWorks = [
    {
      href: 'https://www.behance.net/gallery/167050693/Canon-Gallery-S',
      title: `Canon`,
      image: Image2,
      description: `Gallery in Tennozu, Shinagawa. The movable walls allow for layouts matched to the exhibition. In addition to exhibiting the work of.`,
    },
    {
      href: 'https://www.behance.net/gallery/167051093/Shiseido',
      title: `Shiseido`,
      image: Image1,
      description: `Shiseido offers the highest quality products make-up Japan with 145 years of technology`,
    },
    {
      href: 'https://www.behance.net/gallery/167049811/Legend-of-the-7-Kingdoms-Landing-Page',
      title: `Legend Of 7 Kingdoms`,
      image: Image4,
      description: `An RPG GameFi about 7 Kingdoms with Blockchain and Crypto`,
    },
    {
      href: 'https://www.behance.net/gallery/167131231/F2NFT-Marketplace-v20',
      title: `F2FNT`,
      image: Image3,
      description: `The player can play solo, duos or a squad of 4 and fight on various planets GameFi.`,
    },
  ];

  const RenderItem = ({ index, href, title, image, description, classNames }: { index: any, href: any, title?: string, image: any, description?: string, classNames?: string }) => {
    return (
      <Link href={href} target="_blank" data-aos="slide-up" data-aos-delay={500 + (200 * index)}>
        <Tilt className="group bg-[rgba(255,255,255,0.5)] rounded-2xl border-4 border-white overflow-hidden backdrop-blur-[2px] shadow-[0px_8px_16px_rgba(0,0,0,0.05)]">
          <div className={`relative flex w-full max-w-full lg:w-80 h-[240px] md:h-[240px] lg:h-64 flex-col items-start gap-6 borderoverflow-hidden transition-all ${classNames}`}>
            <div className="relative z-20 p-3">

              <Image src={image} alt="" className="w-auto h-10 object-contain" />

              <div className="text-sm font-normal opacity-50 mt-2">
                {description}
              </div>
            </div>

            <p className="absolute left-0 right-0 bottom-0 inline-flex items-center p-4 z-10 transition-all">
              More at Behance&nbsp;<Icon icon={`ep:right`} />
            </p>
          </div>
        </Tilt>
      </Link>
    )
  }

  return (
    <div className={`relative z-20 mt-20 ${classNames}`} data-aos="fade-up" data-aos-delay={500}>
      <div className="font-semibold opacity-75">MY SHOWCASES</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-4 md:gap-6 mt-6">
        {
          dataWorks.map((item, index) => (
            <RenderItem key={index} index={index} href={item.href} image={item.image} title={item.title} description={item.description} classNames={``} />
          )
          )
        }
      </div>
    </div>
  )
}