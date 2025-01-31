const path = require("path");
const fs = require("fs");

const nav = [
  {
    text: "前端开发",
    icon: 'html',
    children: [
      { text: '前端基础', link: '/frontend-basic/' },
      { text: '前端进阶', link: '/frontend-advanced/' },
      { text: '前端工程化', link: '/frontend-engineering/' },
      { text: 'Vue系列', link: '/vue/' },
    ],
  },
  { text: "开发工具", link: "/tools/", icon: 'tool' },
  { text: "算法", link: "/algorithm/", icon: 'state' },
  { text: "计算机基础", link: "/basic/", icon: 'code' },
  { text: "随笔", link: "/informal/", icon: 'write' },
  { text: "面经", link: "/interview/", icon: 'strong' },
];

let sideBarConfigArr = [];
function generateSideBar(pathline, sideBarConfig, url, item) {
  // 获取路径下的所有文件和文件夹名称
  let mdDirs = fs.readdirSync(pathline);
  const hasReadme = mdDirs.some((e) => e.includes("README"));
  mdDirs = mdDirs.filter((dir) => !dir.startsWith("."));

  // 如果当前目录没有readme 需要删掉父级path属性
  if (!hasReadme) {
    delete item.path;
  }

  // 遍历
  mdDirs.forEach((dir) => {
    // 获取当前文件或文件夹路径
    const fullpath = path.resolve(pathline, dir);
    const stats = fs.statSync(fullpath);

    // 如果是文件夹继续递归
    if (stats.isDirectory()) {
      const item = {
        text: dir,
        path: `${url}/${dir}/`.replace(/\/+/g, "/"),
        children: [],
        collapsable: true
      };
      generateSideBar(
        path.resolve(pathline, dir),
        item.children,
        `${url}/${dir}/`.replace(/\/+/g, "/"),
        item
      );
      sideBarConfig.push(item);
      // 如果是个文件
    } else if (stats.isFile()) {
      // 如果是readme
      if (dir.includes("README")) {
        // sideBarConfig.push(url)
      } else {
        sideBarConfig.push(`${url}/${dir}`.replace(/\/+/g, "/"));
      }
    }
  });
}
generateSideBar(path.resolve(__dirname, "../../src"), sideBarConfigArr, "");

// 单独处理最顶层分类
sideBarConfigArr = sideBarConfigArr.reduce(
  (config, item) => ((config[item.path] = item.children), config),
  {}
);

module.exports = {
  sidebar: sideBarConfigArr,
  nav,
};
