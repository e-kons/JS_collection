'use strict'

let slideLeft = document.querySelector('.slide-left');
let slideRight = document.querySelector('.slide-right');
let sliderBody = document.querySelector('.slider__body');
let sliderItem = document.querySelectorAll('.slider__item img');
let itemWidth = 600;
let scrolIndex = 1;

slideLeft.addEventListener('click', function (){
    if (scrolIndex > 0){
        sliderBody.style.left = `-${itemWidth * (scrolIndex - 1)}px`;
        scrolIndex--;
    }
})

slideRight.addEventListener('click', function (){
    if (scrolIndex < sliderItem.length){
        sliderBody.style.left = `-${itemWidth * scrolIndex}px`;
        scrolIndex++;
    } 
})
