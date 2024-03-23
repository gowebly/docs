import { defineConfig, UserConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// Define user configuration.
const userConfig: UserConfig = {
  title: 'Gowebly',
  titleTemplate: 'A next-generation CLI tool for easily build amazing web apps with Go, Templ, htmx, hyperscript or Alpine.js and CSS frameworks ~ Gowebly',
  description: 'A next-generation CLI tool that makes it easy to create amazing web applications with Go on the backend, using htmx, hyperscript or Alpine.js and the most popular CSS frameworks on the frontend.',
  lastUpdated: true,
  cleanUrls: true,
  mermaid: {
    theme: 'neutral'
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/'
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      link: '/ru/',
      themeConfig: {
        nav: [
          { text: 'Главная', link: '/ru/' },
          { text: 'Начало работы', link: '/ru/getting-started' },
          { text: 'Полное руководство', link: '/ru/complete-user-guide' },
          { text: 'Вопросы и ответы', link: '/ru/faq' },
          { text: 'Устранение неполадок', link: '/ru/troubleshooting' }
        ],
        sidebar: {
          '/ru/getting-started': [
            {
              text: 'Введение',
              collapsed: false,
              items: [
                { text: 'Что такое Gowebly CLI?', link: '/ru/getting-started' },
                { text: 'Как это работает?', link: '/ru/getting-started/how-does-it-work' },
              ]
            },
            {
              text: 'Попробуйте прямо сейчас',
              collapsed: false,
              items: [
                { text: 'Краткое руководство по запуску', link: '/ru/getting-started/quick-start-guide' },
                { text: 'Библиотека помощников', link: '/ru/getting-started/helpers-library' }
              ]
            },
            {
              text: 'Разработка',
              collapsed: false,
              items: [
                { text: 'Сборка из исходного кода', link: '/ru/getting-started/build-from-source' },
                { text: 'Примечания к выпуску', link: 'https://github.com/gowebly/gowebly/releases' },
                { text: 'Наша команда', link: '/ru/getting-started/our-team' }
              ]
            }
          ],
          '/ru/complete-user-guide': [
            {
              text: 'Введение',
              collapsed: false,
              items: [
                { text: 'Прежде чем начать', link: '/ru/complete-user-guide' }
              ]
            },
            {
              text: 'Перед началом работы',
              collapsed: false,
              items: [
                { text: 'Установка', link: '/ru/complete-user-guide/installation' },
                { text: 'Информация о вашей системе', link: '/ru/complete-user-guide/info-about-system' },
                { text: 'Создание нового проекта', link: '/ru/complete-user-guide/create-new-project' },
                { text: 'Запуск проекта', link: '/ru/complete-user-guide/run-your-project' },
              ]
            }
          ]
        }
      }
    },
    zh_HK: {
      label: '简体中文',
      lang: 'zh_HK',
      link: '/zh_HK/',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh_HK/' },
          { text: '开始', link: '/zh_HK/getting-started' },
          { text: '完整的用户指南', link: '/zh_HK/complete-user-guide' },
          { text: '常见问题', link: '/zh_HK/faq' },
          { text: '故障排除', link: '/zh_HK/troubleshooting' }
        ],
        sidebar: {
          '/zh_HK/getting-started': [
            {
              text: '导言',
              collapsed: false,
              items: [
                { text: '什么是 Gowebly CLI？', link: '/zh_HK/getting-started' },
                { text: '它是如何工作的？', link: '/zh_HK/getting-started/how-does-it-work' },
              ]
            },
            {
              text: '立即试用',
              collapsed: false,
              items: [
                { text: '快速入门指南', link: '/zh_HK/getting-started/quick-start-guide' },
                { text: '帮助者图书馆', link: '/zh_HK/getting-started/helpers-library' }
              ]
            },
            {
              text: '发展',
              collapsed: false,
              items: [
                { text: '从源头构建', link: '/zh_HK/getting-started/build-from-source' },
                { text: '发布说明', link: 'https://github.com/gowebly/gowebly/releases' },
                { text: '我们的团队', link: '/zh_HK/getting-started/our-team' }
              ]
            }
          ],
          '/zh_HK/complete-user-guide': [
            {
              text: '导言',
              collapsed: false,
              items: [
                { text: '在我们开始之前', link: '/zh_HK/complete-user-guide' }
              ]
            },
            {
              text: '使用方法',
              collapsed: false,
              items: [
                { text: '安装', link: '/zh_HK/complete-user-guide/installation' },
                { text: '系统信息', link: '/zh_HK/complete-user-guide/info-about-system' },
                { text: '创建新项目', link: '/zh_HK/complete-user-guide/create-new-project' },
                { text: '运行项目', link: '/zh_HK/complete-user-guide/run-your-project' },
              ]
            }
          ]
        },
      }
    },
    es: {
      label: 'Español',
      lang: 'es',
      link: '/es/',
      themeConfig: {
        nav: [
          { text: 'Inicio', link: '/es/' },
          { text: 'Para empezar', link: '/es/getting-started' },
          { text: 'Guía completa del usuario', link: '/es/complete-user-guide' },
          { text: 'FAQ', link: '/es/faq' },
          { text: 'Solución de problemas', link: '/es/troubleshooting' }
        ],
        sidebar: {
          '/es/getting-started': [
            {
              text: 'Introducción',
              collapsed: false,
              items: [
                { text: '¿Qué es Gowebly CLI?', link: '/es/getting-started' },
                { text: '¿Cómo funciona?', link: '/es/getting-started/how-does-it-work' },
              ]
            },
            {
              text: 'Pruébese ahora',
              collapsed: false,
              items: [
                { text: 'Guía de inicio rápido', link: '/es/getting-started/quick-start-guide' },
                { text: 'Biblioteca de ayudantes', link: '/es/getting-started/helpers-library' }
              ]
            },
            {
              text: 'Desarrollo',
              collapsed: false,
              items: [
                { text: 'Construir desde la fuente', link: '/es/getting-started/build-from-source' },
                { text: 'Notas de publicación', link: 'https://github.com/gowebly/gowebly/releases' },
                { text: 'Nuestro equipo', link: '/es/getting-started/our-team' }
              ]
            }
          ],
          '/es/complete-user-guide': [
            {
              text: 'Introducción',
              collapsed: false,
              items: [
                { text: 'Antes de empezar', link: '/es/complete-user-guide' }
              ]
            },
            {
              text: 'Utilización',
              collapsed: false,
              items: [
                { text: 'Instalación', link: '/es/complete-user-guide/installation' },
                { text: 'Información sobre su sistema', link: '/es/complete-user-guide/info-about-system' },
                { text: 'Crear un nuevo proyecto', link: '/es/complete-user-guide/create-new-project' },
                { text: 'Ejecute su proyecto', link: '/es/complete-user-guide/run-your-project' },
              ]
            }
          ]
        }
      }
    }
  },
  themeConfig: {
    siteTitle: 'Gowebly',
    logo: '/gowebly-logo.svg',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting started', link: '/getting-started' },
      { text: 'Complete user guide', link: '/complete-user-guide' },
      { text: 'FAQ', link: '/faq' },
      { text: 'Troubleshooting', link: '/troubleshooting' }
    ],
    sidebar: {
      '/getting-started': [
        {
          text: 'Introduction',
          collapsed: false,
          items: [
            { text: 'What is Gowebly CLI?', link: '/getting-started' },
            { text: 'How does it work?', link: '/getting-started/how-does-it-work' },
          ]
        },
        {
          text: 'Try it now',
          collapsed: false,
          items: [
            { text: 'Quick start guide', link: '/getting-started/quick-start-guide' },
            { text: 'Helpers library', link: '/getting-started/helpers-library' }
          ]
        },
        {
          text: 'Development',
          collapsed: false,
          items: [
            { text: 'Build from the source', link: '/getting-started/build-from-source' },
            { text: 'Release notes', link: 'https://github.com/gowebly/gowebly/releases' },
            { text: 'Our team', link: '/getting-started/our-team' }
          ]
        }
      ],
      '/complete-user-guide': [
        {
          text: 'Introduction',
          collapsed: false,
          items: [
            { text: 'Before we begin', link: '/complete-user-guide' }
          ]
        },
        {
          text: 'Usage',
          collapsed: false,
          items: [
            { text: 'Installation', link: '/complete-user-guide/installation' },
            { text: 'Info about your system', link: '/complete-user-guide/info-about-system' },
            { text: 'Create a new project', link: '/complete-user-guide/create-new-project' },
            { text: 'Run your project', link: '/complete-user-guide/run-your-project' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/gowebly/gowebly' }
    ],
    footer: {
      message: "<a href='https://github.com/gowebly/gowebly' target='_blank'>Gowebly</a> CLI is 100% free and Open Source project under the Apache 2.0 license.<br/>Official logo distributed under the Creative Commons License (CC BY-SA 4.0 International).",
      copyright: "Copyright © 2023-present <a href='https://github.com/koddr' target='_blank'>Vic Shóstak</a> and Gowebly contributors.",
    },
    editLink: {
      pattern: 'https://github.com/gowebly/docs/edit/main/docs/:path'
    },
  }
}

export default withMermaid(defineConfig(userConfig))
