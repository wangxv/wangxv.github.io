# 说一下 nextTick 如何实现的

## 核心答案

nextTick 利用了浏览器事件循环机制，vue 为了避免频繁的操作 DOM,采用异步的方式更新 DOM。这些异步操作会通过 nextTick 函数将这些操作以 cb 的形式放到任务队列中（以微任务优先），当每次 tick 结束之后就会去执行这些 cb，更新 DOM。

宏任务 script - 微任务 - dom 渲染 - web Worker - 宏任务

例如更新 num++ 执行一千次，不可能每次都更新一次 dom,会有非常大的性能损耗，那么可以把更新放到最后一次来做，将更新任务放到异步队列, 做到批量更新

nextTick 会根据浏览器兼容性，依次降级使用不同方案

- Promise
- MutationObserver
- setImmediate
- setTimeout
