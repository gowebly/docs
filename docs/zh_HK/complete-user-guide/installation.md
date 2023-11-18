# 安装

本节将介绍在系统中安装 Gowebly CLI 的基础知识。

## Go

[下载][go_download_url] 并安装 Go。需要安装 `1.21`（或更高版本）。

然后，使用 [`go install`][go_install_url] 命令：

``` bash
go install github.com/gowebly/gowebly@latest
```

## Docker

你可以在我们的 [官方 Docker 镜像][docker_gowebly_image_url] 中使用 Gowebly CLI，并在容器中运行它：

``` bash
docker pull gowebly/gowebly:latest
```

::: danger Docker 镜像的限制
该 Docker 镜像仅适用于 GNU/Linux 系统（`amd64` 或 `arm64`，包括 WSL）。
:::

## Homebrew

GNU/Linux 和苹果 macOS 用户可通过 [Homebrew][other_brew_url] 安装 Gowebly CLI。

点击新公式：

``` bash
brew tap gowebly/tap
```

安装：

``` bash
brew install gowebly/tap/gowebly
```

## 手动模式

从 [Releases][repo_releases_url] 页面下载适用于 Windows、`deb`（适用于 Debian、Ubuntu）、`rpm`（适用于 CentOS、Fedora）、`apk`（适用于 Alpine）或 Arch Linux 软件包的现成 `exe` 文件。

像平常一样安装。

<!--@include: ../../parts/links.md-->