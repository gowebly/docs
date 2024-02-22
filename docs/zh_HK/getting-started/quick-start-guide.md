# Quick start guide

Here's a minimal version of the steps to run the **Gowebly** CLI.

<!--@include: ../../parts/zh_HK/block_cant-find-answer.md-->

First, [download][go_download_url] and install **Go**. Version `1.22` (or higher) is required.

Run the [`go run`][go_run_url] command to create a new project in the current folder:

``` bash
go run github.com/gowebly/gowebly/v2@latest create
```

::: tip Benefits of the `go run` command
With `go run`, you can use all features of the **Gowebly** CLI without installation to your system.
:::

That's it! :fire: A web application has been created in the current folder.

You can check which of the recommended tools are already installed on your system by using the `doctor` utility built into the **Gowebly** CLI:

``` bash
go run github.com/gowebly/gowebly/v2@latest doctor
```

If some tools are not installed, it is recommended that you install them yourself. Especially **Node.js** (or **Bun**) for building frontend parts of your application.

Now you can start developing your web application.

## Use a ready-made packages

Download ready-made `exe` files for Windows, `deb` (for Debian, Ubuntu), `rpm` (for CentOS, Fedora), `apk` (for Alpine), or Arch Linux packages from the [Releases][repo_releases_url] page.

Install it like you normally would.

<!--@include: ../../parts/links.md-->