'use client'
import { FC, useEffect } from 'react'
import { NavItem } from './NavItem'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/logo.svg'
import { Icon } from '@iconify/react/dist/iconify.js'

export const Navbar: FC = () => {
  const pathname = usePathname()

  useEffect(() => {
    console.log(pathname);
  }, [])

  const Links = [
    { href: '/', target: false, label: 'Home' },
    // { href: 'https://drive.google.com/file/d/1jBdGjjszc4RqqqTfEsre1GcXm7MESuLF/view', target: true, label: 'Resume' },
    { href: '/about', target: false, label: 'About' },
    { href: 'https://drive.google.com/file/d/1jBdGjjszc4RqqqTfEsre1GcXm7MESuLF/view', target: true, label: 'Document' },
  ]
  return (
    <div className='fixed top-0 left-0 right-0 bg-[#FCFCFC] text-[#515b87] inline-flex p-3 lg:p-6 z-[999]' data-aos="fade-in" style={{ boxShadow: `0px -1px 8px rgba(0,0,0,0.05)` }}>
      <Link href={'/'}>
        <Image src={Logo} alt="" />
      </Link>
      <nav className='w-full inline-flex items-center justify-end gap-6'>
        {
          Links.map((o, i) =>
            <Link key={i} href={o.href} target={o.target ? `_blank` : `_self`}
              className={`text-2xl p-2 inline-flex items-center gap-2 text-[#6E6E73] opacity-75 hover:!text-[#6E6E73] relative group hover:opacity-100 hover:scale-110 ${pathname === o.href && '!text-[#6E6E73] opacity-100 scale-125'}`}>
              <div className='absolute opacity-0 group-hover:opacity-100 text-xs -translate-x-full px-1 text-nowrap'>{o.label}</div>
              <Icon icon={o.icon} />
            </Link>
          )
        }
    </div>
    </div >
  )
}