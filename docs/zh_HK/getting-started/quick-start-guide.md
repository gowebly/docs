# Quick start guide

Here's a minimal version of the steps to run the **Gowebly** CLI.

<!--@include: ../../parts/block_cant-find-answer.md-->

First, [download][go_download_url] and install **Go**. Version `1.21` (or higher) is required.

Run the [`go run`][go_run_url] command to create a new project in the current folder:

``` bash
go run github.com/gowebly/gowebly/v2@latest create
```

::: tip Benefits of the `go run` command
With `go run`, you can use all features of the **Gowebly** CLI without installation to your system.
:::

That's it! :fire:

A web application has been created in the current folder. It will use the **net/http** package (as a Go backend) and the **html/template** package (as a template engine). The **htmx** and **hyperscript** packages are already available in your HTML templates.

## Use a ready-made packages

Download ready-made `exe` files for Windows, `deb` (for Debian, Ubuntu), `rpm` (for CentOS, Fedora), `apk` (for Alpine), or Arch Linux packages from the [Releases][repo_releases_url] page.

Install it like you normally would.

<!--@include: ../../parts/links.md-->