
import Link from "next/link"
import Image from 'next/image'
import finovaLogo from '@/public/finova-logo.svg'
import NavLink from "./NavLink"

const sidebarItems = [
  {
    name: 'Dashboard',
    icon: 'icon-grid'
  },
  {
    name: 'Transactions',
    icon: 'icon-exchange'
  },
  {
    name: 'Categories',
    icon: 'icon-tag'
  },
  {
    name: 'Budgets',
    icon: 'icon-clock'
  },
  {
    name: 'Reports',
    icon: 'icon-chart-bars'
  },
  {
    name: 'Goals',
    icon: '	icon-target'
  },
  {
    name: 'Settings',
    icon: '	icon-sliders'
  }

]
	


export default function Sidebar(){
  return(
  <aside className="flex-col hidden lg:flex gap-3 items-left bg-background w-full max-w-70 px-1 border-r border-text-secondary/30 ">
    <div className='z-40'>
        <Image
          src={finovaLogo}
          alt="Finova"
          className="h-20 w-auto z-40 "
          priority
        />
      </div>
    <h2 className="text-text-secondary w-full px-6 my-2 font-semibold">MENU</h2>
    <nav className="w-full px-3 ">
      <ul className="flex flex-col gap-1 ">
        {sidebarItems.map((item, index) => 
        <NavLink icon={item.icon} name={item.name} key={index} /> 
      )} 
      </ul>  
    </nav>
  </aside>
  )
}