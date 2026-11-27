import SpendingCategoryCard from "./SpendingCategoryCard"
import demo from '@/app/_data/demo.json'

interface CategoryExpenses {
  limit:number,
  category: string,
  expenses: number
}

const categoriesExpenses:CategoryExpenses[] = [];

demo.budgets.forEach((e)=>{
  const categoryExpense:CategoryExpenses = {
    limit: e.limit,
    category: demo.categories.find((i)=> i.id === e.categoryId)?.name || '',
    expenses: demo.transactions.filter((c)=> c.categoryId === e.categoryId).reduce((acc,e)=> acc + e.amount , 0)
  }
  categoriesExpenses.push(categoryExpense);
})



export default function SpendingByCategory({ className }:{className?: string}) {
  return(
    <article className="border bg-card-background pb-7 border-text-secondary/20 w-full lg:flex-1 rounded-2xl p-4">
      <h2 className={`text-white font-semibold  ${className}`} >Spending by category</h2>
      <p className='text-text-secondary text-lg'>Spent / monthly limit</p>
        <div className="flex flex-col mt-5 gap-10">
        {categoriesExpenses.map((e, i)=> 
      <SpendingCategoryCard 
         limit={e.limit} 
         category={e.category} 
         spent={e.expenses}
         key={i}
         />)}
        </div>
    </article>
  )
}
