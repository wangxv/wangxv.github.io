# 说一下 vue3 做了哪些优化

## 源码优化

1. 更好的代码管理方式：monorepo
2. 有类型的 JavaScript：TypeScript

## 性能优化

1. 源码体积优化

- 移除一些冷门的 feature（比如 filter、inline-template 等）
- 引入 tree-shaking 的技术，减少打包体积

2. 数据劫持优化
   Vue2 中对一个深层的对象会递归 Object.defineProperty 把每一层对象数据都变成响应式的， 而在 Vue 3.0 只有在触发 getter 时才会递归处理成响应式

3. 编译优化
   通过编译阶段对静态模板的分析，编译生成了 `Block tree`。`Block tree` 是一个将模版基于动态节点指令切割的嵌套区块，每个区块内部的节点结构是固定的，而且每个区块只需要以一个 Array 来追踪自身包含的动态节点。借助 Block tree，Vue.js 将 vnode 更新性能由与模版整体大小相关提升为与动态内容的数量相关，这是一个非常大的性能突破

4. v-memo
   优化渲染，只有当它依赖的值发生改变，才会重新创建 VNode，以及重新渲染子节点， 否则整个 VNode 的创建和更新都会被跳过

5. 除此之外，Vue.js 3.0 在编译阶段还包含了对 Slot 的编译优化、事件侦听函数的缓存优化，并且在运行时重写了 diff 算法

## 语法 API 优化：Composition API
