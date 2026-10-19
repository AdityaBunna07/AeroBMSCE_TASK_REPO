# AeroBMSCE Website Redesign

A responsive, static website for AeroBMSCE — the aerospace, aeromodelling and unmanned-systems innovation club at BMS College of Engineering.

- Live site: [adityabunna07.github.io/AeroBMSCE_TASK_REPO](https://adityabunna07.github.io/AeroBMSCE_TASK_REPO/)
- Stack: semantic HTML, CSS and lightweight vanilla JavaScript
- Run locally: open `index.html` or serve the repository with a static-file server

## Original website review

The original site used a fixed-width `1480px` layout, which made it difficult to use on smaller screens. Typography was small and low contrast, image dimensions were hard-coded, and the oversized header reduced useful space. Navigation varied between pages and included a broken `contact.html` destination. It also had character-encoding problems and a slideshow script that could fail on pages where its target image was absent.

## Design direction and UI/UX decisions

The redesign uses a dark aerospace HUD system: near-black navy surfaces, restrained cyan instrumentation accents, thin technical borders and a subtle engineering grid. It places the organisation’s real aircraft, UAV, competition and team photos at the centre of the experience.

The homepage follows a clear progression: mission, engineering programmes, achievements and partnership. The supporting Journey and Partners pages retain the supplied competition and tier information. Responsive grids, readable type, a sticky navigation bar and a mobile menu make the experience work across screen sizes. The site also includes a lightweight aircraft cursor and takeoff animation that disable when reduced motion is requested.

## Implementation edge case

The supplied photographs have very different aspect ratios. Direct placement made card heights inconsistent and broke the project grid at narrower sizes. The solution uses constrained image regions with `object-fit: cover`, responsive grid breakpoints and image overlays. This preserves the images while keeping the layout stable on desktop and mobile.

## GitHub Pages deployment

1. Push the repository to GitHub.
2. In **Settings → Pages**, choose **Deploy from a branch**.
3. Select the `main` branch and the `/ (root)` folder.
4. Save. GitHub publishes the site at `https://<username>.github.io/<repository-name>/` once the build finishes.
