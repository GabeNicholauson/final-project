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

const images = ['assets/img/banner-1.jpg', 'assets/img/banner-3.jpg', 'assets/img/banner-4.jpg', 'assets/img/banner-2.jpg'];

for (let i = 0; i < images.length; i++) {
    setInterval(function() {
      let newImg = "url(" + images[i++] + ")";
      heroBanner.style.backgroundImage = newImg;
  
      if (i >= images.length) {
        i = 0;
      }
    }, 3000)
}


function sleep(duration) {
    return new Promise(resolve => {
        setTimeout(resolve, duration);
    })
}

const text = select('.intro');
const paragraph = select('.intro-p');


sleep(300).then(() => text.classList.add('is-visible'));
sleep(300).then(() => paragraph.classList.add('is-visible'));


onEvent('mousemove', heroBanner, function() {
    right.classList.add('is-visible');
    left.classList.add('is-visible');
})


onEvent('click', right, function() {
    for (let i = 0; i < images.length; i++) {
        let newImg = "url(" + images[i++] + ")";
        heroBanner.style.backgroundImage = newImg;

        if (i == 3) {
            right.classList.remove('is-visible');
        }
    }
})

onEvent('click', left, function() {
    for (let i = 0; images.length - 1 >= i; i--) {
        let newImg = "url(" + images[images.length - 1] + ")";
        heroBanner.style.backgroundImage = newImg;

        if (i == 0) {
            left.classList.remove('is-visible');
        }
    }
})