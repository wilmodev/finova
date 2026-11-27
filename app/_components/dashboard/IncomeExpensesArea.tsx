'use client'
import demo from '@/app/_data/demo.json'
import { IncomeExpensesAreaChart } from "./IncomeExpensesAreaChart"
import { useState } from 'react';
import SpendingByCategory from '../ui/SpendingByCategory';

const monthLabel = (m: string) =>
  new Date(`${m}-01T00:00:00`).toLocaleString('en-US', { month: 'short' });

const current = demo.transactions.reduce(
  (acc, t) => {
    if (t.type === 'income') acc.income += t.amount;
    else acc.expenses += t.amount;
    return acc;
  },
  { income: 0, expenses: 0 },
);

const last6Month = 'month';
const lastYear = 'year';
export default function IncomeExpensesArea() {
  const [date, setDate] = useState<typeof last6Month | typeof lastYear>(last6Month)
  const chartData = [...demo.history, { month: '2026-11', ...current }].map(
  ({ month, income, expenses }) => ({ label: monthLabel(month), income, expenses }),
);

  return (
    <section className='flex flex-col xl:flex-row mt-5 gap-5'>
      <article className='flex-2 border rounded-3xl py-5 px-3 bg-card-background border-text-secondary/20  w-full'>
        <div className='flex mb-8'>
          <div className="md:flex mr-auto w-15/20 ">
            <div className=''>
              <h2 className='text-xl md:text-2xl font-semibold'>Income vs expenses</h2>
              <p className='text-text-secondary'>Last 6 months</p>
            </div>
            <div className="flex gap-2 ml-auto items-start ">
              <span className='flex gap-2 items-center'>
                <span className='w-3 h-3 rounded-full bg-secondary'></span>
                Income
              </span>
              <span className='flex gap-2 items-center'>
                <span className='w-3 h-3 rounded-full bg-alert'></span>
                Expenses
              </span>
            </div>
          </div>
          <div className='flex bg-background   h-fit  w-fit rounded-lg p-1 gap-2'>
            <button 
              className={`rounded-lg h-fit px-5 cursor-pointer  ${date === last6Month ? 'bg-text-secondary/25' : 'text-text-secondary' } font-sans text-center`}
              onClick={()=>setDate(last6Month)}
              >
            6M</button>
            <button 
            className={`rounded-lg h-fit px-5 cursor-pointer ${date === lastYear? 'bg-text-secondary/50':'text-text-secondary'} font-sans text-center`}
            onClick={()=>setDate(lastYear)}
            
            >1Y</button>
          </div>
        </div>
        <IncomeExpensesAreaChart data={date === last6Month ? chartData.slice(6) : chartData} />
      </article>

      <SpendingByCategory className='text-white text-xl' />
    </section>
  )
}