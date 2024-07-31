
// function callback() {
//     console.log("call back")
// }


// setTimeout(callback, 1000);
// console.log("작업을 수행함");

// function getUsers(callback) {
//     setTimeout(() => {
//         callback([
//             {name : 'kim', email : 'kim@avc.com'},
//             {name : 'lee', email : 'lee@avc.com'},
//             {name : 'park', email : 'park@avc.com'}
//         ])
//     },1000);
// }
// function findUser(name, callback) {
//     getUsers(users => {
//         const user = users.find(user => user.name === name)
//         callback(user.email);
//     })
// }
// let user = findUser('kim', user => {
//     console.log(user)
// })

// let greeting = document.querySelector('#greeting')
// greeting.addEventListener('click',Hello)
// function Hello() {
//     alert('hi')
// }

// let success = true;
// function getUser() {
//     return new Promise((resolve, reject) => {
//         if (success) {
//             setTimeout(() => {
//                 resolve (
//                     [
//                         {name : 'kim', email : 'kim@avc.com'},
//                         {name : 'lee', email : 'lee@avc.com'},
//                         {name : 'park', email : 'park@avc.com'}
//                     ]
//                 )   
//             }, 1000);
//         } else {
//             reject('fail')
//         }
//     })
// }

// let promise = getUser();
// promise
//     .then(users => users.find(user => user.name === 'kim'))
//     .then(user => console.log(user.email))
//     .catch(error => console.log(error))
//     .finally(() => console.log('finish'))

// const p1 = new Promise((resolve, reject) => setTimeout(() => resolve(10), 2000))
// const p2 = new Promise((resolve, reject) => setTimeout(() => resolve(20), 1000))
// const p3 = new Promise((resolve, reject) => setTimeout(() => reject(30), 3000))
// let promises = [p1, p2, p3]

// Promise.allSettled(promises)
// .then(results => {
//     const fulfilledResult = results.filter(result => result.status === 'furfilled')
//     .map(result => result.value)
//     const total = fulfilledResult.reduce((sum, value) => sum + value, 0);
//     console.log(`result : ${fulfilledResult}`)
//     console.log(`total : ${total}`)
// })

// function getUser() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve (
//                 [
//                     {name : 'kim', email : 'kim@avc.com'},
//                     {name : 'lee', email : 'lee@avc.com'},
//                     {name : 'park', email : 'park@avc.com'}
//                 ]
//             )   
//         }, 2000);
//     })
// }
// function  findUser(users) {
//     return new Promise((resolve, reject) => {
//         console.log(users)
//         setTimeout(() => {
//             resolve(users.find(user => user.name === 'kim'))   
//         }, 1000);
//     })
// }
// function getEmail(user) {
//     return new Promise((resolve, reject) => {
//         console.log(user)
//         setTimeout(() => {
//            resolve(user.email) 
//         }, 3000);
//     })
// }
// getUser()
// .then(findUser)
// .then(getEmail)
// .then(console.log('finsihdhdhhdhdh'))

// const aa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('A')
//     }, 1000);
// })
// const bb = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('B')
//     }, 2000);
// })

// let fin = [aa, bb]
// Promise.all(fin).then((results) => {
//     console.log('fin',results)
// })

let success = true;
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (success) {
            resolve(5);
        } else {
            reject('error');
        }    
    }, 1000);
});
promise.then(
    num => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(num * 10)           
            }, 1500);
        })
    }
)
.then(result => {
    console.log(result)
})
.catch(error => {
    console.log(error)
})
