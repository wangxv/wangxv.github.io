import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{o as l,c as i,a as e,d as r,e as t,b as n,r as s}from"./app.b9034ddb.js";const c={},p=t('<h1 id="\u4EC0\u4E48\u662F\u8DE8\u57DF-\u6709\u54EA\u4E9B\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u8DE8\u57DF-\u6709\u54EA\u4E9B\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u8DE8\u57DF\uFF0C\u6709\u54EA\u4E9B\u89E3\u51B3\u65B9\u6848</h1><p>\u57DF\u540D\u3001\u534F\u8BAE\u3001\u7AEF\u53E3\uFF0C\u6709\u4E00\u4E2A\u4E0D\u540C\uFF0C\u53D1\u9001\u7684\u8BF7\u6C42\u5C31\u7B97\u8DE8\u57DF</p><h2 id="_1-cors" tabindex="-1"><a class="header-anchor" href="#_1-cors" aria-hidden="true">#</a> 1. CORS</h2><ol><li><p>\u7B80\u79F0 <code>CORS</code> \u662F W3C \u6807\u51C6\uFF0C\u5B83\u5141\u8BB8\u6D4F\u89C8\u5668\u5411\u8DE8\u6E90\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42\uFF08\u57DF\u540D\u534F\u8BAE\u7AEF\u53E3\u6709\u4E0D\u76F8\u540C\u7684\u670D\u52A1\u5668\uFF0C\u90FD\u7B97\u8DE8\u6E90\uFF09</p></li><li><p>\u6D4F\u89C8\u5668\u5C06 <code>CORS</code> \u5206\u4E3A\u4E24\u7C7B\uFF1A\u7B80\u5355\u8BF7\u6C42 \u548C \u975E\u7B80\u5355\u8BF7\u6C42</p></li></ol><ul><li><p><strong>\u7B80\u5355\u8BF7\u6C42</strong></p><ul><li>\u8BF7\u6C42\u65B9\u6CD5\uFF1A<strong>HEAD\u3001GET\u3001POST</strong></li></ul></li><li><p><strong>\u975E\u7B80\u5355\u8BF7\u6C42</strong></p><ul><li>\u4F1A\u53D1\u9001\u9884\u68C0\u8BF7\u6C42</li><li>\u9884\u68C0\u8BF7\u6C42\u7684\u8BF7\u6C42\u65B9\u6CD5\u662F <code>OPTIONS</code></li><li><strong>Content-Type\uFF1Aapplication/json \u90FD\u662F\u975E\u7B80\u5355\u8BF7\u6C42</strong></li></ul></li><li><p>\u8BF7\u6C42\u65F6\u4F1A\u643A\u5E26 <code>origin</code> \u5934\u5B57\u6BB5</p></li><li><p>\u7B80\u5355\u8BF7\u6C42\u5934\u4FE1\u606F\u4E0D\u8D85\u51FA\u4EE5\u4E0B\u5B57\u6BB5</p><ul><li>Accept</li><li>Accept-Language</li><li>Content-Language</li><li>Last-Event-ID</li><li>Content-Type\uFF1A\u53EA\u9650\u4E8E\u4E09\u4E2A\u503C application/x-www-form-urlencoded\u3001multipart/form-data\u3001text/plain</li></ul></li></ul><ol start="3"><li>\u540E\u7AEF\u5173\u4E8E\u54CD\u5E94\u5934\u8FD4\u56DE</li></ol><ul><li><p><strong>Access-Control-Allow-Origin: http://api.bob.com</strong></p><p>\u5141\u8BB8\u8BF7\u6C42\u7684\u6E90</p></li><li><p><strong>Access-Control-Allow-Credentials: true</strong></p><p>\u5141\u8BB8\u8BF7\u6C42\u643A\u5E26 cookie, xhr.withCredentials = true; \u53EF\u4EE5\u8BBE\u7F6E</p></li><li><p><strong>Access-Control-Request-Methods: POST, GET</strong></p><p>\u5141\u8BB8\u8BF7\u6C42\u7684\u65B9\u6CD5</p></li><li><p><strong>Access-Control-Expose-Headers: FooBar</strong></p><p>\u5141\u8BB8\u524D\u7AEF\u83B7\u53D6\u7684\u54CD\u5E94\u5934\u5B57\u6BB5</p></li><li><p><strong>Access-Control-Max-Age: 3000</strong></p><p>\u63A7\u5236\u9884\u68C0\u8BF7\u6C42\u7F13\u5B58\u65F6\u95F4\uFF0C\u4E0D\u7528\u6BCF\u6B21\u90FD\u9884\u68C0</p></li></ul><h2 id="_2-jsonp" tabindex="-1"><a class="header-anchor" href="#_2-jsonp" aria-hidden="true">#</a> 2. jsonp</h2><p>JSONP \u4F18\u70B9\u662F\u7B80\u5355\u517C\u5BB9\u6027\u597D\uFF0C\u53EF\u7528\u4E8E\u89E3\u51B3\u4E3B\u6D41\u6D4F\u89C8\u5668\u7684\u8DE8\u57DF\u6570\u636E\u8BBF\u95EE\u7684\u95EE\u9898\u3002\u7F3A\u70B9\u662F<code>\u4EC5\u652F\u6301get\u65B9\u6CD5</code>\u5177\u6709\u5C40\u9650\u6027</p><p>\u5B9E\u73B0\u65B9\u6848\uFF1A</p><ul><li>\u58F0\u660E\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570</li><li>\u521B\u5EFA\u4E00\u4E2A&lt;script&gt;\u6807\u7B7E\uFF0C\u628A\u90A3\u4E2A\u8DE8\u57DF\u7684 API \u6570\u636E\u63A5\u53E3\u5730\u5740\uFF0C\u8D4B\u503C\u7ED9 script \u7684 src,\u8FD8\u8981\u5728\u8FD9\u4E2A\u5730\u5740\u4E2D\u5411\u670D\u52A1\u5668\u4F20\u9012\u8BE5\u51FD\u6570\u540D\uFF08\u53EF\u4EE5\u901A\u8FC7\u95EE\u53F7\u4F20\u53C2:?callback=show\uFF09</li><li>\u670D\u52A1\u5668\u63A5\u6536\u5230\u8BF7\u6C42\u540E\uFF0C\u9700\u8981\u8FDB\u884C\u7279\u6B8A\u7684\u5904\u7406\uFF1A\u628A\u4F20\u9012\u8FDB\u6765\u7684\u51FD\u6570\u540D\u548C\u5B83\u9700\u8981\u7ED9\u4F60\u7684\u6570\u636E\u62FC\u63A5\u6210\u4E00\u4E2A\u5B57\u7B26\u4E32, \u4F8B\u5982 callback(data)</li><li>\u5BA2\u6237\u7AEF\u83B7\u53D6\u5230<code>callback(data)</code>\u8FD9\u6BB5\u811A\u672C\uFF0C\u6700\u540E\u6267\u884C callback</li></ul><h2 id="_3-\u4EE3\u7406\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_3-\u4EE3\u7406\u670D\u52A1" aria-hidden="true">#</a> 3. \u4EE3\u7406\u670D\u52A1</h2><p>\u901A\u8FC7 nginx \u6216 node \u670D\u52A1\u8F6C\u53D1\u8BF7\u6C42</p><h2 id="_4-iframe" tabindex="-1"><a class="header-anchor" href="#_4-iframe" aria-hidden="true">#</a> 4. iframe</h2><h2 id="_5-postmessage" tabindex="-1"><a class="header-anchor" href="#_5-postmessage" aria-hidden="true">#</a> 5. postMessage</h2><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>',16),d={href:"https://www.ruanyifeng.com/blog/2016/04/cors.html",target:"_blank",rel:"noopener noreferrer"},h=n("\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB CORS \u8BE6\u89E3");function _(g,u){const a=s("ExternalLinkIcon");return l(),i("div",null,[p,e("p",null,[e("a",d,[h,r(a)])])])}var x=o(c,[["render",_],["__file","\u4EC0\u4E48\u662F\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB.html.vue"]]);export{x as default};
