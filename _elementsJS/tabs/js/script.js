'use strict'

let tabBody = document.querySelector('.tab');
let tabButton = document.querySelectorAll('.tab__btn');
let tabContent = document.querySelectorAll('.tab__content');

tabBody.addEventListener('click', function (event){
    if (event.target.closest('.tab__btn')){
        tabButton.forEach((element) => element.classList.remove('active'));
        tabContent.forEach((element) => element.classList.remove('active'))

        let activeButton = event.target.closest('.tab__btn');
        let activeContent = document.getElementsByName(`${activeButton.name}`)[1];

        activeButton.classList.add('active');
        activeContent.classList.add('active');
    }
})

 