interface SpendingCategoryCardProps {
  category: string,
  limit: number,
  spent: number
}

const formatAmount = (number: number): string=>{
  if(number >= 1000 && number < 10000) return String(number).charAt(0) + ',' + String(number).slice(1)
  else if (number >= 10000) return String(number).slice(0,2) + ',' + String(number).slice(2)
  else return String(number)
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
      <span className="text-text-secondary">RD$ {formatAmount(spent)} / {formatAmount(limit)}</span>
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
