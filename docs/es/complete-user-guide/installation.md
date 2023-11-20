# Instalación

Los conceptos básicos para la instalación de **Gowebly** CLI en su sistema están cubiertos en esta sección.

## Go

[Descarga][go_download_url] e instala **Go**. Se requiere la versión `1.21` (o superior).

A continuación, utilice el comando [`go install`][go_install_url]:

``` bash
go install github.com/gowebly/gowebly@latest
```

## Docker

Siéntete libre de usar **Gowebly** CLI desde nuestra [imagen Docker oficial][docker_gowebly_image_url] y ejecutarlo en el contenedor:

``` bash
docker pull gowebly/gowebly:latest
```

::: danger Limitaciones de la imagen Docker
Esta imagen Docker funciona **solo** en los sistemas GNU/Linux (`amd64` o `arm64`, incluido WSL).
:::

## Homebrew

GNU / Linux y Apple macOS usuarios disponibles manera de instalar **Gowebly** CLI a través de [Homebrew][other_brew_url].

Toque una nueva fórmula:

``` bash
brew tap gowebly/tap
```

Instalar:

``` bash
brew install gowebly/tap/gowebly
```

## Modo manual

Descargue archivos `exe` ya preparados para Windows, `deb` (para Debian, Ubuntu), `rpm` (para CentOS, Fedora), `apk` (para Alpine), o paquetes Arch Linux desde la página [Releases][repo_releases_url].

Instalado como lo harías normalmente.

<!--@include: ../../parts/links.md-->