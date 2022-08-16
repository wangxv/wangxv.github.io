# CSS实现一个扇形

::: playground CSS实现一个扇形
@file App.vue

```vue
<template>
  <div>
    <div className="sector"></div>
  </div>
</template>
<script setup>
</script>
<style>
.sector {
  width: 0;
  height: 0;
  border: 100px solid transparent;
  border-top-color: red;
  border-radius: 50%;
}
</style>
```
:::
