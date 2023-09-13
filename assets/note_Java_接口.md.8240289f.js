import{_ as e,o as t,c as n,h as a}from"./app.0ca118e2.js";const h=JSON.parse('{"title":"接口","description":"","frontmatter":{},"headers":[{"level":2,"title":"接口继承","slug":"接口继承","link":"#接口继承","children":[]}],"relativePath":"note/Java/接口.md","lastUpdated":1694572171000}'),r={name:"note/Java/接口.md"},i=a(`<h1 id="接口" tabindex="-1">接口 <a class="header-anchor" href="#接口" aria-hidden="true">#</a></h1><p>在抽象类中，抽象方法本质上是定义接口规范：即规定高层类的接口，从而保证所有子类都有相同的接口实现，这样，多态就能发挥出威力。</p><p>如果一个抽象类没有字段，所有方法全部都是抽象方法：</p><p>abstract class Person { public abstract void run(); public abstract String getName(); } 就可以把该抽象类改写为接口：interface。</p><p>在Java中，使用interface可以声明一个接口：</p><p>interface Person { void run(); String getName(); } 所谓interface，就是比抽象类还要抽象的纯抽象接口，因为它连字段都不能有。因为接口定义的所有方法默认都是public abstract的，所以这两个修饰符不需要写出来（写不写效果都一样）。</p><p>当一个具体的class去实现一个interface时，需要使用implements关键字。举个例子：</p><p>class Student implements Person { private String name;</p><pre><code>public Student(String name) {
    this.name = name;
}

@Override
public void run() {
    System.out.println(this.name + &quot; run&quot;);
}

@Override
public String getName() {
    return this.name;
}
</code></pre><p>} 我们知道，在Java中，一个类只能继承自另一个类，不能从多个类继承。但是，一个类可以实现多个interface，例如：</p><p>class Student implements Person, Hello { // 实现了两个interface ... }</p><h2 id="接口继承" tabindex="-1">接口继承 <a class="header-anchor" href="#接口继承" aria-hidden="true">#</a></h2><p>一个interface可以继承自另一个interface。interface继承自interface使用extends，它相当于扩展了接口的方法。例如：</p><p>interface Hello { void hello(); }</p><p>interface Person extends Hello { void run(); String getName(); } 此时，Person接口继承自Hello接口，因此，Person接口现在实际上有3个抽象方法签名，其中一个来自继承的Hello接口。</p>`,15),s=[i];function c(o,p,l,d,_,u){return t(),n("div",null,s)}const f=e(r,[["render",c]]);export{h as __pageData,f as default};
