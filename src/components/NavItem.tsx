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
    <Link className={`relative inline-flex items-center gap-1 opacity-50 hover:opacity-100 ease-linear no-underline group ${classNames}`} href={link} target={`${target ? '_blank' : ''}`}>
      {text}
      <div className={`absolute -bottom-1 w-0 group-hover:w-full h-[2px] bg-gray-800`} />
      <Icon className={`${target ? 'flex' : 'hidden'}`} icon='radix-icons:open-in-new-window' fontSize={12} />
    </Link>
  )
}