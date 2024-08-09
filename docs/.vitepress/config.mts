import { defineConfig, UserConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

// Define user configuration.
const userConfig: UserConfig = {
  title: "Gowebly",
  titleTemplate:
    "A next-generation CLI tool for easily build amazing web apps with Go, Templ, htmx, hyperscript or Alpine.js and CSS frameworks ~ Gowebly",
  description:
    "A next-generation CLI tool that makes it easy to create amazing web applications with Go on the backend, using htmx, hyperscript or Alpine.js and the most popular CSS frameworks on the frontend.",
  lastUpdated: true,
  cleanUrls: true,
  mermaid: {
    theme: "neutral",
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
      link: "/",
    },
    ru: {
      label: "Русский",
      lang: "ru",
      link: "/ru/",
      themeConfig: {
        nav: [
          { text: "Главная", link: "/ru/" },
          { text: "Начало работы", link: "/ru/getting-started" },
          { text: "Полное руководство", link: "/ru/complete-user-guide" },
          { text: "Вопросы и ответы", link: "/ru/faq" },
          { text: "Устранение неполадок", link: "/ru/troubleshooting" },
        ],
        sidebar: {
          "/ru/getting-started": [
            {
              text: "Введение",
              collapsed: false,
              items: [
                { text: "Что такое Gowebly CLI?", link: "/ru/getting-started" },
                {
                  text: "Как это работает?",
                  link: "/ru/getting-started/how-does-it-work",
                },
              ],
            },
            {
              text: "Попробуйте прямо сейчас",
              collapsed: false,
              items: [
                {
                  text: "Краткое руководство по запуску",
                  link: "/ru/getting-started/quick-start-guide",
                },
                {
                  text: "Библиотека помощников",
                  link: "/ru/getting-started/helpers-library",
                },
              ],
            },
            {
              text: "Разработка",
              collapsed: false,
              items: [
                {
                  text: "Сборка из исходного кода",
                  link: "/ru/getting-started/build-from-source",
                },
                {
                  text: "Примечания к выпуску",
                  link: "https://github.com/gowebly/gowebly/releases",
                },
                { text: "Наша команда", link: "/ru/getting-started/our-team" },
              ],
            },
            {
              text: "❤️ Мы ценим вашу помощь",
              items: [
                {
                  text: "Поддержать на Boosty",
                  link: "https://boosty.to/koddr/donate",
                },
              ],
            },
          ],
          "/ru/complete-user-guide": [
            {
              text: "Введение",
              collapsed: false,
              items: [
                { text: "Прежде чем начать", link: "/ru/complete-user-guide" },
              ],
            },
            {
              text: "Перед началом работы",
              collapsed: false,
              items: [
                {
                  text: "Установка",
                  link: "/ru/complete-user-guide/installation",
                },
                {
                  text: "Информация о вашей системе",
                  link: "/ru/complete-user-guide/info-about-system",
                },
                {
                  text: "Создание нового проекта",
                  link: "/ru/complete-user-guide/create-new-project",
                },
                {
                  text: "Запуск проекта",
                  link: "/ru/complete-user-guide/run-your-project",
                },
              ],
            },
            {
              text: "❤️ Мы ценим вашу помощь",
              items: [
                {
                  text: "Поддержать на Boosty",
                  link: "https://boosty.to/koddr/donate",
                },
              ],
            },
          ],
        },
      },
    },
    zh_HK: {
      label: "简体中文",
      lang: "zh_HK",
      link: "/zh_HK/",
      themeConfig: {
        nav: [
          { text: "首页", link: "/zh_HK/" },
          { text: "开始", link: "/zh_HK/getting-started" },
          { text: "完整的用户指南", link: "/zh_HK/complete-user-guide" },
          { text: "常见问题", link: "/zh_HK/faq" },
          { text: "故障排除", link: "/zh_HK/troubleshooting" },
        ],
        sidebar: {
          "/zh_HK/getting-started": [
            {
              text: "导言",
              collapsed: false,
              items: [
                {
                  text: "什么是 Gowebly CLI？",
                  link: "/zh_HK/getting-started",
                },
                {
                  text: "它是如何工作的？",
                  link: "/zh_HK/getting-started/how-does-it-work",
                },
              ],
            },
            {
              text: "立即试用",
              collapsed: false,
              items: [
                {
                  text: "快速入门指南",
                  link: "/zh_HK/getting-started/quick-start-guide",
                },
                {
                  text: "帮助者图书馆",
                  link: "/zh_HK/getting-started/helpers-library",
                },
              ],
            },
            {
              text: "发展",
              collapsed: false,
              items: [
                {
                  text: "从源头构建",
                  link: "/zh_HK/getting-started/build-from-source",
                },
                {
                  text: "发布说明",
                  link: "https://github.com/gowebly/gowebly/releases",
                },
                { text: "我们的团队", link: "/zh_HK/getting-started/our-team" },
              ],
            },
            {
              text: "❤️ 感谢您的帮助",
              items: [
                {
                  text: "支持 Boosty",
                  link: "https://boosty.to/koddr/donate",
                },
              ],
            },
          ],
          "/zh_HK/complete-user-guide": [
            {
              text: "导言",
              collapsed: false,
              items: [
                { text: "在我们开始之前", link: "/zh_HK/complete-user-guide" },
              ],
            },
            {
              text: "使用方法",
              collapsed: false,
              items: [
                {
                  text: "安装",
                  link: "/zh_HK/complete-user-guide/installation",
                },
                {
                  text: "系统信息",
                  link: "/zh_HK/complete-user-guide/info-about-system",
                },
                {
                  text: "创建新项目",
                  link: "/zh_HK/complete-user-guide/create-new-project",
                },
                {
                  text: "运行项目",
                  link: "/zh_HK/complete-user-guide/run-your-project",
                },
              ],
            },
            {
              text: "❤️ 感谢您的帮助",
              items: [
                {
                  text: "支持 Boosty",
                  link: "https://boosty.to/koddr/donate",
                },
              ],
            },
          ],
        },
      },
    },
    es: {
      label: "Español",
      lang: "es",
      link: "/es/",
      themeConfig: {
        nav: [
          { text: "Inicio", link: "/es/" },
          { text: "Primeros pasos", link: "/es/getting-started" },
          { text: "Guía completa", link: "/es/complete-user-guide" },
          { text: "FAQ", link: "/es/faq" },
          { text: "Solución de problemas", link: "/es/troubleshooting" },
        ],
        sidebar: {
          "/es/getting-started": [
            {
              text: "Introducción",
              collapsed: false,
              items: [
                {
                  text: "¿Qué es la CLID de Gowebly?",
                  link: "/es/getting-started",
                },
                {
                  text: "¿Cómo funciona?",
                  link: "/es/getting-started/how-does-it-work",
                },
              ],
            },
            {
              text: "Probar ahora",
              collapsed: false,
              items: [
                {
                  text: "Guía de inicio rápido",
                  link: "/es/getting-started/quick-start-guide",
                },
                {
                  text: "Helpers",
                  link: "/es/getting-started/helpers-library",
                },
              ],
            },
            {
              text: "Desarrollo",
              collapsed: false,
              items: [
                {
                  text: "Build desde source",
                  link: "/es/getting-started/build-from-source",
                },
                {
                  text: "Releases",
                  link: "https://github.com/gowebly/gowebly/releases",
                },
                {
                  text: "Nuestro equipo",
                  link: "/es/getting-started/our-team",
                },
              ],
            },
            {
              text: "❤️ Su ayuda es apreciada",
              items: [
                {
                  text: "Soporte en Boosty",
                  link: "https://boosty.to/koddr/donate",
                },
              ],
            },
          ],
          "/es/complete-user-guide": [
            {
              text: "Introducción",
              collapsed: false,
              items: [
                { text: "Antes de comenzar", link: "/es/complete-user-guide" },
              ],
            },
            {
              text: "Cómo usar",
              collapsed: false,
              items: [
                {
                  text: "Instalación",
                  link: "/es/complete-user-guide/installation",
                },
                {
                  text: "Información sobre el sistema",
                  link: "/es/complete-user-guide/info-about-system",
                },
                {
                  text: "Crear un nuevo proyecto",
                  link: "/es/complete-user-guide/create-new-project",
                },
                {
                  text: "Ejecutar un proyecto",
                  link: "/es/complete-user-guide/run-your-project",
                },
              ],
            },
            {
              text: "❤️ Su ayuda es apreciada",
              items: [
                {
                  text: "Soporte en Boosty",
                  link: "https://boosty.to/koddr/donate",
                },
              ],
            },
          ],
        },
      },
    },
  },
  themeConfig: {
    siteTitle: "Gowebly",
    logo: "/gowebly-logo.svg",
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Getting started", link: "/getting-started" },
      { text: "Complete user guide", link: "/complete-user-guide" },
      { text: "FAQ", link: "/faq" },
      { text: "Troubleshooting", link: "/troubleshooting" },
    ],
    sidebar: {
      "/getting-started": [
        {
          text: "Introduction",
          collapsed: false,
          items: [
            { text: "What is Gowebly CLI?", link: "/getting-started" },
            {
              text: "How does it work?",
              link: "/getting-started/how-does-it-work",
            },
          ],
        },
        {
          text: "Try it now",
          collapsed: false,
          items: [
            {
              text: "Quick start guide",
              link: "/getting-started/quick-start-guide",
            },
            {
              text: "Helpers library",
              link: "/getting-started/helpers-library",
            },
          ],
        },
        {
          text: "Development",
          collapsed: false,
          items: [
            {
              text: "Build from the source",
              link: "/getting-started/build-from-source",
            },
            {
              text: "Release notes",
              link: "https://github.com/gowebly/gowebly/releases",
            },
            { text: "Our team", link: "/getting-started/our-team" },
          ],
        },
        {
          text: "❤️ Your help is appreciated",
          items: [
            {
              text: "Support on Boosty",
              link: "https://boosty.to/koddr/donate",
            },
          ],
        },
      ],
      "/complete-user-guide": [
        {
          text: "Introduction",
          collapsed: false,
          items: [{ text: "Before we begin", link: "/complete-user-guide" }],
        },
        {
          text: "Usage",
          collapsed: false,
          items: [
            { text: "Installation", link: "/complete-user-guide/installation" },
            {
              text: "Info about your system",
              link: "/complete-user-guide/info-about-system",
            },
            {
              text: "Create a new project",
              link: "/complete-user-guide/create-new-project",
            },
            {
              text: "Run your project",
              link: "/complete-user-guide/run-your-project",
            },
          ],
        },
        {
          text: "❤️ Your help is appreciated",
          items: [
            {
              text: "Support on Boosty",
              link: "https://boosty.to/koddr/donate",
            },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/gowebly/gowebly" },
      {
        icon: {
          svg: '<svg fill="none" height="106" viewBox="0 0 83 106" width="83" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="55.6778" x2="17.8176" y1="13.724" y2="135.413"><stop offset="0" stop-color="#ef7829"/><stop offset=".0518954" stop-color="#f07529"/><stop offset=".3551" stop-color="#f0672b"/><stop offset=".6673" stop-color="#f15e2c"/><stop offset="1" stop-color="#f15a2c"/></linearGradient><path d="m2.58737 63.0902 17.22253-63.0902h26.3869l-5.3195 19.5585c-.0527.1118-.1054.2236-.158.3353l-14.0098 51.6346h13.0617c-5.4775 14.4733-9.7436 25.8172-12.7984 34.0316-24.12209-.279-30.86364-18.6083-24.96478-40.2904m25.01748 40.3464 31.8117-48.561h-13.4831l11.745-31.126c20.1193 2.2353 29.5996 19.0556 24.0168 39.3965-5.9515 21.8497-30.1263 40.2905-53.6164 40.2905-.158 0-.316 0-.474 0z" fill="url(#a)"/></svg>',
        },
        link: "https://boosty.to/koddr/donate",
        ariaLabel: "Support author on Boosty",
      },
    ],
    footer: {
      message:
        "<a href='https://github.com/gowebly/gowebly' target='_blank'>Gowebly</a> CLI is 100% free and Open Source project under the Apache 2.0 license.<br/>Official logo distributed under the Creative Commons License (CC BY-SA 4.0 International).",
      copyright:
        "Copyright © 2023-present <a href='https://github.com/koddr' target='_blank'>Vic Shóstak</a> and Gowebly contributors.",
    },
    editLink: {
      pattern: "https://github.com/gowebly/docs/edit/main/docs/:path",
    },
  },
};

export default withMermaid(defineConfig(userConfig));
