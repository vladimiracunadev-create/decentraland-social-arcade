# GDD · Pulso cooperativo

## 1. Ficha

| Campo           | Definición inicial                          |
| --------------- | ------------------------------------------- |
| Plataforma      | Decentraland, SDK7                          |
| Espacio         | Una parcela de 16 × 16 metros               |
| Género          | Desafío social breve y accesible            |
| Sesión objetivo | 3–5 minutos                                 |
| Estado          | Prototipo pre-alpha                         |
| Entrada         | Avatar, movimiento e interacción de puntero |

## 2. Intención

Crear una actividad que se entienda dentro del espacio 3D sin depender de una página web, una larga
ventana de texto o conocimientos previos. El entorno debe guiar al avatar hacia tres faros y ofrecer
respuesta visual inmediata.

## 3. Bucle del MVP

1. El avatar aparece orientado hacia la plaza.
2. Identifica tres faros por forma, posición y color.
3. Se acerca y activa cada faro mediante la interacción nativa.
4. Recibe respuesta visual inmediata.
5. Repite, explora o abandona sin penalización.

La pre-alpha implementa activación local de faros. La condición conjunta, el temporizador, el
resultado compartido y la repetición sincronizada pertenecen a hitos posteriores.

## 4. Fantasía y tono

El visitante restaura el pulso energético de una pequeña plaza. El tono es optimista, abstracto y
no violento. La estética deberá ser legible a distancia, con contraste suficiente y sin depender
exclusivamente del color.

## 5. Objetivos de diseño

- Primera interacción en menos de 30 segundos.
- Instrucción situada en el mundo, no escondida en documentación externa.
- Actividad comprensible con teclado/ratón y controles equivalentes del cliente.
- Carga y ejecución dentro de los límites vigentes de Decentraland.
- Ninguna compra o conexión de cartera para completar el núcleo jugable.

## 6. Evolución social

La versión social exigirá que varias personas mantengan o activen señales coordinadas durante una
ventana corta. Antes de implementarla se debe decidir dónde vive el estado autoritativo, cómo se
recupera una sesión ante desconexiones y cómo se evita que una latencia alta rompa el resultado.

## 7. Telemetría responsable

No se añade analítica en el scaffold. Si se incorpora, solo se medirán eventos necesarios —entrada,
inicio, finalización y abandono— con documentación de finalidad, retención y exclusión. No se deben
capturar chats, nombres, direcciones de cartera ni trayectorias detalladas por defecto.

## 8. Criterios para añadir un segundo juego

- El juego insignia es jugable de principio a fin.
- Las instrucciones fueron probadas con personas que no conocen el proyecto.
- Existen presupuestos medidos de escena y rendimiento.
- El segundo juego reutiliza la plaza pero aporta una dinámica distinta.
- El selector mejora el descubrimiento y no agrega fricción al primer minuto.
