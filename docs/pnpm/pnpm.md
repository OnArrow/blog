# pnpm

1. 查看当前源

   ```bash
   pnpm config get registry
   ```

2. 切换源

   ```bash
   pnpm config set registry https://registry.npmjs.org
   // 官方源。默认

   pnpm config set registry https://registry.npmmirror.com
   // 淘宝源
   ```


## 报错

### `pnpm全局安装报错：Run “pnpm setup“ to create it automatically, or set the global-bin-dir setting, or the PN`

### 错误截图

- [pnpm setup](./images/err.png)

### 解决方法

1. 在D盘下新建一个文件夹 `pnpm_packs`

2. 将此文件夹的路径设置到环境变量中

   - [env](./images/env.png)

### Reference

- [setup](./images/setup.png)
