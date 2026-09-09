# Instrucciones para agentes

## Propósito

Este repositorio contiene una escena nativa de Decentraland SDK7. No la conviertas en una aplicación
web convencional ni presentes funciones planificadas como terminadas.

## Reglas de trabajo

- Usa `pnpm`; no introduzcas npm, Yarn ni gestores paralelos.
- Mantén Node 22 LTS mientras la CLI 7.27.0 no esté verificada en otra versión.
- Conserva `scene.json` y `src/index.ts` como puntos de integración de Decentraland.
- Separa reglas puras de entidades ECS para poder probarlas.
- Ejecuta `pnpm check` y `pnpm build` antes de declarar un cambio terminado.
- Actualiza README, GDD, roadmap o ADR cuando cambie el alcance real.
- Registra licencias de assets; no añadas binarios sin procedencia.
- No añadas cartera, pagos, NFT, analítica o permisos sin decisión explícita y revisión de seguridad.

## Arquitectura de producto

El MVP contiene un único juego insignia. La arquitectura puede alojar más juegos, pero un selector solo
se justifica cuando existan al menos dos módulos jugables y probados.
