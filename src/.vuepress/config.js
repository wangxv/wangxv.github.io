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
const { defaultTheme } = require('@vuepress/theme-default')
const sidebar = require('./sidebar').sidebar
module.exports = {
  title: 'fyhub’s blog',
  description: '博客',
  dest: path.resolve(__dirname, '../../docs'),
  base: '/',
  plugins: [
  ],
  theme: defaultTheme({
    lastUpdated: '最后更新时间',
    sidebar,
    navbar: require('./sidebar').nav
  }),
  markdown: {
    lineNumbers: true
  },
  head: [
  ]
}