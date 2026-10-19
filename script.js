const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (!document.querySelector('link[href="effects.css"]')) {
  const effects = document.createElement('link');
  effects.rel = 'stylesheet';
  effects.href = 'effects.css';
  document.head.append(effects);
}

if (menu && nav) {
  menu.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  }));
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }), { threshold: .08 });
  document.querySelectorAll('.reveal').forEach(section => observer.observe(section));
}
