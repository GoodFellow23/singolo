const nav = document.getElementById('nav');
const header = document.getElementById('header');
const sticky = header.offsetTop;
const headerCont = document.getElementById('header__content');
const headerBottom = document.getElementById('header-bottom');
const slider = document.getElementById('slider');

nav.addEventListener('click', (event) => {
    nav.querySelectorAll('.header__navigation__link').forEach(el => {
        el.classList.remove('header__navigation--selected');
    });
    event.target.classList.add('header__navigation--selected');
});

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

