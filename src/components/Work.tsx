import { FC, useState } from "react";
import Image from "next/image"
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import imageSushi from '@/assets/image/work/image-work-sushi.png'
import imageColorpool from '@/assets/image/work/image-work-colorpool.png'
import imageFlip from '@/assets/image/work/image-work-flip.png'
import imageAnimix from '@/assets/image/work/image-work-animix.png'
import imageTofu from '@/assets/image/work/image-work-tofu.png'
import imageSoyu from '@/assets/image/work/image-work-soyu.png'

import "keen-slider/keen-slider.min.css"
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

interface IWork {
  classNames?: string
}

export const Work: FC<IWork> = ({ classNames = '' }) => {

  const dataWorks = [
    {
      online: true,
      link: `http://dev.soyu.ai/`,
      title: `Soyu`,
      image: imageSoyu,
    },
    {
      online: true,
      link: `https://tofu.toys/`,
      title: `Tofu`,
      image: imageTofu,
    },
    {
      online: true,
      link: `http://animix.tech/`,
      title: `Animix`,
      image: imageAnimix,
    },
    {
      online: true,
      link: `https://flip.meme/solana`,
      title: `FlipMeme`,
      image: imageFlip,
    },
    {
      online: true,
      link: `http://colorpool.xyz/`,
      title: `ColorPool Dex`,
      image: imageColorpool,
    },
    {
      online: true,
      link: `https://sss.game/`,
      title: `Super Sushi Samurai`,
      image: imageSushi,
    },
    {
      online: true,
      link: `https://mooncat.metahaki.com/`,
      title: `Mooncat`,
      image: `https://mir-s3-cdn-cf.behance.net/projects/808/ff9e9f195569283.Y3JvcCwxMDI0LDgwMCwwLDI.png`,
    },
    {
      online: false,
      link: 'https://www.behance.net/gallery/195838445/Crabada-Game-Fi-Web3-Landing-Page',
      title: `Crabada`,
      image: `https://mir-s3-cdn-cf.behance.net/projects/808/4d6e91195838445.Y3JvcCwxMDI0LDgwMCwwLDI.png`,
    },
    {
      online: false,
      link: `https://www.behance.net/gallery/167131231/F2NFT-Marketplace-v20`,
      title: `F2FNT`,
      image: `https://mir-s3-cdn-cf.behance.net/projects/808/4c3ca0167131231.Y3JvcCwxMDI0LDgwMCwwLDI.png`,
    },
    {
      online: true,
      link: `https://personal.canon.jp/showroom/gallery`,
      title: `Canon`,
      image: `https://mir-s3-cdn-cf.behance.net/projects/808/abd414167050693.Y3JvcCwxNTEyLDExODIsMCww.png`,
    },
    {
      online: true,
      link: `http://shiseido.co.jp/`,
      title: `Shiseido`,
      image: `https://mir-s3-cdn-cf.behance.net/projects/808/48da7f167051093.Y3JvcCwxMDEyLDc5MiwzODAsNzA.png`,
    },
    {
      online: false,
      link: 'https://www.behance.net/gallery/167049811/Legend-of-the-7-Kingdoms-Landing-Page',
      title: `Legend Of 7 Kingdoms`,
      image: `https://mir-s3-cdn-cf.behance.net/projects/808/942c66167049811.Y3JvcCwxMDI0LDgwMCwwLDI.png`,
    },
  ];

  return (
    <>
      <section className="container py-10 lg:py-20 overflow-x-auto md:overflow-x-visible relative z-10 overflow-y-hidden">
        <div
          className="font-semibold text-[28px] uppercase rounded-3xl card-box-anim"
        >
          <div
            className="h-full w-full"
            data-aos="fade">
            Projects
          </div>
        </div>
        <motion.div
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          // viewport={{ once: true }}
          className="mt-10 lg:-mx-10"
        >
          <Marquee className="card-works flex flex-col lg:flex-row !gap-0" autoFill pauseOnHover>
            {
              dataWorks.map((o, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: [1, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: .01 + i * .01 }}
                  className={`card-works--item relative overflow-hidden group ${o.title}`}
                >
                  <Image src={o.image} alt='' fill className="!relative object-cover" />
                  <div className="scale-0 group-hover:scale-100 w-8 h-8 p-0.5 bg-[rgba(0,0,0,0.25)] text-white backdrop-blur-sm absolute right-2 top-2 lg:right-4 lg:top-4 flex flex-col justify-center items-center rounded-full z-20 ring-1 ring-[rgba(255,255,255,.25)] group-hover:ring-white">
                    <Icon icon={'mingcute:arrow-right-fill'} className="-rotate-45" />
                  </div>
                  <div className="inline-flex items-center gap-2 absolute bottom-0 left-0 right-0 p-2 pt-10 tag">
                    <div className={`w-8 h-8 p-1 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm
                    ${o?.online ? `text-green-400` : `text-blue-500`} flex flex-col justify-center items-center rounded-full ring-1 ring-[rgba(255,255,255,.15)] group-hover:ring-[rgba(255,255,255,.5)]`}>
                      <Icon icon={`${o?.online ? `ph:globe-bold` : `fa6-brands:behance`}`} className="" />
                    </div>
                    <span className="text relative">{o.title}</span>
                  </div>
                  <Link href={o.link} className="absolute inset-0" />
                </motion.div>
              ))
            }
          </Marquee>
        </motion.div>
      </section>
    </>
  )
}