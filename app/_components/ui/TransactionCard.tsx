import { addComma } from "@/app/utils/addComma"

type Props = {
  icon:string,
  name:string,
  date:string,
  account:string,
  amount: number,
  category: string
}

export default function TransactionCard({
  icon,
  name,
  date,
  account,
  amount,
  category
}:Props) {
  const isAmountPositive = amount > 0 

  return (
    <article className="flex justify-between border-t items-center border-text-secondary/10 pt-3 ">
      <div className="flex gap-3 w-80 lg:w-65 ">
          <svg className={`h-12 w-12 p-2  rounded-full ${isAmountPositive ? 'text-light-primary bg-light-primary/10' : 'text-alert bg-alert/10'}`}>
            <use href={`/transaction-icons.svg#icon-${icon}`}/>
          </svg>
       
        <div className='flex flex-col'>
          <h3 className='text-[14px]  md:text-xl text-white font-semibold'>{name}</h3>
          <p className="text-text-secondary">{category}</p>
        </div>
      </div>

      <p className='w-30 hidden 2xl:block text-center'>{date}</p>
      <p className='w-30 hidden 2xl:block text-center'>{account}</p>
      <data 
        value={amount}
        className={`font-semibold w-50 text-right text-sm md:text-2xl  ${isAmountPositive ? 'text-light-primary' : 'text-alert'}`}
        > {isAmountPositive ? 'RD$ ' +  addComma(amount) : '-RD$ ' + addComma(amount * -1)}</data>
    </article>
  )
}