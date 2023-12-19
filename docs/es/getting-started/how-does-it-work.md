---
editLink: false
lastUpdated: false
---

# ¿Cómo funciona?

Esta sección te ayudará a entender cómo funciona **Gowebly** CLI.

<!--@include: ../../parts/es/block_want-to-try.md-->

La CLI **Gowebly** está construida sobre el lenguaje de programación [Go][go_url].

Por lo tanto, puede ejecutarse con éxito en cualquier sistema y arquitectura soportados como una aplicación ejecutable. Todas las plantillas para el proyecto (tanto backend como frontend) que genera como resultado de su trabajo ya están incluidas en este ejecutable. Es decir, no necesitas ningún fichero adicional para trabajar con el CLI.

Muchos de los procesos que la CLI ejecuta bajo el capó se ejecutan en paralelo, gracias a **goroutines**.

## Parte backend

Las plantillas para la parte **backend** de tu proyecto han sido probadas a fondo y contienen sólo las características y parámetros que necesitas para empezar. Puedes usarlas como un buen comienzo y mejorarlas a medida que tu proyecto crezca.

En este momento, el CLI soporta los siguientes frameworks web Go: [Fiber][backend_fiber_url], [Gin][backend_gin_url], [Echo][backend_echo_url], [Chi][backend_chi_url] y [HttpRouter][backend_httprouter_url]. Por defecto, el proyecto creado utilizará el paquete incorporado [net/http][backend_net_http_url].

Para ser más eficiente, la CLI soporta el motor de plantillas [Templ][backend_ah_templ_url]. Con su ayuda, puedes crear rápidamente UIs para tu proyecto sin salir del entorno Go tradicional. Todas las plantillas son funciones Go normales, sin tener que crear plantillas HTML adicionales y lidiar con el motor de plantillas Go incorporado (del paquete `html/template`).

## Parte frontal

Para crear una compilación para la parte **frontend**, se eligió el rápido y fácil [Parcel][frontend_parcel_url] bundler versión `2`. Esto nos permitió reducir al máximo el momento innecesariamente estresante de la construcción del frontend. Ya no es necesario entender configuraciones, el CLI ya lo ha preparado por ti.

En este momento, la CLI soporta los siguientes frameworks CSS: [Tailwind CSS][frontend_tailwindcss_url], [UnoCSS][frontend_unocss_url], [Bootstrap][frontend_bootstrap_url], [Bulma][frontend_bulma_url] y [daisyUI][frontend_daisyui_url] biblioteca de componentes. Por defecto, el proyecto creado utilizará los estilos CSS mínimos para la demostración.

### Entorno de ejecución de JavaScript

Nos mantenemos al día con las últimas actualizaciones de **herramientas de desarrollo frontend**, por lo que la CLI soporta dos entornos de ejecución JavaScript: a través del estándar [Node.js][frontend_nodejs_url] y el nuevo y extremadamente rápido [Bun][frontend_bun_url] (que es compatible con Node.js). Puedes elegir el que más te guste para tu proyecto en la configuración de la CLI.

### htmx e hyperscript

La CLI también incluye un cliente HTTP que permite la descarga en segundo plano de archivos JavaScript [htmx][frontend_htmx_url] e [hyperscript][frontend_hyperscript_url] desde una CDN remota para su posterior uso en el proyecto.

## Despliegue

Para **desplegar** con éxito tu proyecto en un servidor remoto (o en la nube), el CLI tiene archivos Docker pre-preparados (`docker-compose.yml` y `Dockerfile`). Ya contienen todas las configuraciones que necesitas para crear un contenedor aislado exactamente con tu proyecto.

## Conclusión

Todo esto junto nos da la confianza para decir que disfrutarás trabajando con la CLI **Gowebly**, ¡sea cual sea tu experiencia en código y desarrollo web! :wink:

<!--@include: ../../parts/links.md-->