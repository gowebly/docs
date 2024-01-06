---
next:
  text: 'Our team'
  link: '/getting-started/our-team'
---

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
go build -o ./bin/my_gowebly
```

And now, you can use your own binary with **Gowebly** CLI:

``` bash
./bin/my_gowebly [COMMAND]
```

<!--@include: ../parts/links.md-->