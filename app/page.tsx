import SpendingByCategory from "@/app/_components/ui/SpendingByCategory";
import IncomeVsExpenses from "@/app/_components/home/IncomeVsExpenses";
import Header from "@/app/_components/layout/Header";
import Footer from "@/app/_components/layout/Footer";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col overflow-x-hidden items-center justify-center max-w-300 w-19/20 m-auto ">
          <section className="max-w-125 flex flex-col items-center justify-center gap-8 mt-20">
            <span className="py-1 px-7 border border-card-border text-text-secondary rounded-full">Income, expenses and goals in one place</span>
            <h1 className="text-text-primary text-center w-100 text-5xl  sm:text-6xl sm:w-120 lg:text-7xl  lg:w-130 font-bold">
              Your money, 
              under <span className="text-light-primary">control.</span>
            </h1>
            <p className="text-text-secondary w-78 sm:w-85 md:w-90 text-center sm:text-xl">
              Log every transaction, set budgets and see
              what&apos;s left before the month ends. 
            </p>
            <div className="gap-5 flex ">
              <button className="rounded-3xl px-7 font-semibold py-2 bg-primary text-text-primary ">
                Get started
              </button>
               <Link
                href={'/dashboard'}
               >
                <button className="rounded-3xl cursor-pointer px-7 font-semibold py-2 border border-card-border  text-text-primary ">
                View demo
              </button>
               </Link>
            </div>
          </section>

        <section className="bg-card-border/30 my-10 flex flex-col lg:flex-row gap-5  w-full p-5 rounded-2xl border border-card-border">
          <div className="flex flex-col lg:flex-2 gap-5 w-full ">
            <div className="flex flex-col xl:flex-row gap-7 ">
              <article className="border flex-1 bg-background w-full h-fit  border-card-border rounded-2xl px-4 py-2 flex flex-col">
                <h2 className="text-text-secondary">Balance</h2>
                <span className="text-white font-bold text-4xl">RD$ 48,250</span>
              </article>

              <div className="flex flex-2 gap-2">
                <article className="border bg-background h-fit w-full border-card-border rounded-2xl px-4 py-2 flex flex-col">
                <h2 className="text-text-secondary">Income</h2>
                <span className="text-light-secondary font-bold text-2xl">RD$ 85,00</span>
              </article>

              <article className="border bg-background h-fit w-full border-card-border rounded-2xl px-4 py-2  flex flex-col">
                <h2 className="text-text-secondary">Expenses</h2>
                <span className="text-alert font-bold text-2xl">RD$ 36,750</span>
              </article>
              </div>
            </div>
              <IncomeVsExpenses />
          </div>
            <SpendingByCategory />
          </section>
      </main>
      <Footer />
    </>
  );
}
