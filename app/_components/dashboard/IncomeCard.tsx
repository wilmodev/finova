import { addComma } from "@/app/utils/addComma"

export default function IncomeCard({income, vsPrevieusMonthIncome, previeusMonth}:{
  income: number,
  vsPrevieusMonthIncome:number,
  previeusMonth: string
}) {
  return (
    <article className="rounded-3xl w-full flex-1 p-5 flex flex-col gap-2 border h-full   bg-card-border border-text-secondary/20">
      <div className='flex gap-2 items-center'>
          <svg 
            className="text-light-secondary w-10 h-10 p-2 rounded-full"
            style={{
              color: vsPrevieusMonthIncome > 0 ? 'var(--color-light-secondary)' : 'var(--color-alert)',
              backgroundColor: vsPrevieusMonthIncome > 0 ? '#221548' : '#2E1330',
              rotate: vsPrevieusMonthIncome > 0 ? '0deg' : '180deg'
            }}
          >
            <use href="/icons.svg#icon-arrow"/>
          </svg>
        
        <span className="text-text-secondary ">income</span>
      </div>
      <div>
      <span className="text-xl md:text-2xl font-semibold text-text-primary ">RD$ {addComma(income)}</span>
      <div className="flex gap-1 items-center text-sm font-semibold rounded-full  w-fit"
          style={{
                color: vsPrevieusMonthIncome > 0 ? 'var(--color-light-secondary)' : 'var(--color-alert)'
              }}
          >
            <div 
              className="w-3 h-3 bg-amber-50"
              style={{
                clipPath: vsPrevieusMonthIncome > 0 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'polygon(0% 0%, 100% 0%, 50% 100%)',
                backgroundColor: vsPrevieusMonthIncome > 0 ? 'var(--color-light-secondary)' : 'var(--color-alert)'
              }}
            />
            {String(vsPrevieusMonthIncome).replace(/-/g, '')}% vs {previeusMonth}
          </div>
      </div>  
    </article>
  )
}