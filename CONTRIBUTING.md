# Contribuir

## Antes de empezar

Lea el [alcance](docs/ALCANCE.md), el [GDD](design/gdd.md) y el ADR de arquitectura. Las propuestas deben
mejorar la experiencia dentro de Decentraland; no se aceptará sustituirla por una interfaz web genérica.

## Ramas y cambios

- Use ramas breves desde `main`.
- Prefiera commits convencionales: `feat:`, `fix:`, `docs:`, `test:`, `chore:`.
- Mantenga una incidencia o explicación clara del problema.
- No mezcle refactorizaciones extensas con cambios de comportamiento.

## Validación

```bash
pnpm install
pnpm check
pnpm build
```

Indique en el pull request cómo se probó la escena en Explorer. Para cambios visuales, adjunte captura
o vídeo breve y describa la posición del avatar usada en la verificación.

## Revisión de contenido

Todo recurso debe añadirse a `docs/LICENCIAS-DE-CONTENIDO.md`. Evite secretos, datos personales,
contenido engañoso, mecánicas de azar o promesas financieras.
