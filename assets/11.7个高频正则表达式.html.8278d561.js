import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{o as d,c as r,a as e,d as i,e as a,b as s,r as c}from"./app.2017480b.js";const t={},o=a(`<h1 id="_7\u4E2A\u9AD8\u9891\u6B63\u5219\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#_7\u4E2A\u9AD8\u9891\u6B63\u5219\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> 7\u4E2A\u9AD8\u9891\u6B63\u5219\u8868\u8FBE\u5F0F</h1><h2 id="_1-\u63D0\u53D6\u8FDE\u7EED\u91CD\u590D\u7684\u5B57\u7B26" tabindex="-1"><a class="header-anchor" href="#_1-\u63D0\u53D6\u8FDE\u7EED\u91CD\u590D\u7684\u5B57\u7B26" aria-hidden="true">#</a> <strong>1.\u63D0\u53D6\u8FDE\u7EED\u91CD\u590D\u7684\u5B57\u7B26</strong></h2><blockquote><p>\u5E01\u5B89\u539F\u9898\xA0\u5C06\u6709\u91CD\u590D\u7684\u5B57\u7B26\u63D0\u53D6\u51FA\u6765\uFF0C\u4F8B\u598212323454545666\uFF0C\u63D0\u53D6[ &#39;23&#39;, &#39;45&#39;, &#39;6&#39; ]</p></blockquote><h3 id="\u6B63\u5219\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219\u7ED3\u679C" aria-hidden="true">#</a> <strong>\u6B63\u5219\u7ED3\u679C</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const collectRepeatStr = (str) =&gt; {
  let repeatStrs = []
  const repeatRe = /(.+)\\1+/g

  str.replace(repeatRe, ($0, $1) =&gt; {
    $1 &amp;&amp; repeatStrs.push($1)
  })

  return repeatStrs
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5206\u6790\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790\u8FC7\u7A0B" aria-hidden="true">#</a> <strong>\u5206\u6790\u8FC7\u7A0B</strong></h3><p>\u9898\u76EE\u4E2D\u6709\u51E0\u4E2A\u5173\u952E\u4FE1\u606F\u662F</p><ol><li>\u8FDE\u7EED\u91CD\u590D\u7684\u5B57\u7B26</li><li>\u8FDE\u7EED\u91CD\u590D\u7684\u5B57\u7B26\u6570\u7684\u957F\u5EA6\u662F\u4E0D\u9650\u7684\uFF08\u598223\u300145\u662F\u4E24\u4F4D\u30016\u662F\u4E00\u4F4D\uFF09</li></ol><p><code>\u90A3\u4EC0\u4E48\u662F\u8FDE\u7EED\u91CD\u590D\u5462\uFF1F</code></p><p>11\u662F\u8FDE\u7EED\u91CD\u590D\u300122\u4E5F\u662F\u8FDE\u7EED\u91CD\u590D\u3001111\u5F53\u7136\u4E5F\u662F\u3002\u4E5F\u5C31\u662F\u8BF4\u67D0\u4E9B\u5B57\u7B26X\u4E4B\u540E\u4E00\u5B9A\u4E5F\u662F\u8DDF\u7740X\uFF0C\u5C31\u53EB\u8FDE\u7EED\u91CD\u590D\u3002\u5982\u679C\u5F88\u660E\u786E\u77E5\u9053X\u5C31\u662F1\uFF0C\u90A3\u4E48<code>/11+/</code>\u4E5F\u5C31\u53EF\u4EE5\u5339\u914D\u4E86\uFF0C\u4F46\u5173\u952E\u662F\u8FD9\u91CC\u7684X\u662F\u4E0D\u660E\u786E\u7684\uFF0C\u600E\u4E48\u529E\u5462\uFF1F\u3002</p><p>\u4F7F\u7528<code>\u53CD\u5411\u5F15\u7528</code>\u7684\u6B63\u5219\u77E5\u8BC6\u53EF\u4EE5\u5F88\u65B9\u4FBF\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002</p><p><strong>\u7B2C\u4E00\u6B65\uFF0C\u5199\u51FA\u8868\u793A\u6709\u4E00\u4E2A\u5B57\u7B26\u91CD\u590D\u7684\u6B63\u5219</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u8FD9\u91CC\u7684X\u53EF\u7528.\u6765\u8868\u793A\uFF0C\u5373\u6240\u6709\u7684\u5B57\u7B26\uFF0C\u5E76\u7528\u62EC\u53F7\u8FDB\u884C\u5F15\u7528\uFF0C\u7D27\u8DDF\u7740\u53CD\u5411\u5E94\u7528\\1\uFF0C\u4E5F\u5C31\u662F\u4F53\u73B0\u4E86\u8FDE\u7EED\u91CD\u590D\u7684\u610F\u601D\u5566
let repeatRe = /(.)\\1/

console.log(repeatRe.test(&#39;11&#39;))// true
console.log(repeatRe.test(&#39;22&#39;))// true
console.log(repeatRe.test(&#39;333&#39;))// true
console.log(repeatRe.test(&#39;123&#39;))// false

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7B2C\u4E8C\u6B65\uFF0C\u5199\u51FA\u8868\u793A\u6709n\u4E2A\u5B57\u7B26\u91CD\u590D\u7684\u6B63\u5219</strong></p><p>\u56E0\u4E3A\u5E76\u4E0D\u786E\u5B9A\u662F\u8981\u5339\u914D11\u8FD8\u662F<code>45</code>\xA0<code>45</code>\u6240\u4EE5\u62EC\u53F7\u5185\u9700\u8981\u7528\u91CF\u8BCD+\u6765\u4F53\u73B0n\u4E2A\u91CD\u590D\u5B57\u7B26\uFF0C\u800C\u53CD\u5411\u5F15\u7528\u672C\u8EAB\u4E5F\u53EF\u4EE5\u662F\u5927\u4E8E\u4E00\u4E2A\u7684\uFF0C\u4F8B\u5982\xA0<code>4545</code>\xA0<code>45</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
let repeatRe = /(.+)\\1+/

console.log(repeatRe.test(&#39;11&#39;))// true
console.log(repeatRe.test(&#39;22&#39;))// true
console.log(repeatRe.test(&#39;333&#39;))// true
console.log(repeatRe.test(&#39;454545&#39;))// true
console.log(repeatRe.test(&#39;124&#39;))// false

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7B2C\u4E09\u6B65\uFF0C\u63D0\u53D6\u6240\u6709\u8FDE\u7EED\u91CD\u590D\u7684\u5B57\u7B26</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
const collectRepeatStr = (str) =&gt; {
  let repeatStrs = []
  const repeatRe = /(.+)\\1+/g
// \u5F88\u591A\u65F6\u5019replace\u5E76\u4E0D\u662F\u7528\u6765\u505A\u66FF\u6362\uFF0C\u800C\u662F\u505A\u6570\u636E\u63D0\u53D6\u7528
  str.replace(repeatRe, ($0, $1) =&gt; {
    $1 &amp;&amp; repeatStrs.push($1)
  })

  return repeatStrs
}

console.log(collectRepeatStr(&#39;11&#39;))// [&quot;1&quot;]
console.log(collectRepeatStr(&#39;12323&#39;))// [&quot;23&quot;]
console.log(collectRepeatStr(&#39;12323454545666&#39;))// [&quot;23&quot;, &quot;45&quot;, &quot;6&quot;]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u5B9E\u73B0\u4E00\u4E2Atrim\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_2-\u5B9E\u73B0\u4E00\u4E2Atrim\u51FD\u6570" aria-hidden="true">#</a> <strong>2. \u5B9E\u73B0\u4E00\u4E2Atrim\u51FD\u6570</strong></h2><blockquote><p>\u8001\u751F\u5E38\u8C08\u7684\u9898\u4E86\uFF0C\u8FD9\u91CC\u6211\u4EEC\u7528\u4E24\u79CD\u601D\u8DEF\u5B9E\u73B0\xA0\u53BB\u9664\u5B57\u7B26\u4E32\u7684\u9996\u5C3E\u7A7A\u683C</p></blockquote><h3 id="\u6B63\u5219\u7ED3\u679C-1" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219\u7ED3\u679C-1" aria-hidden="true">#</a> <strong>\u6B63\u5219\u7ED3\u679C</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u53BB\u9664\u7A7A\u683C\u6CD5
const trim = (str) =&gt; {
  return str.replace(/^\\s*|\\s*$/g, &#39;&#39;)
}
// \u63D0\u53D6\u975E\u7A7A\u683C\u6CD5
const trim = (str) =&gt; {
  return str.replace(/^\\s*(.*?)\\s*$/g, &#39;$1&#39;)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),m={href:"https://mmbiz.qpic.cn/mmbiz_png/d3KxlCFgM06nC2UicH5WEkmZgKnJaMYibz4TQM8dGzMRjiaNa7cKXX6ibGDribMnvnQ9mh3w5RSNeHwbHpyJZh0sR6g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},v=s("https://mmbiz.qpic.cn/mmbiz_png/d3KxlCFgM06nC2UicH5WEkmZgKnJaMYibz4TQM8dGzMRjiaNa7cKXX6ibGDribMnvnQ9mh3w5RSNeHwbHpyJZh0sR6g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),u=e("p",null,"image.png",-1),b={href:"https://mmbiz.qpic.cn/mmbiz_png/d3KxlCFgM06nC2UicH5WEkmZgKnJaMYibztc8EVgMnsQMOyw6xduBM2icfLAJVu36xsynJFepdLNZzUHBLvhEp9rA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},p=s("https://mmbiz.qpic.cn/mmbiz_png/d3KxlCFgM06nC2UicH5WEkmZgKnJaMYibztc8EVgMnsQMOyw6xduBM2icfLAJVu36xsynJFepdLNZzUHBLvhEp9rA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),g=a(`<p>image.png</p><h3 id="\u5206\u6790\u8FC7\u7A0B-1" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790\u8FC7\u7A0B-1" aria-hidden="true">#</a> <strong>\u5206\u6790\u8FC7\u7A0B</strong></h3><p>\u521D\u770B\u9898\u76EE\u6211\u4EEC\u8111\u6D77\u4E2D\u95EA\u8FC7\u7684\u505A\u6CD5\u662F\u628A<code>\u7A7A\u683C\u90E8\u5206\u5220\u9664\u6389\uFF0C\u4FDD\u7559\u975E\u7A7A\u683C\u7684\u90E8\u5206</code>\uFF0C\u4F46\u662F\u4E5F\u53EF\u4EE5\u6362\u4E00\u79CD\u601D\u8DEF\uFF0C\u4E5F\u53EF\u4EE5\u628A\u975E\u7A7A\u683C\u7684\u90E8\u5206\u63D0\u53D6\u51FA\u6765\uFF0C\u4E0D\u7BA1\u7A7A\u683C\u7684\u90E8\u5206\u3002\u63A5\u4E0B\u6765\u6211\u4EEC\u6765\u5199\u4E00\u4E0B\u4E24\u79CDtrim\u65B9\u6CD5\u7684\u5B9E\u73B0</p><p><strong>\u65B9\u5F0F\u4E00\u3001\u53BB\u9664\u7A7A\u683C\u6CD5</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
const trim = (str) =&gt; {
  return str.replace(/^\\s*|\\s*$/g, &#39;&#39;)
}

console.log(trim(&#39;  \u524D\u7AEF\u80D6\u5934\u9C7C&#39;))// \u524D\u7AEF\u80D6\u5934\u9C7C
console.log(trim(&#39;\u524D\u7AEF\u80D6\u5934\u9C7C  &#39;))// \u524D\u7AEF\u80D6\u5934\u9C7C
console.log(trim(&#39;  \u524D\u7AEF\u80D6\u5934\u9C7C  &#39;))// \u524D\u7AEF\u80D6\u5934\u9C7C
console.log(trim(&#39;  \u524D\u7AEF \u80D6\u5934\u9C7C  &#39;))// \u524D\u7AEF \u80D6\u5934\u9C7C

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u65B9\u5F0F\u4E8C\u3001\u63D0\u53D6\u975E\u7A7A\u683C\u6CD5</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
const trim = (str) =&gt; {
  return str.replace(/^\\s*(.*?)\\s*$/g, &#39;$1&#39;)
}

console.log(trim(&#39;  \u524D\u7AEF\u80D6\u5934\u9C7C&#39;))// \u524D\u7AEF\u80D6\u5934\u9C7C
console.log(trim(&#39;\u524D\u7AEF\u80D6\u5934\u9C7C  &#39;))// \u524D\u7AEF\u80D6\u5934\u9C7C
console.log(trim(&#39;  \u524D\u7AEF\u80D6\u5934\u9C7C  &#39;))// \u524D\u7AEF\u80D6\u5934\u9C7C
console.log(trim(&#39;  \u524D\u7AEF \u80D6\u5934\u9C7C  &#39;))// \u524D\u7AEF \u80D6\u5934\u9C7C

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u6570\u5B57\u4EF7\u683C\u5343\u5206\u4F4D\u5206\u5272" tabindex="-1"><a class="header-anchor" href="#_3-\u6570\u5B57\u4EF7\u683C\u5343\u5206\u4F4D\u5206\u5272" aria-hidden="true">#</a> <strong>3. \u6570\u5B57\u4EF7\u683C\u5343\u5206\u4F4D\u5206\u5272</strong></h2><blockquote><p>\u5C06123456789\u53D8\u6210123,456,789</p></blockquote><p><code>\u8FD9\u9053\u9898\u4F30\u8BA1\u5927\u5BB6\u5728\u9762\u8BD5\u548C\u5DE5\u4F5C\u4E2D\u4E5F\u7ECF\u5E38\u9047\u5230\uFF0C\u51FA\u73B0\u9891\u7387\u6BD4\u8F83\u9AD8\u3002</code></p><h3 id="\u6B63\u5219\u7ED3\u679C-2" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219\u7ED3\u679C-2" aria-hidden="true">#</a> <strong>\u6B63\u5219\u7ED3\u679C</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&#39;123456789&#39;.replace(/(?!^)(?=(\\d{3})+$)/g, &#39;,&#39;)// 123,456,789

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,12),h={href:"https://mmbiz.qpic.cn/mmbiz_png/d3KxlCFgM06nC2UicH5WEkmZgKnJaMYibzkYovcCXZyYb573DYImnE1ibcJM5EEPeXtwnzgrq3VH4xFqI2eFExraQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},x=s("https://mmbiz.qpic.cn/mmbiz_png/d3KxlCFgM06nC2UicH5WEkmZgKnJaMYibzkYovcCXZyYb573DYImnE1ibcJM5EEPeXtwnzgrq3VH4xFqI2eFExraQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),_=e("p",null,"image.png",-1),w=e("p",null,[e("strong",null,"\u8865\u5145\u5C0F\u6570\u5343\u5206\u4F4D\u652F\u6301")],-1),f={href:"https://mmbiz.qpic.cn/mmbiz_png/d3KxlCFgM06nC2UicH5WEkmZgKnJaMYibz509qRBfMWNoHDdDEZaLhrODJ3FVibXHQrpU5FtibuFJibKDGPVjsYfLfA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},z=s("https://mmbiz.qpic.cn/mmbiz_png/d3KxlCFgM06nC2UicH5WEkmZgKnJaMYibz509qRBfMWNoHDdDEZaLhrODJ3FVibXHQrpU5FtibuFJibKDGPVjsYfLfA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),q=a(`<p>carbon.png</p><h3 id="\u5206\u6790\u8FC7\u7A0B-2" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790\u8FC7\u7A0B-2" aria-hidden="true">#</a> <strong>\u5206\u6790\u8FC7\u7A0B</strong></h3><p>\u9898\u76EE\u610F\u601D\u5927\u6982\u662F\uFF1A</p><ol><li>\u4ECE\u540E\u5F80\u524D<code>\u6BCF\u4E09\u4E2A\u6570\u5B57</code>\u524D\u52A0\u4E00\u4E2A\u9017\u53F7</li><li>\u5F00\u5934\u4E0D\u80FD\u52A0\u9017\u53F7(\u6BD4\u5982\uFF1A<code>123</code>\xA0\u6700\u540E\u4E0D\u80FD\u53D8\u6210<code>,123</code>)</li></ol><p>\u662F\u4E0D\u662F\u5F88\u7B26\u5408(?=p)\u7684\u89C4\u5F8B\u5462\uFF1Fp\u53EF\u4EE5\u8868\u793A\u6BCF\u4E09\u4E2A\u6570\u5B57\uFF0C\u8981\u6DFB\u52A0\u7684\u9017\u53F7\u6240\u5904\u7684\u4F4D\u7F6E\u6B63\u597D\u662F(?=p)\u5339\u914D\u51FA\u6765\u7684\u4F4D\u7F6E\u3002</p><p><strong>\u7B2C\u4E00\u6B65\uFF0C\u5C1D\u8BD5\u5148\u628A\u540E\u9762\u7B2C\u4E00\u4E2A\u9017\u53F7\u5F04\u51FA\u6765</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
let price = &#39;123456789&#39;
let priceReg = /(?=\\d{3}$)/

console.log(price.replace(proceReg, &#39;,&#39;))// 123456,789

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7B2C\u4E8C\u6B65\uFF0C\u628A\u6240\u6709\u7684\u9017\u53F7\u90FD\u5F04\u51FA\u6765</strong></p><p>\u8981\u628A\u6240\u6709\u7684\u9017\u53F7\u90FD\u5F04\u51FA\u6765\uFF0C\u4E3B\u8981\u8981\u89E3\u51B3\u7684\u95EE\u9898\u662F\u600E\u4E48\u8868\u793A<code>\u4E09\u4E2A\u6570\u5B57\u4E00\u7EC4</code>,\u4E5F\u5C31\u662F3\u7684\u500D\u6570\u3002\u6211\u4EEC\u77E5\u9053\u6B63\u5219\u4E2D\u62EC\u53F7\u53EF\u4EE5\u628A\u4E00\u4E2Ap\u6A21\u5F0F\u53D8\u6210\u4E00\u4E2A\u5C0F\u6574\u4F53\uFF0C\u6240\u4EE5\u5229\u7528\u62EC\u53F7\u7684\u7279\u6027\uFF0C\u53EF\u4EE5\u8FD9\u6837\u5199</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
let price = &#39;123456789&#39;
let priceReg = /(?=(\\d{3})+$)/g

console.log(price.replace(priceReg, &#39;,&#39;))// ,123,456,789

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7B2C\u4E09\u6B65\uFF0C\u53BB\u6389\u9996\u4F4D\u7684\u9017\u53F7\uFF0C</strong></p><p>\u4E0A\u9762\u5DF2\u7ECF\u57FA\u672C\u4E0A\u5B9E\u73B0\u9700\u6C42\u4E86\uFF0C\u4F46\u662F\u8FD8\u4E0D\u591F\uFF0C\u9996\u4F4D\u8FD8\u4F1A\u51FA\u73B0\u9017\u53F7\uFF0C\u90A3\u600E\u4E48\u628A\u9996\u4F4D\u7684\u9017\u53F7\u53BB\u9664\u5462\uFF1F\u60F3\u60F3\u662F\u4E0D\u662F\u6709\u4E00\u4E2A\u77E5\u8BC6\u6B63\u597D\u6EE1\u8DB3\u8FD9\u4E2A\u573A\u666F\uFF1F\u6CA1\u9519(?!p)\uFF0C\u5C31\u662F\u4ED6\u4E86\uFF0C\u4E24\u8005\u7ED3\u5408\u5C31\u662F\u4ECE\u540E\u5F80\u524D\u6BCF\u4E09\u4E2A\u6570\u5B57\u7684\u4F4D\u7F6E\u524D\u6DFB\u52A0\u9017\u53F7\uFF0C\u4F46\u662F\u8FD9\u4E2A\u4F4D\u7F6E\u4E0D\u80FD\u662F^\u9996\u4F4D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
let price = &#39;123456789&#39;
let priceReg = /(?!^)(?=(\\d{3})+$)/g

console.log(price.replace(priceReg, &#39;,&#39;))// 123,456,789

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u624B\u673A\u53F73-4-4\u5206\u5272" tabindex="-1"><a class="header-anchor" href="#_4-\u624B\u673A\u53F73-4-4\u5206\u5272" aria-hidden="true">#</a> <strong>4. \u624B\u673A\u53F73-4-4\u5206\u5272</strong></h2><blockquote><p>\u5C06\u624B\u673A\u53F718379836654\u8F6C\u5316\u4E3A183-7983-6654</p></blockquote><p><code>\u8868\u5355\u641C\u96C6\u573A\u666F\uFF0C\u7ECF\u5E38\u9047\u5230\u7684\u624B\u673A\u683C\u5F0F\u5316</code></p><h3 id="\u6B63\u5219\u7ED3\u679C-3" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219\u7ED3\u679C-3" aria-hidden="true">#</a> <strong>\u6B63\u5219\u7ED3\u679C</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let mobile = &#39;18379836654&#39;
let mobileReg = /(?=(\\d{4})+$)/g

console.log(mobile.replace(mobileReg, &#39;-&#39;))// 183-7983-6654

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),y={href:"https://mmbiz.qpic.cn/mmbiz_png/d3KxlCFgM06nC2UicH5WEkmZgKnJaMYibzoOtywZ7w64NwTCNHmtW02bia1icfLwicFswTAuhZDAbzvddmuk4eiabMyw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},R=s("https://mmbiz.qpic.cn/mmbiz_png/d3KxlCFgM06nC2UicH5WEkmZgKnJaMYibzoOtywZ7w64NwTCNHmtW02bia1icfLwicFswTAuhZDAbzvddmuk4eiabMyw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),C=a(`<p>image.png</p><h3 id="\u5206\u6790\u8FC7\u7A0B-3" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790\u8FC7\u7A0B-3" aria-hidden="true">#</a> <strong>\u5206\u6790\u8FC7\u7A0B</strong></h3><p>\u6709\u4E86\u4E0A\u9762\u6570\u5B57\u7684\u5343\u5206\u4F4D\u5206\u5272\u6CD5\uFF0C\u505A\u8FD9\u4E2A\u9898\u76F8\u4FE1\u4F1A\u7B80\u5355\u5F88\u591A\uFF0C\u4E5F\u5C31\u662F\u4ECE\u540E\u5F80\u524D\u627E\u5230\u8FD9\u6837\u7684\u4F4D\u7F6E\uFF1A</p><p>\u6BCF\u56DB\u4E2A\u6570\u5B57\u524D\u7684\u4F4D\u7F6E\uFF0C\u5E76\u628A\u8FD9\u4E2A\u4F4D\u7F6E\u66FF\u6362\u4E3A-</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
let mobile = &#39;18379836654&#39;
let mobileReg = /(?=(\\d{4})+$)/g

console.log(mobile.replace(mobileReg, &#39;-&#39;))// 183-7983-6654

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u5C06\u5B57\u7B26\u4E32\u9A7C\u5CF0\u5316" tabindex="-1"><a class="header-anchor" href="#_5-\u5C06\u5B57\u7B26\u4E32\u9A7C\u5CF0\u5316" aria-hidden="true">#</a> <strong>5. \u5C06\u5B57\u7B26\u4E32\u9A7C\u5CF0\u5316</strong></h2><blockquote><p>\u5982\u4E0B\u89C4\u5219\uFF0C\u5C06\u5BF9\u5E94\u5B57\u7B26\u4E32\u53D8\u6210\u9A7C\u5CF0\u5199\u6CD5</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. foo Bar =&gt; fooBar

2. foo-bar---- =&gt; fooBar

3. foo_bar__ =&gt; fooBar

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6B63\u5219\u7ED3\u679C-4" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219\u7ED3\u679C-4" aria-hidden="true">#</a> <strong>\u6B63\u5219\u7ED3\u679C</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const camelCase = (string) =&gt; {
  const camelCaseRegex = /[-_\\s]+(.)?/g

  return string.replace(camelCaseRegex, (match, char) =&gt; {
    return char ? char.toUpperCase() : &#39;&#39;
  })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),M={href:"https://mmbiz.qpic.cn/mmbiz_png/d3KxlCFgM06nC2UicH5WEkmZgKnJaMYibzvznS6icmAd7pFM80D21YficEcZD5lnmkicB36jmNsgyWjxVyjIZPJiat3w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},k=s("https://mmbiz.qpic.cn/mmbiz_png/d3KxlCFgM06nC2UicH5WEkmZgKnJaMYibzvznS6icmAd7pFM80D21YficEcZD5lnmkicB36jmNsgyWjxVyjIZPJiat3w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),E=a(`<p>image.png</p><h3 id="\u5206\u6790\u8FC7\u7A0B-4" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790\u8FC7\u7A0B-4" aria-hidden="true">#</a> <strong>\u5206\u6790\u8FC7\u7A0B</strong></h3><p>\u5206\u6790\u9898\u76EE\u7684\u89C4\u5F8B</p><ol><li>\u6BCF\u4E2A\u5355\u8BCD\u7684\u524D\u9762\u90FD\u6709<strong>0\u4E2A\u6216\u8005\u591A\u4E2A</strong>\`\`\xA0<code>\u7A7A\u683C</code>\xA0<code>_</code>\xA0\u5982(<code>Foo</code>\u3001<code>-foo</code>\u3001<code>__FOO</code>\u3001<code>_BAR</code>\u3001<code>Bar</code>)</li><li>\`\`\xA0<code>\u7A7A\u683C</code>\xA0<code>_</code>\u540E\u9762\u6709\u53EF\u80FD\u4E0D\u8DDF\u4EFB\u4F55\u4E1C\u897F \u5982(<code>__</code>\u3001<code>-</code>)</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const camelCase = (string) =&gt; {
// \u6CE8\u610F(.)?\u8FD9\u91CC\u7684?\u662F\u4E3A\u4E86\u6EE1\u8DB3\u6761\u4EF62
  const camelCaseRegex = /[-_\\s]+(.)?/g

  return string.replace(camelCaseRegex, (match, char) =&gt; {
    return char ? char.toUpperCase() : &#39;&#39;
  })
}

console.log(camelCase(&#39;foo Bar&#39;))// fooBar
console.log(camelCase(&#39;foo-bar--&#39;))// fooBar
console.log(camelCase(&#39;foo_bar__&#39;))// fooBar

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-\u5C06\u5B57\u7B26\u4E32\u9996\u5B57\u6BCD\u8F6C\u5316\u4E3A\u5927\u5199-\u5269\u4E0B\u4E3A\u5C0F\u5199" tabindex="-1"><a class="header-anchor" href="#_6-\u5C06\u5B57\u7B26\u4E32\u9996\u5B57\u6BCD\u8F6C\u5316\u4E3A\u5927\u5199-\u5269\u4E0B\u4E3A\u5C0F\u5199" aria-hidden="true">#</a> <strong>6. \u5C06\u5B57\u7B26\u4E32\u9996\u5B57\u6BCD\u8F6C\u5316\u4E3A\u5927\u5199\uFF0C\u5269\u4E0B\u4E3A\u5C0F\u5199</strong></h2><blockquote><p>\u4F8B\u5982 hello world \u8F6C\u4E3A\u4E3AHello World</p></blockquote><h3 id="\u6B63\u5219\u7ED3\u679C-5" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219\u7ED3\u679C-5" aria-hidden="true">#</a> <strong>\u6B63\u5219\u7ED3\u679C</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
const capitalize = (string) =&gt; {
  const capitalizeRegex = /(?:^|\\s+)\\w/g

  return string.toLowerCase().replace(capitalizeRegex, (match) =&gt; match.toUpperCase())
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),F={href:"https://mmbiz.qpic.cn/mmbiz_png/d3KxlCFgM06nC2UicH5WEkmZgKnJaMYibzKh5Iw7biagyzeTmZbecicP4VX1kPBu4vve5PaGicBzLCfAFJAqAqeGuqA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},K=s("https://mmbiz.qpic.cn/mmbiz_png/d3KxlCFgM06nC2UicH5WEkmZgKnJaMYibzKh5Iw7biagyzeTmZbecicP4VX1kPBu4vve5PaGicBzLCfAFJAqAqeGuqA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),N=a(`<p>image.png</p><h3 id="\u5206\u6790\u8FC7\u7A0B-5" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790\u8FC7\u7A0B-5" aria-hidden="true">#</a> <strong>\u5206\u6790\u8FC7\u7A0B</strong></h3><p>\u627E\u5230\u5355\u8BCD\u7684\u9996\u5B57\u6BCD\u7136\u540E\u5C06\u5176\u8F6C\u5316\u4E3A\u5927\u5199\u5B57\u6BCD\u5C31\u53EF\u4EE5\uFF0C\u5355\u8BCD\u524D\u9762\u53EF\u80FD\u662F<code>\u5F00\u5934</code>\u4E5F\u53EF\u80FD\u662F<code>\u591A\u4E2A\u7A7A\u683C</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
const capitalize = (string) =&gt; {
  const capitalizeRegex = /(?:^|\\s+)\\w/g

  return string.toLowerCase().replace(capitalizeRegex, (match) =&gt; match.toUpperCase())
}

console.log(capitalize(&#39;hello world&#39;))// Hello World
console.log(capitalize(&#39;hello WORLD&#39;))// Hello World

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-\u901A\u8FC7name\u83B7\u53D6url-query\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_7-\u901A\u8FC7name\u83B7\u53D6url-query\u53C2\u6570" aria-hidden="true">#</a> <strong>7.\u901A\u8FC7name\u83B7\u53D6url query\u53C2\u6570</strong></h2><h3 id="\u6B63\u5219\u7ED3\u679C-6" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219\u7ED3\u679C-6" aria-hidden="true">#</a> <strong>\u6B63\u5219\u7ED3\u679C</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const getQueryByName = (name) =&gt; {
  const queryNameRegex = new RegExp(\`[?&amp;]\${name}=([^&amp;]*)(&amp;|$)\`)
  const queryNameMatch = window.location.search.match(queryNameRegex)
// \u4E00\u822C\u90FD\u4F1A\u901A\u8FC7decodeURIComponent\u89E3\u7801\u5904\u7406
  return queryNameMatch ? decodeURIComponent(queryNameMatch[1]) : &#39;&#39;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5206\u6790\u8FC7\u7A0B-6" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790\u8FC7\u7A0B-6" aria-hidden="true">#</a> <strong>\u5206\u6790\u8FC7\u7A0B</strong></h3><p>url query\u4E0A\u7684\u53C2\u6570\xA0<code>name=\u524D\u7AEF\u80D6\u5934\u9C7C</code>\xA0\u6240\u5904\u7684\u4F4D\u7F6E\u53EF\u80FD\u662F</p><ol><li><code>\u7D27\u8DDF\u7740\u95EE\u53F7</code>\xA0?name=\u524D\u7AEF\u80D6\u5934\u9C7C&amp;sex=boy</li><li><code>\u5728\u6700\u540E\u7684\u4F4D\u7F6E</code>\xA0?sex=boy&amp;name=\u524D\u7AEF\u80D6\u5934\u9C7C</li><li><code>\u57281\u548C2\u4E4B\u95F4</code>\xA0?sex=boy&amp;name=\u524D\u7AEF\u80D6\u5934\u9C7C&amp;age=100</li></ol><p>\u6240\u4EE5\u53EA\u8981\u5904\u7406\u4E09\u4E2A\u5730\u65B9\u57FA\u672C\u5C31\u53EF\u4EE5\u901A\u8FC7\u6B63\u5219\u6765\u53D6\u4E86</p><ol><li>name\u524D\u9762\u53EA\u80FD\u662F?\u6216\u8005&amp;</li><li>value\u7684\u503C\u53EF\u4EE5\u9664\u4E86\u662F&amp;\u4EE5\u4E3A\u7684\u4EFB\u610F\u4E1C\u897F</li><li>value\u540E\u9762\u53EA\u80FD\u662F\u8DDF\u7740&amp;\u6216\u8005\u662F\u7ED3\u675F\u4F4D\u7F6E</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
const getQueryByName = (name) =&gt; {
  const queryNameRegex = new RegExp(\`[?&amp;]\${name}=([^&amp;]*)(?:&amp;|$)\`)
  const queryNameMatch = window.location.search.match(queryNameRegex)
// \u4E00\u822C\u90FD\u4F1A\u901A\u8FC7decodeURIComponent\u89E3\u7801\u5904\u7406
  return queryNameMatch ? decodeURIComponent(queryNameMatch[1]) : &#39;&#39;
}
// 1. name\u5728\u6700\u524D\u9762
// https://juejin.cn/?name=\u524D\u7AEF\u80D6\u5934\u9C7C&amp;sex=boy
console.log(getQueryByName(&#39;name&#39;))// \u524D\u7AEF\u80D6\u5934\u9C7C

// 2. name\u5728\u6700\u540E
// https://juejin.cn/?sex=boy&amp;name=\u524D\u7AEF\u80D6\u5934\u9C7C
console.log(getQueryByName(&#39;name&#39;))// \u524D\u7AEF\u80D6\u5934\u9C7C

// 2. name\u5728\u4E2D\u95F4
// https://juejin.cn/?sex=boy&amp;name=\u524D\u7AEF\u80D6\u5934\u9C7C&amp;age=100
console.log(getQueryByName(&#39;name&#39;))// \u524D\u7AEF\u80D6\u5934\u9C7C

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function Z(H,B){const n=c("ExternalLinkIcon");return d(),r("div",null,[o,e("p",null,[e("a",m,[v,i(n)])]),u,e("p",null,[e("a",b,[p,i(n)])]),g,e("p",null,[e("a",h,[x,i(n)])]),_,w,e("p",null,[e("a",f,[z,i(n)])]),q,e("p",null,[e("a",y,[R,i(n)])]),C,e("p",null,[e("a",M,[k,i(n)])]),E,e("p",null,[e("a",F,[K,i(n)])]),N])}var W=l(t,[["render",Z],["__file","11.7\u4E2A\u9AD8\u9891\u6B63\u5219\u8868\u8FBE\u5F0F.html.vue"]]);export{W as default};
