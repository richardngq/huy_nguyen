import { Icon } from "@iconify/react/dist/iconify.js"
import Link from "next/link"
import { Highlight } from "./ui/hero-highlight"
import { motion } from "framer-motion"
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
      <div className={`relative w-full h-full flex flex-col md:flex-row items-start md:items-center gap-6 z-10 ${classNames}`}>

        <div className="container w-full h-screen lg:h-auto mx-auto group flex flex-col md:flex-row justify-center items-center gap-16 relative z-10">

          <div className="text-center" style={{ textShadow: '0px 0px 0px 2px red' }}>
            <div className="text-[28px] md:text-4xl font-bold" data-aos="fade-up">
              Hi! I am <Highlight><span>Huy Nguyen</span></Highlight>
            </div>
            <div className="text-xl space-x-1 leading-[200%] mt-8 max-w-full" data-aos="fade-up" data-aos-delay={200}>
              <p>
                A <Highlight>Product Designer</Highlight>, <Highlight>UI-UX Designer</Highlight> and<br className="flex md:hidden" /> a <Highlight>FE Developer</Highlight> from Vietnam. With 6+ Years of Experience.
                <br />
                Let&rsquo;s work together to Design and Develop user-friendly technical products that make a real impact!
              </p>
            </div>
          </div>
        </div>

        <div className="absolute w-fit bottom-0 -translate-y-full left-0 right-0 mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", ease: "linear", duration: .8 }}
            className="relative inline-flex gap-6 mt-4 py-3 px-8 rounded-full bg-white/5 backdrop-blur border border-white/10"
          >
            {Contacts.map((item, index) => {
              return (
                <Link key={index} href={item.href} target="_blank" className="hover:scale-125 transition-all">
                  <Icon icon={item?.Icon} fontSize={28} />
                </Link>
              )
            })}
          </motion.div>
        </div>

      </div>
    </>
  )
}