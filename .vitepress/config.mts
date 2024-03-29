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
      },
      {
        text: 'Git',
        items: [
          {
            text: 'Common Commands',
            link: '/docs/git/Common Commands'
          }
        ]
      },
      {
        text: 'Work',
        items: [
          {
            text: '如何将一个通过 gzip 压缩得来的 base64 字符串反向解析',
            link: '/docs/work/解析base64'
          }
        ]
      },
      {
        text: 'Vue',
        items: [
          {
            text: '项目部署在二级域名下',
            link: '/docs/vue/项目部署在二级域名下'
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
