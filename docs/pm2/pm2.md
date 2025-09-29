# pm2

## 查看当前正在运行的项目

```
pm2 ls
```

## 执行 node 项目中的 `package.json` 中的脚本

1. package.json 内容如下

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "node ./src/index.js"
}
```

2. 通过 pm2 来执行这个 `dev` 脚本命令。并将启动的应用命名为 `my-app`

```
pm2 start npm --name "my-app" -- run dev
```

## 停止某个 node 应用

1. 停止 `my-app` 这个应用

```
pm2 stop my-app
```

## 重启某个 node 应用

1. 重启 `my-app` 这个应用

```
pm2 restart my-app
```

## 删除某个 node 应用

1. 删除 `my-app` 这个应用

```
pm2 stop my-app
// 必须先停止应用

pm2 delete my-app
```

## 重命名某个 node 应用

1. 将 `my-app` 重命名为 `my-node-app`

```
pm2 stop my-app

pm2 start my-app --name my-node-app
```

## 设置服务器重启后，自动启动项目

1. 执行一下命令

```
pm2 startup

pm2 save
// 保存当前运行的进程列表
```

2. 重启服务器后查看当前运行的项目

```
pm2 ls
```
