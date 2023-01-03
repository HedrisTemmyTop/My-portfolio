// SLIDER COMPONENT

const slides = document.querySelectorAll(".testimony__boxes--box");
const moveRight = document.querySelector(".testimony__arrow--left");
const moveLeft = document.querySelector(".testimony__arrow--right");

let currentSlide = -110;
let click = 0;

// Go to next slide
const nextSlide = function () {
  if (click >= slides.length - 1) {
    click = 0;
  } else {
    click++;
  }
  //   currentSlide * 2;
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${currentSlide * click}%)`;
  });
};

// Go to previous slide
const previousSlide = function () {
  if (click === 0) click = slides.length - 1;
  click--;
  //   currentSlide * 2;
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${currentSlide * click}%)`;
  });
};

// Go to next slide after 1 sec

setInterval(() => {
  nextSlide();
}, 2500);

// Event listeners for go slides

moveRight.addEventListener("click", function () {
  nextSlide();
});
moveLeft.addEventListener("click", function () {
  previousSlide();
});

//-100%, 0, 100%, 200%

// INTERSECTION OBSERVER FOR HEADER

// const header = document.querySelector(".header");
// const homeSection = document.querySelector(".home");

// const stickyNav = function (entries) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) {
//     header.classList.add("sticky");
//     console.log(header);
//     console.log(entry);
//   }
//   if (entry.isIntersecting) header.classList.remove("sticky");
// };

// const observeHeader = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
// });

// observeHeader.observe(homeSection);

// INTERSECTION OBSERVVER FOR SECTIONS

//Toggle menu

const openMenu = document.querySelector(".header__menu");
const nav = document.querySelector(".navigation");
const navList = document.querySelector(".navigation__navlist");

openMenu.addEventListener("click", function () {
  navList.classList.toggle("openNav");
});

// Bring from

const contactBtn = document.querySelectorAll(".contact");
const form = document.querySelector(".contact__form");
const closeForm = document.querySelector(".contact__form__close");

contactBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    form.classList.add("show");
  });
});

closeForm.addEventListener("click", function (e) {
  e.preventDefault();

  form.classList.remove("show");
});

// Form validation
const name = document.querySelector("#name");
const number = document.querySelector("#number");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const sendBtn = document.querySelector(".btn--send");

sendBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (name.value == "") {
    alert("You have to input your name");
    return false;
  } else if (number.value == "" || typeof +number.value !== "number") {
    alert("You have to input correct Number");
    return false;
  } else if (email.value == "") {
    alert("You have to input your e-mail");
    return false;
  } else if (message.value == "") {
    alert("You have to input your message");
    return false;
  } else {
    alert("Your message has been succesfully delivered we will get in touch");

    name.value = number.value = email.value = message.value = "";
    form.classList.remove("show");
  }
});
