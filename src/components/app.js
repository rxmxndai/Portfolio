const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  console.log('click')
  hamburger.toogle("active");
  navMenu.classList.toogle("active");
});

document
  .querySelectorAll(".nav-link")
  .forEach((e) => e.addEventListener("click", () => {
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
  }));
