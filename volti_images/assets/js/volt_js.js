'use strict';

const dataNav=document.querySelector("[data-nav]");
const dataNavLink=document.querySelectorAll("[data-nav-link]");
const dataToggle=document.querySelector("[data-toggle-btn]");

const toggleNavbar = function () {
  dataNav.classList.toggle("active");
  dataToggle.classList.toggle("active");
  
}


dataToggle.addEventListener("click", toggleNavbar);




    

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-go-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});