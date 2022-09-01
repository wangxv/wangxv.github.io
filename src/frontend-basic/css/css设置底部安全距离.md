# css设置底部安全距离

```css
@supports (bottom: env(safe-area-inset-bottom)) {
  .bottom {
    padding-bottom: constant(safe-area-inset-bottom);
  }
}
```