import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as p,c as o,a as n,d as e,b as s,e as c,r as l}from"./app.b9034ddb.js";const u={},i={id:"_337-\u6253\u5BB6\u52AB\u820D-iii",tabindex:"-1"},r=n("a",{class:"header-anchor",href:"#_337-\u6253\u5BB6\u52AB\u820D-iii","aria-hidden":"true"},"#",-1),k=s(),d={href:"https://leetcode-cn.com/problems/house-robber-iii/",target:"_blank",rel:"noopener noreferrer"},v=s("337.\u6253\u5BB6\u52AB\u820D-iii"),m=c(`<h2 id="\u9898\u89E3" tabindex="-1"><a class="header-anchor" href="#\u9898\u89E3" aria-hidden="true">#</a> \u9898\u89E3</h2><p>\u9012\u5F52\u89E3\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">rob</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token keyword">return</span> root<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u5077\u7236\u8282\u70B9</span>
  <span class="token keyword">let</span> val1 <span class="token operator">=</span> root<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> val1 <span class="token operator">+=</span> <span class="token function">rob</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">rob</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span> val1 <span class="token operator">+=</span> <span class="token function">rob</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">rob</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> val2 <span class="token operator">=</span> <span class="token function">rob</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">rob</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>val1<span class="token punctuation">,</span> val2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u52A8\u6001\u89C4\u5212\u89E3\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">robTree</span><span class="token punctuation">(</span><span class="token parameter">cur</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cur<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u957F\u5EA6\u4E3A2\u7684\u6570\u7EC4\uFF0C0\uFF1A\u4E0D\u5077\uFF0C1\uFF1A\u5077</span>
  <span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token function">robTree</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token function">robTree</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u5077\u7236\u8282\u70B9\uFF0C\u5DE6\u53F3\u8282\u70B9\u4E0D\u5077</span>
  <span class="token keyword">const</span> val1 <span class="token operator">=</span> cur<span class="token punctuation">.</span>val <span class="token operator">+</span> left<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> right<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// \u4E0D\u5077\u7236\u8282\u70B9, \u5DE6\u8FB9\u8282\u70B9\u5077\u6216\u8005\u4E0D\u5077\u7684\u6700\u5927\u503C + \u53F3\u8FB9\u8282\u70B9\u5077\u6216\u8005\u4E0D\u5077\u7684\u6700\u5927\u503C</span>
  <span class="token keyword">const</span> val2 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>left<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> left<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>right<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> right<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>val2<span class="token punctuation">,</span> val1<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">rob</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token function">robTree</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function b(f,h){const a=l("ExternalLinkIcon");return p(),o("div",null,[n("h1",i,[r,k,n("a",d,[v,e(a)])]),m])}var y=t(u,[["render",b],["__file","337.\u6253\u5BB6\u52AB\u820D-iii.html.vue"]]);export{y as default};
