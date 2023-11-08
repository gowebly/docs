# Run your project

!!! info "Using a default config"
    If you don't run `init` command to create a config file (`.gowebly.yml`), the **Gowebly** CLI runs your project with a [default][repo_default_config] configuration.

To run your project in a development mode, execute the `run` command:

=== ":material-console-line: CLI"

    ``` bash
    gowebly run
    ```

=== "Go"

    ``` bash
    go run github.com/gowebly/gowebly@latest run
    ```

=== "Docker"

    ``` bash
    docker run --rm -it -v ${PWD}:${PWD} -w ${PWD} gowebly/gowebly:latest run
    ```

<img width="720" alt="gowebly run" src="https://raw.githubusercontent.com/gowebly/.github/main/images/gowebly_run.png">

### What CLI does for you?

Every time you execute the `run` command for a project, the **Gowebly** CLI does the following under the hood:

| Step  | Description                                                                                              |           Is async?           |
| ----- | -------------------------------------------------------------------------------------------------------- | :---------------------------: |
| **1** | **CLI validates the config and applies all settings to the current project**                             | :material-close:{.icon-close} |
| **2** | **CLI prepares the backend part of your project**                                                        |                               |
| 2.1   | If `template_engine` is set to `templ`, CLI runs `templ generate` with a `--watch` option                | :material-check:{.icon-check} |
| **3** | **CLI prepares the frontend part of your project**                                                       |                               |
| 3.1   | CLI runs a `watch` script from the `package.json` file with the chosen JavaScript runtime environment    | :material-check:{.icon-check} |
| **4** | **CLI downloads minimized versions of htmx and hyperscript from the trusted [unpkg.com][unpkg_url] CDN** | :material-check:{.icon-check} |
| **5** | **CLI runs your project in a simple `go run` command and show HTTP logs in the terminal**                | :material-close:{.icon-close} |

!!! tip "Asynchronous steps"
    The **Gowebly** CLI runs all blocks with asynchronous steps in individual **goroutines**. Therefore, preparing to run your project is several times faster than if you start each step one after another.

<!-- Links -->

[repo_default_config]: https://github.com/gowebly/gowebly/blob/main/internal/attachments/configs/default.yml
[unpkg_url]: https://unpkg.com