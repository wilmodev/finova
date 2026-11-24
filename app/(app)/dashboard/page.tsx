import Header from "@/app/_components/dashboard/Header"
import Hero from "@/app/_components/dashboard/Hero"
import demo from '@/app/_data/demo.json'
import { IncomeExpensesAreaChart } from "@/app/_components/dashboard/IncomeExpensesAreaChart"


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

export const chartData = [...demo.history, { month: '2026-11', ...current }].map(
  ({ month, income, expenses }) => ({ label: monthLabel(month), income, expenses }),
);
export default function Dashboard(){
  return(
    <main className="w-19/20 lg:w-15/20 max-w-7xl pb-40 mx-auto">
      <Header />
      <Hero />
      <IncomeExpensesAreaChart data={chartData}/>
     
    </main>
  )
}