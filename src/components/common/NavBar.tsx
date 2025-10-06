'use client'
import { FC } from 'react'
import { NavItem } from './NavItem'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/logo.svg'
import { useResponsive } from '@/utils/hooks/useResponsive'

export const Navbar: FC = () => {
  const pathname = usePathname()
  const { isSm } = useResponsive()

  const Links = [
    { href: '/', target: false, label: 'Home' },
    { href: '/about', target: false, label: 'About' },
    { target: false, label: 'Work Log' },
    { href: 'https://drive.google.com/file/d/14yXzKHsQQG9iO-TojaQ7-A5NB6CoGz3C/view?usp=sharing', target: true, label: "My CV" },
    // { href: 'https://drive.google.com/file/d/1LjN_U_yG4A1B2PbrJvWZCoDkyBrRZgXM/view?usp=drive_link', target: true, label: 'My CV' },
  ]
  return (
    <div className='fixed top-2 inset-x-2 bg-black/10 border border-white/10 backdrop-blur-lg rounded-full inline-flex gap-2 lg:gap-8 py-2 px-6 lg:p-6 lg:px-8 z-[999]' data-aos="fade" data-aos-delay={1000} style={{ boxShadow: `0px -1px 8px rgba(0,0,0,0.05)` }}>
      <Link href={'/'}>
        <Image src={Logo} alt='' className='w-fit h-8' />
      </Link>
      <nav className='w-full inline-flex items-center justify-end gap-2 lg:gap-6'>
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