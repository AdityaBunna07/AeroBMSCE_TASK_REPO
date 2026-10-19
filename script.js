const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const effects = document.createElement('link'); effects.rel = 'stylesheet'; effects.href = 'effects.css'; document.head.append(effects);
if (menu && nav) { menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); }); nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); })); }
const year = document.querySelector('#year'); if (year) year.textContent = new Date().getFullYear();
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) { const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), {threshold:.08}); document.querySelectorAll('.reveal').forEach(section => observer.observe(section)); }
const hero = document.querySelector('.hero');
if (hero) {
  const takeoff = document.createElement('div');
  takeoff.className = 'takeoff-overlay';
  takeoff.setAttribute('aria-hidden', 'true');
  takeoff.innerHTML = '<div class="runway-lights"><i></i><i></i><i></i><i></i></div><div class="jet-trail"></div><div class="takeoff-jet"><svg viewBox="0 0 64 64"><path d="M52.6 8.2c-2.4.2-6.1 1.2-9.8 3.3l-12 6.9-17-8.1-4.7 4.8 13.5 11.4-9.1 10.6-7.3-.6-3.4 3.6 10.7 4.7 4.8 10.7 3.5-3.7-.8-7.2L41.5 31l11.1 13.6 4.9-4.8-8.2-17c2.1-3.8 3.1-7.4 3.3-9.8.1-2.8-2.2-4.9-5-4.8Z"/><path class="jet-highlight" d="m30.8 18.4 12-6.9c3.7-2.1 7.4-3.1 9.8-3.3-2.5 1.3-5 3.2-7.3 5.6l-7.6 7.8-6.9-3.2Z"/></svg></div>';
  hero.prepend(takeoff);
}
if (matchMedia('(pointer:fine)').matches) {
  const cursor = document.createElement('div');
  cursor.className = 'jet-cursor';
  cursor.setAttribute('aria-hidden', 'true');
  cursor.innerHTML = '<svg viewBox="0 0 64 64"><path d="M52.6 8.2c-2.4.2-6.1 1.2-9.8 3.3l-12 6.9-17-8.1-4.7 4.8 13.5 11.4-9.1 10.6-7.3-.6-3.4 3.6 10.7 4.7 4.8 10.7 3.5-3.7-.8-7.2L41.5 31l11.1 13.6 4.9-4.8-8.2-17c2.1-3.8 3.1-7.4 3.3-9.8.1-2.8-2.2-4.9-5-4.8Z"/><path class="jet-highlight" d="m30.8 18.4 12-6.9c3.7-2.1 7.4-3.1 9.8-3.3-2.5 1.3-5 3.2-7.3 5.6l-7.6 7.8-6.9-3.2Z"/></svg>';
  document.body.append(cursor);
  document.body.classList.add('jet-cursor-active');
  cursor.style.transform = `translate3d(${innerWidth / 2}px,${innerHeight / 2}px,0)`;
  cursor.classList.add('visible');
  addEventListener('pointermove', event => { cursor.style.transform = `translate3d(${event.clientX}px,${event.clientY}px,0)`; cursor.classList.add('visible'); }, {passive:true});
  document.addEventListener('mouseleave', () => cursor.classList.remove('visible'));
}
