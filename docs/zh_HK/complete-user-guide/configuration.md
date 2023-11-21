# 配置文件

我们建议在启动新项目前创建配置文件。

您可以使用内置的 `init` 命令来创建配置文件：

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

该命令会在当前文件夹下创建一个名为 [`.gowebly.yml`][repo_default_config] 的默认配置文件，其中包含以下设置：

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

用你自己的方式进行编辑。

::: tip 跳过 `init` 命令
当然，如果你对新项目的以下默认配置感到满意，也可以跳过这一步：

- Go 模块 (`go.mod`) 和 `package.json` 名称设置为项目；
- 后端部分不使用任何 Go 框架（只有内置的 net/http 包）；
- 使用默认模板引擎（仅内置 html/template 软件包）；
- 前台部分不使用任何 CSS 框架（仅使用代码示例的默认样式）；
- 前端部分的 JavaScript 运行环境设置为 Node.js；
- 服务器端口为 `7000`，超时（秒）： 读取时超时 `5` 秒，写入时超时 `10` 秒；
- htmx 和 hyperscript 的最新版本。
:::

## 后台

一个必填模块，包含用于项目的后台设置。

### 模块名称

要在 `go.mod` 文件中使用的 Go 模块的名称。

```yaml
backend:
   module_name: project
```

`module_name` 选项可以是任何包含简单模块名称或 URL 的字符串（例如，`github.com/user/project`）。

默认值为 `project`。

### Go 框架

用作后台的 Go 网络框架（或路由器）的名称。

```yaml
backend:
   go_framework: default
```

`go_framework` 选项可以是字符串值之一：

| 价值         | 说明                                                                         |
| ------------ | ---------------------------------------------------------------------------- |
| `default`    | 不使用任何 Go 框架（仅使用内置的 [net/http][backend_net_http_url] 软件包）。 |
| `fiber`      | 使用 [Fiber][backend_fiber_url] 网络框架作为 Go 后台                         |
| `gin`        | 使用 [Gin][backend_gin_url] 网络框架作为 Go 后端                             |
| `echo`       | 使用 [Echo][backend_echo_url] 网络框架用作 Go 后端                           |
| `chi`        | 使用 [Chi][backend_chi_url] 可组合路由器用作 Go 后端                         |
| `httprouter` | 使用 [HttpRouter][backend_httprouter_url] 高性能路由器作为围棋后端           |

默认值为 `default`。

### 模板引擎

与 Go 网络框架一起使用的模板引擎名称。

```yaml
backend:
   template_engine: default
```

`template_engine` 选项可以是字符串值之一：

| 价值      | 说明                                                                             |
| --------- | -------------------------------------------------------------------------------- |
| `default` | 不使用任何模板引擎（仅使用内置的 [html/template][backend_html_template_url] 包） |
| `templ`   | 使用 [Templ][backend_ah_templ_url] 模板引擎                                      |

默认值为 `default`。

### 服务器端口

Go 后端使用的端口。

```yaml
backend:
   port: 7000
```

`port` 选项可以是任何正数。

::: danger 要小心！
您在配置中定义的端口不应被系统占用。
:::

默认值为 `7000`。

### 超时

Go 后端读写操作的超时（秒）。

```yaml
backend:
   timeout:
      read: 5
      write: 10
```

`timeout` 模块中的 `read` 和 `write` 选项可以是任何正数。

::: info 读取和写入超时
读取和写入超时的推荐值分别为 `5` 和 `10`。更多信息，请参阅 [Cloudflare][article_cloudflare_timeouts_url] 博客文章。
:::

读取时的默认值为 `5`，写入时的默认值为 `10`。

## 前台

一个必填区块，包含项目中要使用的前台设置。

### 软件包名称

将在 `package.json` 文件中使用的 Node.js 软件包名称。

```yaml
frontend:
   package_name: project
```

`package_name` 选项可以是任何包含简单软件包名称的字符串。

默认值为 `project`。

### CSS 框架

前端要使用的 CSS 框架名称。

```yaml
frontend:
   css_framework: default
```

`css_framework` 选项可以是字符串值之一：

| 价值          | 说明                                                                 |
| ------------- | -------------------------------------------------------------------- |
| `default`     | 不使用任何 CSS 框架（代码示例仅使用默认样式）                        |
| `tailwindcss` | 使用 [Tailwind CSS][frontend_tailwindcss_url] 作为 CSS 框架          |
| `unocss`      | 使用 [UnoCSS][frontend_unocss_url] 作为 CSS 框架                     |
| `daisyui`     | 使用 [daisyUI][frontend_daisyui_url] 组件库和 Tailwind 作为 CSS 框架 |

默认值为 `default`。

### JavaScript 运行环境

前台要使用的 JavaScript 运行时环境名称。

```yaml
frontend:
   runtime_environment: default
```

`runtime_environment` 选项可以是字符串值之一：

| 价值      | 说明                                                       |
| --------- | ---------------------------------------------------------- |
| `default` | 将 [Node.js][frontend_nodejs_url] 用作 JavaScript 运行环境 |
| `bun`     | 将 [Bun][frontend_bun_url] 用作 JavaScript 运行环境        |

默认值为 `default`。

### htmx 版本

前台要使用的 [htmx][frontend_htmx_url] 版本。

```yaml
frontend:
   htmx: latest
```

`htmx` 选项可以是任何现有版本的字符串，也可以是 `latest`（最新版本）。

默认值为 `latest`。

### hyperscript 版本

前台要使用的 [hyperscript][frontend_hyperscript_url] 版本。

```yaml
frontend:
   hyperscript: latest
```

`hyperscript` 选项可以是任何现有版本的字符串，也可以是 `latest`（最新版本）。

默认值为 `latest`。

<!--@include: ../../parts/links.md -->