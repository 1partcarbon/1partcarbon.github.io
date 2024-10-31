const burger = document.querySelector("#burger");
const burgerIcon = document.querySelector("#burger-icon");
const closeIcon = document.querySelector("#close-icon");
const menu = document.querySelector("#menu");
const mobileMenu = document.querySelector("#mobile-menu");

burger.addEventListener("click", () => {
  if (closeIcon.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");

    burgerIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  } else {
    mobileMenu.classList.add("hidden");

    closeIcon.classList.add("hidden");
    burgerIcon.classList.remove("hidden");
  }
});
