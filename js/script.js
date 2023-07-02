var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        disableOnInteraction: false,
        delay: 3500
    },

    breakpoints: {
        // when window width is <= 499px
        100: {
            slidesPerView: 2,
            spaceBetweenSlides: 30
        },
        // when window width is <= 999px
        500: {
            slidesPerView: 6,
            spaceBetweenSlides: 30
        }
    }
});

const tl = gsap.timeline();

tl
    .from(".top-header", {
        duration: .9,
        y: 10,
        // delay: .1,
        opacity: 0
    })
    .from(".main-nav", {
        duration: .9,
        y: 10,
        opacity: 0
    })
    .from(".section-data .data", {
        duration: .9,
        x: -20,
        opacity: 0
    })
    .from(".course-card-data", {
        duration: .9,
        x: 35,
        opacity: 0
    })

    
const hiddenNav = document.querySelector(".hidden-nav")

let lastScroll = 0;
window.addEventListener("scroll", function (e) {

    let scrollTop = window.pageYOffset;

    if (scrollTop >= 110 && scrollTop < lastScroll) {
        hiddenNav.style.opacity = 1
        hiddenNav.style.top = 0
    } else {

        hiddenNav.style.opacity = 0
        hiddenNav.style.top = "-50%"
    }
    lastScroll = scrollTop;
})

const openExtra = document.querySelectorAll(".open-extra")

openExtra.forEach((elem) => {
    let toggle = false;
    elem.addEventListener("click", function () {


        if (!toggle) {
            const ul = this.firstElementChild;
            ul.style.opacity = 1;
            ul.style.height = "auto"
        } else {
            const ul = this.firstElementChild;
            ul.style.opacity = 0;
            ul.style.height = 0
        }

        toggle = !toggle;
    })
})

const hamburger = document.querySelector("#hamburger")
const nav = document.querySelector(".responsive-nav")
const close = document.querySelector("#close")
hamburger.addEventListener("click", () => {
    nav.style.display = "block";
    hamburger.style.display = "none"
    close.style.display = "block"
})


close.addEventListener("click", () => {
    nav.style.display = "none";
    hamburger.style.display = "block"
    close.style.display = "none"
})
