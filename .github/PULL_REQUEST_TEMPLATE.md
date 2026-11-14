# Pull request

## Resumen

<!-- Describir el cambio visible y su motivo. -->

## Contexto

<!-- Vincular issue o explicar el problema. -->

## Tipo de cambio

- [ ] Bugfix
- [ ] Feature
- [ ] UI/UX
- [ ] Documentación
- [ ] Tests
- [ ] Mantenimiento o release

## Alcance

<!-- Indicar archivos, categorías, variantes y asociaciones afectadas. -->

## Impacto funcional

- [ ] Conserva las asociaciones existentes
- [ ] Conserva los cuatro temas seleccionables
- [ ] Conserva el comportamiento declarativo sin activación

## Validación realizada

- [ ] `npm run check`
- [ ] `node scripts/generate.mjs --check`
- [ ] `npm run package`
- [ ] `python scripts/verify-vsix.py dist/armotusitio-icons-<version>.vsix`
- [ ] Control Markdown de los documentos modificados
- [ ] CI del PR en Ubuntu, Windows y macOS

<!-- Separar controles locales, CI remoto y pruebas manuales pendientes. -->

## Evidencia visual

- [ ] Galería generada a partir de los SVG actuales
- [ ] Revisión de los símbolos a 16 px
- [ ] Prueba del VSIX en el Explorer real

<!-- Adjuntar comparación y registrar límites de la evidencia. -->

## Backend, datos y contratos

- [ ] Sin backend, migraciones ni cambios de API
- [ ] Manifiesto, versión, documentación y rutas de artefactos sincronizados

## Variables, secretos y configuración

- [ ] Sin credenciales ni archivos `.env`
- [ ] Sin nuevas variables o permisos de publicación

## Seguridad y privacidad

- [ ] SVG locales sin scripts, imágenes externas ni telemetría
- [ ] Revisión del diff antes de commit y push

## Media y archivos

- [ ] Rutas de SVG y galerías verificadas
- [ ] Recursos de revisión excluidos del VSIX

## Performance y accesibilidad

- [ ] Sin nuevas dependencias de ejecución
- [ ] Variantes Focus, Daylight y High Contrast conservadas

<!-- Indicar las comprobaciones visuales pendientes; no afirmar certificación WCAG. -->

## Deploy

- [ ] El cambio de versión activa la publicación después del merge con CI verde
- [ ] El flujo publica el VSIX validado sin reconstruirlo

## Riesgos y rollback

<!-- Registrar riesgos y cómo restaurar la versión previa sin sobrescribir releases. -->

## Guía para reviewer

<!-- Indicar los archivos principales y cómo abrir la comparación local. -->

## Checklist final

- [ ] Alcance revisado y controles declarados con evidencia
- [ ] Documentación y changelog actualizados cuando corresponde
- [ ] Sin cambios ajenos al objetivo
