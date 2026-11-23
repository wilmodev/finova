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
    <article className="flex flex-col gap-2">
    <div className="flex justify-between">
      <h3 className="text-text-primary ">{category}</h3>
      <span className="text-text-secondary">RD$ {addComma(spent)} / {addComma(limit)}</span>
      </div>
        <div className="bg-card-border/40 overflow-hidden
         rounded-full w-full h-4 ">
        <div 
        className=" rounded-full h-4"
        style={{width:percentageSpent + '%', backgroundColor:`${percentageSpent >= 100 ? 'var(--color-alert)' : 'var(--color-primary)'}` }}
      ></div>
      </div>
      
    </article>
  )
}
