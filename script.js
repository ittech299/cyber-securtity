window.onload = function () {
    var typed = new Typed('#typed', {
        strings: ["What is Cyber Fraud?","Types of Cyber Fraud","What are its Preventions?"],
        backSpeed: 15,
        smartBackspace: true,
        backDelay: 1200,
        startDelay: 1000,
        typeSpeed: 25,
        loop: true,
    });
};


/* Hamburger */

burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
img = document.querySelector('.img-primary')


burger.addEventListener('click',()=>{
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    img.classList.toggle('img-resp');
    
})

