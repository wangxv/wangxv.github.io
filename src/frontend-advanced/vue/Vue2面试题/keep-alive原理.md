# keep-alive 原理

## 核心答案

`keep-alive`会获取第一个子节点 VNode

1. 判断组件是否符合缓存条件，如果不匹配，直接返回 VNode 即可。
2. 如果符合缓存条件，会进入缓存机制的逻辑

- 这里的缓存机制使用了`LRU策略`
- LRU: 从内存中找出最久未使用的数据置换新的数据.算法根据数据的历史访问记录来进行淘汰数据，其核心思想是如果数据最近被访问过，那么将来被访问的几率也更高。

## 补充回答

**LRU 算法实现**

```js
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    // 先获取值
    let temp = this.map.get(key);

    // 删除key
    this.map.delete(key);

    // 添加key
    this.map.set(key, temp);
    return temp;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // 不管有没有 先删掉这个key
  if (this.map.has(key)) {
    this.map.delete(key);
  }

  // 设置key-value
  this.map.set(key, value);

  // 超过了最大容量
  if (this.map.size > this.capacity) {
    // 删除最早的key
    this.map.delete(this.map.keys().next().value);
  }
};
```
