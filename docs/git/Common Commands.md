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

6. 将本地的仓库推送到远程并合并

   ::: code-group

   ```bash [Syntax]
   git push
   ```

   ```bash [Example]
   git push -u origin master
   # 将本地的分支推送到远程仓库
   # `-u`这是一个选项，意味着 `upstream`。使用 `-u` 选项，您可以将本地分支与远程分支关联起来，这样以后在没有指定远程分支的情况下，`Git`将会自动地将本地分支推送到关联的远程分支
   # `origin` 远程仓库的名称
   # `master` 推送到远程仓库的本地分支的名称
   ```

   :::

7. 拉取远程仓库并合并到本地

   ```bash
   git pull
   ```

8. 切换分支

   ::: code-group

   ```bash [Syntax]
   git checkout [branch]
   ```

   ```bash [Example]
   git checkout master
   ```

   :::

9. 查看当前关联的远程仓库

   ```bash
   git remote -v
   ```

10. 查看 `Git` 日志

    ```
    git log
    ```

11. 版本回退

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
