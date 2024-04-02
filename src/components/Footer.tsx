'use client'
import { Icon } from "@iconify/react/dist/iconify.js"
import Link from "next/link"
import { FC } from "react"

interface IFooter {
  classNames?: string
}

export const Footer: FC<IFooter> = ({ classNames = '' }) => {
  const Contacts = [
    { title: `Linkedin`, href: `https://www.linkedin.com/in/richard-nguyen-93a75492/`, Icon: `simple-icons:linkedin` },
    { title: `Behance`, href: `https://www.behance.net/nghuy-richard`, Icon: `simple-icons:behance` },
    { title: `Mail`, href: `mailto:nguyen.huy291094@gmail.com`, Icon: `mdi:gmail` },
    { title: `Phone`, href: `tel:0792622620`, Icon: `gg:phone` },
  ]
  return (
    <div className={`footer relative z-20 w-full p-3 pb-6 lg:p-6 mt-6 lg:mt-20 ${classNames}`}>
      <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
        <p className="text-center opacity-50">&copy;2024 Designed & Developed by Huy Nguyen</p>
        <div className="inline-flex gap-4">
          {Contacts.map((item, index) => {
            return (
              <Link key={index} href={item.href} target="_blank" className="opacity-50 hover:opacity-75 hover:scale-125 transition-all">
                <Icon icon={item?.Icon} fontSize={24} />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}