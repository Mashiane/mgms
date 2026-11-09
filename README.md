# MGMS Holdings — Phase 02 (profile-aligned)

This revision uses the supplied 2025 MGMS Holdings company profile as the content source.

## Apply
Copy `index.html`, `styles.css`, `script.js` and `README.md` into the root of the cloned MGMS repository. Copy the supplied transparent `assets/logo.png` over the existing logo. All other existing images in `assets/` are retained.

## Required assets
The package includes a replacement `assets/logo.png` with its white background removed and transparency preserved. The remaining referenced photography is expected to remain in the repository's existing `assets/` directory.

The six sector cards currently map to existing repository imagery. Agriculture and logistics use their matching images; Energy uses `values-infrastructure.jpg`, Hospitality uses `contact.jpg`, Technology uses `mission-team.jpg`, and Financial Services uses `about-boardroom.jpg`. Review these image-to-sector associations and replace any that do not accurately represent the sector before production.

## Profile facts represented
- MGMS Holdings is described as a 100% Black-owned investment company headquartered in South Africa.
- Six sectors: Agriculture, Energy, Hospitality, Logistics, Technology, Financial Services.
- Vision and mission, five core values, business philosophy and social-responsibility commitments follow the profile text.
- Contact: info@mgms.africa; www.mgms.africa; 11 Woodlands Dr, Woodlands, Sandton, 2080.

## Technical
Plain HTML/CSS/vanilla JS; no React, Node.js or ES modules. DaisyUI 5 stylesheet is included by CDN. Google Fonts are remote. No npm build process is required.

## Important
This is a profile-aligned content and layout revision. The supplied logo is now transparent and replaces the previous logo asset. The original repository's remaining extracted assets need to be reviewed and mapped to the additional sector cards. Test responsive behaviour, accessibility, actual live-site routing, image loading and SEO before production deployment.
