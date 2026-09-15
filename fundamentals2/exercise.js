const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/* Write your code below. Good luck! 🙂 */

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tips=[]
let totals=[]

for(let i=0; i<bills.length; i++){
    tips.push(calcTip(bills[i]))
    totals.push(bills[i]+tips[i])

    
}
console.log(bills, tips, totals)

let calcAverage = (arr) => {
    let sum = 0;
    for (let i=0 ;  i<arr.length; i++){
        sum +=arr[i]
    }
    return sum/arr.length
};

console.log(calcAverage([bills[0]]))