// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
// show nav
navBtn.addEventListener("click", () => {
  console.log("Clicked");
  navbar.classList.add("showNav");
});
// close nav
navClose.addEventListener("click", () => {
  console.log("Clicked");
  navbar.classList.remove("showNav");
});
