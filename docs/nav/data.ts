import type { NavLink } from './components/type'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '社区',
    items: [
      {
        title: 'Github',
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>'
        },
        desc: '一个面向开源及私有软件项目的托管平台',
        link: 'https://github.com'
      },
      {
        icon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a',
        title: 'Stack Overflow',
        desc: '全球最大的技术问答网站',
        link: 'https://stackoverflow.com'
      },
      {
        title: '稀土掘金',
        icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png',
        desc: '面向全球中文开发者的技术内容分享与交流平台',
        link: 'https://juejin.cn'
      },
      {
        title: 'V2EX',
        icon: 'https://www.v2ex.com/static/icon-192.png',
        desc: '一个关于分享和探索的地方',
        link: 'https://www.v2ex.com'
      },
      {
        title: 'SegmentFault 思否',
        icon: 'https://static.segmentfault.com/main_site_next/0dc4bace/touch-icon.png',
        desc: '技术问答开发者社区',
        link: 'https://segmentfault.com'
      },
      {
        title: '博客园',
        // icon: 'https://common.cnblogs.com/favicon.ico',
        icon: '/icons/cnblogs.svg',
        desc: '博客园是一个面向开发者的知识分享社区',
        link: 'https://www.cnblogs.com'
      },
      {
        title: 'Flutter 中文文档',
        // icon: '/icons/02.ico',
        desc: 'Flutter 中文文档是关于 Google 的 UI 工具包 Flutter 的中文翻译版本',
        link: 'https://book.flutterchina.club/#%E7%AC%AC%E4%BA%8C%E7%89%88%E5%8F%98%E5%8C%96'
      },{
        title: 'MadeWith - 创意作品展示平台',
        // icon: '/icons/02.ico',
        desc: 'MadeWith 是一个展示创意作品和项目的平台，让创作者分享他们的工作和灵感',
        link: 'https://madewith.cn/'
      },{
        title: 'Mint UI 文档',
        // icon: '/icons/02.ico',
        desc: 'Mint UI 是一个基于 Vue.js 的移动端 UI 组件库，提供了中文文档',
        link: 'https://mint-ui.github.io/#!/zh-cn'
      },{
        title: 'Exercism - JavaScript Lasagna',
        icon: '/icons/24.svg',
        desc: 'Exercism 是一个学习编程的平台，JavaScript Lasagna 是其中的一个 JavaScript 习题',
        link: 'https://exercism.org/tracks/javascript/exercises/lasagna'
      },{
        title: 'CodeWars',
        icon: '/icons/25.svg',
        desc: 'CodeWars 是一个在线的编程挑战平台，让开发者通过解决问题提升编程技能',
        link: 'https://www.codewars.com/'
      },{
        title: 'Egghead',
        icon: '/icons/26.svg',
        desc: 'Egghead 是一个在线学习平台，提供高质量的编程和开发教程',
        link: 'https://egghead.io/'
      },{
        title: 'Yati Wang 聊天室',
        icon: '/icons/27.png',
        desc: 'Yati Wang 聊天室是一个在线聊天应用程序，用于与他人实时交流',
        link: 'https://yatiwang.chat/'
      }
    ]
  },
  {
    title: '前端学习',
    items: [
      {
        icon: 'https://developer.mozilla.org/apple-touch-icon.6803c6f0.png',
        title: 'MDN | Web 开发者指南',
        desc: 'Mozilla 的开发者平台，提供了大量关于 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API 参考资',
        link: 'https://developer.mozilla.org/zh-CN'
      },
      {
        icon: 'https://static.runoob.com/images/favicon.ico',
        title: '菜鸟教程',
        desc: '学的不仅是技术，更是梦想！',
        link: 'https://www.runoob.com'
      },
      {
        icon: '/icons/es6.svg',
        title: 'ES6 入门教程',
        desc: '阮一峰的网络日志',
        link: 'http://es6.ruanyifeng.com'
      },
      {
        icon: '/icons/baiu.ico',
        title: '百度前端技术学园',
        desc: '前端产品大全',
        link: 'http://ife.baidu.com/encyclopedia/readme1.html'
      },
      {
        title: 'TypeScript 中文文档',
        icon: '/icons/ts.jpg',
        desc: 'TypeScript 是一种由微软开发的开源编程语言，用于构建大型的Web应用程序的中文文档',
        link: 'https://typescript.bootcss.com/index.html'
      },
      {
        title: '慕课网',
        icon: '/icons/01.ico',
        desc: '中文互联网高质量的问答社区和创作者聚集的原创内容平台',
        link: 'https://www.imooc.com/'
      },    {
        title: '力扣',
        icon: '/icons/02.ico',
        desc: '中文互联网高质量的问答社区和创作者聚集的原创内容平台',
        link: 'https://www.imooc.com/'
      },
      {
        title: "freeCodeCamp",
        icon: "/icons/03.png",
        desc: "一个免费的学习编程和Web开发的平台，提供高质量的教育内容和项目",
        link: "https://www.freecodecamp.org/learn"
      },

      {
        title: '极客时间',
        icon: '/icons/07.jpeg',
        desc: '极客时间是一家专注于IT领域的在线教育平台，提供高质量的技术课程和教育资源',
        link: 'https://time.geekbang.org/'
      },
      {
        title: '现代 JavaScript 教程',
        icon: '/icons/12.png',
        desc: 'JavaScript.info 中文版是一个关于 JavaScript 语言的教程和参考资源的中文翻译',
        link: 'https://zh.javascript.info/'
      },
      {
        title: '30 Seconds of Code',
        icon: '/icons/30s-logo.png',
        desc: '30 Seconds of Code 是一个提供有用的、精简的代码片段的网站，用于提高开发效率',
        link: 'https://www.30secondsofcode.org/'
      },{
        title: '可视化算法和数据结构',
        // icon: '/icons/02.ico',
        desc: 'Visualgo 是一个可视化算法和数据结构教育工具，帮助学习者理解不同的算法和数据结构的工作原理',
        link: 'https://visualgo.net/zh'
      },{
        title: 'Best of JavaScript',
        // icon: '/icons/02.ico',
        desc: 'Best of JavaScript 是一个展示和评价 JavaScript 开源项目的网站，帮助开发者找到最好的 JavaScript 工具和库',
        link: 'https://bestofjs.org/'
      },{
        title: 'Component Party',
        // icon: '/icons/02.ico',
        desc: '是一个组件库的资源网站，用于查找和比较各种前端组件和库',
        link: 'https://component-party.dev/#update-state'
      }
    ]
  },
  {
    title: 'Vue 生态',
    items: [
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue 3',
        desc: '渐进式 JavaScript 框架',
        link: 'https://cn.vuejs.org'
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue 2',
        desc: '渐进式 JavaScript 框架',
        link: 'https://v2.cn.vuejs.org'
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue Router',
        desc: 'Vue.js 的官方路由\n为 Vue.js 提供富有表现力、可配置的、方便的路由',
        link: 'https://router.vuejs.org/zh'
      },
      {
        title: 'Vuex',
        icon: 'https://cn.vuejs.org/logo.svg',
        desc: 'Vue.js 应用程序状态管理的官方库',
        link: 'https://vuex.vuejs.org/zh/index.html'
      },
      {
        icon: 'https://pinia.vuejs.org/logo.svg',
        title: 'Pinia',
        desc: '符合直觉的 Vue.js 状态管理库',
        link: 'https://pinia.vuejs.org/zh'
      },
      {
        icon: 'https://nuxt.com/icon.png',
        title: 'Nuxt.js',
        desc: '一个基于 Vue.js 的通用应用框架',
        link: 'https://nuxt.com'
      },
      {
        icon: 'https://vueuse.org/favicon.svg',
        title: 'VueUse',
        desc: 'Vue Composition API 的常用工具集',
        link: 'https://vueuse.org'
      },
      {
        icon: 'https://element-plus.org/images/element-plus-logo-small.svg',
        title: 'Element Plus',
        desc: '基于 Vue 3，面向设计师和开发者的组件库',
        link: 'https://element-plus.org'
      },
      {
        icon: 'https://www.antdv.com/assets/logo.1ef800a8.svg',
        title: 'Ant Design Vue',
        desc: 'Ant Design 的 Vue 实现，开发和服务于企业级后台产品',
        link: 'https://antdv.com'
      },
      {
        icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
        title: 'Vant',
        desc: '轻量、可定制的移动端 Vue 组件库',
        link: 'https://vant-ui.github.io/vant'
      },
      {
        icon: 'https://webapp.didistatic.com/static/webapp/shield/Cube-UI_logo.ico',
        title: 'Cube UI',
        desc: '基于 Vue.js 实现的精致移动端组件库',
        link: 'https://didi.github.io/cube-ui'
      },
      {
        icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png',
        title: 'NutUI',
        desc: '京东风格的轻量级移动端组件库',
        link: 'https://nutui.jd.com'
      }, {
        title: 'Arco Vue 字节',
        icon: '/icons/11.ico',
        desc: 'Arco Vue 是一套面向企业级应用的 Vue 3 组件库，提供了丰富的组件和文档 - 入门部分',
        link: 'https://arco.design/vue/docs/start'
      },
      {
        title: 'Layui Vue ',
        icon:'/icons/08.ico',
        desc: 'Layui Vue 是一个基于 Layui 的 Vue.js 组件库，提供了丰富的UI组件和功能扩展的文档 - 按钮组件',
        link: 'http://www.layui-vue.com/zh-CN/components/button'
      },
      {
        title: 'VeeValidate ',
        icon: '/icons/19.ico',
        desc: 'VeeValidate 是一个用于表单验证的 Vue.js 插件，提供了官方文档',
        link: 'https://vee-validate.logaretm.com/v4/'
      },
      {
        title: 'Nodemailer 官方网站',
        icon: '/icons/20.png',
        desc: 'Nodemailer 是一个 Node.js 的邮件发送库，用于发送电子邮件的官方网站',
        link: 'https://nodemailer.com/about/'
      },
      {
        title: 'JWT.io - JSON Web Tokens 介绍',
        icon: '/icons/21.svg',
        desc: 'JWT.io 是一个关于 JSON Web Tokens（JWT）的介绍和调试工具的官方网站',
        link: 'https://jwt.io/introduction'
      },{
        title: 'koa-jwt - npm 包',
        icon: '/icons/21.svg',
        desc: 'koa-jwt 是一个用于 Koa 框架的 JSON Web Tokens（JWT）中间件，用于认证和授权的 npm 包页面',
        link: 'https://www.npmjs.com/package/koa-jwt'
      },{
        title: 'Radix Vue',
        icon: '/icons/23.svg',
        desc: 'Radix Vue 是一个构建高质量、可访问性强的 Vue 组件的库，提供了官方网站',
        link: 'https://www.radix-vue.com/'
      }
    ]
  },
  {
    title: 'React 生态',
    items: [
      {
        icon: 'https://zh-hans.reactjs.org/favicon.ico',
        title: 'React',
        desc: '用于构建用户界面的 JavaScript 库',
        link: 'https://zh-hans.reactjs.org'
      },
      {
        icon: 'https://reactrouter.com/favicon-light.png',
        title: 'React Router',
        desc: 'React 的声明式路由',
        link: 'https://reactrouter.com'
      },
      {
        icon: 'https://nextjs.org/static/favicon/safari-pinned-tab.svg',
        title: 'Next.js',
        desc: '一个用于 Web 的 React 框架',
        link: 'https://nextjs.org'
      },
      {
        icon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
        title: 'UmiJS',
        desc: '插件化的企业级前端应用框架',
        link: 'https://umijs.org'
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
        title: 'Ant Design',
        desc: '一套企业级 UI 设计语言和 React 组件库',
        link: 'https://ant.design'
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg',
        title: 'Ant Design Mobile',
        desc: '构建移动 WEB 应用程序的 React 组件库',
        link: 'https://mobile.ant.design'
      },
      {
        icon: 'https://docs.pmnd.rs/apple-touch-icon.png',
        title: 'Zustand',
        desc: '一个小型、快速、可扩展的 React 状态管理解决方案',
        link: 'https://docs.pmnd.rs/zustand/getting-started/introduction'
      },
      {
        icon: 'https://valtio.pmnd.rs/favicon.ico',
        title: 'Valtio',
        desc: 'makes proxy-state simple for React and Vanilla',
        link: 'https://valtio.pmnd.rs'
      },
      {
        icon: 'https://jotai.org/favicon.svg',
        title: 'Jotai',
        desc: 'primitive and flexible state management for React',
        link: 'https://jotai.org'
      },
      {
        icon: 'https://cn.redux.js.org/img/redux.svg',
        title: 'Redux',
        desc: 'JavaScript 应用的状态容器，提供可预测的状态管理',
        link: 'https://cn.redux.js.org'
      },
      {
        icon: 'https://zh.mobx.js.org/assets/mobx.png',
        title: 'MobX',
        desc: '一个小型、快速、可扩展的 React 状态管理解决方案',
        link: 'https://zh.mobx.js.org'
      },
      {
        icon: 'https://ahooks.js.org/simple-logo.svg',
        title: 'ahooks',
        desc: '一套高质量可靠的 React Hooks 库',
        link: 'https://ahooks.js.org/zh-CN'
      },{
        title: 'React 登录页面组件',
        icon: '/icons/22.png',
        desc: 'React 登录页面组件是一个用于构建登录页面的 React 组件库，提供了官方文档',
        link: 'https://uiwjs.github.io/react-login-page/'
      }
    ]
  },
  {
    title: 'JavaScript 框架类库',
    items: [
      {
        icon: 'https://svelte.dev/svelte-logo-horizontal.svg',
        title: 'Svelte',
        desc: '将声明性组件转换为精准高效更新 DOM 的 JavaScript 代码',
        link: 'https://svelte.dev'
      },
      {
        // icon: 'https://simpleicons.org/icons/jquery.svg',
        icon: '/icons/jquery.svg',
        title: 'jQuery API 中文文档',
        desc: '一个兼容多浏览器的 JavaScript 框架',
        link: 'https://jquery.cuishifeng.cn'
      },
      {
        title: 'Layui ',
        icon: '/icons/08.ico',
        desc: 'Layui 是一个简单易用的前端UI框架，提供了丰富的UI组件和工具，用于快速构建现代化的Web界面',
        link: 'https://layui.itze.cn/doc/index.html'
      },
      {
        title: 'Moment.js ',
        icon: '/icons/09.png',
        desc: 'Moment.js 是一个处理日期和时间的 JavaScript 库，用于解析、格式化和操作日期时间数据的中文文档',
        link: 'https://moment.nodejs.cn/'
      },
      {
        title: 'Bootstrap 5 ',
        icon: '/icons/10.ico',
        desc: 'Bootstrap 5 是一个流行的前端框架，用于构建响应式、移动优先的网站和Web应用程序的文档',
        link: 'https://v5.bootcss.com/'
      },
      {
        title: 'Axios ',
        //icon: '/icons/02.ico',
        desc: 'Axios 是一个基于 Promise 的 HTTP 客户端，用于浏览器和 Node.js 的中文文档',
        link: 'https://www.axios-http.cn/'
      },
      {
        title: 'Mock.js',
        // icon: '/icons/02.ico',
        desc: 'Mock.js 是一个用于生成随机数据和模拟 HTTP 请求响应的 JavaScript 库的官方网站',
        link: 'http://mockjs.com/'
      }

    ]
  },
  {
    title: '常用工具',
    items: [
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: 'Can I use',
        desc: '前端 API 兼容性查询',
        link: 'https://caniuse.com'
      },
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: 'TinyPNG',
        desc: '在线图片压缩工具',
        link: 'https://tinypng.com'
      },
      {
        icon: 'https://devtool.tech/logo.svg',
        title: '开发者武器库',
        desc: '开发者武器库，做开发者最专业最好用的专业工具箱',
        link: 'https://devtool.tech'
      },
      {
        icon: 'https://tool.lu/favicon.ico',
        title: '在线工具',
        desc: '开发人员的工具箱',
        link: 'https://tool.lu'
      },
      {
        icon: '/icons/json-cn.ico',
        title: 'Json 中文网',
        desc: 'JSON 在线解析及格式化验证',
        link: 'https://www.json.cn'
      },
      {
        icon: '/icons/icon.png',
        title: 'PicX图床',
        desc: 'GitHub.图床',
        link: 'https://picx.xpoet.cn/#/upload'
      },
      {
        title: 'Prettier',
        icon: '/icons/13.png',
        desc: 'Prettier 是一个 JavaScript 代码格式化工具，用于统一和美化代码风格的官方网站',
        link: 'https://prettier.io/'
      },{
        title: 'ESLint ',
        icon: '/icons/14.ico',
        desc: 'ESLint 是一个 JavaScript 代码质量工具，用于检查和修复代码中的问题的官方网站',
        link: 'https://eslint.org/'
      },{
        title: 'Postman',
        icon: '/icons/16.jpg',
        desc: 'Postman 是一个流行的API测试和开发工具，用于简化API开发和测试的官方网站',
        link: 'https://www.postman.com/'
      },{
        title: 'Telerik Fiddler',
        // icon: '/icons/02.ico',
        desc: '是一个用于调试和监控网络流量的工具，帮助开发者分析和优化应用程序的官方网站',
        link: 'https://www.telerik.com/fiddler'
      },{
        title: 'NeteaseCloudMusicApi 文档',
        // icon: '/icons/02.ico',
        desc: '是一个用于访问网易云音乐数据的 API 接口文档',
        link: 'https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=neteasecloudmusicapi'
      },{
        title: '徽章',
        // icon: '/icons/02.ico',
        desc: 'Shields.io 是一个提供各种徽章（Badges）的服务，用于美化和展示项目的状态和信息',
        link: 'https://shields.io/badges/static-badge'
      },{
        title: 'Git 游戏',
        // icon: '/icons/02.ico',
        desc: '是一个用于学习 Git 分支和版本控制的互动教程，支持中文（简体）',
        link: 'https://learngitbranching.js.org/?locale=zh_CN'
      },{
        title: 'CSS3 动画',
        // icon: '/icons/02.ico',
        desc: '包含各种 CSS3 动画代码片段的资源集合页面',
        link: 'https://www.webhek.com/post/css3-animation-sniplet-collection/#/'
      },{
        title: 'Better-Scroll 文档',
        // icon: '/icons/02.ico',
        desc: 'Better-Scroll 是一个用于实现流畅滚动效果的插件',
        link: 'https://better-scroll.github.io/docs/zh-CN/'
      },{
        title: 'ApiFox',
        icon: '/icons/17.png',
        desc: 'ApiFox 是一个用于管理和测试 API 的在线工具和平台，用于构建和维护 API 项目',
        link: 'https://app.apifox.com/project'
      },{
        title: 'YApi 文档',
        icon: '/icons/18.png',
        desc: 'YApi 是一个高效、易用的 API 管理工具，提供了官方文档',
        link: 'https://hellosean1025.github.io/yapi/'
      }




    ]
  },
  {
    title: 'CSS 相关',
    items: [
      {
        icon: 'https://postcss.org/assets/logo-3e39b0aa.svg',
        title: 'PostCSS',
        desc: '一个用 JavaScript 转换 CSS 的工具',
        link: 'https://postcss.org'
      },
      {
        icon: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
        title: 'Sass',
        desc: '一个成熟，稳定，功能强大的专业级 CSS 扩展语言',
        link: 'https://sass-lang.com'
      },
      {
        icon: 'https://www.tailwindcss.cn/apple-touch-icon.png',
        title: 'TailwindCSS 中文网',
        desc: '一个功能类优先的 CSS 框架',
        link: 'https://www.tailwindcss.cn'
      }
    ]
  },
  {
    title: '小程序相关',
    items: [
      {
        icon: 'https://res.wx.qq.com/a/wx_fed/assets/res/OTE0YTAw.png',
        title: '微信小程序文档',
        desc: '微信小程序官方开发者文档',
        link: 'https://developers.weixin.qq.com/miniprogram/dev/framework/'
      },
      {
        icon: '/icons/taro.svg',
        title: 'Taro',
        desc: '多端统一开发解决方案',
        link: 'https://taro.jd.com'
      },
      {
        icon: 'https://web-assets.dcloud.net.cn/unidoc/zh/icon.png',
        title: 'uni-app',
        desc: '一个使用 Vue.js 开发所有前端应用的框架',
        link: 'https://uniapp.dcloud.net.cn'
      },
      {
        icon: 'https://mpxjs.cn/favicon.ico',
        title: 'Mpx',
        desc: '增强型跨端小程序框架',
        link: 'https://mpxjs.cn'
      }
    ]
  },
  {
    title: 'Node 相关',
    items: [
      {
        icon: '/icons/nodejs.svg',
        title: 'Node.js',
        desc: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境',
        link: 'https://nodejs.cn/'
      },
      {
        icon: 'https://expressjs.com/images/favicon.png',
        title: 'Express',
        desc: '基于 Node.js 平台，快速、开放、极简的 Web 开发框架',
        link: 'http://expressjs.com/zh-cn/starter/generator.html#express-%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E7%94%9F%E6%88%90%E5%99%A8'
      },
      {
        icon: '/icons/koa.svg',
        title: 'Koa',
        desc: '基于 Node.js 平台的下一代 web 开发框架',
        link: 'https://koajs.com'
      },
      {
        icon: 'https://www.eggjs.org/favicon.png',
        title: 'Egg',
        desc: '为企业级框架和应用而生',
        link: 'https://www.eggjs.org/zh-CN'
      },
      {
        icon: 'https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg',
        title: 'Nest.js 中文文档',
        desc: '用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架',
        link: 'https://docs.nestjs.cn'
      },{
        title: 'npm',
        icon: '/icons/npm.ico',
        desc: 'Node 包管理器（npm）是 JavaScript 世界中最大的软件注册表，开发者可以通过 npm 安装、分享和分发代码包',
        link: 'https://www.npmjs.com/'
      },{
        title: 'Electron ',
        icon: '/icons/05.ico',
        desc: 'Electron 是一个用于构建跨平台桌面应用程序的开源框架的文档',
        link: 'https://www.electronjs.org/docs/latest/'
      },{
        title: 'Mongoose 文档',
        icon: '/icons/06.png',
        desc: 'Mongoose 是 Node.js 的 MongoDB 驱动程序，用于建模和操作 MongoDB 数据的文档',
        link: 'https://mongoosejs.com/docs/guide.html'
      },{
        title: 'Robo 3T（原 Robomongo）',
        icon: '/icons/06.ico',
        desc: 'Robo 3T（原 Robomongo）是一个 MongoDB 数据库管理工具，用于可视化管理 MongoDB 数据库的客户端',
        link: 'https://robomongo.org/'
      }
    ]
  },
  {
    title: '可视化',
    items: [
      {
        icon: 'https://echarts.apache.org/zh/images/favicon.png',
        title: 'ECharts',
        desc: '一个基于 JavaScript 的开源可视化图表库',
        link: 'https://echarts.apache.org/zh/index.html'
      },
      {
        icon: 'https://antv.vision/icons/icon-72x72.png',
        title: 'AntV',
        desc: '蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
        link: 'https://antv.vision/zh/'
      },
      {
        icon: 'https://d3js.org/favicon.png',
        title: 'D3.js',
        desc: '一个遵循 Web 标准用于可视化数据的 JavaScript 库',
        link: 'https://d3js.org'
      },
      {
        icon: 'https://www.chartjs.org/favicon.ico',
        title: 'Chart.js',
        desc: '一个简单而灵活的 JavaScript 图表库',
        link: 'https://www.chartjs.org'
      },
      {
        icon: 'https://threejs.org/files/favicon.ico',
        // icon: 'https://threejs.org/files/favicon_white.ico',
        title: 'Three.js',
        desc: 'JavaScript 3d 库',
        link: 'https://threejs.org'
      }
    ]
  },
  {
    title: '编译&构建&打包',
    items: [
      {
        icon: 'https://www.webpackjs.com/icon_180x180.png',
        title: 'Webpack 中文网',
        desc: '一个用于现代 JavaScript 应用程序的静态模块打包工具',
        link: 'https://www.webpackjs.com'
      },
      {
        icon: 'https://cn.vitejs.dev/logo.svg',
        title: 'Vite 中文文档',
        desc: '下一代前端工具链',
        link: 'https://cn.vitejs.dev'
      },
      {
        icon: 'https://www.rollupjs.com/img/favicon.png',
        title: 'Rollup',
        desc: 'Rollup 是一个 JavaScript 模块打包器',
        link: 'https://www.rollupjs.com'
      },
      {
        icon: 'https://turbo.build/images/favicon-dark/apple-touch-icon.png',
        title: 'Turbo',
        desc: 'Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust',
        link: 'https://turbo.build'
      },
      {
        icon: 'https://www.babeljs.cn/img/favicon.png',
        title: 'Babel',
        desc: 'Babel 是一个 JavaScript 编译器',
        link: 'https://www.babeljs.cn'
      },
      {
        icon: 'https://esbuild.github.io/favicon.svg',
        title: 'esbuild',
        desc: 'An extremely fast bundler for the web',
        link: 'https://esbuild.github.io'
      },
      {
        icon: 'https://swc.rs/favicon/apple-touch-icon.png',
        title: 'SWC',
        desc: 'Rust-based platform for the Web',
        link: 'https://swc.rs'
      }
    ]
  },
  {
    title: '站点生成器',
    items: [
      {
        icon: 'https://astro.build/favicon.svg',
        title: 'Astro',
        desc: '一个现代化的轻量级静态站点生成器',
        link: 'https://astro.build'
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'VitePress',
        desc: '由 Vite 和 Vue 驱动的静态网站生成器',
        link: 'https://vitepress.dev'
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'VuePress',
        desc: 'Vue 驱动的静态网站生成器',
        link: 'https://vuepress.vuejs.org/zh'
      },
      {
        title: 'Vercel ',
        icon: '/icons/15.png',
        desc: ' Vercel 提供的云托管服务',
        link: 'https://vercel.com/dashboard'
      },
      {
        title: 'Render ',
        // icon: '/icons/02.ico',
        desc: 'Render Dashboard 是 Render 提供的云托管服务',
        link: 'https://dashboard.render.com/login'
      },
      {
        title: 'GitHub Pages',
        // icon: '/icons/02.ico',
        desc: 'GitHub Pages 是 GitHub 提供的免费静态网站托管服务的官方网站',
        link: 'https://pages.github.com/'
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
        title: 'dumi',
        desc: '基于 Umi 为组件研发而生的静态站点框架',
        link: 'https://d.umijs.org'
      },
      {
        icon: 'https://docusaurus.io/zh-CN/img/docusaurus.ico',
        title: 'Docusaurus',
        desc: '基于 React 的静态网站生成器',
        link: 'https://docusaurus.io/zh-CN'
      },
    ]
  },
  {
    title: '图标库',
    items: [
      {
        icon: 'https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg',
        title: 'iconfont',
        desc: '国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能',
        link: 'https://www.iconfont.cn'
      },
      {
        icon: 'https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg',
        title: 'IconPark 图标库',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://iconpark.oceanengine.com/official'
      },
      {
        icon: 'https://emoji.muan.co/appicon.png',
        title: 'Emoji searcher',
        desc: 'Emoji 表情大全',
        link: ''
      },
      {
        title: 'Figma 广告设计',
        // icon: '/icons/02.ico',
        desc: 'Figma 广告设计是一个用于创建广告设计的工具和资源页面，支持 Figma 广告设计计划',
        link: 'https://ad.js.design/special/figma/?source=google|3&plan=figma&gclid=Cj0KCQjwy9-kBhCHARIsAHpBjHiEABSTIyLxUEH75Lr_OnS7t7-Ick_llgyK5BXgNVoi7qlcdq0txncaAnEuEALw_wcB'
      }
    ]
  },
  {
    title: 'AI 导航',
    items: [
      {
        icon: '/icons/chatgpt.png',
        title: 'ChatGPT（最强）',
        link: 'https://chat.openai.com/chat'
      },
      {
        icon: 'https://www.notion.so/images/logo-ios.png',
        title: 'Notion AI（笔记）',
        link: 'https://www.notion.so'
      },
      {
        icon: 'https://www.midjourney.com/apple-touch-icon.png',
        title: 'Midjourney（绘画）',
        link: 'https://www.midjourney.com'
      },
      {
        icon: 'https://global-uploads.webflow.com/59deb588800ae30001ec19c9/5d4891e0e260e3c1bc37b100_beautiful%20ai%20favicon%20%20blue%20square.png',
        title: 'Beautiful.ai（PPT）',
        link: 'https://www.beautiful.ai'
      },

    ]
  },
  {
    title: '茂茂的站点导航',
    items: [
      {
        icon: '/logo.png',
        title: '前端日常笔记',
        desc: '日常笔记记录（零零散散啥都记系列）',
        link: 'https://github.com/maomao1996/daily-notes'
      },
      {
        icon: '/logo.png',
        title: '前端思维导图',
        desc: '用思维导图的方式总结个人所学知识',
        link: 'https://mindmap.fe-mm.com'
      },
      {
        icon: 'https://qwerty.fe-mm.com/apple-touch-icon.png',
        title: 'Qwerty Learner',
        desc: '为键盘工作者设计的单词记忆与英语肌肉记忆锻炼软件',
        link: 'https://qwerty.fe-mm.com'
      },

    ]
  },




]
