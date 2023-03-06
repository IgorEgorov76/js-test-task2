import './index.html';
import './index.scss';



// Переключение стиля кнопок и регионов по клику в map-block

let mapBlockButtons = document.querySelectorAll('.map-block__menu-item-btn');
let mapBlockArray1 = [...mapBlockButtons];
let mapBlockPoints = document.querySelectorAll('.map-block___map-points')
let mapBlockArray2 = [...mapBlockPoints];

mapBlockArray1.forEach(button => {
    button.addEventListener('click', function () {
        if (button.classList.contains('map-block__menu-item-btn_active')) {
        }
        else {
            for (let i = 0; i < mapBlockArray1.length; i++) {
                mapBlockArray1[i].classList.remove('map-block__menu-item-btn_active')
            }
            button.classList.add('map-block__menu-item-btn_active')

            if (button.id == 0) {
                for (let i = 1; i < mapBlockArray2.length; i++) {
                    mapBlockArray2[i].classList.remove('map-block__map-points_off')
                }
            }
            else {
                for (let i = 1; i < mapBlockArray2.length; i++) {
                    mapBlockArray2[i].classList.add('map-block__map-points_off')
                }
                mapBlockArray2[button.id].classList.remove('map-block__map-points_off')
            }
        }
    })
})

// Всплывающий список в map-block и поворот стрелки

let mapBlockArrowBlock = document.querySelector('.map-block__menu-item-main')
let mapBlockArrow = document.querySelector('.map-block__menu-item-symbol')
let mapBlockPopup = document.querySelector('.map-block__popup')

mapBlockArrowBlock.addEventListener('click', function () {
    if (mapBlockArrow.classList.contains('map-block__menu-item-symbol_rotate')) {
        mapBlockArrow.classList.remove('map-block__menu-item-symbol_rotate')
        mapBlockPopup.classList.remove('map-block__popup-active')
        mapBlockPopup.classList.add('map-block__popup')
    }
    else {
        mapBlockArrow.classList.add('map-block__menu-item-symbol_rotate')
        mapBlockPopup.classList.remove('map-block__popup')
        mapBlockPopup.classList.add('map-block__popup-active')
    }
})



