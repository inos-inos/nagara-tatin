"use strict" 

const mainImg = [
  'img/index_main01.jpg',
  'img/index_main02.jpg',
  'img/index_main03.jpg',
]
let mainImgNum = 0;

const controlElements = document.querySelectorAll('.control')
const mainImgElement =  document.querySelector(".main-img")

let timer = setInterval(mainImgshowTimer, 3000);

for (let i = 0; i < controlElements.length; i++) {
  const controlElement = controlElements[i];
  controlElement.addEventListener('click', () => {
    controlElement.classList.add('red');
    mainImgElement.src = mainImg[i];
    mainImgNum = i

    for(let j = 0, len = controlElements.length; j<len; j ++) {
      if(i !== j) {
        controlElements[j].classList.remove('red');
      }
    }

    clearTimeout(timer);
    timer = setInterval(mainImgshowTimer, 3000)
  })
}

function mainImgshowTimer() {
  
  if (mainImgNum === 2) {
    mainImgNum = 0;
  } else {
    mainImgNum++;
  }
  controlElements[mainImgNum].classList.add('red');

  mainImgElement.src = mainImg[mainImgNum];
  for(let j = 0, len = controlElements.length; j<len; j ++) {
    if(mainImgNum !== j) {
      controlElements[j].classList.remove('red');
    }
  }  
}




const slideImg = [
  'img/index_slide01.jpg',
  'img/index_slide02.jpg',
  'img/index_slide03.jpg',
  'img/index_slide04.jpg',
]
let slideImgNum = 0;

function slideshowTimer() {
  const slideElement =  document.querySelector("#slide img")
  if (slideImgNum === 3) {
    slideImgNum = 0;
  } else {
    slideImgNum++;
  }
  slideElement.src = slideImg[slideImgNum];
}

setInterval(slideshowTimer, 3000);

