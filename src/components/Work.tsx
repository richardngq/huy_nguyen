import { FC } from "react";
import Image from "next/image"
import Image0 from "@/assets/img/img.png";
import Image1 from "@/assets/img/img-1.png";
import Image2 from "@/assets/img/img-2.png";
import Image3 from "@/assets/img/img-3.png";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { Icon } from "@iconify/react/dist/iconify.js";

interface IWork {
  classNames?: string
}

export const Work: FC<IWork> = ({ classNames = '' }) => {
  const workLists = [
    {
      href: 'https://www.behance.net/gallery/168289687/Crabada-NFT-Marketplace-Game-Fi',
      title: `Crabada`,
      image: Image0,
      description: `An Exciting Undersea Adventure Awaits GameFi`
    },
    {
      href: 'https://www.behance.net/gallery/167050693/Canon-Gallery-S',
      title: `Canon`,
      image: Image1,
      description: `Portable exhibition walls with stands for Canon photographers.`
    },
    {
      href: 'https://www.behance.net/gallery/167051093/Shiseido',
      title: `Shiseido`,
      image: Image2,
      description: `Shiseido offers the highest quality products make-up Japan with 145 years of technology`
    },
    {
      href: 'https://www.behance.net/gallery/167049811/Legend-of-the-7-Kingdoms-Landing-Page',
      title: `Legend 7`,
      image: Image3,
      description: `Blockchain - Crypto - GameFi`
    },
  ]


  const RenderItem = ({ href, title, image, description, classNames }: { href: any, title?: string, image: any, description?: string, classNames?: string }) => {
    return (
      <Link href={href} target="_blank">
        <Tilt className="group">
          <div className={`relative flex w-80 h-80 flex-col items-start gap-6 border bg-gray-200 p-4 rounded-2xl border-solid border-gray-100 overflow-hidden group-hover:border-gray-50 transition-all after:absolute after:bg-[linear-gradient(0deg,#161B22_0%,rgba(22,27,34,0.00)_100%)] after:inset-[75%_0px_0px_0px] ${classNames}`}>
            <div className="relative z-20">
              <div className="text-white text-2xl font-bold">
                {title}
              </div>
              <div className="text-gray-50 text-base font-normal mt-1">
                {description}
              </div>
            </div>
            <div className="absolute left-0 right-0 bottom-0">
              <Image src={image} alt="" priority sizes="100%" />
            </div>

            <p className="absolute left-0 right-0 bottom-0 inline-flex items-center p-4 z-10 translate-y-full group-hover:translate-y-0 transition-all">More at Behance&nbsp;<Icon icon={`ep:right`} /></p>
          </div>
        </Tilt>
      </Link>
    )
  }

  return (
    <div className={`mt-20 ${classNames}`}>
      <div className="inline-flex items-center gap-10">
        {
          workLists.map((item, index) => {
            return (
              <RenderItem key={index} href={item.href} image={item.image} title={item.title} description={item.description} classNames={``} />
            )
          })
        }
      </div>
    </div>
  )
}