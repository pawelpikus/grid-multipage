const openButton = document.querySelector(".open-nav");
const closeButton = document.querySelector(".close-nav");
const nav = document.querySelector("nav");

closeButton.addEventListener("click", () =>{
    nav.classList.remove("nav-open");
});

openButton.addEventListener("click", () =>{
    nav.classList.add("nav-open");
});