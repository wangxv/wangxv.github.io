import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as a,a as e,d,e as l,b as n,r as s}from"./app.96d9e652.js";const c={},r=l(`<h1 id="diff\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#diff\u7B97\u6CD5" aria-hidden="true">#</a> Diff\u7B97\u6CD5</h1><p>\u524D\u7AEF\u4E4B\u795E \uFF0C\u4F5C\u8005\u6797\u4E09\u5FC3</p><h2 id="\u4EC0\u4E48\u662F\u865A\u62DFdom" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u865A\u62DFdom" aria-hidden="true">#</a> <strong>\u4EC0\u4E48\u662F\u865A\u62DFDOM</strong></h2><p>\u8BB2<code>Diff\u7B97\u6CD5</code>\u524D\uFF0C\u6211\u5148\u7ED9\u5927\u5BB6\u8BB2\u4E00\u8BB2\u4EC0\u4E48\u662F<code>\u865A\u62DFDOM</code>\u5427\u3002\u8FD9\u6709\u5229\u4E8E\u540E\u9762\u5927\u5BB6\u5BF9<code>Diff\u7B97\u6CD5</code>\u7684\u7406\u89E3\u52A0\u6DF1\u3002</p><p><code>\u865A\u62DFDOM</code>\u662F\u4E00\u4E2A<code>\u5BF9\u8C61</code>\uFF0C\u4E00\u4E2A\u4EC0\u4E48\u6837\u7684\u5BF9\u8C61\u5462\uFF1F<strong>\u4E00\u4E2A\u7528\u6765\u8868\u793A\u771F\u5B9EDOM\u7684\u5BF9\u8C61</strong>\uFF0C\u8981\u8BB0\u4F4F\u8FD9\u53E5\u8BDD\u3002\u6211\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u8BF7\u770B\u4EE5\u4E0B<code>\u771F\u5B9EDOM</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;ul id=&quot;list&quot;&gt;
    &lt;li class=&quot;item&quot;&gt;\u54C8\u54C8&lt;/li&gt;
    &lt;li class=&quot;item&quot;&gt;\u5475\u5475&lt;/li&gt;
    &lt;li class=&quot;item&quot;&gt;\u563F\u563F&lt;/li&gt;
&lt;/ul&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u5E94\u7684<code>\u865A\u62DFDOM</code>\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let oldVDOM = {// \u65E7\u865A\u62DFDOM
        tagName: &#39;ul&#39;,// \u6807\u7B7E\u540D
        props: {// \u6807\u7B7E\u5C5E\u6027
            id: &#39;list&#39;
        },
        children: [// \u6807\u7B7E\u5B50\u8282\u70B9
            {
                tagName: &#39;li&#39;, props: { class: &#39;item&#39; }, children: [&#39;\u54C8\u54C8&#39;]
            },
            {
                tagName: &#39;li&#39;, props: { class: &#39;item&#39; }, children: [&#39;\u5475\u5475&#39;]
            },
            {
                tagName: &#39;li&#39;, props: { class: &#39;item&#39; }, children: [&#39;\u563F\u563F&#39;]
            },
        ]
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u65F6\u5019\uFF0C\u6211\u4FEE\u6539\u4E00\u4E2A<code>li\u6807\u7B7E</code>\u7684\u6587\u672C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;ul id=&quot;list&quot;&gt;
    &lt;li class=&quot;item&quot;&gt;\u54C8\u54C8&lt;/li&gt;
    &lt;li class=&quot;item&quot;&gt;\u5475\u5475&lt;/li&gt;
    &lt;li class=&quot;item&quot;&gt;\u54C8\u54C8\u54C8\u54C8\u54C8&lt;/li&gt;// \u4FEE\u6539
&lt;/ul&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u65F6\u5019\u751F\u6210\u7684<code>\u65B0\u865A\u62DFDOM</code>\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let newVDOM = {// \u65B0\u865A\u62DFDOM
        tagName: &#39;ul&#39;,// \u6807\u7B7E\u540D
        props: {// \u6807\u7B7E\u5C5E\u6027
            id: &#39;list&#39;
        },
        children: [// \u6807\u7B7E\u5B50\u8282\u70B9
            {
                tagName: &#39;li&#39;, props: { class: &#39;item&#39; }, children: [&#39;\u54C8\u54C8&#39;]
            },
            {
                tagName: &#39;li&#39;, props: { class: &#39;item&#39; }, children: [&#39;\u5475\u5475&#39;]
            },
            {
                tagName: &#39;li&#39;, props: { class: &#39;item&#39; }, children: [&#39;\u54C8\u54C8\u54C8\u54C8\u54C8&#39;]
            },
        ]
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u5C31\u662F\u54B1\u4EEC\u5E73\u5E38\u8BF4\u7684<code>\u65B0\u65E7\u4E24\u4E2A\u865A\u62DFDOM</code>\uFF0C\u8FD9\u4E2A\u65F6\u5019\u7684<code>\u65B0\u865A\u62DFDOM</code>\u662F\u6570\u636E\u7684\u6700\u65B0\u72B6\u6001\uFF0C\u90A3\u4E48\u6211\u4EEC\u76F4\u63A5\u62FF<code>\u65B0\u865A\u62DFDOM</code>\u53BB\u6E32\u67D3\u6210<code>\u771F\u5B9EDOM</code>\u7684\u8BDD\uFF0C\u6548\u7387\u771F\u7684\u4F1A\u6BD4\u76F4\u63A5\u64CD\u4F5C\u771F\u5B9EDOM\u9AD8\u5417\uFF1F\u90A3\u80AF\u5B9A\u662F\u4E0D\u4F1A\u7684\uFF0C\u770B\u4E0B\u56FE\uFF1A</p>`,13),m={href:"https://mmbiz.qpic.cn/mmbiz/zPh0erYjkib3PLb4BjIpiaR4yk0chaEaCiam3VKpSmibH50GHWVOYGr0KjTbzcKwOKjgyticEKO7TQibTZYyM2Bzz2NA/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},v=n("https://mmbiz.qpic.cn/mmbiz/zPh0erYjkib3PLb4BjIpiaR4yk0chaEaCiam3VKpSmibH50GHWVOYGr0KjTbzcKwOKjgyticEKO7TQibTZYyM2Bzz2NA/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),b=l('<p>\u7531\u4E0A\u56FE\uFF0C\u4E00\u770B\u4FBF\u77E5\uFF0C\u80AF\u5B9A\u662F\u7B2C2\u79CD\u65B9\u5F0F\u6BD4\u8F83\u5FEB\uFF0C\u56E0\u4E3A\u7B2C1\u79CD\u65B9\u5F0F\u4E2D\u95F4\u8FD8\u5939\u7740\u4E00\u4E2A<code>\u865A\u62DFDOM</code>\u7684\u6B65\u9AA4\uFF0C\u6240\u4EE5<strong>\u865A\u62DFDOM\u6BD4\u771F\u5B9EDOM\u5FEB</strong>\u8FD9\u53E5\u8BDD\u5176\u5B9E\u662F\u9519\u7684\uFF0C\u6216\u8005\u8BF4\u662F\u4E0D\u4E25\u8C28\u7684\u3002</p><p>\u90A3\u6B63\u786E\u7684\u8BF4\u6CD5\u662F\u4EC0\u4E48\u5462\uFF1F<strong>\u865A\u62DFDOM\u7B97\u6CD5\u64CD\u4F5C\u771F\u5B9EDOM\uFF0C\u6027\u80FD\u9AD8\u4E8E\u76F4\u63A5\u64CD\u4F5C\u771F\u5B9EDOM</strong>\uFF0C<code>\u865A\u62DFDOM</code>\u548C<code>\u865A\u62DFDOM\u7B97\u6CD5</code>\u662F\u4E24\u79CD\u6982\u5FF5\u3002<code>\u865A\u62DFDOM\u7B97\u6CD5 = \u865A\u62DFDOM + Diff\u7B97\u6CD5</code></p><h2 id="\u4EC0\u4E48\u662Fdiff\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662Fdiff\u7B97\u6CD5" aria-hidden="true">#</a> <strong>\u4EC0\u4E48\u662FDiff\u7B97\u6CD5</strong></h2><p>\u4E0A\u9762\u54B1\u4EEC\u8BF4\u4E86<code>\u865A\u62DFDOM</code>\uFF0C\u4E5F\u77E5\u9053\u4E86\u53EA\u6709<code>\u865A\u62DFDOM + Diff\u7B97\u6CD5</code>\u624D\u80FD\u771F\u6B63\u7684\u63D0\u9AD8\u6027\u80FD\uFF0C\u90A3\u8BB2\u5B8C<code>\u865A\u62DFDOM</code>\uFF0C\u6211\u4EEC\u518D\u6765\u8BB2\u8BB2<code>Diff\u7B97\u6CD5</code>\u5427\uFF0C\u8FD8\u662F\u4E0A\u9762\u7684\u4F8B\u5B50(\u8FD9\u5F20\u56FE\u88AB\u538B\u7F29\u7684\u6709\u70B9\u5C0F\uFF0C\u5927\u5BB6\u53EF\u4EE5\u6253\u5F00\u770B\uFF0C\u6BD4\u8F83\u6E05\u6670)\uFF1A</p>',4),u={href:"https://mmbiz.qpic.cn/mmbiz/zPh0erYjkib3PLb4BjIpiaR4yk0chaEaCiaVITU4iby6aYFszLuN0bibtCVttGmDO6g7sZz5zkQbtVPV14p9UKZicMKQ/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},p=n("https://mmbiz.qpic.cn/mmbiz/zPh0erYjkib3PLb4BjIpiaR4yk0chaEaCiaVITU4iby6aYFszLuN0bibtCVttGmDO6g7sZz5zkQbtVPV14p9UKZicMKQ/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),h=l('<p>\u4E0A\u56FE\u4E2D\uFF0C\u5176\u5B9E\u53EA\u6709\u4E00\u4E2Ali\u6807\u7B7E\u4FEE\u6539\u4E86\u6587\u672C\uFF0C\u5176\u4ED6\u90FD\u662F\u4E0D\u53D8\u7684\uFF0C\u6240\u4EE5\u6CA1\u5FC5\u8981\u6240\u6709\u7684\u8282\u70B9\u90FD\u8981\u66F4\u65B0\uFF0C\u53EA\u66F4\u65B0\u8FD9\u4E2Ali\u6807\u7B7E\u5C31\u884C\uFF0CDiff\u7B97\u6CD5\u5C31\u662F\u67E5\u51FA\u8FD9\u4E2Ali\u6807\u7B7E\u7684\u7B97\u6CD5\u3002</p><p>\u603B\u7ED3\uFF1A<strong>Diff\u7B97\u6CD5\u662F\u4E00\u79CD\u5BF9\u6BD4\u7B97\u6CD5</strong>\u3002\u5BF9\u6BD4\u4E24\u8005\u662F<code>\u65E7\u865A\u62DFDOM\u548C\u65B0\u865A\u62DFDOM</code>\uFF0C\u5BF9\u6BD4\u51FA\u662F\u54EA\u4E2A<code>\u865A\u62DF\u8282\u70B9</code>\u66F4\u6539\u4E86\uFF0C\u627E\u51FA\u8FD9\u4E2A<code>\u865A\u62DF\u8282\u70B9</code>\uFF0C\u5E76\u53EA\u66F4\u65B0\u8FD9\u4E2A\u865A\u62DF\u8282\u70B9\u6240\u5BF9\u5E94\u7684<code>\u771F\u5B9E\u8282\u70B9</code>\uFF0C\u800C\u4E0D\u7528\u66F4\u65B0\u5176\u4ED6\u6570\u636E\u6CA1\u53D1\u751F\u6539\u53D8\u7684\u8282\u70B9\uFF0C\u5B9E\u73B0<code>\u7CBE\u51C6</code>\u5730\u66F4\u65B0\u771F\u5B9EDOM\uFF0C\u8FDB\u800C<code>\u63D0\u9AD8\u6548\u7387</code>\u3002</p><p><code>\u4F7F\u7528\u865A\u62DFDOM\u7B97\u6CD5\u7684\u635F\u8017\u8BA1\u7B97</code>\uFF1A\u603B\u635F\u8017 = \u865A\u62DFDOM\u589E\u5220\u6539+\uFF08\u4E0EDiff\u7B97\u6CD5\u6548\u7387\u6709\u5173\uFF09\u771F\u5B9EDOM\u5DEE\u5F02\u589E\u5220\u6539+\uFF08\u8F83\u5C11\u7684\u8282\u70B9\uFF09\u6392\u7248\u4E0E\u91CD\u7ED8</p><p><code>\u76F4\u63A5\u64CD\u4F5C\u771F\u5B9EDOM\u7684\u635F\u8017\u8BA1\u7B97</code>\uFF1A\u603B\u635F\u8017 = \u771F\u5B9EDOM\u5B8C\u5168\u589E\u5220\u6539+\uFF08\u53EF\u80FD\u8F83\u591A\u7684\u8282\u70B9\uFF09\u6392\u7248\u4E0E\u91CD\u7ED8</p><h2 id="diff\u7B97\u6CD5\u7684\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#diff\u7B97\u6CD5\u7684\u539F\u7406" aria-hidden="true">#</a> <strong>Diff\u7B97\u6CD5\u7684\u539F\u7406</strong></h2><h3 id="diff\u540C\u5C42\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#diff\u540C\u5C42\u5BF9\u6BD4" aria-hidden="true">#</a> <strong>Diff\u540C\u5C42\u5BF9\u6BD4</strong></h3><p>\u65B0\u65E7\u865A\u62DFDOM\u5BF9\u6BD4\u7684\u65F6\u5019\uFF0CDiff\u7B97\u6CD5\u6BD4\u8F83\u53EA\u4F1A\u5728\u540C\u5C42\u7EA7\u8FDB\u884C, \u4E0D\u4F1A\u8DE8\u5C42\u7EA7\u6BD4\u8F83\u3002\u6240\u4EE5Diff\u7B97\u6CD5\u662F:<code>\u6DF1\u5EA6\u4F18\u5148\u7B97\u6CD5</code>\u3002\u65F6\u95F4\u590D\u6742\u5EA6:<code>O(n)</code></p>',7),w={href:"https://mmbiz.qpic.cn/mmbiz/zPh0erYjkib3PLb4BjIpiaR4yk0chaEaCiazz3RRU96D4RyHW1oxxFFZzW9dTBKzzfFYcRtA9SkJfKwiabQq5exPyg/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},x=n("https://mmbiz.qpic.cn/mmbiz/zPh0erYjkib3PLb4BjIpiaR4yk0chaEaCiazz3RRU96D4RyHW1oxxFFZzW9dTBKzzfFYcRtA9SkJfKwiabQq5exPyg/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),f=l('<h3 id="diff\u5BF9\u6BD4\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#diff\u5BF9\u6BD4\u6D41\u7A0B" aria-hidden="true">#</a> <strong>Diff\u5BF9\u6BD4\u6D41\u7A0B</strong></h3><p>\u5F53\u6570\u636E\u6539\u53D8\u65F6\uFF0C\u4F1A\u89E6\u53D1<code>setter</code>\uFF0C\u5E76\u4E14\u901A\u8FC7<code>Dep.notify</code>\u53BB\u901A\u77E5\u6240\u6709<code>\u8BA2\u9605\u8005Watcher</code>\uFF0C\u8BA2\u9605\u8005\u4EEC\u5C31\u4F1A\u8C03\u7528<code>patch\u65B9\u6CD5</code>\uFF0C\u7ED9\u771F\u5B9EDOM\u6253\u8865\u4E01\uFF0C\u66F4\u65B0\u76F8\u5E94\u7684\u89C6\u56FE\u3002</p><p><code>newVnode\u548ColdVnode</code>\uFF1A\u540C\u5C42\u7684\u65B0\u65E7\u865A\u62DF\u8282\u70B9</p>',3),g={href:"https://mmbiz.qpic.cn/mmbiz/zPh0erYjkib3PLb4BjIpiaR4yk0chaEaCiaz6KpGyG7yyusu1dKyElNE1h7k62lOHzj6BF9yBLujWwEHUMicXZ06Fw/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},_=n("https://mmbiz.qpic.cn/mmbiz/zPh0erYjkib3PLb4BjIpiaR4yk0chaEaCiaz6KpGyG7yyusu1dKyElNE1h7k62lOHzj6BF9yBLujWwEHUMicXZ06Fw/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),V=l(`<h3 id="patch\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#patch\u65B9\u6CD5" aria-hidden="true">#</a> <strong>patch\u65B9\u6CD5</strong></h3><p>\u8FD9\u4E2A\u65B9\u6CD5\u4F5C\u7528\u5C31\u662F\uFF0C\u5BF9\u6BD4\u5F53\u524D\u540C\u5C42\u7684\u865A\u62DF\u8282\u70B9\u662F\u5426\u4E3A\u540C\u4E00\u79CD\u7C7B\u578B\u7684\u6807\u7B7E<code>(\u540C\u4E00\u7C7B\u578B\u7684\u6807\u51C6\uFF0C\u4E0B\u9762\u4F1A\u8BB2)</code>\uFF1A</p><ul><li>\u662F\uFF1A\u7EE7\u7EED\u6267\u884C<code>patchVnode\u65B9\u6CD5</code>\u8FDB\u884C\u6DF1\u5C42\u6BD4\u5BF9</li><li>\u5426\uFF1A\u6CA1\u5FC5\u8981\u6BD4\u5BF9\u4E86\uFF0C\u76F4\u63A5\u6574\u4E2A\u8282\u70B9\u66FF\u6362\u6210<code>\u65B0\u865A\u62DF\u8282\u70B9</code></li></ul><p>\u6765\u770B\u770B<code>patch</code>\u7684\u6838\u5FC3\u539F\u7406\u4EE3\u7801</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function patch(oldVnode, newVnode) {
// \u6BD4\u8F83\u662F\u5426\u4E3A\u4E00\u4E2A\u7C7B\u578B\u7684\u8282\u70B9
  if (sameVnode(oldVnode, newVnode)) {
// \u662F\uFF1A\u7EE7\u7EED\u8FDB\u884C\u6DF1\u5C42\u6BD4\u8F83
    patchVnode(oldVnode, newVnode)
  } else {
// \u5426
    const oldEl = oldVnode.el// \u65E7\u865A\u62DF\u8282\u70B9\u7684\u771F\u5B9EDOM\u8282\u70B9
    const parentEle = api.parentNode(oldEl)// \u83B7\u53D6\u7236\u8282\u70B9
    createEle(newVnode)// \u521B\u5EFA\u65B0\u865A\u62DF\u8282\u70B9\u5BF9\u5E94\u7684\u771F\u5B9EDOM\u8282\u70B9
    if (parentEle !== null) {
      api.insertBefore(parentEle, vnode.el, api.nextSibling(oEl))// \u5C06\u65B0\u5143\u7D20\u6DFB\u52A0\u8FDB\u7236\u5143\u7D20
      api.removeChild(parentEle, oldVnode.el)// \u79FB\u9664\u4EE5\u524D\u7684\u65E7\u5143\u7D20\u8282\u70B9
// \u8BBE\u7F6Enull\uFF0C\u91CA\u653E\u5185\u5B58
      oldVnode = null
    }
  }

  return newVnode
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="samevnode\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#samevnode\u65B9\u6CD5" aria-hidden="true">#</a> <strong>sameVnode\u65B9\u6CD5</strong></h3><p>patch\u5173\u952E\u7684\u4E00\u6B65\u5C31\u662F<code>sameVnode\u65B9\u6CD5\u5224\u65AD\u662F\u5426\u4E3A\u540C\u4E00\u7C7B\u578B\u8282\u70B9</code>\uFF0C\u90A3\u95EE\u9898\u6765\u4E86\uFF0C\u600E\u4E48\u624D\u7B97\u662F\u540C\u4E00\u7C7B\u578B\u8282\u70B9\u5462\uFF1F\u8FD9\u4E2A<code>\u7C7B\u578B</code>\u7684\u6807\u51C6\u662F\u4EC0\u4E48\u5462\uFF1F</p><p>\u54B1\u4EEC\u6765\u770B\u770BsameVnode\u65B9\u6CD5\u7684\u6838\u5FC3\u539F\u7406\u4EE3\u7801\uFF0C\u5C31\u4E00\u76EE\u4E86\u7136\u4E86</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function sameVnode(oldVnode, newVnode) {
  return (
    oldVnode.key === newVnode.key &amp;&amp;// key\u503C\u662F\u5426\u4E00\u6837
    oldVnode.tagName === newVnode.tagName &amp;&amp;// \u6807\u7B7E\u540D\u662F\u5426\u4E00\u6837
    oldVnode.isComment === newVnode.isComment &amp;&amp;// \u662F\u5426\u90FD\u4E3A\u6CE8\u91CA\u8282\u70B9
    isDef(oldVnode.data) === isDef(newVnode.data) &amp;&amp;// \u662F\u5426\u90FD\u5B9A\u4E49\u4E86data
    sameInputType(oldVnode, newVnode)// \u5F53\u6807\u7B7E\u4E3Ainput\u65F6\uFF0Ctype\u5FC5\u987B\u662F\u5426\u76F8\u540C
  )
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="patchvnode\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#patchvnode\u65B9\u6CD5" aria-hidden="true">#</a> <strong>patchVnode\u65B9\u6CD5</strong></h3><p>\u8FD9\u4E2A\u51FD\u6570\u505A\u4E86\u4EE5\u4E0B\u4E8B\u60C5\uFF1A</p><ul><li>\u627E\u5230\u5BF9\u5E94\u7684<code>\u771F\u5B9EDOM</code>\uFF0C\u79F0\u4E3A<code>el</code></li><li>\u5224\u65AD<code>newVnode</code>\u548C<code>oldVnode</code>\u662F\u5426\u6307\u5411\u540C\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5982\u679C\u662F\uFF0C\u90A3\u4E48\u76F4\u63A5<code>return</code></li><li>\u5982\u679C\u4ED6\u4EEC\u90FD\u6709\u6587\u672C\u8282\u70B9\u5E76\u4E14\u4E0D\u76F8\u7B49\uFF0C\u90A3\u4E48\u5C06<code>el</code>\u7684\u6587\u672C\u8282\u70B9\u8BBE\u7F6E\u4E3A<code>newVnode</code>\u7684\u6587\u672C\u8282\u70B9\u3002</li><li>\u5982\u679C<code>oldVnode</code>\u6709\u5B50\u8282\u70B9\u800C<code>newVnode</code>\u6CA1\u6709\uFF0C\u5219\u5220\u9664<code>el</code>\u7684\u5B50\u8282\u70B9</li><li>\u5982\u679C<code>oldVnode</code>\u6CA1\u6709\u5B50\u8282\u70B9\u800C<code>newVnode</code>\u6709\uFF0C\u5219\u5C06<code>newVnode</code>\u7684\u5B50\u8282\u70B9\u771F\u5B9E\u5316\u4E4B\u540E\u6DFB\u52A0\u5230<code>el</code></li><li>\u5982\u679C\u4E24\u8005\u90FD\u6709\u5B50\u8282\u70B9\uFF0C\u5219\u6267\u884C<code>updateChildren</code>\u51FD\u6570\u6BD4\u8F83\u5B50\u8282\u70B9\uFF0C\u8FD9\u4E00\u6B65\u5F88\u91CD\u8981</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function patchVnode(oldVnode, newVnode) {
  const el = newVnode.el = oldVnode.el// \u83B7\u53D6\u771F\u5B9EDOM\u5BF9\u8C61
// \u83B7\u53D6\u65B0\u65E7\u865A\u62DF\u8282\u70B9\u7684\u5B50\u8282\u70B9\u6570\u7EC4
  const oldCh = oldVnode.children, newCh = newVnode.children
// \u5982\u679C\u65B0\u65E7\u865A\u62DF\u8282\u70B9\u662F\u540C\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5219\u7EC8\u6B62
  if (oldVnode === newVnode) return
// \u5982\u679C\u65B0\u65E7\u865A\u62DF\u8282\u70B9\u662F\u6587\u672C\u8282\u70B9\uFF0C\u4E14\u6587\u672C\u4E0D\u4E00\u6837
  if (oldVnode.text !== null &amp;&amp; newVnode.text !== null &amp;&amp; oldVnode.text !== newVnode.text) {
// \u5219\u76F4\u63A5\u5C06\u771F\u5B9EDOM\u4E2D\u6587\u672C\u66F4\u65B0\u4E3A\u65B0\u865A\u62DF\u8282\u70B9\u7684\u6587\u672C
    api.setTextContent(el, newVnode.text)
  } else {
// \u5426\u5219

    if (oldCh &amp;&amp; newCh &amp;&amp; oldCh !== newCh) {
// \u65B0\u65E7\u865A\u62DF\u8282\u70B9\u90FD\u6709\u5B50\u8282\u70B9\uFF0C\u4E14\u5B50\u8282\u70B9\u4E0D\u4E00\u6837

// \u5BF9\u6BD4\u5B50\u8282\u70B9\uFF0C\u5E76\u66F4\u65B0
      updateChildren(el, oldCh, newCh)
    } else if (newCh) {
// \u65B0\u865A\u62DF\u8282\u70B9\u6709\u5B50\u8282\u70B9\uFF0C\u65E7\u865A\u62DF\u8282\u70B9\u6CA1\u6709

// \u521B\u5EFA\u65B0\u865A\u62DF\u8282\u70B9\u7684\u5B50\u8282\u70B9\uFF0C\u5E76\u66F4\u65B0\u5230\u771F\u5B9EDOM\u4E0A\u53BB
      createEle(newVnode)
    } else if (oldCh) {
// \u65E7\u865A\u62DF\u8282\u70B9\u6709\u5B50\u8282\u70B9\uFF0C\u65B0\u865A\u62DF\u8282\u70B9\u6CA1\u6709

//\u76F4\u63A5\u5220\u9664\u771F\u5B9EDOM\u91CC\u5BF9\u5E94\u7684\u5B50\u8282\u70B9
      api.removeChild(el)
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4ED6\u51E0\u4E2A\u70B9\u90FD\u5F88\u597D\u7406\u89E3\uFF0C\u6211\u4EEC\u8BE6\u7EC6\u6765\u8BB2\u4E00\u4E0B<code>updateChildren</code></p><h3 id="updatechildren\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#updatechildren\u65B9\u6CD5" aria-hidden="true">#</a> <strong>updateChildren\u65B9\u6CD5</strong></h3><p>\u8FD9\u662F<code>patchVnode</code>\u91CC\u6700\u91CD\u8981\u7684\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u65B0\u65E7\u865A\u62DF\u8282\u70B9\u7684\u5B50\u8282\u70B9\u5BF9\u6BD4\uFF0C\u5C31\u662F\u53D1\u751F\u5728<code>updateChildren\u65B9\u6CD5</code>\u4E2D\uFF0C\u63A5\u4E0B\u6765\u5C31\u7ED3\u5408\u4E00\u4E9B\u56FE\u6765\u8BB2\uFF0C\u8BA9\u5927\u5BB6\u66F4\u597D\u7406\u89E3\u5427</p><p>\u662F\u600E\u4E48\u6837\u4E00\u4E2A\u5BF9\u6BD4\u65B9\u6CD5\u5462\uFF1F\u5C31\u662F<code>\u9996\u5C3E\u6307\u9488\u6CD5</code>\uFF0C\u65B0\u7684\u5B50\u8282\u70B9\u96C6\u5408\u548C\u65E7\u7684\u5B50\u8282\u70B9\u96C6\u5408\uFF0C\u5404\u6709\u9996\u5C3E\u4E24\u4E2A\u6307\u9488\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;ul&gt;
    &lt;li&gt;a&lt;/li&gt;
    &lt;li&gt;b&lt;/li&gt;
    &lt;li&gt;c&lt;/li&gt;
&lt;/ul&gt;

\u4FEE\u6539\u6570\u636E\u540E

&lt;ul&gt;
    &lt;li&gt;b&lt;/li&gt;
    &lt;li&gt;c&lt;/li&gt;
    &lt;li&gt;e&lt;/li&gt;
    &lt;li&gt;a&lt;/li&gt;
&lt;/ul&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u90A3\u4E48\u65B0\u65E7\u4E24\u4E2A\u5B50\u8282\u70B9\u96C6\u5408\u4EE5\u53CA\u5176\u9996\u5C3E\u6307\u9488\u4E3A\uFF1A</p>`,19),z={href:"https://mmbiz.qpic.cn/mmbiz/zPh0erYjkib3PLb4BjIpiaR4yk0chaEaCiaF8XCvFAc6E63VBxRDJuJHluzJfW6GYZaUCxAqCnKbXDxrehS4dwRtw/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},E=n("https://mmbiz.qpic.cn/mmbiz/zPh0erYjkib3PLb4BjIpiaR4yk0chaEaCiaF8XCvFAc6E63VBxRDJuJHluzJfW6GYZaUCxAqCnKbXDxrehS4dwRtw/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),k=l("<p>\u7136\u540E\u4F1A\u8FDB\u884C\u4E92\u76F8\u8FDB\u884C\u6BD4\u8F83\uFF0C\u603B\u5171\u6709\u4E94\u79CD\u6BD4\u8F83\u60C5\u51B5\uFF1A</p><ul><li>1\u3001<code>oldS \u548C newS</code>\u4F7F\u7528<code>sameVnode\u65B9\u6CD5</code>\u8FDB\u884C\u6BD4\u8F83\uFF0C<code>sameVnode(oldS, newS)</code></li><li>2\u3001<code>oldS \u548C newE</code>\u4F7F\u7528<code>sameVnode\u65B9\u6CD5</code>\u8FDB\u884C\u6BD4\u8F83\uFF0C<code>sameVnode(oldS, newE)</code></li><li>3\u3001<code>oldE \u548C newS</code>\u4F7F\u7528<code>sameVnode\u65B9\u6CD5</code>\u8FDB\u884C\u6BD4\u8F83\uFF0C<code>sameVnode(oldE, newS)</code></li><li>4\u3001<code>oldE \u548C newE</code>\u4F7F\u7528<code>sameVnode\u65B9\u6CD5</code>\u8FDB\u884C\u6BD4\u8F83\uFF0C<code>sameVnode(oldE, newE)</code></li><li>5\u3001\u5982\u679C\u4EE5\u4E0A\u903B\u8F91\u90FD\u5339\u914D\u4E0D\u5230\uFF0C\u518D\u628A\u6240\u6709\u65E7\u5B50\u8282\u70B9\u7684\xA0<code>key</code>\xA0\u505A\u4E00\u4E2A\u6620\u5C04\u5230\u65E7\u8282\u70B9\u4E0B\u6807\u7684\xA0<code>key -&gt; index</code>\xA0\u8868\uFF0C\u7136\u540E\u7528\u65B0\xA0<code>vnode</code>\xA0\u7684\xA0<code>key</code>\u53BB\u627E\u51FA\u5728\u65E7\u8282\u70B9\u4E2D\u53EF\u4EE5\u590D\u7528\u7684\u4F4D\u7F6E\u3002</li></ul>",2),y={href:"https://mmbiz.qpic.cn/mmbiz/zPh0erYjkib3PLb4BjIpiaR4yk0chaEaCiaRyxzvR262icc5CmbBAt8SibIzVsVGVwoo1ER3BblqjhOY5sr2H8Ob4vA/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},C=n("https://mmbiz.qpic.cn/mmbiz/zPh0erYjkib3PLb4BjIpiaR4yk0chaEaCiaRyxzvR262icc5CmbBAt8SibIzVsVGVwoo1ER3BblqjhOY5sr2H8Ob4vA/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),I=e("p",null,[e("strong",null,"\u63A5\u4E0B\u6765\u5C31\u4EE5\u4E0A\u9762\u4EE3\u7801\u4E3A\u4F8B\uFF0C\u5206\u6790\u4E00\u4E0B\u6BD4\u8F83\u7684\u8FC7\u7A0B")],-1),S=e("p",null,"\u5206\u6790\u4E4B\u524D\uFF0C\u8BF7\u5927\u5BB6\u8BB0\u4F4F\u4E00\u70B9\uFF0C\u6700\u7EC8\u7684\u6E32\u67D3\u7ED3\u679C\u90FD\u8981\u4EE5newVDOM\u4E3A\u51C6\uFF0C\u8FD9\u4E5F\u89E3\u91CA\u4E86\u4E3A\u4EC0\u4E48\u4E4B\u540E\u7684\u8282\u70B9\u79FB\u52A8\u9700\u8981\u79FB\u52A8\u5230newVDOM\u6240\u5BF9\u5E94\u7684\u4F4D\u7F6E",-1),q={href:"https://mmbiz.qpic.cn/mmbiz/zPh0erYjkib3PLb4BjIpiaR4yk0chaEaCiabkITO87lAMT9Ohj57IO6jQAqZFp0DOciakVjicAnvSczLbNLIibnV5yBA/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},A=n("https://mmbiz.qpic.cn/mmbiz/zPh0erYjkib3PLb4BjIpiaR4yk0chaEaCiabkITO87lAMT9Ohj57IO6jQAqZFp0DOciakVjicAnvSczLbNLIibnV5yBA/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),D=l(`<ul><li>\u7B2C\u4E00\u6B65</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>oldS = a, oldE = c
newS = b, newE = a

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6BD4\u8F83\u7ED3\u679C\uFF1A<code>oldS \u548C newE</code>\xA0\u76F8\u7B49\uFF0C\u9700\u8981\u628A<code>\u8282\u70B9a</code>\u79FB\u52A8\u5230<code>newE</code>\u6240\u5BF9\u5E94\u7684\u4F4D\u7F6E\uFF0C\u4E5F\u5C31\u662F\u672B\u5C3E\uFF0C\u540C\u65F6<code>oldS++</code>\uFF0C<code>newE--</code></p>`,3),O={href:"https://mmbiz.qpic.cn/mmbiz/zPh0erYjkib3PLb4BjIpiaR4yk0chaEaCiafIicibS6yUrJxgLA3Rc0niaBkvSaGHyOKtn1Nn7q0JERvYhJ7lCEoicjXw/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},j=n("https://mmbiz.qpic.cn/mmbiz/zPh0erYjkib3PLb4BjIpiaR4yk0chaEaCiafIicibS6yUrJxgLA3Rc0niaBkvSaGHyOKtn1Nn7q0JERvYhJ7lCEoicjXw/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),B=l(`<ul><li>\u7B2C\u4E8C\u6B65</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>oldS = b, oldE = c
newS = b, newE = e

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6BD4\u8F83\u7ED3\u679C\uFF1A<code>oldS \u548C newS</code>\u76F8\u7B49\uFF0C\u9700\u8981\u628A<code>\u8282\u70B9b</code>\u79FB\u52A8\u5230<code>newS</code>\u6240\u5BF9\u5E94\u7684\u4F4D\u7F6E\uFF0C\u540C\u65F6<code>oldS++</code>,<code>newS++</code></p>`,3),P={href:"https://mmbiz.qpic.cn/mmbiz/zPh0erYjkib3PLb4BjIpiaR4yk0chaEaCiaQo6OulDkqIDXxwDcEH5OiaFX7zktO3c4zDeuMfUflJyXpHx0TUVEKrA/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},M=n("https://mmbiz.qpic.cn/mmbiz/zPh0erYjkib3PLb4BjIpiaR4yk0chaEaCiaQo6OulDkqIDXxwDcEH5OiaFX7zktO3c4zDeuMfUflJyXpHx0TUVEKrA/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),R=l(`<ul><li>\u7B2C\u4E09\u6B65</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>oldS = c, oldE = c
newS = c, newE = e

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6BD4\u8F83\u7ED3\u679C\uFF1A<code>oldS\u3001oldE \u548C newS</code>\u76F8\u7B49\uFF0C\u9700\u8981\u628A<code>\u8282\u70B9c</code>\u79FB\u52A8\u5230<code>newS</code>\u6240\u5BF9\u5E94\u7684\u4F4D\u7F6E\uFF0C\u540C\u65F6<code>oldS++</code>,<code>newS++</code></p>`,3),Y={href:"https://mmbiz.qpic.cn/mmbiz/zPh0erYjkib3PLb4BjIpiaR4yk0chaEaCiaZiahJia9d8jW061ib1BWDqWn3NSfnGKXHJNvgaSU9Pe0tvDCsTVK5QunQ/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},L=n("https://mmbiz.qpic.cn/mmbiz/zPh0erYjkib3PLb4BjIpiaR4yk0chaEaCiaZiahJia9d8jW061ib1BWDqWn3NSfnGKXHJNvgaSU9Pe0tvDCsTVK5QunQ/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),K=e("ul",null,[e("li",null,"\u7B2C\u56DB\u6B65")],-1),N=e("p",null,[e("code",null,"oldS > oldE"),n("\uFF0C\u5219"),e("code",null,"oldCh"),n("\u5148\u904D\u5386\u5B8C\u6210\u4E86\uFF0C\u800C"),e("code",null,"newCh"),n("\u8FD8\u6CA1\u904D\u5386\u5B8C\uFF0C\u8BF4\u660E"),e("code",null,"newCh\u6BD4oldCh\u591A"),n("\uFF0C\u6240\u4EE5\u9700\u8981\u5C06\u591A\u51FA\u6765\u7684\u8282\u70B9\uFF0C\u63D2\u5165\u5230\u771F\u5B9EDOM\u4E0A\u5BF9\u5E94\u7684\u4F4D\u7F6E\u4E0A")],-1),H={href:"https://mmbiz.qpic.cn/mmbiz/zPh0erYjkib3PLb4BjIpiaR4yk0chaEaCiakdg7yvUAPlZIHr4XibGZozN54KicdIj7Qgsroxysfk8aibSh1VpEicrNDQ/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},T=n("https://mmbiz.qpic.cn/mmbiz/zPh0erYjkib3PLb4BjIpiaR4yk0chaEaCiakdg7yvUAPlZIHr4XibGZozN54KicdIj7Qgsroxysfk8aibSh1VpEicrNDQ/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),W=l(`<ul><li>\u601D\u8003\u9898</li></ul><p>\u6211\u5728\u8FD9\u91CC\u7ED9\u5927\u5BB6\u7559\u4E00\u4E2A\u601D\u8003\u9898\u54C8\u3002\u4E0A\u9762\u7684\u4F8B\u5B50\u662F<code>newCh\u6BD4oldCh\u591A</code>\uFF0C\u5047\u5982\u76F8\u53CD\uFF0C\u662F<code>oldCh\u6BD4newCh\u591A</code>\u7684\u8BDD\uFF0C\u90A3\u5C31\u662F<code>newCh</code>\u5148\u8D70\u5B8C\u5FAA\u73AF\uFF0C\u7136\u540E<code>oldCh</code>\u4F1A\u6709\u591A\u51FA\u7684\u8282\u70B9\uFF0C\u7ED3\u679C\u4F1A\u5728\u771F\u5B9EDOM\u91CC\u8FDB\u884C\u5220\u9664\u8FD9\u4E9B\u65E7\u8282\u70B9\u3002</p><p>\u5927\u5BB6\u53EF\u4EE5\u81EA\u5DF1\u601D\u8003\u4E00\u4E0B\uFF0C\u6A21\u62DF\u4E00\u4E0B\u8FD9\u4E2A\u8FC7\u7A0B\uFF0C\u50CF\u6211\u4E00\u6837\uFF0C\u753B\u56FE\u6A21\u62DF\uFF0C\u624D\u80FD\u5DE9\u56FA\u4E0A\u9762\u7684\u77E5\u8BC6\u3002</p><p>\u9644\u4E0A<code>updateChildren</code>\u7684\u6838\u5FC3\u539F\u7406\u4EE3\u7801</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function updateChildren(parentElm, oldCh, newCh) {
  let oldStartIdx = 0, newStartIdx = 0
  let oldEndIdx = oldCh.length - 1
  let oldStartVnode = oldCh[0]
  let oldEndVnode = oldCh[oldEndIdx]
  let newEndIdx = newCh.length - 1
  let newStartVnode = newCh[0]
  let newEndVnode = newCh[newEndIdx]
  let oldKeyToIdx
  let idxInOld
  let elmToMove
  let before
  while (oldStartIdx &lt;= oldEndIdx &amp;&amp; newStartIdx &lt;= newEndIdx) {
    if (oldStartVnode == null) {
      oldStartVnode = oldCh[++oldStartIdx]
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx]
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx]
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx]
    } else if (sameVnode(oldStartVnode, newStartVnode)) {
      patchVnode(oldStartVnode, newStartVnode)
      oldStartVnode = oldCh[++oldStartIdx]
      newStartVnode = newCh[++newStartIdx]
    } else if (sameVnode(oldEndVnode, newEndVnode)) {
      patchVnode(oldEndVnode, newEndVnode)
      oldEndVnode = oldCh[--oldEndIdx]
      newEndVnode = newCh[--newEndIdx]
    } else if (sameVnode(oldStartVnode, newEndVnode)) {
      patchVnode(oldStartVnode, newEndVnode)
      api.insertBefore(parentElm, oldStartVnode.el, api.nextSibling(oldEndVnode.el))
      oldStartVnode = oldCh[++oldStartIdx]
      newEndVnode = newCh[--newEndIdx]
    } else if (sameVnode(oldEndVnode, newStartVnode)) {
      patchVnode(oldEndVnode, newStartVnode)
      api.insertBefore(parentElm, oldEndVnode.el, oldStartVnode.el)
      oldEndVnode = oldCh[--oldEndIdx]
      newStartVnode = newCh[++newStartIdx]
    } else {
// \u4F7F\u7528key\u65F6\u7684\u6BD4\u8F83
      if (oldKeyToIdx === undefined) {
        oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)// \u6709key\u751F\u6210index\u8868
      }
      idxInOld = oldKeyToIdx[newStartVnode.key]
      if (!idxInOld) {
        api.insertBefore(parentElm, createEle(newStartVnode).el, oldStartVnode.el)
        newStartVnode = newCh[++newStartIdx]
      }
      else {
        elmToMove = oldCh[idxInOld]
        if (elmToMove.sel !== newStartVnode.sel) {
          api.insertBefore(parentElm, createEle(newStartVnode).el, oldStartVnode.el)
        } else {
          patchVnode(elmToMove, newStartVnode)
          oldCh[idxInOld] = null
          api.insertBefore(parentElm, elmToMove.el, oldStartVnode.el)
        }
        newStartVnode = newCh[++newStartIdx]
      }
    }
  }
  if (oldStartIdx &gt; oldEndIdx) {
    before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].el
    addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx)
  } else if (newStartIdx &gt; newEndIdx) {
    removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7528index\u505Akey" tabindex="-1"><a class="header-anchor" href="#\u7528index\u505Akey" aria-hidden="true">#</a> <strong>\u7528index\u505Akey</strong></h2><p>\u5E73\u5E38v-for\u5FAA\u73AF\u6E32\u67D3\u7684\u65F6\u5019\uFF0C\u4E3A\u4EC0\u4E48\u4E0D\u5EFA\u8BAE\u7528index\u4F5C\u4E3A\u5FAA\u73AF\u9879\u7684key\u5462\uFF1F</p><p>\u6211\u4EEC\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5DE6\u8FB9\u662F\u521D\u59CB\u6570\u636E\uFF0C\u7136\u540E\u6211\u5728\u6570\u636E\u524D\u63D2\u5165\u4E00\u4E2A\u65B0\u6570\u636E\uFF0C\u53D8\u6210\u53F3\u8FB9\u7684\u5217\u8868</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;ul&gt;                      &lt;ul&gt;
    &lt;li key=&quot;0&quot;&gt;a&lt;/li&gt;        &lt;li key=&quot;0&quot;&gt;&lt;/li&gt;
    &lt;li key=&quot;1&quot;&gt;b&lt;/li&gt;        &lt;li key=&quot;1&quot;&gt;a&lt;/li&gt;
    &lt;li key=&quot;2&quot;&gt;c&lt;/li&gt;        &lt;li key=&quot;2&quot;&gt;b&lt;/li&gt;
                              &lt;li key=&quot;3&quot;&gt;c&lt;/li&gt;
&lt;/ul&gt;                     &lt;/ul&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6309\u7406\u8BF4\uFF0C\u6700\u7406\u60F3\u7684\u7ED3\u679C\u662F\uFF1A\u53EA\u63D2\u5165\u4E00\u4E2Ali\u6807\u7B7E\u65B0\u8282\u70B9\uFF0C\u5176\u4ED6\u90FD\u4E0D\u52A8\uFF0C\u786E\u4FDD\u64CD\u4F5CDOM\u6548\u7387\u6700\u9AD8\u3002\u4F46\u662F\u6211\u4EEC\u8FD9\u91CC\u7528\u4E86index\u6765\u5F53key\u7684\u8BDD\uFF0C\u771F\u7684\u4F1A\u5B9E\u73B0\u6211\u4EEC\u7684\u7406\u60F3\u7ED3\u679C\u5417\uFF1F\u5E9F\u8BDD\u4E0D\u591A\u8BF4\uFF0C\u5B9E\u8DF5\u4E00\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;ul&gt;
   &lt;li v-for=&quot;(item, index) in list&quot; :key=&quot;index&quot;&gt;{{ item.title }}&lt;/li&gt;
   &lt;/ul&gt;
   &lt;button @click=&quot;add&quot;&gt;\u589E\u52A0&lt;/button&gt;

   list: [
           { title: &quot;a&quot;, id: &quot;100&quot; },
           { title: &quot;b&quot;, id: &quot;101&quot; },
           { title: &quot;c&quot;, id: &quot;102&quot; },
        ]

    add() {
          this.list.unshift({ title: &quot;&quot;, id: &quot;99&quot; });
       }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u70B9\u51FB\u6309\u94AE\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u5E76\u4E0D\u662F\u6211\u4EEC\u9884\u60F3\u7684\u7ED3\u679C\uFF0C\u800C\u662F\u6240\u6709li\u6807\u7B7E\u90FD\u66F4\u65B0\u4E86</p>`,12),Q={href:"https://mmbiz.qpic.cn/mmbiz/zPh0erYjkib3PLb4BjIpiaR4yk0chaEaCiapkN8vnE8CeSWg3GQftMPWCzg2x2zQ7mksW12CwKkpLH996HsMh633w/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},U=n("https://mmbiz.qpic.cn/mmbiz/zPh0erYjkib3PLb4BjIpiaR4yk0chaEaCiapkN8vnE8CeSWg3GQftMPWCzg2x2zQ7mksW12CwKkpLH996HsMh633w/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),G=e("p",null,"\u4E3A\u4EC0\u4E48\u4F1A\u8FD9\u6837\u5462\uFF1F\u8FD8\u662F\u901A\u8FC7\u56FE\u6765\u89E3\u91CA",-1),J=e("p",null,[n("\u6309\u7406\u8BF4\uFF0C"),e("code",null,"a\uFF0Cb\uFF0Cc"),n("\u4E09\u4E2Ali\u6807\u7B7E\u90FD\u662F\u590D\u7528\u4E4B\u524D\u7684\uFF0C\u56E0\u4E3A\u4ED6\u4EEC\u4E09\u4E2A\u6839\u672C\u6CA1\u6539\u53D8\uFF0C\u6539\u53D8\u7684\u53EA\u662F\u524D\u9762\u65B0\u589E\u4E86\u4E00\u4E2A"),e("code",null,"\u6797\u4E09\u5FC3")],-1),Z={href:"https://mmbiz.qpic.cn/mmbiz/zPh0erYjkib3PLb4BjIpiaR4yk0chaEaCiaWEickZPd5Snm5Vte8QgtJrAfKsFoReUdrZdThYH0Z3vdeSeUVoIWNHA/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},F=n("https://mmbiz.qpic.cn/mmbiz/zPh0erYjkib3PLb4BjIpiaR4yk0chaEaCiaWEickZPd5Snm5Vte8QgtJrAfKsFoReUdrZdThYH0Z3vdeSeUVoIWNHA/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),X=l("<p>\u4F46\u662F\u6211\u4EEC\u524D\u9762\u8BF4\u4E86\uFF0C\u5728\u8FDB\u884C\u5B50\u8282\u70B9\u7684\xA0<code>diff\u7B97\u6CD5</code>\xA0\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u8FDB\u884C \u65E7\u9996\u8282\u70B9\u548C\u65B0\u9996\u8282\u70B9\u7684<code>sameNode</code>\u5BF9\u6BD4\uFF0C\u8FD9\u4E00\u6B65\u547D\u4E2D\u4E86\u903B\u8F91\uFF0C\u56E0\u4E3A\u73B0\u5728<code>\u65B0\u65E7\u4E24\u6B21\u9996\u90E8\u8282\u70B9</code>\xA0\u7684\xA0<code>key</code>\xA0\u90FD\u662F\xA0<code>0</code>\u4E86\uFF0C\u540C\u7406\uFF0Ckey\u4E3A1\u548C2\u7684\u4E5F\u662F\u547D\u4E2D\u4E86\u903B\u8F91\uFF0C\u5BFC\u81F4<code>\u76F8\u540Ckey\u7684\u8282\u70B9</code>\u4F1A\u53BB\u8FDB\u884C<code>patchVnode</code>\u66F4\u65B0\u6587\u672C\uFF0C</p><p>\u800C\u539F\u672C\u5C31\u6709\u7684<code>c\u8282\u70B9</code>\uFF0C\u5374\u56E0\u4E3A\u4E4B\u524D\u6CA1\u6709key\u4E3A4\u7684\u8282\u70B9\uFF0C\u800C\u88AB\u5F53\u505A\u4E86\u65B0\u8282\u70B9\uFF0C\u6240\u4EE5\u5F88\u641E\u7B11\uFF0C\u4F7F\u7528index\u505Akey\uFF0C\u6700\u540E\u65B0\u589E\u7684\u5C45\u7136\u662F\u672C\u6765\u5C31\u5DF2\u6709\u7684c\u8282\u70B9\u3002\u6240\u4EE5\u524D\u4E09\u4E2A\u90FD\u8FDB\u884C<code>patchVnode</code>\u66F4\u65B0\u6587\u672C\uFF0C\u6700\u540E\u4E00\u4E2A\u8FDB\u884C\u4E86<code>\u65B0\u589E</code>\uFF0C\u90A3\u5C31\u89E3\u91CA\u4E86\u4E3A\u4EC0\u4E48\u6240\u6709li\u6807\u7B7E\u90FD\u66F4\u65B0\u4E86\u3002</p>",2),$={href:"https://mmbiz.qpic.cn/mmbiz/zPh0erYjkib3PLb4BjIpiaR4yk0chaEaCiaHoILP8wTLTVLVIVQsm4ajgvwIBcHG8GmqUiaZoSLnmC9ibibmgAWib2syA/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},ee=n("https://mmbiz.qpic.cn/mmbiz/zPh0erYjkib3PLb4BjIpiaR4yk0chaEaCiaHoILP8wTLTVLVIVQsm4ajgvwIBcHG8GmqUiaZoSLnmC9ibibmgAWib2syA/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),ne=l(`<p>\u90A3\u6211\u4EEC\u53EF\u4EE5\u600E\u4E48\u89E3\u51B3\u5462\uFF1F\u5176\u5B9E\u6211\u4EEC\u53EA\u8981\u4F7F\u7528\u4E00\u4E2A\u72EC\u4E00\u65E0\u4E8C\u7684\u503C\u6765\u5F53\u505Akey\u5C31\u884C\u4E86</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;ul&gt;
   &lt;li v-for=&quot;item in list&quot; :key=&quot;item.id&quot;&gt;{{ item.title }}&lt;/li&gt;
&lt;/ul&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\u518D\u6765\u770B\u770B\u6548\u679C</p>`,3),ie={href:"https://mmbiz.qpic.cn/mmbiz/zPh0erYjkib3PLb4BjIpiaR4yk0chaEaCiaTYGxGEg2icriafZx6JI4xNBBX0uwzWqpQrdABHWPJKcCY4Hw9rWCFJUA/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},de=n("https://mmbiz.qpic.cn/mmbiz/zPh0erYjkib3PLb4BjIpiaR4yk0chaEaCiaTYGxGEg2icriafZx6JI4xNBBX0uwzWqpQrdABHWPJKcCY4Hw9rWCFJUA/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),le=e("p",null,[n("\u4E3A\u4EC0\u4E48\u7528\u4E86id\u6765\u5F53\u505Akey\u5C31\u5B9E\u73B0\u4E86\u6211\u4EEC\u7684\u7406\u60F3\u6548\u679C\u5462\uFF0C\u56E0\u4E3A\u8FD9\u4E48\u505A\u7684\u8BDD\uFF0C"),e("code",null,"a\uFF0Cb\uFF0Cc\u8282\u70B9"),n("\u7684"),e("code",null,"key"),n("\u5C31\u4F1A\u662F\u6C38\u8FDC\u4E0D\u53D8\u7684\uFF0C\u66F4\u65B0\u524D\u540Ekey\u90FD\u662F\u4E00\u6837\u7684\uFF0C\u5E76\u4E14\u53C8\u7531\u4E8E"),e("code",null,"a\uFF0Cb\uFF0Cc\u8282\u70B9"),n("\u7684\u5185\u5BB9\u672C\u6765\u5C31\u6CA1\u53D8\uFF0C")],-1),oe=e("p",null,[n("\u6240\u4EE5\u5C31\u7B97\u662F\u8FDB\u884C\u4E86"),e("code",null,"patchVnode"),n("\uFF0C\u4E5F\u4E0D\u4F1A\u6267\u884C\u91CC\u9762\u590D\u6742\u7684\u66F4\u65B0\u64CD\u4F5C\uFF0C\u8282\u7701\u4E86\u6027\u80FD\uFF0C\u800C\u6797\u4E09\u5FC3\u8282\u70B9\uFF0C\u7531\u4E8E\u66F4\u65B0\u524D\u6CA1\u6709\u4ED6\u7684key\u6240\u5BF9\u5E94\u7684\u8282\u70B9\uFF0C\u6240\u4EE5\u4ED6\u88AB\u5F53\u505A\u65B0\u7684\u8282\u70B9\uFF0C\u589E\u52A0\u5230\u771F\u5B9EDOM\u4E0A\u53BB\u4E86\u3002")],-1),te=e("p",null,[e("a",{href:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=="},"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==")],-1);function ae(se,ce){const i=s("ExternalLinkIcon");return t(),a("div",null,[r,e("p",null,[e("a",m,[v,d(i)])]),b,e("p",null,[e("a",u,[p,d(i)])]),h,e("p",null,[e("a",w,[x,d(i)])]),f,e("p",null,[e("a",g,[_,d(i)])]),V,e("p",null,[e("a",z,[E,d(i)])]),k,e("p",null,[e("a",y,[C,d(i)])]),I,S,e("p",null,[e("a",q,[A,d(i)])]),D,e("p",null,[e("a",O,[j,d(i)])]),B,e("p",null,[e("a",P,[M,d(i)])]),R,e("p",null,[e("a",Y,[L,d(i)])]),K,N,e("p",null,[e("a",H,[T,d(i)])]),W,e("p",null,[e("a",Q,[U,d(i)])]),G,J,e("p",null,[e("a",Z,[F,d(i)])]),X,e("p",null,[e("a",$,[ee,d(i)])]),ne,e("p",null,[e("a",ie,[de,d(i)])]),le,oe,te])}var ve=o(c,[["render",ae],["__file","10.Diff\u7B97\u6CD5.html.vue"]]);export{ve as default};
