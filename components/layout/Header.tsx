import Image from 'next/image'
import finovaLogo from '@/public/finova-logo.svg'
import Menu from './Menu'
export default function Header() {
  return(
    <header className="flex justify-between items-center  w-full max-w-360 mx-auto h-min">
      <div className='z-40 '>
        <Image
          src={finovaLogo}
          alt="Finova"
          className="h-20 w-auto z-40 "
          priority
        />
      </div>

      <div className="hidden md:flex gap-3 py-2  px-4 ">
        <button className="text-text-secondary">Features</button>
        <button className="text-text-primary font-semibold">Log in</button>
        <button className="rounded-3xl px-5 py-2 text-text-primary bg-primary font-semibold ">Create account</button>
      </div>
      <Menu />
    </header>
  )
}