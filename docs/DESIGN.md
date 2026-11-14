# ArmoTuSitio Icons: original geometric system

## Design language

- Artwork uses a **24×24 vector grid**, with 16px Explorer entries as its primary optical size.
- File symbols occupy the canvas directly, without a shared document frame. Strokes are 2 units before
  the 0.88 optical scale; larger shapes and open counters take priority over detail.
- Technology-specific artwork lives in `scripts/artwork.mjs`. Monograms use paths rather than fonts;
  symbols draw on familiar technology conventions and are authored locally.
- Shared semantic fallbacks and all associations remain in `scripts/generate.mjs`. Related aliases may
  intentionally share artwork. Color alone does not distinguish C/C++, JS/JSON or CSS/SCSS.
- Folders use a chromatic contour, a quiet translucent body and a right-hand semantic mark.
  Expanded folders have a separate slanted front edge; native Explorer arrows remain visible.
- No animated resources, remote images, embedded bitmaps, foreign objects, filters or external fonts.

## Palette

| Role | Meaning | Example |
|---|---|---|
| Gold | Packages, core code, root, build | Corporate `#F9ED32` Prism |
| Cyan | UI, network, routing, Go | Cool accent |
| Blue | Strongly typed/system files | TypeScript, infrastructure data |
| Violet | Declarative tooling, AI, schema | Terraform, GraphQL, prompts |
| Green | Validation, tests, pipelines | Test/spec/CI |
| Orange | Compilers, tooling, Git | Java, Git, build |
| Red | Secret/config caution, security | `.env`, credentials, auth |

Palette roles are stable across Prism, Daylight and High Contrast. Focus maps all roles to the same single neutral
stroke for reduced distraction. The actual editor colors are not automatically inferred; select the corresponding
file icon theme.

## Why declarative?

Native VS Code file associations let the editor pick the correct icon without running the extension host or scanning
local files. Filename > extension > language association precedence is honored by VS Code itself. The `fileNames`
API supports exact names, not regex/glob patterns. Spec/test compounds are mapped via `fileExtensions` when
appropriate.

## Separate product icon theme

File icon themes use image assets (SVG/PNG). Product icons in Activity Bar/status/UI require **monochrome glyph
fonts**, not SVG file mappings. This is a separate future workstream, not a feature implied by the existing package.

## Visual acceptance

Run `npm run preview` to rebuild the four themes, vector atlas and local review page.
Open `gallery/preview.html` to compare preserved previous Prism vectors against the proposal,
switch themes and inspect every file category at 16px and 32px. Before/after columns use 24px and
48px; the simulated Explorer uses 16px. `gallery/before/` is a frozen review reference, not shipped art.

Render `gallery/overview.svg` to `gallery/overview.png` at 1280×760 after changing artwork.
The PNG is a rendered catalog, not an editor screenshot. `gallery/comparison.png` captures the review page.

An actual Extension Development Host screenshot remains mandatory before release. At 16px, inspect
open counters, silhouette recognition and expanded folder edges. Test long filenames, light/dark backgrounds,
tree indenting, file decorations, selected rows and color vision differences. Automated asset checks do not
establish visual superiority or replace user acceptance in VS Code.
