(() => {
  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  const setOpen = open => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('[data-menu-label]').textContent = open ? 'Close' : 'Menu';
    nav.classList.toggle('is-open', open);
  };

  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
  window.matchMedia('(min-width: 901px)').addEventListener('change', event => {
    if (event.matches) setOpen(false);
  });
})();
