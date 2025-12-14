window.onload= function(){
    sliderOne();
    sliderTwo();
}

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");

let minGap = 0;


let sliderTrack=document.querySelector(".slider-track");
let sliderMaxValue=document.getElementById("sllider-1")

function sliderOneFunc() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
}

function sliderTwoFunc() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
     fillColor();
}

function fillColor() {
    let maxVal = sliderOne.max;   // total max value of the slider

    let percent1 = (sliderOne.value / maxVal) * 100;
    let percent2 = (sliderTwo.value / maxVal) * 100;

    sliderTrack.style.background = 
        `linear-gradient(to right,
        #dadae5 ${percent1}%,
        #3264fe ${percent1}%,
        #3264fe ${percent2}%,
        #dadae5 ${percent2}%)`;
}

