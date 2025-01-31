# vue2 的 diff 算法

### diff 算法过程

diff 算法比较关键的是 sameVnode 判断两个节点是否相同

```js
// 判断两个节点是否相同
function sameVnode(a, b) {
  return (
    a.key === b.key &&
    a.asyncFactory === b.asyncFactory &&
    ((a.tag === b.tag &&
      a.isComment === b.isComment &&
      isDef(a.data) === isDef(b.data) &&
      sameInputType(a, b)) ||
      (isTrue(a.isAsyncPlaceholder) && isUndef(b.asyncFactory.error)))
  );
}
```

**while(旧首指针 <= 旧尾指针 && 新首指针 <= 新尾指针) {**

1. **旧首节点如果不存在**，旧首指针`向右移动1位`

2. **旧尾节点如果不存在**，旧尾指针`向左移动1位`

3. **旧首节点和新首节点** `sameVnode` 对比相同，继续递归`patch`子节点，旧首指针`向右移动1位`，新首指针`向右移动1位`

4. **旧尾节点和新尾节点** `sameVnode` 对比相同，继续递归`patch`子节点，旧尾指针`向左移动1位`，新尾指针`向左移动1位`

5. **旧首节点和新尾节点** `sameVnode` 对比相同，继续递归`patch`子节点，将**旧首结点**移动到尾部，旧首指针`向右移动1位`，
   新尾指针`向左移动1位`

6. **旧尾结点和新首节点** `sameVnode` 对比相同，继续递归`patch`子节点，将**旧尾结点**移动到首部，旧尾指针`向左移动1位`，
   新首指针`向右移动1位`

7. 以上都未满足，根据旧列表节点创建`Map{key => index}`，拿到**新首节点**的 key, 判断在`key map`中存在，**如果有获取其索引直接使用，否则需要遍历旧节点列表**，找到索引，这也是**diff 算法中 key 的作用**

8.如果仍然没有拿到新节点在旧列表中的索引，说明是全新节点，需要继续创建

9.如果拿到索引，对应索引上的节点和新节点 `sameVnode` 进行对比，如果相同，则需要移动位置或者继续递归对比更新；否则需要创建新节点；

10. 新首指针`向右移动1位`

11. 最后不管什么情况都会执行如下代码

```js
if (oldStartIdx > oldEndIdx) {
  refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
  addVnodes(
    parentElm,
    refElm,
    newCh,
    newStartIdx,
    newEndIdx,
    insertedVnodeQueue
  );
} else if (newStartIdx > newEndIdx) {
  removeVnodes(oldCh, oldStartIdx, oldEndIdx);
}
```

不断对比的过程使得 oldStartIndex 不断逼近 oldEndIndex，newStartIndex 不断逼近 newEndIndex。当**旧尾结点 <= 旧首节点**说明`旧节点已经遍历完了`，此时只要批量增加新节点即可。当**新尾结点 <= 新首节点** 说明`旧节点还有剩下`，此时只要批量删除旧节点即可
