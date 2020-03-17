const nav = document.getElementById('nav');
const header = document.getElementById('header');
const sticky = header.offsetTop;
const headerCont = document.getElementById('header__content');
const headerBottom = document.getElementById('header-bottom');
const slider = document.getElementById('slider');
let numSlider = 0;
const scrolls = document.getElementsByClassName('slider__scroll');


//Navigation 
nav.addEventListener('click', (event) => {
    nav.querySelectorAll('.header__navigation__link').forEach(el => {
        el.classList.remove('header__navigation--selected');
    });
    event.target.classList.add('header__navigation--selected');
});

//Sticky header
window.onscroll = () => {
    if (window.pageYOffset > sticky + 40) {
        header.classList.add('sticky-header');  
        headerCont.classList.add('sticky-content');
        headerBottom.classList.add('sticky-bottom');
    } else {
        header.classList.remove('sticky-header');
        headerCont.classList.remove('sticky-content');
        headerBottom.classList.remove('sticky-bottom');
    }
};

//Переключение экранов
slider.addEventListener('click',(event) => {
    if(event.target.classList.contains('iphone__vertical__screen')) {
       if(event.target.style.backgroundImage == 'none') {
        event.target.style.backgroundImage = "url('./assets/img/bg-vertical.png')";
       } else {
        event.target.style.backgroundImage = 'none';
       }
    }
    if(event.target.classList.contains('iphone__horizontal__screen')) {
        if(event.target.style.backgroundImage == 'none') {
         event.target.style.backgroundImage = "url('./assets/img/bg-horizontal.png')";
        } else {
         event.target.style.backgroundImage = 'none';
        }
     }
});

//Карусель

for ( el  of scrolls)  {
    el.addEventListener('click',(event) => {
        if(numSlider == 0) {
            numSlider++;
            slider.style.backgroundImage = "url('./assets/img/Slide-2.png')";
            slider.style.justifyContent = "space-between";
            document.getElementById('iphone-vertical').style.display = "none";
            document.getElementById('iphone-horizontal').style.display = "none";
            document.querySelector('.bg-bottom').style.background = '#648BF0';
        } else if (numSlider == 1) {
            numSlider--;
            slider.style.backgroundImage = "initial";
            document.getElementById('iphone-vertical').style.display = "initial";
            document.getElementById('iphone-horizontal').style.display = "initial";
            document.querySelector('.bg-bottom').style.background = 'initial';
            slider.querySelector('.iphone__vertical__screen').style.backgroundImage = "url('./assets/img/bg-vertical.png')";    
            slider.querySelector('.iphone__horizontal__screen').style.backgroundImage = "url('./assets/img/bg-horizontal.png')";    
        }
    });
}

// scrollLeft.addEventListener('click',(event) => {
//     console.log('start');
//     if(numSlider == 0) {
//         console.log('in');
//         numSlider++;
//         slider.style.backgroundImage = "url('./assets/img/Slide-2.png')";
//         slider.style.justifyContent = "space-between";
//         document.getElementById('iphone-vertical').style.display = "none";
//         document.getElementById('iphone-horizontal').style.display = "none";
//         document.getElementById('');
//     } else if (numSlider == 1) {
//         numSlider--;
//         slider.style.backgroundImage = "initial";
//         document.getElementById('iphone-vertical').style.display = "initial";
//         document.getElementById('iphone-horizontal').style.display = "initial";

//     }
//     console.log('end');
// });
