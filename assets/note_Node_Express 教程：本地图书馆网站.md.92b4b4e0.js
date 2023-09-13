import{_ as s,o as n,c as a,h as l}from"./app.0ca118e2.js";const B=JSON.parse('{"title":"本地图书馆","description":"","frontmatter":{},"headers":[{"level":2,"title":"使用应用生成器创建","slug":"使用应用生成器创建","link":"#使用应用生成器创建","children":[]},{"level":2,"title":"文件改动时重启服务","slug":"文件改动时重启服务","link":"#文件改动时重启服务","children":[{"level":3,"title":"视图（模板）","slug":"视图-模板","link":"#视图-模板","children":[]}]},{"level":2,"title":"安装 Mongoose","slug":"安装-mongoose","link":"#安装-mongoose","children":[]},{"level":2,"title":"连接到 MongoDB","slug":"连接到-mongodb","link":"#连接到-mongodb","children":[]},{"level":2,"title":"创建用户模型","slug":"创建用户模型","link":"#创建用户模型","children":[]},{"level":2,"title":"populatedb.js","slug":"populatedb-js","link":"#populatedb-js","children":[]},{"level":2,"title":"创建路由","slug":"创建路由","link":"#创建路由","children":[]}],"relativePath":"note/Node/Express 教程：本地图书馆网站.md","lastUpdated":null}'),p={name:"note/Node/Express 教程：本地图书馆网站.md"},e=l(`<h1 id="本地图书馆" tabindex="-1">本地图书馆 <a class="header-anchor" href="#本地图书馆" aria-hidden="true">#</a></h1><p><a href="https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Express_Nodejs/skeleton_website#%E6%96%87%E4%BB%B6%E6%94%B9%E5%8A%A8%E6%97%B6%E9%87%8D%E5%90%AF%E6%9C%8D%E5%8A%A1%E5%99%A8" target="_blank" rel="noreferrer">Express 教程 2：创建站点框架 - 学习 Web 开发 | MDN</a></p><h2 id="使用应用生成器创建" tabindex="-1"><a href="https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Express_Nodejs/skeleton_website#%E4%BD%BF%E7%94%A8%E5%BA%94%E7%94%A8%E7%94%9F%E6%88%90%E5%99%A8" target="_blank" rel="noreferrer">使用应用生成器</a>创建 <a class="header-anchor" href="#使用应用生成器创建" aria-hidden="true">#</a></h2><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">npx express</span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">generator</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="文件改动时重启服务" tabindex="-1">文件改动时重启服务 <a class="header-anchor" href="#文件改动时重启服务" aria-hidden="true">#</a></h2><p>安装nodemon</p><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">npm install </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">g nodemon</span></span>
<span class="line"><span style="color:#BABED8;">npm install </span><span style="color:#89DDFF;">--</span><span style="color:#82AAFF;">save-dev</span><span style="color:#BABED8;"> nodemon</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>找到 package.json 的 scripts 部分。在 &quot;start&quot; 一行的末尾添加逗号，并在新的一行中添加 &quot;devstart&quot;，如下所示： JSONCopy to Clipboard</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">start</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">node ./bin/www</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">devstart</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nodemon ./bin/www</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">},</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>启动服务器：<code>npm run devstart</code></p><p>为网站设置具体路由</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> indexRouter)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/users</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> usersRouter)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="视图-模板" tabindex="-1"><a href="https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Express_Nodejs/skeleton_website#%E8%A7%86%E5%9B%BE%EF%BC%88%E6%A8%A1%E6%9D%BF%EF%BC%89" target="_blank" rel="noreferrer">视图（模板）</a> <a class="header-anchor" href="#视图-模板" aria-hidden="true">#</a></h3><p><a href="http://expressjs.com/en/4x/api.html#res.render" target="_blank" rel="noreferrer">Response.render()</a> 方法用某对象的某个变量值一同来渲染一个特定的模板，然后将结果作为响应发送。</p><p>数据库 <img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1688366255596-fe59784d-998a-428d-80df-916d8099022d.png#averageHue=%23f2f2f2&amp;clientId=ue907690e-de83-4&amp;from=paste&amp;id=ucf0cce42&amp;originHeight=620&amp;originWidth=737&amp;originalType=url&amp;ratio=1.2200000286102295&amp;rotation=0&amp;showTitle=false&amp;size=49042&amp;status=done&amp;style=none&amp;taskId=u15e5ac02-28c9-4578-8bcf-92d46a0828c&amp;title=" alt="image.png"></p><h1 id="连接数据库" tabindex="-1">连接数据库 <a class="header-anchor" href="#连接数据库" aria-hidden="true">#</a></h1><h2 id="安装-mongoose" tabindex="-1"><a href="https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Express_Nodejs/mongoose#%E5%AE%89%E8%A3%85_mongoose" target="_blank" rel="noreferrer">安装 Mongoose</a> <a class="header-anchor" href="#安装-mongoose" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">npm install mongoose</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="连接到-mongodb" tabindex="-1"><a href="https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Express_Nodejs/mongoose#%E8%BF%9E%E6%8E%A5%E5%88%B0_mongodb_2" target="_blank" rel="noreferrer">连接到 MongoDB</a> <a class="header-anchor" href="#连接到-mongodb" aria-hidden="true">#</a></h2><p>打开 <strong>/app.js</strong>（位于项目根目录），并将以下代码复制到声明 Express 应用对象的位置（var app = express(); 之后）。</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">//连接MongoDB</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> mongoose </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">require</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mongoose</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">mongoose</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">connect</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mongodb://127.0.0.1:27017</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">useNewUrlParser</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">useUnifiedTopology</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">连接数据库成功!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">catch</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">error</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">error</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Error connecting to the database</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">error</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="创建用户模型" tabindex="-1">创建用户模型 <a class="header-anchor" href="#创建用户模型" aria-hidden="true">#</a></h2><p>/models</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">//导入 mongoose</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> mongoose </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">require</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mongoose</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//创建文档的结构对象</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//设置集合中文档的属性以及属性值的类型</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> AccountSchema </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> mongoose</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Schema</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> String</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">required</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 设置必填项</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">time</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> Date</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">required</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//  类型</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> Number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">default</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">//默认值</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 金额</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">account</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> Number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">required</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 备注</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">remarks</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;">String</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//创建模型对象  对文档操作的封装对象</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> AccountModel </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> mongoose</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">model</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">accounts</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> AccountSchema)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//暴露模型对象</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> AccountModel</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h2 id="populatedb-js" tabindex="-1"><a href="https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/master/populatedb.js" target="_blank" rel="noreferrer">populatedb.js</a> <a class="header-anchor" href="#populatedb-js" aria-hidden="true">#</a></h2><p><img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1688434578859-e4c55baf-8346-4800-b54f-ea544ad63c9c.png#averageHue=%23dbb377&amp;clientId=u19525cb7-4662-4&amp;from=paste&amp;height=1076&amp;id=uad92cb7e&amp;originHeight=1313&amp;originWidth=1006&amp;originalType=binary&amp;ratio=1.2200000286102295&amp;rotation=0&amp;showTitle=false&amp;size=150650&amp;status=done&amp;style=none&amp;taskId=ub6784daa-9d86-4116-b092-698ab55ac52&amp;title=&amp;width=824.5901445969563" alt="image.png"></p><h2 id="创建路由" tabindex="-1"><a href="https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Express_Nodejs/routes#%E5%88%9B%E5%BB%BA%E8%B7%AF%E7%94%B1%E5%A4%84%E7%90%86%E5%99%A8%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0" target="_blank" rel="noreferrer">创建路由</a> <a class="header-anchor" href="#创建路由" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> express </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">require</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">express</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> router </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> express</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Router</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// GET 请求主页</span></span>
<span class="line"><span style="color:#BABED8;">router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">req</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">redirect</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/catalog</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>备注：</strong> 这是我们第一次使用 <a href="https://expressjs.com/en/4x/api.html#res.redirect" target="_blank" rel="noreferrer">redirect()</a> 响应方法。它会使路由重定向到指定的页面，默认发送 HTTP 状态代码“302 Found”。可以根据需要更改返回的状态代码、设置绝对或相对路径。</p><h1 id="创建模板呈现数据" tabindex="-1">创建模板呈现数据 <a class="header-anchor" href="#创建模板呈现数据" aria-hidden="true">#</a></h1>`,30),o=[e];function r(t,c,i,D,y,F){return n(),a("div",null,o)}const b=s(p,[["render",r]]);export{B as __pageData,b as default};
