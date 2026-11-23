import { create } from "zustand";
import demo from '@/app/_data/demo.json'
type VsPreviousMonth = {
  income: number,
  expenses: number,
  balance: number
}

interface UseDemo{
  demo: typeof demo;
  calcs: ()=> void;
  expenses: number | null;
  incomes: number | null;
  balance: number | null;
  savingRate: number | null;
  previusMonth: typeof demo.history[0];
  vsPrevieusMonth: VsPreviousMonth | null;
}

export const useDemo = create<UseDemo>()((set, get)=>({
  demo: demo,
  expenses: null,
  incomes: null,
  balance: null,
  savingRate: null,
  previusMonth: demo.history[demo.history.length - 1],
  vsPrevieusMonth: null,
  
  calcs:()=>{
  const { demo } = get()
  const expenses = demo.transactions.filter(e=> {
    if(e.type === 'expense') return e
   }).reduce((acc, e) => acc + e.amount, 0)

   const incomes = demo.transactions.filter(e=> {
    if(e.type === 'income') return e
   }).reduce((acc, e) => acc + e.amount, 0)
  const previusMonth = get().previusMonth

   const balance = incomes - expenses;

   const savingRate = (balance / incomes) * 100 

   const previeusBalance = previusMonth.income - previusMonth.expenses;

   const vsPrevieusMonth:VsPreviousMonth = {
    balance: Number((((balance - previeusBalance) / previeusBalance) * 100).toFixed(1)),
    income: Number((((incomes - previusMonth.income) / previusMonth.income) * 100).toFixed(1)),
    expenses: Number((((expenses - previusMonth.expenses) / previusMonth.expenses) * 100).toFixed(1))
   }
   set({
      incomes: incomes,
      balance: balance, 
      savingRate: savingRate, 
      expenses: expenses, 
      vsPrevieusMonth: vsPrevieusMonth
    })
  }
}))