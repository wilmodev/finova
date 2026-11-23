'use client'
import { useState, useEffect } from "react"
import Link from "next/link";


export default function Menu() {
  const [menu, setMenu] = useState<boolean>(false)
  const toggleMenu = () => setMenu(!menu);

  useEffect(() => {
    if (!menu) return

    const body = document.body
    const scrollY = window.scrollY
    const original = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
    }

    body.style.overflow = 'hidden'
    body.style.position = 'fixed'   
    body.style.top = `-${scrollY}px`
    body.style.width = '100%'

    return () => {
      body.style.overflow = original.overflow
      body.style.position = original.position
      body.style.top = original.top
      body.style.width = original.width
      window.scrollTo(0, scrollY)   // restaura la posición
    }
  }, [menu])

  useEffect(()=>{
     const handleResize = () => {
      const width = window.innerWidth
      if(width > 768)  setMenu(false)
     }

    window.addEventListener('resize', handleResize)
    return ()=> window.removeEventListener('resize', handleResize)
  }, [])
  
  return(
    <>
     <button
        className='w-10 h-10 z-20 md:hidden right-0 '
        onClick={()=>toggleMenu()}
        aria-label={menu ? 'Close menu' : 'Open menu' }
        
      >
      <svg className="w-10 h-10">
        <use href={`/icons.svg#${menu ? 'close' : 'menu' }`}></use>
      </svg>
      </button>
      {menu && 
      <section className="fixed gap-6 top-0 z-10 inset-0 w-19/20 m-auto flex flex-col items-center pt-35 overflow-y-hidden bg-background">
          <Link href={'/'} 
            className="w-full flex flex-col h-fit"
          >
            <h3 className="text-light-primary text-5xl font-bold text-left">Features</h3>
            <span className="w-20 h-1 rounded bg-light-primary"></span>
          </Link>
          <Link href={'/'} 
            className="w-full flex flex-col h-fit"
          >
            <h3 className="  text-5xl font-bold text-left">How it works</h3>
           
          </Link>
          <Link href={'/'} 
            className="w-full flex flex-col h-fit"
          >
            <h3 className="text-white text-5xl font-bold text-left">Demo</h3>
          
          </Link>
        <div className="flex flex-col w-full gap-3 mt-20  px-2 ">
          <button className="rounded-3xl px-5 w-full py-4 text-text-primary bg-primary font-semibold ">
            Create account
          </button>
          <button className="text-text-primary border-text-secondary border rounded-full py-4 w-full font-semibold">Log in</button>
          </div>
      </section>  
      }
    </>
  )
}