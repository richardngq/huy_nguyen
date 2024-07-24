import Image from "next/image"
import ImageIso from '@/assets/image/image-iso--02.png'
import Avatar from '@/assets/image/image-avatar.png'
import { Icon } from "@iconify/react/dist/iconify.js"
import Link from "next/link"
import { Backers } from "./Backets"
import { Highlight } from "./ui/hero-highlight"
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
      <div className={`relative w-full h-auto flex flex-col md:flex-row items-start md:items-center gap-6 z-10 ${classNames}`}>

        <div className="container w-full mx-auto group flex flex-col md:flex-row justify-center items-center gap-16 relative z-10">

          <div className="text-center">
            <div className="text-[28px] md:text-4xl font-bold" data-aos="fade-up">
              Hi! I am <Highlight><span>Huy Nguyen</span></Highlight>
            </div>
            <div className="text-xl space-x-1 leading-[200%] mt-8 max-w-full" data-aos="fade-up" data-aos-delay={200}>
              <p>
                A <Highlight>UI/UX Designer</Highlight> and<br className="flex md:hidden" /> a <Highlight>Front-End Developer</Highlight> from Vietnam. With over 5+ Years of Experience.
                <br />
                Let&rsquo;s work together to Design and Develop user-friendly technical products that make a real impact!
              </p>
            </div>

            <div className="inline-flex gap-6 mt-4" data-aos="fade-up" data-aos-delay={400}>
              {Contacts.map((item, index) => {
                return (
                  <Link key={index} href={item.href} target="_blank" className="hover:scale-125 transition-all">
                    <Icon icon={item?.Icon} fontSize={32} />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div >
    </>
  )
}