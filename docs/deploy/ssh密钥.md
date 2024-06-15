# ssh 密钥

## Generate key

::: code-group

```bash [right]
ssh-keygen -t rsa -C 'Your Email'
```

```bash [Example]
ssh-keygen -t rsa -C xxx@qq.com
```

一直按`Enter`就可以

## Get Public Key

### Windows

```bash
cat ~/.ssh/id_rsa.pub
```

### Mac

```bash
cat ~/.ssh/id_rsa.pub
```

## Get Private key

### Windows

```bash
cat ~/.ssh/id_rsa
```

### Mac

```bash
cat ~/.ssh/id_rsa
```
