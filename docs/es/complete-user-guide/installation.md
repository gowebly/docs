# Instalación

Los fundamentos para instalar la CLI de **Gowebly** se cubren en esta sección.

## Go

[Descarga][go_download_url] e instala **Go**. Se requiere la versión `1.24.0` (o superior).

Luego, usa el comando [`go install`][go_install_url]:

```bash
go install github.com/gowebly/gowebly/v3@latest
```

## Homebrew

Los usuarios de GNU / Linux y Apple macOS tienen disponible la instalación de la CLI a través de [Homebrew][other_brew_url].

```bash
brew tap gowebly/tap
```

Luego instala usando:

```bash
brew install gowebly/tap/gowebly
```

## Modo manual

Descargue el `exe` ya compilado para Windows, `deb` (para Debian, Ubuntu), `rpm` (para CentOS, Fedora), `apk` (para Alpine), o el paquete para Arch Linux desde la página [Releases][repo_releases_url].

Instálalo como lo haría normalmente.

<!--@include: ../../parts/links.md-->
