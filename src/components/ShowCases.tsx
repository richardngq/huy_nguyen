import { FC } from "react";
import Image from "next/image";
import ImageGridGS from '@/assets/image/image-thumbnail--gs.png';
import ImageGridIPFS from '@/assets/image/image-thumbnail--ipfs.png';
import ImageGridSM from '@/assets/image/image-thumbnail--sm.png';
import ImageGridCRAB from '@/assets/image/image-thumbnail--crab.png';
import { Icon } from "@iconify/react/dist/iconify.js";
import { WobbleCard } from "./ui/wobble-card";
import Link from "next/link";

interface IShowCases {
  classNames?: string
}

export const ShowCases: FC<IShowCases> = ({ classNames = '' }) => {
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
    <div className={`container mx-auto relative z-20 pb-10 lg:pb-20 mt-0 ${classNames}`}>
      <div
        className="font-semibold text-[28px] uppercase rounded-3xl card-box-anim"
      >
        <div
          className="h-full w-full"
          data-aos="fade">
          Explore Now
        </div>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-10 mt-10">
        {
          dataGrid.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-out"
              data-aos-delay={200 + 200 * index}
            >
              <WobbleCard
                containerClassName={`relative card group ${item.key}`}
              >
                <div className="w-full h-full">
                  <Image src={item.image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-0 left-0 text-white flex flex-col justify-between p-4 z-20 mt-0 ml-0">
                  <div className="font-bold text-2xl">{item.title}</div>
                  <div className="text-base mt-1.5">{item.description}</div>
                </div>
                <div className="w-10 h-10 bg-[rgba(0,0,0,0.25)] text-white backdrop-blur-sm absolute right-2 top-2 lg:right-4 lg:top-4 flex flex-col justify-center items-center rounded-xl z-20 group-hover:scale-125">
                  <Icon icon={'mingcute:arrow-right-fill'} className="text-xl -rotate-45" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 inline-flex flex-wrap gap-2 z-20">
                  {
                    item?.tags.map((o, i) =>
                      <div
                        key={i}
                        className="bg-[rgba(0,0,0,0.5)] relative text-white backdrop-blur-sm py-1 px-3 rounded-xl text-sm whitespace-nowrap"
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