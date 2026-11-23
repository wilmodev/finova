import { SavingsRing } from "./SavingsRings"
import { addComma } from "@/app/utils/addComma"
export default function SavingRateCard({
  saved,
  savingRate
}:{
  savingRate:number,
  saved:number
}) {
  return (
    <article className="rounded-2xl items-center xl:flex-col xl:items-start p-5 h-full flex flex-1 w-full  gap-2 border 
      bg-card-border border-text-secondary/20">
        <div className='flex  gap-2 items-center'>
          <SavingsRing
            value={savingRate}
            className="size-8 text-light-primary"
          />    
        <div className='flex w-min items-center flex-wrap xl:flex-nowrap '>
          <span className="text-text-secondary text-nowrap">Savings rate</span>
          <span className="text-3xl font-semibold xl:hidden text-text-primary ">{savingRate.toFixed(1)}%</span>
          </div>
          
        </div>
        <span className="text-3xl font-semibold hidden xl:block text-text-primary ">{savingRate.toFixed(1)}%</span>
        <p className='text-zinc-400 ml-auto xl:ml-0'>RD$ {addComma(saved)} saved</p>
    </article>
  )
}