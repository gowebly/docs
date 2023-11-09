# Troubleshooting

The most common malfunctions and problems that may come up when using the **Gowebly** CLI are collected in this section.

!!! tip "Can't find the answer?"
    If you can't find the answer to your question here, feel free to create an [issue][repo_issues_url] in the **Gowebly** CLI repository or send a [PR][repo_pull_request_url] to the **Gowebly** Docs repository.

## Port X is taken by OS

Some operating systems may take up ports that you want to use to develop and deploy your application.

You can check if a port is taken by OS by running the command:

=== ":material-linux: GNU/Linux"

    ``` bash
    lsof -iTCP -sTCP:LISTEN -P
    ```

=== ":material-apple: macOS"

    ``` bash
    lsof -iTCP -sTCP:LISTEN -P
    ```

=== ":material-microsoft-windows: Windows"

    ``` bash
    netstat -aon
    ```

To change the port number, edit the `.gowebly.yml` file and execute `run` or `build` command to apply the changes.

<!-- Links -->

[repo_pull_request_url]: https://github.com/gowebly/docs/pulls
[repo_issues_url]: https://github.com/gowebly/gowebly/issues