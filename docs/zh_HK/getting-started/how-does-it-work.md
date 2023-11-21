---
editLink: false
lastUpdated: false
---

# 它是如何工作的？

本节将帮助您了解 Gowebly CLI 的工作原理。

<!--@include: ../../parts/zh_HK/block_want-to-try.md-->

Gowebly CLI 建立在 [Go][go_url] 编程语言之上。

因此，它可以作为可执行应用程序在任何支持的系统和架构上成功运行。Gowebly CLI 生成的所有项目模板（包括后台和前台）都已包含在此可执行文件中。也就是说，使用 CLI 不需要任何额外的文件。

由于使用了 goroutines，CLI 在引擎盖下运行的许多进程都是并行执行的。

## 后台部分

项目后台部分的模板已经过全面测试，只包含您开始工作所需的功能和参数。您可以将它们作为一个良好的开端，并随着项目的发展不断改进。

目前，CLI 支持以下 Go 网络框架： [Fiber][backend_fiber_url]、[Gin][backend_gin_url]、[Echo][backend_echo_url]、[Chi][backend_chi_url] 和 [HttpRouter][backend_httprouter_url]。默认情况下，创建的项目将使用内置的 [net/http][backend_net_http_url] 包。

为了提高效率，CLI 支持 [Templ][backend_ah_templ_url] 模板引擎。在它的帮助下，您无需离开传统的 Go 环境，就能为您的项目快速创建用户界面。所有模板都是普通的 Go 函数，无需创建额外的 HTML 模板和处理内置的 Go 模板引擎（来自 `html/template` 软件包）。

## 前端部分

为了创建前端部分的构建，我们选择了快速简便的 [Parcel][frontend_parcel_url] 捆绑程序 `2` 版本。这让我们最大限度地减少了前端构建过程中不必要的压力。无需再了解配置，CLI 已经为你准备好了。

目前，CLI 支持以下 CSS 框架： [Tailwind CSS][frontend_tailwindcss_url]、[UnoCSS][frontend_unocss_url] 和 [daisyUI][frontend_daisyui_url] 组件库。 默认情况下，创建的项目将使用最少的 CSS 样式进行演示。

### JavaScript 运行时环境

我们紧跟前端开发工具的最新更新，因此 CLI 支持两种 JavaScript 运行时环境：标准的 [Node.js][frontend_nodejs_url]，以及新的、速度极快的 [Bun][frontend_bun_url]（向后兼容 Node.js）。您可以在 CLI 设置中为自己的项目选择最合适的方式。

### htmx 和 hyperscript

CLI 还包含一个 HTTP 客户端，可在后台从远程 CDN 下载 [htmx][frontend_htmx_url] 和 [hyperscript][frontend_hyperscript_url] JavaScript 文件，以便在项目中进一步使用。

## 部署

要将项目成功部署到远程服务器（或云中），CLI 预先准备了 Docker 文件（`docker-compose.yml` 和 `Dockerfile`）。它们已经包含了创建与项目完全隔离的容器所需的所有设置。

## 结论

综上所述，我们有信心说，无论你的代码和网页开发经验如何，你都会喜欢使用 Gowebly CLI！ :wink:

<!--@include: ../../parts/links.md-->