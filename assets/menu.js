(() => {
  const container = document.querySelector('.eael-simple-menu-container');
  const menu = document.getElementById('menu-main-menu');
  const nav = container.querySelector('nav');
  const toggle = container.querySelector('.eael-simple-menu-toggle');
  const mobile = matchMedia('(max-width:1024px)');
  function layout() {
    container.closest('.elementor-widget').classList.toggle('eael-hamburger--not-responsive', !mobile.matches);
    container.classList.toggle('eael-simple-menu-hamburger', mobile.matches);
    menu.classList.toggle('eael-simple-menu-responsive', mobile.matches);
    if (mobile.matches) {
      nav.style.width = document.documentElement.clientWidth + 'px';
      nav.style.left = -container.getBoundingClientRect().left + 'px';
    } else {
      nav.style.width = '';
      nav.style.left = '';
      menu.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  }
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  container.querySelectorAll('.submenu-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const open = button.parentElement.classList.toggle('submenu-open');
      button.setAttribute('aria-expanded', String(open));
    });
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      menu.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
      container.querySelectorAll('.submenu-open').forEach(item => {
        item.classList.remove('submenu-open');
        item.querySelector('.submenu-toggle').setAttribute('aria-expanded', 'false');
      });
    }
  });
  addEventListener('resize', layout, {passive:true});
  layout();
})();
