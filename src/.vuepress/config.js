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

const path = require('path')
const sidebar = require('./sidebar').sidebar
const { hopeTheme } = require('vuepress-theme-hope')
module.exports = {
  title: 'fyhub’s blog',
  description: '博客',
  dest: path.resolve(__dirname, '../../docs'),
  base: '/',
  plugins: [
  ],
  theme: hopeTheme({
    repo: "fyhhub/fyhhub.github.io",
    repoLabel: "GitHub",
    repoDisplay: true,
    lastUpdated: '最后更新时间',
    sidebar,
    navbar: require('./sidebar').nav,
    themeColor: {
      blue: "#2196f3",
      red: "#f26d6d",
      green: "#3eaf7c",
      orange: "#fb9b5f",
    },
    plugins: {
      comment: {
        provider: 'Giscus',
        repo: 'fyhhub/fyhhub.github.io',
        repoId: 'R_kgDOGcGXUw',
        category: 'General',
        categoryId: 'DIC_kwDOGcGXU84CQ1aV',
        inputPosition: 'bottom'
      },
      mdEnhance: {
        demo: true,
        codetabs: true,
        tabs: true,
        tasklist: true,
        playground: true,
        mermaid: true,
        mark: true
      }
    }
  }),
  markdown: {
    lineNumbers: true
  },
  head: [
  ]
}