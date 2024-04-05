import { FC, useState } from "react";
import Image from "next/image"
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image1 from '@/assets/img/logo-shiseido.png';
import Image2 from '@/assets/img/logo-canon.png';
import Image3 from '@/assets/img/logo-F2NFT.png';
import Image4 from '@/assets/img/img-logo-L7.png';
import Image5 from '@/assets/img/logo-mooncat.png';

import App1 from '@/assets/app/fxce.webp';
import App2 from '@/assets/app/xfun.webp';
import App3 from '@/assets/app/f2nft.webp';

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
    {
      href: 'https://www.behance.net/gallery/195569283/Mooncat-NFT-GameFi',
      title: `Mooncat`,
      image: Image5,
      description: `MoonCats is a non-fungible token (NFT) collection of 25,440 generative pixel art-style cats. It is considered to be one of the earliest NFT projects`,
    },
  ];

  const dataApps = [
    {
      image: App1,
      urlApp: `https://apps.apple.com/vn/app/fxce/id1602621908`,
      urlPlay: `https://play.google.com/store/apps/details?id=com.fxce.app`,
      title: `FXCE`
    },
    {
      image: App2,
      urlApp: `https://apps.apple.com/by/app/xfun-wallet/id1612225910`,
      urlPlay: `https://play.google.com/store/apps/details?id=com.xfun.wallet&hl=en_US`,
      title: `XFUN`
    },
    {
      image: App3,
      urlApp: `https://apps.apple.com/us/app/ftribe-fighters/id1603199423`,
      urlPlay: `https://play.google.com/store/apps/details?id=com.aftribefighters.games`,
      title: `F2NFT`
    }
  ]

  const RenderItem = ({ index, href, title, image, description, classNames }: { index: any, href: any, title?: string, image: any, description?: string, classNames?: string }) => {
    return (
      <Link href={href} target="_blank" className="h-full" data-aos="slide-up" data-aos-delay={500 + (200 * index)}>
        <Tilt className="group bg-[rgba(255,255,255,0.5)] h-full rounded-2xl border-4 border-white hover:border-slate-200 overflow-hidden backdrop-blur-[2px] shadow-[0px_8px_16px_rgba(0,0,0,0.05)]">
          <div className={`relative flex w-full max-w-full h-[240px] md:h-[240px] lg:h-full lg:min-h-[240px] flex-col items-start gap-6 borderoverflow-hidden transition-all ${classNames}`}>
            <div className="relative z-20 p-6">

              <Image src={image} alt="" className="w-auto h-10 object-contain" />

              <div className="text-sm font-normal opacity-50 mt-2">
                {description}
              </div>
            </div>

            <p className="absolute left-0 right-0 bottom-0 inline-flex items-center p-4 z-10 group-hover:scale-105 transition-all">
              More at Behance&nbsp;<Icon icon={`ep:right`} />
            </p>
          </div>
        </Tilt>
      </Link>
    )
  }

  return (
    <>
      <div className={`relative z-20 mt-20 ${classNames}`} data-aos="fade-up" data-aos-delay={500}>
        <div className="font-semibold opacity-75">MY SHOWCASES</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 md:gap-6 mt-6">
          {
            dataWorks.map((item, index) => (
              <RenderItem key={index} index={index} href={item.href} image={item.image} title={item.title} description={item.description} classNames={``} />
            )
            )
          }
        </div>
      </div>
      <div className={`relative z-20 mt-20 ${classNames}`} data-aos="fade-up" data-aos-delay={500}>
        <div className="font-semibold opacity-75">LAUNCHING APPS</div>
        <div className="flex flex-row items-center gap-4 md:gap-6 mt-6">
          {
            dataApps.map((item, index) => (
              <Tilt key={index} className="w-28 h-28 rounded-xl overflow-hidden border border-gray-400 bg-[rgba(255,255,255,0.75)] backdrop-blur-sm hover:scale-125">
                <Link href={item.urlPlay} target="_blank">
                  <Image src={item.image} alt={item.title} />
                </Link>
              </Tilt>
            )
            )
          }
        </div>
      </div>
    </>
  )
}