# ArmoTuSitio Icons

**Iconos originales. Reconocimiento inmediato. Un Explorer que trabaja a tu favor.**

[![CI](https://github.com/Drako01/icons/actions/workflows/ci.yml/badge.svg)](https://github.com/Drako01/icons/actions/workflows/ci.yml) ![Version](https://img.shields.io/badge/version-0.1.2-F9ED32?labelColor=141B22) ![VS%20Code](https://img.shields.io/badge/VS%20Code-1.90%2B-2C3E50) ![License](https://img.shields.io/badge/license-MIT-2C3E50) ![Runtime](https://img.shields.io/badge/runtime-zero-2C3E50)

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=armotusitio.armotusitio-icons"><strong>Visual Studio Marketplace</strong></a> &nbsp;·&nbsp;
  <a href="https://open-vsx.org/extension/armotusitio/armotusitio-icons"><strong>Open VSX</strong></a> &nbsp;·&nbsp;
  <a href="https://github.com/Drako01/icons/releases"><strong>GitHub Releases</strong></a>
</p>

---

## Así se ven los iconos / Icon gallery

![Catálogo visual real de los SVG de ArmoTuSitio Icons: Prism, Daylight, Focus y High Contrast](gallery/overview.png)

*Vista previa PNG generada directamente a partir de los vectores originales de la extensión. Presenta las cuatro variantes y archivos/carpetas representativos. Es un catálogo gráfico, **no una captura de pantalla de VS Code**. No utiliza imágenes de otras extensiones.*

[Ver la lámina vectorial original](gallery/overview.svg) · [View original vector atlas](gallery/overview.svg)

**Español** · [English](#english) · [Calidad y desarrollo](#calidad-y-desarrollo) · [Créditos](#autor-y-licencia)

## Español

### Diseñado para reconocer, no para distraer

La mayoría de los desarrolladores pasamos buena parte del día recorriendo árboles de archivos. ArmoTuSitio Icons propone una identidad visual **propia**, basada en geometría simple, siluetas coherentes, acentos semánticos y estados diferenciados de carpetas abiertas y cerradas.

El objetivo no es acumular miles de logotipos, sino favorecer la identificación visual de los archivos habituales. No copiamos ni redistribuimos recursos de Material Icon Theme, vscode-icons, Symbols u otras extensiones.

### Cuatro estilos, una identidad

| Estilo | Personalidad | Recomendado para |
|---|---|---|
| **ArmoTuSitio Prism** | Midnight, líneas precisas y acentos cromáticos distintivos | Desarrollo diario y temas oscuros |
| **ArmoTuSitio Daylight** | Contornos más oscuros y colores adaptados a superficies claras | Temas claros y ambientes luminosos |
| **ArmoTuSitio Focus** | Cromatismo uniforme para reducir ruido visual | Monorepos, árboles densos y concentración |
| **ArmoTuSitio High Contrast** | Contornos claros y acentos intensos | Fondos oscuros y necesidades de legibilidad reforzada |

Cada estilo es un **File Icon Theme independiente**. No modifica tu tema de colores, no configura automáticamente tus preferencias y no interfiere con las variantes nativas de ArmoTuSitio IDE.

### Cobertura técnica

| Área | Ejemplos de asociaciones |
|---|---|
| **Backend** | Go, Java, Python, Rust, PHP, Kotlin, C/C++, C#, Ruby, SQL |
| **Frontend** | JavaScript, TypeScript, React, TSX/JSX, Vue, Angular, Svelte, Astro, Next |
| **Estilos y contenido** | HTML, CSS, SCSS, LESS, Markdown, MDX, JSON, YAML, XML |
| **Base de datos** | Prisma, PostgreSQL, MongoDB, Redis, SQLite, CSV |
| **DevOps e infraestructura** | Dockerfile, Docker Compose, Terraform, scripts, Git, pipelines, Kubernetes |
| **Calidad y seguridad** | Tests, Playwright, lockfiles, variables de entorno, configuración y licencias |
| **IA y automatización** | Carpetas de agentes, prompts, workflows y proyectos con servicios de IA |
| **Multimedia y binarios** | SVG, PNG, imágenes, fuentes, archivos comprimidos, audio y video |

<details>
<summary><strong>Archivos y carpetas de proyectos reales</strong></summary>

- **Nombres de archivo:** package.json, package-lock.json, pnpm-lock.yaml, go.mod, go.sum, pom.xml, cargo.toml, schema.prisma, tsconfig.json, README.md, LICENSE, Dockerfile, compose.yaml, .env.local, vite.config.ts, entre otros.
- **Carpetas:** src, app, components, api, backend, frontend, database, services, controllers, repositories, models, tests, docs, public, assets, infra, .github, workflows, auth, ai, agents, migrations y workers.
- **Carpetas abiertas/cerradas:** iconos distintos para cada estado, conservando las flechas nativas del Explorer.

</details>

El catálogo actual define **77 categorías visuales de archivo**, **44 categorías de carpeta**, **168 asociaciones por extensión**, **94 nombres de archivo** y **112 asociaciones de carpeta**, además de los identificadores de lenguaje. No significa que existan tantos dibujos independientes por cada alias: varias extensiones comparten un símbolo cuando representan el mismo concepto.

### Instalación

**Opción 1 — Marketplace / Open VSX**

Buscá **ArmoTuSitio Icons**, instalá la extensión publicada por **armotusitio** y ejecutá:

1. Abrí la paleta con **Ctrl+Shift+P** (Windows/Linux) o **Cmd+Shift+P** (macOS).
2. Ejecutá **Preferences: File Icon Theme**.
3. Seleccioná **ArmoTuSitio Prism**, Daylight, Focus o High Contrast.
4. Cambiá de variante en cualquier momento, sin reiniciar el editor.

**Opción 2 — VSIX local**

Descargá la versión desde [GitHub Releases](https://github.com/Drako01/icons/releases), o el artefacto **validated-vsix** de una ejecución verde de [CI](https://github.com/Drako01/icons/actions/workflows/ci.yml). Verificá su archivo de checksum antes de instalar.

~~~powershell
code --install-extension .\armotusitio-icons-0.1.2.vsix
~~~

El mismo VSIX puede utilizarse en ArmoTuSitio IDE y forks compatibles que soporten File Icon Themes.

### Por qué es liviana

- **Sin JavaScript de activación:** los iconos se resuelven usando el sistema nativo de VS Code.
- **Sin procesos residentes, Webviews, servicios externos ni llamadas HTTP.**
- **Sin telemetría ni lectura del contenido de los archivos** para detectar tecnologías.
- **Sin dependencias de ejecución:** SVG locales y manifiestos JSON.
- **Sin reconfiguración automática:** el tema activo siempre lo elegís vos.

El arte se genera a partir de un vocabulario vectorial común, con un proceso reproducible, validaciones automatizadas y verificación de integridad SHA-256 en el VSIX.

### Accesibilidad y límites

Focus reduce el uso del color; High Contrast intensifica bordes y acentos. Estas variantes son **opciones de diseño**, no una certificación WCAG. Seguimos realizando controles de legibilidad a 16 px, contraste real en Explorer, escalado HiDPI y diferenciación de símbolos similares.

Las asociaciones por nombre de archivo son exactas: VS Code no permite expresiones regulares arbitrarias en ese campo. Los archivos no identificados reciben un icono genérico; una carpeta con símbolo de candado **no implica análisis de secretos**.

### Soporte y propuestas

Para reportar un icono incorrecto o pedir cobertura adicional, abrí un [issue](https://github.com/Drako01/icons/issues). Indicá el **nombre exacto del archivo o carpeta**, lenguaje/framework, variante seleccionada y, si corresponde, una captura real del Explorer. Las contribuciones son bienvenidas mediante [Pull Requests](https://github.com/Drako01/icons/pulls), respetando el sistema visual original.

---

## English

### Original iconography for real engineering work

ArmoTuSitio Icons delivers a distinctive, precision-crafted file and folder icon system for VS Code, VSCodium, ArmoTuSitio IDE and compatible editors. Built around clear vector geometry and deliberate semantic accents, it prioritizes recognition without unnecessary visual noise.

**Four selectable styles:** Prism (premium dark), Daylight (light), Focus (low distraction), and High Contrast (enhanced visual separation). Each includes distinct open/closed folder artwork and a wide set of native VS Code associations for modern development.

### What makes it different?

- **Original artwork** — coherent geometry instead of copies of other extensions or third-party technology logos.
- **Modern stack coverage** — frontend, backend, databases, security, infrastructure, testing and AI workflows.
- **No runtime overhead** — declarative JSON manifests and local SVGs; no activation script, telemetry, network access or background processes.
- **Four carefully coordinated modes** — consistent recognition patterns with different color treatments.
- **Opt-in configuration** — the extension never changes your current file icon theme or user settings.
- **Reproducible delivery** — three-OS CI verification, inspected VSIX files and SHA-256 checksums.

### Installation and selection

Install [ArmoTuSitio Icons from the Marketplace](https://marketplace.visualstudio.com/items?itemName=armotusitio.armotusitio-icons) or [Open VSX](https://open-vsx.org/extension/armotusitio/armotusitio-icons), or install the versioned VSIX. Open the Command Palette and choose **Preferences: File Icon Theme**, then select one of the four ArmoTuSitio styles.

The image above is a **rendered catalog of the actual icon vectors**, not an application screenshot. Real editor visual acceptance remains ongoing.

### Support and transparency

Use [GitHub Issues](https://github.com/Drako01/icons/issues) for file association requests and defects. Semantic colors are a navigation aid rather than a security classifier. The extension does not contain file analysis features or claim formal accessibility certification.

---

## Calidad y desarrollo

El desarrollo utiliza Node.js 24 para la generación local y GitHub Actions, sin agregar dependencias de runtime al producto.

~~~bash
npm run build      # Generar SVG y los cuatro temas de iconos
npm run check      # Generador + tests de integridad, asociaciones y seguridad
npm run package    # Empaquetar armotusitio-icons-0.1.2.vsix
python3 scripts/verify-vsix.py dist/armotusitio-icons-0.1.2.vsix
~~~

El CI valida Ubuntu, Windows y macOS. La publicación de cambios de versión en **main** reutiliza el VSIX y el SHA-256 verificados en el PR; no recompila ni repite la matriz de pruebas tras el merge. Los dos registros se publican mediante **OIDC Trusted Publishing** y el release incorpora exactamente el mismo VSIX.

**Nota sobre las imágenes:** gallery/overview.png es una vista previa rasterizada a partir de gallery/overview.svg (arte original de la extensión); no está presentada como una captura de pantalla de VS Code.

| Documento | Contenido |
|---|---|
| [Benchmark competitivo](docs/BENCHMARK.md) | Fortalezas de referentes y oportunidades de producto |
| [Sistema de diseño](docs/DESIGN.md) | Geometría, paletas y criterios visuales |
| [Aceptación](docs/ACCEPTANCE.md) | QA automatizada y validación visual pendiente |
| [Publicación](docs/PUBLISHING.md) | Proveniencia de CI, VSIX inmutable y OIDC |
| [Historial de cambios](CHANGELOG.md) | Versiones y mejoras |

## Autor y licencia

ArmoTuSitio Icons es software de código abierto, distribuido bajo la [Licencia MIT](LICENSE). Los diseños originales y el código pueden utilizarse conforme a esa licencia; el nombre y el logotipo corporativos **ArmoTuSitio** conservan su titularidad marcaria.

---

<p align="center">
  <strong>ArmoTuSitio Icons</strong> · Original iconography for developers<br>
  Desarrollado por <strong>Alejandro Daniel Di Stefano</strong> — <a href="https://armotusitio.com.ar">ArmoTuSitio</a><br>
  <a href="https://github.com/Drako01/icons">GitHub</a> · <a href="https://github.com/Drako01/icons/issues">Soporte</a> · <a href="LICENSE">MIT License</a>
</p>
