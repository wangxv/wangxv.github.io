# 说一下 computed 如何实现的

## 核心答案

计算属性会在它使用到的响应式变量变化时，重新求值。在计算属性初始化时，会为其创建`computed watcher`。
它重新求值的条件是`dirty`为`true`, 核心点在于，响应式变量收集的依赖，它最终会收集到`computed watcher`和`渲染watcher`，
当修改某个响应式变量后，`computed watcher`会把`dirty`设置为`true`, `渲染watcher`会触发计算属性的 getter, 重新求值。

## 补充回答

1. 为每个 computed 创建 watcher，并且 lazy 为 true, watcher 创建时不会进行求值

2. 模板渲染时，触发 computed 的 getter, `watcher.dirty`为`true`进行求值

3. 求值过程中，使用到了响应式变量，触发响应式变量 getter，收集依赖，此时依赖栈包含`computed watcher`和`渲染watcher`

4. 响应式 dep 收集的依赖是`computed watcher`, 注意~不是`渲染watcher`，此时依赖栈包含`渲染watcher`

5. 计算属性的 deps 数组收集 响应式变量的 Dep 对象

6. `computed watcher`通知所有的 deps，去收集依赖, 此时收集的都是`渲染watcher`

7. 这时候所有 computed 用到的响应式变量,其中收集的依赖都包含, `computed watcher`和`渲染watcher`
