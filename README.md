# AeroBMSCE Website Redesign

A responsive, static website for AeroBMSCE — the aerospace, aeromodelling and unmanned-systems innovation club at BMS College of Engineering.

- Live site: [adityabunna07.github.io/AeroBMSCE_TASK_REPO](https://adityabunna07.github.io/AeroBMSCE_TASK_REPO/)
- Stack: semantic HTML, CSS and lightweight vanilla JavaScript
- Run locally: open `index.html` or serve the repository with a static-file server

## 1. Original website flaws

The original website used a fixed-width `1480px` layout, which made it difficult to use on smaller screens. Its typography was small and low contrast, image dimensions were hard-coded, and the oversized header used excessive vertical space. Navigation was inconsistent between pages and included a broken `contact.html` link. There were also character-encoding issues, and the slideshow script could fail when a page did not contain the image element it expected.

## 2. Design route and UI/UX decisions

I chose a dark aerospace HUD design system: near-black navy surfaces, restrained cyan instrumentation accents, thin technical borders and a subtle engineering-grid texture. This direction supports AeroBMSCE’s aviation and engineering identity while keeping the interface clean and readable. The supplied aircraft, UAV, competition and team photographs are used throughout the site rather than unrelated stock imagery.

The homepage follows a direct story: mission, engineering programmes, achievements and partnership. Journey and Partners retain the supplied competition, team, contact and tier information. Responsive grids, readable typography, a sticky navigation bar, keyboard focus styles and a mobile menu make the site practical across screen sizes.

## 3. Problem / edge case: aircraft takeoff simulation

One edge case occurred while adding the hero-background aircraft takeoff simulation. The animated aircraft and runway lights initially sat behind the hero photograph because of CSS stacking order, so the animation existed in the page but was not visible. It also needed to remain decorative: it could not block the links, page text or normal navigation.

I fixed this by giving the background photograph an explicit lower stacking layer and placing the simulation above it but below the hero content. The simulation uses `pointer-events: none`, so it cannot intercept clicks or text selection. It is implemented with lightweight inline SVG and CSS keyframes rather than a large animation dependency. For users who request reduced motion, it switches to a static aircraft and trail rather than disappearing entirely; on small screens it scales down to protect the layout.

## GitHub Pages deployment

1. Push the repository to GitHub.
2. In **Settings → Pages**, choose **Deploy from a branch**.
3. Select the `main` branch and the `/ (root)` folder.
4. Save. GitHub publishes the site at `https://<username>.github.io/<repository-name>/` once the build finishes.
