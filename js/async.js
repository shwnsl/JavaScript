// let hello = async () => 'hii'
// hello()
// .then(console.log)

// class Greeter{
//     async sayHello() {
//         return 'hello'
//     }
// }
// const greeter = new Greeter();
// greeter.sayHello()
// .then(console.log)

// async function hello() {
//     return Promise.resolve('hi')
// }
// hello()
// .then(console.log);

// async function hello() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {resolve('hii')});
//     })
// }
// hello()
// .then(console.log)

// async function hello() {
//     return new Promise((resolve, reject) => [
//         setTimeout(() => reject('거부'),3000)
//     ])
// }

// async function display() {
//     try{
//         let result = await hello();
//         console.log(result)
//     }catch(e){
//         console.log(e)
//     }
// }
// display();

function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (
                [
                    {name : 'kim', email : 'kim@avc.com'},
                    {name : 'lee', email : 'lee@avc.com'},
                    {name : 'park', email : 'park@avc.com'}
                ]
            )   
        }, 2000);
    })
}

function findUser(users, name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(users.find(user => user.name === name))   
        },1000)
    })
}

function getEmail(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(user.email);
        },3000)
    })
}
async function getUserEmail(name) {
    let users = await getUser();
    let user = await findUser(users, name);
    let email = await getEmail(user);
    return email;
}
async function displayUserEmail() {
    let email = await getUserEmail('kim')
    console.log(email)
}
displayUserEmail();