import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { FC, useState } from "react";

interface INav {
  text: string
  link?: string
  target?: boolean
  classNames?: string
}

export const NavItem: FC<INav> = ({ text, link, target, classNames = '' }) => {
  const [toggle, setToggle] = useState<Boolean>(false);

  const handleToggle = () => {
    setToggle(!toggle)

    console.log('click', toggle);

  }
  const linkWorks = [
    {
      title: `IPFS`,
      url: '/ipfs1',
    },
    {
      title: `Gesteron`,
      url: '/gs',
    },
    {
      title: `Crabada`,
      url: '/crab',
    },
    {
      title: `Sky Mavis`,
      url: '/sm',
    }
  ]

  return (
    link ? <Link className={`relative inline-flex items-center gap-1 opacity-50 hover:opacity-100 ease-linear no-underline group ${classNames}`} href={link || '#'} target={`${target ? '_blank' : ''}`}>
      {text}
      <div className={`absolute -bottom-1 w-0 group-hover:w-full h-[2px] bg-white`} />
    </Link> :
      <div className="hidden md:flex relative cursor-pointer group" onClick={() => handleToggle()}>
        <div className={`relative inline-flex items-center gap-1 opacity-50 group-hover:opacity-100 ease-linear no-underline group ${classNames}`}>
          {text}
          <div className={`absolute -bottom-1 w-0 group-hover:w-full h-[2px] bg-white`} />
          <Icon className={`flex group-hover:scale-y-[-1]`} icon='mingcute:down-fill' fontSize={12} />
        </div>
        <div className="absolute -left-4 -right-4 top-0 h-0 overflow-hidden group-hover:h-auto">
          <div className={`bg-black border flex flex-col shadow-sm rounded-2xl backdrop-blur-lg mt-12 py-2`}>
            {
              linkWorks.map((item, i) => (
                <Link key={i} href={item.url} className="py-2 px-4 opacity-50 hover:opacity-100 whitespace-nowrap">{item.title}</Link>
              ))
            }
          </div>
        </div>
      </div>
  )
}