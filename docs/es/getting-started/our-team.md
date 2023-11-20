---
editLink: false
lastUpdated: false
next:
  text: 'Guía completa del usuario'
  link: '/es/complete-user-guide'
---

# Nuestro equipo

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/koddr.png',
    name: 'Vic Shóstak',
    title: 'Developer & Maintainer',
    links: [
      { icon: 'github', link: 'https://github.com/koddr' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/koddr' }
    ]
  },
  {
    avatar: 'https://www.github.com/truewebartisans.png',
    name: 'True Web Artisans',
    title: 'Contribution & Support',
    links: [
      { icon: 'github', link: 'https://github.com/truewebartisans' }
    ]
  }
]
</script>

Saluda a nuestro impresionante equipo.

<VPTeamMembers size="small" :members="members" />

## Colaboradores

Nuestro increíble equipo está creciendo, pero siempre estamos buscando nuevos colaboradores.

<a href="https://github.com/gowebly/gowebly/graphs/contributors" target="_blank"><img width="160" src="https://contrib.rocks/image?repo=gowebly/gowebly" alt="Gowebly contributors"/></a>