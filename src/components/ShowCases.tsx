import { FC, useEffect, useRef } from "react";
import Image from "next/image";
import ImageGridGS from '@/assets/image/image-thumbnail--gs.png';
import ImageGridIPFS from '@/assets/image/image-thumbnail--ipfs.png';
import ImageGridSM from '@/assets/image/image-thumbnail--sm.png';
import ImageGridCRAB from '@/assets/image/image-thumbnail--crab.png';

import ImageIso from '@/assets/image/image-iso--01.png';

import { useFollowPointer } from "@/resources/use-follow-poiner";
import { Icon } from "@iconify/react/dist/iconify.js";
import { WobbleCard } from "./ui/wobble-card";
import Link from "next/link";

interface IShowCases {
  classNames?: string
}

export const ShowCases: FC<IShowCases> = ({ classNames = '' }) => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  const dataGrid = [
    {
      key: `SM`,
      image: ImageGridSM,
      title: `Sky Mavis`,
      description: `Design Mobile App for sending multiple assets`,
      url: '/sm',
      href: 'https://scatter.roninchain.com/',
      tags: [
        'Mobile App', 'Crypto', 'Blockchain', 'Fintech'
      ]
    },
    {
      key: `CRAB`,
      image: ImageGridCRAB,
      title: `Crabada`,
      description: `Design feature miragation on Web3 to Application Game`,
      url: '/crab',
      href: 'https://crabada.com/',
      tags: [
        'Web3', 'Crypto', 'GameFi'
      ]
    },
    {
      key: `IPFS`,
      image: ImageGridIPFS,
      title: `IPFS - FXCE`,
      description: `Main responsibility and designing to enhance UI/UX Product`,
      url: '/ipfs1',
      href: 'https://www.fxce.com/',
      tags: [
        'Fintech', 'Blockchain'
      ]
    },
    {
      key: `GS`,
      image: ImageGridGS,
      title: `Gesteron`,
      description: `Re-Design UX for payment system`,
      url: '/gs',
      href: 'https://thegestreon.com/',
      tags: [
        'E-Commerce'
      ]
    },
  ]

  const handleClick = (url?: any) => {
    window.location.replace(`./${url}`)
  }


  return (
    <div className={`container mx-auto relative z-20 mt-20 ${classNames}`}>
      <div
        className="font-semibold text-[28px] uppercase rounded-3xl card-box-anim"
      >
        <div
          className="h-full w-full"
          data-aos="fade">
          <span className="opacity-50">My</span> Cases Studies
        </div>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 mt-6">
        {
          dataGrid.map((item, index) => (
            <div
              key={index}
              data-aos="fade"
              data-aos-delay={200 + 200 * index}
            >
              <WobbleCard
                containerClassName={`relative card group ${item.key}`}
              >
                <div className="w-full h-full pt-8">
                  <Image src={item.image} alt="" className="relative w-full h-full object-cover z-10" />
                </div>
                <div className="absolute top-0 left-0 text-white flex flex-col justify-between p-4 z-20 mt-0 lg:mt-4 ml-2">
                  <div className="font-bold text-xl">{item.title}</div>
                  <div className="text-base opacity-75 mt-2">{item.description}</div>
                </div>
                <div className="w-10 h-10 bg-white text-black absolute right-2 top-2 lg:right-6 lg:top-6 flex flex-col justify-center items-center rounded-full">
                  <Icon icon={'mingcute:arrow-right-fill'} className="text-xl -rotate-45" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 inline-flex gap-3 z-10">
                  {
                    item?.tags.map((o, i) =>
                      <div
                        key={i}
                        className="bg-[rgba(0,0,0,0.5)] relative text-white backdrop-blur-sm py-1 px-3 rounded-xl text-sm"
                        style={{ boxShadow: `inset -1px -1px 0px rgba(255,255,255,0.25)` }}
                      >
                        <span className="opacity-75">{o}</span>
                      </div>
                    )
                  }
                </div>
                <Link href={item.url} className="absolute inset-0 z-20" />
              </WobbleCard>
            </div>
          ))
        }
      </div>

    </div>
  )
}