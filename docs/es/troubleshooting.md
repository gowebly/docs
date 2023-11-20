---
prev:
  text: 'FAQ'
  link: '/es/faq'
---

# Solución de problemas

Las averías más comunes que pueden surgir al utilizar el **Gowebly** CLI.

<!--@include: ../parts/es/block_cant-find-answer.md-->

## Docker: La plataforma de la imagen solicitada no coincide con la plataforma host detectada

La [imagen Docker][docker_gowebly_image_url] oficial de **Gowebly** sólo está disponible para GNU/Linux:

- `linux/amd64`
- `linux/arm64`

Otras arquitecturas y sistemas operativos **no** son compatibles.

::: tip Windows Subsystem for Linux
Sí, **Gowebly** CLI funciona perfectamente en el [Windows Subsystem for Linux][other_wsl_url] (WSL) también, porque usa Ubuntu como distro GNU/Linux.
:::

## El puerto X está ocupado por el sistema operativo

Algunos sistemas operativos pueden ocupar puertos que quieras utilizar para desarrollar y desplegar tu aplicación. Puede comprobar si un puerto está ocupado por OS ejecutando el comando:

::: code-group
``` bash [GNU/Linux]
lsof -iTCP -sTCP:LISTEN -P
```

``` bash [macOS]
lsof -iTCP -sTCP:LISTEN -P
```

``` bash [Windows]
netstat -aon
```
:::

Para cambiar el número de puerto, sustituya la opción `port` en el archivo `.gowebly.yml` por el número de puerto que desee utilizar para el backend:

``` yaml{2}
backend:
  port: 9000
```

Vuelva a ejecutar su aplicación y vaya a `http://localhost:9000`.

<!--@include: ../parts/links.md-->