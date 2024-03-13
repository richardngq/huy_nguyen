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
    { href: '/', label: 'Home' },
    { href: '/resume', label: 'Resume' },
  ]
  return (
    <nav className='w-auto inline-flex items-center justify-end gap-6 p-3 lg:p-6 pb-0 lg:pb-0'>
      {/* <NavItem text='Home' link='#' classNames='' />
      <NavItem text='Resume' link='#' classNames='' /> */}
      {
        Links.map((item, index) => {
          return (
            <NavItem key={index} text={item.label} link={item.href} classNames={`${pathname === item.href && '!text-white'}`} />
          )
        })
      }
    </nav>
  )
}