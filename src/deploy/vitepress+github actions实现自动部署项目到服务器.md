# vitepress + github actions 实现自动部署项目到服务器

## Flow Chat：

```mermaid
graph TB
    A(使用git推送代码到github仓库) --> B[github监听到指定分支代码发生变化]
    --> C[执行actions工作流] -->|install node,install pnpm,install dependencies, run build...| D[github把项目build后的文件推送到指定服务器的目标目录]
```

## Steps

1. 在 github 上创建一个 repository，然后把本地代码 push 进去

2. 在 repository 的 Setting -> Actions -> General -> Actions Permissions 设置权限

   ![actions permission](./images/actions-permission.png)

3. 在 repository 的 Secrets and variables -> Actions 设置变量。主要有`ssh连接自己服务器的私钥`、`自己服务器的ip`。其它有需要的也可以在此定义

   ![secrets](./images/secrets.png)
   ![alt text](./images/remote-host.png)

4. 将你自己电脑的`ssh公钥`交给你自己服务器，到时候 github 才能去把文件推到你自己服务器上面

5. 在项目的根目录上创建`.github/workflows/deploy.yml`文件，内容为以下

   ```yml
   # uses表示使用一些第三方库

   # actions的名称
   name: 更新文档到服务器

   on:
   push:
       # push 代码的时候，监听该分支的改变
       branches:
       - master

   # 推送之后执行一系列的任务
   jobs:
   build:
       runs-on: ubuntu-latest
       steps:
       # 获取代码
       - name: 迁出代码
           # 使用action库 action/checkout获取代码
           uses: actions/checkout@master
       # 安装Node环境
       - name: 安装node.js
           # 使用action库  actions/setup-node安装node
           uses: actions/setup-node@master
           with:
           node-version: lts/*
       # 安装pnpm
       - name: 安装pnpm
           uses: pnpm/action-setup@v2
           with:
           version: 8

       # 安装项目依赖
       - name: 安装依赖
           run: pnpm install

       # 项目打包
       - name: 打包
           run: pnpm run docs:build
       # 将打包后的文件上传到服务器
       - name: 发布到服务器
           # https://github.com/easingthemes/ssh-deploy
           uses: easingthemes/ssh-deploy@main
           with:
           # 私钥
           SSH_PRIVATE_KEY: ${{ secrets.MAC_PRIVATE_KEY }}
           # SCP参数
           ARGS: '-avzr --delete'
           # 服务器ip
           REMOTE_HOST: ${{ secrets.REMOTE_HOST_120 }}
           # 用户
           REMOTE_USER: 'root'
           # 源目录
           SOURCE: '.vitepress/dist/'
           # 目标地址
           TARGET: '/var/www/html/english'
           SCRIPT_BEFORE: 'ls'
   ```
