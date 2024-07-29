# vitepress + github actions 实现自动部署项目到服务器

## Flow Chat：

<iframe id="embed_dom" name="embed_dom" frameborder="0" style="display:block;width:489px; height:500px;" src="https://www.processon.com/embed/65bc90ca364738708d335d8e"></iframe>

## Steps

1. 在 `github` 上创建一个 `repository`，然后把本地代码 `push` 进去

2. 在 `repository` 的 **Setting -> Actions -> General -> Actions Permissions** 设置权限

   ![actions permission](./images/actions-permission.png)

3. 在 `repository` 的 **Secrets and variables -> Actions** 设置变量。主要有 `ssh连接自己服务器的私钥`、`自己服务器的ip`。其它有需要的也可以在此定义

   ![secrets](./images/secrets.png)
   ![alt text](./images/remote-host.png)

4. 将你自己电脑的 `ssh公钥` 交给你自己服务器，到时候 `github` 才能去把文件推到你自己服务器上面

   ::: tip 简单描述
   总而言之，公钥给服务器，私钥给 github
   :::

5. 在项目的根目录上创建 `.github/workflows/deploy.yml` 文件，内容为以下

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
           # 服务器IP
           REMOTE_HOST: ${{ secrets.REMOTE_HOST_120 }}
           # 用户
           REMOTE_USER: 'root'
           # 源目录
           SOURCE: '.vitepress/dist/'
           # 目标地址
           TARGET: '/var/www/html/english'
           SCRIPT_BEFORE: 'ls'
   ```

## Mistakes

1. copy 私钥时，一定要把开头和结尾也 copy 进去，那也算私钥的一部分

::: code-group

```bash [Right]
    -----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAABlwAAAAdzc2gtcn
NhAAAAAwEAAQAAAYEAsgVratuF64o6SCarBpJDj2IOlhU/QN6ECQ0fXpQ0cN/mlMTZuagQ
W0B08iyVxvO91DRbfrwd27BDGYhWxNCtamzIg6UbIYnrk/3L3zi5gLQl5mPc2CQirYcI4L
4kar6lSJ6mU4zv...
-----END OPENSSH PRIVATE KEY-----
```

```bash [Wrong]

b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAABlwAAAAdzc2gtcn
NhAAAAAwEAAQAAAYEAsgVratuF64o6SCarBpJDj2IOlhU/QN6ECQ0fXpQ0cN/mlMTZuagQ
W0B08iyVxvO91DRbfrwd27BDGYhWxNCtamzIg6UbIYnrk/3L3zi5gLQl5mPc2CQirYcI4L
4kar6lSJ6mU4zv...

```

:::

2. `deploy.yml` 文件中的 `uses` 字段表示使用的是第三方包名，不要进行改动。如以下包

   - https://github.com/easingthemes/ssh-deploy

   - https://github.com/actions/setup-node

   - https://github.com/actions/checkout
