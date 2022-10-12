import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as c,c as r,a as e,d as n,b as a,e as s,r as d}from"./app.b9034ddb.js";const o={},m=e("h1",{id:"\u4F18\u96C5\u7684\u56DE\u9000\u4EE3\u7801",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4F18\u96C5\u7684\u56DE\u9000\u4EE3\u7801","aria-hidden":"true"},"#"),a(" \u4F18\u96C5\u7684\u56DE\u9000\u4EE3\u7801")],-1),l={href:"https://yorkyu.cn/how-to-use-rebase-to-gracefully-fallback-code-08cdafe3d403.html#%E4%B8%89-Rebase-%E5%9B%9E%E9%80%80%E4%BB%A3%E7%A0%81",target:"_blank",rel:"noopener noreferrer"},h=a("\u5982\u4F55\u4F7F\u7528 Git Rebase \u4F18\u96C5\u56DE\u9000\u4EE3\u7801"),u=s(`<h2 id="_1-\u5207\u51FA\u4E00\u4E2A\u5206\u652F\u7528\u4E8E\u56DE\u9000" tabindex="-1"><a class="header-anchor" href="#_1-\u5207\u51FA\u4E00\u4E2A\u5206\u652F\u7528\u4E8E\u56DE\u9000" aria-hidden="true">#</a> 1. \u5207\u51FA\u4E00\u4E2A\u5206\u652F\u7528\u4E8E\u56DE\u9000</h2><h2 id="_2-\u6267\u884Cgit-rebase-i-commit-n" tabindex="-1"><a class="header-anchor" href="#_2-\u6267\u884Cgit-rebase-i-commit-n" aria-hidden="true">#</a> 2. \u6267\u884C<code>git rebase -i commit_n</code></h2><p>\u4F7F\u7528git log\uFF0C\u627E\u5230\u4F60\u60F3\u56DE\u9000\u5230\u54EA\u4E2Acommit id\uFF0C\u7136\u540E\u6267\u884C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git rebase -i fa1b56d920e636914b6ef27988358ff122279261
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7F16\u8F91\u754C\u9762\u770B\u5230\u5F62\u5982\u4E0B\u8FF0\u7684 commit\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pick 6fa5869 commit1
pick 0b84ee7 commit2
pick 986c6c8 commit3
pick 91a0dcc commit4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u5408\u5E76-commit2-commit4-\u5230\u6700\u65E7\u7684commit1" tabindex="-1"><a class="header-anchor" href="#_3-\u5408\u5E76-commit2-commit4-\u5230\u6700\u65E7\u7684commit1" aria-hidden="true">#</a> 3. \u5408\u5E76 commit2 ~ commit4 \u5230\u6700\u65E7\u7684<code>commit1</code></h2><p>\u4FEE\u6539:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pick 6fa5869 commit1
squash 0b84ee7 commit2
squash 986c6c8 commit3
squash 91a0dcc commit4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540Ewq, \u4FDD\u5B58\u5E76\u9000\u51FA</p><h2 id="_4-\u4FDD\u5B58-rebase-\u7ED3\u679C\u540E-\u518D\u7F16\u8F91-commit-\u4FE1\u606F-\u4F7F\u8FD9\u6B21-rebase-\u5931\u6548" tabindex="-1"><a class="header-anchor" href="#_4-\u4FDD\u5B58-rebase-\u7ED3\u679C\u540E-\u518D\u7F16\u8F91-commit-\u4FE1\u606F-\u4F7F\u8FD9\u6B21-rebase-\u5931\u6548" aria-hidden="true">#</a> 4. \u4FDD\u5B58 rebase \u7ED3\u679C\u540E\uFF0C\u518D\u7F16\u8F91 commit \u4FE1\u606F\uFF0C\u4F7F\u8FD9\u6B21 rebase \u5931\u6548</h2><p>\u6B64\u65F6\u4F60\u9700\u8981\u4FEE\u6539\u5408\u5E76\u5230\u7684\u90A3\u4E2Acommit\u7684message\u4FE1\u606F\u3002</p><ul><li><p>\u51B2\u7A81\u5904\u7406</p><p>\u51FA\u73B0\u51B2\u7A81\u65F6\uFF0C\u9700\u5904\u7406\u51B2\u7A81\u540E\uFF0C\u518D\u6267\u884C \u2013continue\u3002\u5904\u7406\u51B2\u7A81\u65F6\u4E00\u822C\u9009\u62E9 Accept Current Change</p></li></ul><h2 id="_5-git-revert" tabindex="-1"><a class="header-anchor" href="#_5-git-revert" aria-hidden="true">#</a> 5. git revert</h2>`,14);function b(_,v){const i=d("ExternalLinkIcon");return c(),r("div",null,[m,e("p",null,[e("a",l,[h,n(i)])]),u])}var g=t(o,[["render",b],["__file","\u4F18\u96C5\u7684\u56DE\u9000\u4EE3\u7801.html.vue"]]);export{g as default};
