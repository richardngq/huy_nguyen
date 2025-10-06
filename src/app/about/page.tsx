"use client";
import { dataDomains, dataStacks } from "@/resources/constants/dataDefine";
import Avatar from "@/assets/image/image-avatar.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {

  const Parts = ({ title,
    children,
    classNames = "" }: {
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
      Role: `Product Designer`,
      Dates: `Mar 2023 - Present`,
      Descriptions: [
        ` - Drove user growth to over <b class="text-white">2M users</b> within the first 3 months after refining and relaunching the product experience.`,
        ` - Analyzed user behavior and improved UX, achieving an average of <b class="text-white">~49K MAU</b> with a steady monthly growth rate of ~5-10%.`,
        ` - Collaborated cross-functionally with stakeholders to conduct user and client experience research, adapting product designs`
      ],
    },
    {
      CompanyName: `K300 Ventures`,
      Role: `Product Manager`,
      Dates: `Jan 2024 - Jan 2025`,
      Descriptions: [
        ` - Lead product strategy and growth for flip.meme, a Solana-based NFT launchpad that integrates <b class="text-white">AI-generated meme creation</b> to simplify bonding-curve NFT minting and trading.`,
        ` - Owned on-chain and growth KPIs, tracking mint transactions, unique wallets.`,
      ],
    },
    {
      CompanyName: `Metahaki Inc - Crabada`,
      Role: `UI/UX Designer & Front End Developer`,
      Dates: `Nov 2021 - Ferb 2023`,
      Descriptions: [
        ` - Led the UX and visual redesign of core GameFi interfaces, contributing to a title that processed over <b class="text-white">20M on-chain transactions</b> and reached <b class="text-white">~26.9K active wallets</b> at its peak`,
        ` - Contributed to token economy usability and UI consistency for CRA (1B supply) and TUS tokens during the GameFi growth phase.`,
        ` - Optimized player flows and dashboards for NFT marketplace and battle system, improving engagement and retention across <b class="text-white">49K+ MAU.</b>`,
        ` - Translating player behavior data into iterative UI improvements aligned with growth and retention metrics.`
      ],
    },
    {
      CompanyName: `Q Servi`,
      Role: `Front End Developer`,
      Dates: `Nov 2020 - Dec 2022`,
      Descriptions: [
        ` - Designed secure data and verification flows for storing COVID test & vaccination records with QR-based validation, integrating consent management and admin dashboards for authorized verifiers.`,
        ` - App recorded <b class="text-white">100-5,000 installs</b> on Google Play.`,
      ],
    },
    {
      CompanyName: `Infinity Blockchain`,
      Role: `Front End Developer`,
      Dates: `Sep 2019 - Dec 2020`,
      Descriptions: [
        ` - Developed blockchain-based applications, including a decentralized Lottery 6/42 platform, focusing on data visualization.`,
        ` - Implemented interactive FE using JavaScript, HTML/CSS, collaborating with backend teams to integrate blockchain features into web products.`,
      ],
    },
    {
      CompanyName: `BBMedia`,
      Role: `Software Engineer - Website Designer`,
      Dates: `Apr 2017 - Sep 2019`,
      Descriptions: [
        ` - Designed and developed corporate websites for major clients including Toray Group <b class="text-white">(~1.5M MAU)</b> global domains.`,
        ` - Collaborated with cross-functional teams within the agency to deliver responsive front-end interfaces, interactive content, and optimized performance for enterprise clients.`,
      ],
    },
  ]

  const Experience = ({
    classNames,
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
      <div className={`${classNames}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "linear", delay: .1 + index * .05 }}
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          <div className="flex flex-col gap-0">
            <p>
              <span className="text-[#4ca7ff] text-xl font-bold">{Role}</span>
            </p>
            <p className="flex flex-col lg:flex-row lg:items-center gap-0.5 lg:gap-2">
              <span className="text-lg font-semibold">{CompanyName}</span> <span className="text-sm opacity-50"><i>({Dates})</i></span>
            </p>
          </div>
          <ul className="text-sm text-white/75">
            {Descriptions?.map((i, j) => (
              <li key={j} dangerouslySetInnerHTML={{ __html: i }} className={`mt-2 ${j === 0 && `!mt-0`}`} />
            ))}
          </ul>
        </motion.div>
      </div>
    )
  }

  return (
    <section className="container mt-20 mx-auto lg:pt-10">
      <div className="profile lg:sticky lg:top-24 lg:self-start lg:z-20 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
        <div id="avatar-img" className="aspect-square w-2/3 md:w-32 lg:w-64 lg:relative overflow-hidden">
          <Image src={Avatar} alt='' className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-3xl font-bold">Huy Nguyen</div>
          <div className="text-base font-thin">
            As a <b>Product Designer</b>, <b>UI-UX Designer</b> and<br className="flex md:hidden" /> a <b>FE Developer</b> with <i>7+ years of experience</i>.
            <br />
            I am so lucky to work with specialized working with domains about <br /><i>Web3, GameFi, Fintech, Blockchain, Crypto, Healthcare, E-Commerce, SaaS, and A.I</i>.
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-8">
        <Parts classNames="relative mt-10 lg:bg-black lg:z-20" title="My Experience">
          <div className="flex flex-col gap-10 lg:gap-14">
            {
              dataExp.map((item, index) => (
                <Experience key={index} CompanyName={item.CompanyName} Role={item.Role} Dates={item.Dates} Descriptions={item.Descriptions} />
              ))
            }
          </div>
        </Parts>

        <div className="lg:min-w-64 lg:max-w-64">
          <Parts classNames="mt-10" title="Excellent">
            <div className="inline-flex items-center flex-wrap gap-4">
              {
                dataDomains.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 text-white/75 backdrop-blur-sm text-sm px-3 py-0.5 filter-blur rounded-full cursor-pointer"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ ease: "linear", delay: .1 + index * .05 }}
                    dangerouslySetInnerHTML={{ __html: `${item.domain}` }} />
                ))
              }
            </div>
          </Parts>

          <Parts classNames="mt-10" title="Proficiency">
            <div className="inline-flex items-center flex-wrap gap-4">
              {
                dataStacks.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 text-white/75 backdrop-blur-sm text-sm px-3 py-0.5 filter-blur rounded-full cursor-pointer"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ ease: "linear", delay: .1 + index * .05 }}
                    dangerouslySetInnerHTML={{ __html: `${item.stack}` }} />
                ))
              }
            </div>
          </Parts>
        </div>
      </div>

    </section>
  )
}