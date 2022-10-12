const path = require("path");
const sidebar = require("./sidebar").sidebar;
const { hopeTheme } = require("vuepress-theme-hope");
const { searchPlugin } = require("@vuepress/plugin-search");

module.exports = {
  title: "wangxv’s blog",
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
    repo: "wangxv/wangxv.github.io",
    repoLabel: "GitHub",
    repoDisplay: true,
    lastUpdated: "最后更新时间",
    editLink: false,
    contributors: false,
    copyright: true,
    sidebar: {
      '/frontend-basic/': 'structure',
      '/frontend-advanced/': 'structure',
      '/frontend-engineering/': 'structure',
      '/tools/': 'structure',
      '/algorithm/': 'structure',
      '/basic/': 'structure',
      '/comment/': 'structure',
      '/informal/': 'structure',
      '/interview/': 'structure',
      '/vue/': 'structure',
    },
    navbar: require("./sidebar").nav,
    themeColor: {
      blue: "#2196f3",
      red: "#f26d6d",
      green: "#3eaf7c",
      orange: "#fb9b5f",
    },
    iconAssets: "iconfont",
    plugins: {
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
  ],
};
