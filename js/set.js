const set = new Set();
console.log(set);

const set1 = new Set([1,2,3,3])
console.log(set1);

const uniq = array => [...new Set(array)];
console.log(uniq([2,1,2,3,4,5,4]))

const {size} = new Set([1,2,3,3])
console.log(size)

const set2 = new Set();
set2.add(1).add(2);
console.log(set2)

const set3 = new Set([1,2,3]);
console.log(set3.has(3))
set3.clear()
console.log(set3)

let odds = new Set([1,3,5,7,9]);
let sum = 0; 
for (const o of odds) {
    sum += o;
}
console.log(sum)

let product = 1;
odds.forEach(o => {
    product *= o;
});
console.log(product)

const userId = [101,102,101,103,102]
const uniqId = new Set(userId);
uniqId.forEach(uniq => {
    console.log(`ID : ${uniq}`)
});

const tags = ['java','javascript','css','html','css'];
const uniqTag = new Set(tags);
uniqTag.forEach(ut => {
    console.log(`tag:${ut}`)
});

const set4 = new Set([1,2,3]);
console.log([...set4])
const [a,...rest] = set4;
console.log(a, rest)

const s1 = new Set([1,2,3]);
const s2 = new Set([4,2,3]);
const union = new Set([...s1,...s2]);
const interSection = new Set([...s1].filter(x => s2.has(x)));
console.log(interSection)
const diff = new Set([...s1].filter(x => !s2.has(x)));
console.log(diff)

const student = new Set('I am a student');
console.log(student.size)