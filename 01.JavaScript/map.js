const map1 = new Map([['key1','value1'],['key2','value2']]);
console.log(map1)

const map2 = new Map([[1,2]]);
console.log(map2)

const map3 = new Map([['key1','value1'],['key1','value2']]);
console.log(map3)

const {size} = new Map([['key1','value1'],['key2','value2']])
console.log(size)

const map4 = new Map();
console.log(map4)
map4.set('key1','value1').set('key2','value2');
console.log(map4)

const map5 = new Map();
const lee = {name: 'lee'}
const kim = {name: 'kim'}
map5.set(lee, 'dev').set(kim, 'des')
console.log(map5.clear())
console.log(map5)

let map6 = new Map();
map6.set(0,'zero');
map6.set(1,'one');
map6.forEach((value, key) => {
    console.log(value, key)
});

const scores = new Map([['kor',85],['eng',90],['math',80]]);
let sum = 0;
let ava;
scores.forEach(element => {
    sum += element;
});
ava = sum / scores.size;
console.log(sum, ava);

const book = new Map([['title','유럽 책문탐'],['author','한미화'],['price','23000']]);
let txt = '';
book.forEach((value, key) => {
    txt += value + ":" + key + '\n'
});
console.log(txt);

const numb = new Set([3,7,12,3,12,3]);
console.log(numb) 
