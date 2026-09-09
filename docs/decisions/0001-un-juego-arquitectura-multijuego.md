# ADR-0001 · Un juego insignia con arquitectura multijuego

- Estado: aceptado
- Fecha: 2026-09-08

## Contexto

El concepto puede convertirse en una plaza con varios juegos, pero no existe todavía evidencia de uso,
arte definitivo, sincronización compartida ni presupuesto medido. Debemos decidir entre un repositorio
para un único juego y un catálogo desde el primer día.

## Decisión

Construir una sola escena desplegable y un solo juego insignia durante el MVP. Separar desde ahora el
contrato, registro, entorno común y módulos de juego. El menú se implementará cuando haya dos juegos
jugables y resulte útil para descubrirlos.

## Consecuencias

- La primera experiencia tiene un objetivo claro y una superficie de prueba pequeña.
- Añadir otro módulo no exige reorganizar todo el código.
- No se paga por adelantado la complejidad de un menú, teletransporte o estado cruzado.
- Si una experiencia necesita despliegue independiente, puede extraerse a otro repositorio y agruparse
  después mediante un workspace local de Decentraland.

## Alternativas descartadas

- **Repositorio rígido para un solo juego:** entrega rápida, pero acopla escena y reglas.
- **Arcade completo desde el inicio:** comunica ambición, pero produce opciones superficiales y multiplica
  riesgos antes de validar el primer bucle.
