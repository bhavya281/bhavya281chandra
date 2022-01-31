//Get the button
var mybutton = document.getElementById("myBtn");
var myNav = document.getElementById('nav');
// When the user scrolls down 150px from the top of the document, show the button and change the colour of navbar
window.onscroll = function () {
    if (document.body.scrollTop >= 150 || document.documentElement.scrollTop > 150) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
        mybutton.style.display = "block";
    } else {
        myNav.classList.remove("nav-colored");
        myNav.classList.add("nav-transparent");
        mybutton.style.display = "none";
    }
};
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// Typewriting effect 
new TypeWriter(`#typewriter`, {
    loop: true,
    cursor: {
        speed: 700,
        size: 'larger',
        id: 'Some_TypeWriter_CSS',
        enabled: true
    },
    timeout: 50
})
    .write(`Computer Science Student`)
    .wait(2500)
    .removeAll()
    .write(`Web Developer`)
    .wait(2500)
    .removeAll()
    .write(`Machine Learning Enthusiast`)
    .wait(2500)
    .removeAll()
    .start();
// Scroll effect on Project Section
window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight / 1.6;
        var revealtop = reveals[i].getBoundingClientRect().top;

        if (revealtop < windowheight) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}
// scroll effect on about me
const text = document.querySelector(".para");
const image = document.querySelector(".image_about");

window.addEventListener('scroll', appearOnScrollAM);
function appearOnScrollAM() {
    var textPosition = text.getBoundingClientRect().top;
    var windowheight = window.innerHeight / 1.3;
    if (windowheight > textPosition) {
        text.classList.remove('push-right');
        image.classList.remove('push-left');
    } else {
        text.classList.add('push-right');
        image.classList.add('push-left');
    }
}

//scroll effect on information
const tech = document.querySelector(".techskill");
const edu = document.querySelector(".education");

window.addEventListener('scroll', appearOnScrollInfo);
function appearOnScrollInfo() {
    var techPosition = tech.getBoundingClientRect().top;
    var eduPosition = edu.getBoundingClientRect().top;
    var windowheight = window.innerHeight / 1.6;
    if (windowheight > techPosition) {
        tech.classList.remove('push-left');
    } else {
        tech.classList.add('push-left');
    }
    if (windowheight > eduPosition) {
        edu.classList.remove('push-right');
    }
    else {
        edu.classList.add('push-right');
    }
}
// scroll effect on contact me
/* window.addEventListener('scroll', appearOnScrollContact);
function appearOnScrollContact() {
    var displays = document.querySelectorAll('.display');
    for (var i = 0; i < displays.length; i++) {
        var windowheight = window.innerHeight / 1.5;
        var displaytop = displays[i].getBoundingClientRect().top;

        if (displaytop < windowheight) {
            displays[i].classList.add('active');
        }
        else {
            displays[i].classList.remove('active');
        }
    }
} */