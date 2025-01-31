# 说一下 vue2 的模板编译有哪些优化

## 核心答案

### 模板优化

vue 模板会经过`parse`, `optimize`, `generate`三个阶段，optimize 阶段会标记静态节点，优化更新的性能。

**判断是静态节点的条件**

- 表达式
- 静态文本
- 没有动态绑定
- 没有 if 或 for
- 不是组件
- 静态节点的父节点，不是带有 v-for 指令的 template 节点
- 子节点都是静态节点，如果有一个不是，那这个节点也不是静态节点

### 生成静态渲染函数

在编译流程走完后，会返回`staticRenderFns`, 它是一个数组会调用`renderStatus`, 拿到数组中的 Vnode, 缓存静态`render`的结果

```js
_c('div',[
    _m(0),
    _v(_s(a),
    _m(1)
])
```

### 更新优化

在执行`patchVNode`时，会判断是否是静态节点，如果是静态节点就不会走后续的 diff 逻辑

```js
if (
  isTrue(vnode.isStatic) &&
  isTrue(oldVnode.isStatic) &&
  vnode.key === oldVnode.key &&
  (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
) {
  vnode.componentInstance = oldVnode.componentInstance;
  return;
}
```
