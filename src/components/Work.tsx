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
import { ParallaxScroll } from "./ui/parallax-scroll";
import { HoverEffect } from "./ui/card-hover-effect";
import { PinContainer, PinPerspective } from "./ui/3d-pin";


interface IWork {
  classNames?: string
}

export const Work: FC<IWork> = ({ classNames = '' }) => {

  const dataWorks = [
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
      online: true,
      link: `https://f2nft.games/`,
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
      <div className="container w-full mx-auto py-6 lg:py-20 overflow-x-auto md:overflow-x-visible">
        <div
          className="font-semibold text-[28px] uppercase rounded-3xl card-box-anim"
        >
          <div
            className="h-full w-full"
            data-aos="fade">
            Projects
          </div>
        </div>
        <div className="-mx-3 mt-5">
          <HoverEffect items={dataWorks} />
        </div>
      </div>
    </>
  )
}