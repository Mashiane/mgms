# MGMS Holdings — Phase 02 (profile-aligned)

This revision uses the supplied 2025 MGMS Holdings company profile as the content source.

## Apply
Copy `index.html`, `styles.css` and `script.js` into the root of the cloned MGMS repository. Keep its existing `assets/` directory and add the six sector image files listed below if they are not already present.

## Required assets
Existing in the repository (confirmed): `logo.png`, `hero-building.jpg`, `about-boardroom.jpg`, `agriculture.jpg`, `logistics.jpg`, `community.jpg`.

The six sector cards currently map to existing repository imagery. Agriculture and logistics use their matching images; Energy uses `values-infrastructure.jpg`, Hospitality uses `contact.jpg`, Technology uses `mission-team.jpg`, and Financial Services uses `about-boardroom.jpg`. Review these image-to-sector associations and replace any that do not accurately represent the sector before production.

## Profile facts represented
- MGMS Holdings is described as a 100% Black-owned investment company headquartered in South Africa.
- Six sectors: Agriculture, Energy, Hospitality, Logistics, Technology, Financial Services.
- Vision and mission, five core values, business philosophy and social-responsibility commitments follow the profile text.
- Contact: info@mgms.africa; www.mgms.africa; 11 Woodlands Dr, Woodlands, Sandton, 2080.

## Technical
Plain HTML/CSS/vanilla JS; no React, Node.js or ES modules. DaisyUI 5 stylesheet is included by CDN. Google Fonts are remote. No npm build process is required.

## Important
This is a profile-aligned content and layout revision, not a final release. The original repository's remaining extracted assets need to be reviewed and mapped to the additional sector cards. Test responsive behaviour, accessibility, actual live-site routing, image loading and SEO before production deployment.
