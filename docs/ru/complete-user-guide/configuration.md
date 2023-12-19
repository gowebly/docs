# Конфигурация

Мы рекомендуем создавать конфигурационный файл **до** создания нового проекта.

Это можно сделать с помощью встроенной команды `init`:

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

<img width="720" alt="gowebly init" src="https://raw.githubusercontent.com/gowebly/.github/main/images/gowebly_init.png">

Эта команда создает в текущей папке файл конфигурации по умолчанию [`.gowebly.yml`][repo_default_config] со следующими настройками:

```yaml{2-5,7-9,11-16}
backend:
   module_name: project # (string) option can be any name of your Go module
   go_framework: default # (string) option can be one of the values: `fiber`, `gin`, `echo`, `chi`, `httprouter`, or `default`
   template_engine: default # (string) option can be one of the values: `templ`, or `default`
   port: 7000 # (int) option can be any port that is not taken up on your system
   timeout:
      read: 5 # (int) option can be any number of seconds, `5` is recommended
      write: 10 # (int) option can be any number of seconds, `10` is recommended

frontend:
   package_name: project # (string) option can be any name of your `package.json`
   css_framework: default # (string) option can be one of the values: `tailwindcss`, `unocss`, `daisyui`, `bulma`, `bootstrap`, or `default`
   runtime_environment: default # (string) option can be one of the values: `bun`, or `default`
   htmx: latest # (string) option can be any existing version of htmx
   hyperscript: latest # (string) option can be any existing version of hyperscript
```

Отредактируйте его, добавив свои собственные настройки.

::: tip Пропуск команды `init`
Конечно, вы можете пропустить этот шаг, если вас устраивает следующая конфигурация по умолчанию для вашего нового проекта:

- Имена модулей Go (`go.mod`) и `package.json` установлены в **project**;
- Без какого-либо Go-фреймворка для backend-части (только встроенный пакет **net/http**);
- С шаблонизатором по умолчанию (только встроенный пакет **html/template**);
- Без CSS-фреймворка для фронтенд-части (только стили по умолчанию для примера);
- Среда выполнения JavaScript для фронтенд-части будет использовать **Node.js**;
- Порт сервера — `7000`, таймаут (в секундах): `5` для чтения, `10` для записи;
- Последние версии **htmx** и **hyperscript**.
:::

## Бэкенд

Обязательный блок с настройками **бэкенда**, который будет использоваться для вашего проекта.

### Имя модуля

Имя Go-модуля, которое будет использоваться в файле `go.mod`.

```yaml
backend:
   module_name: project
```

Опция `module_name` может быть любой строкой с простым именем модуля или URL (например, `github.com/user/project`).

Значение по умолчанию: `project`.

### Go-фреймворк

Имя Go веб-фреймворка (или маршрутизатора), который будет использоваться в качестве бэкенда.

```yaml
backend:
   go_framework: default
```

Опция `go_framework` может быть одним из строковых значений:

| Значение     | Описание                                                                                        |
| ------------ | ----------------------------------------------------------------------------------------------- |
| `default`    | Не использовать никакой Go фреймворк (только встроенный [net/http][backend_net_http_url] пакет) |
| `fiber`      | Использовать веб-фреймворк [Fiber][backend_fiber_url] в качестве Go бэкенда                     |
| `gin`        | Использовать веб-фреймворк [Gin][backend_gin_url] в качестве Go бэкенда                         |
| `echo`       | Использовать веб-фреймворк [Echo][backend_echo_url] в качестве Go бэкенда                       |
| `chi`        | Использовать комбинируемый роутер [Chi][backend_chi_url] в качестве Go бэкенда                  |
| `httprouter` | Использовать производительный роутер [HttpRouter][backend_httprouter_url] в качестве Go бэкенда |

Значение по умолчанию: `default`.

### Шаблонизатор

Имя шаблонизатора, используемого с Go веб-фреймворком.

```yaml
backend:
   template_engine: default
```

Опция `template_engine` может быть одним из строковых значений:

| Значение  | Описание                                                                                           |
| --------- | -------------------------------------------------------------------------------------------------- |
| `default` | Не использовать шаблонизаторы (только встроенный пакет [html/template][backend_html_template_url]) |
| `templ`   | Использовать шаблонизатор [Templ][backend_ah_templ_url]                                            |

Значение по умолчанию: `default`.

### Порт сервера

Порт, который будет использоваться для Go-бэкенда.

```yaml
backend:
   port: 7000
```

Опция `port` может быть любым положительным числом.

::: danger Будьте внимательны!
Порт, заданный в конфигурации, **не** должен быть занят в вашей системе.
:::

Значение по умолчанию: `7000`.

### Таймаут

Таймаут (в секундах) для операций чтения и записи для Go-бэкенда.

```yaml
backend:
   timeout:
      read: 5
      write: 10
```

Опции `read` и `write` в блоке `timeout` могут быть любыми положительными числами.

::: info Таймауты чтения и записи
Рекомендуемые значения: `5` для чтения и `10` для записи. Для получения дополнительной информации, см. эту статью в блоге [Cloudflare][article_cloudflare_timeouts_url].
:::

Значения по умолчанию: `5` для чтения и `10` для записи.

## Фронтенд

Обязательный блок с настройками **фронтенда**, который будет использоваться для вашего проекта.

### Имя пакета

Имя пакета Node.js, которое будет использоваться в файле `package.json`.

```yaml
frontend:
   package_name: project
```

Опция `package_name` может быть любой строкой с простым именем пакета.

Значение по умолчанию: `project`.

### CSS-фреймворк

Имя CSS-фреймворка, который будет использоваться для фронтенда.

```yaml
frontend:
   css_framework: default
```

Опция `css_framework` может принимать одно из следующих строковых значений:

| Значение      | Описание                                                                                                 |
| ------------- | -------------------------------------------------------------------------------------------------------- |
| `default`     | Не использовать ни один из CSS-фреймворков (только стили по умолчанию для примера)                       |
| `tailwindcss` | Использовать [Tailwind CSS][frontend_tailwindcss_url] в качестве CSS-фреймворка                          |
| `unocss`      | Использовать [UnoCSS][frontend_unocss_url] в качестве CSS-фреймворка                                     |
| `daisyui`     | Использовать библиотеку компонентов [daisyUI][frontend_daisyui_url] с Tailwind в качестве CSS-фреймворка |
| `bulma`       | Использовать [Bulma][frontend_bulma_url] в качестве CSS-фреймворка                                       |
| `bootstrap`   | Использовать [Bootstrap][frontend_bootstrap_url] в качестве CSS-фреймворка                               |

Значение по умолчанию: `default`.

### Среда выполнения JavaScript

Имя среды выполнения JavaScript, используемой для фронтенда.

```yaml
frontend:
   runtime_environment: default
```

Опция `runtime_environment` может принимать одно из следующих строковых значений:

| Значение  | Описание                                                                           |
| --------- | ---------------------------------------------------------------------------------- |
| `default` | Использовать [Node.js][frontend_nodejs_url] в качестве среды выполнения JavaScript |
| `bun`     | Использовать [Bun][frontend_bun_url] в качестве среды выполнения JavaScript        |

Значение по умолчанию: `default`.

### Версия htmx

Версия [htmx][frontend_htmx_url], которую следует использовать для фронтенда.

```yaml
frontend:
   htmx: latest
```

Опция `htmx` может быть строкой с любой существующей версией или `latest` (для последней версии).

Значение по умолчанию: `latest`.

### Версия hyperscript

Версия [hyperscript][frontend_hyperscript_url], которую следует использовать для фронтенда.

```yaml
frontend:
   hyperscript: latest
```

Опция `hyperscript` может быть строкой с любой существующей версией или `latest` (для последней версии).

Значение по умолчанию: `latest`.

<!--@include: ../../parts/links.md -->