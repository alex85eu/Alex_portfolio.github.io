'use strict';

const dataNav=document.querySelector('[data-nav]');
const dataNavLink=document.querySelectorAll('[data-nav-link]');
const toggleMenu=document.querySelector('[data-nav-toggle]');

toggleMenu.addEventListener("click",function(){
    dataNav.classList.toggle('active');
    this.classList.toggle('active');
});

for(let i=0; i<=dataNavLink.length;i++){
    dataNavLink[i].addEventListener("click", function(){
        dataNav.classList.remove('active');
         toggleMenu.classList.toggle('active');
       
    });
}


const dataHeader=document.querySelector("[data-header]");   
window.addEventListener("scroll", function() {
    if( window.scrollY >= 100 ){
        dataHeader.classList.add("active");
    }
    else{
        dataHeader.classList.remove("active");
    }
});


/**
 * header sticky & back to top
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});