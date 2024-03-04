# Common Commands

1. `git init` 初始化本地仓库

   ```bash
   git init
   ```

2. `git clone [Repository URL]` 拷贝远程仓库到本地

   ```bash
   git clone https://github.com/OnArrow/recite_word.git
   ```

3. `git add [File or Directory]` 将指定文件或文件夹添加到暂存区

   ```bash
   git add index.js main.js
   // 将`index.js`，`main.js`文件加入暂存区

   git add src
   // 将`src`文件夹加入暂存区

   git add .
   // 如果是`.`就表示加入全部
   ```

4. `git commit` 提交

   ```
   git commit -m 这是一个新的提交
   ```

5. `git push` 将本地的仓库推送到远程并合并

6. `git pull` 拉取远程仓库并合并到本地

7. `git checkout [branch]` 切换分支

   ```
   git checkout master
   ```

8. `git remote add origin [Repository URL]` 将本地仓库和远程仓库关联

   ```bash
   git remote add origin https://github.com/OnArrow/recite_word.git
   ```

9. 在终端输入`code .`可以快速使用 vscode 打开当前目录
