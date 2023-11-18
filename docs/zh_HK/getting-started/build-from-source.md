# 从源代码构建

本节将介绍在手动模式下构建 Gowebly 项目的基础知识。

## 克隆版本库

克隆版本库并转到 `./gowebly` 文件夹：

``` bash
git clone https://github.com/gowebly/gowebly && cd gowebly
```

## 构建 Go 二进制文件

编辑源代码中所有需要的内容，然后在项目根目录下运行 `go build` 命令来构建二进制文件：

``` bash
go build .
```

现在，你可以使用 Gowebly CLI 运行自己的二进制文件。

## 创建 Docker 映像

::: danger Dockerfile
由于我们在管道中使用的是 [GoReleaser][other_goreleaser_url] 工具，因此需要在版本库根目录下创建自己的 `Dockerfile` 文件，以创建 Docker 镜像。
:::

编辑源代码中的所有内容，并构建 Docker 镜像：

``` bash
docker build -t my-gowebly-image:latest .
```

现在，你可以使用自己的 Docker 镜像，通过 Gowebly CLI 运行容器。

<!--@include: ../../parts/links.md-->