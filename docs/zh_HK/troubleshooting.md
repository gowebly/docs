---
prev:
  text: '常见问题'
  link: '/zh_HK/faq'
---

# 故障排除

使用 Gowebly CLI 时可能出现的最常见故障。

<!--@include: ../parts/block_cant-find-answer.md-->

## Docker: 请求的镜像平台与检测到的主机平台不匹配

官方的 Gowebly [Docker image][docker_gowebly_image_url] 仅适用于 GNU/Linux：

- `linux/amd64`
- `linux/arm64`

不支持其他架构和操作系统。

::: tip Windows Linux 子系统
是的，Gowebly CLI 在 [Windows Subsystem for Linux][other_wsl_url]（WSL）上也能完美运行，因为它使用 Ubuntu 作为 GNU/Linux 发行版。
:::

## 端口 X 被操作系统占用

某些操作系统可能会占用您想用来开发和部署应用程序的端口。您可以运行以下命令检查端口是否被操作系统占用：

::: code-group
``` bash [GNU/Linux]
lsof -iTCP -sTCP:LISTEN -P
```

``` bash [macOS]
lsof -iTCP -sTCP:LISTEN -P
```

``` bash [Windows]
netstat -aon
```
:::

要更改端口号，请将文件 `.gowebly.yml` 中的 `port` 选项替换为后端要使用的端口号：

``` yaml{2}
backend:
  port: 9000
```

重新运行应用程序并转到 `http://localhost:9000`。

<!--@include: ../parts/links.md-->