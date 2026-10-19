const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const open = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', open);
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
  const flightArt = document.createElement('div');
  flightArt.className = 'flight-art';
  flightArt.setAttribute('aria-hidden', 'true');
  flightArt.innerHTML = `
    <svg viewBox="0 0 700 430" fill="none" preserveAspectRatio="none">
      <path class="flight-path" d="M-25 310C125 265 118 45 305 104c126 40 102 247 267 213C642 303 648 143 730 88" />
      <path class="flight-path faint" d="M-20 350C137 302 148 99 331 159c120 40 140 159 390 101" />
      <circle class="radar-ring" cx="572" cy="317" r="32" />
      <circle class="radar-dot" cx="572" cy="317" r="4" />
    </svg>
    <div class="telemetry telemetry-top"><b>FLIGHT / 01</b><span>ALT&nbsp;&nbsp; 4,210 M</span></div>
    <div class="telemetry telemetry-bottom"><span>26.12° N&nbsp;&nbsp;77.34° E</span><b>LIVE SYSTEM</b></div>`;
  hero.append(flightArt);

  const flightStyles = document.createElement('style');
  flightStyles.textContent = `
    .flight-art{position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:1}.flight-art svg{position:absolute;width:min(67vw,850px);height:70%;right:-40px;bottom:4%;opacity:.9}.flight-path{stroke:#58d6ff;stroke-width:1.2;stroke-dasharray:7 9;animation:dash 16s linear infinite}.flight-path.faint{stroke:#1479ff;opacity:.55;animation-direction:reverse}.radar-ring{stroke:#58d6ff;stroke-width:1;animation:pulse 2.8s ease-out infinite;transform-origin:572px 317px}.radar-dot{fill:#58d6ff;filter:drop-shadow(0 0 7px #58d6ff)}.telemetry{position:absolute;color:#b7cae0;font:500 9px/1.5 'DM Mono',monospace;letter-spacing:.12em;display:flex;gap:18px}.telemetry b{color:#58d6ff;font-weight:500}.telemetry-top{right:5%;top:17%}.telemetry-bottom{right:6%;bottom:8%}@keyframes dash{to{stroke-dashoffset:-160}}@keyframes pulse{0%{transform:scale(.4);opacity:1}100%{transform:scale(2.5);opacity:0}}@media(max-width:760px){.flight-art svg{width:120vw;right:-200px;opacity:.5}.telemetry{display:none}}`;
  document.head.append(flightStyles);
}

if (hero) {
  const takeoffScene = document.createElement('div');
  takeoffScene.className = 'takeoff-scene';
  takeoffScene.setAttribute('aria-hidden', 'true');
  takeoffScene.innerHTML = `
    <div class="runway"><i></i><i></i><i></i><i></i><i></i></div>
    <div class="takeoff-trail"></div>
    <div class="takeoff-jet">
      <svg viewBox="0 0 120 120" fill="none">
        <path d="M101 17c-6 0-15 4-24 10L48 47 17 34 8 43l25 20-18 24 9 9 24-18 20 25 9-9-13-31 20-29c6-9 10-18 10-24 0-4-3-7-7-7Z" fill="#7de6ff"/>
        <path d="M77 27c9-6 18-10 24-10 4 0 7 3 7 7-7 3-14 8-20 15l-18 20-12-5 19-27Z" fill="#fff" opacity=".8"/>
        <path d="m48 78 8 17-8 8-5-12-12-5 8-8 9 0Z" fill="#1479ff"/>
      </svg>
    </div>`;
  hero.prepend(takeoffScene);

  const takeoffStyles = document.createElement('style');
  takeoffStyles.textContent = `
    .takeoff-scene{position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:0}.runway{position:absolute;bottom:8%;right:-5%;width:72%;height:2px;background:linear-gradient(90deg,transparent,rgba(88,214,255,.8),transparent);transform:rotate(-13deg);opacity:.5}.runway i{position:absolute;width:32px;height:3px;background:#58d6ff;top:-1px;box-shadow:0 0 10px #58d6ff}.runway i:nth-child(1){left:15%}.runway i:nth-child(2){left:31%}.runway i:nth-child(3){left:47%}.runway i:nth-child(4){left:63%}.runway i:nth-child(5){left:79%}.takeoff-trail{position:absolute;left:-8%;bottom:11%;width:25%;height:2px;background:linear-gradient(90deg,transparent,#58d6ff);filter:drop-shadow(0 0 5px #58d6ff);transform-origin:right center;animation:climb-trail 10s cubic-bezier(.2,.65,.4,1) infinite}.takeoff-jet{position:absolute;left:-10%;bottom:7%;width:72px;height:72px;filter:drop-shadow(0 0 10px rgba(88,214,255,.8));animation:takeoff 10s cubic-bezier(.2,.65,.4,1) infinite}.takeoff-jet svg{width:100%;height:100%;transform:rotate(-31deg)}@keyframes takeoff{0%,8%{transform:translate(0,0) scale(.75);opacity:0}12%{opacity:1}55%{transform:translate(54vw,-30vh) scale(.9);opacity:1}72%,100%{transform:translate(84vw,-55vh) scale(.55);opacity:0}}@keyframes climb-trail{0%,8%{transform:scaleX(.05);opacity:0}12%{opacity:1}55%{transform:translate(52vw,-30vh) scaleX(3);opacity:.8}72%,100%{transform:translate(84vw,-55vh) scaleX(1);opacity:0}}@media(max-width:760px){.takeoff-scene{opacity:.58}.takeoff-jet{width:52px;height:52px}.runway{width:115%;right:-45%}}@media(prefers-reduced-motion:reduce){.takeoff-jet,.takeoff-trail{animation:none;opacity:.35;transform:translate(35vw,-18vh)}}`;
  document.head.append(takeoffStyles);

  const takeoffLayering = document.createElement('style');
  takeoffLayering.textContent = '.takeoff-scene{z-index:1!important;display:block!important;opacity:1!important}.flight-art{z-index:2!important}.hero-copy,.scroll-cue{z-index:3!important}.takeoff-jet{left:8%!important;bottom:13%!important;opacity:1!important;animation:always-visible-takeoff 14s cubic-bezier(.22,.7,.3,1) infinite!important}.takeoff-trail{left:0!important;bottom:17%!important;opacity:.9!important;animation:always-visible-trail 14s cubic-bezier(.22,.7,.3,1) infinite!important}@keyframes always-visible-takeoff{0%{transform:translate(0,0) scale(.8);opacity:1}55%{transform:translate(51vw,-27vh) scale(.94);opacity:1}84%{transform:translate(78vw,-43vh) scale(.68);opacity:0}85%{transform:translate(0,0) scale(.8);opacity:0}88%,100%{transform:translate(0,0) scale(.8);opacity:1}}@keyframes always-visible-trail{0%{transform:scaleX(.2);opacity:.75}55%{transform:translate(49vw,-27vh) scaleX(3.1);opacity:.7}84%{transform:translate(78vw,-43vh) scaleX(1);opacity:0}85%{transform:translate(0,0) scaleX(.2);opacity:0}88%,100%{transform:translate(0,0) scaleX(.2);opacity:.75}}';
  document.head.append(takeoffLayering);
}

if (window.matchMedia('(pointer: fine)').matches) {
  const cursor = document.createElement('div');
  cursor.className = 'aircraft-cursor';
  cursor.setAttribute('aria-hidden', 'true');
  cursor.innerHTML = '<svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><path d="M52.6 8.2c-2.4.2-6.1 1.2-9.8 3.3l-12 6.9-17-8.1-4.7 4.8 13.5 11.4-9.1 10.6-7.3-.6-3.4 3.6 10.7 4.7 4.8 10.7 3.5-3.7-.8-7.2L41.5 31l11.1 13.6 4.9-4.8-8.2-17c2.1-3.8 3.1-7.4 3.3-9.8.1-2.8-2.2-4.9-5-4.8Z" fill="#58d6ff"/><path d="m30.8 18.4 12-6.9c3.7-2.1 7.4-3.1 9.8-3.3-2.5 1.3-5 3.2-7.3 5.6l-7.6 7.8-6.9-3.2Z" fill="#b9f1ff"/><path d="m26.5 40.5 3.3 7.1-1.2 3.6-2.1-4.5-4.5-2.1 3.5-1.2Z" fill="#1479ff"/></svg>';
  document.body.append(cursor);

  const cursorStyles = document.createElement('style');
  cursorStyles.textContent = `.aircraft-cursor{position:fixed;z-index:9999;width:38px;height:38px;pointer-events:none;transform:translate(-5px,-5px) rotate(-10deg);filter:drop-shadow(0 0 7px rgba(88,214,255,.72));transition:opacity .15s ease,transform .18s ease;opacity:0}.aircraft-cursor svg{width:100%;height:100%;display:block}.aircraft-cursor.visible{opacity:1}html.has-aircraft-cursor,html.has-aircraft-cursor body{cursor:none}html.has-aircraft-cursor a,html.has-aircraft-cursor button{cursor:pointer}`;
  document.head.append(cursorStyles);
  document.documentElement.classList.add('has-aircraft-cursor');

  window.addEventListener('pointermove', event => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
    cursor.classList.add('visible');
  });
  document.addEventListener('mouseleave', () => cursor.classList.remove('visible'));
}
