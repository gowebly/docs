import { defineConfig, UserConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// Define user configuration.
const userConfig: UserConfig = {
  title: 'Gowebly',
  titleTemplate: 'A next-generation CLI tool for easily build amazing web apps with Go, htmx & hyperscript ~ Gowebly',
  description: 'A next-generation CLI tool for easily build amazing web applications with Go on the backend, using htmx & hyperscript and the most popular atomic/utility-first CSS frameworks on the frontend.',
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
                { text: 'Конфигурация', link: '/ru/complete-user-guide/configuration' },
                { text: 'Создание нового проекта', link: '/ru/complete-user-guide/create-new-project' },
                { text: 'Запуск проекта', link: '/ru/complete-user-guide/run-your-project' },
                { text: 'Сборка проекта', link: '/ru/complete-user-guide/build-project' }
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
                { text: '配置', link: '/zh_HK/complete-user-guide/configuration' },
                { text: '创建新项目', link: '/zh_HK/complete-user-guide/create-new-project' },
                { text: '运行项目', link: '/zh_HK/complete-user-guide/run-your-project' },
                { text: '建设项目', link: '/zh_HK/complete-user-guide/build-project' }
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
                { text: 'Configuración', link: '/es/complete-user-guide/configuration' },
                { text: 'Crear un nuevo proyecto', link: '/es/complete-user-guide/create-new-project' },
                { text: 'Ejecute su proyecto', link: '/es/complete-user-guide/run-your-project' },
                { text: 'Construir proyecto', link: '/es/complete-user-guide/build-project' }
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
            { text: 'Configuration', link: '/complete-user-guide/configuration' },
            { text: 'Create a new project', link: '/complete-user-guide/create-new-project' },
            { text: 'Run your project', link: '/complete-user-guide/run-your-project' },
            { text: 'Build project', link: '/complete-user-guide/build-project' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/gowebly/gowebly' },
      {
        icon: {
          svg: '<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m30.679 13.367c-.613-.404-1.366-.645-2.175-.645-.093 0-.185.003-.276.009l.012-.001c-.446.001-.882.041-1.306.115l.046-.007c-.235-1.357-1.025-2.495-2.122-3.191l-.019-.011-.429-.248-.282.408c-.336.512-.599 1.108-.756 1.745l-.008.039c-.089.324-.14.696-.14 1.08 0 .831.24 1.605.654 2.258l-.01-.017c-.637.299-1.381.488-2.164.524h-.013-19.729c-.516.001-.934.418-.936.933-.001.056-.001.123-.001.19 0 1.751.317 3.428.897 4.977l-.032-.098c.558 1.633 1.612 2.975 2.98 3.881l.028.017c1.744.903 3.808 1.432 5.995 1.432.207 0 .412-.005.617-.014l-.029.001h.06c1.272 0 2.515-.121 3.72-.352l-.123.02c1.795-.336 3.395-.939 4.845-1.773l-.074.039c1.257-.735 2.331-1.621 3.245-2.652l.012-.014c1.325-1.56 2.403-3.381 3.145-5.365l.041-.125h.276c.055.002.119.004.183.004 1.226 0 2.34-.481 3.163-1.265l-.002.002c.377-.358.676-.793.873-1.281l.009-.024.122-.359zm-26.889 1.482h2.646c.127-.001.23-.104.23-.231v-2.355-.001c0-.127-.103-.23-.23-.231h-2.646c-.127.001-.23.104-.23.231v2.356.001c0 .127.103.23.23.23h.001zm3.644 0h2.644c.127 0 .231-.103.231-.231v-2.355-.001c0-.127-.103-.23-.23-.231h-2.646c-.128 0-.232.104-.232.232v2.355c.001.128.104.231.232.231zm3.698 0h2.646c.127-.001.23-.104.23-.231v-2.355-.001c0-.127-.103-.23-.23-.231h-2.646c-.127.001-.23.104-.23.231v2.356c0 .127.103.231.231.231zm3.656 0h2.643c.128 0 .231-.103.232-.231v-2.355c0-.128-.104-.232-.232-.232h-2.643c-.127 0-.231.103-.231.231v2.356.001c0 .127.103.23.23.23zm-7.354-3.388h2.644c.128-.001.231-.104.231-.232v-2.355c0-.127-.103-.231-.231-.231h-2.644c-.128 0-.231.103-.232.231v2.355c.001.128.104.231.232.232zm3.698 0h2.646c.127-.001.23-.105.23-.232v-2.355c0-.127-.103-.231-.231-.231h-2.643c-.127 0-.231.103-.231.231v2.355c.001.128.103.231.231.232zm3.656 0h2.643c.128-.001.231-.104.232-.232v-2.355c-.001-.128-.104-.231-.232-.231h-2.643c-.127 0-.231.103-.231.231v2.355c0 .128.103.231.231.232zm0-3.388h2.643c.128 0 .232-.104.232-.232v-2.356c-.001-.128-.104-.231-.232-.231h-2.643c-.127 0-.231.103-.231.231v2.356.001c0 .127.103.23.23.23h.001zm3.687 6.776h2.644c.128 0 .231-.103.232-.231v-2.355c0-.128-.104-.232-.232-.232h-2.644c-.128 0-.231.103-.231.231v2.356c0 .127.103.231.231.231z"/></svg>'
        },
        link: 'https://hub.docker.com/repository/docker/gowebly/gowebly',
        ariaLabel: 'docker hub'
      }
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
