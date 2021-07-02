console.log("HI");

let nav = document.querySelector(".nav_icon");
let navbar = document.querySelector(".options");
let clicks = 0;

nav.addEventListener("click", function() {
    if (clicks % 2 == 0) {
        this.style.transform = "rotate(90deg)";
        navbar.style.transform = "translateX(-280px)"

    } else if (clicks % 2 != 0) {
        this.style.transform = "rotate(0deg)";
        navbar.style.transform = "translateX(250px)"
    }
    clicks += 1;
})

const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

const prevBtn = document.querySelector("#prevbtn");
const nextBtn = document.querySelector("#nextbtn");

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.6s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

})

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.6s ease-in-out";
    counter--;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

})

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastclone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
    if (carouselImages[counter].id === 'firstclone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
})