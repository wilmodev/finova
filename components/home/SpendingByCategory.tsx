import SpendingCategoryCard from "./SpendingCard"

const categorySpending = [
  {
    name: 'Food',
    limit: 16000,
    spent: 12400
  },
  {
    name: 'Housing',
    limit: 12000,
    spent: 9800
  },
  
  {
    name: 'Transport',
    limit: 12000,
    spent: 9800
  },
  {
    name: 'Leisure',
    limit: 8000,
    spent: 8450
  },
  
]

export default function SpendingByCategory() {
  return(
    <section className="border border-card-border w-full lg:flex-1 rounded-2xl bg-background p-4">
            <h2 className="text-text-secondary mb-6">Spending by category</h2>
              <div className="flex flex-col gap-10">
              {categorySpending.map(e=> 
            <SpendingCategoryCard 
               limit={e.limit} 
               category={e.name} 
               spent={e.spent}
               key={e.name}
               />)}
              </div>
    </section>
  )
}
