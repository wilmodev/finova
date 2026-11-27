import { addComma } from "@/app/utils/addComma"

interface SpendingCategoryCardProps {
  category: string,
  limit: number,
  spent: number
}



export default function SpendingCategoryCard({
  category,
  limit,
  spent
}: SpendingCategoryCardProps){
  const percentageSpent = (spent / limit) * 100;

  
  return(
  <div className="flex flex-col gap-2">
    <div className="flex justify-between">
      <div className='flex items-center gap-2'>
        <span className={`rounded-full w-2.5 h-2.5 ${percentageSpent >= 100 ? 'bg-alert' : 'bg-light-secondary'}`}/>
        <h3 className="text-text-primary ">
        {category}
      </h3>
      {percentageSpent >= 100 && <span className="bg-alert/20 rounded-xl px-2 font-semibold text-alert ">{percentageSpent.toFixed(0)}%</span>}
      </div>
      <span className="text-text-secondary">RD$ {addComma(spent)} / {addComma(limit)}</span>
      </div>
        <div className="bg-card-border/40 overflow-hidden
         rounded-full w-full h-2.5 ">
        <div 
        className=" rounded-full h-2.5"
        style={{width:percentageSpent + '%', backgroundColor:`${percentageSpent >= 100 ? 'var(--color-alert)' : 'var(--color-primary)'}` }}
      ></div>
      </div>
      
    </div>
  )
}
