const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");
const head = document.querySelector(".main-head");
const about = nav.querySelector(".nav-about");
const work = nav.querySelector(".nav-gallery");
const contact = nav.querySelector(".nav-contact");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});

nav.addEventListener(
  "mouseover",
  function (e) {
    console.log(e.target.innerText);
    if (e.target.innerText === "About") {
      head.style.boxShadow = "0px 10px 10px rgb(226, 230, 7)";
    } else if (e.target.innerText === "Work") {
      head.style.boxShadow = "0px 10px 10px rgb(7, 11, 230)";
    } else if (e.target.innerText === "Contact") {
      head.style.boxShadow = "0px 10px 10px rgb(230, 33, 7)";
    } else {
      head.style.boxShadow = "0px 10px 10px rgba(235, 231, 231, 0.4)";
    }
  },
  false
);
