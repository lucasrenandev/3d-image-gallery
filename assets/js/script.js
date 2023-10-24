"use strict";

const box = document.querySelector(".container .box");
const btnPrevious = document.querySelector(".buttons .btn1");
const btnNext = document.querySelector(".buttons .btn2");
let degrees = 0;

function previous() {
    degrees += 45;
    box.style = `transform: perspective(1000px) rotateY(${degrees}deg);`
}

function next() {
    degrees -= 45;
    box.style = `transform: perspective(1000px) rotateY(${degrees}deg);`
}

btnPrevious.addEventListener("click", previous);
btnNext.addEventListener("click", next);
setInterval(next, 4000);