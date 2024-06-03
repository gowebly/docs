---
next:
  text: 'Nuestro equipo'
  link: '/es/getting-started/our-team'
---

# Build desde el código fuente

Los fundamentos para construir el proyecto **Gowebly** en modo manual están cubiertos en esta sección.

## Clonar repositorio

Clona el repositorio y ve a la carpeta `./gowebly`:

``` bash
git clone https://github.com/gowebly/gowebly && cd gowebly
```

## Construye el binario Go

Edita todo lo que necesites en el código fuente y ejecuta el comando `go build` desde la carpeta raíz del proyecto para construir el binario:

``` bash
go build -o ./bin/mi_gowebly
```

Y ahora, puedes usar tu propio binario con **Gowebly** CLI:

``` bash
./bin/my_gowebly [COMANDO]
```

<!--@include: ../../parts/links.md-->