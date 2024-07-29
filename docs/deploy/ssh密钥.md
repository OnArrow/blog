# ssh 密钥

## Generate key

::: code-group

```bash [Right]
ssh-keygen -t rsa -C 'Your Email'
```

```bash [Example]
ssh-keygen -t rsa -C xxx@qq.com
```

:::

一直按`Enter`就可以

## Get Public Key

::: code-group

```bash [Windows]
cat ~/.ssh/id_rsa.pub
```

```bash [Mac & Linux]
cat ~/.ssh/id_rsa.pub
```

:::

## Get Private key

::: code-group

```bash [Windows]
cat ~/.ssh/id_rsa
```

```bash [Mac & Linux]
cat ~/.ssh/id_rsa
```

:::
