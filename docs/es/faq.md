---
prev:
  text: 'Guía de usuario completa'
  link: '/es/complete-user-guide'
next:
  text: 'Troubleshooting'
  link: '/es/troubleshooting'
---

# FAQ

Las preguntas más comunes que pueden surgir al usar la CLI de **Gowebly** se recopilan en esta sección.

<!--@include: ../parts/es/block_cant-find-answer.md-->

## ¿Cuál es la forma correcta de hacer una pregunta o reportar un error?

Running the `doctor` command will give you a list of all the tools you need to work properly with the **Gowebly** CLI that are installed on your system:

Ejecutar el comando `doctor` te dará una lista de todas las herramientas que están instaladas en tu sistema y que son necesarias para trabajar con la CLI de **Gowebly**.

::: code-group
``` bash [CLI]
gowebly doctor
```

``` bash [Go]
go run github.com/gowebly/gowebly@latest doctor
```
:::

Después, abre un [GitHub Issues][repo_issues_url] y sigue las instrucciones.

::: warning Output del comando `doctor`
No olvides incluir el output del comando `doctor` en la descripción del problema. Esta información es muy útil para el proceso de depuración.
:::

## ¿Es posible ver una demostración de cómo funciona la CLI sin instalarla?

¡Claro que sí! :smile: Para darte una comprensión visual del proyecto, hemos grabado un GIF de demostración corto para el comando `gowebly create`:

<img width="100%" alt="gowebly create" src="https://raw.githubusercontent.com/gowebly/.github/main/images/gowebly_create.gif"/>

## ¿Dónde más puedo leer sobre la CLI?

Hemos preparado artículos que demuestran las principales características y las actualizaciones más importantes:

- [CLI de última generación para crear increíbles aplicaciones web en Go utilizando htmx & hyperscript.][article_devto_article_1_url]
- [Gran actualización: la CLI de Gowebly ahora soporta Templ][article_devto_article_2_url]
- [Actualización del frontend : la CLI Gowebly ahora es compatible con la biblioteca de componentes daisyUI][article_devto_article_3_url]
- [Gran actualización del frontend: la CLI de Gowebly ahora soporta Bootstrap y Bulma][article_devto_article_4_url]
- [La CLI de Gowebly ha llegado a la versión v2.0.0][article_devto_article_5_url]
- [Preline UI + Gowebly CLI = ❤️][article_devto_article_6_url]

::: tip ¿Quieres ver tu artículo aquí?
Si quieres ver tu artículo aquí, no dudes en enviar una [PR][repo_docs_pr_url] al repositorio de **Gowebly** Docs.
:::

<!--@include: ../parts/links.md-->