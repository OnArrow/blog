import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Jack's Blog",
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Deploy',
        items: [
          {
            text: 'ssh密钥',
            link: '/docs/deploy/ssh密钥'
          },
          {
            text: '服务器配置ssh免密登录',
            link: '/docs/deploy/服务器配置ssh免密登录'
          },
          {
            text: 'vitepress+github actions实现自动部署项目到服务器',
            link: '/docs/deploy/vitepress+github actions实现自动部署项目到服务器'
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
