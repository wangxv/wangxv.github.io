import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.b9034ddb.js";const p={},e=t(`<h1 id="\u5B9E\u73B0-new" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0-new" aria-hidden="true">#</a> \u5B9E\u73B0 new</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> Ctor <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
  obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token class-name">Ctor</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
  <span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token function">Ctor</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">typeof</span> res <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span> <span class="token operator">?</span> res <span class="token operator">:</span> obj<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","\u5B9E\u73B0new.html.vue"]]);export{k as default};
