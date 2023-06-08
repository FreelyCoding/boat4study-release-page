// .vitepress/config.js
import { defineConfig } from 'vitepress';

export default {
  // site-level options
  title: '学舟',
  description: 'Boat for Study',
  
  head: [
    [
      "script",
      { src: '/Valine.min.js'},
    ],
  ],

  themeConfig: {
    socialLinks: [{ icon: "github", link: "https://github.com/FreelyCoding" }],
    nav: [
      { text: 'Bug反馈与讨论', link: '/report/report', activeMatch: '/report/report' },
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
            { text: '快速上手', link: '/guide/getting-started' },
            { text: '题库&做题', link: '/guide/problem_relate_intro' },
            { text: '学习小组', link: '/guide/group_relate_intro' },
            { text: '笔记', link: '/guide/note_relate_intro' },
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
