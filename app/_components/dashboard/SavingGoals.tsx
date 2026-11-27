import { addComma } from "@/app/utils/addComma";
import { SavingsRing } from "./SavingsRings";
import demo from '@/app/_data/demo.json'
import SpendingCategoryCard from "../ui/SpendingCategoryCard";

const savingGoals = demo.goals
const emergencyFund = demo.goals.find((e)=> e.name === 'Emergency fund')
const savingRate = emergencyFund ? (emergencyFund?.currentAmount / emergencyFund?.targetAmount) * 100 : 0

const date = new Date(emergencyFund?.deadline || '')
const formattedDate = date.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric'
});

export default function SavingGoals() {
  if(emergencyFund)
  return (
    <section className='w-full bg-card-background p-5 lg:mt-10 rounded-3xl border flex flex-col justify-between border-text-secondary/20 flex-1'>
      <div className='flex justify-between items-center text-white'>
        <h2 className='font-semibold text-2xl'>Savings goals</h2>
        <span className='px-3 rounded-full bg-light-primary/10 border border-light-secondary/40 font-semibold'>+ New</span>
      </div>
      <div className='flex gap-5 border-b border-text-secondary/20 py-5'>
        <SavingsRing value={savingRate} className='text-light-primary w-20 h-20'/>
        <div className='flex gap-2 flex-col '>
          <h3 className='font-semibold text-text-primary text-2xl'>Emergency Fund</h3>
          <p className='text-text-secondary'>RD${addComma(emergencyFund?.currentAmount)} of {addComma(emergencyFund?.targetAmount)}</p>
          <span className='text-light-primary font-semibold text-center rounded-full px-2 py-1 bg-primary/30'>{formattedDate}</span>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
    {savingGoals.map((e,i)=>
      <SpendingCategoryCard 
      category={e.name}
      limit={e.targetAmount}
      spent={e.currentAmount} 
      key={i}
      />)}
      </div>

    </section>
  )
}