# 服务器配置 ssh 免密登录

> 作者：冰冻大西瓜 原文链接： [服务器配置关闭 ssh 密码登录](https://bddxg.top/article/expansion/%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%96%B9%E5%90%91/%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%85%8D%E7%BD%AE%E5%85%B3%E9%97%ADssh%E5%AF%86%E7%A0%81%E7%99%BB%E5%BD%95.html)

::: tip
私钥和公钥是一对，只有匹配上了才能连接成功

以下服务器以 Ubuntu 22.04.3 LTS 为例
:::

## 将自己电脑的公钥交给自己的服务器

OpenSSH 规定，用户公钥保存在服务器的 `~/.ssh/authorized_keys` 文件。每个公钥占据一行。如果该文件不存在，可以手动创建。如果想在多台电脑上进行免密登录，那就把这些电脑上的公钥都添加进 `~/.ssh/authorized_keys` 文件

### 方法一

1. 执行以下命令

```bash
cat ~/.ssh/id_rsa.pub | ssh user@host "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

上面示例中，`user`替换成服务器的用户名，如`root`，`host`替换成服务器的 ip，如`120.xx.xxx.xx`

2. `authorized_keys`文件的权限要设置为`664`，表示只有文件所有者才能写入。如果权限设置得不对，SSH 服务器可能会拒绝读取该文件。因此在服务器上执行以下命令设置权限

```bash
chmod 644 ~/.ssh/authorized_keys
```

### 方法二

OpenSSH 自带一个 `ssh-copy-id` 命令，可以自动将公钥拷贝到远程服务器的 `~/.ssh/authorized_keys` 文件。如果 `~/.ssh/authorized_keys` 文件不存在，`ssh-copy-id` 命令会自动创建该文件。

1. 执行以下命令

```bash
ssh-copy-id -i id_rsa user@host
```

上面示例中，`user` 替换成服务器的用户名，如 `root`，`host` 替换成服务器的 ip，如 `120.xx.xxx.xx`

::: details 可能会遇到以下报错：无法将“ssh-copy-id”项识别为 cmdlet、函数、脚本文件或可运行程序的名称...
在终端执行以下内容

```bash
function ssh-copy-id([string]$userAtMachine, $args){
    $publicKey = "$ENV:USERPROFILE" + "/.ssh/id_rsa.pub"
    if (!(Test-Path "$publicKey")){
        Write-Error "ERROR: failed to open ID file '$publicKey': No such file"
    }
    else {
        & cat "$publicKey" | ssh $args $userAtMachine "umask 077; test -d .ssh || mkdir .ssh ; cat >> .ssh/authorized_keys || exit 1"
    }
}
```

再次执行 `ssh-copy-id -i id_rsa user@host` 即可
:::

## 修改服务器上的 ssh 配置

1. 找到 `/etc/ssh/sshd_config` 文件后修改里面的内容

   - 使用 `vim` 编辑文件

     ```bash
     sudo vim /etc/ssh/sshd_config
     ```

   - 在 `sshd_config` 中追加以下选项

     ```
     PubkeyAuthentication yes // 是否允许ssh登陆。必须
     PasswordAuthentication no // 是否允许使用密码登陆服务器。根据情况添加
     ```

2. 重启 `ssh` 服务

```bash
sudo service ssh restart
```

## End

以上配置成功后，就可以在自己通过终端执行以下命令连接服务器

```bash
ssh user@host
```
