# Git


**目标：** 能够使用 git 管理项目，并且能够将代码上传到Github

[首先【Git的基础】 | 猴子都能懂的GIT入门 | 贝格乐（Backlog）](https://backlog.com/git-tutorial/cn/intro/intro1_1.html)

```
git checkout -b gh-pages

// 新建仓库
$ git init
//创建新分支
git checkout -b gh-pages

# 将所有文件添加到暂存区
git add .

# 初始化提交
git commit -m '初始化提交'


// 关联你的远程仓库
$ git remote add origin xxxx

// 切换到gh-pages分支
$ git checkout gh-pages

// 提交代码到gh-pages分支
$ git push origin gh-pages

// 合并到master分支
$ git checkout master
$ git merge gh-pages
```

## 初始化和开发分支

**核心步骤：**

```javascript
# 初始化项目仓库
git init -b main

# 将所有文件添加到暂存区
git add .

# 初始化提交
git commit -m '初始化提交'

```

使用 gitee 管理项目<br />核心步骤：<br />在Github上创建项目

- 本地设置仓库别名

```javascript
git remote add origin git@github.com:845415120/web-.git
```

- 本地推送到远程仓库

```javascript
# 推送主分支
git push -u origin main
```

## 创建并合并分支

![alt](https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230706/image.6421bd86z800.webp)

Git鼓励大量使用分支：

```
查看分支：git branch
创建分支：git branch <name>
切换分支：git checkout <name>
创建+切换分支：git checkout -b <name>
合并某分支到当前分支：git merge <name>
删除分支：git branch -d <name>
```
创建+切换分支：git checkout -b
合并某分支到当前分支：git merge
