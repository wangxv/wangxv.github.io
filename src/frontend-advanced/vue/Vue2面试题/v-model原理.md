# v-model 原理

## 核心答案

v-model 最终会被模板编译成`value`和`input事件`(输入框)，如果是`checkbox`会被编译为`checked`和`change事件`

```js
"_c('input',{directives:[{name:"model",rawName:"v-model",value:(message),expression:"message"}],attrs:{"type":"text"},domProps:{"value":(message)},on:{"input":function($event){if($event.target.composing)return;message=$event.target.value}}})"
```

## 补充回答

然而 v-model 仅仅是起到合并语法，创建一个新的语法糖的意义吗？ 显然答案是否定的，对于需要使用输入法 (如中文、日文、韩文等) 的语言，会发现 v-model 不会在输入法组合文字过程中得到更新。这就是 v-model 的一个重要的特点。它会在事件处理这一层添加新的事件监听 compositionstart,compositionend，他们会分别在语言输入的开始和结束时监听到变化，只要借助$event.target.composing，就可以设计出只会在输入法组合文字的结束阶段才更新数据，这有利于提高用户的使用体验。

一句话：**优化点，事件用$event.target.composing 属性来保证不会在输入法组合文字过程中更新数据**
