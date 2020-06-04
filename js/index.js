const init = () => {
  console.log("DOM succesfuly parsed and loaded");

  const button = document.querySelector(".button-js");
  const menu = document.querySelector(".menu-js");
  const toggleMenu = () => menu.classList.toggle("menu--open");

  button.addEventListener("click", toggleMenu);
};
document.addEventListener("DOMContentLoaded", init);
