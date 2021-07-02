gsap.to('.slideup', { y: -275, duration: 1.2, delay: 1 });
gsap.to('.slidedown', { opacity: 0, y: 350, duration: 1, delay: 1 });
gsap.from('.fade_in', { opacity: 0, duration: 2, ease: 'easeOut', delay: 1 });
gsap.from('.intro', { y: -50, opacity: 0, duration: 1, ease: 'easeOut', delay: 2 });


gsap.to('.slideleft', {
    scrollTrigger: {
        trigger: '.slideleft',
        start: "center 90%",
        // markers: true,
        toggleActions: "play play play none"

    },
    x: -1000,
    duration: 3
});


gsap.to('.slideright', {
    scrollTrigger: {
        trigger: '.slideright',
        start: "center 80%",
        toggleActions: "play play play none"

    },
    x: 1000,
    duration: 3
});



gsap.from('.title_2', {
    scrollTrigger: {
        trigger: ".title_2",
        start: "center 60%",
        // markers: true,
        toggleActions: "play play play restart"
    },
    y: -50,
    opacity: 0,
    duration: 1,
    delay: 1.1
});


const items = document.querySelectorAll(".counting");
gsap.from(items, {
    textContent: 0,
    duration: 3,
    delay: 2,
    ease: "power1.in",
    snap: { textContent: 1 },
    stagger: {
        each: 1.0,
        onUpdate: function() {
            this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));
        },
    }
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

gsap.to(".nav_icon", {
    scrollTrigger: {
        trigger: ".title_2",
        start: "center 60%",
        toggleActions: "play none none reverse",
    },
    color: "#000",
})

gsap.to(".nav_icon", {
    scrollTrigger: {
        trigger: ".sec3",
        start: "center 60%",
        toggleActions: "play pause play reverse",
    },
    color: "#fff",
})

gsap.from(".fill_box", {
    scrollTrigger: {
        trigger: ".fill_box",
        start: "center 80%",
        toggleActions: "play pause none none",
        // markers: true,
    },
    opacity: 0,
    y: 50,
    duration: 1.3
})

gsap.from(".carousel-container", {
    scrollTrigger: {
        trigger: ".carousel-container",
        start: "center 80%",
        toggleActions: "play pause none none",
        // markers: true,
    },
    opacity: 0,
    y: 50,
    duration: 1.3,
    stagger: 0.2
})