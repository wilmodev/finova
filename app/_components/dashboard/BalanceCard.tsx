import { addComma } from "@/app/utils/addComma"


export default function BalanceCard({balance, vsPrevieusMonthBalance, previeusMonth}:{
  balance: number,
  vsPrevieusMonthBalance:number,
  previeusMonth: string
}) {
  return(
      <div className="relative flex-1 xl:max-w-90 w-full overflow-hidden rounded-3xl bg-linear-to-br from-[#9F75FF] via-primary via-55% to-[#4C1D95] p-6 shadow-[0_12px_28px_rgba(124,58,237,0.35)]">
          <span aria-hidden="true" className="pointer-events-none absolute -top-24 -right-19 size-48 rounded-full bg-white/8" />
          <span aria-hidden="true" className="pointer-events-none absolute -bottom-23.5 -left-16 size-42 rounded-full bg-white/6" />
          <span aria-hidden="true" className="pointer-events-none absolute -bottom-12 right-12.5 size-25 rounded-full bg-white/5" />
        <div className="relative flex flex-col gap-2">
          <p>Total balance</p>
          <span className="text-5xl font-bold"> RD$ {addComma(balance)}</span>
          <div className="flex gap-1 items-center text-lg font-semibold rounded-full px-4 w-fit bg-[#9F75FF]"
          style={{
                color: vsPrevieusMonthBalance > 0 ? '#fff' : 'var(--color-alert)'
              }}
          >
            <div 
              className="w-3 h-3 bg-amber-50"
              style={{
                clipPath: vsPrevieusMonthBalance > 0 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'polygon(0% 0%, 100% 0%, 50% 100%)',
                backgroundColor: vsPrevieusMonthBalance > 0 ? '#fff' : 'var(--color-alert)'
              }}
            />
            {String(vsPrevieusMonthBalance).replace(/-/g, '')}% vs {previeusMonth}
          </div>
        </div>
      </div>
  )
}