# AeroBMSCE

A responsive, static showcase website for AeroBMSCE — the aerospace, aeromodelling and unmanned systems innovation club at BMS College of Engineering.

## Run locally

Open `index.html` in a browser, or serve this folder with any static-file server. No build process or backend is required.

## Original-site review

The starting site had an oversized fixed `1480px` layout, making it awkward on smaller screens. Very small serif text had low contrast on a dark background, image dimensions were hard-coded, and the header logo consumed excessive vertical space. Navigation was inconsistent and included a broken `contact.html` link. The content also contained character-encoding errors and the slideshow script could fail when loaded without its target image.

## Design route

The revised site uses an editorial aviation direction: deep green, warm paper and high-visibility lime. Large display typography and generous spacing give the engineering work a sense of scale, while monospace labels nod to technical documentation. It tells one clear story — mission, work, results and partnership — with supporting Journey and Partners pages linked from the main calls to action.

The CSS is responsive down to small screens, with a compact navigation menu, fluid type and layouts that collapse without hiding content. The project is framework-free so it can deploy directly through GitHub Pages.

## An implementation edge case

The supplied photos have very different aspect ratios. Without a shared treatment, the card grid jumped in height. I used constrained card areas with `object-fit: cover`, selected focal placements, and a responsive grid that changes shape at narrower widths. This keeps the visual rhythm consistent while preserving the images’ usefulness on every screen size.

## Deployment

1. Push this project to your GitHub repository.
2. Go to **Settings → Pages**.
3. Select **Deploy from a branch**, then `main` and `/ (root)`.
4. Save; GitHub will show the published `github.io` URL when deployment completes.
