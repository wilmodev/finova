import { addComma } from "@/app/utils/addComma"
export default function ExpensesCard({vsPrevieusMonthExpenses, previeusMonth, expenses}:{
  vsPrevieusMonthExpenses:number,
  previeusMonth: string,
  expenses:number

}) {
  return (
    <article className="rounded-3xl p-5 flex w-full flex-1 h-full flex-col gap-2 border   bg-card-border border-text-secondary/20">
          <div className='flex gap-2 items-center'>
              <svg 
                className="text-light-secondary w-10 h-10 p-2 rounded-full"
                style={{
                  color: vsPrevieusMonthExpenses > 0 ? 'var(--color-light-secondary)' : 'var(--color-alert)',
                  backgroundColor: vsPrevieusMonthExpenses > 0 ? '#221548' : '#2E1330',
                  rotate: vsPrevieusMonthExpenses > 0 ? '0deg' : '180deg'
                }}
              >
                <use href="/icons.svg#icon-arrow"/>
              </svg>
            
            <span className="text-text-secondary ">Expenses</span>
          </div>
          <div>
          <span className="text-xl md:text-2xl font-semibold text-text-primary ">RD$ {addComma(expenses)}</span>
          <div className="flex gap-1 items-center text-sm font-semibold rounded-full  w-fit"
              style={{
                    color: vsPrevieusMonthExpenses > 0 ? 'var(--color-light-secondary)' : 'var(--color-alert)'
                  }}
              >
                <div 
                  className="w-3 h-3 bg-amber-50"
                  style={{
                    clipPath: vsPrevieusMonthExpenses > 0 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'polygon(0% 0%, 100% 0%, 50% 100%)',
                    backgroundColor: vsPrevieusMonthExpenses > 0 ? 'var(--color-light-secondary)' : 'var(--color-alert)'
                  }}
                />
                {String(vsPrevieusMonthExpenses).replace(/-/g, '')}% vs {previeusMonth}
              </div>
          </div>  
        </article>
  )
}