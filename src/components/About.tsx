import Image from "next/image"
import ImageIso from '@/assets/image/image-iso--02.png'
import Avatar from '@/assets/image/image-avatar.png'
import { Icon } from "@iconify/react/dist/iconify.js"
import Link from "next/link"
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
    <div className={`relative w-full h-auto lg:h-svh flex flex-col md:flex-row items-start md:items-center gap-6 z-20 pt-40 pb-20 ${classNames}`}>

      <div className="container w-full mx-auto group flex flex-col md:flex-row items-center gap-16 relative z-10">
        <div className="relative mix-blend-multiply w-80 aspect-square" data-aos="zoom-in">
          <Image src={Avatar} alt="" className="w-full h-full rounded-[34px]" />
        </div>

        <div>
          <div className="text-4xl md:text-6xl text-[#6E6E73] font-bold" data-aos="fade-up">
            Hi, I&rsquo;m <span className="text-bg px-2 pb-1.5">Huy Nguyen</span>
          </div>
          <div className="text-xl space-x-1 leading-8 mt-10 max-w-full" data-aos="fade-up" data-aos-delay={200}>
            <p className="opacity-75">I&rsquo;m a <b>Product Designer</b> based in Vietnam with experience in delivering end-to-end UX/UI design for software products.
              <br />
              I&rsquo;m passionate about improving the lives of others through design and am constantly looking to learn new things everyday.</p>
          </div>

          <div className="inline-flex gap-6 mt-8" data-aos="fade-up" data-aos-delay={400}>
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

      <div className=" absolute top-0 bottom-0 right-0" data-aos="zoom-in">
        <div className="mix-blend-multiply opacity-25">
          <Image src={ImageIso} alt="" className="w-full h-full" />
        </div>
      </div>

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
  )
}