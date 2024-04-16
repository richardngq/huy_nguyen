'use client'
import { FC, useEffect } from 'react'
import { NavItem } from './NavItem'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/logo.svg'

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
          Links.map((item, index) => {
            return (
              <NavItem key={index} text={item.label} link={item.href} classNames={`${pathname === item.href && '!opacity-100'}`} target={item.target} />
            )
          })
        }
      </nav>
    </div>
  )
}