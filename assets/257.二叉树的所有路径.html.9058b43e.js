import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.b9034ddb.js";const p={},o=t(`<h1 id="_257-\u4E8C\u53C9\u6811\u7684\u6240\u6709\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#_257-\u4E8C\u53C9\u6811\u7684\u6240\u6709\u8DEF\u5F84" aria-hidden="true">#</a> 257.\u4E8C\u53C9\u6811\u7684\u6240\u6709\u8DEF\u5F84</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">binaryTreePaths</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u53F6\u5B50\u8282\u70B9 \u8BB0\u5F55\u8DEF\u5F84</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>str <span class="token operator">+</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    root<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> str <span class="token operator">+</span> root<span class="token punctuation">.</span>val <span class="token operator">+</span> <span class="token string">&quot;-&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    root<span class="token punctuation">.</span>right <span class="token operator">&amp;&amp;</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> str <span class="token operator">+</span> root<span class="token punctuation">.</span>val <span class="token operator">+</span> <span class="token string">&quot;-&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),e=[o];function c(l,u){return s(),a("div",null,e)}var k=n(p,[["render",c],["__file","257.\u4E8C\u53C9\u6811\u7684\u6240\u6709\u8DEF\u5F84.html.vue"]]);export{k as default};
