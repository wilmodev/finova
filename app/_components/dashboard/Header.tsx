import Image from "next/image";
import finovaLogo from '@/public/finova-logo.svg'
import { monthsFull } from "@/app/_data/months";



export default function Header() {
  
  return(
      <header className="flex  items-center justify-between w-full">
        <div>
      <div className='z-40 md:hidden '>
        <Image
          src={finovaLogo}
          alt="Finova"
          className="h-20 w-auto bg-transparent z-40 "
          priority
        />
      </div>
        <div className="hidden md:block p-2">
          <h1 className="font-bold text-3xl">Dashboard</h1>
          <p className="text-zinc-400">Your November overview</p>
        </div>
        </div>
        <div className="flex gap-4"> 
          <label htmlFor="select" className="sr-only">select month</label>
          <div className="flex items-center gap-1 rounded-xl border py-2 bg-background px-2 border-text-secondary/30 ">

            <svg className="w-5 h-5 text-text-secondary">
              <use href='/icons.svg#icon-calendar'></use>
            </svg>
            
          <select name="select" id="select" className="rounded-2xl focus:border-none focus:outline-0">
            {monthsFull.map((month,index)=> 
              <option 
                key={index} 
                value={index}>
                {month}
                &nbsp;
                2026
            </option>)}
          </select>
          </div>
          
          <button className="rounded-full hidden md:block py-1.5 px-6 text-center  text-nowrap bg-primary">+ Add transaction</button>
        </div>
      </header>
  )
}