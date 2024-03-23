# Info about your system

To view information about your system, execute the `doctor` command:

::: code-group
```bash [CLI]
gowebly doctor
```

```bash [Go]
go run github.com/gowebly/gowebly@latest doctor
```
:::

And result will be:

```
✓ Your system information has been collected successfully!

│
│ Copy this information to paste into an issue ↘
│
│ Gowebly CLI: v2.3.3 (build with go1.22.1 on darwin/arm64)
│
│ Go: 1.22.1 darwin/arm64
│ Node.js version: 21.7.1 (npm 10.5.0)
│ Bun version: 1.0.35
│
│ Is Air tool installed? true
│ Is Templ package installed? true
│

✱ For more information go to the official docs: https://gowebly.org
```

<!--@include: ../parts/links.md -->