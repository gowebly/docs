# Guía de inicio rápido

Aquí tienes una versión rápida de los pasos a seguir para realizar la ejecución de la CLI de **Gowebly**.

<!--@include: ../../parts/es/block_cant-find-answer.md-->

En primer lugar, [descargar][go_download_url] e instalar **Go**. Se requiere la versión `1.22` (o superior).

Después ejecutar el comando [`go run`][go_run_url] para crear un nuevo proyecto en la carpeta actual:

``` bash
go run github.com/gowebly/gowebly/v2@latest create
```

::: tip Ventajas de correr `go run`
Con `go run`, puedes usar todas las características del CLI de **Gowebly** sin instalarlo en tu sistema.
:::

¡Ya está! :fire: Se ha creado una aplicación web en la carpeta actual.

Puedes comprobar cuales de las herramientas recomendadas ya están instaladas en tu sistema utilizando el comando `doctor` que viene integrado en la CLI de **Gowebly**:

``` bash
go run github.com/gowebly/gowebly/v2@latest doctor
```

Si alguna herramienta no está instalada, se recomienda que la instale tú mismo. Especialmente **Node.js** (o **Bun**) para construir el frontend de tu aplicación.

Ahora puedes empezar a desarrollar tu aplicación web.

## Usar paquetes ya compilados

Descarga el archivo `exe` para Windows, `deb` (para Debian, Ubuntu), `rpm` (para CentOS, Fedora), `apk` (para Alpine), o el paquete para Arch Linux desde la página [Releases][repo_releases_url].

Instálalo como lo harías normalmente.

<!--@include: ../../parts/links.md-->