class Sequence {
    constructor(from = 0, to = Infinity, interval = 1) {
        this.from = from
        this.to = to
        this.interval = interval
    }
    *[Symbol.iterator]() {
        let num = this.from;
        while (num <= this.to) {
            yield num;
            num += this.interval;
        }          
    }
}
let evenNumbers = new Sequence(2, 10, 2)
// for (const num of evenNumbers) {
//     console.log(num)
// }
function* generateIterables(...iterables) {
    for (const iterable of iterables) {
        for (const item of iterable) {
            yield item;
        }
    }
}
function* generateIterables(...iterables) {
    for (const iterable of iterables) {
        yield* iterable
    }
}
let evenNumberss = new Sequence(2, 10, 2);
let generator = generateIterables("abc",[1, 2, 3]) 
let arr = [...generator]
console.log(arr)