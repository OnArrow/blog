# 通过--mode 指定环境变量

在执行命令时，可以通过 `--mode` 来指定通过什么环境来执行

```bash
pnpm run dev
// 默认加载 env.development

pnpm run dev --mode production
// 加载 env.production

pnpm run dev --mode staging
// 加载 env.staging

pnpm run build
// 默认加载 env.production
```

### 参考链接

1. https://cn.vitejs.dev/guide/env-and-mode.html#modes
