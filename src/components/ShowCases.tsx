import { FC } from "react";
import Image from "next/image";
import ImageGridGS from '@/assets/image/image-thumbnail--gs.png';
import ImageGridIPFS from '@/assets/image/image-thumbnail--ipfs.png';
import ImageGridSM from '@/assets/image/image-thumbnail--sm.png';
import ImageGridCRAB from '@/assets/image/image-thumbnail--crab.png';
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { motion } from "framer-motion";

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
          data-aos="fade"
        >
          Achievement & Impact
        </div>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-10 mt-10">
        {
          dataGrid.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 1.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ ease: "linear", delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`relative card group bg-[linear-gradient(180deg,#161515_0%,#0e0e0e_100%)] overflow-hidden rounded-2xl ring-1 ring-[rgba(255,255,255,.15)] group ${o.key}`}>

              <div className="img w-full h-full relative group-hover:transform group-hover:scale-150 group-hover:-translate-y-[10%] group-hover:-translate-x-[10%] transition-all">
                <Image src={o.image} alt='' className="w-full h-full object-cover" />
              </div>

              <div className="absolute top-0 left-0 text-white flex flex-col justify-between p-4 z-20 mt-0 ml-0 group-hover:-translate-y-[200%]">
                <div className="font-bold text-2xl">{o.title}</div>
                <div className="text-base mt-1.5">{o.description}</div>
              </div>

              <div className="w-8 h-8 p-0.5 bg-[rgba(0,0,0,0.25)] text-white backdrop-blur-sm absolute right-2 top-2 lg:right-4 lg:top-4 flex flex-col justify-center items-center rounded-full z-20 ring-1 ring-[rgba(255,255,255,.25)] group-hover:ring-white -translate-y-[200%] group-hover:translate-y-0 transition-all">
                <Icon icon={'mingcute:arrow-right-fill'} className="-rotate-45" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 inline-flex flex-wrap gap-2 z-20 group-hover:translate-y-[200%]">
                {
                  o?.tags.map((o, i) =>
                    <div
                      key={i}
                      className="bg-[rgba(0,0,0,0.5)] relative text-white backdrop-blur-sm py-1 px-3 rounded-xl text-sm whitespace-nowrap ring-1 ring-[rgba(255,255,255,.15)] group-hover:ring-[rgba(255,255,255,.5)]"
                    >
                      <span className="opacity-75">{o}</span>
                    </div>
                  )
                }
              </div>
              <div className="bg" />
              <Link href={o.url} className="absolute inset-0 z-20" />
            </motion.div>
          ))
        }
      </div>

    </div>
  )
}