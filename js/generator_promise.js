
const myPromise = () => new Promise((resolve) => {
    resolve('value is')
})

function* gen() {
    let result = ''
    yield myPromise().then(data => {result = data})
    yield result + '1'
}

const asyncFunc = gen();
const val1 = asyncFunc.next();
console.log(val1)

val1.value.then(() => {
    console.log(asyncFunc.next())
})

async function* asyncSequence(from = 0, to = Infinity, interval = 1, timeout = 1) {
    let next = from;
    while (next <= to) {
        yield new Promise ((resolve, reject) => {
            setTimeout(() => resolve(next), timeout);
        })
        next += interval
    }
}

(async() => {
    let seq = asyncSequence(2, 10, 2)
    for await (let value of seq) {
        console.log(value)
    }
})()

function* taskGenerator() {
    yield new Promise((resolve) => setTimeout(() => resolve('1완료'),2000))
    yield new Promise((resolve) => setTimeout(() => resolve('2완료'),2000))
    yield new Promise((resolve) => setTimeout(() => resolve('3완료'),2000))
}

const taskDisplay = async () => {
    const tasks = taskGenerator();
    for (let task of tasks) {
        const result = await task;
        console.log(result)
    }
}
taskDisplay();

function userData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = {
                1 : {name : 'kim', age : 25},
                2 : {name : 'lee', age : 30},
                3 : {name : 'jung', age : 35}
            }
            const user = users[userId];
            if (user) {
                resolve(user);
            } else {
                reject("사용자를 찾을 수 없음")
            }
        }, 1000);
    })
}

async function getUser(userId) {
    try{
        const userDataGet = await userData(userId);
        console.log(`${userDataGet.name}, ${userDataGet.age}`)
    }catch(e){
        console.error(e)
    }
}
getUser(1)
