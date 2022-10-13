import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as c,c as o,a as e,d as i,e as d,b as l,r as a}from"./app.6533dd40.js";const r={},u=d('<h1 id="webpack5-\u6838\u5FC3\u6253\u5305\u539F\u7406\u5168\u6D41\u7A0B\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#webpack5-\u6838\u5FC3\u6253\u5305\u539F\u7406\u5168\u6D41\u7A0B\u89E3\u6790" aria-hidden="true">#</a> Webpack5 \u6838\u5FC3\u6253\u5305\u539F\u7406\u5168\u6D41\u7A0B\u89E3\u6790</h1><h1 id="\u5199\u5728\u524D\u8FB9" tabindex="-1"><a class="header-anchor" href="#\u5199\u5728\u524D\u8FB9" aria-hidden="true">#</a> \u5199\u5728\u524D\u8FB9</h1><p><code>Webpack</code>\u5728\u524D\u7AEF\u524D\u7AEF\u6784\u5EFA\u5DE5\u5177\u4E2D\u53EF\u4EE5\u582A\u79F0\u4E2D\u6D41\u7825\u67F1\u822C\u7684\u5B58\u5728\uFF0C\u65E5\u5E38\u4E1A\u52A1\u5F00\u53D1\u3001\u524D\u7AEF\u57FA\u5EFA\u5DE5\u5177\u3001\u9AD8\u7EA7\u524D\u7AEF\u9762\u8BD5...\u4EFB\u4F55\u573A\u666F\u90FD\u4F1A\u51FA\u73B0\u5B83\u7684\u8EAB\u5F71\u3002</p><p>\u4E5F\u8BB8\u5BF9\u4E8E\u5B83\u7684\u5185\u90E8\u5B9E\u73B0\u673A\u5236\u4F60\u4E5F\u8BB8\u4F1A\u611F\u5230\u7591\u60D1\uFF0C\u65E5\u5E38\u5DE5\u4F5C\u4E2D\u57FA\u4E8E<code>Webpack Plugin/Loader</code>\u4E4B\u7C7B\u67E5\u9605<code>API</code>\u4ECD\u7136\u4E0D\u660E\u767D\u5404\u4E2A\u53C2\u6570\u7684\u542B\u4E49\u548C\u5E94\u7528\u65B9\u5F0F\u3002</p><p>\u5176\u5B9E\u8FD9\u4E00\u5207\u539F\u56E0\u672C\u8D28\u4E0A\u90FD\u662F\u57FA\u4E8E<code>Webpack</code>\u5DE5\u4F5C\u6D41\u6CA1\u6709\u4E00\u4E2A\u6E05\u6670\u7684\u8BA4\u77E5\u5BFC\u81F4\u4E86\u6240\u8C13\u7684\u201C\u9762\u5BF9<code>API</code>\u65E0\u4ECE\u4E0B\u624B\u201D\u5F00\u53D1\u3002</p><p>\u6587\u7AE0\u4E2D\u6211\u4EEC\u4F1A\u4ECE\u5982\u4F55\u5B9E\u73B0<strong>\u6A21\u5757\u5206\u6790\u9879\u76EE\u6253\u5305</strong>\u7684\u89D2\u5EA6\u51FA\u53D1\uFF0C\u4F7F\u7528<strong>\u6700\u901A\u4FD7\uFF0C\u6700\u7B80\u6D01\uFF0C\u6700\u660E\u4E86</strong>\u7684\u4EE3\u7801\u5E26\u4F60\u63ED\u5F00<code>Webpack</code>\u80CC\u540E\u7684\u795E\u79D8\u9762\u7EB1\uFF0C\u5E26\u4F60\u5B9E\u73B0\u4E00\u4E2A\u7B80\u6613\u7248<code>Webpack</code>\uFF0C\u4ECE\u6B64\u5BF9\u4E8E\u4EFB\u4F55<code>webpack</code>\u76F8\u5173\u5E95\u5C42\u5F00\u53D1\u4E86\u7136\u4E8E\u80F8\u3002</p><p><strong>\u8FD9\u91CC\u6211\u4EEC\u53EA\u8BB2\u300C\u5E72\u8D27\u300D</strong>\uFF0C\u7528\u6700\u901A\u4FD7\u6613\u61C2\u7684\u4EE3\u7801\u5E26\u4F60\u8D70\u8FDB<code>webpack</code>\u7684\u5DE5\u4F5C\u6D41\u3002</p><h1 id="\u6211\u5E0C\u671B\u4F60\u80FD\u638C\u63E1\u7684\u524D\u7F6E\u77E5\u8BC6" tabindex="-1"><a class="header-anchor" href="#\u6211\u5E0C\u671B\u4F60\u80FD\u638C\u63E1\u7684\u524D\u7F6E\u77E5\u8BC6" aria-hidden="true">#</a> \u6211\u5E0C\u671B\u4F60\u80FD\u638C\u63E1\u7684\u524D\u7F6E\u77E5\u8BC6</h1><ul><li><strong>Tapable[1]</strong></li></ul><p><strong>Tapable</strong>\u5305\u672C\u8D28\u4E0A\u662F\u4E3A\u6211\u4EEC\u66F4\u65B9\u9762\u521B\u5EFA\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u548C\u89E6\u53D1\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u7684\u5E93\uFF0C\u7C7B\u4F3C\u4E8E<code>Nodejs</code>\u4E2D\u7684<code>EventEmitter Api</code>\u3002</p><p><code>Webpack</code>\u4E2D\u7684\u63D2\u4EF6\u673A\u5236\u5C31\u662F\u57FA\u4E8ETapable\u5B9E\u73B0\u4E0E\u6253\u5305\u6D41\u7A0B\u89E3\u8026\uFF0C\u63D2\u4EF6\u7684\u6240\u6709\u5F62\u5F0F\u90FD\u662F\u57FA\u4E8E<code>Tapable</code>\u5B9E\u73B0\u3002</p><ul><li><strong>Webpack Node Api[2]</strong></li></ul><p>\u57FA\u4E8E\u5B66\u4E60\u76EE\u7684\u6211\u4EEC\u4F1A\u7740\u91CD\u4E8E<code>Webpack Node Api</code>\u6D41\u7A0B\u53BB\u8BB2\u89E3\uFF0C\u5B9E\u9645\u4E0A\u6211\u4EEC\u5728\u524D\u7AEF\u65E5\u5E38\u4F7F\u7528\u7684<code>npm run build</code>\u547D\u4EE4\u4E5F\u662F\u901A\u8FC7\u73AF\u5883\u53D8\u91CF\u8C03\u7528<code>bin</code>\u811A\u672C\u53BB\u8C03\u7528<code>Node Api</code>\u53BB\u6267\u884C\u7F16\u8BD1\u6253\u5305\u3002</p><ul><li><strong>Babel[3]</strong></li></ul><p><code>Webpack</code>\u5185\u90E8\u7684<code>AST</code>\u5206\u6790\u540C\u6837\u4F9D\u8D56\u4E8E<code>Babel</code>\u8FDB\u884C\u5904\u7406\uFF0C\u5982\u679C\u4F60\u5BF9<code>Babel</code>\u4E0D\u662F\u5F88\u719F\u6089\u3002\u6211\u5EFA\u8BAE\u4F60\u53EF\u4EE5\u5148\u53BB\u9605\u8BFB\u4E0B\u8FD9\u4E24\u7BC7\u6587\u7AE0**\u300C\u524D\u7AEF\u57FA\u5EFA\u300D\u5E26\u4F60\u5728Babel\u7684\u4E16\u754C\u4E2D\u7545\u6E38[4]<strong>\u3001</strong># \u4ECETree Shaking\u6765\u8D70\u8FDBBabel\u63D2\u4EF6\u5F00\u53D1\u8005\u7684\u4E16\u754C[5]**\u3002</p><blockquote><p>\u5F53\u7136\u540E\u7EED\u6211\u4E5F\u4F1A\u53BB\u8BE6\u89E3\u8FD9\u4E9B\u5185\u5BB9\u5728Webpack\u4E2D\u7684\u5E94\u7528\uFF0C\u4F46\u662F\u6211\u66F4\u52A0\u5E0C\u671B\u5728\u9605\u8BFB\u6587\u7AE0\u4E4B\u524D\u4F60\u53EF\u4EE5\u53BB\u70B9\u4E00\u70B9\u4E0A\u65B9\u7684\u6587\u6863\u7A0D\u5FAE\u4E86\u89E3\u4E00\u4E0B\u524D\u7F6E\u77E5\u8BC6\u3002</p></blockquote><h1 id="\u6D41\u7A0B\u68B3\u7406" tabindex="-1"><a class="header-anchor" href="#\u6D41\u7A0B\u68B3\u7406" aria-hidden="true">#</a> \u6D41\u7A0B\u68B3\u7406</h1><p>\u5728\u5F00\u59CB\u4E4B\u524D\u6211\u4EEC\u5148\u5BF9\u4E8E\u6574\u4E2A\u6253\u5305\u6D41\u7A0B\u8FDB\u884C\u4E00\u6B21\u68B3\u7406\u3002</p><p>\u8FD9\u91CC\u4EC5\u4EC5\u662F\u4E00\u4E2A\u5168\u6D41\u7A0B\u7684\u68B3\u7406\uFF0C\u73B0\u5728\u4F60\u6CA1\u6709\u5FC5\u8981\u975E\u5E38\u8BE6\u7EC6\u7684\u53BB\u601D\u8003\u6BCF\u4E00\u4E2A\u6B65\u9AA4\u53D1\u751F\u4E86\u4EC0\u4E48\uFF0C\u6211\u4EEC\u4F1A\u5728\u63A5\u4E0B\u6765\u7684\u6B65\u9AA4\u4E2D\u53BB\u4E00\u6B65\u4E00\u6B65\u5E26\u4F60\u4E32\u8054\u5B83\u4EEC\u3002</p>',19),v={href:"https://mmbiz.qpic.cn/sz_mmbiz/H8M5QJDxMHqp1R4dSG2OiaG6eicUnY61YFdQtSbcyhVoFhrJoD3Vum0wcd6QpMUS8QxHXiaqzA0EPNlqfvyT6ibAtA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},t=l("https://mmbiz.qpic.cn/sz_mmbiz/H8M5QJDxMHqp1R4dSG2OiaG6eicUnY61YFdQtSbcyhVoFhrJoD3Vum0wcd6QpMUS8QxHXiaqzA0EPNlqfvyT6ibAtA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),m=d('<p>\u6574\u4F53\u6211\u4EEC\u5C06\u4F1A\u4ECE\u4E0A\u8FB95\u4E2A\u65B9\u9762\u6765\u5206\u6790<code>Webpack</code>\u6253\u5305\u6D41\u7A0B:</p><ol><li><p>\u521D\u59CB\u5316\u53C2\u6570\u9636\u6BB5\u3002</p><p>\u8FD9\u4E00\u6B65\u4F1A\u4ECE\u6211\u4EEC\u914D\u7F6E\u7684<code>webpack.config.js</code>\u4E2D\u8BFB\u53D6\u5230\u5BF9\u5E94\u7684\u914D\u7F6E\u53C2\u6570\u548C<code>shell</code>\u547D\u4EE4\u4E2D\u4F20\u5165\u7684\u53C2\u6570\u8FDB\u884C\u5408\u5E76\u5F97\u5230\u6700\u7EC8\u6253\u5305\u914D\u7F6E\u53C2\u6570\u3002</p></li><li><p>\u5F00\u59CB\u7F16\u8BD1\u51C6\u5907\u9636\u6BB5</p><p>\u8FD9\u4E00\u6B65\u6211\u4EEC\u4F1A\u901A\u8FC7\u8C03\u7528<code>webpack()</code>\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A<code>compiler</code>\u65B9\u6CD5\uFF0C\u521B\u5EFA\u6211\u4EEC\u7684<code>compiler</code>\u5BF9\u8C61\uFF0C\u5E76\u4E14\u6CE8\u518C\u5404\u4E2A<code>Webpack Plugin</code>\u3002\u627E\u5230\u914D\u7F6E\u5165\u53E3\u4E2D\u7684<code>entry</code>\u4EE3\u7801\uFF0C\u8C03\u7528<code>compiler.run()</code>\u65B9\u6CD5\u8FDB\u884C\u7F16\u8BD1\u3002</p></li><li><p>\u6A21\u5757\u7F16\u8BD1\u9636\u6BB5</p><p>\u4ECE\u5165\u53E3\u6A21\u5757\u8FDB\u884C\u5206\u6790\uFF0C\u8C03\u7528\u5339\u914D\u6587\u4EF6\u7684<code>loaders</code>\u5BF9\u6587\u4EF6\u8FDB\u884C\u5904\u7406\u3002\u540C\u65F6\u5206\u6790\u6A21\u5757\u4F9D\u8D56\u7684\u6A21\u5757\uFF0C\u9012\u5F52\u8FDB\u884C\u6A21\u5757\u7F16\u8BD1\u5DE5\u4F5C\u3002</p></li><li><p>\u5B8C\u6210\u7F16\u8BD1\u9636\u6BB5</p><p>\u5728\u9012\u5F52\u5B8C\u6210\u540E\uFF0C\u6BCF\u4E2A\u5F15\u7528\u6A21\u5757\u901A\u8FC7<code>loaders</code>\u5904\u7406\u5B8C\u6210\u540C\u65F6\u5F97\u5230\u6A21\u5757\u4E4B\u95F4\u7684\u76F8\u4E92\u4F9D\u8D56\u5173\u7CFB\u3002</p></li><li><p>\u8F93\u51FA\u6587\u4EF6\u9636\u6BB5</p><p>\u6574\u7406\u6A21\u5757\u4F9D\u8D56\u5173\u7CFB\uFF0C\u540C\u65F6\u5C06\u5904\u7406\u540E\u7684\u6587\u4EF6\u8F93\u51FA\u5230<code>ouput</code>\u7684\u78C1\u76D8\u76EE\u5F55\u4E2D\u3002</p></li></ol><p>\u63A5\u4E0B\u6765\u8BA9\u6211\u4EEC\u8BE6\u7EC6\u7684\u53BB\u63A2\u7D22\u6BCF\u4E00\u6B65\u7A76\u7ADF\u53D1\u751F\u4E86\u4EC0\u4E48\u3002</p><h1 id="\u521B\u5EFA\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u76EE\u5F55" aria-hidden="true">#</a> \u521B\u5EFA\u76EE\u5F55</h1><p>\u5DE5\u6B32\u5584\u5176\u4E8B\uFF0C\u5FC5\u5148\u5229\u5176\u5668\u3002\u9996\u5148\u8BA9\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2A\u826F\u597D\u7684\u76EE\u5F55\u6765\u7BA1\u7406\u6211\u4EEC\u9700\u8981\u5B9E\u73B0\u7684<code>Packing tool</code>\u5427\uFF01</p><p>\u8BA9\u6211\u4EEC\u6765\u521B\u5EFA\u8FD9\u6837\u4E00\u4E2A\u76EE\u5F55:</p>',6),b={href:"https://mmbiz.qpic.cn/sz_mmbiz/H8M5QJDxMHqp1R4dSG2OiaG6eicUnY61YFhqzmawGibkxbib25ial4EQoc481PWkC72Ywv2UaqfXllrgMI0jc9rWgiaQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},p=l("https://mmbiz.qpic.cn/sz_mmbiz/H8M5QJDxMHqp1R4dSG2OiaG6eicUnY61YFhqzmawGibkxbib25ial4EQoc481PWkC72Ywv2UaqfXllrgMI0jc9rWgiaQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),h=d(`<ul><li><code>webpack/core</code>\u5B58\u653E\u6211\u4EEC\u81EA\u5DF1\u5C06\u8981\u5B9E\u73B0\u7684<code>webpack</code>\u6838\u5FC3\u4EE3\u7801\u3002</li><li><code>webpack/example</code>\u5B58\u653E\u6211\u4EEC\u5C06\u7528\u6765\u6253\u5305\u7684\u5B9E\u4F8B\u9879\u76EE\u3002 <ul><li><code>webpack/example/webpak.config.js</code>\u914D\u7F6E\u6587\u4EF6.</li><li><code>webpack/example/src/entry1</code>\u7B2C\u4E00\u4E2A\u5165\u53E3\u6587\u4EF6</li><li><code>webpack/example/src/entry1</code>\u7B2C\u4E8C\u4E2A\u5165\u53E3\u6587\u4EF6</li><li><code>webpack/example/src/index.js</code>\u6A21\u5757\u6587\u4EF6</li></ul></li><li><code>webpack/loaders</code>\u5B58\u653E\u6211\u4EEC\u7684\u81EA\u5B9A\u4E49<code>loader</code>\u3002</li><li><code>webpack/plugins</code>\u5B58\u653E\u6211\u4EEC\u7684\u81EA\u5B9A\u4E49<code>plugin</code>\u3002</li></ul><h1 id="\u521D\u59CB\u5316\u53C2\u6570\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u53C2\u6570\u9636\u6BB5" aria-hidden="true">#</a> \u521D\u59CB\u5316\u53C2\u6570\u9636\u6BB5</h1><p>\u5F80\u5F80\uFF0C\u6211\u4EEC\u5728\u65E5\u5E38\u4F7F\u7528\u9636\u6BB5\u6709\u4E24\u79CD\u65B9\u5F0F\u53BB\u7ED9<code>webpack</code>\u4F20\u9012\u6253\u5305\u53C2\u6570\uFF0C\u8BA9\u6211\u4EEC\u5148\u6765\u770B\u770B\u5982\u4F55\u4F20\u9012\u53C2\u6570:</p><h2 id="cli\u547D\u4EE4\u884C\u4F20\u9012\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#cli\u547D\u4EE4\u884C\u4F20\u9012\u53C2\u6570" aria-hidden="true">#</a> <strong><code>Cli</code>\u547D\u4EE4\u884C\u4F20\u9012\u53C2\u6570</strong></h2><p>\u901A\u5E38\uFF0C\u6211\u4EEC\u5728\u4F7F\u7528\u8C03\u7528<code>webpack</code>\u547D\u4EE4\u65F6\uFF0C\u6709\u65F6\u4F1A\u4F20\u5165\u4E00\u5B9A\u547D\u4EE4\u884C\u53C2\u6570\uFF0C\u6BD4\u5982:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>webpack --mode=production
# \u8C03\u7528webpack\u547D\u4EE4\u6267\u884C\u6253\u5305 \u540C\u65F6\u4F20\u5165mode\u4E3Aproduction

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="webpack-config-js\u4F20\u9012\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#webpack-config-js\u4F20\u9012\u53C2\u6570" aria-hidden="true">#</a> <strong><code>webpack.config.js</code>\u4F20\u9012\u53C2\u6570</strong></h2><p>\u53E6\u4E00\u79CD\u65B9\u5F0F\uFF0C\u6211\u76F8\u4FE1\u5C31\u66F4\u52A0\u8001\u751F\u5E38\u8C08\u4E86\u3002</p><p>\u6211\u4EEC\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u4F7F\u7528<code>webpack.config.js</code>\u5BFC\u51FA\u4E00\u4E2A\u5BF9\u8C61\u8FDB\u884C<code>webpack</code>\u914D\u7F6E:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const path = require(&#39;path&#39;)

// \u5F15\u5165loader\u548Cplugin ...
module.exports = {
  mode: &#39;development&#39;,
  entry: {
    main: path.resolve(__dirname, &#39;./src/entry1.js&#39;),
    second: path.resolve(__dirname, &#39;./src/entry2.js&#39;),
  },
  devtool: false,
// \u57FA\u7840\u76EE\u5F55\uFF0C\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u7528\u4E8E\u4ECE\u914D\u7F6E\u4E2D\u89E3\u6790\u5165\u53E3\u70B9(entry point)\u548C \u52A0\u8F7D\u5668(loader)\u3002
// \u6362\u800C\u8A00\u4E4Bentry\u548Cloader\u7684\u6240\u6709\u76F8\u5BF9\u8DEF\u5F84\u90FD\u662F\u76F8\u5BF9\u4E8E\u8FD9\u4E2A\u8DEF\u5F84\u800C\u8A00\u7684
  context: process.cwd(),
  output: {
    path: path.resolve(__dirname, &#39;./build&#39;),
    filename: &#39;[name].js&#39;,
  },
  plugins: [new PluginA(), new PluginB()],
  resolve: {
    extensions: [&#39;.js&#39;, &#39;.ts&#39;],
  },
  module: {
    rules: [
      {
        test: /\\.js/,
        use: [
// \u4F7F\u7528\u81EA\u5DF1loader\u6709\u4E09\u79CD\u65B9\u5F0F \u8FD9\u91CC\u4EC5\u4EC5\u662F\u4E00\u79CD
          path.resolve(__dirname, &#39;../loaders/loader-1.js&#39;),
          path.resolve(__dirname, &#39;../loaders/loader-2.js&#39;),
        ],
      },
    ],
  },
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540C\u65F6\u8FD9\u4EFD\u914D\u7F6E\u6587\u4EF6\u4E5F\u662F\u6211\u4EEC\u9700\u8981\u4F5C\u4E3A\u5B9E\u4F8B\u9879\u76EE<code>example</code>\u4E0B\u7684\u5B9E\u4F8B\u914D\u7F6E\uFF0C\u63A5\u4E0B\u6765\u8BA9\u6211\u4EEC\u4FEE\u6539<code>example/webpack.config.js</code>\u4E2D\u7684\u5185\u5BB9\u4E3A\u4E0A\u8FF0\u914D\u7F6E\u5427\u3002</p><blockquote><p>\u5F53\u7136\u8FD9\u91CC\u7684loader\u548Cplugin\u76EE\u524D\u4F60\u53EF\u4EE5\u4E0D\u7528\u7406\u89E3\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u4F1A\u9010\u6B65\u5B9E\u73B0\u8FD9\u4E9B\u4E1C\u897F\u5E76\u4E14\u6DFB\u52A0\u5230\u6211\u4EEC\u7684\u6253\u5305\u6D41\u7A0B\u4E2D\u53BB\u3002</p></blockquote><h2 id="\u5B9E\u73B0\u5408\u5E76\u53C2\u6570\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u5408\u5E76\u53C2\u6570\u9636\u6BB5" aria-hidden="true">#</a> <strong>\u5B9E\u73B0\u5408\u5E76\u53C2\u6570\u9636\u6BB5</strong></h2><p>\u8FD9\u4E00\u6B65\uFF0C\u8BA9\u6211\u4EEC\u771F\u6B63\u5F00\u59CB\u52A8\u624B\u5B9E\u73B0\u6211\u4EEC\u7684<code>webpack</code>\u5427\uFF01</p><p>\u9996\u5148\u8BA9\u6211\u4EEC\u5728<code>webpack/core</code>\u4E0B\u65B0\u5EFA\u4E00\u4E2A<code>index.js</code>\u6587\u4EF6\u4F5C\u4E3A\u6838\u5FC3\u5165\u53E3\u6587\u4EF6\u3002</p><p>\u540C\u65F6\u5EFA\u7ACB\u4E00\u4E2A<code>webpack/core</code>\u4E0B\u65B0\u5EFA\u4E00\u4E2A<code>webpack.js</code>\u6587\u4EF6\u4F5C\u4E3A<code>webpack()</code>\u65B9\u6CD5\u7684\u5B9E\u73B0\u6587\u4EF6\u3002</p><p>\u9996\u5148\uFF0C\u6211\u4EEC\u6E05\u695A\u5728<code>NodeJs Api</code>\u4E2D\u662F\u901A\u8FC7<code>webpack()</code>\u65B9\u6CD5\u53BB\u5F97\u5230<code>compiler</code>\u5BF9\u8C61\u7684\u3002</p>`,17),g={href:"https://mmbiz.qpic.cn/sz_mmbiz/H8M5QJDxMHqp1R4dSG2OiaG6eicUnY61YF4Kh04XDSBMgc8alsWd8UcwQy6cTFXWUaLGHFbicGHr5W1PicoqfDOyJA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},x=l("https://mmbiz.qpic.cn/sz_mmbiz/H8M5QJDxMHqp1R4dSG2OiaG6eicUnY61YF4Kh04XDSBMgc8alsWd8UcwQy6cTFXWUaLGHFbicGHr5W1PicoqfDOyJA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),_=d(`<p>\u6B64\u65F6\u8BA9\u6211\u4EEC\u6309\u7167\u539F\u672C\u7684<code>webpack</code>\u63A5\u53E3\u683C\u5F0F\u6765\u8865\u5145\u4E00\u4E0B<code>index.js</code>\u4E2D\u7684\u903B\u8F91:</p><ul><li>\u6211\u4EEC\u9700\u8981\u4E00\u4E2A<code>webpack</code>\u65B9\u6CD5\u53BB\u6267\u884C\u8C03\u7528\u547D\u4EE4\u3002</li><li>\u540C\u65F6\u6211\u4EEC\u5F15\u5165<code>webpack.config.js</code>\u914D\u7F6E\u6587\u4EF6\u4F20\u5165<code>webpack</code>\u65B9\u6CD5\u3002</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// index.js
const webpack = require(&#39;./webpack&#39;);
const config = require(&#39;../example/webpack.config&#39;);
// \u6B65\u9AA41: \u521D\u59CB\u5316\u53C2\u6570 \u6839\u636E\u914D\u7F6E\u6587\u4EF6\u548Cshell\u53C2\u6570\u5408\u6210\u53C2\u6570
const compiler = webpack(config);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u55EF\uFF0C\u770B\u8D77\u6765\u8FD8\u4E0D\u9519\u3002\u63A5\u4E0B\u6765\u8BA9\u6211\u4EEC\u53BB\u5B9E\u73B0\u4E00\u4E0B<code>webpack.js</code>:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function webpack(options) {
// \u5408\u5E76\u53C2\u6570 \u5F97\u5230\u5408\u5E76\u540E\u7684\u53C2\u6570 mergeOptions
  const mergeOptions = _mergeOptions(options);
}

// \u5408\u5E76\u53C2\u6570
function _mergeOptions(options) {
  const shellOptions = process.argv.slice(2).reduce((option, argv) =&gt; {
// argv -&gt; --mode=production
    const [key, value] = argv.split(&#39;=&#39;);
    if (key &amp;&amp; value) {
      const parseKey = key.slice(2);
      option[parseKey] = value;
    }
    return option;
  }, {});
  return { ...options, ...shellOptions };
}

module.export = webpack;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u6211\u4EEC\u9700\u8981\u989D\u5916\u8BF4\u660E\u7684\u662F</p><p><code>webpack</code>\u6587\u4EF6\u4E2D\u9700\u8981\u5BFC\u51FA\u4E00\u4E2A\u540D\u4E3A<code>webpack</code>\u7684\u65B9\u6CD5\uFF0C\u540C\u65F6\u63A5\u53D7\u5916\u90E8\u4F20\u5165\u7684\u914D\u7F6E\u5BF9\u8C61\u3002\u8FD9\u4E2A\u662F\u6211\u4EEC\u5728\u4E0A\u8FF0\u8BB2\u8FF0\u8FC7\u7684\u3002</p><p>\u5F53\u7136\u5173\u4E8E\u6211\u4EEC\u5408\u5E76\u53C2\u6570\u7684\u903B\u8F91\uFF0C\u662F\u5C06<strong>\u5916\u90E8\u4F20\u5165\u7684\u5BF9\u8C61\u548C\u6267\u884C<code>shell</code>\u65F6\u7684\u4F20\u5165\u53C2\u6570\u8FDB\u884C\u6700\u7EC8\u5408\u5E76</strong>\u3002</p><p>\u5728<code>Node Js</code>\u4E2D\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7<code>process.argv.slice(2)</code>\u6765\u83B7\u5F97<code>shell</code>\u547D\u4EE4\u4E2D\u4F20\u5165\u7684\u53C2\u6570\uFF0C\u6BD4\u5982:</p>`,9),k={href:"https://mmbiz.qpic.cn/sz_mmbiz/H8M5QJDxMHqp1R4dSG2OiaG6eicUnY61YFGiaJp0jAmFLKwcfflwpcZKS1uF7593nWSwGKpBLDvjmlA42wvPgWQ1A/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},w=l("https://mmbiz.qpic.cn/sz_mmbiz/H8M5QJDxMHqp1R4dSG2OiaG6eicUnY61YFGiaJp0jAmFLKwcfflwpcZKS1uF7593nWSwGKpBLDvjmlA42wvPgWQ1A/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),f=d(`<p>\u5F53\u7136<code>_mergeOptions</code>\u65B9\u6CD5\u5C31\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u5408\u5E76\u914D\u7F6E\u53C2\u6570\u7684\u65B9\u6CD5\uFF0C\u76F8\u4FE1\u5BF9\u4E8E\u5927\u5BB6\u6765\u8BF4\u5C31\u662F\u5C0F\u83DC\u4E00\u789F\u3002</p><p>\u606D\u559C\u5927\u5BB6\u{1F389}\uFF0C\u5343\u91CC\u4E4B\u884C\u59CB\u4E8E\u8DB3\u4E0B\u3002<strong>\u8FD9\u4E00\u6B65\u6211\u4EEC\u5DF2\u7ECF\u5B8C\u6210\u4E86\u6253\u5305\u6D41\u7A0B\u4E2D\u7684\u7B2C\u4E00\u6B65\uFF1A\u5408\u5E76\u914D\u7F6E\u53C2\u6570</strong>\u3002</p><h1 id="\u7F16\u8BD1\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u9636\u6BB5" aria-hidden="true">#</a> \u7F16\u8BD1\u9636\u6BB5</h1><p>\u5728\u5F97\u5230\u6700\u7EC8\u7684\u914D\u7F6E\u53C2\u6570\u4E4B\u540E\uFF0C\u6211\u4EEC\u9700\u8981\u5728<code>webpack()</code>\u51FD\u6570\u4E2D\u505A\u4EE5\u4E0B\u51E0\u4EF6\u4E8B\u60C5:</p><ul><li>\u901A\u8FC7\u53C2\u6570\u521B\u5EFA<code>compiler</code>\u5BF9\u8C61\u3002\u6211\u4EEC\u770B\u5230\u5B98\u65B9\u6848\u4F8B\u4E2D\u901A\u8FC7\u8C03\u7528<code>webpack(options)</code>\u65B9\u6CD5\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A<code>compiler</code>\u5BF9\u8C61\u3002\u5E76\u4E14\u540C\u65F6\u8C03\u7528<code>compiler.run()</code>\u65B9\u6CD5\u542F\u52A8\u7684\u4EE3\u7801\u8FDB\u884C\u6253\u5305\u3002</li><li>\u6CE8\u518C\u6211\u4EEC\u5B9A\u4E49\u7684<code>webpack plugin</code>\u63D2\u4EF6\u3002</li><li>\u6839\u636E\u4F20\u5165\u7684\u914D\u7F6E\u5BF9\u8C61\u5BFB\u627E\u5BF9\u5E94\u7684\u6253\u5305\u5165\u53E3\u6587\u4EF6\u3002</li></ul><h2 id="\u521B\u5EFAcompiler\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFAcompiler\u5BF9\u8C61" aria-hidden="true">#</a> <strong>\u521B\u5EFA<code>compiler</code>\u5BF9\u8C61</strong></h2><p>\u8BA9\u6211\u4EEC\u5148\u6765\u5B8C\u6210<code>index.js</code>\u4E2D\u7684\u903B\u8F91\u4EE3\u7801\u8865\u5168:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// index.js
const webpack = require(&#39;./webpack&#39;);
const config = require(&#39;../example/webpack.config&#39;);
// \u6B65\u9AA41: \u521D\u59CB\u5316\u53C2\u6570 \u6839\u636E\u914D\u7F6E\u6587\u4EF6\u548Cshell\u53C2\u6570\u5408\u6210\u53C2\u6570
// \u6B65\u9AA42: \u8C03\u7528Webpack(options) \u521D\u59CB\u5316compiler\u5BF9\u8C61
// webpack()\u65B9\u6CD5\u4F1A\u8FD4\u56DE\u4E00\u4E2Acompiler\u5BF9\u8C61

const compiler = webpack(config);

// \u8C03\u7528run\u65B9\u6CD5\u8FDB\u884C\u6253\u5305
compiler.run((err, stats) =&gt; {
  if (err) {
    console.log(err, &#39;err&#39;);
  }
// ...
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u6838\u5FC3\u7F16\u8BD1\u5B9E\u73B0\u5728\u4E8E<code>webpack()</code>\u65B9\u6CD5\u8FD4\u56DE\u7684<code>compiler.run()</code>\u65B9\u6CD5\u4E0A\u3002</p><p>\u4E00\u6B65\u4E00\u6B65\u8BA9\u6211\u4EEC\u6765\u5B8C\u5584\u8FD9\u4E2A<code>webpack()</code>\u65B9\u6CD5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// webpack.js
function webpack(options) {
// \u5408\u5E76\u53C2\u6570 \u5F97\u5230\u5408\u5E76\u540E\u7684\u53C2\u6570 mergeOptions
  const mergeOptions = _mergeOptions(options);
// \u521B\u5EFAcompiler\u5BF9\u8C61
  const compiler = new Compiler(mergeOptions)

  return compiler
}

// ...

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BA9\u6211\u4EEC\u5728<code>webpack/core</code>\u76EE\u5F55\u4E0B\u540C\u6837\u65B0\u5EFA\u4E00\u4E2A<code>compiler.js</code>\u6587\u4EF6\uFF0C\u4F5C\u4E3A<code>compiler</code>\u7684\u6838\u5FC3\u5B9E\u73B0\u6587\u4EF6:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// compiler.js
// Compiler\u7C7B\u8FDB\u884C\u6838\u5FC3\u7F16\u8BD1\u5B9E\u73B0
class Compiler {
  constructor(options) {
    this.options = options;
  }

// run\u65B9\u6CD5\u542F\u52A8\u7F16\u8BD1
// \u540C\u65F6run\u65B9\u6CD5\u63A5\u53D7\u5916\u90E8\u4F20\u9012\u7684callback
  run(callback) {
  }
}

module.exports = Compiler

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u65F6\u6211\u4EEC\u7684<code>Compiler</code>\u7C7B\u5C31\u5148\u642D\u5EFA\u4E00\u4E2A\u57FA\u7840\u7684\u9AA8\u67B6\u4EE3\u7801\u3002</p><p>\u76EE\u524D\uFF0C\u6211\u4EEC\u62E5\u6709\u4E86:</p><ul><li><code>webpack/core/index.js</code>\u4F5C\u4E3A\u6253\u5305\u547D\u4EE4\u7684\u5165\u53E3\u6587\u4EF6\uFF0C\u8FD9\u4E2A\u6587\u4EF6\u5F15\u7528\u4E86\u6211\u4EEC\u81EA\u5DF1\u5B9E\u73B0\u7684<code>webpack</code>\u540C\u65F6\u5F15\u7528\u4E86\u5916\u90E8\u7684<code>webpack.config.js(options)</code>\u3002\u8C03\u7528<code>webpack(options).run()</code>\u5F00\u59CB\u7F16\u8BD1\u3002</li><li><code>webpack/core/webpack.js</code>\u8FD9\u4E2A\u6587\u4EF6\u76EE\u524D\u5904\u7406\u4E86\u53C2\u6570\u7684\u5408\u5E76\u4EE5\u53CA\u4F20\u5165\u5408\u5E76\u540E\u7684\u53C2\u6570<code>new Compiler(mergeOptions)</code>\uFF0C\u540C\u65F6\u8FD4\u56DE\u521B\u5EFA\u7684<code>Compiler</code>\u5B9E\u529B\u5BF9\u8C61\u3002</li><li><code>webpack/core/compiler</code>\uFF0C\u6B64\u65F6\u6211\u4EEC\u7684<code>compiler</code>\u4EC5\u4EC5\u662F\u4F5C\u4E3A\u4E00\u4E2A\u57FA\u7840\u7684\u9AA8\u67B6\uFF0C\u5B58\u5728\u4E00\u4E2A<code>run()</code>\u542F\u52A8\u65B9\u6CD5\u3002</li></ul><h2 id="\u7F16\u5199plugin" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199plugin" aria-hidden="true">#</a> <strong>\u7F16\u5199<code>Plugin</code></strong></h2><p>\u8FD8\u8BB0\u5F97\u6211\u4EEC\u5728<code>webpack.config.js</code>\u4E2D\u4F7F\u7528\u4E86\u4E24\u4E2A<code>plugin</code>---<code>pluginA</code>\u3001<code>pluginB</code>\u63D2\u4EF6\u5417\u3002\u63A5\u4E0B\u6765\u8BA9\u6211\u4EEC\u6765\u4F9D\u6B21\u5B9E\u73B0\u5B83\u4EEC:</p><p>\u5728\u5B9E\u73B0<code>Plugin</code>\u524D\uFF0C\u6211\u4EEC\u9700\u8981\u5148\u6765\u5B8C\u5584\u4E00\u4E0B<code>compiler</code>\u65B9\u6CD5:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const { SyncHook } = require(&#39;tapable&#39;);

class Compiler {
  constructor(options) {
    this.options = options;
// \u521B\u5EFAplugin hooks
    this.hooks = {
// \u5F00\u59CB\u7F16\u8BD1\u65F6\u7684\u94A9\u5B50
      run: new SyncHook(),
// \u8F93\u51FA asset \u5230 output \u76EE\u5F55\u4E4B\u524D\u6267\u884C (\u5199\u5165\u6587\u4EF6\u4E4B\u524D)
      emit: new SyncHook(),
// \u5728 compilation \u5B8C\u6210\u65F6\u6267\u884C \u5168\u90E8\u5B8C\u6210\u7F16\u8BD1\u6267\u884C
      done: new SyncHook(),
    };
  }

// run\u65B9\u6CD5\u542F\u52A8\u7F16\u8BD1
// \u540C\u65F6run\u65B9\u6CD5\u63A5\u53D7\u5916\u90E8\u4F20\u9012\u7684callback
  run(callback) {}
}

module.exports = Compiler;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\uFF0C\u6211\u4EEC\u5728<code>Compiler</code>\u8FD9\u4E2A\u7C7B\u7684\u6784\u9020\u51FD\u6570\u4E2D\u521B\u5EFA\u4E86\u4E00\u4E2A\u5C5E\u6027<code>hooks</code>\uFF0C\u5B83\u7684\u503C\u662F\u4E09\u4E2A\u5C5E\u6027<code>run</code>\u3001<code>emit</code>\u3001<code>done</code>\u3002</p><p>\u5173\u4E8E\u8FD9\u4E09\u4E2A\u5C5E\u6027\u7684\u503C\u5C31\u662F\u6211\u4EEC\u4E0A\u6587\u63D0\u5230\u524D\u7F6E\u77E5\u8BC6\u7684<code>tapable</code>\u7684<code>SyncHook</code>\u65B9\u6CD5\uFF0C\u672C\u8D28\u4E0A\u4F60\u53EF\u4EE5\u7B80\u5355\u5C06<code>SyncHook()</code>\u65B9\u6CD5\u7406\u89E3\u79F0\u4E3A\u4E00\u4E2A<code>Emitter Event</code>\u7C7B\u3002</p><p>\u5F53\u6211\u4EEC\u901A\u8FC7<code>new SyncHook()</code>\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u5B9E\u4F8B\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7<code>this.hook.run.tap(&#39;name&#39;,callback)</code>\u65B9\u6CD5\u4E3A\u8FD9\u4E2A\u5BF9\u8C61\u4E0A\u6DFB\u52A0\u4E8B\u4EF6\u76D1\u542C\uFF0C\u7136\u540E\u5728\u901A\u8FC7<code>this.hook.run.call()</code>\u6267\u884C\u6240\u6709<code>tap</code>\u6CE8\u518C\u7684\u4E8B\u4EF6\u3002</p><blockquote><p>\u5F53\u7136webpack\u771F\u5B9E\u6E90\u7801\u4E2D\uFF0C\u8FD9\u91CC\u6709\u975E\u5E38\u591A\u7684hook\u3002\u4EE5\u53CA\u5206\u522B\u5B58\u5728\u540C\u6B65/\u5F02\u6B65\u94A9\u5B50\uFF0C\u6211\u4EEC\u8FD9\u91CC\u66F4\u591A\u7684\u662F\u4E3A\u5927\u5BB6\u8BB2\u89E3\u6E05\u695A\u6D41\u7A0B\uFF0C\u6240\u4EE5\u4EC5\u5217\u4E3E\u4E86\u4E09\u4E2A\u5E38\u89C1\u4E14\u7B80\u5355\u7684\u540C\u6B65\u94A9\u5B50\u3002</p></blockquote><p>\u6B64\u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u660E\u767D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7<code>Compiler</code>\u7C7B\u8FD4\u56DE\u7684\u5B9E\u4F8B\u5BF9\u8C61\u4E0A<code>compiler.hooks.run.tap</code>\u6CE8\u518C\u94A9\u5B50\u3002</p><p>\u63A5\u4E0B\u6765\u8BA9\u6211\u4EEC\u5207\u56DE\u5230<code>webpack.js</code>\u4E2D\uFF0C\u8BA9\u6211\u4EEC\u6765\u586B\u5145\u5173\u4E8E\u63D2\u4EF6\u6CE8\u518C\u7684\u903B\u8F91:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const Compiler = require(&#39;./compiler&#39;);

function webpack(options) {
// \u5408\u5E76\u53C2\u6570
  const mergeOptions = _mergeOptions(options);
// \u521B\u5EFAcompiler\u5BF9\u8C61
  const compiler = new Compiler(mergeOptions);
// \u52A0\u8F7D\u63D2\u4EF6
  _loadPlugin(options.plugins, compiler);
  return compiler;
}

// \u5408\u5E76\u53C2\u6570
function _mergeOptions(options) {
  const shellOptions = process.argv.slice(2).reduce((option, argv) =&gt; {
// argv -&gt; --mode=production
    const [key, value] = argv.split(&#39;=&#39;);
    if (key &amp;&amp; value) {
      const parseKey = key.slice(2);
      option[parseKey] = value;
    }
    return option;
  }, {});
  return { ...options, ...shellOptions };
}

// \u52A0\u8F7D\u63D2\u4EF6\u51FD\u6570
function _loadPlugin(plugins, compiler) {
  if (plugins &amp;&amp; Array.isArray(plugins)) {
    plugins.forEach((plugin) =&gt; {
      plugin.apply(compiler);
    });
  }
}

module.exports = webpack;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u6211\u4EEC\u5728\u521B\u5EFA\u5B8C\u6210<code>compiler</code>\u5BF9\u8C61\u540E\uFF0C\u8C03\u7528\u4E86<code>_loadPlugin</code>\u65B9\u6CD5\u8FDB\u884C<strong>\u6CE8\u518C\u63D2\u4EF6</strong>\u3002</p><p>\u6709\u63A5\u89E6\u8FC7<code>webpack</code>\u63D2\u4EF6\u5F00\u53D1\u7684\u540C\u5B66\uFF0C\u6216\u591A\u6216\u5C11\u53EF\u80FD\u90FD\u6709\u4E86\u89E3\u8FC7\u3002<strong>\u4EFB\u4F55\u4E00\u4E2A<code>webpack</code>\u63D2\u4EF6\u90FD\u662F\u4E00\u4E2A\u7C7B(\u5F53\u7136\u7C7B\u672C\u8D28\u4E0A\u90FD\u662Ffunciton\u7684\u8BED\u6CD5\u7CD6)\uFF0C\u6BCF\u4E2A\u63D2\u4EF6\u90FD\u5FC5\u987B\u5B58\u5728\u4E00\u4E2A<code>apply</code>\u65B9\u6CD5</strong>\u3002</p><p>\u8FD9\u4E2A<code>apply</code>\u65B9\u6CD5\u4F1A\u63A5\u53D7\u4E00\u4E2A<code>compiler</code>\u5BF9\u8C61\u3002\u6211\u4EEC\u4E0A\u8FB9\u505A\u7684\u5C31\u662F\u4F9D\u6B21\u8C03\u7528\u4F20\u5165\u7684<code>plugin</code>\u7684<code>apply</code>\u65B9\u6CD5\u5E76\u4E14\u4F20\u5165\u6211\u4EEC\u7684<code>compiler</code>\u5BF9\u8C61\u3002</p><blockquote><p>\u8FD9\u91CC\u6211\u8BF7\u4F60\u8BB0\u4F4F\u4E0A\u8FB9\u7684\u6D41\u7A0B\uFF0C\u65E5\u5E38\u6211\u4EEC\u7F16\u5199webpack plugin\u65F6\u672C\u8D28\u4E0A\u5C31\u662F\u64CD\u4F5Ccompiler\u5BF9\u8C61\u4ECE\u800C\u5F71\u54CD\u6253\u5305\u7ED3\u679C\u8FDB\u884C\u3002</p></blockquote><blockquote><p>\u4E5F\u8BB8\u6B64\u65F6\u4F60\u5E76\u4E0D\u662F\u5F88\u7406\u89E3\u8FD9\u53E5\u8BDD\u7684\u542B\u4E49\uFF0C\u5728\u6211\u4EEC\u4E32\u8054\u5B8C\u6210\u6574\u4E2A\u6D41\u7A0B\u4E4B\u540E\u6211\u4F1A\u4E3A\u5927\u5BB6\u63ED\u6653\u8FD9\u4E2A\u7B54\u6848\u3002</p></blockquote><p>\u63A5\u4E0B\u6765\u8BA9\u6211\u4EEC\u53BB\u7F16\u5199\u8FD9\u4E9B\u4E2A\u63D2\u4EF6:</p><p>\u4E0D\u4E86\u89E3\u63D2\u4EF6\u5F00\u53D1\u7684\u540C\u5B66\u53EF\u4EE5\u53BB\u7A0D\u5FAE\u770B\u4E00\u4E0B<strong>\u5B98\u65B9\u7684\u4ECB\u7ECD[6]</strong>\uFF0C\u5176\u5B9E\u4E0D\u662F\u5F88\u96BE,\u6211\u4E2A\u4EBA\u5F3A\u70C8\u5EFA\u8BAE\u5982\u679C\u4E0D\u4E86\u89E3\u53EF\u4EE5\u5148\u53BB\u770B\u770B\u518D\u56DE\u6765\u7ED3\u5408\u4E0A\u53D8\u8BB2\u7684\u5185\u5BB9\u4F60\u4E00\u5B9A\u4F1A\u6709\u6240\u6536\u83B7\u7684\u3002</p><p>\u9996\u5148\u8BA9\u6211\u4EEC\u5148\u521B\u5EFA\u6587\u4EF6:</p>`,35),q={href:"https://mmbiz.qpic.cn/sz_mmbiz/H8M5QJDxMHqp1R4dSG2OiaG6eicUnY61YFdXhHgY5z0bcc1nEhgrM1kEd3AYZvzXpibpicXccm2AibWiaCG2dJW5OhicQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},y=l("https://mmbiz.qpic.cn/sz_mmbiz/H8M5QJDxMHqp1R4dSG2OiaG6eicUnY61YFdXhHgY5z0bcc1nEhgrM1kEd3AYZvzXpibpicXccm2AibWiaCG2dJW5OhicQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),A=d(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// plugin-a.js
// \u63D2\u4EF6A
class PluginA {
  apply(compiler) {
// \u6CE8\u518C\u540C\u6B65\u94A9\u5B50
// \u8FD9\u91CC\u7684compiler\u5BF9\u8C61\u5C31\u662F\u6211\u4EECnew Compiler()\u521B\u5EFA\u7684\u5B9E\u4F8B\u54E6
    compiler.hooks.run.tap(&#39;Plugin A&#39;, () =&gt; {
// \u8C03\u7528
      console.log(&#39;PluginA&#39;);
    });
  }
}

module.exports = PluginA;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// plugin-b.js
class PluginB {
  apply(compiler) {
    compiler.hooks.done.tap(&#39;Plugin B&#39;, () =&gt; {
      console.log(&#39;PluginB&#39;);
    });
  }
}

module.exports = PluginB;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u770B\u5230\u8FD9\u91CC\u6211\u76F8\u4FE1\u5927\u90E8\u5206\u540C\u5B66\u90FD\u5DF2\u7ECF\u53CD\u5E94\u8FC7\u6765\u4E86\uFF0C<code>compiler.hooks.done.tap</code>\u4E0D\u5C31\u662F\u6211\u4EEC\u4E0A\u8FB9\u8BB2\u5230\u7684\u901A\u8FC7<code>tapable</code>\u521B\u5EFA\u4E00\u4E2A<code>SyncHook</code>\u5B9E\u4F8B\u7136\u540E\u901A\u8FC7<code>tap</code>\u65B9\u6CD5\u6CE8\u518C\u4E8B\u4EF6\u5417\uFF1F</p><p>\u6CA1\u9519\uFF01\u7684\u786E\u662F\u8FD9\u6837\uFF0C\u5173\u4E8E<code>webpack</code>\u63D2\u4EF6<strong>\u672C\u8D28\u4E0A\u5C31\u662F\u901A\u8FC7\u53D1\u5E03\u8BA2\u9605\u7684\u6A21\u5F0F\uFF0C\u901A\u8FC7<code>compiler</code>\u4E0A\u76D1\u542C\u4E8B\u4EF6\u3002\u7136\u540E\u518D\u6253\u5305\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u89E6\u53D1\u76D1\u542C\u7684\u4E8B\u4EF6\u4ECE\u800C\u6DFB\u52A0\u4E00\u5B9A\u7684\u903B\u8F91\u5F71\u54CD\u6253\u5305\u7ED3\u679C</strong>\u3002</p><p>\u6211\u4EEC\u5728\u6BCF\u4E2A\u63D2\u4EF6\u7684<code>apply</code>\u65B9\u6CD5\u4E0A\u901A\u8FC7<code>tap</code>\u5728\u7F16\u8BD1\u51C6\u5907\u9636\u6BB5(\u4E5F\u5C31\u662F\u8C03\u7528<code>webpack()</code>\u51FD\u6570\u65F6)\u8FDB\u884C\u8BA2\u9605\u5BF9\u5E94\u7684\u4E8B\u4EF6\uFF0C\u5F53\u6211\u4EEC\u7684\u7F16\u8BD1\u6267\u884C\u5230\u4E00\u5B9A\u9636\u6BB5\u65F6\u53D1\u5E03\u5BF9\u5E94\u7684\u4E8B\u4EF6\u544A\u8BC9\u8BA2\u9605\u8005\u53BB\u6267\u884C\u76D1\u542C\u7684\u4E8B\u4EF6\uFF0C\u4ECE\u800C\u8FBE\u5230\u5728\u7F16\u8BD1\u9636\u6BB5\u7684\u4E0D\u540C\u751F\u547D\u5468\u671F\u5185\u53BB\u89E6\u53D1\u5BF9\u5E94\u7684<code>plugin</code>\u3002</p><blockquote><p>\u6240\u4EE5\u8FD9\u91CC\u4F60\u5E94\u8BE5\u6E05\u695A\uFF0C\u6211\u4EEC\u5728\u8FDB\u884Cwebpack\u63D2\u4EF6\u5F00\u53D1\u65F6\uFF0Ccompiler\u5BF9\u8C61\u4E0A\u5B58\u653E\u7740\u672C\u6B21\u6253\u5305\u7684\u6240\u6709\u76F8\u5173\u5C5E\u6027\uFF0C\u6BD4\u5982options\u6253\u5305\u7684\u914D\u7F6E\uFF0C\u4EE5\u53CA\u6211\u4EEC\u4F1A\u5728\u4E4B\u540E\u8BB2\u5230\u7684\u5404\u79CD\u5C5E\u6027\u3002</p></blockquote><h2 id="\u5BFB\u627Eentry\u5165\u53E3" tabindex="-1"><a class="header-anchor" href="#\u5BFB\u627Eentry\u5165\u53E3" aria-hidden="true">#</a> <strong>\u5BFB\u627E<code>entry</code>\u5165\u53E3</strong></h2><p>\u8FD9\u4E4B\u540E\uFF0C\u6211\u4EEC\u7684\u7EDD\u5927\u591A\u6570\u5185\u5BB9\u90FD\u4F1A\u653E\u5728<code>compiler.js</code>\u4E2D\u53BB\u5B9E\u73B0<code>Compiler</code>\u8FD9\u4E2A\u7C7B\u5B9E\u73B0\u6253\u5305\u7684\u6838\u5FC3\u6D41\u7A0B\u3002</p><p><strong>\u4EFB\u4F55\u4E00\u6B21\u6253\u5305\u90FD\u9700\u8981\u5165\u53E3\u6587\u4EF6\uFF0C\u63A5\u4E0B\u6765\u8BA9\u6211\u4EEC\u5C31\u4ECE\u771F\u6B63\u8FDB\u5165\u6253\u5305\u7F16\u8BD1\u9636\u6BB5\u3002\u9996\u5F53\u5176\u51B2\u7684\u4E8B\u60C5\u5C31\u662F\uFF0C\u6211\u4EEC\u9700\u8981\u6839\u636E\u5165\u53E3\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84\u5BFB\u627E\u5230\u5BF9\u5E94\u5165\u53E3\u6587\u4EF6\u3002</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// compiler.js
const { SyncHook } = require(&#39;tapable&#39;);
const { toUnixPath } = require(&#39;./utils&#39;);

class Compiler {
  constructor(options) {
    this.options = options;
// \u76F8\u5BF9\u8DEF\u5F84\u8DDF\u8DEF\u5F84 Context\u53C2\u6570
    this.rootPath = this.options.context || toUnixPath(process.cwd());
// \u521B\u5EFAplugin hooks
    this.hooks = {
// \u5F00\u59CB\u7F16\u8BD1\u65F6\u7684\u94A9\u5B50
      run: new SyncHook(),
// \u8F93\u51FA asset \u5230 output \u76EE\u5F55\u4E4B\u524D\u6267\u884C (\u5199\u5165\u6587\u4EF6\u4E4B\u524D)
      emit: new SyncHook(),
// \u5728 compilation \u5B8C\u6210\u65F6\u6267\u884C \u5168\u90E8\u5B8C\u6210\u7F16\u8BD1\u6267\u884C
      done: new SyncHook(),
    };
  }

// run\u65B9\u6CD5\u542F\u52A8\u7F16\u8BD1
// \u540C\u65F6run\u65B9\u6CD5\u63A5\u53D7\u5916\u90E8\u4F20\u9012\u7684callback
  run(callback) {
// \u5F53\u8C03\u7528run\u65B9\u5F0F\u65F6 \u89E6\u53D1\u5F00\u59CB\u7F16\u8BD1\u7684plugin
    this.hooks.run.call();
// \u83B7\u53D6\u5165\u53E3\u914D\u7F6E\u5BF9\u8C61
    const entry = this.getEntry();
  }

// \u83B7\u53D6\u5165\u53E3\u6587\u4EF6\u8DEF\u5F84
  getEntry() {
    let entry = Object.create(null);
    const { entry: optionsEntry } = this.options;
    if (typeof optionsEntry === &#39;string&#39;) {
      entry[&#39;main&#39;] = optionsEntry;
    } else {
      entry = optionsEntry;
    }
// \u5C06entry\u53D8\u6210\u7EDD\u5BF9\u8DEF\u5F84
    Object.keys(entry).forEach((key) =&gt; {
      const value = entry[key];
      if (!path.isAbsolute(value)) {
// \u8F6C\u5316\u4E3A\u7EDD\u5BF9\u8DEF\u5F84\u7684\u540C\u65F6\u7EDF\u4E00\u8DEF\u5F84\u5206\u9694\u7B26\u4E3A /
        entry[key] = toUnixPath(path.join(this.rootPath, value));
      }
    });
    return entry;
  }
}

module.exports = Compiler;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// utils/index.js
/**
 *
 * \u7EDF\u4E00\u8DEF\u5F84\u5206\u9694\u7B26 \u4E3B\u8981\u662F\u4E3A\u4E86\u540E\u7EED\u751F\u6210\u6A21\u5757ID\u65B9\u4FBF
 * @param {*} path
 * @returns
 */
function toUnixPath(path) {
  return path.replace(/\\\\/g, &#39;/&#39;);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E00\u6B65\u6211\u4EEC\u901A\u8FC7<code>options.entry</code>\u5904\u7406\u83B7\u5F97\u5165\u53E3\u6587\u4EF6\u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002</p><p>\u8FD9\u91CC\u6709\u51E0\u4E2A\u9700\u8981\u6CE8\u610F\u7684\u5C0F\u70B9:</p><ul><li><code>this.hooks.run.call()</code></li></ul><p>\u5728\u6211\u4EEC<code>_loadePlugins</code>\u51FD\u6570\u4E2D\u5BF9\u4E8E\u6BCF\u4E00\u4E2A\u4F20\u5165\u7684\u63D2\u4EF6\u5728<code>compiler</code>\u5B9E\u4F8B\u5BF9\u8C61\u4E2D\u8FDB\u884C\u4E86\u8BA2\u9605\uFF0C\u90A3\u4E48\u5F53\u6211\u4EEC\u8C03\u7528<code>run</code>\u65B9\u6CD5\u65F6\uFF0C\u7B49\u4E8E\u771F\u6B63\u5F00\u59CB\u6267\u884C\u7F16\u8BD1\u3002\u8FD9\u4E2A\u9636\u6BB5<strong>\u76F8\u5F53\u4E8E\u6211\u4EEC\u9700\u8981\u544A\u8BC9\u8BA2\u9605\u8005\uFF0C\u53D1\u5E03\u5F00\u59CB\u6267\u884C\u7684\u8BA2\u9605</strong>\u3002\u6B64\u65F6\u6211\u4EEC\u901A\u8FC7<code>this.hooks.run.call()</code>\u6267\u884C\u5173\u4E8E<code>run</code>\u7684\u6240\u6709<code>tap</code>\u76D1\u542C\u65B9\u6CD5\uFF0C\u4ECE\u800C\u89E6\u53D1\u5BF9\u5E94\u7684<code>plugin</code>\u903B\u8F91\u3002</p><ul><li><code>this.rootPath</code>:</li></ul><p>\u5728\u4E0A\u8FF0\u7684\u5916\u90E8<code>webpack.config.js</code>\u4E2D\u6211\u4EEC\u914D\u7F6E\u4E86\u4E00\u4E2A\xA0<code>context: process.cwd()</code>\uFF0C\u5176\u5B9E\u771F\u5B9E<code>webpack</code>\u4E2D\u8FD9\u4E2A<code>context</code>\u503C\u9ED8\u8BA4\u4E5F\u662F<code>process.cwd()</code>\u3002</p><p>\u5173\u4E8E\u5B83\u7684\u8BE6\u7EC6\u89E3\u91CA\u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u770B\u5230<strong>Context[7]</strong>\u3002</p><p>\u7B80\u800C\u8A00\u4E4B\uFF0C\u8FD9\u4E2A\u8DEF\u5F84\u5C31\u662F\u6211\u4EEC\u9879\u76EE\u542F\u52A8\u7684\u76EE\u5F55\u8DEF\u5F84\uFF0C\u4EFB\u4F55<code>entry</code>\u548C<code>loader</code>\u4E2D\u7684\u76F8\u5BF9\u8DEF\u5F84\u90FD\u662F\u9488\u5BF9\u4E8E<code>context</code>\u8FD9\u4E2A\u53C2\u6570\u7684\u76F8\u5BF9\u8DEF\u5F84\u3002</p><p>\u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528<code>this.rootPath</code>\u5728\u6784\u9020\u51FD\u6570\u4E2D\u6765\u4FDD\u5B58\u8FD9\u4E2A\u53D8\u91CF\u3002</p><ul><li><code>toUnixPath</code>\u5DE5\u5177\u65B9\u6CD5:</li></ul><p>\u56E0\u4E3A\u4E0D\u540C\u64CD\u4F5C\u7CFB\u7EDF\u4E0B\uFF0C\u6587\u4EF6\u5206\u9694\u8DEF\u5F84\u662F\u4E0D\u540C\u7684\u3002\u8FD9\u91CC\u6211\u4EEC\u7EDF\u4E00\u4F7F\u7528<code>\\</code>\u6765\u66FF\u6362\u8DEF\u5F84\u4E2D\u7684<code>//</code>\u6765\u66FF\u6362\u6A21\u5757\u8DEF\u5F84\u3002\u540E\u7EED\u6211\u4EEC\u4F1A<strong>\u4F7F\u7528\u6A21\u5757\u76F8\u5BF9\u4E8E<code>rootPath</code>\u7684\u8DEF\u5F84\u4F5C\u4E3A\u6BCF\u4E00\u4E2A\u6587\u4EF6\u7684\u552F\u4E00ID</strong>\uFF0C\u6240\u4EE5\u8FD9\u91CC\u7EDF\u4E00\u5904\u7406\u4E0B\u8DEF\u5F84\u5206\u9694\u7B26\u3002</p><ul><li><code>entry</code>\u7684\u5904\u7406\u65B9\u6CD5:</li></ul><p>\u5173\u4E8E<code>entry</code>\u914D\u7F6E\uFF0C<code>webpack</code>\u4E2D\u5176\u5B9E\u6709\u5F88\u591A\u79CD\u3002\u6211\u4EEC\u8FD9\u91CC\u8003\u8651\u4E86\u6BD4\u8F83\u5E38\u89C1\u7684\u4E24\u79CD\u914D\u7F6E\u65B9\u5F0F:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>entry:&#39;entry1.js&#39;

// \u672C\u8D28\u4E0A\u8FD9\u6BB5\u4EE3\u7801\u5728webpack\u4E2D\u4F1A\u88AB\u8F6C\u5316\u4E3A
entry: {
    main:&#39;entry1.js
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>entry: {
   &#39;entry1&#39;:&#39;./entry1.js&#39;,
   &#39;entry2&#39;:&#39;/user/wepback/example/src/entry2.js&#39;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E24\u79CD\u65B9\u5F0F\u4EFB\u4F55\u65B9\u5F0F\u90FD\u4F1A\u7ECF\u8FC7<code>getEntry</code>\u65B9\u6CD5\u6700\u7EC8\u8F6C\u5316\u79F0\u4E3A<code>{ [\u6A21\u5757\u540D]:[\u6A21\u5757\u7EDD\u5BF9\u8DEF\u5F84]... }</code>\u7684\u5F62\u5F0F\uFF0C\u5173\u4E8E<code>geEntry()</code>\u65B9\u6CD5\u5176\u5B9E\u975E\u5E38\u7B80\u5355\uFF0C\u8FD9\u91CC\u6211\u5C31\u4E0D\u8FC7\u4E8E\u7D2F\u8D58\u8FD9\u4E2A\u65B9\u6CD5\u7684\u5B9E\u73B0\u8FC7\u7A0B\u4E86\u3002</p><p>\u8FD9\u4E00\u6B65\uFF0C\u6211\u4EEC\u5C31\u901A\u8FC7<code>getEntry</code>\u65B9\u6CD5\u83B7\u5F97\u4E86\u4E00\u4E2A<code>key</code>\u4E3A<code>entryName</code>,<code>value</code>\u4E3A<code>entryAbsolutePath</code>\u7684\u5BF9\u8C61\u4E86\uFF0C\u63A5\u6765\u4E0B\u5C31\u8BA9\u6211\u4EEC\u4ECE\u5165\u53E3\u6587\u4EF6\u51FA\u53D1\u8FDB\u884C\u7F16\u8BD1\u6D41\u7A0B\u5427\u3002</p><h1 id="\u6A21\u5757\u7F16\u8BD1\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757\u7F16\u8BD1\u9636\u6BB5" aria-hidden="true">#</a> \u6A21\u5757\u7F16\u8BD1\u9636\u6BB5</h1><p>\u4E0A\u8FB9\u6211\u4EEC\u8BB2\u8FF0\u4E86\u5173\u4E8E\u7F16\u8BD1\u9636\u6BB5\u7684\u51C6\u5907\u5DE5\u4F5C:</p><ul><li>\u76EE\u5F55/\u6587\u4EF6\u57FA\u7840\u903B\u8F91\u8865\u5145\u3002</li><li>\u901A\u8FC7<code>hooks.tap</code>\u6CE8\u518C<code>webpack</code>\u63D2\u4EF6\u3002</li><li><code>getEntry</code>\u65B9\u6CD5\u83B7\u5F97\u5404\u4E2A\u5165\u53E3\u7684\u5BF9\u8C61\u3002</li></ul><p>\u63A5\u4E0B\u6765\u8BA9\u6211\u4EEC\u7EE7\u7EED\u5B8C\u5584<code>compiler.js</code>\u3002</p><p>\u5728\u6A21\u5757\u7F16\u8BD1\u9636\u6BB5\uFF0C\u6211\u4EEC\u9700\u8981\u505A\u7684\u4E8B\u4EF6:</p><ul><li>\u6839\u636E\u5165\u53E3\u6587\u4EF6\u8DEF\u5F84\u5206\u6790\u5165\u53E3\u6587\u4EF6\uFF0C\u5BF9\u4E8E\u5165\u53E3\u6587\u4EF6\u8FDB\u884C\u5339\u914D\u5BF9\u5E94\u7684<code>loader</code>\u8FDB\u884C\u5904\u7406\u5165\u53E3\u6587\u4EF6\u3002</li><li>\u5C06<code>loader</code>\u5904\u7406\u5B8C\u6210\u7684\u5165\u53E3\u6587\u4EF6\u4F7F\u7528<code>webpack</code>\u8FDB\u884C\u7F16\u8BD1\u3002</li><li>\u5206\u6790\u5165\u53E3\u6587\u4EF6\u4F9D\u8D56\uFF0C\u91CD\u590D\u4E0A\u8FB9\u4E24\u4E2A\u6B65\u9AA4\u7F16\u8BD1\u5BF9\u5E94\u4F9D\u8D56\u3002</li><li>\u5982\u679C\u5D4C\u5957\u6587\u4EF6\u5B58\u5728\u4F9D\u8D56\u6587\u4EF6\uFF0C\u9012\u5F52\u8C03\u7528\u4F9D\u8D56\u6A21\u5757\u8FDB\u884C\u7F16\u8BD1\u3002</li><li>\u9012\u5F52\u7F16\u8BD1\u5B8C\u6210\u540E\uFF0C\u7EC4\u88C5\u4E00\u4E2A\u4E2A\u5305\u542B\u591A\u4E2A\u6A21\u5757\u7684<code>chunk</code></li></ul><p>\u9996\u5148\uFF0C\u6211\u4EEC\u5148\u6765\u7ED9<code>compiler.js</code>\u7684\u6784\u9020\u51FD\u6570\u4E2D\u8865\u5145\u4E00\u4E0B\u5BF9\u5E94\u7684\u903B\u8F91:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Compiler {
  constructor(options) {
    this.options = options;
// \u521B\u5EFAplugin hooks
    this.hooks = {
// \u5F00\u59CB\u7F16\u8BD1\u65F6\u7684\u94A9\u5B50
      run: new SyncHook(),
// \u8F93\u51FA asset \u5230 output \u76EE\u5F55\u4E4B\u524D\u6267\u884C (\u5199\u5165\u6587\u4EF6\u4E4B\u524D)
      emit: new SyncHook(),
// \u5728 compilation \u5B8C\u6210\u65F6\u6267\u884C \u5168\u90E8\u5B8C\u6210\u7F16\u8BD1\u6267\u884C
      done: new SyncHook(),
    };
// \u4FDD\u5B58\u6240\u6709\u5165\u53E3\u6A21\u5757\u5BF9\u8C61
    this.entries = new Set();
// \u4FDD\u5B58\u6240\u6709\u4F9D\u8D56\u6A21\u5757\u5BF9\u8C61
    this.modules = new Set();
// \u6240\u6709\u7684\u4EE3\u7801\u5757\u5BF9\u8C61
    this.chunks = new Set();
// \u5B58\u653E\u672C\u6B21\u4EA7\u51FA\u7684\u6587\u4EF6\u5BF9\u8C61
    this.assets = new Set();
// \u5B58\u653E\u672C\u6B21\u7F16\u8BD1\u6240\u6709\u4EA7\u51FA\u7684\u6587\u4EF6\u540D
    this.files = new Set();
  }
// ...
 }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u6211\u4EEC\u901A\u8FC7\u7ED9<code>compiler</code>\u6784\u9020\u51FD\u6570\u4E2D\u6DFB\u52A0\u4E00\u4E9B\u5217\u5C5E\u6027\u6765\u4FDD\u5B58\u5173\u4E8E\u7F16\u8BD1\u9636\u6BB5\u751F\u6210\u7684\u5BF9\u5E94\u8D44\u6E90/\u6A21\u5757\u5BF9\u8C61\u3002</p><blockquote><p>\u5173\u4E8Eentries\\modules\\chunks\\assets\\files\u8FD9\u51E0\u4E2ASet\u5BF9\u8C61\u662F\u8D2F\u7A7F\u6211\u4EEC\u6838\u5FC3\u6253\u5305\u6D41\u7A0B\u7684\u5C5E\u6027\uFF0C\u5B83\u4EEC\u5404\u81EA\u7528\u6765\u50A8\u5B58\u7F16\u8BD1\u9636\u6BB5\u4E0D\u540C\u7684\u8D44\u6E90\u4ECE\u800C\u6700\u7EC8\u901A\u8FC7\u5BF9\u5E94\u7684\u5C5E\u6027\u8FDB\u884C\u751F\u6210\u7F16\u8BD1\u540E\u7684\u6587\u4EF6\u3002</p></blockquote><h2 id="\u6839\u636E\u5165\u53E3\u6587\u4EF6\u8DEF\u5F84\u5206\u6790\u5165\u53E3\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6839\u636E\u5165\u53E3\u6587\u4EF6\u8DEF\u5F84\u5206\u6790\u5165\u53E3\u6587\u4EF6" aria-hidden="true">#</a> <strong>\u6839\u636E\u5165\u53E3\u6587\u4EF6\u8DEF\u5F84\u5206\u6790\u5165\u53E3\u6587\u4EF6</strong></h2><p>\u4E0A\u8FB9\u8BF4\u5230\u6211\u4EEC\u5728<code>run</code>\u65B9\u6CD5\u4E2D\u5DF2\u7ECF\u53EF\u4EE5\u901A\u8FC7<code>this.getEntry();</code>\u83B7\u5F97\u5BF9\u5E94\u7684\u5165\u53E3\u5BF9\u8C61\u4E86\uFF5E</p><p>\u63A5\u4E0B\u6765\u5C31\u8BA9\u6211\u4EEC\u4ECE\u5165\u53E3\u6587\u4EF6\u5F00\u59CB\u53BB\u5206\u6790\u5165\u53E3\u6587\u4EF6\u5427\uFF01</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Compiler {
// run\u65B9\u6CD5\u542F\u52A8\u7F16\u8BD1
// \u540C\u65F6run\u65B9\u6CD5\u63A5\u53D7\u5916\u90E8\u4F20\u9012\u7684callback
  run(callback) {
// \u5F53\u8C03\u7528run\u65B9\u5F0F\u65F6 \u89E6\u53D1\u5F00\u59CB\u7F16\u8BD1\u7684plugin
    this.hooks.run.call();
// \u83B7\u53D6\u5165\u53E3\u914D\u7F6E\u5BF9\u8C61
    const entry = this.getEntry();
// \u7F16\u8BD1\u5165\u53E3\u6587\u4EF6
    this.buildEntryModule(entry);
  }

  buildEntryModule(entry) {
    Object.keys(entry).forEach((entryName) =&gt; {
      const entryPath = entry[entryName];
      const entryObj = this.buildModule(entryName, entryPath);
      this.entries.add(entryObj);
    });
  }

// \u6A21\u5757\u7F16\u8BD1\u65B9\u6CD5
  buildModule(moduleName,modulePath) {
// ...
    return {}
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u6211\u4EEC\u6DFB\u52A0\u4E86\u4E00\u4E2A\u540D\u4E3A<code>buildEntryModule</code>\u65B9\u6CD5\u4F5C\u4E3A\u5165\u53E3\u6A21\u5757\u7F16\u8BD1\u65B9\u6CD5\u3002\u5FAA\u73AF\u5165\u53E3\u5BF9\u8C61\uFF0C\u5F97\u5230\u6BCF\u4E00\u4E2A\u5165\u53E3\u5BF9\u8C61\u7684\u540D\u79F0\u548C\u8DEF\u5F84\u3002</p><blockquote><p>\u6BD4\u5982\u5982\u5047\u4F7F\u6211\u4EEC\u5728\u5F00\u5934\u4F20\u5165entry:{ main:&#39;./src/main.js&#39; }\u7684\u8BDD\uFF0CbuildEntryModule\u83B7\u5F97\u7684\u5F62\u53C2entry\u4E3A{ main: &quot;/src...[\u4F60\u7684\u7EDD\u5BF9\u8DEF\u5F84]&quot; }, \u6B64\u65F6\u6211\u4EECbuildModule\u65B9\u6CD5\u63A5\u53D7\u7684entryName\u4E3Amain,entryPath\u4E3A\u5165\u53E3\u6587\u4EF6main\u5BF9\u5E94\u7684\u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002</p></blockquote><blockquote><p>\u5355\u4E2A\u5165\u53E3\u7F16\u8BD1\u5B8C\u6210\u540E\uFF0C\u6211\u4EEC\u4F1A\u5728buildModule\u65B9\u6CD5\u4E2D\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u3002\u8FD9\u4E2A\u5BF9\u8C61\u5C31\u662F\u6211\u4EEC\u7F16\u8BD1\u5165\u53E3\u6587\u4EF6\u540E\u7684\u5BF9\u8C61\u3002</p></blockquote><h2 id="buildmodule\u6A21\u5757\u7F16\u8BD1\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#buildmodule\u6A21\u5757\u7F16\u8BD1\u65B9\u6CD5" aria-hidden="true">#</a> <strong><code>buildModule</code>\u6A21\u5757\u7F16\u8BD1\u65B9\u6CD5</strong></h2><p>\u5728\u8FDB\u884C\u4EE3\u7801\u7F16\u5199\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u6765\u68B3\u7406\u4E00\u4E0B<code>buildModule</code>\u65B9\u6CD5\u5B83\u9700\u8981\u505A\u54EA\u4E9B\u4E8B\u60C5:</p><ul><li><code>buildModule</code>\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\u8FDB\u884C\u6A21\u5757\u7F16\u8BD1\uFF0C<strong>\u7B2C\u4E00\u4E2A\u4E3A\u6A21\u5757\u6240\u5C5E\u7684\u5165\u53E3\u6587\u4EF6\u540D\u79F0</strong>\uFF0C\u7B2C\u4E8C\u4E2A\u4E3A\u9700\u8981\u7F16\u8BD1\u7684\u6A21\u5757\u8DEF\u5F84\u3002</li><li><code>buildModule</code>\u65B9\u6CD5\u8981\u8FDB\u884C\u4EE3\u7801\u7F16\u8BD1\u7684\u524D\u63D0\u5C31\u662F\uFF0C\u901A\u8FC7<code>fs</code>\u6A21\u5757\u6839\u636E\u5165\u53E3\u6587\u4EF6\u8DEF\u5F84\u8BFB\u53D6\u6587\u4EF6\u6E90\u4EE3\u7801\u3002</li><li>\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9\u4E4B\u540E\uFF0C\u8C03\u7528\u6240\u6709\u5339\u914D\u7684loader\u5BF9\u6A21\u5757\u8FDB\u884C\u5904\u7406\u5F97\u5230\u8FD4\u56DE\u540E\u7684\u7ED3\u679C\u3002</li><li>\u5F97\u5230<code>loader</code>\u5904\u7406\u540E\u7684\u7ED3\u679C\u540E\uFF0C\u901A\u8FC7<code>babel</code>\u5206\u6790<code>loader</code>\u5904\u7406\u540E\u7684\u4EE3\u7801\uFF0C\u8FDB\u884C\u4EE3\u7801\u7F16\u8BD1\u3002(\u8FD9\u4E00\u6B65\u7F16\u8BD1\u4E3B\u8981\u662F\u9488\u5BF9<code>require</code>\u8BED\u53E5\uFF0C\u4FEE\u6539\u6E90\u4EE3\u7801\u4E2D<code>require</code>\u8BED\u53E5\u7684\u8DEF\u5F84)\u3002</li><li>\u5982\u679C\u8BE5\u5165\u53E3\u6587\u4EF6\u6CA1\u6709\u4F9D\u8D56\u4E0E\u4EFB\u4F55\u6A21\u5757(<code>require</code>\u8BED\u53E5)\uFF0C\u90A3\u4E48\u8FD4\u56DE\u7F16\u8BD1\u540E\u7684\u6A21\u5757\u5BF9\u8C61\u3002</li><li>\u5982\u679C\u8BE5\u5165\u53E3\u6587\u4EF6\u5B58\u5728\u4F9D\u8D56\u7684\u6A21\u5757\uFF0C\u9012\u5F52<code>buildModule</code>\u65B9\u6CD5\u8FDB\u884C\u6A21\u5757\u7F16\u8BD1\u3002</li></ul><h3 id="\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9" aria-hidden="true">#</a> <strong>\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9</strong></h3><ol><li><code>\u6211\u4EEC\u5148\u8C03\u7528fs\u6A21\u5757\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9\u3002</code></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const fs = require(&#39;fs&#39;);
// ...
class Compiler {
//...
// \u6A21\u5757\u7F16\u8BD1\u65B9\u6CD5
      buildModule(moduleName, modulePath) {
// 1. \u8BFB\u53D6\u6587\u4EF6\u539F\u59CB\u4EE3\u7801
        const originSourceCode =
          ((this.originSourceCode = fs.readFileSync(modulePath, &#39;utf-8&#39;));
// moduleCode\u4E3A\u4FEE\u6539\u540E\u7684\u4EE3\u7801
        this.moduleCode = originSourceCode;
      }

// ...
 }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8C03\u7528loader\u5904\u7406\u5339\u914D\u540E\u7F00\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u8C03\u7528loader\u5904\u7406\u5339\u914D\u540E\u7F00\u6587\u4EF6" aria-hidden="true">#</a> <strong>\u8C03\u7528<code>loader</code>\u5904\u7406\u5339\u914D\u540E\u7F00\u6587\u4EF6</strong></h3><ol><li>\u63A5\u4E0B\u6765\u6211\u4EEC\u83B7\u5F97\u4E86\u6587\u4EF6\u7684\u5177\u4F53\u5185\u5BB9\u4E4B\u540E\uFF0C\u5C31\u9700\u8981\u5339\u914D\u5BF9\u5E94<code>loader</code>\u5BF9\u6211\u4EEC\u7684\u6E90\u4EE3\u7801\u8FDB\u884C\u7F16\u8BD1\u4E86\u3002</li></ol><h3 id="\u5B9E\u73B0\u7B80\u5355\u81EA\u5B9A\u4E49loader" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u7B80\u5355\u81EA\u5B9A\u4E49loader" aria-hidden="true">#</a> <strong>\u5B9E\u73B0\u7B80\u5355\u81EA\u5B9A\u4E49loader</strong></h3><p>\u5728\u8FDB\u884C<code>loader</code>\u7F16\u8BD1\u524D\uFF0C\u6211\u4EEC\u5148\u6765\u5B9E\u73B0\u4E00\u4E0B\u6211\u4EEC\u4E0A\u65B9\u4F20\u5165\u7684\u81EA\u5B9A\u4E49<code>loader</code>\u5427\u3002</p>`,55),j={href:"https://mmbiz.qpic.cn/sz_mmbiz/H8M5QJDxMHqp1R4dSG2OiaG6eicUnY61YFSvxR0wLa4CBiaofou9Uw7CnqTdYoXEXSk1kHibVPtzjh4T35EpNLibwgA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},M=l("https://mmbiz.qpic.cn/sz_mmbiz/H8M5QJDxMHqp1R4dSG2OiaG6eicUnY61YFSvxR0wLa4CBiaofou9Uw7CnqTdYoXEXSk1kHibVPtzjh4T35EpNLibwgA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),S=d(`<p><code>webpack/loader</code>\u76EE\u5F55\u4E0B\u65B0\u5EFA<code>loader-1.js</code>,<code>loader-2.js</code>:</p><p>\u9996\u5148\u6211\u4EEC\u9700\u8981\u6E05\u695A<strong>\u7B80\u5355\u6765\u8BF4<code>loader</code>\u672C\u8D28\u4E0A\u5C31\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u63A5\u53D7\u6211\u4EEC\u7684\u6E90\u4EE3\u7801\u4F5C\u4E3A\u5165\u53C2\u540C\u65F6\u8FD4\u56DE\u5904\u7406\u540E\u7684\u7ED3\u679C\u3002</strong></p><blockquote><p>\u5173\u4E8Eloader\u7684\u7279\u6027\uFF0C\u66F4\u52A0\u8BE6\u7EC6\u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u770B\u5230[8]\uFF0C\u56E0\u4E3A\u6587\u7AE0\u4E3B\u8981\u8BB2\u8FF0\u6253\u5305\u6D41\u7A0B\u6240\u4EE5loader\u6211\u4EEC\u7B80\u5355\u7684\u4F5C\u4E3A\u5012\u5E8F\u5904\u7406\u3002\u66F4\u52A0\u5177\u4F53\u7684loader/plugin\u5F00\u53D1\u6211\u4F1A\u5728\u540E\u7EED\u7684\u6587\u7AE0\u8BE6\u7EC6\u8865\u5145\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// loader\u672C\u8D28\u4E0A\u5C31\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u63A5\u53D7\u539F\u59CB\u5185\u5BB9\uFF0C\u8FD4\u56DE\u8F6C\u6362\u540E\u7684\u5185\u5BB9\u3002
function loader1(sourceCode) {
  console.log(&#39;join loader1&#39;);
  return sourceCode + \`\\n const loader1 = &#39;https://github.com/19Qingfeng&#39;\`;
}

module.exports = loader1;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function loader2(sourceCode) {
  console.log(&#39;join loader2&#39;);
  return sourceCode + \`\\n const loader2 = &#39;19Qingfeng&#39;\`;
}

module.exports = loader2;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528loader\u5904\u7406\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528loader\u5904\u7406\u6587\u4EF6" aria-hidden="true">#</a> <strong>\u4F7F\u7528loader\u5904\u7406\u6587\u4EF6</strong></h3><p>\u5728\u641E\u6E05\u695A\u4E86<code>loader</code>\u5C31\u662F\u4E00\u4E2A\u5355\u7EAF\u7684\u51FD\u6570\u4E4B\u540E\uFF0C\u8BA9\u6211\u4EEC\u5728\u8FDB\u884C\u6A21\u5757\u5206\u6790\u4E4B\u524D\u5C06\u5185\u5BB9\u5148\u4EA4\u7ED9\u5339\u914D\u7684loader\u53BB\u5904\u7406\u4E0B\u5427\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6A21\u5757\u7F16\u8BD1\u65B9\u6CD5
  buildModule(moduleName, modulePath) {
// 1. \u8BFB\u53D6\u6587\u4EF6\u539F\u59CB\u4EE3\u7801
    const originSourceCode =
      ((this.originSourceCode = fs.readFileSync(modulePath)), &#39;utf-8&#39;);
// moduleCode\u4E3A\u4FEE\u6539\u540E\u7684\u4EE3\u7801
    this.moduleCode = originSourceCode;
//  2. \u8C03\u7528loader\u8FDB\u884C\u5904\u7406
    this.handleLoader(modulePath);
  }

// \u5339\u914Dloader\u5904\u7406
  handleLoader(modulePath) {
    const matchLoaders = [];
// 1. \u83B7\u53D6\u6240\u6709\u4F20\u5165\u7684loader\u89C4\u5219
    const rules = this.options.module.rules;
    rules.forEach((loader) =&gt; {
      const testRule = loader.test;
      if (testRule.test(modulePath)) {
        if (loader.loader) {
// \u4EC5\u8003\u8651loader { test:/\\.js$/g, use:[&#39;babel-loader&#39;] }, { test:/\\.js$/, loader:&#39;babel-loader&#39; }
          matchLoaders.push(loader.loader);
        } else {
          matchLoaders.push(...loader.use);
        }
      }
// 2. \u5012\u5E8F\u6267\u884Cloader\u4F20\u5165\u6E90\u4EE3\u7801
      for (let i = matchLoaders.length - 1; i &gt;= 0; i--) {
// \u76EE\u524D\u6211\u4EEC\u5916\u90E8\u4EC5\u652F\u6301\u4F20\u5165\u7EDD\u5BF9\u8DEF\u5F84\u7684loader\u6A21\u5F0F
// require\u5F15\u5165\u5BF9\u5E94loader
        const loaderFn = require(matchLoaders[i]);
// \u901A\u8FC7loader\u540C\u6B65\u5904\u7406\u6211\u7684\u6BCF\u4E00\u6B21\u7F16\u8BD1\u7684moduleCode
        this.moduleCode = loaderFn(this.moduleCode);
      }
    });
  }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u6211\u4EEC\u901A\u8FC7<code>handleLoader</code>\u51FD\u6570\uFF0C\u5BF9\u4E8E\u4F20\u5165\u7684\u6587\u4EF6\u8DEF\u5F84\u5339\u914D\u5230\u5BF9\u5E94\u540E\u7F00\u7684<code>loader</code>\u540E\uFF0C\u4F9D\u6B21\u5012\u5E8F\u6267\u884Cloader\u5904\u7406\u6211\u4EEC\u7684\u4EE3\u7801<code>this.moduleCode</code>\u5E76\u4E14\u540C\u6B65\u66F4\u65B0\u6BCF\u6B21<code>moduleCode</code>\u3002</p><p>\u6700\u7EC8\uFF0C\u5728\u6BCF\u4E00\u4E2A\u6A21\u5757\u7F16\u8BD1\u4E2D<code>this.moduleCode</code>\u90FD\u4F1A\u7ECF\u8FC7\u5BF9\u5E94\u7684<code>loader</code>\u5904\u7406\u3002</p><h3 id="webpack\u6A21\u5757\u7F16\u8BD1\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#webpack\u6A21\u5757\u7F16\u8BD1\u9636\u6BB5" aria-hidden="true">#</a> <strong><code>webpack</code>\u6A21\u5757\u7F16\u8BD1\u9636\u6BB5</strong></h3><p>\u4E0A\u4E00\u6B65\u6211\u4EEC\u7ECF\u5386\u8FC7<code>loader</code>\u5904\u7406\u4E86\u6211\u4EEC\u7684\u5165\u53E3\u6587\u4EF6\u4EE3\u7801\uFF0C\u5E76\u4E14\u5F97\u5230\u4E86\u5904\u7406\u540E\u7684\u4EE3\u7801\u4FDD\u5B58\u5728\u4E86<code>this.moduleCode</code>\u4E2D\u3002</p><p>\u6B64\u65F6\uFF0C\u7ECF\u8FC7<code>loader</code>\u5904\u7406\u540E\u6211\u4EEC\u5C31\u8981\u8FDB\u5165<code>webpack</code>\u5185\u90E8\u7684\u7F16\u8BD1\u9636\u6BB5\u4E86\u3002</p><p>\u8FD9\u91CC\u6211\u4EEC\u9700\u8981\u505A\u7684\u662F:<strong>\u9488\u5BF9\u5F53\u524D\u6A21\u5757\u8FDB\u884C\u7F16\u8BD1\uFF0C\u5C06\u5F53\u524D\u6A21\u5757\u6240\u6709\u4F9D\u8D56\u7684\u6A21\u5757(<code>require()</code>)\u8BED\u53E5\u5F15\u5165\u7684\u8DEF\u5F84\u53D8\u4E3A\u76F8\u5BF9\u4E8E\u8DDF\u8DEF\u5F84(<code>this.rootPath</code>)\u7684\u76F8\u5BF9\u8DEF\u5F84</strong>\u3002</p><blockquote><p>\u603B\u4E4B\u4F60\u9700\u8981\u641E\u660E\u767D\u7684\u662F\uFF0C\u6211\u4EEC\u8FD9\u91CC\u7F16\u8BD1\u7684\u7ED3\u679C\u662F\u671F\u671B\u5C06\u6E90\u4EE3\u7801\u4E2D\u7684\u4F9D\u8D56\u6A21\u5757\u8DEF\u5F84\u53D8\u4E3A\u76F8\u5BF9\u8DDF\u8DEF\u5F84\u7684\u8DEF\u5F84\uFF0C\u540C\u65F6\u5EFA\u7ACB\u57FA\u7840\u7684\u6A21\u5757\u4F9D\u8D56\u5173\u7CFB\u3002\u540E\u7EED\u6211\u4F1A\u544A\u8BC9\u4F60\u4E3A\u4EC0\u4E48\u9488\u5BF9\u8DEF\u5F84\u8FDB\u884C\u7F16\u8BD1\u3002</p></blockquote><p>\u8BA9\u6211\u4EEC\u7EE7\u7EED\u6765\u5B8C\u5584<code>buildModule</code>\u65B9\u6CD5\u5427:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const parser = require(&#39;@babel/parser&#39;);
const traverse = require(&#39;@babel/traverse&#39;).default;
const generator = require(&#39;@babel/generator&#39;).default;
const t = require(&#39;@babel/types&#39;);
const tryExtensions = require(&#39;./utils/index&#39;)
// ...
  class Compiler {
// ...

// \u6A21\u5757\u7F16\u8BD1\u65B9\u6CD5
      buildModule(moduleName, modulePath) {
// 1. \u8BFB\u53D6\u6587\u4EF6\u539F\u59CB\u4EE3\u7801
        const originSourceCode =
          ((this.originSourceCode = fs.readFileSync(modulePath)), &#39;utf-8&#39;);
// moduleCode\u4E3A\u4FEE\u6539\u540E\u7684\u4EE3\u7801
        this.moduleCode = originSourceCode;
//  2. \u8C03\u7528loader\u8FDB\u884C\u5904\u7406
        this.handleLoader(modulePath);
// 3. \u8C03\u7528webpack \u8FDB\u884C\u6A21\u5757\u7F16\u8BD1 \u83B7\u5F97\u6700\u7EC8\u7684module\u5BF9\u8C61
        const module = this.handleWebpackCompiler(moduleName, modulePath);
// 4. \u8FD4\u56DE\u5BF9\u5E94module
        return module
      }

// \u8C03\u7528webpack\u8FDB\u884C\u6A21\u5757\u7F16\u8BD1
      handleWebpackCompiler(moduleName, modulePath) {
// \u5C06\u5F53\u524D\u6A21\u5757\u76F8\u5BF9\u4E8E\u9879\u76EE\u542F\u52A8\u6839\u76EE\u5F55\u8BA1\u7B97\u51FA\u76F8\u5BF9\u8DEF\u5F84 \u4F5C\u4E3A\u6A21\u5757ID
        const moduleId = &#39;./&#39; + path.posix.relative(this.rootPath, modulePath);
// \u521B\u5EFA\u6A21\u5757\u5BF9\u8C61
        const module = {
          id: moduleId,
          dependencies: new Set(),// \u8BE5\u6A21\u5757\u6240\u4F9D\u8D56\u6A21\u5757\u7EDD\u5BF9\u8DEF\u5F84\u5730\u5740
          name: [moduleName],// \u8BE5\u6A21\u5757\u6240\u5C5E\u7684\u5165\u53E3\u6587\u4EF6
        };
// \u8C03\u7528babel\u5206\u6790\u6211\u4EEC\u7684\u4EE3\u7801
        const ast = parser.parse(this.moduleCode, {
          sourceType: &#39;module&#39;,
        });
// \u6DF1\u5EA6\u4F18\u5148 \u904D\u5386\u8BED\u6CD5Tree
        traverse(ast, {
// \u5F53\u9047\u5230require\u8BED\u53E5\u65F6
          CallExpression:(nodePath) =&gt; {
            const node = nodePath.node;
            if (node.callee.name === &#39;require&#39;) {
// \u83B7\u5F97\u6E90\u4EE3\u7801\u4E2D\u5F15\u5165\u6A21\u5757\u76F8\u5BF9\u8DEF\u5F84
              const moduleName = node.arguments[0].value;
// \u5BFB\u627E\u6A21\u5757\u7EDD\u5BF9\u8DEF\u5F84 \u5F53\u524D\u6A21\u5757\u8DEF\u5F84+require()\u5BF9\u5E94\u76F8\u5BF9\u8DEF\u5F84
              const moduleDirName = path.posix.dirname(modulePath);
              const absolutePath = tryExtensions(
                path.posix.join(moduleDirName, moduleName),
                this.options.resolve.extensions,
                moduleName,
                moduleDirName
              );
// \u751F\u6210moduleId - \u9488\u5BF9\u4E8E\u8DDF\u8DEF\u5F84\u7684\u6A21\u5757ID \u6DFB\u52A0\u8FDB\u5165\u65B0\u7684\u4F9D\u8D56\u6A21\u5757\u8DEF\u5F84
              const moduleId =
                &#39;./&#39; + path.posix.relative(this.rootPath, absolutePath);
// \u901A\u8FC7babel\u4FEE\u6539\u6E90\u4EE3\u7801\u4E2D\u7684require\u53D8\u6210__webpack_require__\u8BED\u53E5
              node.callee = t.identifier(&#39;__webpack_require__&#39;);
// \u4FEE\u6539\u6E90\u4EE3\u7801\u4E2Drequire\u8BED\u53E5\u5F15\u5165\u7684\u6A21\u5757 \u5168\u90E8\u4FEE\u6539\u53D8\u4E3A\u76F8\u5BF9\u4E8E\u8DDF\u8DEF\u5F84\u6765\u5904\u7406
              node.arguments = [t.stringLiteral(moduleId)];
// \u4E3A\u5F53\u524D\u6A21\u5757\u6DFB\u52A0require\u8BED\u53E5\u9020\u6210\u7684\u4F9D\u8D56(\u5185\u5BB9\u4E3A\u76F8\u5BF9\u4E8E\u6839\u8DEF\u5F84\u7684\u6A21\u5757ID)
              module.dependencies.add(moduleId);
            }
          },
        });
// \u904D\u5386\u7ED3\u675F\u6839\u636EAST\u751F\u6210\u65B0\u7684\u4EE3\u7801
        const { code } = generator(ast);
// \u4E3A\u5F53\u524D\u6A21\u5757\u6302\u8F7D\u65B0\u7684\u751F\u6210\u7684\u4EE3\u7801
        module._source = code;
// \u8FD4\u56DE\u5F53\u524D\u6A21\u5757\u5BF9\u8C61
        return module
      }
  }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E00\u6B65\u6211\u4EEC\u5173\u4E8E<code>webpack</code>\u7F16\u8BD1\u7684\u9636\u6BB5\u5C31\u5B8C\u6210\u4E86\u3002</p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F:</p><ul><li>\u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528<code>babel</code>\u76F8\u5173\u7684<code>API</code>\u9488\u5BF9\u4E8E<code>require</code>\u8BED\u53E5\u8FDB\u884C\u4E86\u7F16\u8BD1\uFF0C\u5982\u679C\u5BF9\u4E8E<code>babel</code>\u76F8\u5173\u7684<code>api</code>\u4E0D\u592A\u4E86\u89E3\u7684\u670B\u53CB\u53EF\u4EE5\u5728\u524D\u7F6E\u77E5\u8BC6\u4E2D\u67E5\u770B\u6211\u7684\u53E6\u4E24\u7BC7\u6587\u7AE0\u3002\u8FD9\u91CC\u6211\u5C31\u4E0D\u5728\u7D2F\u8D58\u4E86</li><li>\u540C\u65F6\u6211\u4EEC\u4EE3\u7801\u4E2D\u5F15\u7528\u4E86\u4E00\u4E2A<code>tryExtensions()</code>\u5DE5\u5177\u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u662F\u9488\u5BF9\u4E8E\u540E\u7F00\u540D\u4E0D\u5168\u7684\u5DE5\u5177\u65B9\u6CD5\uFF0C\u7A0D\u540E\u4F60\u5C31\u53EF\u4EE5\u770B\u5230\u8FD9\u4E2A\u65B9\u6CD5\u7684\u5177\u4F53\u5185\u5BB9\u3002</li><li>\u9488\u5BF9\u4E8E\u6BCF\u4E00\u6B21\u6587\u4EF6\u7F16\u8BD1\uFF0C\u6211\u4EEC\u90FD\u4F1A\u8FD4\u56DE\u4E00\u4E2A<strong>module</strong>\u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u662F\u91CD\u4E2D\u4E4B\u91CD\u3002 <ul><li><code>id</code>\u5C5E\u6027\uFF0C\u8868\u793A\u5F53\u524D\u6A21\u5757\u9488\u5BF9\u4E8E<code>this.rootPath</code>\u7684\u76F8\u5BF9\u76EE\u5F55\u3002</li><li><code>dependencies</code>\u5C5E\u6027\uFF0C\u5B83\u662F\u4E00\u4E2A<code>Set</code>\u5185\u90E8\u4FDD\u5B58\u4E86\u8BE5\u6A21\u5757\u4F9D\u8D56\u7684\u6240\u6709\u6A21\u5757\u7684\u6A21\u5757ID\u3002</li><li><code>name</code>\u5C5E\u6027,\u5B83\u8868\u793A\u8BE5\u6A21\u5757\u5C5E\u4E8E\u54EA\u4E2A\u5165\u53E3\u6587\u4EF6\u3002</li><li><code>_source</code>\u5C5E\u6027\uFF0C\u5B83\u5B58\u653E\u6A21\u5757\u81EA\u8EAB\u7ECF\u8FC7<code>babel</code>\u7F16\u8BD1\u540E\u7684\u5B57\u7B26\u4E32\u4EE3\u7801\u3002</li></ul></li></ul><h3 id="tryextensions\u65B9\u6CD5\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#tryextensions\u65B9\u6CD5\u5B9E\u73B0" aria-hidden="true">#</a> <strong>tryExtensions\u65B9\u6CD5\u5B9E\u73B0</strong></h3><p>\u6211\u4EEC\u5728\u4E0A\u6587\u7684<code>webpack.config.js</code>\u6709\u8FD9\u4E48\u4E00\u4E2A\u914D\u7F6E\uFF1A</p>`,22),z={href:"https://mmbiz.qpic.cn/sz_mmbiz/H8M5QJDxMHqp1R4dSG2OiaG6eicUnY61YFt44f2VrGQTqloSibFiab1BQiaibv7WicHpZhiaUJ9lh8qibiaxeIibb5jtxyLoA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},C=l("https://mmbiz.qpic.cn/sz_mmbiz/H8M5QJDxMHqp1R4dSG2OiaG6eicUnY61YFt44f2VrGQTqloSibFiab1BQiaibv7WicHpZhiaUJ9lh8qibiaxeIibb5jtxyLoA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),Q=d(`<p>\u719F\u6089<code>webpack</code>\u914D\u7F6E\u7684\u540C\u5B66\u53EF\u80FD\u6E05\u695A\uFF0C<strong>resolve.extensions</strong>\u662F\u9488\u5BF9\u4E8E\u5F15\u5165\u4F9D\u8D56\u65F6\uFF0C\u5728\u6CA1\u6709\u4E66\u5199\u6587\u4EF6\u540E\u7F00\u7684\u60C5\u51B5\u4E0B\uFF0C<code>webpack</code>\u4F1A\u81EA\u52A8\u5E2E\u6211\u4EEC\u6309\u7167\u4F20\u5165\u7684\u89C4\u5219\u4E3A\u6587\u4EF6\u6DFB\u52A0\u540E\u7F00\u3002</p><p>\u5728\u6E05\u695A\u4E86\u539F\u7406\u540E\u6211\u4EEC\u6765\u4E00\u8D77\u770B\u770B<code>utils/tryExtensions</code>\u65B9\u6CD5\u7684\u5B9E\u73B0:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
/**
 *
 *
 * @param {*} modulePath \u6A21\u5757\u7EDD\u5BF9\u8DEF\u5F84
 * @param {*} extensions \u6269\u5C55\u540D\u6570\u7EC4
 * @param {*} originModulePath \u539F\u59CB\u5F15\u5165\u6A21\u5757\u8DEF\u5F84
 * @param {*} moduleContext \u6A21\u5757\u4E0A\u4E0B\u6587(\u5F53\u524D\u6A21\u5757\u6240\u5728\u76EE\u5F55)
 */
function tryExtensions(
  modulePath,
  extensions,
  originModulePath,
  moduleContext
) {
// \u4F18\u5148\u5C1D\u8BD5\u4E0D\u9700\u8981\u6269\u5C55\u540D\u9009\u9879
  extensions.unshift(&#39;&#39;);
  for (let extension of extensions) {
    if (fs.existsSync(modulePath + extension)) {
      return modulePath + extension;
    }
  }
// \u672A\u5339\u914D\u5BF9\u5E94\u6587\u4EF6
  throw new Error(
    \`No module, Error: Can&#39;t resolve \${originModulePath} in  \${moduleContext}\`
  );
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u65B9\u6CD5\u5F88\u7B80\u5355\uFF0C\u6211\u4EEC\u901A\u8FC7<code>fs.existsSync</code>\u68C0\u67E5\u4F20\u5165\u6587\u4EF6\u7ED3\u5408<code>extensions</code>\u4F9D\u6B21\u904D\u5386\u5BFB\u627E\u5BF9\u5E94\u5339\u914D\u7684\u8DEF\u5F84\u662F\u5426\u5B58\u5728\uFF0C\u5982\u679C\u627E\u5230\u5219\u76F4\u63A5\u8FD4\u56DE\u3002\u5982\u679C\u672A\u627E\u5230\u5219\u7ED9\u4E88\u7528\u4E8E\u4E00\u4E2A\u53CB\u597D\u7684\u63D0\u793A\u9519\u8BEF\u3002</p><blockquote><p>\u9700\u8981\u6CE8\u610F\xA0extensions.unshift(&#39;&#39;);\u662F\u9632\u6B62\u7528\u6237\u5982\u679C\u5DF2\u7ECF\u4F20\u5165\u4E86\u540E\u7F00\u65F6\uFF0C\u6211\u4EEC\u4F18\u5148\u5C1D\u8BD5\u76F4\u63A5\u5BFB\u627E\uFF0C\u5982\u679C\u53EF\u4EE5\u627E\u5230\u6587\u4EF6\u90A3\u4E48\u5C31\u76F4\u63A5\u8FD4\u56DE\u3002\u627E\u4E0D\u5230\u7684\u60C5\u51B5\u4E0B\u624D\u4F1A\u4F9D\u6B21\u5C1D\u8BD5\u3002</p></blockquote><h3 id="\u9012\u5F52\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52\u5904\u7406" aria-hidden="true">#</a> <strong>\u9012\u5F52\u5904\u7406</strong></h3><p>\u7ECF\u8FC7\u4E0A\u4E00\u6B65\u5904\u7406\uFF0C\u9488\u5BF9\u5165\u53E3\u6587\u4EF6\u6211\u4EEC\u8C03\u7528<code>buildModule</code>\u53EF\u4EE5\u5F97\u5230\u8FD9\u6837\u7684\u8FD4\u56DE\u5BF9\u8C61\u3002</p><p>\u6211\u4EEC\u5148\u6765\u770B\u770B\u8FD0\u884C<code>webpack/core/index.js</code>\u5F97\u5230\u7684\u8FD4\u56DE\u7ED3\u679C\u5427\u3002</p>`,8),P={href:"https://mmbiz.qpic.cn/sz_mmbiz/H8M5QJDxMHqp1R4dSG2OiaG6eicUnY61YF73rnUs9b1zMF5RX6269ydmzecUdwY6X92gqMnuY2rmcMYtuy4QwoOg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},E=l("https://mmbiz.qpic.cn/sz_mmbiz/H8M5QJDxMHqp1R4dSG2OiaG6eicUnY61YF73rnUs9b1zMF5RX6269ydmzecUdwY6X92gqMnuY2rmcMYtuy4QwoOg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),Y=d(`<p>\u6211\u5728<code>buildEntryModule</code>\u4E2D\u6253\u5370\u4E86\u5904\u7406\u5B8C\u6210\u540E\u7684<code>entries</code>\u5BF9\u8C61\u3002\u53EF\u4EE5\u770B\u5230\u6B63\u5982\u6211\u4EEC\u4E4B\u524D\u6240\u671F\u5F85\u7684:</p><ul><li><code>id</code>\u4E3A\u6BCF\u4E2A\u6A21\u5757\u76F8\u5BF9\u4E8E\u8DDF\u8DEF\u5F84\u7684\u6A21\u5757.(\u8FD9\u91CC\u6211\u4EEC\u914D\u7F6E\u7684<code>context:process.cwd()</code>)\u4E3A<code>webpack</code>\u76EE\u5F55\u3002</li><li><code>dependencies</code>\u4E3A\u8BE5\u6A21\u5757\u5185\u90E8\u4F9D\u8D56\u7684\u6A21\u5757\uFF0C\u8FD9\u91CC\u76EE\u524D\u8FD8\u6CA1\u6709\u6DFB\u52A0\u3002</li><li><code>name</code>\u4E3A\u8BE5\u6A21\u5757\u6240\u5C5E\u7684\u5165\u53E3\u6587\u4EF6\u540D\u79F0\u3002</li><li><code>_source</code>\u4E3A\u8BE5\u6A21\u5757\u7F16\u8BD1\u540E\u7684\u6E90\u4EE3\u7801\u3002</li></ul><blockquote><p>\u76EE\u524D_source\u4E2D\u7684\u5185\u5BB9\u662F\u57FA\u4E8E</p></blockquote><p>\u6B64\u65F6\u8BA9\u6211\u4EEC\u6253\u5F00<code>src</code>\u76EE\u5F55\u4E3A\u6211\u4EEC\u7684\u4E24\u4E2A\u5165\u53E3\u6587\u4EF6\u6DFB\u52A0\u4E00\u4E9B\u4F9D\u8D56\u548C\u5185\u5BB9\u5427:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// webpack/example/entry1.js
const depModule = require(&#39;./module&#39;);

console.log(depModule, &#39;dep&#39;);
console.log(&#39;This is entry 1 !&#39;);

// webpack/example/entry2.js
const depModule = require(&#39;./module&#39;);

console.log(depModule, &#39;dep&#39;);
console.log(&#39;This is entry 2 !&#39;);

// webpack/example/module.js
const name = &#39;19Qingfeng&#39;;

module.exports = {
  name,
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u65F6\u8BA9\u6211\u4EEC\u91CD\u65B0\u8FD0\u884C<code>webpack/core/index.js</code>:</p>`,6),O={href:"https://mmbiz.qpic.cn/sz_mmbiz/H8M5QJDxMHqp1R4dSG2OiaG6eicUnY61YFE78W2NTC18OqXzkCoMRlvGuhjosgb1kyXIw8mKnniaYUibibFLCibt3Jvw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},U=l("https://mmbiz.qpic.cn/sz_mmbiz/H8M5QJDxMHqp1R4dSG2OiaG6eicUnY61YFE78W2NTC18OqXzkCoMRlvGuhjosgb1kyXIw8mKnniaYUibibFLCibt3Jvw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),H=d(`<p>OK\uFF0C\u76EE\u524D\u4E3A\u6B62\u6211\u4EEC\u9488\u5BF9\u4E8E<code>entry</code>\u7684\u7F16\u8BD1\u53EF\u4EE5\u6682\u65F6\u544A\u4E00\u6BB5\u843D\u4E86\u3002</p><p><strong>\u603B\u4E4B\u4E5F\u5C31\u662F\uFF0C\u8FD9\u4E00\u6B65\u6211\u4EEC\u901A\u8FC7\`\`\u65B9\u6CD5\u5C06<code>entry</code>\u8FDB\u884C\u5206\u6790\u7F16\u8BD1\u540E\u5F97\u5230\u4E00\u4E2A\u5BF9\u8C61\u3002\u5C06\u8FD9\u4E2A\u5BF9\u8C61\u6DFB\u52A0\u5230<code>this.entries</code>\u4E2D\u53BB\u3002</strong></p><p>\u63A5\u4E0B\u6765\u8BA9\u6211\u4EEC\u53BB\u5904\u7406\u4F9D\u8D56\u7684\u6A21\u5757\u5427\u3002</p><p>\u5176\u5B9E\u5BF9\u4E8E\u4F9D\u8D56\u7684\u6A21\u5757\u65E0\u975E\u4E5F\u662F\u76F8\u540C\u7684\u6B65\u9AA4\uFF1A</p><ul><li>\u68C0\u67E5\u5165\u53E3\u6587\u4EF6\u4E2D\u662F\u5426\u5B58\u5728\u4F9D\u8D56\u3002</li><li>\u5B58\u5728\u4F9D\u8D56\u7684\u8BDD\uFF0C\u9012\u5F52\u8C03\u7528<code>buildModule</code>\u65B9\u6CD5\u7F16\u8BD1\u6A21\u5757\u3002\u4F20\u5165<code>moduleName</code>\u4E3A\u5F53\u524D\u6A21\u5757\u6240\u5C5E\u7684\u5165\u53E3\u6587\u4EF6\u3002<code>modulePath</code>\u4E3A\u5F53\u524D\u88AB\u4F9D\u8D56\u6A21\u5757\u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002</li><li>\u540C\u7406\u68C0\u67E5\u9012\u5F52\u68C0\u67E5\u88AB\u4F9D\u8D56\u7684\u6A21\u5757\u5185\u90E8\u662F\u5426\u4ECD\u7136\u5B58\u5728\u4F9D\u8D56\uFF0C\u5B58\u5728\u7684\u8BDD\u9012\u5F52\u4F9D\u8D56\u8FDB\u884C\u6A21\u5757\u7F16\u8BD1\u3002\u8FD9\u662F\u4E00\u4E2A<strong>\u6DF1\u5EA6\u4F18\u5148</strong>\u7684\u8FC7\u7A0B\u3002</li><li>\u5C06\u6BCF\u4E00\u4E2A\u7F16\u8BD1\u540E\u7684\u6A21\u5757\u4FDD\u5B58\u8FDB\u5165<code>this.modules</code>\u4E2D\u53BB\u3002</li></ul><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u53EA\u8981\u7A0D\u7A0D\u5728<code>handleWebpackCompiler</code>\u65B9\u6CD5\u4E2D\u7A0D\u7A0D\u6539\u52A8\u5C31\u53EF\u4EE5\u4E86:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u8C03\u7528webpack\u8FDB\u884C\u6A21\u5757\u7F16\u8BD1
  handleWebpackCompiler(moduleName, modulePath) {
// \u5C06\u5F53\u524D\u6A21\u5757\u76F8\u5BF9\u4E8E\u9879\u76EE\u542F\u52A8\u6839\u76EE\u5F55\u8BA1\u7B97\u51FA\u76F8\u5BF9\u8DEF\u5F84 \u4F5C\u4E3A\u6A21\u5757ID
    const moduleId = &#39;./&#39; + path.posix.relative(this.rootPath, modulePath);
// \u521B\u5EFA\u6A21\u5757\u5BF9\u8C61
    const module = {
      id: moduleId,
      dependencies: new Set(),// \u8BE5\u6A21\u5757\u6240\u4F9D\u8D56\u6A21\u5757\u7EDD\u5BF9\u8DEF\u5F84\u5730\u5740
      name: [moduleName],// \u8BE5\u6A21\u5757\u6240\u5C5E\u7684\u5165\u53E3\u6587\u4EF6
    };
// \u8C03\u7528babel\u5206\u6790\u6211\u4EEC\u7684\u4EE3\u7801
    const ast = parser.parse(this.moduleCode, {
      sourceType: &#39;module&#39;,
    });
// \u6DF1\u5EA6\u4F18\u5148 \u904D\u5386\u8BED\u6CD5Tree
    traverse(ast, {
// \u5F53\u9047\u5230require\u8BED\u53E5\u65F6
      CallExpression: (nodePath) =&gt; {
        const node = nodePath.node;
        if (node.callee.name === &#39;require&#39;) {
// \u83B7\u5F97\u6E90\u4EE3\u7801\u4E2D\u5F15\u5165\u6A21\u5757\u76F8\u5BF9\u8DEF\u5F84
          const moduleName = node.arguments[0].value;
// \u5BFB\u627E\u6A21\u5757\u7EDD\u5BF9\u8DEF\u5F84 \u5F53\u524D\u6A21\u5757\u8DEF\u5F84+require()\u5BF9\u5E94\u76F8\u5BF9\u8DEF\u5F84
          const moduleDirName = path.posix.dirname(modulePath);
          const absolutePath = tryExtensions(
            path.posix.join(moduleDirName, moduleName),
            this.options.resolve.extensions,
            moduleName,
            moduleDirName
          );
// \u751F\u6210moduleId - \u9488\u5BF9\u4E8E\u8DDF\u8DEF\u5F84\u7684\u6A21\u5757ID \u6DFB\u52A0\u8FDB\u5165\u65B0\u7684\u4F9D\u8D56\u6A21\u5757\u8DEF\u5F84
          const moduleId =
            &#39;./&#39; + path.posix.relative(this.rootPath, absolutePath);
// \u901A\u8FC7babel\u4FEE\u6539\u6E90\u4EE3\u7801\u4E2D\u7684require\u53D8\u6210__webpack_require__\u8BED\u53E5
          node.callee = t.identifier(&#39;__webpack_require__&#39;);
// \u4FEE\u6539\u6E90\u4EE3\u7801\u4E2Drequire\u8BED\u53E5\u5F15\u5165\u7684\u6A21\u5757 \u5168\u90E8\u4FEE\u6539\u53D8\u4E3A\u76F8\u5BF9\u4E8E\u8DDF\u8DEF\u5F84\u6765\u5904\u7406
          node.arguments = [t.stringLiteral(moduleId)];
// \u4E3A\u5F53\u524D\u6A21\u5757\u6DFB\u52A0require\u8BED\u53E5\u9020\u6210\u7684\u4F9D\u8D56(\u5185\u5BB9\u4E3A\u76F8\u5BF9\u4E8E\u6839\u8DEF\u5F84\u7684\u6A21\u5757ID)
          module.dependencies.add(moduleId);
        }
      },
    });
// \u904D\u5386\u7ED3\u675F\u6839\u636EAST\u751F\u6210\u65B0\u7684\u4EE3\u7801
    const { code } = generator(ast);
// \u4E3A\u5F53\u524D\u6A21\u5757\u6302\u8F7D\u65B0\u7684\u751F\u6210\u7684\u4EE3\u7801
    module._source = code;
// \u9012\u5F52\u4F9D\u8D56\u6DF1\u5EA6\u904D\u5386 \u5B58\u5728\u4F9D\u8D56\u6A21\u5757\u5219\u52A0\u5165
    module.dependencies.forEach((dependency) =&gt; {
      const depModule = this.buildModule(moduleName, dependency);
// \u5C06\u7F16\u8BD1\u540E\u7684\u4EFB\u4F55\u4F9D\u8D56\u6A21\u5757\u5BF9\u8C61\u52A0\u5165\u5230modules\u5BF9\u8C61\u4E2D\u53BB
      this.modules.add(depModule);
    });
// \u8FD4\u56DE\u5F53\u524D\u6A21\u5757\u5BF9\u8C61
    return module;
  }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u6211\u4EEC\u6DFB\u52A0\u4E86\u8FD9\u6837\u4E00\u6BB5\u4EE3\u7801:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u9012\u5F52\u4F9D\u8D56\u6DF1\u5EA6\u904D\u5386 \u5B58\u5728\u4F9D\u8D56\u6A21\u5757\u5219\u52A0\u5165
    module.dependencies.forEach((dependency) =&gt; {
      const depModule = this.buildModule(moduleName, dependency);
// \u5C06\u7F16\u8BD1\u540E\u7684\u4EFB\u4F55\u4F9D\u8D56\u6A21\u5757\u5BF9\u8C61\u52A0\u5165\u5230modules\u5BF9\u8C61\u4E2D\u53BB
      this.modules.add(depModule);
    });

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u6211\u4EEC\u5BF9\u4E8E\u4F9D\u8D56\u7684\u6A21\u5757\u8FDB\u884C\u4E86\u9012\u5F52\u8C03\u7528<code>buildModule</code>,\u5C06\u8F93\u51FA\u7684\u6A21\u5757\u5BF9\u8C61\u6DFB\u52A0\u8FDB\u5165\u4E86<code>this.modules</code>\u4E2D\u53BB\u3002</p><p>\u6B64\u65F6\u8BA9\u6211\u4EEC\u91CD\u65B0\u8FD0\u884C<code>webpack/core/index.js</code>\u8FDB\u884C\u7F16\u8BD1\uFF0C\u8FD9\u91CC\u6211\u5728<code>buildEntryModule</code>\u7F16\u8BD1\u7ED3\u675F\u540E\u6253\u5370\u4E86<code>assets</code>\u548C<code>modules</code>:</p>`,11),G={href:"https://mmbiz.qpic.cn/sz_mmbiz/H8M5QJDxMHqp1R4dSG2OiaG6eicUnY61YFoaUkCicqObXiaJRuvicF6jBXociacegQjgcOZrRv2auRCtFQzSQB2pwwSQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},N=l("https://mmbiz.qpic.cn/sz_mmbiz/H8M5QJDxMHqp1R4dSG2OiaG6eicUnY61YFoaUkCicqObXiaJRuvicF6jBXociacegQjgcOZrRv2auRCtFQzSQB2pwwSQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),F=d(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Set {
  {
    id: &#39;./example/src/entry1.js&#39;,
    dependencies: Set { &#39;./example/src/module.js&#39; },
    name: [ &#39;main&#39; ],
    _source: &#39;const depModule = __webpack_require__(&quot;./example/src/module.js&quot;);\\n&#39; +
      &#39;\\n&#39; +
      &quot;console.log(depModule, &#39;dep&#39;);\\n&quot; +
      &quot;console.log(&#39;This is entry 1 !&#39;);\\n&quot; +
      &quot;const loader2 = &#39;19Qingfeng&#39;;\\n&quot; +
      &quot;const loader1 = &#39;https://github.com/19Qingfeng&#39;;&quot;
  },
  {
    id: &#39;./example/src/entry2.js&#39;,
    dependencies: Set { &#39;./example/src/module.js&#39; },
    name: [ &#39;second&#39; ],
    _source: &#39;const depModule = __webpack_require__(&quot;./example/src/module.js&quot;);\\n&#39; +
      &#39;\\n&#39; +
      &quot;console.log(depModule, &#39;dep&#39;);\\n&quot; +
      &quot;console.log(&#39;This is entry 2 !&#39;);\\n&quot; +
      &quot;const loader2 = &#39;19Qingfeng&#39;;\\n&quot; +
      &quot;const loader1 = &#39;https://github.com/19Qingfeng&#39;;&quot;
  }
} entries
Set {
  {
    id: &#39;./example/src/module.js&#39;,
    dependencies: Set {},
    name: [ &#39;main&#39; ],
    _source: &quot;const name = &#39;19Qingfeng&#39;;\\n&quot; +
      &#39;module.exports = {\\n&#39; +
      &#39;  name\\n&#39; +
      &#39;};\\n&#39; +
      &quot;const loader2 = &#39;19Qingfeng&#39;;\\n&quot; +
      &quot;const loader1 = &#39;https://github.com/19Qingfeng&#39;;&quot;
  },
  {
    id: &#39;./example/src/module.js&#39;,
    dependencies: Set {},
    name: [ &#39;second&#39; ],
    _source: &quot;const name = &#39;19Qingfeng&#39;;\\n&quot; +
      &#39;module.exports = {\\n&#39; +
      &#39;  name\\n&#39; +
      &#39;};\\n&#39; +
      &quot;const loader2 = &#39;19Qingfeng&#39;;\\n&quot; +
      &quot;const loader1 = &#39;https://github.com/19Qingfeng&#39;;&quot;
  }
} modules

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\u6211\u4EEC\u5DF2\u7ECF\u5C06<code>module.js</code>\u8FD9\u4E2A\u4F9D\u8D56\u5982\u613F\u4EE5\u507F\u52A0\u5165\u5230<code>modules</code>\u4E2D\u4E86\uFF0C\u540C\u65F6\u5B83\u4E5F\u7ECF\u8FC7<code>loader</code>\u7684\u5904\u7406\u3002\u4F46\u662F\u6211\u4EEC\u53D1\u73B0\u5B83\u88AB\u91CD\u590D\u52A0\u5165\u4E86\u4E24\u6B21\u3002</p><p>\u8FD9\u662F\u56E0\u4E3A<strong>module.js</strong>\u8FD9\u4E2A\u6A21\u5757\u88AB\u5F15\u7528\u4E86\u4E24\u6B21\uFF0C\u5B83\u88AB<code>entry1</code>\u548C<code>entry2</code>\u90FD\u5DF2\u8FDB\u884C\u4E86\u4F9D\u8D56\uFF0C\u5728\u8FDB\u884C\u9012\u5F52\u7F16\u8BD1\u65F6\u6211\u4EEC\u8FDB\u884C\u4E86\u4E24\u6B21<code>buildModule</code>\u76F8\u540C\u6A21\u5757\u3002</p><p>\u8BA9\u6211\u4EEC\u6765\u5904\u7406\u4E0B\u8FD9\u4E2A\u95EE\u9898:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    handleWebpackCompiler(moduleName, modulePath) {
       ...
// \u901A\u8FC7babel\u4FEE\u6539\u6E90\u4EE3\u7801\u4E2D\u7684require\u53D8\u6210__webpack_require__\u8BED\u53E5
          node.callee = t.identifier(&#39;__webpack_require__&#39;);
// \u4FEE\u6539\u6E90\u4EE3\u7801\u4E2Drequire\u8BED\u53E5\u5F15\u5165\u7684\u6A21\u5757 \u5168\u90E8\u4FEE\u6539\u53D8\u4E3A\u76F8\u5BF9\u4E8E\u8DDF\u8DEF\u5F84\u6765\u5904\u7406
          node.arguments = [t.stringLiteral(moduleId)];
// \u8F6C\u5316\u4E3Aids\u7684\u6570\u7EC4 \u597D\u5904\u7406
          const alreadyModules = Array.from(this.modules).map((i) =&gt; i.id);
          if (!alreadyModules.includes(moduleId)) {
// \u4E3A\u5F53\u524D\u6A21\u5757\u6DFB\u52A0require\u8BED\u53E5\u9020\u6210\u7684\u4F9D\u8D56(\u5185\u5BB9\u4E3A\u76F8\u5BF9\u4E8E\u6839\u8DEF\u5F84\u7684\u6A21\u5757ID)
            module.dependencies.add(moduleId);
          } else {
// \u5DF2\u7ECF\u5B58\u5728\u7684\u8BDD \u867D\u7136\u4E0D\u8FDB\u884C\u6DFB\u52A0\u8FDB\u5165\u6A21\u5757\u7F16\u8BD1 \u4F46\u662F\u4ECD\u8981\u66F4\u65B0\u8FD9\u4E2A\u6A21\u5757\u4F9D\u8D56\u7684\u5165\u53E3
            this.modules.forEach((value) =&gt; {
              if (value.id === moduleId) {
                value.name.push(moduleName);
              }
            });
          }
        }
      },
    });
    ...
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u5728\u6BCF\u4E00\u6B21\u4EE3\u7801\u5206\u6790\u7684\u4F9D\u8D56\u8F6C\u5316\u4E2D\uFF0C\u9996\u5148\u5224\u65AD<code>this.module</code>\u5BF9\u8C61\u662F\u5426\u5DF2\u7ECF\u5B58\u5728\u5F53\u524D\u6A21\u5757\u4E86\uFF08\u901A\u8FC7\u552F\u4E00\u7684\u6A21\u5757id\u8DEF\u5F84\u5224\u65AD\uFF09\u3002</p><p>\u5982\u679C\u4E0D\u5B58\u5728\u5219\u6DFB\u52A0\u8FDB\u5165\u4F9D\u8D56\u4E2D\u8FDB\u884C\u7F16\u8BD1\uFF0C\u5982\u679C\u8BE5\u6A21\u5757\u5DF2\u7ECF\u5B58\u5728\u8FC7\u4E86\u5C31\u8BC1\u660E\u8FD9\u4E2A\u6A21\u5757\u5DF2\u7ECF\u88AB\u7F16\u8BD1\u8FC7\u4E86\u3002\u6240\u4EE5\u6B64\u65F6\u6211\u4EEC\u4E0D\u9700\u8981\u5C06\u5B83\u518D\u6B21\u8FDB\u884C\u7F16\u8BD1\uFF0C\u6211\u4EEC\u4EC5\u4EC5\u9700\u8981\u66F4\u65B0\u8FD9\u4E2A\u6A21\u5757\u6240\u5C5E\u7684chunk\uFF0C\u4E3A\u5B83\u7684<code>name</code>\u5C5E\u6027\u6DFB\u52A0\u5F53\u524D\u6240\u5C5E\u7684<code>chunk</code>\u540D\u79F0\u3002</p><p>\u91CD\u65B0\u8FD0\u884C\uFF0C\u8BA9\u6211\u4EEC\u5728\u6765\u770B\u770B\u6253\u5370\u7ED3\u679C:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Set {
  {
    id: &#39;./example/src/entry1.js&#39;,
    dependencies: Set { &#39;./example/src/module.js&#39; },
    name: [ &#39;main&#39; ],
    _source: &#39;const depModule = __webpack_require__(&quot;./example/src/module.js&quot;);\\n&#39; +
      &#39;\\n&#39; +
      &quot;console.log(depModule, &#39;dep&#39;);\\n&quot; +
      &quot;console.log(&#39;This is entry 1 !&#39;);\\n&quot; +
      &quot;const loader2 = &#39;19Qingfeng&#39;;\\n&quot; +
      &quot;const loader1 = &#39;https://github.com/19Qingfeng&#39;;&quot;
  },
  {
    id: &#39;./example/src/entry2.js&#39;,
    dependencies: Set {},
    name: [ &#39;second&#39; ],
    _source: &#39;const depModule = __webpack_require__(&quot;./example/src/module.js&quot;);\\n&#39; +
      &#39;\\n&#39; +
      &quot;console.log(depModule, &#39;dep&#39;);\\n&quot; +
      &quot;console.log(&#39;This is entry 2 !&#39;);\\n&quot; +
      &quot;const loader2 = &#39;19Qingfeng&#39;;\\n&quot; +
      &quot;const loader1 = &#39;https://github.com/19Qingfeng&#39;;&quot;
  }
} entries
Set {
  {
    id: &#39;./example/src/module.js&#39;,
    dependencies: Set {},
    name: [ &#39;main&#39;, &#39;./module&#39; ],
    _source: &quot;const name = &#39;19Qingfeng&#39;;\\n&quot; +
      &#39;module.exports = {\\n&#39; +
      &#39;  name\\n&#39; +
      &#39;};\\n&#39; +
      &quot;const loader2 = &#39;19Qingfeng&#39;;\\n&quot; +
      &quot;const loader1 = &#39;https://github.com/19Qingfeng&#39;;&quot;
  }
} modules

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u65F6\u9488\u5BF9\u6211\u4EEC\u7684\u201C\u6A21\u5757\u7F16\u8BD1\u9636\u6BB5\u201D\u57FA\u672C\u5DF2\u7ECF\u7ED3\u675F\u4E86\uFF0C\u8FD9\u4E00\u6B65\u6211\u4EEC\u5BF9\u4E8E\u6240\u6709\u6A21\u5757\u4ECE\u5165\u53E3\u6587\u4EF6\u5F00\u59CB\u8FDB\u884C\u5206\u6790\u3002</p><ul><li>\u4ECE\u5165\u53E3\u51FA\u53D1\uFF0C\u8BFB\u53D6\u5165\u53E3\u6587\u4EF6\u5185\u5BB9\u8C03\u7528\u5339\u914D<code>loader</code>\u5904\u7406\u5165\u53E3\u6587\u4EF6\u3002</li><li>\u901A\u8FC7<code>babel</code>\u5206\u6790\u4F9D\u8D56\uFF0C\u5E76\u4E14\u540C\u65F6\u5C06\u6240\u6709\u4F9D\u8D56\u7684\u8DEF\u5F84\u66F4\u6362\u4E3A\u76F8\u5BF9\u4E8E\u9879\u76EE\u542F\u52A8\u76EE\u5F55<code>options.context</code>\u7684\u8DEF\u5F84\u3002</li><li>\u5165\u53E3\u6587\u4EF6\u4E2D\u5982\u679C\u5B58\u5728\u4F9D\u8D56\u7684\u8BDD\uFF0C\u9012\u5F52\u4E0A\u8FF0\u6B65\u9AA4\u7F16\u8BD1\u4F9D\u8D56\u6A21\u5757\u3002</li><li>\u5C06\u6BCF\u4E2A\u4F9D\u8D56\u7684\u6A21\u5757\u7F16\u8BD1\u540E\u7684\u5BF9\u8C61\u52A0\u5165<code>this.modules</code>\u3002</li><li>\u5C06\u6BCF\u4E2A\u5165\u53E3\u6587\u4EF6\u7F16\u8BD1\u540E\u7684\u5BF9\u8C61\u52A0\u5165<code>this.entries</code>\u3002</li></ul><h1 id="\u7F16\u8BD1\u5B8C\u6210\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u5B8C\u6210\u9636\u6BB5" aria-hidden="true">#</a> \u7F16\u8BD1\u5B8C\u6210\u9636\u6BB5</h1><p>\u5728\u4E0A\u4E00\u6B65\u6211\u4EEC\u5B8C\u6210\u4E86\u6A21\u5757\u4E4B\u95F4\u7684\u7F16\u8BD1\uFF0C\u5E76\u4E14\u4E3A<code>module</code>\u548C<code>entry</code>\u5206\u522B\u586B\u5145\u4E86\u5185\u5BB9\u3002</p><p>\u5728\u5C06\u6240\u6709\u6A21\u5757\u9012\u5F52\u7F16\u8BD1\u5B8C\u6210\u540E\uFF0C\u6211\u4EEC\u9700\u8981<strong>\u6839\u636E\u4E0A\u8FF0\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u7EC4\u5408\u6700\u7EC8\u8F93\u51FA\u7684<code>chunk</code>\u6A21\u5757</strong>\u3002</p><p>\u8BA9\u6211\u4EEC\u6765\u7EE7\u7EED\u6539\u9020\u6211\u4EEC\u7684<code>Compiler</code>\u5427:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Compiler {

// ...
    buildEntryModule(entry) {
        Object.keys(entry).forEach((entryName) =&gt; {
          const entryPath = entry[entryName];
// \u8C03\u7528buildModule\u5B9E\u73B0\u771F\u6B63\u7684\u6A21\u5757\u7F16\u8BD1\u903B\u8F91
          const entryObj = this.buildModule(entryName, entryPath);
          this.entries.add(entryObj);
// \u6839\u636E\u5F53\u524D\u5165\u53E3\u6587\u4EF6\u548C\u6A21\u5757\u7684\u76F8\u4E92\u4F9D\u8D56\u5173\u7CFB\uFF0C\u7EC4\u88C5\u6210\u4E3A\u4E00\u4E2A\u4E2A\u5305\u542B\u5F53\u524D\u5165\u53E3\u6240\u6709\u4F9D\u8D56\u6A21\u5757\u7684chunk
          this.buildUpChunk(entryName, entryObj);
        });
        console.log(this.chunks, &#39;chunks&#39;);
    }

// \u6839\u636E\u5165\u53E3\u6587\u4EF6\u548C\u4F9D\u8D56\u6A21\u5757\u7EC4\u88C5chunks
      buildUpChunk(entryName, entryObj) {
        const chunk = {
          name: entryName,// \u6BCF\u4E00\u4E2A\u5165\u53E3\u6587\u4EF6\u4F5C\u4E3A\u4E00\u4E2Achunk
          entryModule: entryObj,// entry\u7F16\u8BD1\u540E\u7684\u5BF9\u8C61
          modules: Array.from(this.modules).filter((i) =&gt;
            i.name.includes(entryName)
          ),// \u5BFB\u627E\u4E0E\u5F53\u524Dentry\u6709\u5173\u7684\u6240\u6709module
        };
// \u5C06chunk\u6DFB\u52A0\u5230this.chunks\u4E2D\u53BB
        this.chunks.add(chunk);
      }

// ...
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\uFF0C\u6211\u4EEC\u6839\u636E\u5BF9\u5E94\u7684\u5165\u53E3\u6587\u4EF6\u901A\u8FC7\u6BCF\u4E00\u4E2A\u6A21\u5757(<code>module</code>)\u7684<code>name</code>\u5C5E\u6027\u67E5\u627E\u5BF9\u5E94\u5165\u53E3\u7684\u6240\u6709\u4F9D\u8D56\u6587\u4EF6\u3002</p><p>\u6211\u4EEC\u5148\u6765\u770B\u770B<code>this.chunks</code>\u6700\u7EC8\u4F1A\u8F93\u51FA\u4EC0\u4E48:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Set {
  {
    name: &#39;main&#39;,
    entryModule: {
      id: &#39;./example/src/entry1.js&#39;,
      dependencies: [Set],
      name: [Array],
      _source: &#39;const depModule = __webpack_require__(&quot;./example/src/module.js&quot;);\\n&#39; +
        &#39;\\n&#39; +
        &quot;console.log(depModule, &#39;dep&#39;);\\n&quot; +
        &quot;console.log(&#39;This is entry 1 !&#39;);\\n&quot; +
        &quot;const loader2 = &#39;19Qingfeng&#39;;\\n&quot; +
        &quot;const loader1 = &#39;https://github.com/19Qingfeng&#39;;&quot;
    },
    modules: [ [Object] ]
  },
  {
    name: &#39;second&#39;,
    entryModule: {
      id: &#39;./example/src/entry2.js&#39;,
      dependencies: Set {},
      name: [Array],
      _source: &#39;const depModule = __webpack_require__(&quot;./example/src/module.js&quot;);\\n&#39; +
        &#39;\\n&#39; +
        &quot;console.log(depModule, &#39;dep&#39;);\\n&quot; +
        &quot;console.log(&#39;This is entry 2 !&#39;);\\n&quot; +
        &quot;const loader2 = &#39;19Qingfeng&#39;;\\n&quot; +
        &quot;const loader1 = &#39;https://github.com/19Qingfeng&#39;;&quot;
    },
    modules: []
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E00\u6B65\uFF0C<strong>\u6211\u4EEC\u5F97\u5230\u4E86<code>Webpack</code>\u4E2D\u6700\u7EC8\u8F93\u51FA\u7684\u4E24\u4E2A<code>chunk</code></strong>\u3002</p><p>\u5B83\u4EEC\u5206\u522B\u62E5\u6709:</p><ul><li><code>name</code>:\u5F53\u524D\u5165\u53E3\u6587\u4EF6\u7684\u540D\u79F0</li><li><code>entryModule</code>: \u5165\u53E3\u6587\u4EF6\u7F16\u8BD1\u540E\u7684\u5BF9\u8C61\u3002</li><li><code>modules</code>: \u8BE5\u5165\u53E3\u6587\u4EF6\u4F9D\u8D56\u7684\u6240\u6709\u6A21\u5757\u5BF9\u8C61\u7EC4\u6210\u7684\u6570\u7EC4\uFF0C\u5176\u4E2D\u6BCF\u4E00\u4E2A\u5143\u7D20\u7684\u683C\u5F0F\u548C<code>entryModule</code>\u662F\u4E00\u81F4\u7684\u3002</li></ul><p>\u6B64\u65F6\u7F16\u8BD1\u5B8C\u6210\u6211\u4EEC\u62FC\u88C5<code>chunk</code>\u7684\u73AF\u8282\u5C31\u5706\u6EE1\u5B8C\u6210\u3002</p><h1 id="\u8F93\u51FA\u6587\u4EF6\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA\u6587\u4EF6\u9636\u6BB5" aria-hidden="true">#</a> \u8F93\u51FA\u6587\u4EF6\u9636\u6BB5</h1><p>\u6211\u4EEC\u5148\u653E\u4E00\u4E0B\u4E0A\u4E00\u6B65\u6240\u6709\u7F16\u8BD1\u5B8C\u6210\u540E\u62FC\u88C5\u51FA\u6765\u7684<code>this.chunks</code>\u3002</p><h2 id="\u5206\u6790\u539F\u59CB\u6253\u5305\u8F93\u51FA\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790\u539F\u59CB\u6253\u5305\u8F93\u51FA\u7ED3\u679C" aria-hidden="true">#</a> <strong>\u5206\u6790\u539F\u59CB\u6253\u5305\u8F93\u51FA\u7ED3\u679C</strong></h2><p>\u8FD9\u91CC\uFF0C\u6211\u628A<code>webpack/core/index.js</code>\u4E2D\u505A\u4E86\u5982\u4E0B\u4FEE\u6539:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- const webpack = require(&#39;./webpack&#39;);
+ const webpack = require(&#39;webpack&#39;)

...

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u7528\u539F\u672C\u7684<code>webpack</code>\u4EE3\u66FF\u6211\u4EEC\u81EA\u5DF1\u5B9E\u73B0\u7684<code>webpack</code>\u5148\u8FDB\u884C\u4E00\u6B21\u6253\u5305\u3002</p><p>\u8FD0\u884C<code>webpack/core/index.js</code>\u540E\uFF0C\u6211\u4EEC\u4F1A\u5728<code>webpack/src/build</code>\u4E2D\u5F97\u5230\u4E24\u4E2A\u6587\u4EF6:<code>main.js</code>\u548C<code>second.js</code>,\u6211\u4EEC\u4EE5\u5176\u4E2D\u4E00\u4E2A<code>main.js</code>\u6765\u770B\u770B\u5B83\u7684\u5185\u5BB9:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(() =&gt; {
  var __webpack_modules__ = {
    &#39;./example/src/module.js&#39;: (module) =&gt; {
      const name = &#39;19Qingfeng&#39;;

      module.exports = {
        name,
      };

      const loader2 = &#39;19Qingfeng&#39;;
      const loader1 = &#39;https://github.com/19Qingfeng&#39;;
    },
  };
// The module cache
  var __webpack_module_cache__ = {};

// The require function
  function __webpack_require__(moduleId) {
// Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
// Create a new module (and put it into the cache)
    var module = (__webpack_module_cache__[moduleId] = {
// no module.id needed
// no module.loaded needed
      exports: {},
    });

// Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Return the exports of the module
    return module.exports;
  }

  var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() =&gt; {
    const depModule = __webpack_require__(
/*! ./module */ &#39;./example/src/module.js&#39;
    );

    console.log(depModule, &#39;dep&#39;);
    console.log(&#39;This is entry 1 !&#39;);

    const loader2 = &#39;19Qingfeng&#39;;
    const loader1 = &#39;https://github.com/19Qingfeng&#39;;
  })();
})();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u8FD9\u91CC\u6211\u624B\u52A8\u5220\u9664\u4E86\u6253\u5305\u751F\u6210\u540E\u7684\u591A\u4F59\u6CE8\u91CA\uFF0C\u7CBE\u7B80\u4E86\u4EE3\u7801\u3002</p></blockquote><p>\u6211\u4EEC\u6765\u7A0D\u5FAE\u5206\u6790\u4E00\u4E0B\u539F\u59CB\u6253\u5305\u751F\u6210\u7684\u4EE3\u7801\uFF1A</p><p><code>webpack</code>\u6253\u5305\u540E\u7684\u4EE3\u7801\u5185\u90E8\u5B9A\u4E49\u4E86\u4E00\u4E2A<code>__webpack_require__</code>\u7684\u51FD\u6570\u4EE3\u66FF\u4E86<code>NodeJs</code>\u5185\u90E8\u7684<code>require</code>\u65B9\u6CD5\u3002</p><p>\u540C\u65F6\u5E95\u90E8\u7684</p>`,35),D={href:"https://mmbiz.qpic.cn/sz_mmbiz/H8M5QJDxMHqp1R4dSG2OiaG6eicUnY61YFfCibCTIUDOrSYshCFR1UMg2NibZpD7mvz3Uial1M8nbbT7YGTutnPzC1w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},J=l("https://mmbiz.qpic.cn/sz_mmbiz/H8M5QJDxMHqp1R4dSG2OiaG6eicUnY61YFfCibCTIUDOrSYshCFR1UMg2NibZpD7mvz3Uial1M8nbbT7YGTutnPzC1w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),I=e("p",null,"\u8FD9\u5757\u4EE3\u7801\u76F8\u6BD4\u5927\u5BB6\u90FD\u5F88\u719F\u6089\u5427\uFF0C\u8FD9\u5C31\u662F\u6211\u4EEC\u7F16\u8BD1\u540E\u7684\u5165\u53E3\u6587\u4EF6\u4EE3\u7801\u3002\u540C\u65F6\u9876\u90E8\u7684\u4EE3\u7801\u662F\u8BE5\u5165\u53E3\u6587\u4EF6\u4F9D\u8D56\u7684\u6240\u6709\u6A21\u5757\u5B9A\u4E49\u7684\u4E00\u4E2A\u5BF9\u8C61:",-1),B={href:"https://mmbiz.qpic.cn/sz_mmbiz/H8M5QJDxMHqp1R4dSG2OiaG6eicUnY61YFEl1koiaXZKQyPtUUYDEc8QmDmM0QYT8jxfdQARJHUVk8dX5anFlL1AQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},R=l("https://mmbiz.qpic.cn/sz_mmbiz/H8M5QJDxMHqp1R4dSG2OiaG6eicUnY61YFEl1koiaXZKQyPtUUYDEc8QmDmM0QYT8jxfdQARJHUVk8dX5anFlL1AQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),W=d(`<p>\u8FD9\u91CC\u5B9A\u4E49\u4E86\u4E00\u4E2A<code>__webpack__modules</code>\u7684\u5BF9\u8C61\uFF0C**\u5BF9\u8C61\u7684<code>key</code>\u4E3A\u8BE5\u4F9D\u8D56\u6A21\u5757\u76F8\u5BF9\u4E8E\u8DDF\u8DEF\u5F84\u7684\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u5BF9\u8C61\u7684<code>value</code>\u8BE5\u4F9D\u8D56\u6A21\u5757\u7F16\u8BD1\u540E\u7684\u4EE3\u7801\u3002\`</p><h2 id="\u8F93\u51FA\u6587\u4EF6\u9636\u6BB5-1" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA\u6587\u4EF6\u9636\u6BB5-1" aria-hidden="true">#</a> <strong>\u8F93\u51FA\u6587\u4EF6\u9636\u6BB5</strong></h2><p>\u63A5\u4E0B\u91CC\u5728\u5206\u6790\u5B8C<code>webpack</code>\u539F\u59CB\u6253\u5305\u540E\u7684\u4EE3\u7801\u4E4B\u540E\uFF0C\u4E0A\u6211\u4EEC\u6765\u7EE7\u7EED\u4E0A\u4E00\u6B65\u3002\u901A\u8FC7\u6211\u4EEC\u7684<code>this.chunks</code>\u6765\u5C1D\u8BD5\u8F93\u51FA\u6700\u7EC8\u7684\u6548\u679C\u5427\u3002</p><p>\u8BA9\u6211\u4EEC\u56DE\u5230<code>Compiler</code>\u4E0A\u7684<code>run</code>\u65B9\u6CD5\u4E2D:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>   class Compiler {

   }
// run\u65B9\u6CD5\u542F\u52A8\u7F16\u8BD1
// \u540C\u65F6run\u65B9\u6CD5\u63A5\u53D7\u5916\u90E8\u4F20\u9012\u7684callback
  run(callback) {
// \u5F53\u8C03\u7528run\u65B9\u5F0F\u65F6 \u89E6\u53D1\u5F00\u59CB\u7F16\u8BD1\u7684plugin
    this.hooks.run.call();
// \u83B7\u53D6\u5165\u53E3\u914D\u7F6E\u5BF9\u8C61
    const entry = this.getEntry();
// \u7F16\u8BD1\u5165\u53E3\u6587\u4EF6
    this.buildEntryModule(entry);
// \u5BFC\u51FA\u5217\u8868;\u4E4B\u540E\u5C06\u6BCF\u4E2Achunk\u8F6C\u5316\u79F0\u4E3A\u5355\u72EC\u7684\u6587\u4EF6\u52A0\u5165\u5230\u8F93\u51FA\u5217\u8868assets\u4E2D
    this.exportFile(callback);
  }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u5728<code>buildEntryModule</code>\u6A21\u5757\u7F16\u8BD1\u5B8C\u6210\u4E4B\u540E\uFF0C\u901A\u8FC7<code>this.exportFile</code>\u65B9\u6CD5\u5B9E\u73B0\u5BFC\u51FA\u6587\u4EF6\u7684\u903B\u8F91\u3002</p><p>\u8BA9\u6211\u4EEC\u6765\u4E00\u8D77\u770B\u770B<code>this.exportFile</code>\u65B9\u6CD5:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5C06chunk\u52A0\u5165\u8F93\u51FA\u5217\u8868\u4E2D\u53BB
  exportFile(callback) {
    const output = this.options.output;
// \u6839\u636Echunks\u751F\u6210assets\u5185\u5BB9
    this.chunks.forEach((chunk) =&gt; {
      const parseFileName = output.filename.replace(&#39;[name]&#39;, chunk.name);
// assets\u4E2D { &#39;main.js&#39;: &#39;\u751F\u6210\u7684\u5B57\u7B26\u4E32\u4EE3\u7801...&#39; }
      this.assets.set(parseFileName, getSourceCode(chunk));
    });
// \u8C03\u7528Plugin emit\u94A9\u5B50
    this.hooks.emit.call();
// \u5148\u5224\u65AD\u76EE\u5F55\u662F\u5426\u5B58\u5728 \u5B58\u5728\u76F4\u63A5fs.write \u4E0D\u5B58\u5728\u5219\u9996\u5148\u521B\u5EFA
    if (!fs.existsSync(output.path)) {
      fs.mkdirSync(output.path);
    }
// files\u4E2D\u4FDD\u5B58\u6240\u6709\u7684\u751F\u6210\u6587\u4EF6\u540D
    this.files = Object.keys(this.assets);
// \u5C06assets\u4E2D\u7684\u5185\u5BB9\u751F\u6210\u6253\u5305\u6587\u4EF6 \u5199\u5165\u6587\u4EF6\u7CFB\u7EDF\u4E2D
    Object.keys(this.assets).forEach((fileName) =&gt; {
      const filePath = path.join(output.path, fileName);
      fs.writeFileSync(filePath, this.assets[fileName]);
    });
// \u7ED3\u675F\u4E4B\u540E\u89E6\u53D1\u94A9\u5B50
    this.hooks.done.call();
    callback(null, {
      toJson: () =&gt; {
        return {
          entries: this.entries,
          modules: this.modules,
          files: this.files,
          chunks: this.chunks,
          assets: this.assets,
        };
      },
    });
  }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>exportFile</code>\u505A\u4E86\u5982\u4E0B\u51E0\u4EF6\u4E8B:</p><ul><li>\u9996\u5148\u83B7\u53D6\u914D\u7F6E\u53C2\u6570\u7684\u8F93\u51FA\u914D\u7F6E\uFF0C\u8FED\u4EE3\u6211\u4EEC\u7684<code>this.chunks</code>\uFF0C\u5C06<code>output.filename</code>\u4E2D\u7684<code>[name]</code>\u66FF\u6362\u79F0\u4E3A\u5BF9\u5E94\u7684\u5165\u53E3\u6587\u4EF6\u540D\u79F0\u3002\u540C\u65F6\u6839\u636E<code>chunks</code>\u7684\u5185\u5BB9\u4E3A<code>this.assets</code>\u4E2D\u6DFB\u52A0\u9700\u8981\u6253\u5305\u751F\u6210\u7684\u6587\u4EF6\u540D\u548C\u6587\u4EF6\u5185\u5BB9\u3002</li><li>\u5C06\u6587\u4EF6\u5199\u5165\u78C1\u76D8\u524D\u8C03\u7528<code>plugin</code>\u7684<code>emit</code>\u94A9\u5B50\u51FD\u6570\u3002</li><li>\u5224\u65AD<code>output.path</code>\u6587\u4EF6\u5939\u662F\u5426\u5B58\u5728\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219\u901A\u8FC7<code>fs</code>\u65B0\u5EFA\u8FD9\u4E2A\u6587\u4EF6\u5939\u3002</li><li>\u5C06\u672C\u6B21\u6253\u5305\u751F\u6210\u7684\u6240\u6709\u6587\u4EF6\u540D(<code>this.assets</code>\u7684<code>key</code>\u503C\u7EC4\u6210\u7684\u6570\u7EC4)\u5B58\u653E\u8FDB\u5165<code>files</code>\u4E2D\u53BB\u3002</li><li>\u5FAA\u73AF<code>this.assets</code>\uFF0C\u5C06\u6587\u4EF6\u4F9D\u6B21\u5199\u5165\u5BF9\u5E94\u7684\u78C1\u76D8\u4E2D\u53BB\u3002</li><li>\u6240\u6709\u6253\u5305\u6D41\u7A0B\u7ED3\u675F\uFF0C\u89E6\u53D1<code>webpack</code>\u63D2\u4EF6\u7684<code>done</code>\u94A9\u5B50\u3002</li><li>\u540C\u65F6\u4E3A<code>NodeJs Webpack APi</code>\u547C\u5E94\uFF0C\u8C03\u7528<code>run</code>\u65B9\u6CD5\u4E2D\u5916\u90E8\u4F20\u5165\u7684<code>callback</code>\u4F20\u5165\u4E24\u4E2A\u53C2\u6570\u3002</li></ul><p>\u603B\u7684\u6765\u8BF4\uFF0C<code>this.assets</code>\u505A\u7684\u4E8B\u60C5\u4E5F\u6BD4\u8F83\u7B80\u5355\uFF0C\u5C31\u662F\u901A\u8FC7\u5206\u6790<code>chunks</code>\u5F97\u5230<code>assets</code>\u7136\u540E\u8F93\u51FA\u5BF9\u5E94\u7684\u4EE3\u7801\u5230\u78C1\u76D8\u4E2D\u3002</p><p>\u4ED4\u7EC6\u770B\u8FC7\u4E0A\u8FB9\u4EE3\u7801\uFF0C\u4F60\u4F1A\u53D1\u73B0\u3002<code>this.assets</code>\u8FD9\u4E2A<code>Map</code>\u4E2D\u6BCF\u4E00\u4E2A\u5143\u7D20\u7684<code>value</code>\u662F\u901A\u8FC7\u8C03\u7528<code>getSourceCode(chunk)</code>\u65B9\u6CD5\u6765\u751F\u6210\u6A21\u5757\u5BF9\u5E94\u7684\u4EE3\u7801\u7684\u3002</p><p>\u90A3\u4E48<code>getSourceCode</code>\u8FD9\u4E2A\u65B9\u6CD5\u662F\u5982\u4F55\u6839\u636E<code>chunk</code>\u6765\u751F\u6210\u6211\u4EEC\u6700\u7EC8\u7F16\u8BD1\u540E\u7684\u4EE3\u7801\u5462\uFF1F\u8BA9\u6211\u4EEC\u4E00\u8D77\u6765\u770B\u770B\u5427\uFF01</p><h2 id="getsourcecode\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#getsourcecode\u65B9\u6CD5" aria-hidden="true">#</a> <strong><code>getSourceCode</code>\u65B9\u6CD5</strong></h2><p>\u9996\u5148\u6211\u4EEC\u6765\u7B80\u5355\u660E\u786E\u4E00\u4E0B\u8FD9\u4E2A\u65B9\u6CD5\u7684\u804C\u8D23\uFF0C\u6211\u4EEC\u9700\u8981<code>getSourceCode</code>\u65B9\u6CD5\u63A5\u53D7\u4F20\u5165\u7684<code>chunk</code>\u5BF9\u8C61\u3002\u4ECE\u800C\u8FD4\u56DE\u8BE5<code>chunk</code>\u7684\u6E90\u4EE3\u7801\u3002</p><p>\u5E9F\u8BDD\u4E0D\u591A\u8BF4\uFF0C\u5176\u5B9E\u8FD9\u91CC\u6211\u7528\u4E86\u4E00\u4E2A\u6BD4\u8F83\u5077\u61D2\u7684\u529E\u6CD5\uFF0C\u4F46\u662F\u5B8C\u5168\u4E0D\u59A8\u788D\u4F60\u7406\u89E3<code>Webpack</code>\u6D41\u7A0B\uFF0C\u4E0A\u8FB9\u6211\u4EEC\u5206\u6790\u8FC7\u539F\u672C<code>webpack</code>\u6253\u5305\u540E\u7684\u4EE3\u7801<strong>\u4EC5\u4EC5\u53EA\u6709\u5165\u53E3\u6587\u4EF6\u548C\u6A21\u5757\u4F9D\u8D56\u662F\u6BCF\u6B21\u6253\u5305\u4E0D\u540C\u7684\u5730\u65B9\uFF0C\u5173\u4E8E<code>require</code>\u65B9\u6CD5\u4E4B\u7C7B\u90FD\u662F\u76F8\u901A\u7684</strong>\u3002</p><p>\u628A\u63E1\u6BCF\u6B21\u7684\u4E0D\u540C\u70B9\uFF0C\u6211\u4EEC\u76F4\u63A5\u5148\u6765\u770B\u770B\u5B83\u7684\u5B9E\u73B0\u65B9\u5F0F:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// webpack/utils/index.js

...

/**
 *
 *
 * @param {*} chunk
 * name\u5C5E\u6027\u5165\u53E3\u6587\u4EF6\u540D\u79F0
 * entryModule\u5165\u53E3\u6587\u4EF6module\u5BF9\u8C61
 * modules \u4F9D\u8D56\u6A21\u5757\u8DEF\u5F84
 */
function getSourceCode(chunk) {
  const { name, entryModule, modules } = chunk;
  return \`
  (() =&gt; {
    var __webpack_modules__ = {
      \${modules
        .map((module) =&gt; {
          return \`
          &#39;\${module.id}&#39;: (module) =&gt; {
            \${module._source}
      }
        \`;
        })
        .join(&#39;,&#39;)}
    };
    // The module cache
    var __webpack_module_cache__ = {};

    // The require function
    function __webpack_require__(moduleId) {
      // Check if module is in cache
      var cachedModule = __webpack_module_cache__[moduleId];
      if (cachedModule !== undefined) {
        return cachedModule.exports;
      }
      // Create a new module (and put it into the cache)
      var module = (__webpack_module_cache__[moduleId] = {
        // no module.id needed
        // no module.loaded needed
        exports: {},
      });

      // Execute the module function
      __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

      // Return the exports of the module
      return module.exports;
    }

    var __webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
    (() =&gt; {
      \${entryModule._source}
    })();
  })();
  \`;
}
...

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6BB5\u4EE3\u7801\u5176\u5B9E\u975E\u5E38\u975E\u5E38\u7B80\u5355\uFF0C\u8FDC\u8FDC\u6CA1\u6709\u4F60\u60F3\u8C61\u7684\u591A\u96BE\uFF01\u6709\u70B9\u8FD4\u749E\u5F52\u771F\u7684\u611F\u89C9\u662F\u5417\u54C8\u54C8\u3002</p><p>\u5728<code>getSourceCode</code>\u65B9\u6CD5\u4E2D\uFF0C\u6211\u4EEC\u901A\u8FC7\u7EC4\u5408\u800C\u6765\u7684<code>chunk</code>\u83B7\u5F97\u5BF9\u5E94\u7684:</p><ul><li><code>name</code>: \u8BE5\u5165\u53E3\u6587\u4EF6\u5BF9\u5E94\u8F93\u51FA\u6587\u4EF6\u7684\u540D\u79F0\u3002</li><li><code>entryModule</code>: \u5B58\u653E\u8BE5\u5165\u53E3\u6587\u4EF6\u7F16\u8BD1\u540E\u7684\u5BF9\u8C61\u3002</li><li><code>modules</code>:\u5B58\u653E\u8BE5\u5165\u53E3\u6587\u4EF6\u4F9D\u8D56\u7684\u6240\u6709\u6A21\u5757\u7684\u5BF9\u8C61\u3002</li></ul><p><strong>\u6211\u4EEC\u901A\u8FC7\u5B57\u7B26\u4E32\u62FC\u63A5\u7684\u65B9\u5F0F\u53BB\u5B9E\u73B0\u4E86<code>__webpack__modules</code>\u5BF9\u8C61\u4E0A\u7684\u5C5E\u6027\uFF0C\u540C\u65F6\u4E5F\u5728\u5E95\u90E8\u901A\u8FC7<code>\${entryModule._source}</code>\u62FC\u63A5\u51FA\u5165\u53E3\u6587\u4EF6\u7684\u4EE3\u7801\u3002</strong></p><blockquote><p>\u8FD9\u91CC\u6211\u4EEC\u4E0A\u6587\u63D0\u5230\u8FC7\u4E3A\u4EC0\u4E48\u8981\u5C06\u6A21\u5757\u7684require\u65B9\u6CD5\u7684\u8DEF\u5F84\u8F6C\u5316\u4E3A\u76F8\u5BF9\u4E8E\u8DDF\u8DEF\u5F84(context)\u7684\u8DEF\u5F84\uFF0C\u770B\u5230\u8FD9\u91CC\u6211\u76F8\u4FE1\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u505A\u5927\u5BB6\u90FD\u5DF2\u7ECF\u4E86\u7136\u4E8E\u80F8\u4E86\u3002\u56E0\u4E3A\u6211\u4EEC\u6700\u7EC8\u5B9E\u73B0\u7684__webpack_require__\u65B9\u6CD5\u5168\u90FD\u662F\u9488\u5BF9\u4E8E\u6A21\u5757\u8DDF\u8DEF\u5F84\u7684\u76F8\u5BF9\u8DEF\u5F84\u81EA\u5DF1\u5B9E\u73B0\u7684require\u65B9\u6CD5\u3002</p></blockquote><blockquote><p>\u540C\u65F6\u5982\u679C\u4E0D\u592A\u6E05\u695Arequire\u65B9\u6CD5\u662F\u5982\u4F55\u8F6C\u53D8\u79F0\u4E3A__webpack_require__\u65B9\u6CD5\u7684\u540C\u5B66\u53EF\u4EE5\u91CD\u65B0\u56DE\u5230\u6211\u4EEC\u7684\u7F16\u8BD1\u7AE0\u8282\u4ED4\u7EC6\u590D\u4E60\u71AC\uFF5E\u6211\u4EEC\u901A\u8FC7babel\u5728AST\u8F6C\u5316\u9636\u6BB5\u5C06require\u65B9\u6CD5\u8C03\u7528\u53D8\u6210\u4E86__webpack_require__\u3002</p></blockquote><h1 id="\u5927\u529F\u544A\u6210" tabindex="-1"><a class="header-anchor" href="#\u5927\u529F\u544A\u6210" aria-hidden="true">#</a> \u5927\u529F\u544A\u6210</h1><p>\u81F3\u6B64\uFF0C\u8BA9\u6211\u4EEC\u56DE\u5230<code>webpack/core/index.js</code>\u4E2D\u53BB\u3002\u91CD\u65B0\u8FD0\u884C\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u4F60\u4F1A\u53D1\u73B0<code>webpack/example</code>\u76EE\u5F55\u4E0B\u4F1A\u591A\u51FA\u4E00\u4E2A<code>build</code>\u76EE\u5F55\u3002</p><p><a href="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==">data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==</a></p><p>\u8FD9\u4E00\u6B65\u6211\u4EEC\u5C31\u5B8C\u7F8E\u7684\u5B9E\u73B0\u5C5E\u4E8E\u6211\u4EEC\u81EA\u5DF1\u7684<code>webpack</code>\u3002</p><p>\u5B9E\u8D28\u4E0A\uFF0C\u6211\u4EEC\u5BF9\u4E8E\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7248\u7684<code>webpack</code>\u6838\u5FC3\u6211\u8FD8\u662F\u5E0C\u671B\u5927\u5BB6\u53EF\u4EE5\u5728\u7406\u89E3\u5B83\u7684\u5DE5\u4F5C\u6D41\u7684\u540C\u65F6\u5F7B\u5E95\u7406\u89E3<code>compiler</code>\u8FD9\u4E2A\u5BF9\u8C61\u3002</p><p>\u5728\u4E4B\u540E\u7684\u4EFB\u4F55\u5173\u4E8E<code>webpack</code>\u76F8\u5173\u5E95\u5C42\u5F00\u53D1\u4E2D\uFF0C\u771F\u6B63\u505A\u5230\u5BF9\u4E8E<code>compiler</code>\u7684\u7528\u6CD5\u4E86\u7136\u4E8E\u80F8\u3002\u4E86\u89E3<code>compiler</code>\u4E0A\u7684\u5404\u79CD\u5C5E\u6027\u662F\u5982\u4F55\u5F71\u54CD\u5230\u7F16\u8BD1\u6253\u5305\u7ED3\u679C\u7684\u3002</p><p>\u8BA9\u6211\u4EEC\u7528\u4E00\u5F20\u6D41\u7A0B\u56FE\u6765\u8FDB\u884C\u4E00\u4E2A\u5B8C\u7F8E\u7684\u6536\u5C3E\u5427:</p><p><a href="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==">data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==</a></p><h1 id="\u5199\u5728\u6700\u540E" tabindex="-1"><a class="header-anchor" href="#\u5199\u5728\u6700\u540E" aria-hidden="true">#</a> \u5199\u5728\u6700\u540E</h1><p>\u9996\u5148\uFF0C\u611F\u8C22\u6BCF\u4E00\u4F4D\u53EF\u4EE5\u770B\u5230\u8FD9\u91CC\u7684\u540C\u5B66\u3002</p><p>\u8FD9\u7BC7\u6587\u7AE0\u76F8\u5BF9\u6709\u4E00\u5B9A\u7684\u77E5\u8BC6\u95E8\u69DB\u5E76\u4E14\u4EE3\u7801\u90E8\u5206\u5C45\u591A\uFF0C\u656C\u4F69\u6BCF\u4E00\u4F4D\u53EF\u4EE5\u8BFB\u5230\u7ED3\u5C3E\u7684\u540C\u5B66\u3002</p><p>\u6587\u7AE0\u4E2D\u5BF9\u4E8E\u5B9E\u73B0\u4E00\u4E2A\u7B80\u6613\u7248\u7684<code>Webpack</code>\u5728\u8FD9\u91CC\u5C31\u8981\u548C\u5927\u5BB6\u544A\u4E00\u6BB5\u843D\u4E86\uFF0C\u8FD9\u5176\u5B9E\u53EA\u662F\u4E00\u4E2A\u6700\u57FA\u7840\u7248\u672C\u7684<code>webpack</code>\u5DE5\u4F5C\u6D41\u3002</p><p>\u4F46\u662F\u6B63\u662F\u901A\u8FC7\u8FD9\u6837\u4E00\u4E2A\u5C0F\u{1F330}\u53EF\u4EE5\u5E26\u6211\u4EEC\u771F\u6B63\u5165\u95E8<code>webpack</code>\u7684\u6838\u5FC3\u5DE5\u4F5C\u6D41\uFF0C\u5E0C\u671B\u8FD9\u7BC7\u6587\u7AE0\u5BF9\u4E8E\u5927\u5BB6\u7406\u89E3<code>webpack</code>\u65F6\u53EF\u4EE5\u8D77\u5230\u66F4\u597D\u7684\u8F85\u52A9\u4F5C\u7528\u3002</p><blockquote><p>\u5176\u5B9E\u5728\u7406\u89E3\u6E05\u695A\u57FA\u7840\u7684\u5DE5\u4F5C\u6D41\u4E4B\u540E\uFF0C\u9488\u5BF9\u4E8Eloader\u548Cplugin\u5F00\u53D1\u90FD\u662F\u4FE1\u624B\u62C8\u6765\u7684\u90E8\u5206\u3002</p></blockquote><blockquote><p>\u6587\u7AE0\u4E2D\u7684\u4EE3\u7801\u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u4E0B\u8F7D[9]\u3002</p></blockquote><blockquote><p>\u540C\u65F6\u8FD9\u91CC\u7684\u4EE3\u7801\u6211\u60F3\u5F3A\u8C03\u7684\u662F\u6E90\u7801\u6D41\u7A0B\u7684\u8BB2\u89E3\uFF0C\u771F\u5B9E\u7684webpack\u4F1A\u6BD4\u8FD9\u91CC\u590D\u6742\u5F88\u591A\u5F88\u591A\u3002\u8FD9\u91CC\u4E3A\u4E86\u65B9\u4FBF\u5927\u5BB6\u7406\u89E3\u523B\u610F\u8FDB\u884C\u4E86\u7B80\u5316\uFF0C\u4F46\u662F\u6838\u5FC3\u5DE5\u4F5C\u6D41\u662F\u548C\u6E90\u7801\u4E2D\u57FA\u672C\u4E00\u81F4\u7684\u3002</p></blockquote><h3 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> <strong>\u53C2\u8003\u8D44\u6599</strong></h3><p>[1]</p><p>Tapable: https://github.com/webpack/tapable</p><p>[2]</p><p>Webpack Node Api: https://webpack.js.org/api/node/</p><p>[3]</p><p>Babel: https://babeljs.io/docs/en/</p><p>[4]</p><p>\u300C\u524D\u7AEF\u57FA\u5EFA\u300D\u5E26\u4F60\u5728Babel\u7684\u4E16\u754C\u4E2D\u7545\u6E38:\xA0https://juejin.cn/post/7025237833543581732</p><p>[5]</p><h1 id="\u4ECEtree-shaking\u6765\u8D70\u8FDBbabel\u63D2\u4EF6\u5F00\u53D1\u8005\u7684\u4E16\u754C-https-juejin-cn-post-7028584587227824158" tabindex="-1"><a class="header-anchor" href="#\u4ECEtree-shaking\u6765\u8D70\u8FDBbabel\u63D2\u4EF6\u5F00\u53D1\u8005\u7684\u4E16\u754C-https-juejin-cn-post-7028584587227824158" aria-hidden="true">#</a> \u4ECETree Shaking\u6765\u8D70\u8FDBBabel\u63D2\u4EF6\u5F00\u53D1\u8005\u7684\u4E16\u754C:\xA0https://juejin.cn/post/7028584587227824158</h1><p>[6]</p><p>\u5B98\u65B9\u7684\u4ECB\u7ECD: https://webpack.js.org/api/compiler-hooks/</p><p>[7]</p><p>Context: https://webpack.js.org/configuration/entry-context/#root</p><p>[8]</p><p>\u8FD9\u91CC\u770B\u5230: https://webpack.docschina.org/concepts/loaders/#loader-features</p><p>[9]\u8FD9\u91CC\u4E0B\u8F7D: https://github.com/19Qingfeng/19webpack</p><blockquote><p>\u4F5C\u8005\uFF1A19\u7EC4wangxv</p><p>https://juejin.cn/post/7031546400034947108</p></blockquote>`,59);function T(X,L){const n=a("ExternalLinkIcon");return c(),o("div",null,[u,e("p",null,[e("a",v,[t,i(n)])]),m,e("p",null,[e("a",b,[p,i(n)])]),h,e("p",null,[e("a",g,[x,i(n)])]),_,e("p",null,[e("a",k,[w,i(n)])]),f,e("p",null,[e("a",q,[y,i(n)])]),A,e("p",null,[e("a",j,[M,i(n)])]),S,e("p",null,[e("a",z,[C,i(n)])]),Q,e("p",null,[e("a",P,[E,i(n)])]),Y,e("p",null,[e("a",O,[U,i(n)])]),H,e("p",null,[e("a",G,[N,i(n)])]),F,e("p",null,[e("a",D,[J,i(n)])]),I,e("p",null,[e("a",B,[R,i(n)])]),W])}var Z=s(r,[["render",T],["__file","01. Webpack5 \u6838\u5FC3\u6253\u5305\u539F\u7406\u5168\u6D41\u7A0B\u89E3\u6790.html.vue"]]);export{Z as default};
