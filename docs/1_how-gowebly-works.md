# How it works?

The **Gowebly** CLI is built on top of the [Go][go_url] programming language.

Therefore, it can run successfully on any supported system and architecture as an executable application. All the templates for the project (both backend and frontend) that it generates as a result of its work are already included in this executable. That is, you do not need any additional files to work with the CLI.

A lot of the processes that the CLI runs under the hood are executed in parallel, thanks to **goroutines**.

The CLI also includes an HTTP client that allows background downloading of [htmx][htmx_url] and [hyperscript][hyperscript_url] JavaScript files from a remote CDN for further use in your project.

The templates for the **backend** part of your project have been thoroughly tested and contain only the features and parameters you need to get started. You can use them as a good start and improve them as your project grows.

To be more efficient, the CLI supports the [Templ][ah_templ_url] templating engine. With its help, you can rapidly create UIs for your project without leaving the traditional Go environment. All templates are regular Go functions, without having to create additional HTML templates and deal with the built-in Go templating engine (from the `html/template` package).

To create a build for the **frontend** part, the quick and easy [Parcel][parcel_url] bundler version `2` was chosen. This allowed us to reduce the unnecessarily stressful moment of frontend build to the maximum. No more need to understand configurations, the CLI has already prepared it for you.

To successfully **deploy** your project to a remote server (or in the cloud), the CLI has pre-prepared Docker files (`docker-compose.yml` and `Dockerfile`). They already contain all the settings you need to create an isolated container exactly with your project.

All of this together gives us the confidence to say that you will enjoy working with the **Gowebly** CLI, whatever your experience in programming and web development! :wink:

## Introduction video

To give you a visual understanding of the project, we have recorded a short introduction **video**:

<iframe width="100%" height="640" src="https://www.youtube-nocookie.com/embed/qazYscnLku4?si=GQSiQS0Aaib-T6zD&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Articles

We prepared **articles** demonstrating the main features and the major updates:

- [🔥 A next-generation CLI tool for building amazing web apps in Go using htmx & hyperscript][gowebly_devto_article_1_url]
- [🔥 Big update: the Gowebly CLI now supports Templ][gowebly_devto_article_2_url]

!!! tip "Want to see your article here?"
    If you want to see your article here, feel free to send a [PR][repo_pull_request_url] to the **Gowebly** Docs repository.

<!-- Links -->

[repo_pull_request_url]: https://github.com/gowebly/docs/pulls
[gowebly_devto_article_1_url]: https://dev.to/koddr/a-next-generation-cli-tool-for-building-amazing-web-apps-in-go-using-htmx-hyperscript-336d
[gowebly_devto_article_2_url]: https://dev.to/koddr/big-update-the-gowebly-cli-now-supports-templ-3gog

<!-- Products links -->

[go_url]: https://go.dev
[htmx_url]: https://htmx.org
[hyperscript_url]: https://hyperscript.org
[parcel_url]: https://parceljs.org
[ah_templ_url]: https://github.com/a-h/templ