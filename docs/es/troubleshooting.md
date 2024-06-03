---
prev:
  text: 'FAQ'
  link: '/es/faq'
---

# Troubleshooting

Los problemas más comunes que pueden surgir al usar la CLI de **Gowebly** se recopilan en esta sección.

<!--@include: ../parts/es/block_cant-find-answer.md-->

## X puerto está ocupado por el sistema

Algunos sistemas operativos pueden ocupar los puertos que deseas usar para desarrollar y desplegar tu aplicación. Puedes verificar si un puerto está ocupado por el sistema ejecutando el siguiente comando:

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

En dado caso, hay dos formas de cambiarlo:

1. Establecer el número de puerto en la variable de entorno `BACKEND_PORT` antes de ejecutar:

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

2. Edita el número de puerto en el archivo `server.go`:

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

Ahora, puedes abrir tu navegador y acceder a `http://localhost:9000`.

<!--@include: ../parts/links.md-->