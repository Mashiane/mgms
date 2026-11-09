# MGMS Holdings — Phase 02 (profile-aligned)

This revision uses the supplied 2025 MGMS Holdings company profile as the content source.

## Apply
Copy `index.html`, `styles.css`, `script.js` and `README.md` into the root of the cloned MGMS repository. Copy the supplied transparent `assets/logo.png` over the existing logo. All other existing images in `assets/` are retained.

## Required assets
The package includes the transparent `assets/logo.png` for the website header/footer and the supplied `assets/favicon.png` for the browser tab icon. The remaining referenced photography is expected to remain in the repository's existing `assets/` directory.

The six sector cards currently map to existing repository imagery. Agriculture and logistics use their matching images; Energy uses `values-infrastructure.jpg`, Hospitality uses `contact.jpg`, Technology uses `mission-team.jpg`, and Financial Services uses `about-boardroom.jpg`. Review these image-to-sector associations and replace any that do not accurately represent the sector before production.

## Profile facts represented
- MGMS Holdings is described as a 100% Black-owned investment company headquartered in South Africa.
- Six sectors: Agriculture, Energy, Hospitality, Logistics, Technology, Financial Services.
- Vision and mission, five core values, business philosophy and social-responsibility commitments follow the profile text.
- Contact: info@mgms.africa; www.mgms.africa; 11 Woodlands Dr, Woodlands, Sandton, 2080.

## Performance and motion update
- AOS-style scroll reveals are implemented with native `IntersectionObserver` and CSS. The site does not download the AOS library, so animation adds no third-party JavaScript request.
- The hero photograph is now a real image element with high fetch priority and a preload hint, rather than a CSS background discovered after stylesheet parsing.
- Below-the-fold photographs use native lazy loading and asynchronous decoding. Image dimensions are declared to reduce layout shift while images load.
- Google Fonts are loaded with `display=swap`; the CSS `@import` has been removed.
- The DaisyUI CDN stylesheet was removed because this standalone page does not use DaisyUI component classes. Removing an unused render-blocking stylesheet reduces external work.
- Animations respect `prefers-reduced-motion` and reveal content immediately if IntersectionObserver is unavailable.

## Technical
Plain HTML/CSS/vanilla JS; no React, Node.js or ES modules. No runtime animation library or npm build process is required. Google Fonts remain an optional remote font request; system fallbacks are defined in CSS.

## Important
This is a profile-aligned content and layout revision. The supplied logo is transparent and replaces the previous logo asset. The supplied favicon image is used separately as `assets/favicon.png`. The original JPEG photographs are retained as fallback sources, while modern browsers select responsive WebP variants. The site still requires final review of image-to-sector associations, responsive behaviour, accessibility, live-site routing and SEO before production deployment.


## Phase 02 – WebP image optimisation release

- Added responsive WebP variants (small, medium and full-width) for all eight photographs used by the page.
- Updated image markup to use `<picture>` and width-descriptor `srcset` candidates, with WebP preferred and the original JPEG as the fallback.
- Kept the JPEG files for compatibility and graceful fallback.
- Preloads the hero WebP with high fetch priority; below-the-fold images retain lazy loading and asynchronous decoding.
- The source JPEGs were extracted from the supplied MGMS company profile PDF and encoded as WebP at quality 80.
- No external image service or runtime conversion is required; all image assets are locally hosted in `assets/`.

All required WebP variants and JPEG fallbacks are included in this release ZIP. Extract the package into the repository root, preserving the `assets/` directory structure.


### Image payload comparison

At the full source dimensions, the eight original JPEG photographs total 5.24 MB; their largest responsive WebP candidates total approximately 1.34 MB (about 74% smaller). Responsive width variants let browsers select smaller files on narrower screens. Actual transfer size varies by viewport and browser selection.
