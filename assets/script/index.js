'use strict';

// Utility functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function getElement(selector, parent = document) {
    return parent.getElementById(selector);
}


function select(selector, parent = document) {
    return parent.querySelector(selector);
}

const left = select('.fa-chevron-left');
const right = select('.fa-chevron-right');
const heroBanner = select('.hero-image');

const images = ['banner-1.jpg', '../img/banner-3.jpg', '../img/banner-4.jpg'];

// for (let i = 0; i < images.length; i++) {
//     setTimeout(function() {
//       let newImg = "url(" + images[i] + ")";
//       heroBanner.style.backgroundImage = newImg;
  
//       if (i >= images.length) {
//         i = 0;
//       }
//     }, 3000)
// }


function sleep(duration) {
    return new Promise(resolve => {
        setTimeout(resolve, duration);
    })
}

const text = select('.intro');
const paragraph = select('.intro-p');


sleep(300).then(() => text.classList.add('is-visible'));
sleep(300).then(() => paragraph.classList.add('is-visible'));
