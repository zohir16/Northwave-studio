const toggle = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav__menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

console.log("JS is working");

const links = document.querySelectorAll(".nav__menu a");

links.forEach(link => {
  link.addEventListener("click", () => {

    // active link styling
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    // CLOSE mobile menu
    menu.classList.remove("active");
  });
});

/* =========================
   WORK SLIDER
========================= */

const slides = document.querySelectorAll(".work__slide");

const dots = document.querySelectorAll(".work__dot");

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    slides.forEach(slide => {
      slide.classList.remove("active");
    });
    dots.forEach(dot => {
      dot.classList.remove("active");
    });
    slides[index].classList.add("active");
    dots[index].classList.add("active");
  });
});

/* AUTO SLIDER */

let currentSlide = 0;
setInterval(() => {
  slides.forEach(slide => {
    slide.classList.remove("active");
  });

  dots.forEach(dot => {
    dot.classList.remove("active");
  });

  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");

}, 4000);


/* orelay */

document.addEventListener("DOMContentLoaded", () => {

  const toggleBtn = document.querySelector(".nav__toggle");
  const closeBtn = document.querySelector(".nav__close");
  const navMenu = document.querySelector(".nav__menu");
  const overlay = document.querySelector(".nav__overlay");

  console.log("JS is working");

  if (toggleBtn && navMenu && overlay) {

    toggleBtn.addEventListener("click", () => {
      navMenu.classList.add("active");
      overlay.classList.add("active");

    });

  }

  if (closeBtn && navMenu && overlay) {

    closeBtn.addEventListener("click", () => {
      navMenu.classList.remove("active");
      overlay.classList.remove("active");

    });

  }

  if (overlay && navMenu) {

    overlay.addEventListener("click", () => {
      navMenu.classList.remove("active");
      overlay.classList.remove("active");

    });

  }

});