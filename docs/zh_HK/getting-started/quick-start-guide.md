# 快速入门指南

以下是运行 Gowebly CLI 的最基本步骤。

<!--@include: ../../parts/block_cant-find-answer.md-->

首先，[下载][go_download_url] 并安装 Go。需要安装 `1.21`（或更高版本）。

使用 [`go run`][go_run_url] 命令运行 Gowebly CLI，以 [默认][repo_default_config] 配置在当前文件夹中创建一个新项目：

``` bash
go run github.com/gowebly/gowebly@latest create
```

::: tip `go run` 命令的优势
使用 `go run` 命令，无需在系统中安装，即可使用 Gowebly CLI 的所有功能。
:::

就是这样！ :fire:

在当前文件夹中创建了一个网络应用程序。它将使用 net/http 软件包（作为 Go 后端）和 html/template 软件包（作为模板引擎）。HTML 模板中已经包含了 htmx 和 hyperscript 软件包。

## 使用 GNU/Linux 发行版的现成软件包

从 [Releases][repo_releases_url] 页面下载适用于 Windows、`deb`（适用于 Debian、Ubuntu）、`rpm`（适用于 CentOS、Fedora）、`apk`（适用于 Alpine）或 Arch Linux 软件包的现成 `exe` 文件。

像平常一样安装。

<!--@include: ../../parts/links.md-->