---
editLink: false
lastUpdated: false
---

# Notas de la versión

Esta sección contiene notas de la versión para cada versión del **Gowebly**.

## v1.7.x <Badge type="tip" text="latest" />

- Add `gin` backend template.
- Add support `a-h/templ` to `gin` backend.
- Update `Dockerfile` and `docker-compose.yml` files.
- Published this documentation to [GitHub Pages][repo_docs_url].

## v1.6.x

- Add `httprouter` backend template.
- Add support `a-h/templ` to `httprouter` backend.

## v1.5.x

- Add CLI version (using ldflags).
- Add support `a-h/templ` to `default` backend.
- Add support `a-h/templ` to `chi` backend.
- Add support `a-h/templ` to `echo` backend.
- Add support `a-h/templ` to `fiber` backend.
- Add support `linux/arm64` to the official Docker image.
- Update `tailwindcss` templates and styles to support `a-h/templ`.
- Update `unocss` templates and styles to support `a-h/templ`.
- Update config validation (`TemplateEngine`).
- Update tests (validators).
- Update dependencies.

## v1.4.x

- Add PWA manifest.
- Update tests (validators).
- Fix PWA screenshots naming.
- Fix wrong screenshot filenames.
- Update dependencies.

## v1.3.x

- Add `doctor` cmd command.
- Add an explanatory message on all cmd commands.
- Add Codecov workflow to GitHub Actions.
- Bug fixes,fixes `go-critic` issues.
- Update frontend templates, Gowebly logo.
- Fix Windows issue (template: pattern matches not file).
- Fix `go:embed` issue.
- Security update (CVE-2023-39325).
- Refactoring cmd commands.
- Fix `init` cmd command.
- Add tests (helpers).
- Update dependencies.

## v1.2.x

- Add `htmx` demo request to templates.
- Bug fixes.

## v1.1.x

- Add live-reloading via `ExecuteInGoroutine` function.
- Code refactoring.

## v1.0.x

- Initial release.
- All components are fully tested and ready to run on your local machine.
- Pushed official Docker image to [Docker Hub][docker_gowebly_image_url].

## v0.0.0-xxx <Badge type="danger" text="not supported" />

These releases contain development versions of the **Gowebly** project and are used only for initial commits to prepare for the migration to the stable version.

<!--@include: ../parts/links.md-->