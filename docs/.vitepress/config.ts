// noinspection TypeScriptValidateTypes

import { defineConfig } from 'vitepress'

import { head, nav, sidebar } from './configs'

// @ts-ignore
export default defineConfig({
  outDir: '../dist',
  base: process.env.APP_BASE_PATH || '/',

  lang: 'zh-CN',
  title: '小江的前端之路',
  description: '小江的成长之路，包含前端常用知识、源码阅读笔记、各种奇淫技巧、日常提效工具等',
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
    nav,
    sidebar:[
      {
        text: "Java",
        items: [
          { text: 'Java基础', link: '/note/Java/java学习笔记' },
        ],
        collapsible: true,
        collapsed: true
      },{
        text: '前端基础',
        items: [
          { text: 'HTML', link: '/note/HTML/index' },
          { text: 'CSS', link: '/note/CSS/CSS基础' },
          { text: 'Javascript', link: '/note/Javascript/00-JavaScript起步' },
          { text: '正则表达式', link: '/note/正则表达式/index' },
        ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'CSS进阶',
        items: [
          { text: 'flex布局', link: '/note/CSS/flex布局' },
          { text: 'Grid布局', link: '/note/CSS/Grid布局' },
          { text: 'less', link: '/note/CSS/less' },
          { text: 'Sass', link: '/note/CSS/Sass' },
        ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'JavaScript进阶',
        items: [
          { text: 'ES6', link: '/note/ES6/01-ES6' },
          { text: 'TypeScript', link: '/note/TypeScript/TypeScript基础' },
        ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'JavaScript异步编程',
        items: [
          { text: 'AJAX', link: '/note/JavaScript异步编程/02-AJAX' },
          { text: 'Promise', link: '/note/JavaScript异步编程/Promise' },
          { text: 'Async Await', link: '/note/JavaScript异步编程/10-Async Await函数详解' },
        ],
        collapsible: true,
        collapsed: true
      },
      {
        text: '面试之路',
        items: [
          { text: '基础', link: '/note/面试之路/基础' },
          { text: '了解', link: '/note/面试之路/了解' },
          { text: 'JavaScript', link: '/note/面试之路/JavaScript' },
          { text: '闭包', link: '/note/面试之路/闭包' },
          { text: 'this', link: '/note/面试之路/this' },
          { text: '深浅拷贝', link: '/note/面试之路/深浅拷贝' },
          { text: 'vue', link: '/note/面试之路/Vue' },
          { text: '项目题', link: '/note/面试之路/项目题' },

        ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'Vue',
        items: [
          { text: 'Vue基础', link: '/note/Vue/01-Vue基础' },
          { text: 'Vue3和2的区别', link: '/note/Vue/Vue2,3区别' },
          { text: 'vue响应式原理', link: '/note/Vue/vue响应式原理' },
          { text: 'vuex', link: '/note/Vue/vue响应式原理' },
          { text: 'VueRouter', link: '/note/Vue/Vue-Router' },
          { text: 'Vue3', link: '/note/Vue/vue3-setup' },
        ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'Node',
        items: [
          { text: 'Node', link: '/note/Node/index' },
          { text: 'MongoDB', link: '/note/Node/MongoDB' },
          { text: '路由router', link: '/note/Node/路由router' },
          { text: '接口-json-server', link: '/note/Node/接口-json-server' },
          { text: '会话控制', link: '/note/Node/会话控制' },
          { text: '记账本开发', link: '/note/Node/记账本开发' },
          { text: 'Express 教程：本地图书馆网站', link: '/note/Node/Express 教程：本地图书馆网站' },
          { text: 'Koa', link: '/note/Node/Koa 开发' },
        ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'React',
        items: [
          { text: '01-React快速入门', link: '/note/React/01-React快速入门' },
          { text: '02-井字游戏', link: '/note/React/02-井字游戏' },
          { text: '03-购物列表', link: '/note/React/03-购物列表' },
        ],
        collapsible: true,
        collapsed: true
      },
      {
        text: '前端书籍笔记',
        items: [
          { text: '你不知道的JavaScript上', link: '/note/技术书籍笔记/01闭包详解' },
          { text: 'JavaScript重难点实例精讲', link: '/note/技术书籍笔记/02JavaScript重难点实例精讲-笔记' },
          { text: '循序渐进Vue.js', link: '/note/技术书籍笔记/03循序渐进Vue.js' },
          { text: '廖雪峰 JavaScript教程', link: '/note/技术书籍笔记/04.廖雪峰 JavaScript教程' },
        ],
        collapsible: true,
        collapsed: true
      },
      {
        text: '其他',
        items: [
          { text: 'Git', link: '/note/其他/Git' },
          { text: 'node部署', link: '/note/其他/node部署' },
          { text: 'echarts', link: '/note/其他/echarts' },
          { text: 'vuepress', link: '/note/其他/vuepress' },
          { text: '控制台调试工具', link: '/note/其他/控制台调试工具' },
          { text: 'StackOverFlow使用', link: '/note/其他/StackOverFlow' },
        ],
        collapsible: true,
        collapsed: true
      },
      {
        text: '数据结构和算法',
        items: [
          { text: '数据结构和算法', link: '/note/数据结构与算法/01' },
        ],
        collapsible: true,
        collapsed: true
      },
      {
        text: '项目',
        items: [
          { text: '循序渐进vue', link: '/note/项目/循序渐进vue.js' },
          { text: '小兔先', link: '/note/项目/小兔先' },
          { text: 'ChatGPT', link: '/note/项目/ChatGPT' },
          { text: '后台管理系统vite', link: '/note/项目/后台管理系统vite' },
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
