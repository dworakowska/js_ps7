let num = "A123456";
let digits = num.toString().split("");
console.log(digits);

let array = digits.map(Number).filter(Number);
console.log(array);
