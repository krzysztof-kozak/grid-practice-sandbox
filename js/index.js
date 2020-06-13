const init = () => {
  console.log('DOM succesfuly parsed and loaded');

  const button = document.querySelector('.button--js');
  const menu = document.querySelector('.menu-js');
  const toggleMenu = () => menu.classList.toggle('menu--open');

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && menu.classList.contains('menu--open')) {
      menu.classList.remove('menu--open');
      console.log('window resized to >= 768 px, menu closed!');
    }
  });

  button.addEventListener('click', toggleMenu);
};
document.addEventListener('DOMContentLoaded', init);
