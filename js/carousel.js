let img = document.querySelector('#carousel');
let imgs = document.querySelector('#carousels')
let rightBtn = document.querySelector('.arrow_right');
let leftBtn = document.querySelector('.arrow_left');
// let Selena = document.getElementsByClassName('Selena')

// Images are from unsplash
let pictures = ['https://i.pinimg.com/736x/55/f9/94/55f994972dcca81d634e623fa3f561bb.jpg', 'https://i.pinimg.com/originals/e8/97/e2/e897e27b3c85b22ae21a1326f9b6291e.jpg', 'https://www.enjpg.com/img/2020/retro-29.jpg', 'https://wallpapercave.com/wp/wp5198403.png'];

img.src = pictures[0];
imgs.src = pictures[0];
let counter = 0;

let moveRight = () => {
    if (counter >= pictures.length - 1) {
        counter = 0
        img.src = pictures[counter];
        img.setAttribute('object-fit', 'cover')
        imgs.src = pictures[counter];
        imgs.setAttribute('object-fit', 'cover')
        return;
    }
    img.src = pictures[counter + 1];
    imgs.src = pictures[counter + 1];
    counter++;
}

let moveLeft = () => {
    if (counter < 1) {
        counter = pictures.length - 1;
        img.src = pictures[counter];
        imgs.src = pictures[counter];
        return;
    }
    img.src = pictures[counter - 1];
    imgs.src = pictures[counter - 1];
    counter--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);