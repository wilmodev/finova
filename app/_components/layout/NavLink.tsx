'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";


export default function NavLink({name, icon, variation='sidebar', hidden}:{
  icon:string,
  name:string,
  variation?: 'sidebar' | 'navbar';
  hidden?: boolean
}){
  const pathname = usePathname();
  const isActive = pathname === `/${name.toLowerCase()}`;
    
  return(
    <li 
      className={`group  cursor-pointer rounded-2xl ${variation === 'navbar' ? 'shrink-0  w-full flex-1' : 'w-full hover:bg-text-secondary/30' }`}
      style={{display: hidden ? 'none' : 'block'}}
        >
      <Link
        href={`/${name.toLowerCase()}`}
        className={` ${isActive ? 'text-primary' : ''} ${variation === 'navbar' ? 'items-center justify-cente flex' : '' } `}
        >
        <button className={`flex py-3    items-center cursor-pointer ${variation === 'navbar' ? 'flex-col m-auto' : 'gap-3'}`} >
        <span className={`w-1 h-6 rounded-full ${variation === 'navbar' ? 'rotate-90 absolute -top-3.5' : ''} bg-primary opacity-0 group-hover:opacity-100 ${isActive ? 'opacity-100' : ''} `} />
          <svg className={`w-8 h-8 ${isActive ? 'text-primary/60 font-sans text-xl' : 'text-text-secondary'}`}>
            <use href={`/sidebar-icons.svg#${icon}`} />
          </svg>
          <span className={`group-hover:text-white text-lg ${variation === 'navbar' ? `text-sm md:text-lg ${isActive ? 'text-primary font-sans' : 'text-text-secondary text- '}` : `${isActive ? 'text-white font-sans text-xl' : 'text-text-secondary'}`} `}>{name}</span>
        </button>
        </Link>
      </li>
  )
}