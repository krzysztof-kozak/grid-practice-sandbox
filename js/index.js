const init = () => {
  console.log('DOM succesfuly parsed and loaded');

  const button = document.querySelector('.button--js');
  const menu = document.querySelector('.menu-js');
  const toggleMenu = () => menu.classList.toggle('menu--open');

  //Add debounce to limit how often the "resize" event trigger and to save resouces.
  function debounce(func, wait, immediate) {
    let timeout;
    return function () {
      const context = this,
        args = arguments;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const closeMenu = () => {
    debounce(() => {
      //If user opens mobile menu and then resizes the screen, close the mobile menu.
      if (window.innerWidth >= 768 && menu.classList.contains('menu--open')) {
        menu.classList.remove('menu--open');
        console.log('window resized to >= 768 px, menu closed!');
      }
    }, 500);
  };

  window.addEventListener('resize', closeMenu);
  button.addEventListener('click', toggleMenu);
};
document.addEventListener('DOMContentLoaded', init);
