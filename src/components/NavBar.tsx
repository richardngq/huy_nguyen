'use client'
import { FC } from 'react'
import { NavItem } from './NavItem'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/logo.svg'
import { Icon } from '@iconify/react/dist/iconify.js'

export const Navbar: FC = () => {
  const pathname = usePathname()

  const Links = [
    { href: '/', target: false, label: 'Home', icon: `solar:home-bold-duotone` },
    { href: '/about', target: false, label: 'About', icon: `solar:user-bold-duotone` },
    { href: 'https://drive.google.com/file/d/1jBdGjjszc4RqqqTfEsre1GcXm7MESuLF/view', target: true, label: 'Present', icon: `solar:document-bold-duotone` },
  ]
  return (
    <div id='nav' className='fixed left-[calc(100vw/6)] right-[calc(100vw/6)] top-2 mx-2 lg:left-auto lg:right-4 lg:top-8 z-20' data-aos='zoom-in'>
      <div className="flex flex-row lg:flex-col p-2 gap-2 justify-between bg-white box-shadow rounded-2xl">
        {
          Links.map((o, i) => <Link key={i} href={o.href} target={o.target ? `_blank` : `_self`} className={`text-2xl p-2 text-[#6E6E73] opacity-75 hover:!text-[#6E6E73] hover:opacity-100 hover:scale-110 ${pathname === o.href && '!text-[#6E6E73] opacity-100 scale-125'}`}><Icon icon={o.icon} /></Link>)
        }
      </div>
    </div>
  )
}