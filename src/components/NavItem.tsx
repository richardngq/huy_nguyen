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
    <Link className={`relative text-gray-50 hover:text-white ease-linear no-underline group ${classNames}`} href={link} target={`${target ? '_blank' : ''}`}>
      {text}
      <div className={`absolute -bottom-1 w-0 group-hover:w-full h-[2px] bg-white`} />
    </Link>
  )
}