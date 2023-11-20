# Guía de inicio rápido

Aquí tienes una versión mínima de los pasos para ejecutar la CLI de **Gowebly**.

<!--@include: ../../parts/es/block_cant-find-answer.md-->

Primero, [descarga][go_download_url] e instala **Go**. Se requiere la versión `1.21` (o superior).

Ejecuta la CLI de **Gowebly** usando el comando [`go run`][go_run_url] para crear un nuevo proyecto en la carpeta actual con la configuración [default][repo_default_config]:

``` bash
go run github.com/gowebly/gowebly@latest create
```

::: tip Ventajas del comando `go run`
Con `go run`, puedes utilizar todas las funciones de la CLI de **Gowebly** sin necesidad de instalarla en tu sistema.
:::

¡Eso es! :fire:

Se ha creado una aplicación web en la carpeta actual. Utilizará el paquete **net/http** (como backend Go) y el paquete **html/template** (como motor de plantillas). Los paquetes **htmx** y **hyperscript** ya están disponibles en sus plantillas HTML.

## Utilizar paquetes ya preparados

Descargue archivos `exe` para Windows, `deb` (para Debian, Ubuntu), `rpm` (para CentOS, Fedora), `apk` (para Alpine), o paquetes Arch Linux desde la página [Releases][repo_releases_url].

Instalado como lo harías normalmente.

<!--@include: ../../parts/links.md-->