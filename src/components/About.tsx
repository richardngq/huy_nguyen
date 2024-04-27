import Image from "next/image"
import ImageIso from '@/assets/image/image-iso--02.png'
import Avatar from '@/assets/image/image-avatar.png'
import { Icon } from "@iconify/react/dist/iconify.js"
import Link from "next/link"
import { Backers } from "./Backets"
interface IAbout {
  classNames?: string
}

export default function About<IAbout>({ classNames = '' }) {
  const Contacts = [
    { title: `Linkedin`, href: `https://www.linkedin.com/in/richard-nguyen-93a75492/`, Icon: `simple-icons:linkedin` },
    { title: `Behance`, href: `https://www.behance.net/nghuy-richard`, Icon: `simple-icons:behance` },
    { title: `Telegram`, href: `https://huynqu.t.me/`, Icon: `ic:round-telegram` },
    { title: `Mail`, href: `mailto:nguyen.huy291094@gmail.com`, Icon: `mdi:gmail` },
  ]

  return (
    <>
      <div className={`relative bg-white w-full h-auto overflow-hidden flex flex-col md:flex-row items-start md:items-center gap-6 z-20 pt-40 pb-20 ${classNames}`}>

        <div className="container w-full mx-auto group flex flex-col md:flex-row items-center gap-16 relative z-10">

          <div>
            <div className="text-[28px] md:text-4xl text-[#515b87] font-bold" data-aos="fade-up">
              Hello World~
            </div>
            <div className="text-xl space-x-1 leading-8 mt-4 max-w-full" data-aos="fade-up" data-aos-delay={200}>
              <p className="opacity-75">I am <span>Huy Nguyen</span>, a UI/UX Designer and a UI Developer passionate about creating seamless User Experiences and beautiful User Interfaces.
                <br />
                I am always looking for new challenges and eager to collaborate with creative teams to create amazing products
              </p>
            </div>

            <div className="inline-flex gap-6 mt-4" data-aos="fade-up" data-aos-delay={400}>
              {Contacts.map((item, index) => {
                return (
                  <Link key={index} href={item.href} target="_blank" className="opacity-75 hover:opacity-100 hover:scale-125 transition-all">
                    <Icon icon={item?.Icon} fontSize={32} />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* <div className=" absolute top-0 bottom-0 right-0" data-aos="zoom-in">
          <div className="mix-blend-multiply opacity-25">
            <Image src={ImageIso} alt="" className="w-full h-full" />
          </div>
        </div> */}
        <section id="bg">
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
        </section>
      </div>
      <Backers />
    </>
  )
}