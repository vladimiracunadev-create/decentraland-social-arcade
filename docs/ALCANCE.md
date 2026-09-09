# Alcance y límites

## Incluido en esta etapa

- Proyecto válido de escena ECS7/SDK7 con `scene.json` y `src/index.ts`.
- Plaza mínima basada en primitivas del motor.
- Tres entidades interactivas para probar el bucle espacial.
- Contrato y registro que permiten incorporar juegos sin reescribir el arranque.
- GDD, decisiones técnicas, guía de desarrollo, despliegue y contribución.
- Automatización para calidad de código, pruebas, documentos y seguridad básica.

## No incluido todavía

- Un catálogo completo de minijuegos.
- Sincronización multijugador autoritativa.
- Backend, base de datos o perfil persistente.
- Tokens, NFT, marketplace, pagos o recompensas económicas.
- Assets 3D definitivos, música, localización adicional o analítica.
- LAND contratado, World configurado o despliegue público.

## Qué significa «arquitectura multijuego»

Significa que cada juego implementa un contrato común y puede vivir en su propio módulo. No significa
que la primera versión contenga múltiples experiencias ni que todas deban compartir despliegue.

Si un juego futuro requiere otra parcela, identidad visual, permisos, equipo o cadencia de publicación,
deberá evaluarse como escena y repositorio independiente. Un `dcl-workspace.json` superior puede
facilitar la previsualización conjunta, pero no fusiona experiencias publicadas.

## Criterio de éxito de la pre-alpha

Una persona puede instalar, validar, previsualizar y entender el prototipo siguiendo únicamente este
repositorio; el avatar aparece correctamente, se mueve por una superficie segura y recibe respuesta
al interactuar con los tres faros.
