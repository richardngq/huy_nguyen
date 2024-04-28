import Link from "next/link";
import { FC } from "react";

interface IButton {
  classNames?: string
  title?: string
  link?: string
}

export const Button: FC<IButton> = ({ classNames = '', title, link }) => {
  return (
    <Link href={`${link}`} className={`${classNames} bg-white text-black w-fit block py-3 px-6 mt-6 rounded-xl cursor-pointer hover:scale-105`} target="_blank">{title}</Link>
  )
}