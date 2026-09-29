const header = document.querySelector('[data-header]');
const toggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
function setNavigation(open) {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.querySelector('.sr-only').textContent = open ? 'Close navigation' : 'Open navigation';
  nav.classList.toggle('open', open);
  document.body.classList.toggle('nav-open', open);
}
toggle.addEventListener('click', () => setNavigation(toggle.getAttribute('aria-expanded') !== 'true'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setNavigation(false)));
document.addEventListener('keydown', event => { if (event.key === 'Escape') setNavigation(false); });
function updateHeader() { header.classList.toggle('scrolled', window.scrollY > 24); }
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reducedMotion || !('IntersectionObserver' in window)) {
  document.querySelectorAll('.reveal').forEach(element => element.classList.add('visible'));
} else {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.12, rootMargin: '0px 0px -40px' });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}
document.querySelector('[data-year]').textContent = new Date().getFullYear();
