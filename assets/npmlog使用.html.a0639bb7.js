import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.b9034ddb.js";const p={},o=t(`<h1 id="npmlog-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#npmlog-\u4F7F\u7528" aria-hidden="true">#</a> npmlog \u4F7F\u7528</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> log <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;npmlog&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

log<span class="token punctuation">.</span>level <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">LOG_LEVEL</span> <span class="token operator">||</span> <span class="token string">&quot;info&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u4F4E\u4E8Elevel \u4E0D\u4F1A\u663E\u793A</span>
log<span class="token punctuation">.</span>heading <span class="token operator">=</span> <span class="token string">&quot;leek&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u524D\u7F00</span>
log<span class="token punctuation">.</span>headingStyle <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">fg</span><span class="token operator">:</span> <span class="token string">&quot;white&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">bg</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// \u4FEE\u6539\u524D\u7F00\u6837\u5F0F</span>
log<span class="token punctuation">.</span><span class="token function">addLevel</span><span class="token punctuation">(</span><span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">fg</span><span class="token operator">:</span> <span class="token string">&quot;green&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">bold</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u81EA\u5B9A\u4E49\u547D\u4EE4</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> log<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),e=[o];function c(l,r){return s(),a("div",null,e)}var k=n(p,[["render",c],["__file","npmlog\u4F7F\u7528.html.vue"]]);export{k as default};
