import { FC, useState } from "react";
import Image from "next/image"
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { Icon } from "@iconify/react/dist/iconify.js";
import App1 from '@/assets/app/fxce.webp';
import App2 from '@/assets/app/xfun.webp';
import App3 from '@/assets/app/f2nft.webp';

import { useKeenSlider } from 'keen-slider/react'
import "keen-slider/keen-slider.min.css"


interface IWork {
  classNames?: string
}

export const Work: FC<IWork> = ({ classNames = '' }) => {
  const [loaded, setLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
      loop: true,
      breakpoints: {
        "(min-width: 325px)": {
          slides: { perView: 1, spacing: 16 },
        },
        "(min-width: 1080px)": {
          slides: { perView: 3, spacing: 24 },
        },
      },
      slides: {
        perView: 3,
        spacing: 24,
      },
    },
    [
      // add plugins here
    ]
  )

  const dataWorks = [
    {
      href: `https://mooncat.metahaki.com/`,
      behance: 'https://www.behance.net/gallery/195569283/Mooncat-NFT-GameFi',
      title: `Mooncat`,
      image: `https://mir-s3-cdn-cf.behance.net/projects/808/ff9e9f195569283.Y3JvcCwxMDI0LDgwMCwwLDI.png`,
    },
    {
      behance: 'https://www.behance.net/gallery/195838445/Crabada-Game-Fi-Web3-Landing-Page',
      title: `Crabada`,
      image: `https://mir-s3-cdn-cf.behance.net/projects/808/4d6e91195838445.Y3JvcCwxMDI0LDgwMCwwLDI.png`,
    },
    {
      href: `https://personal.canon.jp/showroom/gallery`,
      behance: 'https://www.behance.net/gallery/167050693/Canon-Gallery-S',
      title: `Canon`,
      image: `https://mir-s3-cdn-cf.behance.net/projects/808/abd414167050693.Y3JvcCwxNTEyLDExODIsMCww.png`,
    },
    {
      href: `http://shiseido.co.jp/`,
      behance: 'https://www.behance.net/gallery/167051093/Shiseido',
      title: `Shiseido`,
      image: `https://mir-s3-cdn-cf.behance.net/projects/808/48da7f167051093.Y3JvcCwxMDEyLDc5MiwzODAsNzA.png`,
    },
    {
      behance: 'https://www.behance.net/gallery/167049811/Legend-of-the-7-Kingdoms-Landing-Page',
      title: `Legend Of 7 Kingdoms`,
      image: `https://mir-s3-cdn-cf.behance.net/projects/808/942c66167049811.Y3JvcCwxMDI0LDgwMCwwLDI.png`,
    },
    {
      href: `https://f2nft.games/`,
      behance: 'https://www.behance.net/gallery/167131231/F2NFT-Marketplace-v20',
      title: `F2FNT`,
      image: `https://mir-s3-cdn-cf.behance.net/projects/808/4c3ca0167131231.Y3JvcCwxMDI0LDgwMCwwLDI.png`,
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

  const handleClick = (url?: any) => {
    window.open(`./${url}`)
  }

  return (
    <div className="container w-full mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
      <div className={`col-span-1 md:col-span-2`} data-aos="slide-right">
        <div className="w-full text-[#515b87] flex flex-row justify-between items-end" data-aos="slide-up">
          <div className="inline-flex justify-end items-end gap-1.5 font-semibold text-4xl uppercase">
            Go<span className="text-bg px-2">Live</span>
          </div>
          <div>
            {loaded && instanceRef.current && (
              <div className="inline-flex justify-between gap-4">
                <div
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  className={`
                  text-[#515b87] h-fit cursor-pointer rounded-full flex flex-row justify-center items-center
                  ${currentSlide === 0 && `opacity-50`}
                  `}
                >
                  <Icon
                    icon={`ep:arrow-left-bold`}
                  />
                  Prev
                </div>

                <div
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  className={`
                  text-[#515b87] h-fit cursor-pointer rounded-full flex flex-row justify-center items-center
                  ${currentSlide ===
                    instanceRef.current.track.details.slides.length - 1 && `opacity-50`}
                    `}
                >
                  Next
                  <Icon
                    icon={`ep:arrow-right-bold`}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="relative flex flex-col justify-center navigation-wrapper mt-6" data-aos="slide-up">
          <div ref={sliderRef} className="keen-slider !overflow-y-auto">
            {
              dataWorks.map((item, index) => {
                return <div key={index} className="keen-slider__slide group" style={{ transition: `box-shadow 0.2s ease-in-out` }}>
                  <div className="h-full rounded-2xl group !overflow-y-auto hover:shadow-[0px_8px_12px_rgba(0,0,0,0.5)]">
                    <div className="group bg-[rgba(255,255,255,0.5)] bg-slate-50 h-full rounded-2xl overflow-hidden">
                      <div className={`relative flex w-full h-60 md:h-full aspect-square flex-col items-start gap-6 overflow-hidden transition-all ${classNames}`}>
                        <Image src={item.image} alt="" className="w-full object-cover group-hover:scale-110" fill />
                      </div>
                    </div>
                    <div className="bg-white text-black group-hover:text-blue-500 absolute right-0 top-0 flex flex-col justify-center items-center gap- box-right">
                      <Link href={item.behance} className="w-12 h-12 flex flex-col justify-center items-center group-hover:scale-110"><Icon icon={'fa6-brands:behance'} className="text-lg" /></Link>
                      {item.href &&
                        <Link href={item.href} className="w-12 h-12 flex flex-col justify-center items-center group-hover:scale-110"><Icon icon={'mingcute:arrow-right-fill'} className="text-lg -rotate-45" /></Link>}
                    </div>
                    <div className="inline-flex items-center absolute top-4 left-4 gap-2 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm py-1 px-2 rounded-md">
                      <div className={`w-2 h-2 rounded-full ${item.href ? `bg-green-400` : `bg-red-500`}`} />
                      <div className={`text-white text-xs hidden ${item.href ? `!flex` : ''}`} dangerouslySetInnerHTML={{ __html: `Online` }} />
                      <div className={`text-white text-xs hidden ${item.href ? `` : '!flex'}`} dangerouslySetInnerHTML={{ __html: `Offline` }} />
                    </div>
                  </div>
                  <Link href={item.behance} target="_blank" className="absolute inset-0" />
                </div>
              }
              )
            }
          </div>
        </div>
      </div>

      <div className={``} data-aos="slide-left">
        <div className="inline-flex justify-center items-center gap-1.5 text-[#515b87] font-semibold text-4xl uppercase">
          Launching<span className="text-bg px-2">Apps</span>
        </div>
        <div className="grid grid-cols-3 lg:flex lg:flex-row flex-wrap gap-6 overflow-hidden mt-6">
          {
            dataApps.map((item, index) => (
              <div key={index} data-aos="slide-left" data-aos-delay={200 + 200 * index}>
                <Tilt className="w-full lg:w-[120px] aspect-square rounded-xl overflow-hidden border border-gray-400 bg-[rgba(255,255,255,0.75)] backdrop-blur-sm">
                  <Link href={item.urlPlay} target="_blank" className="w-full h-full">
                    <Image src={item.image} alt={item.title} className="w-full h-full" />
                  </Link>
                </Tilt>
              </div>
            )
            )
          }
        </div>
      </div>
    </div>
  )
}