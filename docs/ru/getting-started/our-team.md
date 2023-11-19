---
editLink: false
lastUpdated: false
next:
  text: 'Полное руководство пользователя'
  link: '/ru/complete-user-guide'
---

# Наша команда

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

Поприветствуйте нашу замечательную команду.

<VPTeamMembers size="small" :members="members" />

## Контрибьюторы

Наша замечательная команда постоянно растет, но мы всегда ищем новых участников!

<a href="https://github.com/gowebly/gowebly/graphs/contributors" target="_blank"><img width="160" src="https://contrib.rocks/image?repo=gowebly/gowebly" alt="Gowebly contributors"/></a>