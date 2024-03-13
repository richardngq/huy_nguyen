import { FC } from 'react'
import { NavItem } from './NavItem'

export const Navbar: FC = () => {
  return (
    <nav className='w-auto inline-flex items-center gap-6 p-3 lg:p-6 pb-0 lg:pb-0'>
      <NavItem text='About' link='#' />
      <NavItem text='About' link='#' />
      <NavItem text='About' link='#' />
    </nav>
  )
}