# Configuración

Recomendamos crear un archivo de configuración **antes** de iniciar un nuevo proyecto.

Puede hacerlo utilizando el comando integrado `init`:

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

Este comando crea un archivo de configuración por defecto llamado [`.gowebly.yml`][repo_default_config] en la carpeta actual con la siguiente configuración:

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
   css_framework: default # (string) option can be one of the values: `tailwindcss`, `unocss`, `daisyui`, or `default`
   runtime_environment: default # (string) option can be one of the values: `bun`, or `default`
   htmx: latest # (string) option can be any existing version of htmx
   hyperscript: latest # (string) option can be any existing version of hyperscript
```

Editado con los tuyos.

::: tip Omitir el comando `init
Por supuesto, puedes saltarte este paso si te sientes cómodo con la siguiente configuración por defecto para tu nuevo proyecto:

- Los nombres de los módulos Go (`go.mod`) y `package.json` son **project**;
- Sin ningún framework Go para la parte backend (sólo paquete **net/http** incorporado);
- Con un motor de plantillas predeterminado (sólo el paquete integrado **html/template**);
- Sin ningún framework CSS para la parte frontend (sólo estilos por defecto para el ejemplo de código);
- El entorno de ejecución JavaScript para la parte frontal está configurado como **Node.js**;
- El puerto del servidor es `7000`, tiempo de espera (en segundos): `5` para lectura, `10` para escritura;
- Últimas versiones de **htmx** & **hyperscript**.
:::

## Backend

Un bloque obligatorio con la configuración de **backend** que se utilizará en su proyecto.

### Nombre del módulo

El nombre del módulo Go que se utilizará en el archivo `go.mod`.

```yaml
backend:
   module_name: project
```

La opción `module_name` puede ser cualquier cadena con un nombre de módulo simple o URL (por ejemplo, `github.com/user/project`).

El valor por defecto es `project`.

### Framework Go

El nombre del framework web Go (o router) a utilizar como backend.

```yaml
backend:
   go_framework: default
```

La opción `go_framework` puede ser uno de los siguientes valores de cadena:

| Valor        | Descripción                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------- |
| `default`    | No utilizar ningún framework de Go (solo el paquete incorporado [net/http][backend_net_http_url]) |
| `fiber`      | Utilizar el framework web [Fiber][backend_fiber_url] como backend de Go                           |
| `gin`        | Utilizar el framework web [Gin][backend_gin_url] como backend de Go                               |
| `echo`       | Utilizar el framework web [Echo][backend_echo_url] como backend de Go                             |
| `chi`        | Utilizar el router componible [Chi][backend_chi_url] como backend de Go                           |
| `httprouter` | Utilizar el erutado de alto rendimiento [HttpRouter][backend_httprouter_url] como backend de Go   |

El valor por defecto es `default`.

### Motor de plantillas

El nombre del motor de plantillas a utilizar con el framework web Go.

```yaml
backend:
   template_engine: default
```

La opción `template_engine` puede ser uno de los siguientes valores de cadena:

| Valor     | Descripción                                                                                                     |
| --------- | --------------------------------------------------------------------------------------------------------------- |
| `default` | No utilizar ningún motor de plantillas (solo el paquete incorporado [html/template][backend_html_template_url]) |
| `templ`   | Utilizar el motor de plantillas [Templ][backend_ah_templ_url]                                                   |

El valor por defecto es `default`.

### Puerto del servidor

El puerto que se utilizará para el backend Go.

```yaml
backend:
   port: 7000
```

La opción `port` puede ser cualquier número positivo.

::: danger Tenga cuidado.
El puerto que defina en la configuración **no** debe estar ocupado en su sistema.
:::

El valor por defecto es `7000`.

### Tiempo de espera

El tiempo de espera (en segundos) para las operaciones de lectura y escritura para el backend Go.

```yaml
backend:
   timeout:
      read: 5
      write: 10
```

Las opciones `read` y `write` del bloque `timeout` pueden ser cualquier número positivo.

::: info Tiempos de espera de lectura y escritura
Los valores recomendados son `5` para lectura y `10` para escritura. Para obtener más información, consulte esta entrada del blog [Cloudflare][article_cloudflare_timeouts_url].
:::

Los valores por defecto son `5` para lectura y `10` para escritura.

## Frontend

Un bloque obligatorio con la configuración de **frontend** que se utilizará en su proyecto.

### Nombre del paquete

El nombre del paquete Node.js que se utilizará en el archivo `package.json`.

```yaml
frontend:
   package_name: project
```

La opción `nombre_paquete` puede ser cualquier cadena con un nombre de paquete simple.

El valor por defecto es `project`.

### Marco CSS

El nombre del framework CSS a utilizar para el frontend.

```yaml
frontend:
   css_framework: default
```

La opción `css_framework` puede ser uno de los siguientes valores de cadena:

| Valor         | Descripción                                                                                           |
| ------------- | ----------------------------------------------------------------------------------------------------- |
| `default`     | No utilizar ningún framework CSS (sólo estilos por defecto para el ejemplo de código)                 |
| `tailwindcss` | Utilizar [Tailwind CSS][frontend_tailwindcss_url] como framework CSS                                  |
| `unocss`      | Utilizar [UnoCSS][frontend_unocss_url] como framework CSS                                             |
| `daisyui`     | Utilizar la biblioteca de componentes [daisyUI][frontend_daisyui_url] con Tailwind como framework CSS |

El valor por defecto es `default`.

### Entorno de ejecución de JavaScript

El nombre del entorno de ejecución JavaScript que se utilizará para el frontend.

```yaml
frontend:
   runtime_environment: default
```

La opción `runtime_environment` puede ser uno de los siguientes valores de cadena:

| Valor     | Descripción                                                                              |
| --------- | ---------------------------------------------------------------------------------------- |
| `default` | Utilizar [Node.js][frontend_nodejs_url] como entorno de ejecución JavaScript por defecto |
| `bun`     | Utilizar [Bun][frontend_bun_url] como entorno de ejecución JavaScript                    |

El valor por defecto es `default`.

### Versión de htmx

La versión del [htmx][frontend_htmx_url] a utilizar para el frontend.

```yaml
frontend:
   htmx: latest
```

La opción `htmx` puede ser una cadena con cualquier versión existente o `latest` (para la última versión).

El valor por defecto es `latest`.

### Versión de hyperscript

La versión del [hyperscript][frontend_hyperscript_url] a utilizar para el frontend.

```yaml
frontend:
   hyperscript: latest
```

La opción `hyperscript` puede ser una cadena con cualquier versión existente o `latest` (para la última versión).

El valor por defecto es `latest`.

<!--@include: ../../parts/links.md -->