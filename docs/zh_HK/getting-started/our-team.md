---
editLink: false
lastUpdated: false
next:
  text: 'Complete user guide'
  link: '/zh_HK/complete-user-guide'
---

# 我们的团队

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

向我们出色的团队问好。

<VPTeamMembers size="small" :members="members" />

## 贡献者

我们的团队正在不断壮大，但我们一直在寻找新的贡献者！

<a href="https://github.com/gowebly/gowebly/graphs/contributors" target="_blank"><img width="160" src="https://contrib.rocks/image?repo=gowebly/gowebly" alt="Gowebly contributors"/></a>