// function Point(x, y) {
//     this.x = x;
//     this.y = y;
// }
// Point.prototype = {
//     toString: function() {
//         return `${this.x}, ${this.y}`
//     }
// }

// let pt1 = new Point(10, 20)
// let pt2 = new Point(100, 200)
// console.log(pt1.toString());
// console.log(pt2.toString());
// console.log(pt1 instanceof Point);
// console.log(pt2 instanceof Point);

// function Circle(radius) {
//     this.radius = radius;
// }
// Circle.prototype.getArea = function () {
//     return Math.PI * this.radius **2;
// }
// const circle1 = new Circle(1);
// const circle2 = new Circle(2);
// console.log(circle1.getArea === circle2.getArea)

// class Person {
//     constructor (name){
//         this.name = name;
//     }
//     sayHi(){
//         console.log(`Hi ${this.name}`)
//     }
//     static sayHello() {
//         console.log('hello')
//     }
// }

// const me = new Person('lee');
// me.sayHi();
// Person.sayHello();

// const Person = (function() {
//     function Person(name) {
//         this.name = name;
//     }
//     Person.prototype.sayHi = function () {
//         console.log('hi' + this.name)
//     }
//     Person.sayHello = function () {
//         console.log('hello')
//     }
//     return Person;
// }())
// const me1 = new Person('Lee');
// console.log(me1.name);
// me1.sayHi();
// Person.sayHello();

// class Square {
//     constructor (width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     area() {
//         return this.width * this.height;
//     }
//     static areas(width,  height) {
//         return width * height;
//     }
// }
// const square = new Square(10, 10);
// console.log(square.area())
// console.log(Square.areas(20, 10))

// const Person = {
//     firstName : 'junhee',
//     lastName : 'roh',

//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     },
//     set fullName(name) {
//         [this.firstName, this.lastName] = name.split('')
//     }
// }
// console.log(Person.fullName)

// class Person {
//     #name = '';
//     constructor(name){
//         this.#name = name;
//     }
//     get name(){
//         return this.#name.trim()
//     }
// }
// const me = new Person('lee');
// console.log(me.name)

class Vehicle {
    constructor(name, wheel){
        this.name = name;
        this.wheel = wheel;
    }
}

const myVehicle = new Vehicle('volvo', 8)
console.log(myVehicle)

class Bicycle extends Vehicle {
    constructor (name, wheel) {
        super(name, wheel)
    }
}
const myBicycle = new Bicycle('삼천리', 9)
console.log(myBicycle)

class Car extends Vehicle {
    constructor(name, wheel, license) {
        super (name, wheel)
        this.license = license;
    }
}
const myCar = new Car('람보르기',6,true);
console.log(myCar)

class Base {
    constructor(name) {
        this.name = name;
    }
    sayHi(){
        return `Hi ${this.name}`
    }
}

class Derived extends Base {
    sayHi() {
        return `${super.sayHi()}`
    }
}
const derived = new Derived('jun')
console.log(derived.sayHi())

// class Book {
//     constructor (title, author, price) {
//         this.title = title;
//         this.author = author;
//         this.price = price;
//     }
//     hhh() {
//         console.log(`${this.title} , ${this.author} ,${this.price}`)
//     }
// }

// const hhh = new Book('ghghg','sdfsdfsd',25000)
// console.log(hhh)

function Book(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
}
Book.prototype.year = '1929';

class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    hii() {
        console.log(`안녕하세요, 제 이름은${this.name}이고, 나이는 ${this.age}살 입니다`)
    }
}
const ans = new Person1('노주니',32)
console.log(ans.hii())

class Calculator {
    static add(a, b) {
        return a + b;
    }
    static minus(a,b) {
        return a - b;
    }
    
}
console.log(Calculator.add(10,5))
console.log(Calculator.minus(10,5))

function Calculator2() {}
Calculator2.add2 = (a,b) => {return a + b;}
Calculator2.minus2 = (a,b) => {return a - b;}
console.log(Calculator2.add2(20,7))
console.log(Calculator2.minus2(20,7))