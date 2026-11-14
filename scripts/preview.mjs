import { readFileSync, writeFileSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const read = name => readFileSync(new URL(name, root), 'utf8');
const save = (name, value) => writeFileSync(new URL(name, root), value);
const files = [
  ['typescript', 'app.ts'], ['javascript', 'index.js'], ['json', 'settings.json'],
  ['react', 'App.jsx'], ['go', 'main.go'], ['python', 'main.py'],
  ['rust', 'lib.rs'], ['docker', 'Dockerfile'], ['sql', 'schema.sql'],
  ['env', '.env.local'], ['package', 'package.json'], ['test', 'app.test.ts'],
  ['c', 'main.c'], ['cpp', 'main.cpp'], ['csharp', 'Program.cs'],
  ['css', 'styles.css'], ['scss', 'styles.scss'], ['markdown', 'notes.md'],
];
const folders = ['src', 'components', 'api', 'database', 'tests', 'ai'];
const inline = (variant, type, kind, size = 24) => read(`assets/${variant}/${type}-${kind}.svg`)
  .replace('width="24" height="24"', `width="${size}" height="${size}"`);
const symbol = (variant, type, kind, x, y, size = 16) =>
  `<svg x="${x}" y="${y}" width="${size}" height="${size}" viewBox="0 0 24 24">${inline(variant, type, kind).replace(/<svg[^>]*>|<\/svg>/g, '')}</svg>`;
const esc = text => text.replaceAll('&', '&amp;').replaceAll('<', '&lt;');

let atlas = `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="760" viewBox="0 0 1280 760">
<rect width="1280" height="760" fill="#10151c"/>
<g font-family="Arial,sans-serif"><text x="32" y="45" fill="#F9ED32" font-size="29" font-weight="700">ArmotuSitio Icons</text>
<text x="32" y="72" fill="#AAB8C8" font-size="13">NEW ART DIRECTION / 16 PX VECTORS / Conceptual catalog</text>`;
for (const [index, variant] of ['prism', 'daylight', 'focus', 'contrast'].entries()) {
  const x = 24 + (index % 2) * 628, y = 94 + Math.floor(index / 2) * 316;
  const foreground = variant === 'daylight' ? '#344358' : '#D9E2EF';
  atlas += `<rect x="${x}" y="${y}" width="604" height="298" rx="12" fill="${variant === 'daylight' ? '#F4F7FB' : variant === 'contrast' ? '#000000' : '#181F28'}"/>
<text x="${x + 20}" y="${y + 30}" fill="${foreground}" font-size="18" font-weight="700">${variant[0].toUpperCase() + variant.slice(1)}</text>`;
  const entries = [...folders.map(kind => ['folder', kind, kind]), ...files.slice(0, 12).map(([kind, label]) => ['file', kind, label])];
  for (const [n, [type, kind, label]] of entries.entries()) {
    const xx = x + 20 + Math.floor(n / 9) * 287, yy = y + 50 + (n % 9) * 25;
    // Keep --cut on this nested viewport; markup inlined below uses the variable.
    atlas += `<g style="--cut:${variant === 'daylight' ? '#EFF4FA' : variant === 'contrast' ? '#060606' : variant === 'focus' ? '#253341' : '#1B2936'}">${symbol(variant, type, kind, xx, yy)}<text x="${xx + 27}" y="${yy + 12}" fill="${foreground}" font-family="Consolas,monospace" font-size="12">${esc(label)}</text></g>`;
  }
}
atlas += '<text x="28" y="742" fill="#AAB8C8" font-size="12">Not an actual editor screenshot. Review at 100% scale; editor acceptance remains pending.</text></g></svg>\n';
save('gallery/overview.svg', atlas);

const compare = files.map(([kind, label]) => `<div class="sample"><span>${esc(label)}</span><img width="24" height="24" src="before/file-${kind}.svg" alt="Previous ${kind}">${inline('prism', 'file', kind, 24)}${inline('prism', 'file', kind, 48)}</div>`).join('');
const tree = variant => `<div class="tree" data-variant="${variant}" ${variant !== 'prism' ? 'hidden' : ''}>${[
  ['folder', 'root-open', 'armotusitio', 0], ['folder', 'src-open', 'src', 1],
  ['folder', 'components-open', 'components', 2], ['file', 'tsx', 'Button.tsx', 3],
  ['file', 'typescript', 'Button.types.ts', 3], ['file', 'scss', 'Button.module.scss', 3],
  ['folder', 'api', 'api', 2], ['file', 'go', 'main.go', 3],
  ['file', 'python', 'worker.py', 3], ['folder', 'tests-open', 'tests', 2],
  ['file', 'test', 'Button.test.tsx', 3], ['file', 'javascript', 'index.js', 2],
  ['file', 'json', 'settings.json', 2], ['folder', 'database', 'database', 1],
  ['file', 'prisma', 'schema.prisma', 2], ['file', 'sql', 'migration.sql', 2],
  ['folder', 'ci', '.github', 1], ['file', 'docker', 'Dockerfile', 1],
  ['file', 'env', '.env.local', 1], ['file', 'package', 'package.json', 1],
  ['file', 'readme', 'README.md', 1],
].map(([type, kind, label, depth]) => `<div class="row" style="padding-left:${16 + depth * 16}px"><span class="arrow">${type === 'folder' ? kind.endsWith('open') || depth === 0 ? '⌄' : '›' : ''}</span>${inline(variant, type, kind, 16)}<span>${esc(label)}</span></div>`).join('')}</div>`;
const catalog = variant => `<div class="catalog" data-variant="${variant}" ${variant !== 'prism' ? 'hidden' : ''}>${Object.keys(JSON.parse(read(`themes/ats-${variant}-icon-theme.json`)).iconDefinitions).filter(id => id.startsWith('file_')).map(id => {
  const kind = id.slice(5);
  return `<div class="catalog-item">${inline(variant, 'file', kind, 16)}${inline(variant, 'file', kind, 32)}<span>${kind}</span></div>`;
}).join('')}</div>`;

save('gallery/preview.html', `<!doctype html>
<html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>ArmotuSitio Icons — design review</title>
<style>
*{box-sizing:border-box}body{margin:0;background:#10151c;color:#e2e9f3;font:14px system-ui,sans-serif}header,main{max-width:1320px;margin:auto;padding:32px}header{padding-bottom:24px;border-bottom:1px solid #303b49}h1{font-size:46px;letter-spacing:-2px;margin:8px 0 12px}h2{font-size:20px;letter-spacing:-.4px;margin:0 0 20px}p{color:#a8b8cb;line-height:1.6;max-width:70ch}small,.eyebrow{font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#e6e438}.layout{display:grid;grid-template-columns:minmax(280px,360px) 1fr;gap:48px}.explorer{background:#181f28;border:1px solid #303b49;border-radius:8px;overflow:hidden}.toolbar{padding:16px;border-bottom:1px solid #303b49;display:flex;flex-wrap:wrap;gap:8px}button,select{background:transparent;color:inherit;border:1px solid #526277;padding:8px 10px;border-radius:4px;font:inherit}option{background:#181f28;color:#e2e9f3}.tree{padding:16px 0}.row{height:27px;display:flex;align-items:center;gap:7px;white-space:nowrap;font:13px Consolas,monospace}.row:hover{background:#ffffff12}.arrow{width:10px;color:#a8b8cb;flex-shrink:0}.row svg{flex-shrink:0}.light{background:#f4f7fb;color:#344358}.black{background:#000;color:#fff}.columns,.sample{display:grid;grid-template-columns:minmax(125px,1fr) 64px 64px 64px;align-items:center;gap:16px}.columns{font-size:11px;color:#a8b8cb;padding-bottom:14px;border-bottom:1px solid #303b49}.sample{min-height:56px;border-bottom:1px solid #ffffff0c;font:12px Consolas,monospace}.sample img,.sample svg{justify-self:center}.note{font-size:12px;margin-top:16px}.catalog-section{margin-top:48px;padding-top:32px;border-top:1px solid #303b49}.catalog{display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:0 24px;padding:20px}.catalog-item{display:flex;align-items:center;gap:15px;min-height:62px;font:11px Consolas,monospace}.catalog-item span{overflow-wrap:anywhere}.catalog-item svg{flex-shrink:0}[hidden]{display:none!important}button:hover{background:#ffffff12}button:focus-visible,select:focus-visible{outline:2px solid #e6e438;outline-offset:3px}@media(max-width:800px){header,main{padding:24px}h1{font-size:36px}.layout{grid-template-columns:1fr;gap:32px}.columns,.sample{grid-template-columns:minmax(100px,1fr) 48px 48px 48px;gap:8px}}@media(prefers-reduced-motion:no-preference){button,select{transition:background .15s}.row{transition:background .12s}}
</style>
<header><span class="eyebrow">ArmotuSitio / Icon study 02</span><h1>Give every file a silhouette.</h1><p>Large symbols. Deliberate color. Less framing. Review the proposed artwork at actual Explorer size, then inspect the full catalog.</p></header>
<main><div class="layout"><section><h2>At work / 16 px</h2><div class="explorer" id="explorer"><div class="toolbar"><label for="variant">Theme</label><select id="variant"><option value="prism">Prism</option><option value="daylight">Daylight</option><option value="focus">Focus</option><option value="contrast">High Contrast</option></select><button id="folders" type="button" aria-pressed="true">Folder symbols</button></div>${['prism', 'daylight', 'focus', 'contrast'].map(tree).join('')}</div><p class="note">Simulated Explorer. Native arrows, indentation and 16 px icons. Final acceptance in VS Code remains pending.</p></section><section><h2>Before / after</h2><div class="columns"><span>File</span><span>Before 24</span><span>After 24</span><span>After 48</span></div>${compare}<p class="note">Previous Prism vectors are preserved locally for comparison. No third-party artwork.</p></section></div><section class="catalog-section"><h2>Full file catalog / 16 + 32 px</h2><div id="catalog-surface">${['prism', 'daylight', 'focus', 'contrast'].map(catalog).join('')}</div></section></main>
<script>
const variant=document.getElementById('variant'), explorer=document.getElementById('explorer'), surface=document.getElementById('catalog-surface');
variant.addEventListener('change',()=>{document.querySelectorAll('[data-variant]').forEach(el=>{el.hidden=el.dataset.variant!==variant.value});for(const el of [explorer,surface]){el.classList.toggle('light',variant.value==='daylight');el.classList.toggle('black',variant.value==='contrast')}});
document.getElementById('folders').addEventListener('click',event=>{const pressed=event.target.getAttribute('aria-pressed')==='true';event.target.setAttribute('aria-pressed',String(!pressed));document.querySelectorAll('.tree .row').forEach(row=>{if(row.querySelector('title')?.textContent.includes('folder'))row.querySelector('svg').style.visibility=pressed?'hidden':'visible'})});
</script></html>\n`);
console.log('Generated gallery/overview.svg and gallery/preview.html');
