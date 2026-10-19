const siteHeader = document.querySelector('.site-header');
const navigation = document.querySelector('.main-nav');

if (siteHeader && navigation) {
  let menuButton = siteHeader.querySelector('.menu-toggle');
  if (!menuButton) {
    menuButton = document.createElement('button');
    menuButton.className = 'menu-toggle';
    menuButton.type = 'button';
    menuButton.textContent = 'Menu';
    siteHeader.insertBefore(menuButton, navigation);
  }
  navigation.id ||= 'main-nav';
  menuButton.setAttribute('aria-controls', navigation.id);
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const hero = document.querySelector('.hero');
if (hero) {
  const flightLayer = document.createElement('div');
  flightLayer.className = 'flight-layer';
  flightLayer.setAttribute('aria-hidden', 'true');
  flightLayer.innerHTML = `<svg viewBox="0 0 900 550" preserveAspectRatio="none"><path d="M-20 410C150 350 135 113 364 155c167 31 150 214 327 157 95-31 126-117 232-159"/><circle cx="690" cy="312" r="28"/><circle class="flight-dot" cx="690" cy="312" r="3"/></svg><span>FLIGHT SYSTEM / ACTIVE</span>`;
  hero.prepend(flightLayer);
}

const revealTargets = document.querySelectorAll('.section, .inner-page > section');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  }), { threshold: .08 });
  revealTargets.forEach(section => { section.classList.add('reveal'); revealObserver.observe(section); });
}

if (window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const reticle = document.createElement('div');
  reticle.className = 'precision-reticle';
  reticle.setAttribute('aria-hidden', 'true');
  reticle.innerHTML = '<i></i><b></b><em></em>';
  document.body.append(reticle);
  window.addEventListener('pointermove', event => {
    reticle.style.transform = `translate3d(${event.clientX}px,${event.clientY}px,0)`;
    reticle.classList.add('visible');
  }, { passive: true });
  document.addEventListener('mouseleave', () => reticle.classList.remove('visible'));
}

const interfaceStyles = document.createElement('style');
interfaceStyles.textContent = `
  .site-header{position:sticky;top:0;z-index:50;background:rgba(6,19,38,.93);backdrop-filter:blur(12px)}
  .site-header a:focus-visible,.button:focus-visible,.menu-toggle:focus-visible{outline:2px solid #58d6ff;outline-offset:5px}.main-nav a{position:relative}.main-nav a::after{content:"";position:absolute;left:0;right:0;bottom:-7px;height:1px;background:#58d6ff;transform:scaleX(0);transform-origin:left;transition:transform .2s}.main-nav a:hover::after,.main-nav a:focus-visible::after{transform:scaleX(1)}
  .hero-copy{z-index:2}.flight-layer{position:absolute;inset:0;z-index:1;overflow:hidden;pointer-events:none}.flight-layer svg{position:absolute;right:-2%;bottom:-3%;width:min(68vw,890px);height:78%;opacity:.68}.flight-layer path{fill:none;stroke:#58d6ff;stroke-width:1.15;stroke-dasharray:6 10;animation:flight-dash 18s linear infinite}.flight-layer circle{fill:none;stroke:#58d6ff;stroke-width:1;transform-origin:690px 312px;animation:reticle-pulse 3s ease-out infinite}.flight-layer .flight-dot{fill:#58d6ff;stroke:none;animation:none;filter:drop-shadow(0 0 5px #58d6ff)}.flight-layer span{position:absolute;right:6%;bottom:8%;color:#b7cae0;font:500 9px 'DM Mono',monospace;letter-spacing:.13em}.button{transition:transform .2s,background .2s,box-shadow .2s}.button:hover{transform:translateY(-2px);box-shadow:0 10px 26px rgba(20,121,255,.22)}.build-card{transition:transform .25s,background .25s}.build-card:hover{transform:translateY(-5px);background:#104276}.build-card img{transition:transform .45s}.build-card:hover img{transform:scale(1.045)}.reveal{opacity:0;transform:translateY(22px);transition:opacity .55s ease,transform .55s ease}.reveal.is-visible{opacity:1;transform:none}
  .precision-reticle{position:fixed;left:0;top:0;z-index:9999;width:22px;height:22px;margin:-11px;pointer-events:none;opacity:0;transition:opacity .15s;filter:drop-shadow(0 0 5px rgba(88,214,255,.65))}.precision-reticle.visible{opacity:1}.precision-reticle i,.precision-reticle b,.precision-reticle em{position:absolute;display:block}.precision-reticle i{inset:0;border:1px solid #58d6ff;border-radius:50%}.precision-reticle b{left:50%;top:50%;width:4px;height:4px;margin:-2px;background:#58d6ff;border-radius:50%}.precision-reticle em{left:50%;top:-4px;width:1px;height:30px;background:linear-gradient(#58d6ff 0 5px,transparent 5px 25px,#58d6ff 25px)}
  @keyframes flight-dash{to{stroke-dashoffset:-180}}@keyframes reticle-pulse{0%{transform:scale(.5);opacity:1}100%{transform:scale(2.2);opacity:0}}@media(max-width:760px){.flight-layer svg{width:120vw;right:-50%;opacity:.38}.flight-layer span{display:none}}@media(prefers-reduced-motion:reduce){*,*::before,*::after{scroll-behavior:auto!important;animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}.reveal{opacity:1;transform:none}}
`;
document.head.append(interfaceStyles);

const heroActionStyles = document.createElement('style');
heroActionStyles.textContent = '.hero-actions{display:flex;flex-wrap:wrap;gap:12px}.button-ghost{border:1px solid rgba(233,244,255,.48);color:#e9f4ff;background:rgba(6,19,38,.22)}.button-ghost:hover{background:rgba(88,214,255,.12);border-color:#58d6ff}@media(max-width:420px){.hero-actions .button{width:100%;justify-content:space-between}}';
document.head.append(heroActionStyles);
