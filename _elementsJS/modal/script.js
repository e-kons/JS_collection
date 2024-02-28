'use strict'

let btn = document .querySelector('.modal__btn');
let modalBody = document .querySelector('.modal__body');


btn.addEventListener('click', (event) =>{
    closeModal(event);
})

modalBody.addEventListener('click', (event) => {
    if (!event.target.closest('.modal__content')) closeModal(event)
})

function closeModal(event) {
    event.target.closest('.modal').classList.toggle('active');
}