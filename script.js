const nav = document.getElementById('nav');
const header = document.getElementById('header');
const sticky = header.offsetTop;
const headerCont = document.getElementById('header__content');
const headerBottom = document.getElementById('header-bottom');
const slider = document.getElementById('slider');
let numSlider = 0;
const scrolls = document.getElementsByClassName('slider__scroll');
const portfolioImgs = document.getElementById('portfolio-imgs');
const portfolioTab = document.getElementById('portfolio-tab');
let indexImg = 3;


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
    nav.querySelectorAll('.header__navigation__link').forEach(el => {
        el.classList.remove('header__navigation--selected');
        if(el.offsetTop <= window.pageYOffset && (el.offsetTop + el.offsetHeight) > window.pageYOffset ) {
            el.classList.add('header__navigation--selected');
        }
    });
    
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
//Image Interaction
portfolioImgs.addEventListener('click',(event) => {     
    if (event.target.classList.contains('img-active')) {
        portfolioImgs.querySelectorAll('.portfolio__img').forEach(el => {
            el.classList.remove('img-active');
        });              
    } else {
        portfolioImgs.querySelectorAll('.portfolio__img').forEach(el => {
            el.classList.remove('img-active');
        });
        if (event.target.classList.contains('portfolio__img')) {    
        event.target.classList.add('img-active');
        }
    }        
});

//Tab Switching
portfolioTab.addEventListener('click',(event) => {
    portfolioTab.querySelectorAll('.tool__description').forEach(el => {
        el.classList.remove('link--selected');
    });
    if (event.target.classList.contains('tool__description')) {
        event.target.classList.add('link--selected');
    }    
    portfolioImgs.querySelectorAll('.portfolio__img').forEach((el,idx,arr) => {
        indexImg = indexImg == arr.length ? 1 : indexImg;
        el.style.backgroundImage = "url('./assets/img/portfolio/"+indexImg+".svg')";
        indexImg++;
    });
});

const MassageBlock = document.getElementById('feedback-block');
const CloseMSG = document.getElementById('close-msg');

const openWindow = () => {
    MassageBlock.style.top =  window.pageYOffset.toString()+'px';
    header.style.zIndex = "0";
    document.querySelector('body').style.overflow = "hidden";
    MassageBlock.classList.remove('feedback--hidden');
    debugger;
    const subject = document.getElementById('subject').value.toString();
    debugger;
    const description = document.getElementById('question-field').value.toString();
    debugger;
    if(subject == "") {
        document.getElementById('subject-result').innerText = "No subject";
    } else {
        document.getElementById('subject-result').innerText = "Subject: " + subject;
    }
    debugger;
    if(description == "") {
        document.getElementById('description-result').innerText = "No description";
    } else {
        document.getElementById('description-result').innerText = "Description: " + description;
    }
    
    

};

CloseMSG.addEventListener('click',() => {
    MassageBlock.classList.add('feedback--hidden');
    header.style.zIndex = "1";
    document.querySelector('body').style.overflow = "initial";
});