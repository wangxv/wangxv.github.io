import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as a,e as o}from"./app.b9034ddb.js";const s={},l=o(`<h1 id="lerna-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#lerna-\u4F7F\u7528" aria-hidden="true">#</a> lerna \u4F7F\u7528</h1><h2 id="lerna-\u6838\u5FC3\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#lerna-\u6838\u5FC3\u64CD\u4F5C" aria-hidden="true">#</a> lerna \u6838\u5FC3\u64CD\u4F5C</h2><p>\u4E0D\u77E5\u9053\u7684\u547D\u4EE4\uFF0C\u5EFA\u8BAE lerna xx -h</p><ul><li><p><strong>\u9879\u76EE\u521D\u59CB\u5316</strong></p><ol><li><code>npm init -y</code>\u521D\u59CB\u5316</li><li><code>npm i lerna -D</code></li><li><code>lerna init</code></li></ol></li><li><p><strong>\u521B\u5EFA package</strong></p><ol><li><code>lerna create</code> \u521B\u5EFA package</li><li><code>lerna add</code> \u5B89\u88C5\u4F9D\u8D56</li><li><code>lerna link</code> \u94FE\u63A5\u4F9D\u8D56</li></ol></li><li><p><strong>\u5F00\u53D1\u548C\u6D4B\u8BD5</strong></p><ol><li><code>lerna exec</code> \u6267\u884C shell \u811A\u672C</li><li><code>lerna run</code> \u6267\u884C<code>npm scripts</code></li><li><code>lerna clean</code> \u6E05\u7A7A\u6240\u6709\u4F9D\u8D56 node_modules</li><li><code>lerna bootstrap</code> \u91CD\u88C5\u4F9D\u8D56</li></ol></li><li><p><strong>\u53D1\u5E03\u4E0A\u7EBF</strong></p><ol><li><code>lerna version</code> \u63D0\u5347\u7248\u672C\u53F7</li><li><code>lerna changed</code> \u67E5\u770B\u5F53\u524D\u7248\u672C\u4E0E\u4E0A\u7248\u672C\u7684\u6240\u6709\u53D8\u66F4</li><li><code>lerna diff</code> \u67E5\u770B diff</li><li><code>lerna publish</code> \u53D1\u5E03</li></ol></li></ul><h3 id="\u6CE8\u610F\u70B9" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u70B9" aria-hidden="true">#</a> \u6CE8\u610F\u70B9</h3><ul><li>lerna link\uFF1A\u6709\u4E24\u4E2A\u5E93<code>A</code>\u548C<code>B</code>,\u5982\u679C<code>A</code>\u5F15\u7528<code>B\u5305</code>, \u9700\u8981\u5728<code>A</code>\u7684 package.json \u4E2D\u7684<code>dependencies</code>\u63D0\u524D\u58F0\u660E\u597D\uFF0C\u7136\u540E\u518D\u6267\u884C<code>lerna link</code></li><li>lerna exec: <code>lerna exec -- rm -rf node_modules</code>\u662F\u5728\u6BCF\u4E2A packages \u4E2D\u6267\u884C\u7684\uFF0C\u800C\u4E0D\u662F\u9879\u76EE\u6839\u76EE\u5F55</li></ul><h2 id="lerna-\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#lerna-\u5206\u6790" aria-hidden="true">#</a> lerna \u5206\u6790</h2><p><strong>\u672C\u5730\u5F00\u53D1\u4F9D\u8D56\u6700\u4F73\u5B9E\u8DF5</strong></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;@leek-cli-dev/utils&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file:../utils&quot;</span> <span class="token comment">// \u901A\u8FC7file: \u53EF\u4EE5\u8BA9\u6211\u4EEC\u4E0D\u9700\u8981npm link \u76F4\u63A5\u53EF\u4EE5\u672C\u5730\u5F00\u53D1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u516C\u5171\u5305\u63D0\u5347</strong></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;bootstrap&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;hoist&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),i=[l];function c(r,d){return n(),a("div",null,i)}var u=e(s,[["render",c],["__file","lerna\u4F7F\u7528.html.vue"]]);export{u as default};
