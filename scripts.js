const hamburgerBtn = document.querySelector(".hamburger");
const menuNav = document.querySelector(".menu_items");

hamburgerBtn.addEventListener("click", () => {
  menuNav.classList.toggle("open");
  hamburgerBtn.classList.toggle("open");
});
