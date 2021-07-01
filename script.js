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