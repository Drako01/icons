# ArmoTuSitio Icons: original geometric system

## Design language

- Artwork is designed on a **24×24 vector grid** for rendering in 16px Explorer entries, with simple 1.5px outer contours and 2.15px semantic glyph strokes before scale.
- Every file has the same neutral silhouette and identifiable top-right folded tab; the central geometry represents a developer concept instead of duplicating a third-party brand logo.
- Closed and expanded folders use distinctly different mouth/body edges while retaining VS Code's standard expansion arrow.
- No animated resources, remote images, embedded bitmap images, foreign objects, filters or external fonts. Color palette and glyph markup live in the deterministic `scripts/generate.mjs`.

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

Palette roles are stable across Prism, Daylight and High Contrast. Focus maps all roles to the same single neutral stroke for reduced distraction. The actual editor colors are not automatically inferred; select the corresponding file icon theme.

## Why declarative?

Native VS Code file associations let the editor pick the correct icon without running the extension host or scanning local files. Filename > extension > language association precedence is honored by VS Code itself. The `fileNames` API supports exact names, not regex/glob patterns. Spec/test compounds are mapped via `fileExtensions` when appropriate.

## Separate product icon theme

File icon themes use image assets (SVG/PNG). Product icons in Activity Bar/status/UI require **monochrome glyph fonts**, not SVG file mappings. This is a separate future workstream, not a feature implied by the existing package.

## Visual acceptance

Actual screenshot from the Extension Development Host is mandatory before release. At 16px, inspect visibility of the fold, inner glyph and opened folder edges; do not ship a catalog that only looks good zoomed to 48px. Test long filenames, light/dark backgrounds, tree indenting, file decorations, selected rows and color vision differences. `gallery/overview.svg` is a concept atlas, not a real editor capture.
