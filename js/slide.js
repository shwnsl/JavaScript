let imgs = document.querySelectorAll('img');
let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
let current = 0;

prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlide (n) {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].classList.remove('active');
    }
    imgs[n].classList.add('active');
}

function prevSlide() {
    if (current > 0) {
        current -= 1;
    } else {
        current = imgs.length - 1;
    }
    showSlide(current)
}

function nextSlide() {
    if (current < imgs.length - 1) {
        current += 1;
    } else {
        current = 0;
    }
    showSlide(current)
}

