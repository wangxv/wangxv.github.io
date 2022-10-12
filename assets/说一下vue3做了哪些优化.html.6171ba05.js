import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as a,e as o}from"./app.b9034ddb.js";const r={},t=o('<h1 id="\u8BF4\u4E00\u4E0B-vue3-\u505A\u4E86\u54EA\u4E9B\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u4E00\u4E0B-vue3-\u505A\u4E86\u54EA\u4E9B\u4F18\u5316" aria-hidden="true">#</a> \u8BF4\u4E00\u4E0B vue3 \u505A\u4E86\u54EA\u4E9B\u4F18\u5316</h1><h2 id="\u6E90\u7801\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u6E90\u7801\u4F18\u5316" aria-hidden="true">#</a> \u6E90\u7801\u4F18\u5316</h2><ol><li>\u66F4\u597D\u7684\u4EE3\u7801\u7BA1\u7406\u65B9\u5F0F\uFF1Amonorepo</li><li>\u6709\u7C7B\u578B\u7684 JavaScript\uFF1ATypeScript</li></ol><h2 id="\u6027\u80FD\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u6027\u80FD\u4F18\u5316" aria-hidden="true">#</a> \u6027\u80FD\u4F18\u5316</h2><ol><li>\u6E90\u7801\u4F53\u79EF\u4F18\u5316</li></ol><ul><li>\u79FB\u9664\u4E00\u4E9B\u51B7\u95E8\u7684 feature\uFF08\u6BD4\u5982 filter\u3001inline-template \u7B49\uFF09</li><li>\u5F15\u5165 tree-shaking \u7684\u6280\u672F\uFF0C\u51CF\u5C11\u6253\u5305\u4F53\u79EF</li></ul><ol start="2"><li><p>\u6570\u636E\u52AB\u6301\u4F18\u5316 Vue2 \u4E2D\u5BF9\u4E00\u4E2A\u6DF1\u5C42\u7684\u5BF9\u8C61\u4F1A\u9012\u5F52 Object.defineProperty \u628A\u6BCF\u4E00\u5C42\u5BF9\u8C61\u6570\u636E\u90FD\u53D8\u6210\u54CD\u5E94\u5F0F\u7684\uFF0C \u800C\u5728 Vue 3.0 \u53EA\u6709\u5728\u89E6\u53D1 getter \u65F6\u624D\u4F1A\u9012\u5F52\u5904\u7406\u6210\u54CD\u5E94\u5F0F</p></li><li><p>\u7F16\u8BD1\u4F18\u5316 \u901A\u8FC7\u7F16\u8BD1\u9636\u6BB5\u5BF9\u9759\u6001\u6A21\u677F\u7684\u5206\u6790\uFF0C\u7F16\u8BD1\u751F\u6210\u4E86 <code>Block tree</code>\u3002<code>Block tree</code> \u662F\u4E00\u4E2A\u5C06\u6A21\u7248\u57FA\u4E8E\u52A8\u6001\u8282\u70B9\u6307\u4EE4\u5207\u5272\u7684\u5D4C\u5957\u533A\u5757\uFF0C\u6BCF\u4E2A\u533A\u5757\u5185\u90E8\u7684\u8282\u70B9\u7ED3\u6784\u662F\u56FA\u5B9A\u7684\uFF0C\u800C\u4E14\u6BCF\u4E2A\u533A\u5757\u53EA\u9700\u8981\u4EE5\u4E00\u4E2A Array \u6765\u8FFD\u8E2A\u81EA\u8EAB\u5305\u542B\u7684\u52A8\u6001\u8282\u70B9\u3002\u501F\u52A9 Block tree\uFF0CVue.js \u5C06 vnode \u66F4\u65B0\u6027\u80FD\u7531\u4E0E\u6A21\u7248\u6574\u4F53\u5927\u5C0F\u76F8\u5173\u63D0\u5347\u4E3A\u4E0E\u52A8\u6001\u5185\u5BB9\u7684\u6570\u91CF\u76F8\u5173\uFF0C\u8FD9\u662F\u4E00\u4E2A\u975E\u5E38\u5927\u7684\u6027\u80FD\u7A81\u7834</p></li><li><p>v-memo \u4F18\u5316\u6E32\u67D3\uFF0C\u53EA\u6709\u5F53\u5B83\u4F9D\u8D56\u7684\u503C\u53D1\u751F\u6539\u53D8\uFF0C\u624D\u4F1A\u91CD\u65B0\u521B\u5EFA VNode\uFF0C\u4EE5\u53CA\u91CD\u65B0\u6E32\u67D3\u5B50\u8282\u70B9\uFF0C \u5426\u5219\u6574\u4E2A VNode \u7684\u521B\u5EFA\u548C\u66F4\u65B0\u90FD\u4F1A\u88AB\u8DF3\u8FC7</p></li><li><p>\u9664\u6B64\u4E4B\u5916\uFF0CVue.js 3.0 \u5728\u7F16\u8BD1\u9636\u6BB5\u8FD8\u5305\u542B\u4E86\u5BF9 Slot \u7684\u7F16\u8BD1\u4F18\u5316\u3001\u4E8B\u4EF6\u4FA6\u542C\u51FD\u6570\u7684\u7F13\u5B58\u4F18\u5316\uFF0C\u5E76\u4E14\u5728\u8FD0\u884C\u65F6\u91CD\u5199\u4E86 diff \u7B97\u6CD5</p></li></ol><h2 id="\u8BED\u6CD5-api-\u4F18\u5316-composition-api" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5-api-\u4F18\u5316-composition-api" aria-hidden="true">#</a> \u8BED\u6CD5 API \u4F18\u5316\uFF1AComposition API</h2>',8),l=[t];function c(d,n){return i(),a("div",null,l)}var p=e(r,[["render",c],["__file","\u8BF4\u4E00\u4E0Bvue3\u505A\u4E86\u54EA\u4E9B\u4F18\u5316.html.vue"]]);export{p as default};
