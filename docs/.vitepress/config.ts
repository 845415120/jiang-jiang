// noinspection TypeScriptValidateTypes

import { defineConfig } from 'vitepress'

import { head, nav, sidebar } from './configs'

// @ts-ignore
// @ts-ignore
// @ts-ignore
export default defineConfig({
  outDir: '../dist',
  base: process.env.APP_BASE_PATH || '/',

  lang: 'zh-CN',
  title: '小江的前端之路',
  description: '小江的成长之路，包含前端导航、常用知识、源码阅读笔记、各种奇淫技巧、日常提效工具等',
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,
    logo: '/logo.png',
    nav:[
      {
        text: "Java",
        items: [
          { text: 'Java基础', link: '/note/Java/java学习笔记' },
          { text: '接口', link: '/note/Java/java学习笔记' },
          { text: '继承', link: '/note/Java/继承' },
        ],
    }],
    sidebar:[
      {
        text: "Java",
        items: [
          { text: 'Java基础', link: '/note/Java/java学习笔记' },
          { text: '接口', link: '/note/Java/java学习笔记' },
          { text: '继承', link: '/note/Java/继承' },
        ],
        collapsible: true,
        collapsed: true
      },
      {
        "text": '前端基础',
        items: [
          { text: 'HTML', link: '/note/HTML/index' },
          { text: 'CSS', link: '/note/CSS/CSS基础' },
          { text: 'Javascript', link: '/note/Javascript/00-JavaScript起步' },
          { text: '正则表达式', link: '/note/正则表达式/index' },
        ],
        collapsible: true,
        collapsed: true
      },
    ],
    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '本页目录'
    },


    socialLinks: [{ icon: 'github', link: 'https://github.com/maomao1996/vitepress-nav-template' }],

    footer: {
      message: '',
      copyright: ''
    },

    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
})
