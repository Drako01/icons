# Competitive benchmark — 13 November 2026

Evidence comes from the official Marketplace / GitHub documentation. Opportunities below are **product hypotheses**, not proven defects in competing extensions.

| Competing pack | Strength supported by source | ATS Icons design response |
|---|---|---|
| Material Icon Theme | Huge coverage, color/saturation controls, icon packs, file/folder custom associations and custom SVGs | Restraint by default, strong silhouette language, semantic color that stays consistent |
| vscode-icons | Extension associations, user icons, framework auto-detection | Broad static associations and original art without background framework probing |
| Symbols | Coherent drawing conventions, contributor Figma guidelines and generated previews | Vector-first art discipline and coherent forms across four deliberate modes |
| Catppuccin Icons | Harmonized themes, monochrome modes, custom associations | Unified brand system and Focus monochrome plus separately tuned Daylight |
| Monokai Pro | Original icons designed specifically for small sidebar sizes | Make 16px testing and recognition accuracy explicit release requirements |
| Fluent Icons | Strong product-icon experience, consistent interface symbols | Build file icons now; potentially build a distinct font-based product icon module later |

Sources:
- https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme
- https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons
- https://marketplace.visualstudio.com/items?itemName=miguelsolorio.symbols
- https://marketplace.visualstudio.com/items?itemName=catppuccin.catppuccin-vsc-icons
- https://marketplace.visualstudio.com/items?itemName=monokai.theme-monokai-pro-vscode
- https://marketplace.visualstudio.com/items?itemName=miguelsolorio.fluent-icons
- Official file-theme API: https://code.visualstudio.com/api/extension-guides/file-icon-theme
- Official product-theme API: https://code.visualstudio.com/api/extension-guides/product-icon-theme

## Decision framework

**Competitive advantage to test**, not assume:

1. **Time-to-recognize:** time required to find 12 common files and folders among 100 project entries.
2. **Misclassification:** how often someone confuses `*.ts` vs `*.tsx`, lock vs config, tests vs infrastructure, and file vs folder.
3. **Low-noise design:** cognitive effort on large mixed-language monorepos; prefer subdued Focus when needed.
4. **Responsive craft:** compare true 16px raster appearance on 100%/125% Windows scale and Retina/HiDPI.
5. **Safety and footprint:** no runtime, telemetry or external asset dependencies; deterministic build and packaged checksum.
6. **Feedback loop:** demand-driven icon requests with reproducible issue templates and a maintained filename coverage table.

We should not claim "best" before independent usability tests against current competitors. Do not copy logos/icons from their artwork or import their assets, even if their source license might permit it.
