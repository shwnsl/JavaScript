let divs = document.querySelector('div')
function changeContent() {
    divs.outerHTML = '<h1>fuck you~</h1><p>Bitch~</p>';
}

// const ele = document.getElementById('banana');
// const ele2 = document.getElementsByTagName('li');
// const ele3 = document.getElementById('banana');
// ele.style.color = 'yellow';
// [...ele2].forEach(ele => {ele.style.color = 'red'});

const elements =document.getElementsByClassName('fruit');
[...elements].forEach(ele => {ele.style.color = 'blue'});

const apple = document.getElementsByClassName('fruit apple');
[...apple].forEach(app => {app.style.color = 'red'})

const box = document.querySelector('.box');
box.addEventListener('click',function () {
    console.log('click')
    box.classList.toggle('active')
})

const boxes = document.querySelectorAll('.box');
boxes.forEach(function (box, index) {
    box.classList.add(`order-${index+1}`)
});

const div = document.getElementById('my_div')
const clearBtn = document.getElementById('clearbtn')
const result = document.getElementById('result')

div.addEventListener('click', (ev) => {
    result.innerHTML += '<div>click</div>'
})
div.addEventListener('mousedown', (ev) => {
    result.innerHTML += '<div>mouse down</div>'
})
div.addEventListener('mouseup', (ev) => {
    result.innerHTML += '<div>mouse up</div>'
})
clearBtn.addEventListener('click', () => {
    result.innerHTML = ''
})

function sayHi(name) {
    alert(`Hi~ ${name}`)
}

const btnClk = document.querySelector('#clk');
const handleClick = () => alert('click');
btnClk.onclick = handleClick;
btnClk.removeEventListener('click', handleClick)
btnClk.onclick = null;
// btnClk.addEventListener('click',function add() {
//     alert('click')
//     btnClk.removeEventListener('click',add)
// })

const msg = document.querySelector('.message');

function showCoord(e) {
    msg.textContent = `clientX : ${e.clientX} , clientY : ${e.clientY}`
}
//document.onclick = showCoord;

const fruits = document.getElementById('fruits')
function activate({target}) {
    if(!target.matches('#fruits > li')) return;
    [...fruits.children].forEach(fruit => {
        fruit.classList.toggle('active', fruit === target)
    })
}
fruits.onclick = activate;

const boxs = document.querySelector('.boxs');
const initialMousePos = {x : 0, y : 0};
const offset = {x : 0, y : 0}; 

// const move = e => {}

// boxs.addEventListener('mousedown', e => {
    //     initialMousePos.x = e.clientX - offset.x;
    //     initialMousePos.y = e.clientY - offset.y;
    
    //     document.addEventListener('mousemove', move)
    // })
document.addEventListener('click', e => {
    const boxW = boxs.offsetWidth;
    const boxH = boxs.offsetHeight;
    const newX = e.clientX - boxW/2;
    const newY = e.clientY - boxH;
    // initialMousePos.x = e.clientX - offset.x;
    // initialMousePos.y = e.clientY - offset.y;
    // offset.x = e.clientX - initialMousePos.x;
    // offset.y = e.clientY - initialMousePos.y;
    offset.x = newX;
    offset.y = newY;
    boxs.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0)`;
        
    //document.addEventListener('mousemove', move)
})
// document.addEventListener('mouseup', () => {
//     document.removeEventListener('mousemove', move)
// })