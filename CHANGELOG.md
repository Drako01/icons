# Changelog

## [0.1.1] — Product presentation and automated trusted release

- Complete professional bilingual README with a PNG preview rendered from the original icon SVG atlas.
- Consistent ArmoTuSitio footer, author credit, support, license and Marketplace/Open VSX installation links.
- Updated Marketplace gallery branding, release documentation and accurate publication status.
- Version bump to 0.1.1 without changing any of the four icon palettes or SVG drawings.
- Automatic OIDC publication to Marketplace and Open VSX after a green, version-bumping PR merge.
- Publish exactly the PR's validated VSIX and SHA-256; no repeated post-merge CI, no new build.
- GitHub Release assets use the same approved artifact; retain manual recovery by CI head SHA/run ID.

## [0.1.0] — Original Prism preview

- Original vector artwork with four coordinated file icon themes: Prism, Daylight, Focus and High Contrast.
- 77 file categories, 44 folder categories, 168 extension associations, 94 named file associations and 112 folder associations.
- Distinct open/closed folder states; no extension host activation, network calls or telemetry.
- Deterministic SVG generator, cross-platform CI, VSIX inspection and SHA-256 verification.
- First public version published manually to Visual Studio Marketplace and Open VSX by the owner.
