import{_ as s,o as a,c as n,h as e}from"./app.f05e34aa.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"异常处理机制","slug":"异常处理机制","link":"#异常处理机制","children":[]}],"relativePath":"note/Java/异常处理.md","lastUpdated":1694572171000}'),p={name:"note/Java/异常处理.md"},l=e(`<h2 id="异常处理机制" tabindex="-1">异常处理机制 <a class="header-anchor" href="#异常处理机制" aria-hidden="true">#</a></h2><p>Java内置了一套异常处理机制，总是使用异常来表示错误。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#babed8;">try {</span></span>
<span class="line"><span style="color:#babed8;">    String s = processFile(“C:\\\\test.txt”);</span></span>
<span class="line"><span style="color:#babed8;">    // ok:</span></span>
<span class="line"><span style="color:#babed8;">} catch (FileNotFoundException e) {</span></span>
<span class="line"><span style="color:#babed8;">    // file not found:</span></span>
<span class="line"><span style="color:#babed8;">} catch (SecurityException e) {</span></span>
<span class="line"><span style="color:#babed8;">    // no read permission:</span></span>
<span class="line"><span style="color:#babed8;">} catch (IOException e) {</span></span>
<span class="line"><span style="color:#babed8;">    // io error:</span></span>
<span class="line"><span style="color:#babed8;">} catch (Exception e) {</span></span>
<span class="line"><span style="color:#babed8;">    // other error:</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>捕获异常 捕获异常使用try...catch语句，把可能发生异常的代码放到try {...}中，然后使用catch捕获对应的Exception及其子类：</p>`,4),c=[l];function r(t,o,i,b,d,_){return a(),n("div",null,c)}const h=s(p,[["render",r]]);export{m as __pageData,h as default};
