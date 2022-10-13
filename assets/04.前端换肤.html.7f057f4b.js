import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c as a,a as e,d as s,b as i,e as l,r as t}from"./app.6533dd40.js";const c={},v=e("h1",{id:"\u524D\u7AEF\u6362\u80A4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u524D\u7AEF\u6362\u80A4","aria-hidden":"true"},"#"),i(" \u524D\u7AEF\u6362\u80A4")],-1),o=e("p",null,[e("strong",null,"\u524D\u8A00")],-1),m=e("p",null,[i("\u73B0\u5728\u8D8A\u6765\u8D8A\u591A\u7684\u7F51\u7AD9\u90FD\u63D0\u4F9B\u4E86\u62E5\u6709\u6362\u80A4\uFF08\u5207\u6362\u4E3B\u9898\uFF09\u529F\u80FD\uFF0C\u5982\xA0"),e("strong",null,"ElementUI[2]"),i("\uFF0C\u65E2\u662F\u4E3A\u4E86\u8FCE\u5408\u7528\u6237\u9700\u6C42\uFF0C\u6216\u662F\u4E3A\u4E86\u51F8\u663E\u81EA\u5DF1\u7279\u70B9\uFF0C\u56E0\u6B64\u63D0\u4F9B\u4E86\u4E2A\u6027\u5316\u5B9A\u5236\u7684\u529F\u80FD.")],-1),b=e("p",null,"\u5176\u5B9E\u4E4B\u524D\u5C31\u60F3\u4E86\u89E3\u548C\u5B9E\u73B0 \u201C\u4E00\u952E\u6362\u80A4\u201D \u529F\u80FD\uFF0C\u4F46\u662F\u7531\u4E8E\u79CD\u79CD\u539F\u56E0\u4E00\u76F4\u62D6\u5230\u4E86\u73B0\u5728.",-1),u={href:"https://mmbiz.qpic.cn/mmbiz/pfCCZhlbMQTSNib7jkNzYAz8O7NOdbH4INI43DcdQ7FzF8o3nHd90TZznACpkMEcSLicjqCpyhDxD55WOWbqsh5w/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},h=i("https://mmbiz.qpic.cn/mmbiz/pfCCZhlbMQTSNib7jkNzYAz8O7NOdbH4INI43DcdQ7FzF8o3nHd90TZznACpkMEcSLicjqCpyhDxD55WOWbqsh5w/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),p=l(`<p>skin.gif</p><h1 id="css-\u6837\u5F0F\u8986\u76D6\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#css-\u6837\u5F0F\u8986\u76D6\u5B9E\u73B0" aria-hidden="true">#</a> <strong>CSS \u6837\u5F0F\u8986\u76D6\u5B9E\u73B0</strong></h1><h2 id="\u6838\u5FC3" tabindex="-1"><a class="header-anchor" href="#\u6838\u5FC3" aria-hidden="true">#</a> <strong>\u6838\u5FC3</strong></h2><p>\u901A\u8FC7\u5207\u6362\xA0<code>css</code>\xA0\u9009\u62E9\u5668\u7684\u65B9\u5F0F\u5B9E\u73B0\u4E3B\u9898\u6837\u5F0F\u7684\u5207\u6362.</p><ul><li>\u5728\u7EC4\u4EF6\u4E2D\u4FDD\u7559\u4E0D\u53D8\u7684\u6837\u5F0F\uFF0C\u5C06\u9700\u8981\u53D8\u5316\u7684\u6837\u5F0F\u8FDB\u884C\u62BD\u79BB</li><li>\u63D0\u4F9B\u591A\u79CD\u6837\u5F0F\uFF0C\u7ED9\u4E0D\u540C\u7684\u4E3B\u9898\u5B9A\u4E49\u4E00\u4E2A\u5BF9\u5E94\u7684 CSS \u9009\u62E9\u5668</li><li>\u6839\u636E\u4E0D\u540C\u4E3B\u9898\u8BBE\u7F6E\u4E0D\u540C\u7684\u6837\u5F0F</li></ul><h2 id="\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0" aria-hidden="true">#</a> <strong>\u5B9E\u73B0</strong></h2><p>\u4E0B\u9762\u901A\u8FC7\xA0<code>vuex</code>\xA0\u5B58\u50A8\u548C\u63A7\u5236\u5168\u5C40\u7684\u4E3B\u9898\u8272\uFF0C\u5176\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { createStore } from &#39;vuex&#39;

// \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 store \u5B9E\u4F8B
const store = createStore({
  state () {
    return {
      theme: &#39;light&#39;
    }
  },
  mutations: {
    setTheme (state, payload) {
      state.theme = payload
      document.querySelector(&#39;body&#39;).className = payload
    }
  }
})

export default store
\u590D\u5236\u4EE3\u7801

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\xA0<code>template</code>\xA0\u6A21\u677F\u4E2D\u901A\u8FC7\xA0<code>vuex</code>\xA0\u4E2D\u7684\u4E3B\u9898\u8BBE\u7F6E\u5BF9\u5E94\u7C7B\u540D\uFF0C\u5982\u5934\u90E8\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;template&gt;
  &lt;div :class=&quot;[&#39;header&#39;, store.state.theme]&quot;&gt;
    &lt;span&gt;{{title}}&lt;/span&gt;
    &lt;input v-model=&quot;checked&quot; type=&quot;checkbox&quot; class=&quot;switch&quot; @change=&quot;changeTheme&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;
\u590D\u5236\u4EE3\u7801

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\xA0<code>theme.css</code>\xA0\u4E2D\u901A\u8FC7\xA0<code>.light</code>\xA0\u548C\xA0<code>.dark</code>\xA0\u4E24\u4E2A\u7C7B\u9009\u62E9\u5668\u6765\u533A\u5206\u660E\u4EAE\u4E3B\u9898\u548C\u6697\u9ED1\u4E3B\u9898\uFF0C\u5E76\u4E14\u4E8B\u5148\u51C6\u5907\u4E86\u5B83\u4EEC\u5BF9\u5E94\u7684\u6837\u5F0F\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/* light \u9ED8\u8BA4\u4E3B\u9898*/
body.light {
  background-color: #fff;
}

.header.light {
  background-color: #fff;
  border-bottom: 1px solid #d6d6d6;
  color: rgb(51, 50, 50);
}

.list.light .title {
  color: rgb(51, 50, 50);
}
.list.light .describe{
  color: rgb(158, 158, 158);
}

.list.light .left{
  border: 1px solid rgb(51, 50, 50);
}

/* dark \u6697\u9ED1\u4E3B\u9898 */
body.dark {
  background-color: rgb(51, 50, 50);
}

.header.dark {
  background-color: rgb(51, 50, 50);
  border-bottom: 1px solid #fff;
  color: #fff;
}

.list.dark .title {
  color: #fff;
}
.list.dark .describe{
  color: rgb(201, 201, 201);
}
.list.dark .left{
  border: 1px solid #fff;
  background-color: #fff;
}
\u590D\u5236\u4EE3\u7801

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u70B9" aria-hidden="true">#</a> <strong>\u7F3A\u70B9</strong></h2><ul><li>\u591A\u79CD\u4E3B\u9898\u6837\u5F0F\u90FD\u8981\u5F15\u5165\uFF0C\u5BFC\u81F4\u4EE3\u7801\u91CF\u589E\u5927</li><li>\u6837\u5F0F\u4E0D\u6613\u7BA1\u7406</li><li>\u67E5\u627E\u6837\u5F0F\u590D\u6742</li><li>\u5F00\u53D1\u6548\u7387\u4F4E</li><li>\u62D3\u5C55\u6027\u5DEE</li><li>...</li></ul><h1 id="\u5B9E\u73B0\u591A\u5957-css-\u4E3B\u9898\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u591A\u5957-css-\u4E3B\u9898\u6837\u5F0F" aria-hidden="true">#</a> <strong>\u5B9E\u73B0\u591A\u5957 CSS \u4E3B\u9898\u6837\u5F0F</strong></h1><h2 id="\u6838\u5FC3-1" tabindex="-1"><a class="header-anchor" href="#\u6838\u5FC3-1" aria-hidden="true">#</a> <strong>\u6838\u5FC3</strong></h2><p>\u5B9E\u73B0\u591A\u5957 CSS \u4E3B\u9898\u6837\u5F0F\uFF0C\u6839\u636E\u7528\u6237\u5207\u6362\u64CD\u4F5C\uFF0C\u901A\u8FC7\xA0<code>link</code>\xA0\u6807\u7B7E\u52A8\u6001\u52A0\u8F7D\u4E0D\u540C\u7684\u4E3B\u9898\u6837\u5F0F\uFF0C\u4E3B\u8981\u89E3\u51B3\u4E86\u591A\u4E2A\u4E3B\u9898\u8272\u88AB\u7F16\u8BD1\u5230\u4E00\u4E2A\u6587\u4EF6\u4E2D\u5BFC\u81F4\u5355\u4E2A\u6587\u4EF6\u8FC7\u5927.</p><h2 id="\u5B9E\u73B0-1" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0-1" aria-hidden="true">#</a> <strong>\u5B9E\u73B0</strong></h2><p>css \u90E8\u5206\u76F4\u63A5\u62C6\u5206\u6210\xA0<code>ligth.css</code>\xA0\u548C\xA0<code>dark.css</code>\xA0\u4E24\u4E2A\u6587\u4EF6\uFF1A</p>`,19),g={href:"https://mmbiz.qpic.cn/mmbiz/pfCCZhlbMQTSNib7jkNzYAz8O7NOdbH4II9IKKCSczSPpibQySMZhjrhhziam4h8uiclicIxibylDRwmCwy2ia9hz3DEQ/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},f=i("https://mmbiz.qpic.cn/mmbiz/pfCCZhlbMQTSNib7jkNzYAz8O7NOdbH4II9IKKCSczSPpibQySMZhjrhhziam4h8uiclicIxibylDRwmCwy2ia9hz3DEQ/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),x=l(`<p>image.png</p><p>\u8BBE\u7F6E\u4E3B\u9898\u90E8\u5206\u7684\xA0<code>setTheme.js</code>\xA0\u4EE3\u7801\u5982\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export default function setTheme(theme = &#39;ligth&#39;) {
  let link = document.querySelector(&#39;#theme-link&#39;)
  let href = &quot;/theme/&quot; + theme + &quot;.css&quot;

  if (!link) {
    let head = document.querySelector(&#39;head&#39;)
    link = document.createElement(&#39;link&#39;)
    link.id = &#39;#theme-link&#39;
    link.rel = &quot;stylesheet&quot;
    link.href = href
    head.appendChild(link)
  } else {
    link.href = href
  }
}
\u590D\u5236\u4EE3\u7801

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7F3A\u70B9-1" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u70B9-1" aria-hidden="true">#</a> <strong>\u7F3A\u70B9</strong></h2><ul><li>\u9700\u8981\u91CD\u590D CV \u591A\u4EFD\u6837\u5F0F\u6587\u4EF6\u8FDB\u884C\u5355\u72EC\u4FEE\u6539</li><li>\u6CA1\u6709\u5355\u72EC\u63D0\u53D6\u51FA\u53EF\u53D8\u7684\u6837\u5F0F\u90E8\u5206</li><li>\u9700\u8981\u63D0\u524D\u77E5\u9053\u6253\u5305\u540E\u7684\u6587\u4EF6\u8DEF\u5F84\uFF0C\u5426\u5219\u53EF\u80FD\u5BFC\u81F4\u4E3B\u9898\u6837\u5F0F\u5F15\u5165\u9519\u8BEF</li><li>...</li></ul><h1 id="css-\u53D8\u91CF\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#css-\u53D8\u91CF\u5B9E\u73B0" aria-hidden="true">#</a> <strong>CSS \u53D8\u91CF\u5B9E\u73B0</strong></h1><h2 id="\u6838\u5FC3-2" tabindex="-1"><a class="header-anchor" href="#\u6838\u5FC3-2" aria-hidden="true">#</a> <strong>\u6838\u5FC3</strong></h2><p>\u901A\u8FC7\xA0<code>body.style.setProperty(key, value)</code>\xA0\u52A8\u6001\u4FEE\u6539\xA0<code>body</code>\xA0\u4E0A\u7684 CSS \u53D8\u91CF\uFF0C\u4F7F\u5F97\u9875\u9762\u4E0A\u7684\u5176\u4ED6\u90E8\u5206\u53EF\u4EE5\u5E94\u7528\u6700\u65B0\u7684 CSS \u53D8\u91CF\u5BF9\u5E94\u7684\u6837\u5F0F.</p>`,8),_={href:"https://mmbiz.qpic.cn/mmbiz/pfCCZhlbMQTSNib7jkNzYAz8O7NOdbH4ImLknJtkjialT2n3reicoRc5daj7CP7bu3lWEszz456rDeGsHrFNbVy6Q/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},k=i("https://mmbiz.qpic.cn/mmbiz/pfCCZhlbMQTSNib7jkNzYAz8O7NOdbH4ImLknJtkjialT2n3reicoRc5daj7CP7bu3lWEszz456rDeGsHrFNbVy6Q/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),w=l(`<h2 id="\u5B9E\u73B0-2" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0-2" aria-hidden="true">#</a> <strong>\u5B9E\u73B0</strong></h2><p><code>theme.css</code>\xA0\u4E2D\u8D1F\u8D23\u5B9A\u4E49\u5168\u5C40\u7684 CSS \u53D8\u91CF\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/* \u5B9E\u73B0\u65B9\u5F0F\u4E00 */
:root {
  --theme-bg: initial; // \u80CC\u666F\u8272
  --theme-color: initial; // \u5B57\u4F53\u8272
  --theme-boder-color: initial; // \u8FB9\u6846\u8272
}

====================================================

/* \u5B9E\u73B0\u65B9\u5F0F\u4E8C */
/* \u9ED8\u8BA4\u503C\uFF1Alight */
:root {
  --theme-bg: #fff;
  --theme-color: rgb(51, 50, 50);
  --theme-img-bg: #fff;
  --theme-boder-color: #d6d6d6;
}

/* \u6697\u9ED1\uFF1Adark */
[data-theme=&#39;dark&#39;] {
  --theme-bg: rgb(51, 50, 50);
  --theme-color: #fff;
  --theme-boder-color: #fff;
}
\u590D\u5236\u4EE3\u7801

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>themeUtil.js</code>\xA0\u4E2D\u8D1F\u8D23\u83B7\u53D6\u5F53\u524D\u5BF9\u5E94\u6837\u5F0F\u503C\uFF0C\u4EE5\u53CA\u8BBE\u7F6E\xA0<code>body</code>\xA0\u4E0A\u7684 CSS \u53D8\u91CF\u503C\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const darkTheme = &#39;rgb(51, 50, 50)&#39;
const lightTheme = &#39;#fff&#39;
const lightBorderTheme = &#39;#d6d6d6&#39;

// \u83B7\u53D6\u5BF9\u5E94\u7684\u4E3B\u9898\u8272\u503C
export const getThemeMap = (isLight) =&gt; {
  return {
    &#39;theme-bg&#39;: isLight ? lightTheme : darkTheme,
    &#39;theme-color&#39;: isLight ? darkTheme : lightTheme,
    &#39;theme-boder-color&#39;: isLight ? lightBorderTheme : lightTheme,
  }
}

// \u8BBE\u7F6E\u4E3B\u9898\u8272\u503C
export const setTheme = (isLight = true) =&gt; {
  const themeMap = getThemeMap(isLight)
  const body = document.body
  /* \u5B9E\u73B0\u65B9\u5F0F\u4E00 */
  Object.keys(themeMap).forEach(key =&gt; {
    body.style.setProperty(\`--\${key}\`, themeMap[key])
  })

  /* \u5B9E\u73B0\u65B9\u5F0F\u4E8C */
  // body.style.setProperty(&#39;data-theme&#39;, isLight ? &#39;light&#39; : &#39;dark&#39;)
}

\u590D\u5236\u4EE3\u7801

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\xA0<code>var()</code>\xA0\u5728\u7EC4\u4EF6\u4E2D\u5E94\u7528\u5BF9\u5E94 CSS \u53D8\u91CF\uFF0C\u6BD4\u5982\u5728\u5934\u90E8\u4E2D\u7684\u4F7F\u7528\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;style scoped&gt;
.header {
  ...\u7701\u7565
  color: var(--theme-color);
  border-bottom: 1px solid var(--theme-boder-color);
  background-color: var(--theme-bg);
}
...\u7701\u7565
&lt;/style&gt;
\u590D\u5236\u4EE3\u7801

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7F3A\u70B9-2" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u70B9-2" aria-hidden="true">#</a> <strong>\u7F3A\u70B9</strong></h2><p>\u7F3A\u70B9\u5C31\u662F\u517C\u5BB9\u6027\u4E0D\u597D</p>`,9),z={href:"https://mmbiz.qpic.cn/mmbiz/pfCCZhlbMQTSNib7jkNzYAz8O7NOdbH4IMoObj2GXaqtiadQibOw317OTG2YoiarHjKrRybTVosNWCkxNTlnuOM3Rw/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},y=i("https://mmbiz.qpic.cn/mmbiz/pfCCZhlbMQTSNib7jkNzYAz8O7NOdbH4IMoObj2GXaqtiadQibOw317OTG2YoiarHjKrRybTVosNWCkxNTlnuOM3Rw/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),N=l(`<h2 id="\u517C\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u517C\u5BB9" aria-hidden="true">#</a> <strong>\u517C\u5BB9</strong></h2><p>\u901A\u8FC7\xA0<code>css-vars-ponyfill</code>\xA0\u5BF9 CSS \u53D8\u91CF\u8FDB\u884C\u517C\u5BB9\u5904\u7406\uFF0C<code>themeUtil.js</code>\xA0\u4E2D\u4EE3\u7801\u6539\u53D8\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import cssVars from &quot;css-vars-ponyfill&quot;;

const darkTheme = &#39;rgb(51, 50, 50)&#39;
const lightTheme = &#39;#fff&#39;
const lightBorderTheme = &#39;#d6d6d6&#39;

// \u8FD9\u91CC\u5B9A\u4E49\u7684 \u952E/\u503C \u5BF9\uFF0C\u662F\u4E3A\u4E86\u7ED9 cssVars \u4F20\u53C2
export const getThemeMap = (isLight) =&gt; {
  return {
    &#39;--theme-bg&#39;: isLight ? lightTheme : darkTheme,
    &#39;--theme-img-bg&#39;: lightTheme,
    &#39;--theme-color&#39;: isLight ? darkTheme : lightTheme,
    &#39;--theme-boder-color&#39;: isLight ? lightBorderTheme : lightTheme,
  }
}

export const setTheme = (isLight = true) =&gt; {
  const themeMap = getThemeMap(isLight)
  const body = document.body

  /* \u5B9E\u73B0\u65B9\u5F0F\u4E00 */
  Object.keys(themeMap).forEach(key =&gt; {
    body.style.setProperty(key, themeMap[key])
  })

  /* \u5B9E\u73B0\u65B9\u5F0F\u4E8C */
  // body.style.setProperty(&#39;data-theme&#39;, isLight ? &#39;light&#39; : &#39;dark&#39;)

  // \u5B9E\u73B0\u517C\u5BB9\u65B9\u6848
  cssVars({
    watch: true, // \u6DFB\u52A0\u3001\u5220\u9664\u3001\u4FEE\u6539 &lt;link&gt; \u6216 &lt;style&gt; \u5143\u7D20\u7684\u7981\u7528\u6216 href \u5C5E\u6027\u65F6\uFF0Cponyfill \u5C06\u81EA\u884C\u8C03\u7528
    variables: themeMap, // variables \u81EA\u5B9A\u4E49\u5C5E\u6027\u540D/\u503C\u5BF9\u7684\u96C6\u5408
    onlyLegacy: false, // false  \u9ED8\u8BA4\u5C06 css \u53D8\u91CF\u7F16\u8BD1\u4E3A\u6D4F\u89C8\u5668\u8BC6\u522B\u7684 css \u6837\u5F0F \uFF1Btrue \u5F53\u6D4F\u89C8\u5668\u4E0D\u652F\u6301css\u53D8\u91CF\u7684\u65F6\u5019\u5C06css\u53D8\u91CF\u7F16\u8BD1\u4E3A\u8BC6\u522B\u7684css
  });
}
\u590D\u5236\u4EE3\u7801

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u4E3B\u9898\u56FE\u7247\u5207\u6362" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u9898\u56FE\u7247\u5207\u6362" aria-hidden="true">#</a> <strong>\u4E3B\u9898\u56FE\u7247\u5207\u6362</strong></h1>`,4),T={href:"https://mmbiz.qpic.cn/mmbiz/pfCCZhlbMQTSNib7jkNzYAz8O7NOdbH4IXgayO47n5UBevDlcPYIyh48ArL90ic2mQratFZJtOmktVibiaJj2L0Nhw/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},q=i("https://mmbiz.qpic.cn/mmbiz/pfCCZhlbMQTSNib7jkNzYAz8O7NOdbH4IXgayO47n5UBevDlcPYIyh48ArL90ic2mQratFZJtOmktVibiaJj2L0Nhw/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),S={href:"https://mmbiz.qpic.cn/mmbiz/pfCCZhlbMQTSNib7jkNzYAz8O7NOdbH4IMG32vBlVa5blWRVd5DJOVyicMwBzI30AGzmPpg2hx3biagkaVKsicA88g/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},C=i("https://mmbiz.qpic.cn/mmbiz/pfCCZhlbMQTSNib7jkNzYAz8O7NOdbH4IMG32vBlVa5blWRVd5DJOVyicMwBzI30AGzmPpg2hx3biagkaVKsicA88g/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),O=l(`<p>\u5B9E\u73B0\u4E86\u524D\u9762\u7684\u5185\u5BB9\u4E4B\u540E\uFF0C\u73B0\u5728\u7ED9\u5206\u522B\u7ED9\xA0<code>light</code>\xA0\u548C\xA0<code>dark</code>\xA0\u4E3B\u9898\u6DFB\u52A0\u4E00\u4E2A logo\uFF0C\u8FD9\u4E00\u90E8\u5206\u5176\u5B9E\u5F88\u7B80\u5355\u4E86\uFF0C\u4E0B\u9762\u7684\u793A\u4F8B\u4EE3\u7801\u662F\u57FA\u4E8E Vue3 \u8FDB\u884C\u5B9E\u73B0\u7684</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Header.vue
&lt;script setup&gt;
import { ref } from &#39;vue&#39;
import { setTheme } from &#39;../style/themeUtil&#39;

defineProps({
  title: String
})

const checked = ref(false)

const logoUrl = ref(&#39;&#39;)

const loadImg = async () =&gt; {
  let name = !checked.value ? &#39;light&#39; : &#39;dark&#39;
  let ext = !checked.value ? &#39;png&#39; : &#39;jpg&#39;
  let res = await import(\`../assets/logo-\${name}.\${ext}\`)
  logoUrl.value = res.default
}

loadImg()

const changeTheme = (event) =&gt; {
  setTheme(!checked.value)
  loadImg()
}

&lt;/script&gt;

&lt;template&gt;
  &lt;div class=&quot;header&quot;&gt;
    &lt;img class=&quot;logo&quot; :src=&quot;logoUrl&quot; /&gt;
    &lt;span&gt;{{ title }}&lt;/span&gt;
    &lt;input v-model=&quot;checked&quot; type=&quot;checkbox&quot; class=&quot;switch&quot; @change=&quot;changeTheme&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;
\u590D\u5236\u4EE3\u7801

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6548\u679C\u5982\u4E0B</p>`,3),M={href:"https://mmbiz.qpic.cn/mmbiz/pfCCZhlbMQTSNib7jkNzYAz8O7NOdbH4IZINXHNJLQiaehmUURfo8S28jcQMg4VYP1Xm1045IottWib9ESdPicgltA/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},j=i("https://mmbiz.qpic.cn/mmbiz/pfCCZhlbMQTSNib7jkNzYAz8O7NOdbH4IZINXHNJLQiaehmUURfo8S28jcQMg4VYP1Xm1045IottWib9ESdPicgltA/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),I=l('<p>skin.gif</p><h1 id="\u6700\u540E" tabindex="-1"><a class="header-anchor" href="#\u6700\u540E" aria-hidden="true">#</a> <strong>\u6700\u540E</strong></h1><p>\u4EE5\u4E0A\u5C31\u662F\u76EE\u524D\u4E86\u89E3\u5230\u4E00\u4E9B\u7684\u6362\u80A4\u65B9\u6848\uFF0C\u4EE5\u4E0A\u5168\u90E8\u57FA\u4E8E css \u53BB\u5B9E\u73B0\u7684\uFF0C\u4E0D\u8FC7\u77E5\u9053\u4E86\u539F\u7406\u5C31\u53EF\u4EE5\u7ED3\u5408\xA0<code>less</code>\xA0\u548C\xA0<code>sass</code>\xA0\u8FDB\u884C\u66F4\u597D\u7684\u5B9E\u73B0\u3002\u5982\u679C\u6709\u66F4\u597D\u7684\u65B9\u6848\uFF0C\u6B22\u8FCE\u8D34\u5728\u8BC4\u8BBA\u533A\u8FDB\u884C\u5206\u4EAB\uFF01\uFF01\uFF01</p><p>\u5173\u4E8E\u672C\u6587</p><h1 id="\u4F5C\u8005-\u718A\u7684\u732B" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u8005-\u718A\u7684\u732B" aria-hidden="true">#</a> <strong>\u4F5C\u8005\uFF1A\u718A\u7684\u732B</strong></h1><p>https://juejin.cn/post/7063010855167721486</p>',6);function Q(L,V){const n=t("ExternalLinkIcon");return r(),a("div",null,[v,o,m,b,e("p",null,[e("a",u,[h,s(n)])]),p,e("p",null,[e("a",g,[f,s(n)])]),x,e("p",null,[e("a",_,[k,s(n)])]),w,e("p",null,[e("a",z,[y,s(n)])]),N,e("p",null,[e("a",T,[q,s(n)])]),e("p",null,[e("a",S,[C,s(n)])]),O,e("p",null,[e("a",M,[j,s(n)])]),I])}var Z=d(c,[["render",Q],["__file","04.\u524D\u7AEF\u6362\u80A4.html.vue"]]);export{Z as default};
