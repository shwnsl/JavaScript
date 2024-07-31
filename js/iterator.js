// let arr = [1,2,3,4,5];
// let iterator = arr[Symbol.iterator]();
// console.log(iterator)
// let result = iterator.next();
// console.log(result);

// while (!result.done) {
//     console.log(result.value)
//     result = iterator.next();
// }

// let copy = [...iterator];
// console.log(copy)

class Sequence {
    constructor (from = 0, to = Infinity, interval =1) {
        this.from = from
        this.to = to
        this.interval = interval
    }
    [Symbol.iterator]() {
        let next = this.from;
        return {
            next: () => {
                if(next <= this.to) {
                    let result = {value: next, done: false};
                    next += this.interval;
                }
            }
        }
    }
}

let evenNumber = new Sequence(2,10,2)
let iterator2 = evenNumber[Symbol.iterator]();
let result2 = iterator2.next();
console.log(result2);

while (!result2.done) {
    console.log(result2.value)
    result2 = iterator2.next();
}

for (const num of evenNumber) {
    console.log(num)
}