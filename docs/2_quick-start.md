---
hide:
    - navigation
    - toc
---

# Quick start

First, [download][go_download_url] and install **Go**. Version `1.21` (or higher) is required.

Second, run the **Gowebly** CLI using the [`go run`][go_run_url] command to create a new project with the [default][repo_default_config] configuration:

``` bash
go run github.com/gowebly/gowebly@latest create
```

!!! tip "Benefits of the `go run` command"
    With `go run`, you can use all features of the **Gowebly** CLI without installation to your system.

That's it! The web application will be created in the current folder.

It will use the built-in **net/http** package (as a Go backend) and the built-in **html/template** package (as a template engine for the frontend). The **htmx** and **hyperscript** are already available in your HTML templates.

<!-- Links -->

[go_download_url]: https://golang.org/dl/
[go_run_url]: https://pkg.go.dev/cmd/go#hdr-Compile_and_run_Go_program
[repo_default_config]: https://github.com/gowebly/gowebly/blob/main/internal/attachments/configs/default.yml