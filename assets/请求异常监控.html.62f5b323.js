import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.b9034ddb.js";const p={},e=t(`<h1 id="\u8BF7\u6C42\u5F02\u5E38\u76D1\u63A7" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u5F02\u5E38\u76D1\u63A7" aria-hidden="true">#</a> \u8BF7\u6C42\u5F02\u5E38\u76D1\u63A7</h1><h2 id="\u5B9E\u73B0\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u65B9\u6848" aria-hidden="true">#</a> \u5B9E\u73B0\u65B9\u6848</h2><h3 id="fetch-\u91CD\u5199" tabindex="-1"><a class="header-anchor" href="#fetch-\u91CD\u5199" aria-hidden="true">#</a> fetch \u91CD\u5199</h3><p>\u57FA\u4E8E window.fetch \u91CD\u5199\u4E00\u5C42\u62E6\u622A\uFF0Cfetch<code>\u8BF7\u6C42\u524D</code>\u548C<code>\u8BF7\u6C42\u540E</code>\u505A\u4E00\u4E9B<code>\u4E0A\u62A5\u6216\u5176\u4ED6\u5904\u7406</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> originFetch <span class="token operator">=</span> window<span class="token punctuation">.</span>fetch<span class="token punctuation">;</span>
window<span class="token punctuation">.</span><span class="token function-variable function">fetch</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">initReportData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u521D\u59CB\u5316\u4E00\u4E9B\u4E0A\u62A5\u6570\u636E</span>

  <span class="token keyword">return</span> <span class="token function">originFetch</span>
    <span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>status <span class="token operator">&gt;</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4E1A\u52A1\u8BF7\u6C42\u5F02\u5E38\u4E0A\u62A5</span>
        <span class="token function">reportBizError</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8BF7\u6C42\u4E0A\u62A5</span>
        <span class="token function">reportData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u8BF7\u6C42\u5F02\u5E38\u4E0A\u62A5</span>
      <span class="token function">reportError</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">throw</span> e<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="xmlhttprequest-\u91CD\u5199" tabindex="-1"><a class="header-anchor" href="#xmlhttprequest-\u91CD\u5199" aria-hidden="true">#</a> XMLHttpRequest \u91CD\u5199</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> xml <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token class-name">XMLHttpRequest</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
<span class="token keyword">const</span> open <span class="token operator">=</span> xml<span class="token punctuation">.</span>open<span class="token punctuation">;</span>
<span class="token keyword">const</span> setRequestHeader <span class="token operator">=</span> xml<span class="token punctuation">.</span>setRequestHeader<span class="token punctuation">;</span>
<span class="token keyword">const</span> send <span class="token operator">=</span> xml<span class="token punctuation">.</span>send<span class="token punctuation">;</span>

<span class="token comment">// \u91CD\u5199xml.open</span>
xml<span class="token punctuation">.</span><span class="token function-variable function">open</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">method<span class="token punctuation">,</span> url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6536\u96C6\u8BF7\u6C42\u65B9\u6CD5\u548C\u5730\u5740</span>
  <span class="token keyword">const</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">open</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u91CD\u5199xml.setRequestHeader</span>
xml<span class="token punctuation">.</span><span class="token function-variable function">setRequestHeader</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">header<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6536\u96C6\u8BF7\u6C42\u5934\u5B57\u6BB5</span>
  <span class="token keyword">const</span> <span class="token literal-property property">args</span><span class="token operator">:</span> any <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">setRequestHeader</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

xml<span class="token punctuation">.</span><span class="token function-variable function">send</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> onreadystatechange <span class="token operator">=</span> xml<span class="token punctuation">.</span>onreadystatechange <span class="token operator">||</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  xml<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token literal-property property">readyArgs</span><span class="token operator">:</span> any <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">onreadystatechange</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> readyArgs<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>xml<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">&gt;=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">304</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u8BF7\u6C42\u4E0A\u62A5</span>
          <span class="token function">report</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u4E1A\u52A1\u8BF7\u6C42\u5F02\u5E38\u4E0A\u62A5</span>
          <span class="token function">reportBiz</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8BF7\u6C42\u5F02\u5E38\u4E0A\u62A5</span>
        <span class="token function">reportError</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token literal-property property">args</span><span class="token operator">:</span> any <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">send</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function c(l,u){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","\u8BF7\u6C42\u5F02\u5E38\u76D1\u63A7.html.vue"]]);export{r as default};
