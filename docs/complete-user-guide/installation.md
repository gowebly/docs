# Installation

The basics for installing the **Gowebly** CLI on your system are covered in this section.

## Go

[Download][go_download_url] and install **Go**. Version `1.21` (or higher) is required.

Then, use the [`go install`][go_install_url] command:

``` bash
go install github.com/gowebly/gowebly@latest
```

## Docker

Feel free to using **Gowebly** CLI from our [official Docker image][docker_gowebly_image_url] and run it in the container:

``` bash
docker pull gowebly/gowebly:latest
```

::: danger Limitations of the Docker image
This Docker image works **only** on the GNU/Linux systems (`amd64` or `arm64`, including WSL).
:::

## Homebrew

GNU/Linux and Apple macOS users available way to install **Gowebly** CLI via [Homebrew][other_brew_url].

Tap a new formula:

``` bash
brew tap gowebly/tap
```

Install:

``` bash
brew install gowebly/tap/gowebly
```

## Manual mode

Download ready-made `exe` files for Windows, `deb` (for Debian, Ubuntu), `rpm` (for CentOS, Fedora), `apk` (for Alpine), or Arch Linux packages from the [Releases][repo_releases_url] page.

Install it like you normally would.

<!--@include: ../parts/links.md-->