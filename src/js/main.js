"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const habmurger = document.querySelector(".hamburger__menu");
    const headerMenu = document.querySelector(".header__menu");

    habmurger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        habmurger.classList.toggle("active");
        headerMenu.classList.toggle("active");
    }
});