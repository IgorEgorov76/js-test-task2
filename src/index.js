import './index.html';
import './index.scss';

// Swiper
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiperNext",
        prevEl: ".swiperPrev",
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            pagination: {
                dynamicBullets: true
            }
        },
        700: {
            slidesPerView: 2,
        },
    }
});

// Модальное окно
let img1 = document.querySelector('#modal-img1')
let img2 = document.querySelector('#modal-img2')
let modalBlock = document.querySelector('#modal-block')
let body = document.querySelector('#body')


img1.addEventListener('click', function () {
    img1.classList.remove('navigation-block__wrapper-list_active')
    img1.classList.add('navigation-block__wrapper-list_disabled')
    img2.classList.remove('navigation-block__wrapper-list_disabled')
    img2.classList.add('navigation-block__wrapper-list_active')
    modalBlock.classList.add('modal-block_active')
    body.classList.add('body-hidden')
})

img2.addEventListener('click', function () {
    img2.classList.remove('navigation-block__wrapper-list_active')
    img2.classList.add('navigation-block__wrapper-list_disabled')
    img1.classList.remove('navigation-block__wrapper-list_disabled')
    img1.classList.add('navigation-block__wrapper-list_active')
    modalBlock.classList.remove('modal-block_active')
    body.classList.remove('body-hidden')
})

