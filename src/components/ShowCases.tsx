import { FC, useRef } from "react";
import Image from "next/image";
import ImageGridSM from '@/assets/img/img-grid-sm.png';
import ImageGridGS from '@/assets/image/image-mockup-gs.png';
import ImageGridIPFS from '@/assets/image/image-mockup-fxce.png';

import ImageGridLogoSM from '@/assets/image/img-logo-SM.png';
import ImageGridLogoGS from '@/assets/image/img-logo-GS.png';
import ImageGridLogoIPFS from '@/assets/image/img-logo-IPFS.png';
import Link from "next/link";
import { motion } from 'framer-motion'
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
      logo: ImageGridLogoIPFS,
      image: ImageGridIPFS,
      title: `IPFS - FXCE`,
      description: `Main responsibility and designing to enhance UI/UX Product`,
      url: '/ipfs1',
      href: 'https://www.fxce.com/',
      tags: ['Fintech', 'CEX'],
    },
    {
      logo: ImageGridLogoGS,
      image: ImageGridGS,
      title: `Gesteron`,
      description: `Re-Design UX for payment system`,
      url: '/gs',
      href: 'https://thegestreon.com/',
      tags: ['Website', 'E-commerce', 'SaaS'],
    },
    {
      logo: ImageGridLogoSM,
      image: ImageGridSM,
      title: `Sky Mavis`,
      description: `Design UI/UX for sending multiple assets`,
      disclaimer: `The product has been required from the past, all analysis and design will not be consistent with the production.`,
      url: '/sm',
      href: 'https://scatter.roninchain.com/',
      tags: ['Mobile app', 'Web3', 'Fintech', 'Crypto'],
    },
  ]

  const handleClick = (url?: any) => {
    window.location.replace(`./${url}`)
  }

  return (
    <div className={`relative z-20 mt-20 ${classNames}`}>
      <div className="font-semibold opacity-75" data-aos="fade-up">MY RECENT WORK & CASE STUDIES</div>
      <div className="flex flex-col gap-20 mt-6">
        {
          dataGrid.map((item, index) => (
            <div key={index} className={`card relative flex flex-col-reverse ${index % 2 !== 0 ? `lg:flex-row` : `lg:flex-row`} gap-4 lg:gap-8`} data-aos="fade-up">
              <div onClick={() => handleClick(`${item.url}`)} className="cursor-pointer relative max-w-full lg:max-w-[50%] w-[375px] h-[320px] shadow-[0px_8px_16px_rgba(0,0,0,0.05)] rounded-3xl overflow-hidden border-4 border-white flex-1">
                <Image src={item.image} alt="" className="relative w-full h-full object-cover z-10" />
                <div className="absolute bottom-0 w-full flex flex-col-reverse sm:flex-row items-start md:items-center justify-start sm:justify-between gap-3 p-3 sm:p-4 z-30">
                  <motion.div
                    className="inline-flex items-center gap-3"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    {item?.tags?.map((i, j) => <div key={j} className="bg-[rgba(54,57,61,0.5)] backdrop-blur-sm text-white text-sm rounded-full py-0.5 px-3" >{i}</div>)}
                  </motion.div>
                </div>
              </div>
              <div className="flex-1 self-stretch flex flex-col justify-between">
                <div>
                  <Image src={item.logo} alt="" className="w-auto h-12 lg:h-16" />
                  <div className="hidden lg:block font-bold text-xl text-gray-950 mt-3">{item.title}</div>
                  <div className="text-base opacity-50 mt-3">{item.description}</div>
                  <div className="flex flex-row gap-3 mt-4 lg:mt-6">
                    <Link href={`${item.url}`} target="_blank" className="cursor-pointer bg-gray-800 text-white hover:opacity-50 py-1.5 px-4 rounded-full">
                      <span>View detail</span>
                    </Link>
                    <Link href={`${item.href}`} target="_blank" className="cursor-pointer inline-flex items-center gap-1 group bg-white text-gray-800 py-1.5 px-4 rounded-full border border-gray-800 hover:opacity-50">
                      <span>Visit on Website</span>
                      <Icon icon={`fluent:window-new-24-regular`} className="group-hover:scale-125" />
                    </Link>
                  </div>
                </div>
                {
                  item.disclaimer &&
                  <div className="text-sm italic opacity-45 mt-3">
                    <span className="font-semibold">Disclaimer:&nbsp;</span>
                    {item.disclaimer}
                  </div>
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}