import Header from "@/app/_components/dashboard/Header"
import Hero from "@/app/_components/dashboard/Hero"
import IncomeExpensesArea from "@/app/_components/dashboard/IncomeExpensesArea"
import SavingGoals from "@/app/_components/dashboard/SavingGoals"
import Transactions from "@/app/_components/dashboard/Transactions"
export default function Dashboard(){
  return(
    <main className="w-19/20 lg:px-5 lg:w-15/20 max-w-7xl pb-40 mx-auto">
      <Header />
      <Hero />
      <IncomeExpensesArea />
      <section className="flex flex-col xl:flex-row gap-5">
        <Transactions />
        <SavingGoals />
      </section>
      
     
    </main>
  )
}