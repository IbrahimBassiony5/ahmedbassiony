'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}


window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
// const totalImages = 4;
// const imagesPerSlide = 2;
// const slide1 = document.getElementById("slide1");
// const slide2 = document.getElementById("slide2");

// // إضافة الصور للشريحة 1
// for (let i = 1; i <= imagesPerSlide; i++) {
//     let img = document.createElement("img");
//     img.src = `customers/${i}.jpeg`;
//     img.style.width = "19%";
//     img.style.margin = "5px";
//     slide1.appendChild(img);
// }

// // إضافة الصور للشريحة 2
// for (let i = imagesPerSlide + 1; i <= totalImages; i++) {
//     let img = document.createElement("img");
//     img.src = `customers/${i}.jpeg`;
//     img.style.width = "19%";
//     img.style.margin = "5px";
//     slide2.appendChild(img);
// }

// // تشغيل السلايد شو تلقائيًا
// let currentSlide = 0;
// const slides = document.querySelectorAll(".slide");

// function showSlides() {
//     slides.forEach(slide => slide.style.display = "none");
//     slides[currentSlide].style.display = "block";
//     currentSlide = (currentSlide + 1) % slides.length;
// }

// showSlides();  // تشغيل العرض عند التحميل
// setInterval(showSlides, 5000); // تبديل كل 5 ثوانٍ
