"use client"
import { delay, motion, useScroll } from 'framer-motion'
import { Suspense, useEffect, useRef, useState } from "react";
import { Loading } from "@/components/Loading";
import Link from "next/link";
import Image from "next/image"
import Avatar from '@/assets/image/image-avatar.png'
import { Icon } from "@iconify/react/dist/iconify.js"
import ImageGridGS from '@/assets/image/image-thumbnail--gs.png';
import ImageGridIPFS from '@/assets/image/image-thumbnail--ipfs.png';
import ImageGridSM from '@/assets/image/image-thumbnail--sm.png';
import ImageGridCRAB from '@/assets/image/image-thumbnail--crab.png';
import App1 from '@/assets/app/fxce.webp';
import App2 from '@/assets/app/xfun.webp';
import App3 from '@/assets/app/f2nft.webp';
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

import { useFollowPointer } from "@/resources/use-follow-poiner";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import Marquee from 'react-fast-marquee';
import { useKeenSlider } from 'keen-slider/react'
import "keen-slider/keen-slider.min.css"

export default function Home() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  const { scrollYProgress } = useScroll();
  const [loaded, setLoaded] = useState(false)
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
      // loop: true,
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
    ]
  )

  useEffect(() => {

    setTimeout(() => {
      setLoading(false)
    }, 1000);
  });

  const Contacts = [
    { title: `Linkedin`, href: `https://www.linkedin.com/in/richard-nguyen-93a75492/`, Icon: `simple-icons:linkedin` },
    { title: `Behance`, href: `https://www.behance.net/nghuy-richard`, Icon: `simple-icons:behance` },
    { title: `Telegram`, href: `https://huynqu.t.me/`, Icon: `ic:round-telegram` },
    { title: `Mail`, href: `mailto:nguyen.huy291094@gmail.com`, Icon: `mdi:gmail` },
  ]

  const dataGrid = [
    {
      key: `CRAB`,
      image: ImageGridCRAB,
      title: `Crabada`,
      description: `Design feature miragation on Web3 to Application Game`,
      url: '/crab',
      href: 'https://crabada.com/',
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
      key: `IPFS`,
      image: ImageGridIPFS,
      title: `IPFS - FXCE`,
      description: `Main responsibility and designing to enhance UI/UX Product`,
      url: '/ipfs1',
      href: 'https://www.fxce.com/',
    },
  ]

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

  const handleClick = (url?: any) => {
    window.location.replace(`./${url}`)
  }

  return (
    <div>
      {/* <Suspense fallback={<Loading />}> */}
      {!loading ?
        <>
          <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
          />
          <div className="w-full h-auto lg:h-screen flex flex-col justify-center items-center py-10 overflow-hidden">

            <div className="container flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6">

              <div className="lg:col-span-8 flex flex-col gap-6">
                <div className="relative bg-white box-shadow p-6 rounded-3xl h-fit overflow-hidden" data-aos='zoom-in' data-aos-delay={0}>
                  <div className="flex flex-col lg:flex-row gap-5">
                    <div className="flex flex-row lg:flex-col gap-3">
                      <div className="relative mix-blend-multiply w-[120px] aspect-square">
                        <Image src={Avatar} alt="" className="w-full h-full rounded-2xl" />
                      </div>
                      <div className="flex flex-col lg:flex-row gap-2 text-[#6E6E73]">
                        {Contacts.map((item, index) => {
                          return (
                            <Link key={index} href={item.href} target="_blank" className="opacity-75 hover:opacity-100 hover:scale-125 transition-all">
                              <Icon icon={item?.Icon} fontSize={24} />
                            </Link>
                          )
                        })}
                      </div>
                    </div>

                    <div>
                      <div className="text-3xl text-black font-bold">
                        Hi, I&rsquo;m <span className="text-[#6E6E73] pb-1.5">Huy Nguyen</span>
                      </div>
                      <div className="text-base text-[#6E6E73] mt-2">
                        <p className="opacity-75">I&rsquo;m a <b>Product Designer</b> and a <b>UI Developer</b> based in <i>Vietnam</i> with experience in delivering end-to-end UX/UI design for software products.
                          <br />
                          I&rsquo;m passionate about improving the lives of others through design and am constantly looking to learn new things everyday.</p>
                      </div>
                    </div>
                  </div>
                  <div id="bg" className='z-10'>
                    <ul id="shape">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>

                <div className="relative bg-white box-shadow p-6 rounded-3xl h-fit flex flex-col gap-3 flex-1" data-aos='zoom-in' data-aos-delay={800}>

                  <div className="inline-flex items-center justify-between">
                    <div className="text-lg text-black font-bold">
                      <span className="text-black px-2 pb-1.5">Case Studies</span>
                    </div>
                    <div>
                      {loaded && instanceRef.current && (
                        <div className="inline-flex justify-between gap-4">
                          <div
                            onClick={(e: any) =>
                              e.stopPropagation() || instanceRef.current?.prev()
                            }
                            className={`
                  text-[#6E6E73] w-10 h-10 shadow-[2px_4px_12px_rgba(0,0,0,.05)] cursor-pointer rounded-full flex flex-row justify-center items-center
                  ${currentSlide === 0 && `opacity-25 !shadow-[inset_2px_4px_12px_rgba(0,0,0,.14)]`}
                  `}
                          >
                            <Icon
                              icon={`ep:arrow-left-bold`}
                            />
                          </div>

                          <div
                            onClick={(e: any) =>
                              e.stopPropagation() || instanceRef.current?.next()
                            }
                            className={`
                  text-[#6E6E73] w-10 h-10 shadow-[2px_4px_12px_rgba(0,0,0,.05)] cursor-pointer rounded-full flex flex-row justify-center items-center
                  ${currentSlide ===
                              instanceRef.current.track.details.slides.length - 3 && `opacity-25 !shadow-[inset_2px_4px_12px_rgba(0,0,0,.14)]`}
                    `}
                          >
                            <Icon
                              icon={`ep:arrow-right-bold`}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div ref={sliderRef} className="keen-slider flex-1">

                    {
                      dataGrid.map((item, index) => (
                        <div
                          key={index}
                          ref={ref}
                          className={`keen-slider__slide card group cursor-pointer flex-1 overflow-hidden ${item.key} ${index % 2 !== 0 ? `` : ``} rounded-2xl`}
                          onClick={() => handleClick(`${item.url}`)}
                        >
                          <div className="relative h-full">
                            <div className="cursor-pointer relative max-w-full w-full h-full flex flex-col justify-end items-end overflow-hidden aspect-[4/3] group-hover:scale-105">
                              <div className="w-full">
                                <Image src={item.image} alt="" className="relative w-full h-full object-contain z-10" />
                              </div>
                            </div>
                            <div className="absolute top-0 left-0 text-white flex flex-col justify-between p-4 z-20" style={{ textShadow: `0px 2px 4px rgba(0,0,0,.25)` }}>
                              <div className="font-bold text-xl">{item.title}</div>
                              <div className="text-base mt-1">{item.description}</div>
                            </div>
                            <div className="w-10 h-10 bg-white text-[#6E6E73] absolute right-2 top-2 flex flex-col justify-center items-center rounded-full group-hover:top-1 group-hover:right-1 group-hover:shadow-[2px_4px_12px_rgba(0,0,0,0.14)]">
                              <Icon icon={'solar:arrow-right-line-duotone'} className="text-xl -rotate-45" />
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>


                </div>

                <div className="relative bg-black box-shadow p-4 px-0 rounded-3xl h-fit flex flex-col gap-3" data-aos='zoom-in' data-aos-delay={1200}>
                  <Marquee className="py-3">
                    {listImage.map((item, i) => (
                      <div key={i} className="w-fit h-10 mx-4 hover:scale-105 marque-item">
                        <Image src={item.src} alt="" className={`!relative block !w-fit h-full object-contain`} fill />
                      </div>
                    ))}
                  </Marquee>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-6">

                <div className="relative bg-white box-shadow p-6 pb-0 rounded-3xl flex-1" data-aos='zoom-in' data-aos-delay={400}>

                  <div className='flex flex-col gap-4'>
                    <div className="text-lg text-black font-bold">
                      <span className="text-black">My Works</span>
                    </div>

                    <div className="relative">

                      <Swiper
                        effect={'cards'}
                        loop={true}
                        autoplay={{
                          delay: 2000
                        }
                        }
                        navigation={true}
                        modules={[Autoplay, EffectCards, Navigation]}
                      >
                        {dataWorks.map((o, i) => (
                          <SwiperSlide key={i} className={`relative rounded-2xl overflow-hidden shadow-[2px_4px_12px_rgba(0,0,0,0.14)] border border-white`}>
                            <img src={o.image} alt='' className='w-full aspect-square object-cover' />
                            <div className="bg-white text-black group-hover:text-blue-500 absolute right-0 top-0 flex flex-col justify-center items-center box-right">
                              <Link href={o.behance} className="w-10 h-10 flex flex-col justify-center items-center group-hover:scale-110"><Icon icon={'fa6-brands:behance'} className="text-lg" /></Link>
                              {o.href &&
                                <Link href={o.href} className="w-10 h-10 flex flex-col justify-center items-center group-hover:scale-110"><Icon icon={'mingcute:arrow-right-fill'} className="text-lg -rotate-45" /></Link>}
                            </div>
                            <div className="inline-flex items-center absolute top-2 left-2 gap-2 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm py-1 px-2 rounded-md">
                              <div className={`w-2 h-2 rounded-full ${o.href ? `bg-green-400` : `bg-red-500`}`} />
                              <div className={`text-white text-xs hidden ${o.href ? `!flex` : ''}`} dangerouslySetInnerHTML={{ __html: `Online` }} />
                              <div className={`text-white text-xs hidden ${o.href ? `` : '!flex'}`} dangerouslySetInnerHTML={{ __html: `Offline` }} />
                            </div>
                            <Link href={o.behance} target="_blank" className="absolute inset-0" />
                          </SwiperSlide>
                        ))}
                      </Swiper>

                    </div>
                  </div>
                </div>

                <div className="relative bg-white box-shadow p-6 rounded-3xl flex-1" data-aos='zoom-in' data-aos-delay={1000}>

                  <div className='flex flex-col gap-3'>
                    <div className="text-lg text-black font-bold">
                      <span className="text-black px-2 pb-1.5">Apps</span>
                    </div>
                    <div className='grid grid-cols-3 gap-6'>
                      {
                        dataApps.map((item, index) => (
                          <div key={index} className="w-full aspect-square rounded-xl overflow-hidden border border-gray-400 bg-[rgba(255,255,255,0.75)] backdrop-blur-sm hover:scale-105">
                            <Link href={item.urlPlay} target="_blank" className="w-full h-full">
                              <Image src={item.image} alt={item.title} className="w-full h-full" />
                            </Link>
                          </div>
                        )
                        )
                      }
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </>
        : <Loading />}
      {/* </Suspense> */}
    </div >
  );
}
