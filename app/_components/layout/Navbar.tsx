'use client'
import NavLink from "./NavLink"
import { useEffect, useState } from "react";
import { links } from "./Sidebar";

const first = links.slice(0,3);
const second = links.slice(3);


export default function Navbar() {
  const [size, setSize] = useState<number>(0)
  useEffect(()=>{
    const sizer = ()=> setSize(window.innerWidth);
    sizer()
    window.addEventListener('resize', sizer)
    return ()=> removeEventListener('resize',sizer)
  }, [])

  return (
      <nav className=" lg:hidden w-full  flex fixed bottom-0 bg-[#0F0A1B] border-t border-text-secondary/30 h-20 ">
        <ul className="w-full items-center gap-2   grid grid-flow-col auto-cols-fr justify-center ">
          {first.map((item, i) => 
          <NavLink 
            key={i}
            variation='navbar'
            name={item.name}
            icon={item.icon}
            hidden={i === 2 && size < 768}
          /> )}
          <li className="flex-1 shrink-0 w-full h-full">
            <button className='flex flex-col flex-1 w-full  items-center'>
            <div className="text-5xl text-white rounded-full absolute -top-7 bg-primary text-center w-12 h-12 ">+</div>
            <span className="absolute bottom-4 md:bottom-2 text-sm md:text-lg  text-text-secondary">Add</span>
          </button>
          </li>
          {second.map((item, i) => 
          <NavLink 
            key={i}
            variation='navbar'
            name={item.name}
            icon={item.icon}
            hidden={(i != 0 && size < 768) || (size > 768 && i === 3) }
          /> )}
          <li className="flex-1 shrink-0  w-full h-full md:hidden " >
            <button className='flex flex-col md:hidden flex-1 justify-end p-0 w-full h-16 text-text-secondary items-center '>
            <div className="flex gap-2 mb-2 mx-auto">
              <span className="rounded-full bg-text-secondary w-1.5 h-1.5 "/>
              <span className="rounded-full bg-text-secondary w-1.5 h-1.5 "/>
              <span className="rounded-full bg-text-secondary w-1.5 h-1.5 "/>
            </div>
            <span className='text-sm md:text-lg align-bottom '>More</span>
          </button>
          </li>
        </ul>
      </nav>
   
  )
}