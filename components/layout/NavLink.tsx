'use client'

import Link from "next/link"
import { usePathname } from "next/navigation";

export default function NavLink({name, icon}:{
  icon:string,
  name:string,
}){
  const pathname = usePathname();
  const isActive = pathname === `/${name.toLowerCase()}`;
    
  return(
    <li 
      className={`group cursor-pointer rounded-2xl  w-full  hover:bg-light-primary/30 ${isActive ? 'bg-light-primary/30' : ''} `}
        >
      <Link
        href={`/${name.toLowerCase()}`}
        className={` ${isActive ? 'text-primary' : ''}`}
        >
        <button className="flex gap-3 py-2 items-center cursor-pointer ">
        <span className={`w-1 h-6 rounded-full bg-primary opacity-0 group-hover:opacity-100 ${isActive ? 'opacity-100' : ''} `}></span>
          <svg className={`w-8 h-8 ${isActive ? 'text-white font-sans text-xl' : 'text-text-secondary'}`}>
            <use href={`/sidebar-icons.svg#${icon}`}></use>
          </svg>
          <span className={`group-hover:text-white ${isActive ? 'text-white font-sans text-xl' : 'text-text-secondary'}`}>{name}</span>
        </button>
        </Link>
      </li>
    
  )
}