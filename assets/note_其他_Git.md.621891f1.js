import{_ as s,o as a,c as n,h as e}from"./app.0ca118e2.js";const g=JSON.parse('{"title":"Git","description":"","frontmatter":{},"headers":[{"level":2,"title":"初始化和开发分支","slug":"初始化和开发分支","link":"#初始化和开发分支","children":[]},{"level":2,"title":"创建并合并分支","slug":"创建并合并分支","link":"#创建并合并分支","children":[]}],"relativePath":"note/其他/Git.md","lastUpdated":1694595205000}'),l={name:"note/其他/Git.md"},p=e(`<h1 id="git" tabindex="-1">Git <a class="header-anchor" href="#git" aria-hidden="true">#</a></h1><p><strong>目标：</strong> 能够使用 git 管理项目，并且能够将代码上传到Github</p><p><a href="https://backlog.com/git-tutorial/cn/intro/intro1_1.html" target="_blank" rel="noreferrer">首先【Git的基础】 | 猴子都能懂的GIT入门 | 贝格乐（Backlog）</a></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">git checkout -b gh-pages</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 新建仓库</span></span>
<span class="line"><span style="color:#babed8;">$ git init</span></span>
<span class="line"><span style="color:#babed8;">//创建新分支</span></span>
<span class="line"><span style="color:#babed8;">git checkout -b gh-pages</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 将所有文件添加到暂存区</span></span>
<span class="line"><span style="color:#babed8;">git add .</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 初始化提交</span></span>
<span class="line"><span style="color:#babed8;">git commit -m &#39;初始化提交&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 关联你的远程仓库</span></span>
<span class="line"><span style="color:#babed8;">$ git remote add origin xxxx</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 切换到gh-pages分支</span></span>
<span class="line"><span style="color:#babed8;">$ git checkout gh-pages</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 提交代码到gh-pages分支</span></span>
<span class="line"><span style="color:#babed8;">$ git push origin gh-pages</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 合并到master分支</span></span>
<span class="line"><span style="color:#babed8;">$ git checkout master</span></span>
<span class="line"><span style="color:#babed8;">$ git merge gh-pages</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="初始化和开发分支" tabindex="-1">初始化和开发分支 <a class="header-anchor" href="#初始化和开发分支" aria-hidden="true">#</a></h2><p><strong>核心步骤：</strong></p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;"># 初始化项目仓库</span></span>
<span class="line"><span style="color:#BABED8;">git init </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">b main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;"># 将所有文件添加到暂存区</span></span>
<span class="line"><span style="color:#BABED8;">git add </span><span style="color:#89DDFF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;"># 初始化提交</span></span>
<span class="line"><span style="color:#BABED8;">git commit </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">m </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">初始化提交</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>使用 gitee 管理项目<br>核心步骤：<br>在Github上创建项目</p><ul><li>本地设置仓库别名</li></ul><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">git remote add origin git@github</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">com:</span><span style="color:#F78C6C;">845415120</span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;">web</span><span style="color:#89DDFF;">-.</span><span style="color:#BABED8;">git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>本地推送到远程仓库</li></ul><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;"># 推送主分支</span></span>
<span class="line"><span style="color:#BABED8;">git push </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">u origin main</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="创建并合并分支" tabindex="-1">创建并合并分支 <a class="header-anchor" href="#创建并合并分支" aria-hidden="true">#</a></h2><p><img src="https://cdn.staticaly.com/gh/845415120/picx-images-hosting@master/20230706/image.6421bd86z800.webp" alt="alt"></p><p>Git鼓励大量使用分支：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">查看分支：git branch</span></span>
<span class="line"><span style="color:#babed8;">创建分支：git branch &lt;name&gt;</span></span>
<span class="line"><span style="color:#babed8;">切换分支：git checkout &lt;name&gt;</span></span>
<span class="line"><span style="color:#babed8;">创建+切换分支：git checkout -b &lt;name&gt;</span></span>
<span class="line"><span style="color:#babed8;">合并某分支到当前分支：git merge &lt;name&gt;</span></span>
<span class="line"><span style="color:#babed8;">删除分支：git branch -d &lt;name&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>创建+切换分支：git checkout -b 合并某分支到当前分支：git merge</p>`,17),r=[p];function i(c,t,o,b,d,m){return a(),n("div",null,r)}const h=s(l,[["render",i]]);export{g as __pageData,h as default};
