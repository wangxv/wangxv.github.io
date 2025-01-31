# 为什么 vue 没有提供对数组属性的监听

[issue 链接：尤大亲自回答](https://github.com/vuejs/vue/issues/8562)

## 实现

```js
const arrayProto = Array.prototype;
const arrayMethods = Object.create(arrayProto);
var methodsToPatch = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse",
];

methodsToPatch.forEach(function (method) {
  const original = arrayProto[method];
  arrayMethods[method] = function () {
    const args = [].slice.call(arguments);
    const result = original.apply(this, args);
    const ob = this.__ob__;
    let inserted;
    switch (method) {
      case "push":
      case "unshift":
        inserted = args;
        break;
      case "splice":
        inserted = args.slice(2);
        break;
    }
    if (inserted) {
      ob.observeArray(inserted);
    }
    ob.dep.notify();
    return result;
  };
});

class Observer {
  constructor(value) {
    this.value = value;
    this.__ob__ = this;
    if (Array.isArray(value)) {
      // 替换对象的原型对象
      value.__proto__ = arrayMethods;
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }
}
```

## 为什么不监听数组索引值变化

数组可以使用`Object.defineProperty`, 之所以不使用，是考虑到性能原因。

1. vue 没有为数组每一项进行观测，也就是说没有使用`Object.defineProperty`
2. 当数组调用 push 等变异方法时，会调用`notify`通知`观察者`更新
