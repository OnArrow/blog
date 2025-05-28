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
        text: 'plugins',
        items: [
          {
            text: 'rimraf',
            link: '/docs/plugins/rimraf'
          }
        ]
      },
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
        text: 'pm2',
        items: [
          {
            text: 'pm2',
            link: '/docs/pm2/pm2'
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
      },
      {
        text: 'pnpm',
        items: [
          {
            text: 'pnpm',
            link: '/docs/pnpm/pnpm'
          }
        ]
      },
      {
        text: 'Vite',
        items: [
          {
            text: '通过--mode指定环境变量',
            link: '/docs/vite/通过--mode指定环境变量'
          }
        ]
      },
      {
        text: 'SSH',
        items: [
          {
            text: '报错',
            link: '/docs/ssh/常见报错情况'
          },
          {
            text: '默认端口不为22的情况',
            link: '/docs/ssh/默认端口不为22的情况'
          },
          {
            text: '通过ssh连接虚拟机',
            link: '/docs/ssh/通过ssh连接虚拟机'
          }
        ]
      },
      {
        text: 'Ubuntu',
        items: [
          {
            text: '常见命令',
            link: '/docs/ubuntu/常见命令'
          }
        ]
      },
      {
        text: 'VMware',
        items: [
          {
            text: '配置桥接模式',
            link: '/docs/vmware/配置桥接模式'
          }
        ]
      },
      {
        text: 'VSCode',
        items: [
          {
            text: '开发插件',
            link: '/docs/vscode/开发插件'
          }
        ]
      },
      {
        text: 'Network',
        items: [
          {
            text: '手动设置本机的IP',
            link: '/docs/network/手动设置本机的IP'
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
