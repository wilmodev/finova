import demo from '@/app/_data/demo.json'
import TransactionCard from '../ui/TransactionCard';
const recentTransactions = demo.transactions.map((e)=>{
  const category = demo.categories.find((i)=>i.id == e.categoryId)
  const date = new Date(e.date);
  const formattedDate = date.toLocaleDateString('en-US', {
  month: 'short',
  day: 'numeric'
});
  return{
    id:e.id,
    date: formattedDate,
    category:category?.name,
    account:demo.accounts.find((a)=> a.id == e.accountId)?.name,
    amount: e.type === 'expense' ? e.amount * -1 : e.amount,
    icon: category?.icon || 'credit-card',
    name:e.title
  }
}).slice(0,5)

export default function Transactions() {
  return (
    <section className='text-text-secondary flex flex-col w-full flex-2 mt-10 border rounded-3xl p-6  bg-card-background border-text-secondary/20'>
     <div className='flex justify-between items-center'>
       <h2 className='text-white text-2xl mb-5 font-semibold'>Recent transactions</h2>
      <button className='font-bold text-light-primary'>
        View all →
      </button>
     </div>
      <div className='text-text-secondary 2xl:flex hidden  justify-between'>
        <h3 className='w-60 ml-13 '>TRANSACTION</h3>
        <h3 className='w-20'>DATE</h3>
        <h3 className='w-30 text-center'>ACCOUNT</h3>
        <h3 className='w-50 text-right'>AMOUNT</h3>
      </div>
      <div className='flex flex-col mt-5 gap-2 '>
      {recentTransactions.map((e,i)=>
      <TransactionCard 
        key={i}
        icon={e.icon}
        amount={e.amount}
        name={e.name || ''}
        category={e.category || ''}
        account={e.account || ''}
        date={e.date}

      />)}
    </div>
    </section>
  )
}