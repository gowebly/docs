---
prev:
  text: 'FAQ'
  link: '/faq'
---

# Troubleshooting

The most common malfunctions that may come up when using the **Gowebly** CLI.

<!--@include: ./parts/block_cant-find-answer.md-->

## Docker: The requested image's platform does not match the detected host platform

The official **Gowebly** [Docker image][docker_gowebly_image_url] is available for GNU/Linux only:

- `linux/amd64`
- `linux/arm64`

Other architectures and operating systems are **not** supported.

::: tip Windows Subsystem for Linux
Yes, **Gowebly** CLI perfectly works on the [Windows Subsystem for Linux][other_wsl_url] (WSL) too, because it uses Ubuntu as the GNU/Linux distro.
:::

## Port X is taken by OS

Some operating systems may take up ports that you want to use to develop and deploy your application. You can check if a port is taken by OS by running the command:

::: code-group
``` bash [GNU/Linux]
lsof -iTCP -sTCP:LISTEN -P
```

``` bash [macOS]
lsof -iTCP -sTCP:LISTEN -P
```

``` bash [Windows]
netstat -aon
```
:::

To change the port number, replace `port` option in the `.gowebly.yml` file with the port number you want to use for the backend:

``` yaml{2}
backend:
  port: 9000
```

Re-run your application and go to the `http://localhost:9000`.

<!--@include: ./parts/links.md-->