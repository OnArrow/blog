import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog',
  title: "Jack's Blog",
  description: 'Just record',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/docs/index' },
      { text: 'About me', link: '/docs/other/About' }
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
      },
      {
        text: 'Nginx',
        items: [
          {
            text: 'Common Commands',
            link: '/docs/nginx/Common Commands'
          }
        ]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/OnArrow/blog' }],
    search: {
      provider: 'local'
    }
  }
})
