// setup nav
// const navBtn = document.getElementById("nav-btn");
// const navbar = document.getElementById("navbar");
// const navClose = document.getElementById("nav-close");
// show nav
// navBtn.addEventListener("click", () => {
//   console.log("Clicked");
//   navbar.classList.add("showNav");
// });
// close nav
// navClose.addEventListener("click", () => {
//   console.log("Clicked");
//   navbar.classList.remove("showNav");
// });

const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-100%";
}
