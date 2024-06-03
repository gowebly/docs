---
editLink: false
lastUpdated: false
prev:
  text: 'Build from the source'
  link: '/es/getting-started/build-from-source'
next:
  text: 'Complete user guide'
  link: '/es/complete-user-guide'
---

# Nuestro equipo

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/koddr.png',
    name: 'Vic Shóstak',
    title: 'Desarrollador & Mantenimiento',
    links: [
      { icon: 'github', link: 'https://github.com/koddr' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/koddr' }
    ]
  }
]
</script>

Dile hola a nuestro increíble equipo.

<VPTeamMembers size="small" :members="members" />

## Contribuidores

¡Nuestro increíble equipo está creciendo, pero siempre estamos buscando nuevos contribuidores!

<a href="https://github.com/gowebly/gowebly/graphs/contributors" target="_blank"><img width="160" src="https://contrib.rocks/image?repo=gowebly/gowebly" alt="Gowebly contributors"/></a>