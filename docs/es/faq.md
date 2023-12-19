---
next:
  text: 'Solución de problemas'
  link: '/es/troubleshooting'
---

# FAQ

En esta sección se recogen las preguntas más comunes que pueden surgir al utilizar la CLI de **Gowebly**.

<!--@include: ../parts/es/block_cant-find-answer.md-->

## ¿Cuál es la forma correcta de hacer una pregunta o informar de un error?

Ejecutando el comando `doctor` obtendrá una lista de todas las herramientas CLI que están instaladas en su sistema:

::: code-group
``` bash [CLI]
gowebly doctor
```

``` bash [Go]
go run github.com/gowebly/gowebly@latest doctor
```

``` bash [Docker]
docker run --rm -it -v ${PWD}:${PWD} -w ${PWD} gowebly/gowebly:latest doctor
```
:::

A continuación, abre [GitHub Issues][repo_issues_url] y sigue las instrucciones.

::: warning Salida del comando `doctor`
No olvide incluir la salida del comando `doctor` en la descripción de la incidencia. Es una información muy útil para el proceso de depuración.
:::

## ¿Cómo cambiar la configuración por defecto?

Puedes cambiar la configuración por defecto en el fichero `.gowebly.yml`.

Crea el archivo `.gowebly.yml` en la raíz de tu proyecto:

::: code-group
``` bash [CLI]
gowebly init
```

``` bash [Go]
go run github.com/gowebly/gowebly@latest init
```

``` bash [Docker]
docker run --rm -it -v ${PWD}:${PWD} -w ${PWD} gowebly/gowebly:latest init
```
:::

Cambia la configuración según tus necesidades y `create`, `run` o `build` tu proyecto como de costumbre.

## ¿Es posible ver una demostración del funcionamiento de la CLI sin instalación?

Por supuesto :smile: Para que tenga una idea visual del proyecto, hemos grabado un breve vídeo de demostración en YouTube:

<iframe width="100%" height="380" src="https://www.youtube-nocookie.com/embed/qazYscnLku4?si=GQSiQS0Aaib-T6zD&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## ¿Dónde más puedo leer algo sobre la CLI?

Hemos preparado artículos que muestran las principales características y las actualizaciones más importantes:

- [A next-generation CLI tool for building amazing web apps in Go using htmx & hyperscript][article_devto_article_1_url]
- [Big update: the Gowebly CLI now supports Templ][article_devto_article_2_url]
- [Frontend update: the Gowebly CLI now supports daisyUI components library][article_devto_article_3_url]
- [Big frontend update: the Gowebly CLI now supports Bootstrap and Bulma][article_devto_article_4_url]

::: tip ¿Quieres ver tu artículo aquí?
Si quieres ver tu artículo aquí, no dudes en enviar un [PR][repo_docs_pr_url] al repositorio **Gowebly** Docs.
:::

<!--@include: ../parts/links.md-->