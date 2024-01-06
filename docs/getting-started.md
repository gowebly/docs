---
editLink: false
lastUpdated: false
---

# What is Gowebly CLI?

This section will help you understand what **Gowebly** CLI is.

<!--@include: ./parts/block_want-to-try.md-->

The **Gowebly** CLI is a free and open source software that helps to easily build amazing web applications with Go on the backend, using htmx & hyperscript and the most popular CSS frameworks on the frontend.

CLI generates a ready-to-use project that helps to understand **Go** + **htmx** technology stack as quickly as possible and start working on it with maximum developer comfort. Many project elements are already optimally configured and ready for production.

To visualize the workflow, please refer to the diagram:

```mermaid
stateDiagram-v2
    direction LR
        Install: Install CLI
        Doctor: View diagnostics
        Create: Create new project
        Run: Run project
        [*] --> Install
        Install --> Create
        Install --> Doctor
        Doctor --> [*]
        Create --> Run
        Run --> [*]
```

<!--@include: ./parts/links.md-->