# Configuration

We recommend creating a config file **before** starting a new project.

You can do this by using the built-in `init` command:

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

This command create a default config file called [`.gowebly.yml`][repo_default_config] in the current folder with the following settings:

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

Edit it with your own.

::: tip Skipping the `init` command
Of course, you can skip this step if you're comfortable with the following default configuration for your new project:

- Go module (`go.mod`) and `package.json` names are set to **project**;
- Without any Go framework for the backend part (only built-in **net/http** package);
- With a default template engine (only built-in **html/template** package);
- Without any CSS framework for the frontend part (only default styles for the code example);
- The JavaScript runtime environment for the frontend part is set to **Node.js**;
- Server port is `7000`, timeout (in seconds): `5` for read, `10` for write;
- Latest versions of the **htmx** & **hyperscript**.
:::

## Backend

A required block with **backend** settings to be used for your project.

### Module name

The name of the Go module to be used in the `go.mod` file.

```yaml
backend:
   module_name: project
```

The `module_name` option can be any string with a simple module name or URL (for example, `github.com/user/project`).

Default value is `project`.

### Go framework

The name of the Go web framework (or router) to use as the backend.

```yaml
backend:
   go_framework: default
```

The `go_framework` option can be one of the string values:

| Value        | Description                                                                          |
| ------------ | ------------------------------------------------------------------------------------ |
| `default`    | Don't use any Go framework (only built-in [net/http][backend_net_http_url] package)  |
| `fiber`      | Use the [Fiber][backend_fiber_url] web framework as a Go backend                     |
| `gin`        | Use the [Gin][backend_gin_url] web framework as a Go backend                         |
| `echo`       | Use the [Echo][backend_echo_url] web framework as a Go backend                       |
| `chi`        | Use the [Chi][backend_chi_url] composable router as a Go backend                     |
| `httprouter` | Use the [HttpRouter][backend_httprouter_url] high performance router as a Go backend |

Default value is `default`.

### Template engine

The name of the template engine to use with the Go web framework.

```yaml
backend:
   template_engine: default
```

The `template_engine` option can be one of the string values:

| Value     | Description                                                                                       |
| --------- | ------------------------------------------------------------------------------------------------- |
| `default` | Don't use any template engines (only built-in [html/template][backend_html_template_url] package) |
| `templ`   | Use the [Templ][backend_ah_templ_url] template engine                                             |

Default value is `default`.

### Server port

The port to be used for the Go backend.

```yaml
backend:
   port: 7000
```

The `port` option can be any positive number.

::: danger Be careful!
The port you define in the configuration should **not** be taken up on your system.
:::

Default value is `7000`.

### Timeout

The timeout (in seconds) for the read and write operations for the Go backend.

```yaml
backend:
   timeout:
      read: 5
      write: 10
```

The `read` and `write` options in the `timeout` block can be any positive number.

::: info Read and write timeouts
The recommended values are `5` for read and `10` for write. For more information, see this [Cloudflare][article_cloudflare_timeouts_url]  blog post.
:::

Default values are `5` for read and `10` for write.

## Frontend

A required block with **frontend** settings to be used for your project.

### Package name

The name of the Node.js package to be used in the `package.json` file.

```yaml
frontend:
   package_name: project
```

The `package_name` option can be any string with a simple package name.

Default value is `project`.

### CSS framework

The name of the CSS framework to use for the frontend.

```yaml
frontend:
   css_framework: default
```

The `css_framework` option can be one of the string values:

| Value         | Description                                                                                |
| ------------- | ------------------------------------------------------------------------------------------ |
| `default`     | Don't use any CSS framework (only default styles for the code example)                     |
| `tailwindcss` | Use the [Tailwind CSS][frontend_tailwindcss_url] as a CSS framework                        |
| `unocss`      | Use the [UnoCSS][frontend_unocss_url] as a CSS framework                                   |
| `daisyui`     | Use the [daisyUI][frontend_daisyui_url] component library with Tailwind as a CSS framework |
| `bulma`       | Use the [Bulma][frontend_bulma_url] as a CSS framework                                     |
| `bootstrap`   | Use the [Bootstrap][frontend_bootstrap_url] as a CSS framework                             |

Default value is `default`.

### JavaScript runtime environment

The name of the JavaScript runtime environment to use for the frontend.

```yaml
frontend:
   runtime_environment: default
```

The `runtime_environment` option can be one of the string values:

| Value     | Description                                                                |
| --------- | -------------------------------------------------------------------------- |
| `default` | Use the [Node.js][frontend_nodejs_url] as a JavaScript runtime environment |
| `bun`     | Use the [Bun][frontend_bun_url] as a JavaScript runtime environment        |

Default value is `default`.

### Version of htmx

The version of the [htmx][frontend_htmx_url] to use for the frontend.

```yaml
frontend:
   htmx: latest
```

The `htmx` option can be a string with any existing version or `latest` (for the latest version).

Default value is `latest`.

### Version of hyperscript

The version of the [hyperscript][frontend_hyperscript_url] to use for the frontend.

```yaml
frontend:
   hyperscript: latest
```

The `hyperscript` option can be a string with any existing version or `latest` (for the latest version).

Default value is `latest`.

<!--@include: ../parts/links.md -->