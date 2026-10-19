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

const hero = document.querySelector('.hero');
if (hero && !document.querySelector('.flight-simulation')) {
  const simulation = document.createElement('section');
  simulation.className = 'flight-simulation';
  simulation.setAttribute('aria-labelledby', 'simulation-title');
  simulation.innerHTML = `<div class="simulation-copy"><p class="eyebrow">LIVE / FLIGHT SIMULATION</p><h2 id="simulation-title">TAKEOFF<br><span>SEQUENCE.</span></h2><p>Runway acceleration, rotation and climb illustrated with the AeroBMSCE aircraft platform.</p><dl><div><dt>MODE</dt><dd>TAKEOFF</dd></div><div><dt>STATUS</dt><dd>ACTIVE</dd></div><div><dt>TRAJECTORY</dt><dd>CLIMB</dd></div></dl></div><div class="sim-screen" aria-label="Animated aircraft takeoff simulation"><div class="sim-grid"></div><div class="sim-runway"><i></i><i></i><i></i><i></i><i></i></div><div class="sim-path"><svg viewBox="0 0 700 320" preserveAspectRatio="none"><path d="M25 263C178 262 288 262 369 224c95-44 109-135 282-183"/></svg></div><img class="sim-aircraft" src="images/cad-plane.png" alt=""><div class="sim-label start">RUNWAY / 09</div><div class="sim-label rotate">ROTATE</div><div class="sim-label climb">CLIMB / 12°</div></div>`;
  hero.insertAdjacentElement('afterend', simulation);
}

if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }), { threshold: .08 });
  document.querySelectorAll('.reveal').forEach(section => observer.observe(section));
}
