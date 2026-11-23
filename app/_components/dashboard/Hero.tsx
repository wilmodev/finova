"use client"
import { monthsFull } from "@/app/_data/months";
import { useDemo } from "@/app/_hooks/useDemo"
import { useEffect } from "react"
import BalanceCard from "./BalanceCard";
import IncomeCard from "./IncomeCard";
import ExpensesCard from "./ExpensesCard";
import SavingRateCard from "./SavingRateCard";
export default function Hero(){
  const {
      balance, 
      previusMonth,
      vsPrevieusMonth,
      incomes,
      expenses,
      savingRate 
    } = useDemo((state)=> state);

  const previeusMonthFormatted = monthsFull[Number(previusMonth.month.split('-')[1]) -1] ;
  
  const calcs = useDemo((state)=> state.calcs)
  useEffect(()=>{
    calcs() 
  }, [calcs])
  
  if(!balance || !previusMonth || !vsPrevieusMonth || !incomes || !expenses ||!savingRate){
    return null}
  return(
    <section className="mt-3 pr-2 flex flex-col xl:flex-row gap-4">
      <BalanceCard 
            balance={balance} 
            vsPrevieusMonthBalance={vsPrevieusMonth.balance}
            previeusMonth={previeusMonthFormatted}
            />
      <div className='flex flex-col flex-2 w-full xl:flex-row gap-4'>
        <div className="flex flex-2 gap-3">
            <IncomeCard 
              income={incomes}
              vsPrevieusMonthIncome={vsPrevieusMonth.income}
              previeusMonth={previeusMonthFormatted}
            />
            <ExpensesCard 
              expenses={expenses}
              vsPrevieusMonthExpenses={vsPrevieusMonth.expenses}
              previeusMonth={previeusMonthFormatted}
            />
            
        </div>
        <SavingRateCard 
          saved={balance}
          savingRate={savingRate}
            />
      </div>
    </section>
  )
}