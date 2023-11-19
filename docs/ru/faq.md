---
next:
  text: 'Устранение неполадок'
  link: '/ru/troubleshooting'
---

# Вопросы и ответы

В этом разделе собраны наиболее распространенные вопросы, которые могут возникнуть при использовании **Gowebly** CLI.

<!--@include: ../parts/ru/block_cant-find-answer.md-->

## Как правильно задать вопрос или сообщить об ошибке?

Запуская команду `doctor`, вы получите список всех инструментов, необходимых для работы CLI, которые установлены в вашей системе:

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

Теперь откройте [GitHub Issues][repo_issues_url] и следуйте инструкциям.

::: warning Результаты выполнения команды `doctor`
Не забудьте включить вывод команды `doctor` в описание проблемы! Это очень полезная информация для отладки.
:::

## Как изменить конфигурацию по умолчанию?

Конфигурацию по умолчанию можно изменить в файле `.gowebly.yml`.

Создайте файл `.gowebly.yml` в корне вашего проекта:

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

Измените настройки в соответствии с вашими потребностями и запустите команду `create`, `run` или `build` как обычно.

## Можно ли увидеть демонстрацию работы CLI без установки?

Да, конечно! :smile: Чтобы дать вам наглядное представление о проекте, мы записали короткий демонстрационный ролик на YouTube:

<iframe width="100%" height="380" src="https://www.youtube-nocookie.com/embed/qazYscnLku4?si=GQSiQS0Aaib-T6zD&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Где еще можно прочитать что-нибудь о CLI?

Мы подготовили статьи, демонстрирующие основные возможности и основные обновления:

- [A next-generation CLI tool for building amazing web apps in Go using htmx & hyperscript][article_devto_article_1_url]
- [Big update: the Gowebly CLI now supports Templ][article_devto_article_2_url]

::: tip Хотите увидеть свою статью здесь?
Если вы хотите увидеть свою статью здесь, не стесняйтесь отправить [PR][repo_docs_pr_url] в репозиторий **Gowebly** Docs.
:::

<!--@include: ../parts/links.md-->