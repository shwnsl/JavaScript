let lis = document.querySelectorAll("li");
let btns = document.querySelectorAll("button");

function disappear({target}) {
    target.classList.toggle('active')
}
lis.forEach(li => {
    li.onclick = disappear;
});

// function appear({target}) {
//     target.closest('li').classList.remove('active')
// }
// btns.forEach(btn => {
//     btn.onclick = appear
// });

