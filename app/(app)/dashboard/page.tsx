
const monthsFull = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


export default function Dashboard(){
  return(
    <main className="pt-7 w-full">
      <header className="flex items-center justify-between w-full px-5">
        <div>
          <h1 className="font-bold text-3xl">Dashboard</h1>
          <p className="text-zinc-400">Your November overview</p>
        </div>
        <div className="flex gap-4">
          <select name="select" className=" rounded-2xl focus:border-none focus:outline-0">
            {monthsFull.map((month,index)=> 
              <option 
                key={index} 
                value={index}>
                {month}
                &nbsp;
                2026
            </option>)}
          </select>
          <button className="rounded-full py-1.5 px-6 text-center  text-nowrap bg-primary">+ Add transaction</button>
        </div>
      </header>
    </main>
  )
}