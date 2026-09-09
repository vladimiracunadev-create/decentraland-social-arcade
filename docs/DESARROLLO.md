# Desarrollo local

## Entorno reproducible

Use Node.js 22 LTS y active Corepack. El intento con Node 24 mostró una incompatibilidad transitiva en
la CLI 7.27.0 (`@segment/analytics-node`/`tslib`), por lo que el proyecto restringe expresamente la
versión mientras se verifica una actualización oficial.

```bash
corepack enable
pnpm install
pnpm check
pnpm start
```

## Flujo con Creator Hub

1. Abra Creator Hub y use **Open existing project**.
2. Seleccione la raíz de este repositorio, donde está `scene.json`.
3. Previsualice la escena en Explorer.
4. Compruebe aparición, colisiones, distancia de interacción y respuesta visual.
5. Si Creator Hub modifica archivos de escena, revise el diff antes de confirmar cambios.

## Flujo de una funcionalidad

1. Definir comportamiento y criterio de aceptación en una incidencia.
2. Modificar dominio o escena en una rama breve.
3. Añadir pruebas para la lógica que pueda aislarse del motor.
4. Ejecutar `pnpm check` y `pnpm build`.
5. Probar manualmente dentro de Explorer; una prueba DOM no sustituye esta validación.
6. Actualizar GDD, ADR o alcance cuando cambie una decisión de producto.

## Añadir un juego

No se debe añadir un segundo juego solo para llenar un menú. Cuando cumpla los criterios del GDD:

1. Crear `src/games/<id>/index.ts`.
2. Implementar `ArcadeGame` con id kebab-case.
3. Separar reglas puras de entidades ECS para poder probarlas.
4. Registrarlo en `src/index.ts`.
5. Diseñar el selector solo cuando existan al menos dos módulos jugables.

## Definición de terminado

- Compila con la versión fijada de SDK7.
- Pasa `pnpm check`.
- Fue recorrido manualmente en Explorer.
- No agrega permisos o datos sin documentarlos.
- Mantiene instrucciones legibles dentro de la experiencia.
- Actualiza el estado real del README, sin presentar planes como funciones terminadas.
