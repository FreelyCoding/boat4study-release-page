// .vitepress/config.js
import { defineConfig } from 'vitepress';

export default {
  // site-level options
  title: '学舟',
  description: 'Boat for Study',

  themeConfig: {
    socialLinks: [{ icon: "github", link: "https://github.com/FreelyCoding" }],
    nav: [
      { text: '功能介绍', link: '/guide/what-is-boat4study', activeMatch: '/guide/what-is-boat4study' },
      {
        text: '版本迭代介绍',
        items: [
          { text: 'Alpha版本迭代', link: '/release-note/alpha' },
          { text: 'Beta版本迭代', link: '/release-note/beta' },
          { text: 'Release Candidate版本迭代', link: '/release-note/pre-release' },
        ]
      }
    ],
    footer: {
      copyright: 'Copyright © 2023 无编无计组'
    },
    sidebar: {
      '/guide/': [
        {
          text: '介绍',
          items: [
            { text: '什么是学舟', link: '/guide/what-is-boat4study' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '配置', link: '/guide/configuration' },
            { text: '发布', link: '/guide/deploying' }
          ],
          collapsible: true
        }
      ],
      '/release-note/': [
        {
          text: '发布说明',
          items: [
            { text: 'Alpha版本迭代', link: '/release-note/alpha' },
            { text: 'Beta版本迭代', link: '/release-note/beta' },
            { text: 'Release Candidate版本迭代', link: '/release-note/pre-release' },
          ],
          collapsible: true
        }
      ]
    }
  }
}
