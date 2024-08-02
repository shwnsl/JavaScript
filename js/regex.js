let str1 = "Discount rate : 30%"
let pattern = /\W/g;
let result = str1.match(pattern);
document.getElementById('show').innerHTML = result;