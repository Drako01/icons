import hashlib, json, pathlib, posixpath, sys, zipfile
import xml.etree.ElementTree as ET
path=pathlib.Path(sys.argv[1])
assert path.is_file(), "VSIX missing"
with zipfile.ZipFile(path) as z:
    assert z.testzip() is None, "Corrupt VSIX"
    names=set(z.namelist())
    pkg=json.loads(z.read("extension/package.json"))
    assert pkg["name"]=="armotusitio-icons" and pkg["publisher"]=="armotusitio"
    assert pkg["version"]=="0.2.0" and pkg.get("preview") is False
    manifest=ET.fromstring(z.read("extension.vsixmanifest"))
    ns={"v": "http://schemas.microsoft.com/developer/vsx-schema/2011"}
    properties={p.attrib["Id"]:p.attrib["Value"] for p in manifest.findall(".//v:Property", ns)}
    assert properties.get("Microsoft.VisualStudio.Code.Preview", "false").lower()=="false", "VSIX marked as preview"
    assert properties.get("Microsoft.VisualStudio.Code.PreRelease", "false").lower()=="false", "VSIX marked as pre-release"
    assert not pkg.get("main") and not pkg.get("activationEvents")
    assert len(pkg["contributes"]["iconThemes"])==4
    assert "extension/assets/ats-glyph.png" in names
    for entry in pkg["contributes"]["iconThemes"]:
        theme_path="extension/"+entry["path"].removeprefix("./")
        assert theme_path in names, f"Missing {theme_path}"
        theme=json.loads(z.read(theme_path))
        assert len(theme["iconDefinitions"])>=160
        for definition in theme["iconDefinitions"].values():
            icon=posixpath.normpath(posixpath.join(posixpath.dirname(theme_path),definition["iconPath"]))
            assert icon.startswith("extension/assets/"), f"Unsafe icon path: {icon}"
            assert icon in names, f"Missing {icon}"
            svg=z.read(icon)
            assert len(svg)<2500 and b"<script" not in svg and b"<foreignObject" not in svg
    assert not any(x.startswith("extension/scripts/") or x.startswith("extension/tests/") or "/node_modules/" in x for x in names)
digest=hashlib.sha256(path.read_bytes()).hexdigest()
checksum=path.with_suffix(path.suffix+".sha256")
checksum.write_text(digest+"  "+path.name+"\n",encoding="utf-8")
print(path,"OK",digest,"files:",len(names))
