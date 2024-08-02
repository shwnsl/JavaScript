// function func(event) {
//     let text = event.target.tagName;
//     document.getElementById('show').innerHTML = text;
// }

const item = document.querySelector('.item');
item.addEventListener('dragstart', (e) => {
    console.log('drag start')
})
item.addEventListener('drag', (e) => {
    console.log('dragging')
})

const container = document.querySelector('.container');
container.addEventListener('dragenter', (e) => {
    console.log('drag enter')
})
container.addEventListener('dragleave', (e) => {
    console.log('drag leave')
})
container.addEventListener('dragover', (e) => {
    console.log('drag over')
    e.preventDefault();
})
container.addEventListener('drop', (e) => {
    console.log('drag drop')
})

const container2 = document.querySelector('.container2');
container2.addEventListener('dragenter', (e) => {
    console.log('drag enter2')
})
container2.addEventListener('dragleave', (e) => {
    console.log('drag leave2')
})
container2.addEventListener('dragover', (e) => {
    console.log('drag over2')
    e.preventDefault();
})
container2.addEventListener('drop', (e) => {
    console.log('drag drop2')
})

document.getElementById('btn').onclick = function () {
    const parent = document.getElementById('parent');
    const newEle = document.createElement('div');
    newEle.textContent = 'New Child';
    parent.appendChild(newEle);
}

document.getElementById('btn2').onclick = function () {
    const parentEl = document.getElementById('parent');
    const newEl = document.createElement('div');
    newEl.textContent = 'New Child2';

    const reference = document.getElementById('reference');
    parentEl.insertBefore(newEl, reference);
}

const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
    })
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })
});

containers.forEach((container) => {
    container.addEventListener('dragover', (e) => {
        e.preventDefault();
        const afterEle = getDragAfter(container, e.clientX);
        const draggable = document.querySelector('.dragging');
        if(afterEle === undefined){
            container.appendChild(draggable)
        }else{
            container.insertBefore(draggable, afterEle)
        }
    })
});

function getDragAfter(container, x) {
    const draggableEle = [
        ...container.querySelector('.draggable:not(.dragging)')
    ]
    return draggableEle.reduce((child) => {
        const box = child.getBoundingClientRect();
        const offset = x - box.left - box.width / 2;
        if (offset < 0 && offset > closest.offset) {
            return {offset : offset, element: child};
        } else {
            return closest;
        }
    }, {offset: Number.NEGATIVE_INFINITY}
) 
}
