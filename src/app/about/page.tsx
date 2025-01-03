import { dataDomains, dataStacks } from "@/resources/constants/dataDefine";
import Avatar from "@/assets/image/image-avatar.png";
import { FC } from "react";
import Image from "next/image";

export default function About() {

  const Parts = ({ title,
    children,
    classNames }: {
      title?: string,
      children?: any,
      classNames?: string
    }) => {
    return (
      <div className={`text-sm flex flex-col gap-3 ${classNames}`} data-aos="fade-up">
        <div className="uppercase font-semibold text-2xl">{title}</div>
        {children}
      </div>
    )
  }

  const dataExp = [
    {
      CompanyName: `IPFS Inc`,
      Role: `Product Designer Lead`,
      Dates: `Mar 2023 - Present`,
      Descriptions: [
        `Product Designer Leader at <b>IPFS Services</b>`,
        `Design DRI for all PWA Projects and Solution Resolving for <b>Mobile Application</b>`,
        `Successful upgrade and take care User Experience and Accessibility for thousands Clients with <b>Retail Product</b>`
      ],
    },
    {
      CompanyName: `Metahaki Inc - Crabada`,
      Role: `Product Designer && Front End Developer`,
      Dates: `Nov 2021 - Ferb 2023`,
      Descriptions: [
        `Product designer and responsibility about UI Front-End coding for <b>Crabada</b> and Related Products`,
        `Research, improvement User Experience then create and implement UI as <b>UI/UX Designer</b> and <b>FE Developer</b>`,
        `Proud we are the team that created Game-Fi as a Flagship on the Avalanche chain with <b>millions of user</b>`
      ],
    },
    {
      CompanyName: `Q Servi`,
      Role: `Front End Developer`,
      Dates: `Nov 2020 - Dec 2022`,
      Descriptions: [
        `Responsibility as Front-End Developer`,
        `Create UI with Product Designer and discuss how to visual on development for PWA Products`,
      ],
    },
    {
      CompanyName: `Infinity Blockchain`,
      Role: `Front End Developer`,
      Dates: `Sep 2019 - Dec 2020`,
      Descriptions: [
        `Responsibility as UI Developer`,
        `Implement UI and discuss with the Designer about development for PWA Products`,
      ],
    },
    {
      CompanyName: `BBMedia`,
      Role: `Software Engineer - Website Designer`,
      Dates: `Apr 2017 - Sep 2019`,
      Descriptions: [
        `Software team leader with <b>Toray’s Inc</b> and <b>BBMedia Vietnam</b>`,
        `Responsibility for all projects team handles and <b>Product Quality</b>`,
        `Honored by working and creating products with the CEOs of Canon, Toshiba, Shiseido, and Dole Asia`,
      ],
    },
  ]

  const Experience = ({ classNames,
    index,
    CompanyName,
    Role,
    Dates,
    Descriptions }: {
      classNames?: string,
      index?: any,
      CompanyName?: string,
      Role?: string,
      Dates?: string,
      Descriptions?: string[],
    }) => {
    return (
      <div className={`flex flex-col gap-3 ${classNames}`} data-aos="fade-up">
        <div className="flex flex-col gap-1">
          <p className="flex flex-col gap-0.5">
            <span className="text-base opacity-75">{Dates}</span>
            <span className="text-orange-400 text-xl font-semibold">{CompanyName}</span>
          </p>
          <p>
            <span className="text-lg font-bold">{Role}</span>
          </p>
        </div>
        <ul className="text-sm">
          {Descriptions?.map((i, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: i }} className={`mt-2 ${j === 0 && `!mt-0`}`} />
          ))}
        </ul>
      </div>
    )
  }

  return (
    <section className="container mt-20 mx-auto pt-10">
      <div className="group" data-aos="fade-up">
        <div className="avatar flex flex-col lg:flex-row items-start lg:items-center gap-6">
          <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-3xl overflow-hidden shadow-[0px_4px_8px_rgba(0,0,0,0.01)] border-2 border-[#efefef]">
            <Image src={Avatar} alt='' className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[28px] font-bold">Huy Nguyen</div>
            <div className="text-base font-thin">
              As a <b>Front-End Developer</b>, <b>UI Developer</b>, <b>Markup Developer</b> and <b>Product Designer</b> with <i>6+ years of experience</i>.
              <br />
              I am so lucky to work with specialized working with domains about <br />Web3, Fintech, Blockchain, Crypto, Healthcare, E-Commerce, and SaaS.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-20">
        <div>
          <Parts classNames="mt-10" title="My Experience"
          >
            <div className="flex flex-col gap-10 lg:gap-14">
              {
                dataExp.map((item, index) => (
                  <Experience key={index} CompanyName={item.CompanyName} Role={item.Role} Dates={item.Dates} Descriptions={item.Descriptions} />
                ))
              }
            </div>
          </Parts>
        </div>

        <div>
          <Parts classNames="mt-10" title="My Stack"
          >
            <div className="inline-flex items-center flex-wrap gap-2">
              {
                dataStacks.map((item, index) => (
                  <div
                    key={index}
                    className="bg-orange-100 text-orange-700 backdrop-blur-sm text-sm px-3 py-0.5 rounded-full cursor-pointer"
                    data-aos="fade-left"
                    data-aos-delay={100 + index * 100}
                    dangerouslySetInnerHTML={{ __html: `${item.stack}` }} />
                ))
              }
            </div>
          </Parts>

          <Parts classNames="mt-10" title="Specialized Domains Experience"
          >
            <div className="inline-flex items-center flex-wrap gap-2">
              {
                dataDomains.map((item, index) => (
                  <div
                    key={index}
                    className="bg-orange-100 text-orange-700 backdrop-blur-sm text-sm px-3 py-0.5 rounded-full cursor-pointer"
                    data-aos="fade-left"
                    data-aos-delay={100 + index * 100}
                    dangerouslySetInnerHTML={{ __html: `${item.domain}` }} />
                ))
              }
            </div>
          </Parts>
        </div>
      </div>

    </section>
  )
}