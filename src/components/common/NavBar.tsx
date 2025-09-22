'use client'
import { FC } from 'react'
import { NavItem } from './NavItem'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/logo.svg'

export const Navbar: FC = () => {
  const pathname = usePathname()

  const Links = [
    { href: '/', target: false, label: 'Home' },
    { target: false, label: 'Projects' },
    { href: '/about', target: false, label: 'About' },
    { href: 'https://drive.google.com/file/d/1LjN_U_yG4A1B2PbrJvWZCoDkyBrRZgXM/view?usp=drive_link', target: true, label: 'My CV' },
  ]
  return (
    <div className='fixed top-0 left-0 right-0 bg-black backdrop-blur-lg inline-flex gap-8 p-3 lg:p-6 z-[999]' data-aos="fade" data-aos-delay={1000} style={{ boxShadow: `0px -1px 8px rgba(0,0,0,0.05)` }}>
      <Link href={'/'}>
        <Image src={Logo} alt='' className='w-fit h-8' />
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