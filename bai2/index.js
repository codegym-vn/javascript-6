let money =  parseInt(prompt("Enter the money"));
let interest_rate = parseFloat(prompt("Enter the interest rate"));
let years = parseInt(prompt("Enter the year"));

let total = money + (money*interest_rate/100)*years;

document.write("Số tiền nhận được là: " + total);
