import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

const pkg=JSON.parse(readFileSync(new URL("../package.json",import.meta.url),"utf8"));
const themes=pkg.contributes.iconThemes;
const content=(url)=>readFileSync(url,"utf8");

test("manifest remains declarative with four selectable themes",()=>{
 assert.equal(pkg.name,"armotusitio-icons");
 assert.equal(pkg.version,"0.1.1");
 assert.equal(pkg.publisher,"armotusitio");
 assert.equal(pkg.main,undefined);
 assert.equal(pkg.activationEvents,undefined);
 assert.equal(pkg.dependencies,undefined);
 assert.equal(themes.length,4);
 assert.equal(new Set(themes.map(x=>x.id)).size,4);
});
for(const entry of themes){
 test(entry.label+" valid associations and assets",()=>{
  const u=new URL("../"+entry.path,import.meta.url);
  const t=JSON.parse(content(u));
  assert.equal(t.hidesExplorerArrows,false);
  assert.equal(t.showLanguageModeIcons,false);
  assert.ok(Object.keys(t.iconDefinitions).length>=160);
  assert.ok(Object.keys(t.fileExtensions).length>=150);
  assert.ok(Object.keys(t.fileNames).length>=90);
  assert.ok(Object.keys(t.folderNames).length>=110);
  for(const id of [t.file,t.folder,t.folderExpanded,t.rootFolder,t.rootFolderExpanded])assert.ok(t.iconDefinitions[id]);
  for(const map of [t.fileNames,t.fileExtensions,t.languageIds,t.folderNames,t.folderNamesExpanded]){
   for(const ref of Object.values(map))assert.ok(t.iconDefinitions[ref],"Unknown icon definition "+ref);
  }
  for(const [name,ref] of Object.entries(t.folderNames))assert.equal(t.folderNamesExpanded[name],ref+"_open");
  for(const [name,def] of Object.entries(t.iconDefinitions)){
   const rel=new URL(def.iconPath,u);
   assert.ok(existsSync(rel),"Missing "+name+" "+def.iconPath);
   const svg=content(rel);
   assert.match(svg,/^<svg xmlns="http:\/\/www.w3.org\/2000\/svg"/);
   assert.match(svg,/viewBox="0 0 24 24"/);
   assert.doesNotMatch(svg,/<script|<foreignObject|<image\b|onload\s*=|onerror\s*=|<iframe|<filter/i);
   assert.ok(Buffer.byteLength(svg)<2500,"Oversize SVG "+name);
  }
 });
}
test("filename precedence and project recognition",()=>{
 const t=JSON.parse(content(new URL("../themes/ats-prism-icon-theme.json",import.meta.url)));
 const lookup={
  "package.json":"file_package","package-lock.json":"file_lock",".env.local":"file_env",
  "schema.prisma":"file_prisma","go.mod":"file_go","pom.xml":"file_java",
  "Dockerfile":"file_docker","vite.config.ts":"file_vite","security.md":"file_security"
 };
 for(const [name,id] of Object.entries(lookup))assert.equal(t.fileNames[name.toLowerCase()],id,name);
 assert.equal(t.fileExtensions["test.ts"],"file_test");
 assert.equal(t.folderNames["__tests__"],"folder_tests");
 assert.notEqual(t.fileNames["package.json"],t.fileExtensions.json);
});
test("Focus monochrome, Daylight has separately tuned colors",()=>{
 const prism=content(new URL("../assets/prism/file-typescript.svg",import.meta.url));
 const focus=content(new URL("../assets/focus/file-typescript.svg",import.meta.url));
 const focusJava=content(new URL("../assets/focus/file-java.svg",import.meta.url));
 const daylight=content(new URL("../assets/daylight/file-typescript.svg",import.meta.url));
 assert.match(focus,/#B7C7D8/);
 assert.match(focusJava,/#B7C7D8/);
 assert.notEqual(prism,focus);
 assert.notEqual(prism,daylight);
 assert.doesNotMatch(focus,/#F9ED32|#64DAE7|#76BAFF/);
});
test("preview atlas is visibly marked as conceptual, not screenshot",()=>{
 const svg=content(new URL("../gallery/overview.svg",import.meta.url));
 assert.match(svg,/Conceptual catalog/);
 assert.match(svg,/Not an actual editor screenshot/);
});

test("v0.1.1 product preview and exact CI-publish release contract",()=>{
 const readme=content(new URL("../README.md",import.meta.url));
 assert.match(readme,/!\[[^\]]+\]\(gallery\/overview\.png\)/);
 assert.doesNotMatch(readme,/!\[[^\]]+\]\((?:\.\/)?(?:gallery|assets|docs)\/[^)]*\.svg\)/);
 const image=readFileSync(new URL("../gallery/overview.png",import.meta.url));
 assert.equal(image.subarray(0,8).toString("hex"),"89504e470d0a1a0a");
 assert.equal(image.readUInt32BE(16),1280);
 assert.equal(image.readUInt32BE(20),760);
 const wf=content(new URL("../.github/workflows/publish.yml",import.meta.url));
 const ci=content(new URL("../.github/workflows/ci.yml",import.meta.url));
 assert.match(wf,/push:\s*\n\s*branches:\s*\[main\]/);
 assert.match(wf,/gh run download/);
 assert.match(wf,/head_sha/);
 assert.match(wf,/main_tree/);
 assert.match(wf,/sha256sum -c/);
 assert.match(wf,/ovsx@1\.4\.0/);
 assert.match(wf,/--trusted-publishing/);
 assert.match(wf,/--oidc/);
 assert.doesNotMatch(wf,/npm run (check|package)|node --test/);
 for(const s of [pkg.scripts.package,ci])assert.match(s,/armotusitio-icons-0\.1\.1\.vsix/);
});
