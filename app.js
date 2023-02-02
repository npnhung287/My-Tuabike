let menuNavbar = document.querySelector('.navbar_menu');
let closeMenu = document.querySelector('.navbar_close')

let heroSlide = document.querySelector('#hero-slide');

let heroSlideItems = heroSlide.querySelectorAll('.slide');

let heroSlideItemIndex = 0;

let heroSlidePlay = true;

let heroSlideControlItems = heroSlide.querySelectorAll('.slide-control-item');

let slidePrev = heroSlide.querySelector('.slide-prev');
let slideNext = heroSlide.querySelector('.slide-next');

let header = document.querySelector('header');

const showMenu = () => {
    document.querySelector('.menu-mobile-container').classList.add('active');
    menuNavbar.classList.add('active');
    closeMenu.classList.add('active');
}

const hideMenu = () => {
    document.querySelector('.menu-mobile-container').classList.remove('active');
    closeMenu.classList.remove('active');
    menuNavbar.classList.remove('active');
}

const showSlide = (index) => {
    heroSlide.querySelector('.slide.active').classList.remove('active');
    heroSlide.querySelector('.slide-control-item.active').classList.remove('active');
    heroSlideItems[index].classList.add('active');
    heroSlideControlItems[index].classList.add('active');
}

const nextSlide = () => {
    heroSlideItemIndex = heroSlideItemIndex + 1 === heroSlideItems.length ? 0 : heroSlideItemIndex + 1;
    console.log(heroSlideItemIndex);
    showSlide(heroSlideItemIndex);
}

const prevSlide = () => {
    heroSlideItemIndex = heroSlideItemIndex - 1 < 0 ? heroSlideItems.length - 1 : heroSlideItemIndex - 1;
    console.log(heroSlideItemIndex);
    showSlide(heroSlideItemIndex);
}

// handle click menu btn
menuNavbar.addEventListener('click', () => showMenu());
closeMenu.addEventListener('click', () => hideMenu())

// handle click next slider
slideNext.addEventListener('click', () => nextSlide());
// handle click prev slider
slidePrev.addEventListener('click', () => prevSlide());

// select slide
heroSlideControlItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        showSlide(index);
        heroSlideItemIndex = index;
        console.log(index);
    })
})

// Pause slide when mouse in slide image
heroSlide.addEventListener('mouseover', () => { heroSlidePlay = false });

// Resume slide when mouse leave out slide image
heroSlide.addEventListener('mouseleave', () => { heroSlidePlay = true });

setTimeout(() => heroSlideItems[0].classList.add('active'), 200);

setInterval(() => {
    if (!heroSlidePlay)
        return
    nextSlide()
}, 3000);

// Change header style when scroll
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

// element show on scroll

// let scroll = window.requestAnimationFrame || function (callback) { window.setTimeout(callback, 1000 / 60) }

// let el_to_show = document.querySelectorAll('.show-on-scroll')

// isElInViewPort = (el) => {
//     let rect = el.getBoundingClientRect()

//     let distance = 200

//     return (rect.top <= (window.innerHeight - distance || document.documentElement.clientHeight - distance))
// }

// loop = () => {
//     el_to_show.forEach(el => {
//         if (isElInViewPort(el)) el.classList.add('show')
//     })

//     scroll(loop)
// }

// loop()
