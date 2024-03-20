import { FC } from "react";
import Image from "next/image";
import ImageSM from "@/assets/img/img-grid-sm.png";
import { dataGrid } from "@/resources/constants/dataDefine";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import Tilt from "react-parallax-tilt";

interface IShowCases {
  classNames?: string
}

export const ShowCases: FC<IShowCases> = ({ classNames = '' }) => {
  const handleClick = (url?: any) => {
    window.location.replace(`./${url}`)
  }

  return (
    <div className={`relative z-20 mt-20 ${classNames}`} data-aos="fade-up" data-aos-delay={500}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {
          dataGrid.map((item, index) => (
            <div key={index} onClick={() => handleClick(`${item.url}`)} className={`card cursor-pointer relative bg-gray-200 overflow-hidden border border-gray-100 rounded-3xl hover:border-white hover:scale-125 group ${index === 2 && 'col-start-1 col-end-2 md:col-end-3'}`} data-aos="fade-up" data-aos-delay={250 * index * 2}>
              {item?.image1 &&
                <Image src={item.image1} alt="" className="relative max-w-none w-full h-full object-contain z-10 group-hover:scale-150" data-aos={`${index === 2 ? 'slide-right' : 'fade'}`} data-aos-delay={index === 2 ? 500 : 0} />
              }
              {item?.image2 &&
                <Image src={item.image2} alt="" className="hidden md:flex absolute top-0 right-[-20%] w-full h-full object-contain" data-aos="fade-left" />
              }
              <div className="absolute bottom-0 w-full flex flex-col-reverse sm:flex-row items-start md:items-center justify-start sm:justify-between gap-3 p-3 sm:p-4 z-20">
                <div className="inline-flex items-center gap-3" data-aos="fade-up">
                  {item?.tags?.map((i, j) => <div key={j} className="bg-[rgba(54,57,61,0.75)] text-white text-sm rounded-full py-0.5 px-3" >{i}</div>)}
                </div>
                <div className="inline-flex items-center" data-aos="fade-left">
                  <Link href={`${item.href}`} target="_blank" className="bg-[#435D7C] text-base inline-flex items-center gap-1 py-0.5 ps-1.5 pe-2 rounded-full group-hover:scale-110 hover:bg-slate-500">
                    <Icon icon={`ph:globe`} />
                    <span>Website</span>
                    <Icon icon={`ep:right`} />
                  </Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}