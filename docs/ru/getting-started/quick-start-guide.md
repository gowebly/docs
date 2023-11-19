# Краткое руководство по запуску

Здесь приведен минимальный вариант действий по запуску **Gowebly** CLI.

<!--@include: ../../parts/ru/block_cant-find-answer.md-->

Сначала [скачайте][go_download_url] и установите **Go**. Требуется версия `1.21` (или выше).

Запустите **Gowebly** CLI с помощью команды [`go run`][go_run_url] для создания нового проекта в текущей папке с конфигурацией [по умолчанию][repo_default_config]:

``` bash
go run github.com/gowebly/gowebly@latest create
```

::: tip Преимущества команды `go run`
С помощью команды `go run` можно использовать все возможности **Gowebly** CLI без установки в систему.
:::

Вот и всё! :fire:

В текущей папке создано веб-приложение. Оно будет использовать пакет **net/http** (в качестве бэкенда Go) и пакет **html/template** (в качестве шаблонизатора). Библиотеки **htmx** и **hyperscript** уже доступны в ваших HTML-шаблонах.

## Использование готовых для установки пакетов

Загрузите готовые файлы `exe` для Windows, пакеты `deb` (для Debian, Ubuntu), `rpm` (для CentOS, Fedora), `apk` (для Alpine) или Arch Linux со страницы [Releases][repo_releases_url].

Устанавливайте их, как обычно.

<!--@include: ../../parts/links.md-->