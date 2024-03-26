import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { FC } from "react";

interface INav {
  text: string
  link: string
  target?: boolean
  classNames?: string
}

export const NavItem: FC<INav> = ({ text, link, target, classNames = '' }) => {
  return (
    <Link className={`relative inline-flex items-center gap-1 text-gray-50 hover:text-white ease-linear no-underline group ${classNames}`} href={link} target={`${target ? '_blank' : ''}`}>
      {text}
      <div className={`absolute -bottom-1 w-0 group-hover:w-full h-[2px] bg-white`} />
      <Icon className={`${target ? 'flex' : 'hidden'}`} icon='radix-icons:open-in-new-window' fontSize={12} />
    </Link>
  )
}