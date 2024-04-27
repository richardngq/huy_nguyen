import { FC, useEffect, useRef } from "react";
import Image from "next/image";
import ImageGridGS from '@/assets/image/image-thumbnail--gs.png';
import ImageGridIPFS from '@/assets/image/image-thumbnail--ipfs.png';
import ImageGridSM from '@/assets/image/image-thumbnail--sm.png';
import ImageGridCRAB from '@/assets/image/image-thumbnail--crab.png';

import ImageIso from '@/assets/image/image-iso--01.png';

import { useFollowPointer } from "@/resources/use-follow-poiner";
import { Icon } from "@iconify/react/dist/iconify.js";

interface IShowCases {
  classNames?: string
}

export const ShowCases: FC<IShowCases> = ({ classNames = '' }) => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  const dataGrid = [
    {
      key: `IPFS`,
      image: ImageGridIPFS,
      title: `IPFS - FXCE`,
      description: `Main responsibility and designing to enhance UI/UX Product`,
      url: '/ipfs1',
      href: 'https://www.fxce.com/',
    },
    {
      key: `GS`,
      image: ImageGridGS,
      title: `Gesteron`,
      description: `Re-Design UX for payment system`,
      url: '/gs',
      href: 'https://thegestreon.com/',
    },
    {
      key: `SM`,
      image: ImageGridSM,
      title: `Sky Mavis`,
      description: `Design Mobile App for sending multiple assets`,
      url: '/sm',
      href: 'https://scatter.roninchain.com/',
    },
    {
      key: `CRAB`,
      image: ImageGridCRAB,
      title: `Crabada`,
      description: `Design feature miragation on Web3 to Application Game`,
      url: '/crab',
      href: 'https://crabada.com/',
    }
  ]

  const handleClick = (url?: any) => {
    window.location.replace(`./${url}`)
  }


  return (
    <div className={`container mx-auto relative z-20 mt-20 ${classNames}`}>
      <div
        className="font-semibold text-[28px] uppercase rounded-3xl text-[#515b87] card-box-anim"
      >
        <div
          className="h-full w-full"
          data-aos="fade-up">
          <span className="opacity-50">My</span> Cases Studies
        </div>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 mt-6">
        {
          dataGrid.map((item, index) => (
            <div
              key={index}
              ref={ref}
              className={`card group ${item.key} ${index % 2 !== 0 ? `` : ``} rounded-[24px]`}
              onClick={() => handleClick(`${item.url}`)}
              data-aos="fade"
              data-aos-delay={400 + 400 * index}
            >
              <div className="relative hover:shadow-[0px_8px_12px_rgba(0,0,0,0.5)] rounded-3xl overflow-hidden" style={{ transition: `box-shadow 0.2s ease-in-out` }}>
                <div className="cursor-pointer relative max-w-full w-full flex flex-col justify-end items-end overflow-hidden aspect-[4/3]">
                  <div className="w-full h-5/6 group-hover:scale-105">
                    <Image src={item.image} alt="" className="relative w-full h-full object-cover z-10" />
                  </div>
                </div>
                <div className="absolute top-0 left-0 text-white flex flex-col justify-between p-4 z-20 mt-0 lg:mt-4 ml-2">
                  <div className="font-bold text-xl">{item.title}</div>
                  <div className="text-base opacity-75 mt-2">{item.description}</div>
                </div>
                <div className="w-10 h-10 bg-white text-black absolute right-2 top-2 lg:right-6 lg:top-6 flex flex-col justify-center items-center rounded-full">
                  <Icon icon={'mingcute:arrow-right-fill'} className="text-xl -rotate-45" />
                </div>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}