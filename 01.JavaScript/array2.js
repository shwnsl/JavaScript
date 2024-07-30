
const me = [1,2,3,4,5];
console.log(me)

const carSales = [300,400,450,500,600,650,620,680,580,580,350,450]
console.log(carSales)

let carSales2 = new Array(300,400,450,500,600,650,620,680,580,580,350,450);
console.log(carSales2)

let copy = Array.from(carSales)
console.log(copy)

let concat = [0,carSales,110,200,350]
console.log(concat)

let num = [..."0123456789"]
console.log(num)

let may = carSales[4];
console.log(may)
let june = carSales["5"];
console.log(june)
carSales[12] = -50;
console.log(carSales)

let a = [1,2,3,4,5]
let len = a.length;
console.log(len)
a.length = 0;
console.log(a)

let jan,feb,mar,rest;
[jan,feb,mar,...rest] = carSales;
console.log(jan,feb,mar)

let sum = 0;
for (const sale of carSales) 
    sum += sale;
let average = sum / carSales.length;
let round = average.toFixed(2);
console.log(round)

for (let [index, sale] of carSales.entries()) {
    if(index % 2 === 0) {
        sum += sale;
    }
} 

let average2 = sum / (carSales.length / 2);
console.log(average2)

let list = [4,5,6]
for (let i in list) {
    console.log(i)
    console.log('--------------')
}
for (let i of list) {
    console.log(i)
}

// const car = [
//     maker : 'Lamborgini',
//     color : 'black',
//     year : '2024'
// ]
// for (let prop in car) {
//     console.log(prop)
// }

let sum2 = 0;
carSales.forEach(sale => {
    {sum2 += sale}
});
let average3 = sum2 / carSales.length;
console.log(average3)

carSales.forEach((sale, index, array) => {
    array[index] = sale+50
});
console.log(carSales);

let newCarSales = carSales.map(sale => sale + 50);
console.log(newCarSales)
console.log(carSales)

let highSales = carSales.filter(sale => sale > 500);
console.log(highSales);

let evenSales = carSales.filter((sale, index) => index % 2 === 1)
console.log(evenSales);

let firstSale = carSales.find(sale => sale > 600)
console.log(firstSale)
let firstSaleIndex = carSales.findIndex(sale => sale > 600)
console.log(firstSaleIndex)

let everySale = carSales.every(sale => sale > 600)
console.log(everySale)

let anySale = carSales.some(sale => sale > 600)
console.log(anySale)

let sum3 = carSales.reduce((t1, t2) => t1 + t2, 0)
console.log(sum3)
let average4 = sum / carSales.length;
console.log(average4)

let high = carSales.reduce((t1, t2) => t1 > t2 ? t1 : t2)
console.log(high)

let flat = [1, [2, 3]].flat();
console.log(flat)

let message = ['시발','미친','개','새끼야']
let words = message.flatMap(msg => msg.split(''));
console.log(words)

const array1 = ['a','b','c']
const array2 = ['d','e','f']
const array3 = array1.concat(array2);
console.log(array3)

let original = [1,2,3]
let newArray;
newArray = original.concat(4,5)
newArray = original.concat([4,5],[6,7])
console.log(newArray);

let stack = [];
stack.push(1);
stack.push(2,3);
stack.pop();
stack.push(4)
stack.unshift(1)
stack.unshift(2,3)
stack.shift()
console.log(stack);

let numbers = [20,37,-21,32,-2]
let ans = numbers.filter(aa => aa > 30)

let aa = [1,2,3,4,5]
//aa.splice(0,2)
// /aa.splice(2)
//aa.splice(0,2,10,20)
console.log(aa);

let b = aa.slice(0,2)
let c = aa.slice(1,-1)
console.log(c);
console.log(aa);

let aaaa = new Array(5);
aaaa.fill(0);
//aaaa.fill(1,1);
aaaa.fill(1,1,-1);
console.log(aaaa);

let a1 = [0,1,2,3,2,1,0]
let b1 = a1.indexOf(2)
let c1 = a1.lastIndexOf(2)
let d1 = a1.indexOf(5)
console.log(d1)

let p = [0, true, 2, false, NaN]
let p1 = p.includes(true);
console.log(p1)

let fruits = ['apple','cherry','banana']
let f = fruits.sort()
console.log(f)
let e = [22,333,111,445]
let h = e.sort()
console.log(h)
let ee = e.sort((a,b) => a - b);
console.log(ee)

let join = [1,2,3]
let jj = join.join()
let jjj = join.join("")
console.log(jjj)

let score = [67,82,97,100,92]
for (let i = 0; i < score.length; i++) {
    console.log(score[i])    
    console.log('-------------')    
}
for (const i of score) {
    console.log(i)
}

let tel = ["010","1234","5678"]
let tel1 = tel.join("-")
console.log(tel1)

let color = ["빨","노","파","주"]
let col = color.shift()
let col2 = color+'/'+col
console.log(col2)

let arr = new Array(2)
for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(3)    
}
console.log(arr)

let arr1 = Array.from(new Array(2), () => new Array(3));
console.log(arr1)

arr1[0][0] = 1;
arr1[0][1] = 2;
arr1[0][2] = 3;
arr1[1][0] = 4;
arr1[1][1] = 5;
arr1[1][2] = 6;
console.table(arr1)

for (let i = 0; i < arr1.length; ++i) {
    for (let j = 0; j < arr[i].length; ++j) {
        console.log(arr1[i][j])        
    }    
}


const score1 = [[83,90,70,87], [87,93,62,83], [98,90,77,97]];
let summ ,ave;
let text = '';
for (let i = 0; i < score1.length; i++) {
    summ = 0;
    for (let j = 0; j < score1[i].length; j++) {
        summ += score1[i][j];        
    }
    ave = summ/score1[i].length
    text += i + '번째 학생의 합계:' + summ + '평균:' + ave; 
}
console.log(text)

const msco = [90,85,70,86,97];
let summ1 = 0;
let ave1;
for (let i = 0; i < msco.length; i++) {
    summ1 += msco[i]
}
ave1 = summ1 / msco.length;    
console.log(summ1)
console.log(ave1)

let temp = [7,-24,-8,10,17,-18]
let ttt = temp.sort((a,b) => a - b);
console.log(ttt[0])

let ap = [12,0,2,5,4]
let bp = [0,2,3,12,8]
let cp = [];
bp.forEach(element => {
    if (ap.includes(element)) {
        cp.push(element)
    }
});
console.log(cp)

const bum2 = [1,3,5];
let ccc = []
bum2.forEach(element => {
    ccc.push(element*10)
});
console.log(ccc)