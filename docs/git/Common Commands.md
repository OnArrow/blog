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
   // 将`index.js`，`main.js`文件加入暂存区

   git add src
   // 将`src`文件夹加入暂存区

   git add .
   // 如果是`.`就表示加入全部
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
   // 将本地的分支推送到远程仓库
   // `-u`这是一个选项，意味着 `upstream`。使用 `-u` 选项，您可以将本地分支与远程分支关联起来，这样以后在没有指定远程分支的情况下，`Git`将会自动地将本地分支推送到关联的远程分支
   // `origin` 远程仓库的名称
   // `master` 推送到远程仓库的本地分支的名称
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

11. 在终端输入`code .`可以快速使用 `vscode` 打开当前目录
