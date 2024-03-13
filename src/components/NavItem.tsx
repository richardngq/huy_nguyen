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
    <Link className={`text-white no-underline ${classNames}`} href={link} dangerouslySetInnerHTML={{ __html: text }} target={`${target ? '_blank' : ''}`} />
  )
}