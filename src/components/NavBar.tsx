'use client'
import { FC, useEffect } from 'react'
import { NavItem } from './NavItem'
import { usePathname } from 'next/navigation'

export const Navbar: FC = () => {
  const pathname = usePathname()

  useEffect(() => {
    console.log(pathname);
  }, [])

  const Links = [
    { href: '/', target: false, label: 'Home' },
    // { href: 'https://drive.google.com/file/d/1jBdGjjszc4RqqqTfEsre1GcXm7MESuLF/view', target: true, label: 'Resume' },
    { href: 'https://drive.google.com/file/d/1jBdGjjszc4RqqqTfEsre1GcXm7MESuLF/view', target: true, label: 'Document' },
  ]
  return (
    <nav className='relative w-auto inline-flex items-center justify-end gap-6 p-3 lg:p-6 pb-0 lg:pb-0 z-10' data-aos="fade-in">
      {
        Links.map((item, index) => {
          return (
            <NavItem key={index} text={item.label} link={item.href} classNames={`${pathname === item.href && '!text-white'}`} target={item.target} />
          )
        })
      }
    </nav>
  )
}