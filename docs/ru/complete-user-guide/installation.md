# Установка

В этом разделе рассматриваются основы установки **Gowebly** CLI на вашу систему.

## Go

[Скачайте][go_download_url] и установите **Go**. Требуется версия `1.21` (или выше).

Затем воспользуйтесь командой [`go install`][go_install_url]:

``` bash
go install github.com/gowebly/gowebly@latest
```

## Docker

Вы можете использовать **Gowebly** CLI с помощью нашего [официального Docker-образа][docker_gowebly_image_url] и запускать его в контейнере:

``` bash
docker pull gowebly/gowebly:latest
```

::: danger Ограничения Docker-образа
Данный Docker-образ работает **только** на системах GNU/Linux (`amd64` или `arm64`, включая WSL).
:::

## Homebrew

Пользователям GNU/Linux и Apple macOS доступен способ установки **Gowebly** CLI с помощью [Homebrew][other_brew_url].

Тапните новую формулу:

``` bash
brew tap gowebly/tap
```

Установите:

``` bash
brew install gowebly/tap/gowebly
```

## Ручной режим

Загрузите готовые файлы `exe` для Windows, пакеты `deb` (для Debian, Ubuntu), `rpm` (для CentOS, Fedora), `apk` (для Alpine) или Arch Linux со страницы [Releases][repo_releases_url].

Устанавливайте их, как обычно.

<!--@include: ../../parts/links.md-->