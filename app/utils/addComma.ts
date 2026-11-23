export const addComma = (number: number): string=>{
  if(number >= 1000 && number < 10000) return String(number).charAt(0) + ',' + String(number).slice(1)
  else if (number >= 10000 && number < 100000) return String(number).slice(0,2) + ',' + String(number).slice(2)
  else if (number >= 100000 && number < 1000000) return String(number).slice(0,3) + ',' + String(number).slice(3)
  else return String(number)
}