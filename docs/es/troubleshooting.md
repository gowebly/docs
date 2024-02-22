---
prev:
  text: 'FAQ'
  link: '/es/faq'
---

# Troubleshooting

The most common malfunctions that may come up when using the **Gowebly** CLI.

<!--@include: ../parts/es/block_cant-find-answer.md-->

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

There are two ways to change it.

1. Set the port number in the `BACKEND_PORT` environment variable before running:

::: code-group
``` bash [CLI]
BACKEND_PORT=9000 gowebly run
```

``` yaml{7,9} [Docker]
# docker-compose.yml

services:
  gowebly_default:
    # ...
    ports:
      - '9000:9000'
    environment:
      BACKEND_PORT: 9000 # same as the exposed container port
    # ...

# ...
```
:::

2. Edit the port number in the `server.go` file:

``` go{4}
// runServer runs a new HTTP server with the loaded environment variables.
func runServer() error {
	// Validate environment variables.
	port, err := strconv.Atoi(gowebly.Getenv("BACKEND_PORT", "9000"))
	if err != nil {
		return err
	}

	// ...
```

Now, you can open your browser and go to the `http://localhost:9000`.

<!--@include: ../parts/links.md-->