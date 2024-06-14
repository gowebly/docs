---
editLink: false
lastUpdated: false
---

# ¿Cómo funciona?

Esta sección te ayudará a entender cómo funciona la CLI de **Gowebly**.

<!--@include: ../../parts/es/block_want-to-try.md-->

La CLI de **Gowebly** está construida sobre el lenguaje de programación [Go][go_url].

Por lo tanto, puede ejecutarse en cualquier sistema y arquitectura que soporte dicho lenguaje. Todas las plantillas del proyecto (tanto backend como frontend) ya están incluidas en el ejecutable. Es decir, no necesita ningún archivo adicional para trabajar con la CLI.

## Backend

Los templates por el lado del **backend** han sido testeados de manera exhaustiva y contienen solo las características y parámetros necesarios para comenzar. Puedes utilizarlos como un buen comienzo e irlos mejorando a medida que tu proyecto crezca.

Por el momento, la CLI soporta los siguientes frameworks web de Go: [Fiber][backend_fiber_url], [Gin][backend_gin_url], [Echo][backend_echo_url], [Chi][backend_chi_url], [HttpRouter][backend_httprouter_url], [Gorilla/Mux][backend_gorilla_mux_url] y [PocketBase][backend_pocketbase_url]. Por defecto, el proyecto creado utilizará el paquete [net/http][backend_net_http_url].

### Capa del Servidor para htmx

La CLI utiliza el paquete [htmx-go][backend_angelofallars_go_htmx_url], que proporciona una API más conveniente para usar la capa de servidor [htmx][frontend_htmx_url] en la parte del backend de tu proyecto.

::: warning Tener en cuenta
Todos los frameworks web soportan este paquete, excepto **Fiber**. Por lo pronto hay que esperar a que los desarrolladores proporcionen soporte o puedes escribir tu propio wrapper para trabajar con él.
:::

### Templ

Para ser más eficiente, la CLI soporta el motor de plantillas [Templ][backend_a_h_templ_url]. Con su ayuda, puedes crear rápidamente interfaces de usuario para tu proyecto sin salir del entorno tradicional de Go.

Todos los templates son simples funciones de Go, sin necesidad de crear plantillas HTML adicionales y sin lidiar con el motor de plantillas incorporado de Go (del paquete `html/template`).

### Linter para Go

Con el propósito de mantener el código limpio, damos la opción de generar el archivo de configuración de [golangci-lint][backend_golangci_lint_url] con las configuraciones recomendadas. Esto es opcional, pero altamente recomendado.

## Frontend

Para crear una compilación del **frontend**, se eligió el rápido y fácil de usar [Parcel][frontend_parcel_url] bundler versión `2`. Esto nos permitió reducir al máximo el estrés de la construcción del frontend.

Ya no es necesario entender configuraciones, el CLI ya lo tiene todo preparado.

En este momento, el CLI soportaba los siguientes frameworks CSS: [Tailwind CSS][frontend_tailwindcss_url], [UnoCSS][frontend_unocss_url], [Bootstrap][frontend_bootstrap_url], [Bulma][frontend_bulma_url], [daisyUI][frontend_daisyui_url], [Flowbite][frontend_flowbite_url] y [Preline UI][frontend_prelineui_url]. Por defecto, el proyecto utilizará los estilos CSS mínimos para la demo.

### Entorno de ejecución del frontend

Nos mantenemos al día con las últimas actualizaciones de **herramientas de desarrollo frontend**, por lo que el CLI soporta dos entornos de ejecución JavaScript: a través del estándar [Node.js][frontend_nodejs_url] y el nuevo y extremadamente rápido [Bun][frontend_bun_url] (que es compatible con Node.js).

Puedes elegir el que más te guste para tu proyecto.

### htmx, hyperscript y Alpine.js

Las librerías [htmx][frontend_htmx_url], [hyperscript][frontend_hyperscript_url] y [Alpine.js][frontend_alpinejs_url] están disponibles como paquetes NPM normales en `package.json` y se añadirán al proyecto «tal cual» en el archivo `./assets/scripts.js`.

### Prettier

Desde la versiòn `v2.0.0`, la CLI de **Gowebly** soporta el formateador [Prettier][frontend_prettier_url] para formatear tus archivos.

## Live-reload

La CLI de **Gowebly** soporta la función **live-reload** de la herramienta [Air][backend_air_url]. Esto funciona tanto para los archivos del backend (Go) como para los archivos del frontend (JavaScript, CSS, etc.).

## Despliegue

Para **desplegar** con éxito tu proyecto en un servidor remoto (o en la nube), el CLI tiene archivos Docker listos para ser desplegados (`docker-compose.yml` y `Dockerfile`). Ya contienen todas las configuraciones necesarias para crear un contenedor aislado.

## Conclusión

Todo esto nos da la confianza para decir que disfrutarás trabajando con la CLI de **Gowebly**, ¡sin importar cuál sea tu nivel de experiencia como desarrollador! :wink:

<!--@include: ../../parts/links.md-->
