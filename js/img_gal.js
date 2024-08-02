const gallery = document.getElementById('gallery');
const imgs = gallery.querySelectorAll('img');
let dragImage = null;

imgs.forEach((img) => {
    img.addEventListener('dragstart', () => {
        img.classList.add('dragging')
        dragImage = img;
    })
    img.addEventListener('dragend', () => {
        img.classList.remove('dragging')
    })
    img.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('drag over')
    })
    img.addEventListener('drop', (e) => {
        e.preventDefault();
        if(dragImage !== img) {
            gallery.insertBefore(dragImage, img)
        }
    })
});


