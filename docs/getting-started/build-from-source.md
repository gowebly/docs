# Build from the source

The basics for building the **Gowebly** project in manual mode are covered in this section.

## Clone repository

Clone the repository and go to the `./gowebly` folder:

``` bash
git clone https://github.com/gowebly/gowebly && cd gowebly
```

## Build Go binary

Edit everything you need in the source code and run the `go build` command from the project's root folder to build the binary:

``` bash
go build .
```

Now you can run your own binary with **Gowebly** CLI.

## Create Docker image

::: danger Dockerfile
Since we are using the [GoReleaser][other_goreleaser_url] tool in our pipeline, you need to create your own `Dockerfile` file in the root of the repository to create a Docker image.
:::

Edit everything you need in the source code and build the Docker image:

``` bash
docker build -t my-gowebly-image:latest .
```

Now you can use your own Docker image to run a container with **Gowebly** CLI.

<!--@include: ../parts/links.md-->