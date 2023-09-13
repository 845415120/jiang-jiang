import{_ as a,o as e,c as t,h as p}from"./app.0ca118e2.js";const f=JSON.parse('{"title":"如何使用 Render 免费部署你的 Node.js 应用程序","description":"","frontmatter":{},"headers":[{"level":2,"title":"如何使用Render部署一个GitHub仓库","slug":"如何使用render部署一个github仓库","link":"#如何使用render部署一个github仓库","children":[]}],"relativePath":"note/其他/node 部署.md","lastUpdated":1694595205000}'),i={name:"note/其他/node 部署.md"},m=p('<h1 id="如何使用-render-免费部署你的-node-js-应用程序" tabindex="-1">如何使用 Render 免费部署你的 Node.js 应用程序 <a class="header-anchor" href="#如何使用-render-免费部署你的-node-js-应用程序" aria-hidden="true">#</a></h1><h2 id="如何使用render部署一个github仓库" tabindex="-1">如何使用Render部署一个GitHub仓库 <a class="header-anchor" href="#如何使用render部署一个github仓库" aria-hidden="true">#</a></h2><p>改好端点之后，就可以开始部署你的应用了。 我准备好了<a href="https://github.com/myogeshchavan97/github-repos-nodejs-api" target="_blank" rel="noreferrer">这个GitHub仓库</a>来使用Render部署。这个GitHub仓库展示了一个排名前几位的仓库清单，以及每一个仓库获得的星星数量（以JSON的格式）。 让我们开始吧！ <a href="https://render.com/" target="_blank" rel="noreferrer">Render</a>提供如下图各种注册方式： <img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1689753630682-f512da95-40e0-4485-a58b-a24139054982.png#averageHue=%23262c58&amp;clientId=uba5a7019-8f46-4&amp;from=paste&amp;id=u8c62c7ef&amp;originHeight=698&amp;originWidth=651&amp;originalType=url&amp;ratio=1.2200000286102295&amp;rotation=0&amp;showTitle=false&amp;size=64884&amp;status=done&amp;style=none&amp;taskId=u45b8afd5-9600-4cfa-903a-d001bdd1dc6&amp;title=" alt="image.png"> 一旦注册并登陆账号之后，你会看到控制面板： <img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1689753631224-0a0ee5d5-8040-4730-a186-a831337cafe9.png#averageHue=%23929d8c&amp;clientId=uba5a7019-8f46-4&amp;from=paste&amp;id=ub7437fa7&amp;originHeight=808&amp;originWidth=1301&amp;originalType=url&amp;ratio=1.2200000286102295&amp;rotation=0&amp;showTitle=false&amp;size=171921&amp;status=done&amp;style=none&amp;taskId=u0ee678ec-39cd-47ea-a208-4bd851f0c6c&amp;title=" alt="image.png"> 点击Web Services选项卡下的 New Web Service按钮来部署Node.js应用。 你也可以通过点击网页头部你头像旁边的 New + 按钮来选择 Web Service选择卡。 点击之后，会看到以下画面： <img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1689753631732-758564da-73d0-49b0-ae97-96b9de466472.png#averageHue=%23fefefe&amp;clientId=uba5a7019-8f46-4&amp;from=paste&amp;id=u9d441c99&amp;originHeight=818&amp;originWidth=1274&amp;originalType=url&amp;ratio=1.2200000286102295&amp;rotation=0&amp;showTitle=false&amp;size=101267&amp;status=done&amp;style=none&amp;taskId=u6ef610bc-4d5b-4a73-b869-b20d73f1d38&amp;title=" alt="image.png"> 点击GitHub菜单下方的Connect account按钮，会看到以下画面： <img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1689753631262-bf1ec1f6-2b89-4d1b-b9d8-590614823d68.png#averageHue=%23d3d6d9&amp;clientId=uba5a7019-8f46-4&amp;from=paste&amp;id=uc7ae54ba&amp;originHeight=377&amp;originWidth=1440&amp;originalType=url&amp;ratio=1.2200000286102295&amp;rotation=0&amp;showTitle=false&amp;size=42247&amp;status=done&amp;style=none&amp;taskId=ua16c1406-7778-4a87-af2d-ede387acb23&amp;title=" alt="image.png"> 点击Configure链接，就可以允许Render选取你所有或者选择的GitHub仓库。 我希望只访问选择的仓库，也就是我需要部署的。所以我选择Only select repositories选项。 然后，点击在选择卡下方的Select repositories按钮，选择你想要部署的仓库。 <img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1689753631586-06a654c0-c31b-4862-aac1-2939d397eec9.png#averageHue=%23c6e2d8&amp;clientId=uba5a7019-8f46-4&amp;from=paste&amp;id=udb52978c&amp;originHeight=857&amp;originWidth=1421&amp;originalType=url&amp;ratio=1.2200000286102295&amp;rotation=0&amp;showTitle=false&amp;size=124611&amp;status=done&amp;style=none&amp;taskId=u6602d3ed-e986-423a-b8f8-f32e9888058&amp;title=" alt="image.png"> 选择完毕后，你会看到如下画面： <img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1689753632537-d2fc865f-6805-4b7d-87fa-29b8dbbabe71.png#averageHue=%2383bd86&amp;clientId=uba5a7019-8f46-4&amp;from=paste&amp;id=u8101f562&amp;originHeight=889&amp;originWidth=1418&amp;originalType=url&amp;ratio=1.2200000286102295&amp;rotation=0&amp;showTitle=false&amp;size=139989&amp;status=done&amp;style=none&amp;taskId=u6b29a538-fb10-4f19-b00f-04f9612659e&amp;title=" alt="image.png"> 点击绿色按钮Install，使得Render有权访问你选择的仓库。 点击完毕后，你会被重定向到控制台，看到如下画面： <img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1689753632572-fb1114cf-e957-48fe-98eb-c2963ac27358.png#averageHue=%23fefefe&amp;clientId=uba5a7019-8f46-4&amp;from=paste&amp;id=u5ed0bbee&amp;originHeight=770&amp;originWidth=1389&amp;originalType=url&amp;ratio=1.2200000286102295&amp;rotation=0&amp;showTitle=false&amp;size=108947&amp;status=done&amp;style=none&amp;taskId=ubc119933-92cb-48c9-b23e-449ef148b88&amp;title=" alt="image.png"> 现在，点击Connect按钮，看到如下画面： <img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1689753633080-36eeaa5a-1c64-415c-a182-e4049640f6f5.png#averageHue=%23fefefe&amp;clientId=uba5a7019-8f46-4&amp;from=paste&amp;id=ueb0086f2&amp;originHeight=895&amp;originWidth=1406&amp;originalType=url&amp;ratio=1.2200000286102295&amp;rotation=0&amp;showTitle=false&amp;size=168242&amp;status=done&amp;style=none&amp;taskId=u1ab31096-cbe8-4216-b40f-155c1140db0&amp;title=" alt="image.png"> 在Name框中，输入一个简短的名字来标识你的网站。 <strong>注意：</strong> 请保持Name值的简单，因为部署完毕后，它将成为应用的URL。 所以如果我将github-repos设置为Name的值，我的应用URL会成为<a href="https://github-repos.onrender.com/" target="_blank" rel="noreferrer">https://github-repos.onrender.com</a>。 所以请填写一个简单有意义的Name值。 如图填写剩下的部分： <img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1689753633121-5269aa95-cc09-4554-b6e5-f1861bd761f7.png#averageHue=%23fefefe&amp;clientId=uba5a7019-8f46-4&amp;from=paste&amp;id=u4b6cb38b&amp;originHeight=820&amp;originWidth=1372&amp;originalType=url&amp;ratio=1.2200000286102295&amp;rotation=0&amp;showTitle=false&amp;size=154514&amp;status=done&amp;style=none&amp;taskId=u80bb5a7a-07d2-460f-88fd-c5e29f1f3fb&amp;title=" alt="image.png"> 在Build Command中填写yarn就等同于yarn install命令。Yarn是一个类似于npm的包管理工具，但是比npm要快。 如果你的入口文件是 index.js，在Start Command中填写node index.js。 填写完所有细节之后，向下滚动页面，会看到Plans区域，自动勾选的是免费计划。如果没有被勾选，请勾选好，因为我们的目的是免费部署应用。 再向下滑动页面会看到Advanced按钮。 <img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1689753633193-f7e78d96-2a6c-409a-9565-d9484b63a87d.png#averageHue=%23a6ae9a&amp;clientId=uba5a7019-8f46-4&amp;from=paste&amp;id=uf496acf3&amp;originHeight=709&amp;originWidth=1357&amp;originalType=url&amp;ratio=1.2200000286102295&amp;rotation=0&amp;showTitle=false&amp;size=118524&amp;status=done&amp;style=none&amp;taskId=ucf2644e6-e57e-43a6-865e-abb37f782a1&amp;title=" alt="image.png"> 如果你的应用使用了环境变量，你可以在Advanced设置中输入。也可以在这里添加 .env文件，这样就不用你手动一个一个地添加。 <img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1689753634311-78880e2e-7afb-4f49-a2b8-23cb686d9300.png#averageHue=%23fefefe&amp;clientId=uba5a7019-8f46-4&amp;from=paste&amp;id=u14f69bb1&amp;originHeight=820&amp;originWidth=1382&amp;originalType=url&amp;ratio=1.2200000286102295&amp;rotation=0&amp;showTitle=false&amp;size=148950&amp;status=done&amp;style=none&amp;taskId=ud3d37993-322f-4a9d-867e-36d0078d334&amp;title=" alt="image.png"> 注意Auto-Deploy的默认值是Yes——所以一旦你向GitHub仓库推送了更新，它们就会被自动部署到Render。 如果你并不想每次更改仓库的时候都自动部署，你可以在 Auto-Deploy下拉菜单中选择No。 现在，点击Create Web Service按钮来开始部署过程。 <img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1689753634374-fcb6a881-a661-4d1e-885a-c42ca8c37d00.png#averageHue=%23a1aa95&amp;clientId=uba5a7019-8f46-4&amp;from=paste&amp;id=u986b278e&amp;originHeight=819&amp;originWidth=1378&amp;originalType=url&amp;ratio=1.2200000286102295&amp;rotation=0&amp;showTitle=false&amp;size=139616&amp;status=done&amp;style=none&amp;taskId=uc18646ed-060a-4eac-94df-4da85c31425&amp;title=" alt="image.png"> 部署可能需要等待一段时间，有时候如果页面卡在了“in progress”阶段，可以尝试刷新一下页面。 一旦部署完成，你可以看到如图，应用被部署，有一个Live 小标： <img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1689753634983-67519697-901e-49a4-8dbc-79f8f6da6276.png#averageHue=%238ca575&amp;clientId=uba5a7019-8f46-4&amp;from=paste&amp;id=u2e05cfda&amp;originHeight=746&amp;originWidth=1358&amp;originalType=url&amp;ratio=1.2200000286102295&amp;rotation=0&amp;showTitle=false&amp;size=149520&amp;status=done&amp;style=none&amp;taskId=ubef43c4d-7910-4322-ae68-2f3803046cd&amp;title=" alt="image.png"> 你可以点击在顶部的应用URL，在我的例子中，这个URL是<a href="https://github-repos.onrender.com/" target="_blank" rel="noreferrer">https://github-repos.onrender.com/</a>。 如果是首次部署应用，可能在访问网站的时候会遇到Page is not working报错。 等待一段时间，并且使用Ctrl + R或Cmd + R（Mac）来刷新页面。因为免费服务的硬件有限，所以Render平台需要一些时间来启动一个项目。 部署成功后，可以如下图一样看到你的应用： <img src="https://cdn.nlark.com/yuque/0/2023/png/34220974/1689753635134-1c6b8be0-83e4-46fe-8f4b-a2294fd1147b.png#averageHue=%23fdfdfd&amp;clientId=uba5a7019-8f46-4&amp;from=paste&amp;id=ua6c65e49&amp;originHeight=895&amp;originWidth=1438&amp;originalType=url&amp;ratio=1.2200000286102295&amp;rotation=0&amp;showTitle=false&amp;size=224396&amp;status=done&amp;style=none&amp;taskId=u75bb3953-8476-4697-a1bf-2ec322f454b&amp;title=" alt="image.png"></p>',3),n=[m];function r(o,d,s,g,l,c){return e(),t("div",null,n)}const b=a(i,[["render",r]]);export{f as __pageData,b as default};
