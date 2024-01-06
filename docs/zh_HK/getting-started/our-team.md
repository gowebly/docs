---
editLink: false
lastUpdated: false
prev:
  text: 'Build from the source'
  link: '/zh_HK/getting-started/build-from-source'
next:
  text: 'Complete user guide'
  link: '/zh_HK/complete-user-guide'
---

# Our team

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
  }
]
</script>

Say hello to our awesome team.

<VPTeamMembers size="small" :members="members" />

## Contributors

Our amazing team is growing, but we are always looking for new contributors!

<a href="https://github.com/gowebly/gowebly/graphs/contributors" target="_blank"><img width="160" src="https://contrib.rocks/image?repo=gowebly/gowebly" alt="Gowebly contributors"/></a>