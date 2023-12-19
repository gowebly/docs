---
next:
  text: 'Troubleshooting'
  link: '/troubleshooting'
---

# FAQ

The most common questions that may come up when using the **Gowebly** CLI are collected in this section.

<!--@include: ./parts/block_cant-find-answer.md-->

## What is the right way to ask a question or report a bug?

Running the `doctor` command will give you a list of all the CLI tools that are installed on your system:

::: code-group
``` bash [CLI]
gowebly doctor
```

``` bash [Go]
go run github.com/gowebly/gowebly@latest doctor
```

``` bash [Docker]
docker run --rm -it -v ${PWD}:${PWD} -w ${PWD} gowebly/gowebly:latest doctor
```
:::

Next, open [GitHub Issues][repo_issues_url] and follow the instructions.

::: warning Output of the `doctor` command
Don't forget to include output of the `doctor` command to the issue description! This is a very helpful information for the debugging process.
:::

## How to change the default configuration?

You can change the default configuration in the `.gowebly.yml` file.

Create the `.gowebly.yml` file in the root of your project:

::: code-group
``` bash [CLI]
gowebly init
```

``` bash [Go]
go run github.com/gowebly/gowebly@latest init
```

``` bash [Docker]
docker run --rm -it -v ${PWD}:${PWD} -w ${PWD} gowebly/gowebly:latest init
```
:::

Change the settings to your needs and `create`, `run` or `build` your project as usual.

## Is it possible to see a demonstration of how the CLI works without installation?

Yes, of course! :smile: To give you a visual understanding of the project, we have recorded a short demonstration video on YouTube:

<iframe width="100%" height="380" src="https://www.youtube-nocookie.com/embed/qazYscnLku4?si=GQSiQS0Aaib-T6zD&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Where else can I read something about the CLI?

We prepared articles demonstrating the main features and the major updates:

- [A next-generation CLI tool for building amazing web apps in Go using htmx & hyperscript][article_devto_article_1_url]
- [Big update: the Gowebly CLI now supports Templ][article_devto_article_2_url]
- [Frontend update: the Gowebly CLI now supports daisyUI components library][article_devto_article_3_url]
- [Big frontend update: the Gowebly CLI now supports Bootstrap and Bulma][article_devto_article_4_url]

::: tip Want to see your article here?
If you want to see your article here, feel free to send a [PR][repo_docs_pr_url] to the **Gowebly** Docs repository.
:::

<!--@include: ./parts/links.md-->