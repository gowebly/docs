---
next:
  text: '故障排除'
  link: '/zh_HK/troubleshooting'
---

# 常见问题

本节收集了使用 Gowebly CLI 时可能遇到的最常见问题。

<!--@include: ../parts/zh_HK/block_cant-find-answer.md-->

## 提问或报告错误的正确方式是什么？

运行 `doctor` 命令，获取系统中安装的所有必要工具的列表：

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

接下来，打开 [GitHub Issues][repo_issues_url]，并按照说明操作。

::: warning `doctor` 命令输出
不要忘记在问题描述中包含 `doctor` 命令的输出！这对调试过程非常有帮助。
:::

## 如何更改默认配置？

你可以在 `.gowebly.yml` 文件中更改默认配置。

在项目根目录下创建 `.gowebly.yml` 文件：

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

根据需要更改设置，然后像往常一样 `create`、`run` 或 `build` 您的项目。

## 是否有可能在不安装的情况下看到 CLI 如何工作的演示？

当然可以！ :smile: 为了让您直观地了解该项目，我们在 YouTube 上录制了一段简短的演示视频：

<iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/qazYscnLku4?si=GQSiQS0Aaib-T6zD&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 我还能在哪里读到有关 CLI 的信息？

我们准备了介绍主要功能和重大更新的文章：

- [A next-generation CLI tool for building amazing web apps in Go using htmx & hyperscript][article_devto_article_1_url]
- [Big update: the Gowebly CLI now supports Templ][article_devto_article_2_url]

::: tip 想在这里看到您的文章吗？
如果您想在这里看到您的文章，请随时向 Gowebly 文档库发送 [PR][repo_docs_pr_url]。
:::

<!--@include: ../parts/links.md-->