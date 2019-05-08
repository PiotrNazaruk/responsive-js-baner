const slides = [{
    slideBackground: "url('/pictures/picture_1.png')",
    text: "slide 1"
   
},{
    slideBackground: "url('/pictures/picture_2.png')",
    text: "slide 2"
   
},{
    slideBackground: "url('/pictures/picture_3.png')",
    text: "slide 3"
},{
    slideBackground: "url('/pictures/picture_4.png')",
    text: "slide 4"
}
]
const sliderSpan = document.querySelector('.slider__item span')
const slideDiv = document.querySelector('.slider__item');
let counter = 0;
const changeSlide = ()=>{
    slideDiv.style.backgroundImage = slides[counter].slideBackground;
    sliderSpan.textContent = slides[counter].text;
    counter++
    if(counter == slides.length){
        counter = 0;
    }
}


setInterval(changeSlide,2000)
