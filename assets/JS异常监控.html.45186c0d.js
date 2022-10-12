import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as p,c as e,a as n,d as o,e as a,b as c,r as i}from"./app.b9034ddb.js";const u={},l=a(`<h1 id="js-\u5F02\u5E38\u76D1\u63A7" tabindex="-1"><a class="header-anchor" href="#js-\u5F02\u5E38\u76D1\u63A7" aria-hidden="true">#</a> JS \u5F02\u5E38\u76D1\u63A7</h1><h2 id="\u76D1\u542C-error" tabindex="-1"><a class="header-anchor" href="#\u76D1\u542C-error" aria-hidden="true">#</a> \u76D1\u542C error</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">reportError</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\u51FD\u6570\u6B63\u5E38\u662F\u53EF\u4EE5\u6536\u96C6\u5230\u9519\u8BEF\u5B57\u7B26\u4E32\u4FE1\u606F\u3001\u53D1\u751F\u9519\u8BEF\u7684 js \u6587\u4EF6\uFF0C\u9519\u8BEF\u6240\u5728\u7684\u884C\u6570\u3001\u5217\u6570\u3001\u548C Error \u5BF9\u8C61\uFF08\u91CC\u9762\u4F1A\u6709\u8C03\u7528\u5806\u6808\u4FE1\u606F\u7B49\uFF09</p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5982\u679C\u6709\u5982\u4E0B\u4E24\u4E2A\u811A\u672C\uFF0C\u5176\u4E2D<code>a</code>\u811A\u672C\u76D1\u542C<code>onerror</code>\u4E8B\u4EF6\uFF0C<code>b</code>\u811A\u672C\u629B\u51FA\u4E86\u5F02\u5E38\uFF0C\u662F\u65E0\u6CD5\u6355\u83B7\u5230\u7684</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- index.html  --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://a.com/a.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://b.com/b.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F1A\u51FA\u73B0\u8FD9\u6837\u7684\u60C5\u51B5\uFF1A</p><p><img src="http://tva1.sinaimg.cn/large/006vSZ9Ugy1gx66l66js3j310u058whr.jpg" alt="image.png"></p><p>\u6B64\u65F6\u6211\u4EEC\u9700\u8981\u7ED9<code>b</code>\u811A\u672C script \u6807\u7B7E\u52A0\u4E0A<code>crossorigin</code>\u5C5E\u6027</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- index.html  --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://a.com/a.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://b.com/b.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">crossorigin</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6CE8\u610F\uFF1A\u9700\u8981\u540E\u7AEF\u914D\u5408\u8BBE\u7F6E\u8BE5\u6587\u4EF6\u7684<code>Access-Control-Allow-Origin: *</code></strong></p><h2 id="\u6355\u83B7\u672A\u5904\u7406\u7684-promise-\u5F02\u5E38" tabindex="-1"><a class="header-anchor" href="#\u6355\u83B7\u672A\u5904\u7406\u7684-promise-\u5F02\u5E38" aria-hidden="true">#</a> \u6355\u83B7\u672A\u5904\u7406\u7684 promise \u5F02\u5E38</h2><h3 id="_1-unhandledrejection" tabindex="-1"><a class="header-anchor" href="#_1-unhandledrejection" aria-hidden="true">#</a> 1. unhandledrejection</h3><p>\u76D1\u542C unhandledrejection \u4E8B\u4EF6\uFF0C\u5373\u53EF\u6355\u83B7\u5230\u672A\u5904\u7406\u7684 Promise \u9519\u8BEF\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;unhandledrejection&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">reportError</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-rejectionhandled" tabindex="-1"><a class="header-anchor" href="#_2-rejectionhandled" aria-hidden="true">#</a> 2. rejectionhandled</h3><p>\u5F53\u4E00\u4E2A Promise \u9519\u8BEF\u6700\u521D\u672A\u88AB\u5904\u7406\uFF0C\u4F46\u662F\u7A0D\u540E\u53C8\u5F97\u5230\u4E86\u5904\u7406</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&quot;Unhandle Promise Error!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> r <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  r<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F1A\u89E6\u53D1 rejectionhandled \u4E8B\u4EF6\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;rejectionhandled&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">reportError</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6355\u83B7-vue-\u4E2D\u7684\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u6355\u83B7-vue-\u4E2D\u7684\u9519\u8BEF" aria-hidden="true">#</a> \u6355\u83B7 Vue \u4E2D\u7684\u9519\u8BEF</h2>`,21),r={href:"https://cn.vuejs.org/v2/api/#errorHandler",target:"_blank",rel:"noopener noreferrer"},d=c("Vue ErrorHandler"),k=a(`<h3 id="_1-\u5168\u5C40\u6355\u83B7" tabindex="-1"><a class="header-anchor" href="#_1-\u5168\u5C40\u6355\u83B7" aria-hidden="true">#</a> 1. \u5168\u5C40\u6355\u83B7</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token function-variable function">errorHandler</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span> vm<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">reportError</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7EC4\u4EF6\u5185\u6355\u83B7" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u5185\u6355\u83B7" aria-hidden="true">#</a> \u7EC4\u4EF6\u5185\u6355\u83B7</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">errorCaptured</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> Error<span class="token punctuation">,</span> <span class="token literal-property property">vm</span><span class="token operator">:</span> Component<span class="token punctuation">,</span> <span class="token literal-property property">info</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">reportError</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u9519\u8BEF\u4F20\u64AD\u89C4\u5219</strong></p><ul><li><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u5168\u5C40\u7684 <code>config.errorHandler</code> \u88AB\u5B9A\u4E49\uFF0C\u6240\u6709\u7684\u9519\u8BEF\u4ECD\u4F1A\u53D1\u9001\u5B83\uFF0C\u56E0\u6B64\u8FD9\u4E9B\u9519\u8BEF\u4ECD\u7136\u4F1A\u5411\u5355\u4E00\u7684\u5206\u6790\u670D\u52A1\u7684\u5730\u65B9\u8FDB\u884C\u6C47\u62A5\u3002</p></li><li><p>\u5982\u679C\u4E00\u4E2A\u7EC4\u4EF6\u7684 inheritance chain (\u7EE7\u627F\u94FE)\u6216 parent chain (\u7236\u94FE)\u4E2D\u5B58\u5728\u591A\u4E2A <code>errorCaptured</code> \u94A9\u5B50\uFF0C\u5219\u5B83\u4EEC\u5C06\u4F1A\u88AB\u76F8\u540C\u7684\u9519\u8BEF\u9010\u4E2A\u5524\u8D77\u3002</p></li><li><p>\u5982\u679C\u6B64 <code>errorCaptured</code> \u94A9\u5B50\u81EA\u8EAB\u629B\u51FA\u4E86\u4E00\u4E2A\u9519\u8BEF\uFF0C\u5219\u8FD9\u4E2A\u65B0\u9519\u8BEF\u548C\u539F\u672C\u88AB\u6355\u83B7\u7684\u9519\u8BEF\u90FD\u4F1A\u53D1\u9001\u7ED9\u5168\u5C40\u7684 <code>config.errorHandler</code>\u3002</p></li><li><p>\u4E00\u4E2A <code>errorCaptured</code> \u94A9\u5B50\u80FD\u591F\u8FD4\u56DE <code>false</code> \u4EE5\u963B\u6B62\u9519\u8BEF\u7EE7\u7EED\u5411\u4E0A\u4F20\u64AD\u3002\u672C\u8D28\u4E0A\u662F\u8BF4\u201C\u8FD9\u4E2A\u9519\u8BEF\u5DF2\u7ECF\u88AB\u641E\u5B9A\u4E86\u4E14\u5E94\u8BE5\u88AB\u5FFD\u7565\u201D\u3002\u5B83\u4F1A\u963B\u6B62\u5176\u5B83\u4EFB\u4F55\u4F1A\u88AB\u8FD9\u4E2A\u9519\u8BEF\u5524\u8D77\u7684 <code>errorCaptured</code> \u94A9\u5B50\u548C\u5168\u5C40\u7684 <code>config.errorHandler</code>\u3002</p></li></ul>`,6);function v(m,h){const s=i("ExternalLinkIcon");return p(),e("div",null,[l,n("p",null,[n("a",r,[d,o(s)])]),k])}var f=t(u,[["render",v],["__file","JS\u5F02\u5E38\u76D1\u63A7.html.vue"]]);export{f as default};
