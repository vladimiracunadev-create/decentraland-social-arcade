# Despliegue

## Principio

Publicar el repositorio y desplegar la escena son operaciones diferentes. El código puede ser público
en GitHub mientras la experiencia permanece en pre-alpha sin URL de Decentraland.

## Comprobación previa

```bash
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

Además, pruebe manualmente en Explorer, revise `scene.json`, confirme el destino y verifique que los
assets tengan licencia documentada.

## Destinos posibles

- **World:** útil para iteración y demostración sin afirmar posesión de LAND.
- **Genesis City / LAND:** requiere autorización sobre las parcelas declaradas.
- **Servidor de prueba:** útil para revisión interna según las opciones vigentes de Creator Hub.

La selección se hará cuando exista un destino autorizado. Este scaffold no contiene claves, enlaces
de despliegue ni supuestos sobre propiedad.

## Política inicial

El CI compila y valida, pero no despliega automáticamente. El primer despliegue será manual y revisado;
la automatización solo se incorporará cuando el destino, los secretos y el procedimiento de reversión
estén definidos.
