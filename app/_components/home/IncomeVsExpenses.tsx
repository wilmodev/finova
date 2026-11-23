
const months = [
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
] as const


const incomesAndExpenses = [
  {
    month: months[0],
    income: 2000,
    expenses: 1500
  },
  {
    month: months[1],
    income: 4000,
    expenses: 2000
  },
  {
    month: months[2],
    income: 6000,
    expenses: 5000
  },
  {
    month: months[3],
    income: 7000,
    expenses: 3500
  },
  {
    month: months[4],
    income: 5000,
    expenses: 500
  },
  {
    month: months[5],
    income: 7000,
    expenses: 3500
  }
]


function IncomeVsExpensesCard({
  income,
  expenses,
  month
}: {
  income: number,
  expenses: number,
  month: (typeof months)[number] 
}){
  const h = (expenses / income) * 100

  return(
    <article className="flex flex-1 w-full flex-col items-center justify-center gap-2">
      <div className="flex gap-1 justify-center w-10 sm:w-15 md:w-20 items-end">
        <div className="w-5 h-40 sm:w-10  bg-light-secondary rounded"></div>
        <div 
          className="w-5 bg-alert sm:w-10 rounded"
          style={{height: h + '%'}}
        ></div>
      </div>
      <h3 >{month}</h3>
    </article>
  )
}

export default function IncomeVsExpenses(){
  return(
     <div className="border-card-border border rounded-2xl bg-background  flex-col flex gap-10 p-4">
              <h2 className="text-text-secondary">Income vs expenses · last 6 months</h2>

              <article className="relative  h-50 flex gap-2">
                <div className="flex w-full gap-2.5 absolute bottom ">
                  {incomesAndExpenses.map(e=> 
                  <IncomeVsExpensesCard 
                    key={e.month}
                    income={e.income} 
                    expenses={e.expenses} 
                    month={e.month}
                    />)}
                  
                </div>
                
              </article>
            </div>
  )
}