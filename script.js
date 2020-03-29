const nav = document.getElementById('nav');
const header = document.getElementById('header');
const sticky = header.offsetTop;
const headerCont = document.getElementById('header__content');
const headerBottom = document.getElementById('header-bottom');
const slider = document.getElementById('slider');

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

//Sticky header/auto select
document.addEventListener('scroll',() => {
    const currY = window.scrollY + 40;
     if (currY > sticky + 40) {
        header.classList.add('sticky-header');  
        headerCont.classList.add('sticky-content');
        headerBottom.classList.add('sticky-bottom');
        document.getElementById('dropNav').style.top = "8px";
    } else {
        header.classList.remove('sticky-header');
        headerCont.classList.remove('sticky-content');
        headerBottom.classList.remove('sticky-bottom');
        document.getElementById('dropNav').style.top = "34px";
    }
    
    const section = document.querySelectorAll('section>:first-child');
    section.forEach(el => {        
        if(el.parentNode.offsetTop < currY && (el.parentNode.offsetTop + el.parentNode.offsetHeight) > currY) {
            nav.querySelectorAll('.header__navigation__link').forEach(l => {
                l.classList.remove('header__navigation--selected');
                if (el.id === l.parentNode.getAttribute('href').substring(1)) {
                    l.classList.add('header__navigation--selected');
                };
            });    
        }
    });    
});


//Change screen
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

//

let numSlider=1;
let rightValue = 1020; /*window.outerWidth;*/
let counter = 0;
scrolls[0].addEventListener('click',() => {
    document.querySelector('.iphone__horizontal__screen').style.backgroundImage = "url('./assets/img/bg-horizontal.png')";
    document.querySelector('.iphone__vertical__screen').style.backgroundImage = "url('./assets/img/bg-vertical.png')";
    if(numSlider == 0) { 
        document.querySelectorAll('.slider-content').forEach(el => el.style.right = '2040px');
        numSlider = 2;
    }
    counter = numSlider*rightValue;
    let curr = (numSlider-1)*rightValue;
    numSlider--;
    let interval = setInterval(() => {        
        counter -= 10;
        document.querySelectorAll('.slider-content').forEach(el => {            
            el.style.right = `${counter}px`;
            if (el.style.right == `${curr}px`) {
                clearInterval(interval);
                return;
            }                    
        });
    },1);
});
scrolls[1].addEventListener('click',() => {
    document.querySelector('.iphone__horizontal__screen').style.backgroundImage = "url('./assets/img/bg-horizontal.png')";
    document.querySelector('.iphone__vertical__screen').style.backgroundImage = "url('./assets/img/bg-vertical.png')";
    if(numSlider == 2) { 
        document.querySelectorAll('.slider-content').forEach(el => el.style.right = '0px');
        numSlider = 0;
    }
    counter = numSlider*rightValue;
    let curr = (numSlider+1)*rightValue;
    numSlider++;
    let interval = setInterval(() => {
        counter += 10;
        document.querySelectorAll('.slider-content').forEach(el => {        
            el.style.right = `${counter}px`;
            if (el.style.right == `${curr}px`) {
                clearInterval(interval);                
                return;
            }
            
    });
},1);   
});

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
    const subject = document.getElementById('subject').value.toString();
    const description = document.getElementById('question-field').value.toString();
    if(subject == "") {
        document.getElementById('subject-result').innerText = "No subject";
    } else {
        document.getElementById('subject-result').innerText = "Subject: " + subject;
    }
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
    document.querySelector(".feedback-form").reset();
});