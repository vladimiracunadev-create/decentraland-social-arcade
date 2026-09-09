# Seguridad

## Versiones mantenidas

| Versión              | Soporte                              |
| -------------------- | ------------------------------------ |
| `main` / pre-alpha   | ✅                                   |
| Etiquetas anteriores | ❌ Aún no existen versiones estables |

## Reporte

No publique credenciales, vulnerabilidades explotables ni datos personales en una incidencia. Cuando
el repositorio tenga remoto público, use el reporte privado de seguridad de GitHub. Hasta entonces,
contacte al mantenedor por un canal privado previamente acordado.

Incluya impacto, reproducción mínima y versión observada. No incluya frases semilla, claves privadas,
tokens de despliegue ni direcciones vinculadas a una identidad real.

## Modelo inicial de amenazas

- Dependencias JavaScript comprometidas o desactualizadas.
- Secretos introducidos por error en código o workflows.
- Estado multijugador manipulado por clientes no confiables.
- Enlaces o UI que induzcan a firmar una operación no necesaria.
- Assets sin procedencia o con contenido inseguro.

El prototipo no solicita firmas ni permisos. Cualquier cambio en esa condición exige ADR, revisión de
seguridad y actualización visible del README.
