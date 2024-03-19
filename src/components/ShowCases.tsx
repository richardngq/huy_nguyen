import { dataShows } from "@/resources/constants/dataDefine";
import Image from "next/image";
import { FC } from "react";

interface IShowCases {
  classNames?: string
}

export const ShowCases: FC<IShowCases> = ({ classNames = '' }) => {
  const ItemCase = ({ classNames, index, reverse, imageLogo, imageOne, imageTwo, subtitle, biz, checkpoints, showLinearTop, showLinearBot }: { classNames?: any, index?: any, reverse?: boolean, imageLogo?: any, imageOne?: any, imageTwo?: any, subtitle?: string, biz?: string, checkpoints?: any, showLinearTop?: boolean, showLinearBot?: boolean }) => {
    switch (reverse) {
      case true:
        return (
          <div className={`card bg-gray-200 flex flex-col gap-6 lg:gap-8 p-8 border border-gray-100 rounded-3xl ${classNames}`} data-aos="slide-up" data-aos-duration={1000} data-aos-delay={1200 + (200 * index)}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
              {/* Header-Img */}
              <div className="flex-1 w-full h-full flex justify-center" data-aos="fade-right">
                <Image src={imageOne} alt="" className="object-contain" />
              </div>
              {/* Header-Content */}
              <div className="flex flex-col gap-6 flex-1" data-aos="fade-left">
                <div className="flex flex-col gap-3">
                  <div className="">
                    <Image src={imageLogo} alt="" className="w-fit h-20 object-contain" />
                  </div>
                  <div className="text-gray-50" dangerouslySetInnerHTML={{ __html: `${subtitle}` }} />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-white text-2xl font-semibold" dangerouslySetInnerHTML={{ __html: `Business keys` }} />
                  <div className="text-gray-50" dangerouslySetInnerHTML={{ __html: `${biz}` }} />
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0 lg:gap-8">
              {/* Bottom-Content */}
              <div className="flex gap-6 flex-1" data-aos="fade-right">
                <div className="text-gray-50" dangerouslySetInnerHTML={{ __html: `${checkpoints}` }} />
              </div>
              {/* Bottom-Img */}
              <div className="relative h-full flex-1" data-aos="fade-left">
                {
                  !showLinearTop && <div className="absolute top-0 w-full h-[15%] bg-[linear-gradient(180deg,#161B22_50%,transparent_100%)]" />
                }
                <Image src={imageTwo} alt="" className="w-full h-full object-contain" />
                {
                  !showLinearBot && <div className="absolute bottom-0 w-full h-[15%] bg-[linear-gradient(0deg,#161B22_50%,transparent_100%)]" />
                }
              </div>
            </div>
          </div>
        )
        break;

      default:
        return (
          <div className={`card bg-gray-200 flex flex-col gap-6 lg:gap-8 p-8 border border-gray-100 rounded-3xl ${classNames}`} data-aos="slide-up" data-aos-duration={1000} data-aos-delay={1200 + (200 * index)}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
              {/* Header-Content */}
              <div className="flex flex-col gap-6 flex-1" data-aos="fade-right">
                <div className="flex flex-col gap-3">
                  <div className="">
                    <Image src={imageLogo} alt="" className="w-fit h-20 object-contain" />
                  </div>
                  <div className="text-gray-50" dangerouslySetInnerHTML={{ __html: `${subtitle}` }} />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-white text-2xl font-semibold" dangerouslySetInnerHTML={{ __html: `Business keys` }} />
                  <div className="text-gray-50" dangerouslySetInnerHTML={{ __html: `${biz}` }} />
                </div>
              </div>
              {/* Header-Img */}
              <div className="flex-1 w-full h-full flex justify-center" data-aos="fade-left">
                <Image src={imageOne} alt="" className="object-contain" />
              </div>
            </div>

            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-0 lg:gap-8">
              {/* Bottom-Img */}
              <div className="relative h-full flex-1" data-aos="fade-right">
                {
                  !showLinearTop && <div className="absolute top-0 w-full h-[15%] bg-[linear-gradient(180deg,#161B22_50%,transparent_100%)]" />
                }
                <Image src={imageTwo} alt="" className="w-full h-full object-contain" />
                {
                  !showLinearBot && <div className="absolute bottom-0 w-full h-[15%] bg-[linear-gradient(0deg,#161B22_50%,transparent_100%)]" />
                }
              </div>

              {/* Bottom-Content */}
              <div className="flex gap-6 flex-1" data-aos="fade-left">
                <div className="text-gray-50" dangerouslySetInnerHTML={{ __html: `${checkpoints}` }} />
              </div>
            </div>
          </div>
        )
        break;
    }
  }

  return (
    <div className={`relative z-20 mt-20 ${classNames}`} data-aos="fade-up" data-aos-delay={500}>
      <div className="text-2xl text-white mb-6">My Work</div>
      <div className="flex flex-col items-start gap-6 lg:gap-12" data-aos="fade-up" data-aos-delay={1000}>
        {
          dataShows.map((item, index) => {
            return (
              <ItemCase key={index} reverse={index % 2 !== 0 && true} imageLogo={item.imageLogo} imageOne={item.imageOne} imageTwo={item.imageTwo} subtitle={item.subtitle} biz={item.biz} checkpoints={item.checkpoints} showLinearTop={index === 1 && true} />
            )
          })
        }
      </div>
    </div>
  )
}