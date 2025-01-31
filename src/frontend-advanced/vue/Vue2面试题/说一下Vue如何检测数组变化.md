# 说一下 Vue 如何检测数组变化

## 核心答案

数组可以使用`Object.defineProperty`, 之所以不使用，是考虑到性能原因。

1. vue 没有为数组每一项进行观测，也就是说没有使用`Object.defineProperty`
2. 当数组调用 push 等变异方法时，会调用`notify`通知`观察者`更新

## 补充回答

如果调用变异方法，例如 push, 新增的元素，会递归劫持, 想要直接更改索引值，可以使用`$set`

## 实现

```js
const originalArray = Array.prototype;
const arrayMethods = Object.create(originalArray);

function defineReactive(obj) {
  arrayMethods.push = function (...args) {
    originalArray.push.call(this, ...args);
  };
  obj.__proto__ = arrayMethods;
}
```
