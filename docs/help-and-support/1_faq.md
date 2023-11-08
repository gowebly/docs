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

<!-- Links -->

[repo_pull_request_url]: https://github.com/gowebly/docs/pulls
[repo_issues_url]: https://github.com/gowebly/gowebly/issues