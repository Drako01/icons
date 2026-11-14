// Optical-size artwork: no fonts, filters, bitmaps or external dependencies.
// Shapes occupy the grid directly; color supplements rather than carries identity.
const path = d => `<path d="${d}"/>`;
const solid = d => `<path d="${d}" fill="currentColor" stroke="none"/>`;
const letters = {
  J: 'M5 5h6v10a4 4 0 0 1-8 0',
  T: 'M3 5h18M12 5v15',
  S: 'M20 6c-2-2-8-2-8 2 0 4 8 3 8 7 0 4-6 5-9 2',
  C: 'M18 6a8 8 0 1 0 0 12',
};

export const artwork = {
  lua: '<circle cx="10" cy="13" r="8"/><circle cx="13" cy="10" r="2"/>' + solid('M19 2h3v3h-3z'),
  r: path('M5 21V5h9a5 5 0 0 1 0 10H5m7 0 8 6') + path('M2 9c0-9 20-9 20 0'),
  julia: '<circle cx="12" cy="5" r="3"/><circle cx="5" cy="17" r="4"/><circle cx="19" cy="17" r="4"/>',
  perl: path('M4 20V4h8a5 5 0 0 1 0 10H4m12-6 5 4-5 8'),
  scala: path('m4 5 16-3v5L4 10zm0 7 16-3v5L4 17zm0 7 16-3v4L4 23'),
  groovy: path('m12 2 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1zM10 10h5v5h-4'),
  fsharp: path('m8 4-6 8 6 8M3 12h12m-5-7h7m-7 0v14m0-7h6m4-6-2 12m-2-8h7m-8 4h7'),
  clojure: '<circle cx="12" cy="12" r="10"/>' + path('M9 4c-7 7 2 9 3 16M15 4c-7 7 2 9 3 15'),
  elixir: path('M14 2C11 10 2 12 6 19c5 8 16 0 13-7zM14 6c-8 10-5 14 0 15'),
  erlang: path('M3 3h4v18H3M21 3h-4v18h4M8 12h9c0-8-10-8-10 0s8 8 10 3'),
  haskell: path('m2 5 5 7-5 7m5-14 5 7-5 7m4-14 9 14m-5-9h7m-4 4h4'),
  ocaml: path('M2 18V9l4-3 4 5 4-5 5 3 3 9M6 11v7m12-7v7M2 18h20'),
  zig: path('M2 4h10L4 20h10M14 4h8l-8 16h8M9 12h7'),
  nim: path('m2 6 5 4 5-7 5 7 5-4-3 14H5zM5 15h14'),
  objectivec: '<circle cx="12" cy="12" r="10"/>' + path('M16 7a6 6 0 1 0 0 10'),
  objectivecpp: path('M11 4a8 8 0 1 0 0 16M15 8v8m-3-4h6m3-4v8m-3-4h6'),
  assembly: path('M6 6h12v12H6zM9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4M9 15l3-6 3 6m-5-2h4'),
  fortran: path('M5 21V3h15M5 11h11m-1 10V9m-3 0h6'),
  cobol: path('M10 5H4v14h6m4-14h3c6 0 6 7 0 7h-3V5m0 7h3c6 0 6 7 0 7h-3z'),
  pascal: path('M5 21V3h9a5 5 0 0 1 0 10H5m11 3 5 5m0-5-5 5'),
  lisp: path('M7 3C0 7 0 17 7 21M17 3c7 4 7 14 0 18M10 7v10h5'),
  solidity: path('m12 2 7 9-7 4-7-4zm-7 11 7 4 7-4-7 9z'),
  nix: path('M2 8h13l4-6M5 2l7 12h8M2 16h13l4 6M5 22l7-12h8M9 2l-7 12m7 8L2 10'),
  cmake: path('m12 2 10 20H2zM12 2v13L2 22m10-7 10 7M12 15l-5-3'),
  latex: path('M2 6h10M7 6v15m-4 0h8M14 3h8m-4 0v13m-4 0h8'),
  document: path('M5 2h10l5 5v15H5zM15 2v5h5M8 11h9m-9 4h9m-9 4h6'),
  wasm: path('m2 5 3 14 4-10 4 10 3-14m1 14 3-14 3 14m-5-5h4'),
  batch: path('M2 4h20v16H2zM5 8l4 4-4 4m7 0h6M14 8h4'),
  pug: path('m2 6 5-3 5 3 5-3 5 3-3 14H5zM7 10h1m8 0h1M9 15l3 3 3-3m-3 0v3'),
  restructuredtext: path('M4 3h16v18H4zM7 7h10m-10 3h10m-10 4h6m-6 3h10'),
  javascript: path(letters.J + 'M21 6c-5-3-8 2-3 5s3 8-3 6'),
  typescript: path('M2 5h11M7.5 5v15M21 6c-5-3-8 2-3 5s3 8-3 6'),
  json: path('M8 3H6v6l-3 3 3 3v6h2M16 3h2v6l3 3-3 3v6h-2') +
    '<circle cx="12" cy="9" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="15" r="1" fill="currentColor" stroke="none"/>',
  c: path(letters.C),
  cpp: path('M12 5a8 8 0 1 0 0 14M16 9v6m-3-3h6M21 9v6m-3-3h6'),
  csharp: path('M11 5a8 8 0 1 0 0 14M16 8l-2 9m7-9-2 9m-5-6h8m-9 3h8'),
  // The clipped slab and counter are deliberate recognition anchors.
  next: solid('M4 3h12l5 5v13h-5L8 9v12H4z') + path('m16 3 5 7'),
  svelte: path('m17 4-8 4a4 4 0 0 0 4 7l4-2M7 20l8-4a4 4 0 0 0-4-7l-4 2'),
  astro: solid('M3 17 9 3h6l6 14-6-3-3-7-3 7z') + path('M9 19q3 5 6 0'),
  kotlin: solid('M4 3h16l-9 9 9 9H4z'),
  dart: solid('m3 3 12 1 6 6v11l-11-1-7-7z') +
    '<path d="m7 7 10 10" stroke="var(--cut)"/>',
  ruby: path('m3 8 4-5h10l4 5-9 13zM3 8h18M7 3l5 18 5-18'),
  swift: path('m4 4 12 9-6-10 11 12v5l-6-2C8 21 4 15 3 12l8 3z'),
  css: path('M19 4H6l-1 7h12l-1 7-6 3-5-3'),
  scss: path('M20 6C10-1 0 10 8 12c7 2 10-5 5-4S4 21 10 21c3 0 4-5 1-5M15 18l6-5'),
  less: path('m7 5-5 7 5 7m10-14 5 7-5 7M10 9h4m-4 6h4'),
  tailwind: path('M2 10q4-8 10-3t10-3M2 19q4-8 10-3t10-3'),
  yaml: path('m3 4 5 7 5-7M8 11v9M17 5h4m-4 7h4m-4 7h4'),
  toml: path('M4 3H2v18h2M20 3h2v18h-2M7 7h10m-5 0v11'),
  xml: path('m7 5-5 7 5 7m10-14 5 7-5 7M14 3l-4 18'),
  go: path('M2 8h5M1 12h5m-4 4h5M20 6h-7l-4 6 4 6h7v-6h-5'),
  python: solid('M5 3h10a4 4 0 0 1 4 4v4H9v3H3V8h2zm14 18H9a4 4 0 0 1-4-4v-2h10V9h6v8h-2z') +
    '<path d="M9 6h.01M15 18h.01" stroke="var(--cut)" stroke-width="2.5"/>',
  docker: path('M2 12h18l2-4M3 12c1 10 15 10 17 0') +
    solid('M4 7h4v4H4zm5 0h4v4H9zm5 0h4v4h-4zM9 2h4v4H9z'),
  prisma: path('m3 19 9-17 9 17-12 3zM12 2 9 22'),
  terraform: solid('m2 3 8 4v8l-8-4zm10 5 8 4v8l-8-4zm0-6 8 4v4l-8-4z'),
  kubernetes: path('m12 2 8 4 2 9-6 7H8l-6-7 2-9zM12 7v10M7 9l10 6M7 15l10-6') +
    '<circle cx="12" cy="12" r="4"/>',
  redis: path('m2 7 10-4 10 4-10 4zm0 5 10 4 10-4M2 17l10 4 10-4'),
  mongo: path('M12 2C1 8 6 18 12 20 18 18 23 8 12 2zM12 8v14'),
  postgres: path('M6 20V4h8a6 6 0 0 1 0 12H6M14 8v14'),
  sqlite: path('m5 20 5-16 11-2-5 11zM5 20l10-10'),
  notebook: path('M6 3h14v18H6zM3 6h5M3 12h5M3 18h5m3-9 3 3-3 3m5 1h2'),
  pdf: path('M5 21 13 3c-1 11 4 14 8 12C11 13 2 14 3 19c1 3 6 0 7-3'),
  log: path('M3 5h3m4 0h11M3 12h3m4 0h11M3 19h3m4 0h8'),
  mdx: path('M2 18V6l5 7 5-7v12m4-9 6 9m0-9-6 9'),
  readme: path('M3 3h7l2 3 2-3h7v17h-7l-2 2-2-2H3zM12 6v16'),
  docs: path('M7 3h13v16H7zM3 7v15h13M10 8h7m-7 4h7'),
  eslint: path('m12 2 10 6v8l-10 6-10-6V8zM17 7H8v10h9M8 12h7'),
  prettier: path('M3 4h8m4 0h6M3 9h4m4 0h10M3 14h12m4 0h2M3 19h5m4 0h9'),
  storybook: path('m4 4 16-2v20L4 20zM16 8c-7-4-9 4-3 4s4 8-3 5'),
  vite: solid('M2 4h7l3 6 3-6h7L12 22z') +
    '<path d="m15 2-6 10h5l-3 8" stroke="var(--cut)" stroke-width="1.8"/>',
  svg: path('M5 5h14v14H5zM5 5l14 14M19 5 5 19') +
    '<path d="M2 2h5v5H2zM17 17h5v5h-5z" fill="var(--cut)"/>',
  security: path('M12 2 21 6v6c0 4-4 8-9 10-5-2-9-6-9-10V6zM12 7v7m0 4h.01'),
  lock: path('M9 10V6a4 4 0 0 1 8 0v4M5 10h16v12H5zM13 14v4'),
  binary: path('M4 4h5v16H4zM15 4h3v16m-5 0h8'),
};

export function renderArtwork(kind, fallback) {
  return artwork[kind] ?? fallback;
}
