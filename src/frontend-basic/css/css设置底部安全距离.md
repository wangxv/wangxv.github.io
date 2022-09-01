# css设置底部安全距离


```css
@supports (bottom: env(safe-area-inset-bottom)) {
  .guide-video {
    height: calc(100vh - constant(safe-area-inset-bottom));
  }
}
```