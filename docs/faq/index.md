# FAQ

The most common questions that may come up when using the **Gowebly** CLI are collected in this section.

!!! tip "Can't find the answer?"
    If you can't find the answer to your question here, feel free to create an [issue][repo_issues_url] in the **Gowebly** CLI repository or send a [PR][repo_pull_request_url] to the **Gowebly** Docs repository.

## What is the right way to ask a question or report a bug?

First of all, run `doctor` command to get a list of all the required tools, installed on your system:

=== ":material-console-line: CLI"

    ``` bash
    gowebly doctor
    ```

=== "Go"

    ``` bash
    go run github.com/gowebly/gowebly@latest doctor
    ```

=== "Docker"

    ``` bash
    docker run --rm -it -v ${PWD}:${PWD} -w ${PWD} gowebly/gowebly:latest doctor
    ```

Next, open [GitHub Issues][repo_issues_url] and follow the instructions.

!!! warning "Output of the `doctor` command"
    Don't forget to include output of the `doctor` command to the issue description! This is a very helpful information for the debugging process.

## How to change the default configuration?

You can change the default configuration in the `.gowebly.yml` file.

Create the `.gowebly.yml` file in the root of your project:

=== ":material-console-line: CLI"

    ``` bash
    gowebly init
    ```

=== "Go"

    ``` bash
    go run github.com/gowebly/gowebly@latest init
    ```

=== "Docker"

    ``` bash
    docker run --rm -it -v ${PWD}:${PWD} -w ${PWD} gowebly/gowebly:latest init
    ```

Change the settings to your needs and `create`, `run` or `build` your project as usual.

## Is it possible to see a demonstration of how the CLI works without installation?

Yes, of course! :smile: To give you a visual understanding of the project, we have recorded a short demonstration video on YouTube:

<iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/qazYscnLku4?si=GQSiQS0Aaib-T6zD&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Where else can I read something about the CLI?

We prepared articles demonstrating the main features and the major updates:

- [x] [A next-generation CLI tool for building amazing web apps in Go using htmx & hyperscript][gowebly_devto_article_1_url]
- [x] [Big update: the Gowebly CLI now supports Templ][gowebly_devto_article_2_url]

!!! tip "Want to see your article here?"
    If you want to see your article here, feel free to send a [PR][repo_pull_request_url] to the **Gowebly** Docs repository.

<!-- Links -->

[repo_pull_request_url]: https://github.com/gowebly/docs/pulls
[repo_issues_url]: https://github.com/gowebly/gowebly/issues

<!-- Articles -->

[gowebly_devto_article_1_url]: https://dev.to/koddr/a-next-generation-cli-tool-for-building-amazing-web-apps-in-go-using-htmx-hyperscript-336d
[gowebly_devto_article_2_url]: https://dev.to/koddr/big-update-the-gowebly-cli-now-supports-templ-3gog