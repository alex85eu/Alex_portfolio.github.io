'use strict';

const navbar=document.querySelector("[data-navbar]");
const navLinks=document.querySelectorAll("[data-nav-link]");
const toggleMenu=document.querySelector("[data-toggle-menu]");

toggleMenu.addEventListener("click", function() {
    navbar.classList.toggle("active");
    toggleMenu.classList.toggle("active");
});

for(let i=0; i < navLinks.length; i++){
    navLinks[i].addEventListener("click", function() {
        navbar.classList.remove("active");
        toggleMenu.classList.remove("active");
    });
};

/*SCROLL DWN JS*/

const header = document.querySelector("[data-head]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
