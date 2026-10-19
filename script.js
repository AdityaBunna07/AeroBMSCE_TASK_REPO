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

const competitiveAircraftImage = document.querySelector('.project-image img[src="images/photo1.jpg"]');
const featuredAchievementImage = document.querySelector('.featured-result img[src="images/photo5.jpg"]');
if (competitiveAircraftImage && featuredAchievementImage) {
  competitiveAircraftImage.src = 'images/photo5.jpg';
  competitiveAircraftImage.alt = 'AeroBMSCE team';
  featuredAchievementImage.src = 'images/photo1.jpg';
  featuredAchievementImage.alt = 'AeroBMSCE aircraft at a competition';
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

const journey = document.querySelector('.milestones');
if (journey && !document.querySelector('.image-log')) {
  const imageLog = document.createElement('section');
  imageLog.className = 'image-log reveal';
  imageLog.innerHTML = `<p class="eyebrow">FIELD LOG / TEAM MOMENTS</p><div class="image-log-grid"><figure><img src="images/photo4.jpg" alt="AeroBMSCE aircraft and team activity" loading="lazy"><figcaption>FIELD TESTING / AEROBMSCE</figcaption></figure><figure class="club-mark"><img src="images/logo.png" alt="AeroBMSCE club mark" loading="lazy"><figcaption>CLUB IDENTITY / AEROBMSCE</figcaption></figure><figure><img src="images/photo7.jpg" alt="AeroBMSCE team at a competition" loading="lazy"><figcaption>COMPETITION LOG / TEAM MOMENTS</figcaption></figure></div>`;
  journey.insertAdjacentElement('afterend', imageLog);
}

const tiers = document.querySelectorAll('.tiers-new article');
const tierIcons = ['images/icon-platinum.png', 'images/icon-gold.png', 'images/icon-silver.png', 'images/icon-technical.png'];
tiers.forEach((tier, index) => {
  if (!tier.querySelector('.tier-icon')) tier.insertAdjacentHTML('afterbegin', `<img class="tier-icon" src="${tierIcons[index]}" alt="" loading="lazy">`);
});

const ecosystem = document.querySelector('.ecosystem > div');
if (ecosystem && !ecosystem.querySelector('[src="images/drkstore.png"]')) {
  const ecosystemAssets = ['images/flow5.png', 'images/drkstore.png', 'images/uav-marketplace.png', 'images/drdo.png', 'images/csir-nal.png'];
  ecosystemAssets.forEach(source => {
    const image = document.createElement('img');
    image.src = source;
    image.alt = source.split('/').pop().replace('.png', '').replaceAll('-', ' ');
    image.loading = 'lazy';
    ecosystem.append(image);
  });
}
