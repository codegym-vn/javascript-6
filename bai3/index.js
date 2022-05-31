let r =  parseFloat(prompt("Enter the r"));

let diameter = 2*r;
let perimeter = 2*Math.PI*r;
let area = Math.PI*Math.pow(r,2);

document.write("Đường kính: " + diameter + "</br>");
document.write("Chu vi: " + perimeter + "</br>");
document.write("Diện tích: " + area );
