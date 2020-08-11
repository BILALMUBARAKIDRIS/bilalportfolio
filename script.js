let HambugerMenu = document.querySelector("#hambuger-menu");
let nav_links = document.querySelector(".nav-links");
let overlay = document.querySelector(".overlay");

HambugerMenu.addEventListener('click', function(){
    nav_links.classList.toggle("show");
});
