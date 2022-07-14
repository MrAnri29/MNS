const burgerDiv1 = document.querySelector('.burger .line1');
const burgerDiv2 = document.querySelector('.burger .line2');
const burgerDiv3 = document.querySelector('.burger .line3');

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

window.addEventListener("scroll", function () {
    var header = document.querySelector('nav');
    header.classList.toggle("sticky", window.scrollY > 0);
    nav.classList.toggle("nav-sticky", window.scrollY > 0);
    burgerDiv1.classList.toggle("burger-sticky", window.scrollY > 0);
    burgerDiv2.classList.toggle("burger-sticky", window.scrollY > 0);
    burgerDiv3.classList.toggle("burger-sticky", window.scrollY > 0);
});

const MNS = document.querySelector('.MNS');

let mouseCursor = document.querySelector('.cursor')

MNS.addEventListener("mousemove", cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

MNS.addEventListener("mouseover", () => {
    mouseCursor.classList.add("MNS-grow");
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
});
MNS.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("MNS-grow");
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
});

const navSlide = () => {
    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
        })

        //Burger Animation
        burger.classList.toggle('toggle');
    });


}

navSlide();

// CARDS

const cards = [
    document.querySelector('.gold-card'),
    document.querySelector('.premium-card'),
    document.querySelector('.vip-card')
]

cards.forEach(x => {
    x.addEventListener('click', () => {
        if (x.classList.contains('.card-active')) {
            x.classList.remove('card-active')
        } else {
            x.classList.toggle('card-active')
        }
    })
});