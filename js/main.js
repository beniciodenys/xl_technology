let navbar = document.querySelector(".navbar");
let navbarToggler = document.querySelector("button.navbar-toggler");

navbarToggler.addEventListener("click", ()=>{
    navbar.classList.toggle("navbar--opened")
});