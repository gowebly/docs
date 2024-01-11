---
prev:
  text: 'Complete user guide'
  link: '/complete-user-guide'
next:
  text: 'Troubleshooting'
  link: '/troubleshooting'
---

# FAQ

The most common questions that may come up when using the **Gowebly** CLI are collected in this section.

<!--@include: ./parts/block_cant-find-answer.md-->

## What is the right way to ask a question or report a bug?

Running the `doctor` command will give you a list of all the tools you need to work properly with the **Gowebly** CLI that are installed on your system:

::: code-group
``` bash [CLI]
gowebly doctor
```

``` bash [Go]
go run github.com/gowebly/gowebly@latest doctor
```
:::

Next, open [GitHub Issues][repo_issues_url] and follow the instructions.

::: warning Output of the `doctor` command
Don't forget to include output of the `doctor` command to the issue description! This is a very helpful information for the debugging process.
:::

## Is it possible to see a demonstration of how the CLI works without installation?

Yes, of course! :smile: To give you a visual understanding of the project, we have recorded a short demonstration GIF for `gowebly create` command:

<img width="100%" alt="gowebly create" src="https://raw.githubusercontent.com/gowebly/.github/main/images/gowebly_create.gif"/>

## Where else can I read something about the CLI?

We prepared articles demonstrating the main features and the major updates:

- [A next-generation CLI tool for building amazing web apps in Go using htmx & hyperscript][article_devto_article_1_url]
- [Big update: the Gowebly CLI now supports Templ][article_devto_article_2_url]
- [Frontend update: the Gowebly CLI now supports daisyUI components library][article_devto_article_3_url]
- [Big frontend update: the Gowebly CLI now supports Bootstrap and Bulma][article_devto_article_4_url]
- [The Gowebly CLI has grown to v2.0.0][article_devto_article_5_url]

::: tip Want to see your article here?
If you want to see your article here, feel free to send a [PR][repo_docs_pr_url] to the **Gowebly** Docs repository.
:::

<!--@include: ./parts/links.md-->