/*
 * @Author: fanyihui
 * @Date: 2022-02-18 21:19:33
 * @LastEditors: VSCode
 * @LastEditTime: 2022-02-18 21:32:41
 * @FilePath: /fyh-blog/src/.vuepress/config.js
 * @Description:
 *
 * Copyright (c) 2022 by fanyihui/tuhu, All Rights Reserved.
 */

const path = require("path");
const sidebar = require("./sidebar").sidebar;
const { hopeTheme } = require("vuepress-theme-hope");
const { searchPlugin } = require("@vuepress/plugin-search");

module.exports = {
  title: "fyhub’s blog",
  description: "博客",
  dest: path.resolve(__dirname, "../../docs"),
  base: "/",
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Search",
        },
        "/zh/": {
          placeholder: "搜索",
        },
      },
    }),
  ],
  theme: hopeTheme({
    repo: "fyhhub/fyhhub.github.io",
    repoLabel: "GitHub",
    repoDisplay: true,
    lastUpdated: "最后更新时间",
    editLink: false,
    contributors: false,
    sidebar,
    navbar: require("./sidebar").nav,
    themeColor: {
      blue: "#2196f3",
      red: "#f26d6d",
      green: "#3eaf7c",
      orange: "#fb9b5f",
    },
    plugins: {
      comment: {
        provider: "Giscus",
        repo: "fyhhub/fyhhub.github.io",
        repoId: "R_kgDOGcGXUw",
        category: "General",
        categoryId: "DIC_kwDOGcGXU84CQ1aV",
        inputPosition: "bottom",
      },
      mdEnhance: {
        demo: true,
        codetabs: true,
        tabs: true,
        tasklist: true,
        playground: true,
        mermaid: true,
        mark: true,
      },
      photoSwipe: true,
    },
  }),
  markdown: {
    lineNumbers: true,
  },
  head: [
    [
      "script",
      {},
      `
    var hm1
    (function() {
      hm1 = document.createElement("script");
      hm1.src = "https://www.googletagmanager.com/gtag/js?id=G-BWGLYWG03M";
      var s1 = document.getElementsByTagName("script")[0]; 
      s1.parentNode.insertBefore(hm1, s1);
    })();
    hm1.onload = function() {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-BWGLYWG03M');
    }
  `,
    ],
  ],
};
