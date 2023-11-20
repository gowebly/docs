# Construir desde el código fuente

Los fundamentos para construir el proyecto **Gowebly** en modo manual están cubiertos en esta sección.

## Clonar repositorio

Clone el repositorio y vaya a la carpeta `./gowebly`:

``` bash
git clone https://github.com/gowebly/gowebly && cd gowebly
```

## Construir el binario Go

Edita todo lo que necesites en el código fuente y ejecuta el comando `go build` desde la carpeta raíz del proyecto para construir el binario:

``` bash
go build .
```

Ahora puedes ejecutar tu propio binario con **Gowebly** CLI.

## Crear imagen Docker

::: danger Dockerfile
Como estamos utilizando la herramienta [GoReleaser][other_goreleaser_url] en nuestro pipeline, necesitas crear tu propio archivo `Dockerfile` en la raíz del repositorio para crear una imagen Docker.
:::

Edita todo lo que necesites en el código fuente y construye la imagen Docker:

``` bash
docker build -t my-gowebly-image:latest .
```

Ahora puedes usar tu propia imagen Docker para ejecutar un contenedor con **Gowebly** CLI.

<!--@include: ../../parts/links.md-->