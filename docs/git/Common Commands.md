# Common Commands

1. 初始化本地仓库

   ```bash
   git init
   ```

2. 拷贝远程仓库到本地

   ::: code-group

   ```bash [Syntax]
   git clone [Repository URL]
   ```

   ```bash [Example]
   git clone https://github.com/OnArrow/recite_word.git
   ```

   :::

3. 将本地仓库和远程仓库关联

   ::: code-group

   ```bash [Syntax]
   git remote add origin [Repository URL]
   ```

   ```bash [Example]
   git remote add origin https://github.com/xxx/xxx.git
   ```

   :::

4. 将指定文件或文件夹添加到暂存区

   ::: code-group

   ```bash [Syntax]
   git add [File or Directory]
   ```

   ```bash [Example]
   git add index.js main.js
   # 将`index.js`，`main.js`文件加入暂存区

   git add src
   # 将`src`文件夹加入暂存区

   git add .
   # 如果是`.`就表示加入全部
   ```

   :::

5. 提交

   ::: code-group

   ```bash [Syntax]
   git commit -m [Mark]
   ```

   ```bash [Example]
   git commit -m '这是一个新的提交'
   ```

   :::

6. 提交代码区分大小写

   ```bash
   git config core.ignorecase false
   ```

   - 改完之后，发现 gitlab 或者 github 上仍然存在一份副本，是更改之前的，需要手动删除。是 git 的缓存导致的，如下命令手动删除：

     ```
     git rm --cached src/components/Header -r
     ```

7. 如果注释不小心写错了

   ```bash
   git commit --amend
   # 此时会进入默认vim编辑器，修改注释完毕后 :wq 保存退出
   ```

8. 将本地的仓库推送到远程并合并

   ::: code-group

   ```bash [Syntax]
   git push
   ```

   ```bash [Example]
   git push -u origin master
   # `git push --set-upstream origin master` 的简写
   # 将本地的分支推送到远程仓库
   # `-u` 这是一个选项，意味着 `--set-upstream`。使用 `-u` 选项，您可以将本地分支与远程分支关联起来，这样以后在没有指定远程分支的情况下，`Git`将会自动地将本地分支推送到关联的远程分支
   # `origin` 远程仓库的名称
   # `master` 推送到远程仓库的本地分支的名称
   ```

   :::

9. 拉取远程仓库并合并到本地

   ```bash
   git pull
   ```

10. 切换分支

    ::: code-group

    ```bash [Syntax]
    git checkout [branch]
    ```

    ```bash [Example]
    git checkout master
    ```

    :::

11. 查看当前关联的远程仓库

    ```bash
    git remote -v
    ```

12. 查看 `Git` 日志

    ```
    git log
    ```

13. 版本回退

    1. 确认回退到哪一个 `commit`

       ```
       git log
       ```

    2. 回退

       ```
       git reset --hard [commitId]
       ```

    3. 强制推送到远程仓库

       ```
       git push -f
       ```

## Global Info

2. 设置全局信息

   ```bash
   git config --global user.name "Your username"

   git config --global user.email "Your email"
   ```

3. 查看全局信息

   ```bash
   git config user.name

   git config user.email
   ```

## SSH Key

### Generate key

::: code-group

```bash [Right]
ssh-keygen -t rsa -C 'Your Email'
```

```bash [Example]
ssh-keygen -t rsa -C xxx@qq.com
```

:::

一直按`Enter`就可以

### Get Public Key

::: code-group

```bash [Windows]
cat ~/.ssh/id_rsa.pub
```

```bash [Mac & Linux]
cat ~/.ssh/id_rsa.pub
```

:::

### Get Private key

::: code-group

```bash [Windows]
cat ~/.ssh/id_rsa
```

```bash [Mac & Linux]
cat ~/.ssh/id_rsa
```

:::

## Branch

1. 创建一个分支并切换到此新分支

   ::: code-group

   ```bash [Syntax]
   git checkout -b [branch]
   ```

   ```bash [Example]
   git checkout -b dev
   // 创建一个 `dev` 分支
   ```

   :::

2. 将新分支推送到远程仓库

   ::: code-group

   ```bash [Syntax]
   git push [远程仓库名称] [branch]
   ```

   ```bash [Example]
   git push origin dev
   // 将 `dev` 分支推送到 `origin` 这个远程仓库
   ```

   :::

3. 删除本地分支并同步远程仓库

   ::: code-group

   ```bash [Syntax]
   git branch -d [branch]
   git push [远程仓库名称] :[branch]
   ```

   ```bash [Example]
   git branch -d dev
   git push origin :dev
   ```

   :::

## Merge

1. 合并分支

   1. 切换到 A 分支，合并 B 分支的代码到 A 分支

      ```
      git checkout A

      git merge B
      ```

## Tag

1. 创建一个 `tag`

   ::: code-group

   ```bash [Syntax]
   git tag -a [tag名称] -m [注释]
   ```

   ```bash [Example]
   git tag -a v1.0 -m '第一个版本'
   ```

   :::

2. 将 `tag` 推送到远程仓库

   ::: code-group

   ```bash [Syntax]
   git push [远程仓库名称] [tag名称]
   ```

   ```bash [Example]
   git push origin v1.0
   ```

   :::

3. 查看当前存在的 `tag`

   ```
   git tag
   ```

4. 查看某个 `tag` 的详细信息

   ::: code-group

   ```bash [Syntax]
   git show [tag的名称]
   ```

   ```bash [Example]
   git show v1.0
   ```

   :::

## Situation

### 仓库迁移

- 例如，把 `azure` 中的仓库 A 迁移到 `gitlab` 的 B 仓库

1.  在 `gitlab` 上创建新仓库 B

2.  将 A 项目克隆下来

    ::: code-group

    ```bash [Syntax]
    git clone --mirror [A仓库地址]
    ```

    ```bash [Example]
    git clone --mirror git@ssh.dev.azure.com:v3/xxx/xxxx
    ```

    :::

3.  进入到克隆下来项目 A，终端执行

    ::: code-group

    ```bash [Syntax]
    git remote set-url origin [B仓库地址]
    // 关联到新仓库
    ```

    ```bash [Example]
    git remote set-url origin ssh://git@gitlab.byw.com:5022/xxx/xxx
    ```

    :::

4.  关联到新仓库后推送

    ```
    git push --mirror
    ```

### 本来想在 B 分支修改代码，但是不小心在 A 分支修改了，但没有提交

```
# 1. A分支下 暂存改动（不提交）
git stash

# 2. 切换到B分支
git checkout B

# 3. B分支下 恢复改动
git stash pop
```
