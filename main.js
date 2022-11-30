let hamburger = document.querySelector(".hamburger")
let navBar = document.querySelector("#nav-bar")


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
})