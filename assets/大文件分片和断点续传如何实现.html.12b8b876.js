import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.b9034ddb.js";const e={},p=t(`<h1 id="\u5927\u6587\u4EF6\u5206\u7247\u548C\u65AD\u70B9\u7EED\u4F20\u5982\u4F55\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5927\u6587\u4EF6\u5206\u7247\u548C\u65AD\u70B9\u7EED\u4F20\u5982\u4F55\u5B9E\u73B0" aria-hidden="true">#</a> \u5927\u6587\u4EF6\u5206\u7247\u548C\u65AD\u70B9\u7EED\u4F20\u5982\u4F55\u5B9E\u73B0</h1><h2 id="\u5206\u7247" tabindex="-1"><a class="header-anchor" href="#\u5206\u7247" aria-hidden="true">#</a> \u5206\u7247</h2><ol><li>\u83B7\u53D6 input \u4E0A\u4F20\u4E4B\u540E\u7684 file</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> file <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;f1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> chunks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u8BBE\u7F6E\u4E00\u5B9A\u5927\u5C0F\u7684 chunk</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> chunkSize <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>\u62C6\u5206</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> blob <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>
chunks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>\u5FAA\u73AF\u6BCF\u4E00\u4E2A chunk[i], \u521B\u5EFA formData,\u5E76\u53D1\u9001 ajax \u8BF7\u6C42</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fd<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;f1&quot;</span><span class="token punctuation">,</span> chunks<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// chunk</span>
fd<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> xxx<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4E00\u4E9B\u5176\u4ED6\u4FE1\u606F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65AD\u70B9\u7EED\u4F20" tabindex="-1"><a class="header-anchor" href="#\u65AD\u70B9\u7EED\u4F20" aria-hidden="true">#</a> \u65AD\u70B9\u7EED\u4F20</h2><ul><li>\u4E3A\u6BCF\u4E2A\u5206\u6BB5\u751F\u6210 hash \u503C\uFF0C\u4F7F\u7528 spark-md5 \u5E93</li><li>\u5C06\u4E0A\u4F20\u6210\u529F\u7684\u5206\u6BB5\u4FE1\u606F\u4FDD\u5B58\u5230\u672C\u5730</li><li>\u91CD\u65B0\u4E0A\u4F20\u65F6\uFF0C\u8FDB\u884C\u548C\u672C\u5730\u5206\u6BB5 hash \u503C\u7684\u5BF9\u6BD4\uFF0C\u5982\u679C\u76F8\u540C\u7684\u8BDD\u5219\u8DF3\u8FC7\uFF0C\u7EE7\u7EED\u4E0B\u4E00\u4E2A\u5206\u6BB5\u7684\u4E0A\u4F20</li></ul>`,12),c=[p];function o(i,l){return s(),a("div",null,c)}var d=n(e,[["render",o],["__file","\u5927\u6587\u4EF6\u5206\u7247\u548C\u65AD\u70B9\u7EED\u4F20\u5982\u4F55\u5B9E\u73B0.html.vue"]]);export{d as default};
