import{_ as s,o as n,c as a,h as e}from"./app.0ca118e2.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"你写项目的时候碰到过印象里比较深刻的一些bug或困难，你怎么解决的？","slug":"你写项目的时候碰到过印象里比较深刻的一些bug或困难-你怎么解决的","link":"#你写项目的时候碰到过印象里比较深刻的一些bug或困难-你怎么解决的","children":[]},{"level":2,"title":"404","slug":"_404","link":"#_404","children":[]},{"level":2,"title":"搜索界面节流","slug":"搜索界面节流","link":"#搜索界面节流","children":[]},{"level":2,"title":"图片和组件的懒加载","slug":"图片和组件的懒加载","link":"#图片和组件的懒加载","children":[]},{"level":2,"title":"axios响应拦截","slug":"axios响应拦截","link":"#axios响应拦截","children":[]}],"relativePath":"note/面试之路/项目题.md","lastUpdated":null}'),l={name:"note/面试之路/项目题.md"},p=e(`<h2 id="你写项目的时候碰到过印象里比较深刻的一些bug或困难-你怎么解决的" tabindex="-1">你写项目的时候碰到过印象里比较深刻的一些bug或困难，你怎么解决的？ <a class="header-anchor" href="#你写项目的时候碰到过印象里比较深刻的一些bug或困难-你怎么解决的" aria-hidden="true">#</a></h2><h2 id="_404" tabindex="-1">404 <a class="header-anchor" href="#_404" aria-hidden="true">#</a></h2><p><strong>遇到的bug</strong>：当输入url中没有在路由配置中配置过的路径时，页面它会出现空白，并且浏览 器发出警告，如果我这个项目上线的话，可能会造成用户的体验不友好和搜索引擎不友 好。</p><p><strong>配置 404页面</strong> 解决办法：在路由配置中再配置一个404页面的路径，这样就能使用户不管怎么输入不合规 的url后，都会提示用户输错了网址。</p><div class="language-dotnetcli line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dotnetcli</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">{</span></span>
<span class="line"><span style="color:#babed8;">path: &#39;/404&#39;,</span></span>
<span class="line"><span style="color:#babed8;">name: &#39;NotFound&#39;,</span></span>
<span class="line"><span style="color:#babed8;">component: () =&gt; import(&#39;@/views/NotFound/Index.vue&#39;)</span></span>
<span class="line"><span style="color:#babed8;">},</span></span>
<span class="line"><span style="color:#babed8;">// 所有未定义路由，全部重定向到404页</span></span>
<span class="line"><span style="color:#babed8;">{</span></span>
<span class="line"><span style="color:#babed8;">path: &#39;/:pathMatch(.*)&#39;,</span></span>
<span class="line"><span style="color:#babed8;">redirect: &#39;/404&#39;</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="搜索界面节流" tabindex="-1">搜索界面节流 <a class="header-anchor" href="#搜索界面节流" aria-hidden="true">#</a></h2><p><strong>遇到的bug</strong>：在搜索界面的时候，当我一直点击搜索时，它会频繁的进行请求，造成了不必 要的性能损耗。</p><h2 id="图片和组件的懒加载" tabindex="-1">图片和组件的懒加载 <a class="header-anchor" href="#图片和组件的懒加载" aria-hidden="true">#</a></h2><p>我做的项目使用了很多的组件页面和大量的图片，导致在加载页面时耗时比较 久，以及在页面的切换时很多暂时不需要的页面组件一次性全部加载了，导致整个项目的 性能非常差。</p><p>解决办法： 图片懒加载：在App.vue中引入VueLazy并且使用app.use启用它，然后把图片中的src改成 v-lazy</p><p>页面组件懒加载：在router配置中的component，把直接在代码一开始引入组件页面，改 成箭头函数式引入。</p><div class="language-dotnetcli line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dotnetcli</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">{</span></span>
<span class="line"><span style="color:#babed8;">path: &#39;/&#39;,</span></span>
<span class="line"><span style="color:#babed8;">component: () =&gt; import(&#39;@/views/Home/Home.vue&#39;)</span></span>
<span class="line"><span style="color:#babed8;">},</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="axios响应拦截" tabindex="-1">axios响应拦截 <a class="header-anchor" href="#axios响应拦截" aria-hidden="true">#</a></h2><p>遇到bug：我是使用mockjs来模拟后端的接口，当时我在设置端口的返回值时，我返回数据 有一个状态码以及把json数据中export出来的detail数据添加到data这个需要返回的数据 （代码如下），这导致我在获取接口里的数据时需要多.data(引用一层data)，当时我没意 识，结果一直获取不到数据。</p><div class="language-Vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">Mock.mock(/\\/detail/, &#39;get&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#BABED8;">return {</span></span>
<span class="line"><span style="color:#BABED8;">code: 0, // 返回状态码</span></span>
<span class="line"><span style="color:#BABED8;">data: detail // 返回数据</span></span>
<span class="line"><span style="color:#BABED8;">}</span></span>
<span class="line"><span style="color:#BABED8;">})</span></span>
<span class="line"><span style="color:#BABED8;">js</span></span>
<span class="line"><span style="color:#BABED8;">复制代码</span></span>
<span class="line"><span style="color:#BABED8;">import axios from &quot;axios&quot;;</span></span>
<span class="line"><span style="color:#BABED8;">// 响应拦截器</span></span>
<span class="line"><span style="color:#BABED8;">axios.interceptors.response.use((res) =&gt; {</span></span>
<span class="line"><span style="color:#BABED8;">return res.data</span></span>
<span class="line"><span style="color:#BABED8;">})</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,15),r=[p];function i(t,c,o,b,d,u){return n(),a("div",null,r)}const g=s(l,[["render",i]]);export{h as __pageData,g as default};
