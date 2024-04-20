"use client"
import { dataDomains, dataStacks } from "@/resources/constants/dataDefine";
import Avatar from "@/assets/image/image-avatar.png";
import { FC } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

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
        <div className="uppercase font-semibold text-base text-black">{title}</div>
        {children}
      </div>
    )
  }

  const dataExp = [
    {
      CompanyName: `IPFS Inc`,
      Role: `Product Designer`,
      Dates: `Mar 2023 - Present`,
      Descriptions: [
        `Senior designer at <b>IPFS Services</b>`,
        `Design DRI for all <b>Ecosystems Products</b> and <b>Solution Solving</b> for <b>Mobile Applications</b>`,
        `Successful upgrade and take care User Experience and Accessibility for thousands Clients with <b>Retail Product</b>`
      ],
    },
    {
      CompanyName: `Metahaki Inc - Crabada`,
      Role: `Product Designer`,
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
      <div className={`${classNames} text-black`} data-aos="fade-up">
        <div className="flex flex-col">
          <p><span className="text-xl font-semibold">{CompanyName}</span><span className="text-[#6E6E73] text-lg">&nbsp;{`-`}&nbsp;{Role}</span></p>
          <p className="text-sm mt-1 opacity-25">{Dates}</p>
        </div>
        <ul className="text-base mt-2 text-[#6E6E73]">
          {Descriptions?.map((i, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: i }} className="mt-2" />
          ))}
        </ul>
      </div>
    )
  }

  return (
    <section className="container my-20 mx-auto bg-white overflow-hidden box-shadow p-4 rounded-2xl">
      <div className=" group" data-aos="fade-up">
        <div className="avatar flex flex-col lg:flex-row items-start lg:items-center gap-6">
          {/* <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-3xl overflow-hidden shadow-[0px_4px_8px_rgba(0,0,0,0.01)] border-4 border-[#efefef]"> */}
          <div className="relative mix-blend-multiply w-[120px] aspect-square">
            <Image src={Avatar} alt="" className="w-full h-full rounded-2xl" />
          </div>
          {/* </div> */}
          <div className="flex flex-col gap-1">
            <div className="text-xl font-bold">Huy Nguyen</div>
            <div className="text-base leading-6 font-thin">
              I am a <b>Product Designer</b>, <b>UI/UX Designer</b>, <b>UI Developer</b> with 5 years of experience.<br />
              Specialized working with domains about <b>Web3 (2+ Years)</b>, <b> Fintech(3+ Years)</b>, <b>Blockchain (6+ Years)</b>, <b>Crypto</b>, <b>Healthcare</b>, <b>E-Commerce</b> and <b>SaaS</b>.
            </div>
          </div>
        </div>

        <Link href='https://drive.google.com/file/d/1fXCEupkTlTWr7mrk88WGHkj4DAmEy0Xn/view?usp=sharing' className="absolute top-0 right-0 bg-[rgba(0,0,0,.5)] text-white inline-flex items-center gap-2 p-2 pe-3 rounded-xl hover:shadow-[0px_4px_8px_rgba(0,0,0,.08)] hover:scale-105">
          <Icon icon={`solar:sticker-smile-square-bold-duotone`} fontSize={24} />
          My CV
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 mt-10">
        <div className="lg:col-span-8">
          <Parts title="My Experience"
          >
            <div className="flex flex-col gap-10">
              {
                dataExp.map((item, index) => (
                  <Experience key={index} CompanyName={item.CompanyName} Role={item.Role} Dates={item.Dates} Descriptions={item.Descriptions} />
                ))
              }
            </div>
          </Parts>
        </div>
        <div className="lg:col-span-4">
          <Parts title="My Stack"
          >
            <div className="inline-flex items-center flex-wrap gap-2">
              {
                dataStacks.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[rgba(0,0,0,0.25)] text-white backdrop-blur-sm text-sm px-3 py-0.5 rounded-full cursor-pointer"
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
                    className="bg-[rgba(0,0,0,0.25)] text-white backdrop-blur-sm text-sm px-3 py-0.5 rounded-full cursor-pointer"
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