import { FC } from "react";
import Image from "next/image"
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { Icon } from "@iconify/react/dist/iconify.js";
import { dataWorks } from "@/resources/constants/dataDefine";

interface IWork {
  classNames?: string
}

export const Work: FC<IWork> = ({ classNames = '' }) => {
  const RenderItem = ({ index, href, title, image, description, classNames }: { index: any, href: any, title?: string, image: any, description?: string, classNames?: string }) => {
    return (
      <Link href={href} target="_blank" data-aos="slide-up" data-aos-delay={500 + (200 * index)}>
        <Tilt className="group">
          <div className={`relative flex w-full max-w-full lg:max-w-80 h-[240px] md:h-[320px] lg:h-80 flex-col items-start gap-6 border bg-gray-200 p-4 rounded-2xl border-solid border-gray-100 overflow-hidden group-hover:border-gray-50 transition-all after:absolute after:bg-[linear-gradient(0deg,#161B22_0%,rgba(22,27,34,0.00)_100%)] after:inset-[75%_0px_0px_0px] ${classNames}`}>
            <div className="relative z-20">
              <div className="text-white text-2xl font-bold">
                {title}
              </div>
              <div className="text-gray-50 text-base font-normal mt-1">
                {description}
              </div>
            </div>
            <div className="absolute left-0 right-0 bottom-0 opacity-50 lg:opacity-100 translate-y-1/4 lg:translate-y-0">
              <Image src={image} alt="" priority sizes="100%" />
            </div>

            <p className="absolute left-0 right-0 bottom-0 inline-flex items-center p-4 z-10 translate-y-full group-hover:translate-y-0 transition-all hover:scale-105">
              More at Behance&nbsp;<Icon icon={`ep:right`} />
            </p>
          </div>
        </Tilt>
      </Link>
    )
  }

  return (
    <div className={`relative z-20 mt-20 ${classNames}`} data-aos="fade-up" data-aos-delay={500}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-4 md:gap-6">
        {
          dataWorks.map((item, index) => (
            <RenderItem key={index} index={index} href={item.href} image={item.image} title={item.title} description={item.description} classNames={``} />
          )
          )
        }
      </div>
    </div>
  )
}