import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as v,a as i,d as s,b as n,e as d,r as c}from"./app.6533dd40.js";const r={},t=i("h1",{id:"\u8D2A\u5403\u86C7",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#\u8D2A\u5403\u86C7","aria-hidden":"true"},"#"),n(" \u8D2A\u5403\u86C7")],-1),m=i("p",null,"\u6700\u7EC8\u6548\u679C\u5982\u4E0B\uFF1A",-1),b={href:"https://mmbiz.qpic.cn/mmbiz_gif/TZL4BdZpLdiaBRsZRWSaaB9lb992ic2icpUrcUzXVBnANtKz357A7vcjib21soTBr1vwArJkGhwD9QnVaHaibMSPSog/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1",target:"_blank",rel:"noopener noreferrer"},u=n("https://mmbiz.qpic.cn/mmbiz_gif/TZL4BdZpLdiaBRsZRWSaaB9lb992ic2icpUrcUzXVBnANtKz357A7vcjib21soTBr1vwArJkGhwD9QnVaHaibMSPSog/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1"),o=d(`<p>\u5B9E\u73B0\u6B65\u9AA4\u5206\u4E3A\u4EE5\u4E0B\u51E0\u6B65\uFF1A</p><ul><li>1\u3001\u628A\u86C7\u753B\u51FA\u6765</li><li>2\u3001\u8BA9\u86C7\u52A8\u8D77\u6765</li><li>3\u3001\u968F\u673A\u6295\u653E\u98DF\u7269</li><li>4\u3001\u86C7\u5403\u98DF\u7269</li><li>5\u3001\u8FB9\u7F18\u68C0\u6D4B\u4E0E\u649E\u81EA\u5DF1\u68C0\u6D4B</li></ul><h3 id="_1-\u628A\u86C7\u753B\u51FA\u6765" tabindex="-1"><a class="header-anchor" href="#_1-\u628A\u86C7\u753B\u51FA\u6765" aria-hidden="true">#</a> <strong>1. \u628A\u86C7\u753B\u51FA\u6765</strong></h3><p>\u5176\u5B9E\u753B\u86C7\u5F88\u7B80\u5355\uFF0C\u86C7\u5C31\u662F\u7531<code>\u86C7\u5934\u548C\u86C7\u8EAB</code>\u7EC4\u6210\uFF0C\u800C\u5176\u5B9E\u90FD\u53EF\u4EE5\u7528<code>\u6B63\u65B9\u683C</code>\u6765\u8868\u793A\uFF0C<code>\u86C7\u5934</code>\u5C31\u662F\u4E00\u4E2A\u65B9\u683C\uFF0C\u800C<code>\u86C7\u8EAB</code>\u53EF\u4EE5\u662F\u5F88\u591A\u4E2A\u65B9\u683C</p><p>\u753B\u65B9\u683C\u53EF\u4EE5\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ctx.fillRect
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6765\u753B\uFF0C\u86C7\u5934\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>head
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8868\u793A\uFF0C\u800C\u86C7\u8EAB\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6570\u7EC4body
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6765\u8868\u793A</p>`,11),h={href:"https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdiaBRsZRWSaaB9lb992ic2icpUQBic6XoiaAgYL0ZibiaWusxRwXibH2zmNYwxFd9BpHbXC6jAxITOGDKMjmw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},p=n("https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdiaBRsZRWSaaB9lb992ic2icpUQBic6XoiaAgYL0ZibiaWusxRwXibH2zmNYwxFd9BpHbXC6jAxITOGDKMjmw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),x=d(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// html
&lt;canvas id=&quot;canvas&quot; width=&quot;800&quot; height=&quot;800&quot;&gt;&lt;/canvas&gt;

// js

draw()

function draw() {
    const canvas = document.getElementById(&#39;canvas&#39;)

    const ctx = canvas.getContext(&#39;2d&#39;)

    // \u5C0F\u65B9\u683C\u7684\u6784\u9020\u51FD\u6570
    function Rect(x, y, width, height, color) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
    }

    Rect.prototype.draw = function () {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.strokeRect(this.x, this.y, this.width, this.height)
    }

    // \u86C7\u7684\u6784\u9020\u51FD\u6570
    function Snake(length = 0) {

        this.length = length
        // \u86C7\u5934
        this.head = new Rect(canvas.width / 2, canvas.height / 2, 40, 40, &#39;red&#39;)

// \u86C7\u8EAB
        this.body = []

        let x = this.head.x - 40
        let y = this.head.y

        for (let i = 0; i &lt; this.length; i++) {
            const rect = new Rect(x, y, 40, 40, &#39;yellow&#39;)
            this.body.push(rect)
            x -= 40
        }
    }

    Snake.prototype.drawSnake = function () {
// \u7ED8\u5236\u86C7\u5934
        this.head.draw()
// \u7ED8\u5236\u86C7\u8EAB
        for (let i = 0; i &lt; this.body.length; i++) {
            this.body[i].draw()
        }
    }

    const snake = new Snake(3)
    snake.drawSnake()
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u8BA9\u86C7\u52A8\u8D77\u6765" tabindex="-1"><a class="header-anchor" href="#_2-\u8BA9\u86C7\u52A8\u8D77\u6765" aria-hidden="true">#</a> <strong>2. \u8BA9\u86C7\u52A8\u8D77\u6765</strong></h3><p>\u86C7\u52A8\u8D77\u6765\u6709\u4E24\u79CD\u60C5\u51B5\uFF1A</p><ul><li>1\u3001\u86C7\u4E00\u5F00\u59CB\u5C31\u4F1A\u9ED8\u8BA4\u5411\u53F3\u79FB\u52A8</li><li>2\u3001\u901A\u8FC7\u65B9\u5411\u952E\u63A7\u5236\uFF0C\u5F80\u4E0D\u540C\u65B9\u5411\u79FB\u52A8 \u8FD9\u4E24\u79CD\u60C5\u51B5\u6BCF\u79D2\u90FD\u662F\u79FB\u52A8<code>\u4E00\u4E2A\u65B9\u683C\u7684\u4F4D\u7F6E</code></li></ul><p>\u8BA9\u86C7\u52A8\u8D77\u6765\uFF0C\u5176\u5B9E\u539F\u7406\u5F88\u7B80\u5355\uFF0C\u6211\u5C31\u4EE5\u86C7\u5411\u53F3\u79FB\u52A8\u6765\u4E3E\u4F8B\u5B50\u5427\uFF1A</p>`,5),g={href:"https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdiaBRsZRWSaaB9lb992ic2icpUWcykGiaKf2bSYn3Ku9jfkHLL0BgafnuSpGXmPPQgMbSUfvrQDmmDTdg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},w=n("https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdiaBRsZRWSaaB9lb992ic2icpUWcykGiaKf2bSYn3Ku9jfkHLL0BgafnuSpGXmPPQgMbSUfvrQDmmDTdg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),f=d(`<ul><li>1\u3001\u86C7\u5934\u5148\u53F3\u79FB\u4E00\u4E2A\u65B9\u683C\u8DDD\u79BB\uFF0C\u86C7\u8EAB\u4E0D\u52A8</li><li>2\u3001\u86C7\u8EAB<code>\u9996\u90E8</code>\u52A0\u4E00\u4E2A\u65B9\u683C</li><li>3\u3001\u86C7\u8EAB<code>\u5C3E\u90E8</code>\u7684\u65B9\u683C\u53BB\u9664</li><li>4\u3001\u5229\u7528\u5B9A\u65F6\u5668\uFF0C\u9020\u6210\u86C7\u4E0D\u65AD\u5411\u53F3\u79FB\u52A8\u7684\u89C6\u89C9</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    Snake.prototype.moveSnake = function () {
// \u5C06\u86C7\u5934\u4E0A\u4E00\u6B21\u72B6\u6001\uFF0C\u62FC\u5230\u86C7\u8EAB\u9996\u90E8
        const rect = new Rect(this.head.x, this.head.y, this.head.width, this.head.height, &#39;yellow&#39;)
        this.body.unshift(rect)

        this.body.pop()

// \u6839\u636E\u65B9\u5411\uFF0C\u63A7\u5236\u86C7\u5934\u7684\u5750\u6807
        switch (this.direction) {
            case 0:
                this.head.x -= this.head.width
                break
            case 1:
                this.head.y -= this.head.height
                break
            case 2:
                this.head.x += this.head.width
                break
            case 3:
                this.head.y += this.head.height
                break
        }
    }

    document.onkeydown = function (e) {
// \u952E\u76D8\u4E8B\u4EF6
        e = e || window.event
// \u5DE637  \u4E0A38  \u53F339  \u4E0B40
        switch (e.keyCode) {
            case 37:
                console.log(37)
// \u4E09\u5143\u8868\u8FBE\u5F0F\uFF0C\u9632\u6B62\u53F3\u79FB\u52A8\u65F6\u6309\u5DE6\uFF0C\u4E0B\u9762\u540C\u7406(\u8D2A\u5403\u86C7\u53EF\u4E0D\u80FD\u76F4\u63A5\u6389\u5934)
                snake.direction = snake.direction === 2 ? 2 : 0
                snake.moveSnake()
                break
            case 38:
                console.log(38)
                snake.direction = snake.direction === 3 ? 3 : 1
                break
            case 39:
                console.log(39)
                snake.direction = snake.direction === 0 ? 0 : 2
                break
            case 40:
                console.log(40)
                snake.direction = snake.direction === 1 ? 1 : 3
                break

        }
    }

    const snake = new Snake(3)
// \u9ED8\u8BA4direction\u4E3A2\uFF0C\u4E5F\u5C31\u662F\u53F3
    snake.direction = 2
    snake.drawSnake()

    function animate() {
// \u5148\u6E05\u7A7A
        ctx.clearRect(0, 0, canvas.width, canvas.height)
// \u79FB\u52A8
        snake.moveSnake()
// \u518D\u753B
        snake.drawSnake()
    }

    var timer = setInterval(() =&gt; {
        animate()
    }, 100)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u73B0\u6548\u679C\u5982\u4E0B\uFF1A</p>`,3),k={href:"https://mmbiz.qpic.cn/mmbiz_gif/TZL4BdZpLdiaBRsZRWSaaB9lb992ic2icpUSLGGYf3Nibkia1qCHic8nWiaLjicSCNesWIeVWRKHqQMDdOqeQcA947As3A/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1",target:"_blank",rel:"noopener noreferrer"},y=n("https://mmbiz.qpic.cn/mmbiz_gif/TZL4BdZpLdiaBRsZRWSaaB9lb992ic2icpUSLGGYf3Nibkia1qCHic8nWiaLjicSCNesWIeVWRKHqQMDdOqeQcA947As3A/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1"),_=d(`<p>\u86C7\u52A8\u8D77\u6765.gif</p><h3 id="_3-\u968F\u673A\u6295\u653E\u98DF\u7269" tabindex="-1"><a class="header-anchor" href="#_3-\u968F\u673A\u6295\u653E\u98DF\u7269" aria-hidden="true">#</a> <strong>3. \u968F\u673A\u6295\u653E\u98DF\u7269</strong></h3><p>\u968F\u673A\u6295\u653E\u98DF\u7269\uFF0C\u4E5F\u5C31\u662F\u5728\u753B\u5E03\u4E2D\u968F\u673A\u753B\u4E00\u4E2A\u65B9\u683C\uFF0C\u8981\u6CE8\u610F\u4EE5\u4E0B\u4E24\u70B9\uFF1A</p><ul><li>1\u3001\u5750\u6807\u8981\u5728\u753B\u5E03<code>\u8303\u56F4\u5185</code></li><li>2\u3001\u98DF\u7269<code>\u4E0D\u80FD\u6295\u5230\u86C7\u8EAB\u6216\u8005\u86C7\u5934\u4E0A</code>(\u8FD9\u6837\u4F1A\u628A\u86C7\u7838\u6655\u7684\u563F\u563F)</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    function randomFood(snake) {
        let isInSnake = true
        let rect
        while (isInSnake) {
            const x = Math.round(Math.random() * (canvas.width - 40) / 40) * 40
            const y = Math.round(Math.random() * (canvas.height - 40) / 40) * 40
            console.log(x, y)
// \u4FDD\u8BC1\u662F40\u7684\u500D\u6570\u554A
            rect = new Rect(x, y, 40, 40, &#39;blue&#39;)
// \u5224\u65AD\u98DF\u7269\u662F\u5426\u4E0E\u86C7\u5934\u86C7\u8EAB\u91CD\u53E0
            if ((snake.head.x === x &amp;&amp; snake.head.y === y) || snake.body.find(item =&gt; item.x === x &amp;&amp; item.y === y)) {
                isInSnake = true
                continue
            } else {
                isInSnake = false
            }
        }
        return rect
    }

    const snake = new Snake(3)
// \u9ED8\u8BA4direction\u4E3A2\uFF0C\u4E5F\u5C31\u662F\u53F3
    snake.direction = 2
    snake.drawSnake()
// \u521B\u5EFA\u968F\u673A\u98DF\u7269\u5B9E\u4F8B
    var food = randomFood(snake)
// \u753B\u51FA\u98DF\u7269
    food.draw()

    function animate() {
// \u5148\u6E05\u7A7A
        ctx.clearRect(0, 0, canvas.width, canvas.height)
// \u79FB\u52A8
        snake.moveSnake()
// \u518D\u753B
        snake.drawSnake()
        food.draw()
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6548\u679C\u5982\u4E0B\uFF0C\u968F\u673A\u98DF\u7269\u753B\u51FA\u6765\u4E86\uFF1A</p>`,6),S={href:"https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdiaBRsZRWSaaB9lb992ic2icpU4NVw6uZu5F11yclYzbAd4qD8w360bXBMgMXfqO7n5zUqiauicR2JuwhQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},B=n("https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdiaBRsZRWSaaB9lb992ic2icpU4NVw6uZu5F11yclYzbAd4qD8w360bXBMgMXfqO7n5zUqiauicR2JuwhQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),R=d(`<h3 id="_4-\u86C7\u5403\u98DF\u7269" tabindex="-1"><a class="header-anchor" href="#_4-\u86C7\u5403\u98DF\u7269" aria-hidden="true">#</a> <strong>4. \u86C7\u5403\u98DF\u7269</strong></h3><p>\u5176\u5B9E\u86C7\u5403\u98DF\u7269\uFF0C\u5F88\u7B80\u5355\u7406\u89E3\uFF0C\u4E5F\u5C31\u662F\u86C7\u5934\u79FB\u52A8\u5230\u8DDF\u98DF\u7269\u7684<code>\u5750\u6807\u91CD\u53E0</code>\u65F6\uFF0C\u5C31\u7B97\u662F\u5403\u5230\u98DF\u7269\u4E86\uFF0C\u6CE8\u610F\u4E24\u70B9\uFF1A</p><ul><li>1\u3001\u5403\u5230\u98DF\u7269\u540E\uFF0C\u86C7\u8EAB\u8981<code>\u5EF6\u957F\u4E00\u4E2A\u7A7A\u683C</code></li><li>2\u3001\u5403\u5230\u98DF\u7269\u540E\uFF0C\u968F\u673A\u98DF\u7269\u8981<code>\u53D8\u6362\u4F4D\u7F6E</code></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const canvas = document.getElementById(&#39;canvas&#39;)

const ctx = canvas.getContext(&#39;2d&#39;)

// \u5B9A\u4E49\u4E00\u4E2A\u5168\u5C40\u7684\u662F\u5426\u5403\u5230\u98DF\u7269\u7684\u4E00\u4E2A\u53D8\u91CF
let isEatFood = false

    Snake.prototype.moveSnake = function () {
// \u5C06\u86C7\u5934\u4E0A\u4E00\u6B21\u72B6\u6001\uFF0C\u62FC\u5230\u86C7\u8EAB\u9996\u90E8
        const rect = new Rect(this.head.x, this.head.y, this.head.width, this.head.height, &#39;yellow&#39;)
        this.body.unshift(rect)

// \u5224\u65AD\u86C7\u5934\u662F\u5426\u4E0E\u98DF\u7269\u91CD\u53E0\uFF0C\u91CD\u53E0\u5C31\u662F\u5403\u5230\u4E86\uFF0C\u6CA1\u91CD\u53E0\u5C31\u662F\u6CA1\u5403\u5230
        isEatFood = food &amp;&amp; this.head.x === food.x &amp;&amp; this.head.y === food.y

// \u54B1\u4EEC\u4E0A\u9762\u5728\u86C7\u8EAB\u9996\u90E8\u63D2\u5165\u65B9\u683C
        if (!isEatFood) {
// \u6CA1\u5403\u5230\u5C31\u8981\u53BB\u5C3E\uFF0C\u76F8\u5F53\u4E8E\u6574\u6761\u86C7\u6CA1\u53D8\u957F
            this.body.pop()
        } else {
// \u5403\u5230\u4E86\u5C31\u4E0D\u53BB\u5C3E\uFF0C\u76F8\u5F53\u4E8E\u6574\u6761\u86C7\u5EF6\u957F\u4E00\u4E2A\u65B9\u683C

// \u5E76\u4E14\u5403\u5230\u4E86\uFF0C\u5C31\u8981\u91CD\u65B0\u751F\u6210\u4E00\u4E2A\u968F\u673A\u98DF\u7269
            food = randomFood(this)
            food.draw()
            isEatFood = false
        }

// \u6839\u636E\u65B9\u5411\uFF0C\u63A7\u5236\u86C7\u5934\u7684\u5750\u6807
        switch (this.direction) {
            case 0:
                this.head.x -= this.head.width
                break
            case 1:
                this.head.y -= this.head.height
                break
            case 2:
                this.head.x += this.head.width
                break
            case 3:
                this.head.y += this.head.height
                break
        }
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-\u78B0\u8FB9\u754C\u4E0E\u78B0\u81EA\u5DF1" tabindex="-1"><a class="header-anchor" href="#_5-\u78B0\u8FB9\u754C\u4E0E\u78B0\u81EA\u5DF1" aria-hidden="true">#</a> <strong>5. \u78B0\u8FB9\u754C\u4E0E\u78B0\u81EA\u5DF1</strong></h3><p>\u4F17\u6240\u5468\u77E5\uFF0C\u86C7\u5934\u78B0\u5230\u8FB9\u754C\uFF0C\u6216\u8005\u78B0\u5230\u86C7\u8EAB\uFF0C\u90FD\u4F1A\u7EC8\u6B62\u6E38\u620F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    Snake.prototype.drawSnake = function () {
// \u5982\u679C\u78B0\u5230\u4E86
        if (isHit(this)) {
// \u6E05\u9664\u5B9A\u65F6\u5668
            clearInterval(timer)
            const con = confirm(\`\u603B\u5171\u5403\u4E86\${this.body.length - this.length}\u4E2A\u98DF\u7269\uFF0C\u91CD\u65B0\u5F00\u59CB\u5417\`)
// \u662F\u5426\u91CD\u5F00
            if (con) {
                draw()
            }
            return
        }
// \u7ED8\u5236\u86C7\u5934
        this.head.draw()
// \u7ED8\u5236\u86C7\u8EAB
        for (let i = 0; i &lt; this.body.length; i++) {
            this.body[i].draw()
        }
    }

    function isHit(snake) {
        const head = snake.head
// \u662F\u5426\u78B0\u5230\u5DE6\u53F3\u8FB9\u754C
        const xLimit = head.x &lt; 0 || head.x &gt;= canvas.width
// \u662F\u5426\u78B0\u5230\u4E0A\u4E0B\u8FB9\u754C
        const yLimit = head.y &lt; 0 || head.y &gt;= canvas.height
// \u662F\u5426\u649E\u5230\u86C7\u8EAB
        const hitSelf = snake.body.find(({ x, y }) =&gt; head.x === x &amp;&amp; head.y === y)
// \u4E09\u8005\u5176\u4E2D\u4E00\u4E2A\u4E3Atrue\u5219\u6E38\u620F\u7ED3\u675F
        return xLimit || yLimit || hitSelf
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u81EA\u6B64\uFF0C\u8D2A\u5403\u86C7\u{1F40D}\u5C0F\u6E38\u620F\u5B8C\u6210\u55BD\uFF1A</p>`,8),z={href:"https://mmbiz.qpic.cn/mmbiz_gif/TZL4BdZpLdiaBRsZRWSaaB9lb992ic2icpUrcUzXVBnANtKz357A7vcjib21soTBr1vwArJkGhwD9QnVaHaibMSPSog/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1",target:"_blank",rel:"noopener noreferrer"},L=n("https://mmbiz.qpic.cn/mmbiz_gif/TZL4BdZpLdiaBRsZRWSaaB9lb992ic2icpUrcUzXVBnANtKz357A7vcjib21soTBr1vwArJkGhwD9QnVaHaibMSPSog/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1"),Z=d(`<h3 id="_6-\u5168\u90E8\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_6-\u5168\u90E8\u4EE3\u7801" aria-hidden="true">#</a> <strong>6. \u5168\u90E8\u4EE3\u7801\uFF1A</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
draw()

function draw() {
    const canvas = document.getElementById(&#39;canvas&#39;)

    const ctx = canvas.getContext(&#39;2d&#39;)

// \u5B9A\u4E49\u4E00\u4E2A\u5168\u5C40\u7684\u662F\u5426\u5403\u5230\u98DF\u7269\u7684\u4E00\u4E2A\u53D8\u91CF
    let isEatFood = false

// \u5C0F\u65B9\u683C\u7684\u6784\u9020\u51FD\u6570
    function Rect(x, y, width, height, color) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
    }

    Rect.prototype.draw = function () {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.strokeRect(this.x, this.y, this.width, this.height)
    }

// \u86C7\u7684\u6784\u9020\u51FD\u6570
    function Snake(length = 0) {

        this.length = length
// \u86C7\u5934
        this.head = new Rect(canvas.width / 2, canvas.height / 2, 40, 40, &#39;red&#39;)

// \u86C7\u8EAB
        this.body = []

        let x = this.head.x - 40
        let y = this.head.y

        for (let i = 0; i &lt; this.length; i++) {
            const rect = new Rect(x, y, 40, 40, &#39;yellow&#39;)
            this.body.push(rect)
            x -= 40
        }
    }

    Snake.prototype.drawSnake = function () {
// \u5982\u679C\u78B0\u5230\u4E86
        if (isHit(this)) {
// \u6E05\u9664\u5B9A\u65F6\u5668
            clearInterval(timer)
            const con = confirm(\`\u603B\u5171\u5403\u4E86\${this.body.length - this.length}\u4E2A\u98DF\u7269\uFF0C\u91CD\u65B0\u5F00\u59CB\u5417\`)
// \u662F\u5426\u91CD\u5F00
            if (con) {
                draw()
            }
            return
        }
// \u7ED8\u5236\u86C7\u5934
        this.head.draw()
// \u7ED8\u5236\u86C7\u8EAB
        for (let i = 0; i &lt; this.body.length; i++) {
            this.body[i].draw()
        }
    }

    Snake.prototype.moveSnake = function () {
// \u5C06\u86C7\u5934\u4E0A\u4E00\u6B21\u72B6\u6001\uFF0C\u62FC\u5230\u86C7\u8EAB\u9996\u90E8
        const rect = new Rect(this.head.x, this.head.y, this.head.width, this.head.height, &#39;yellow&#39;)
        this.body.unshift(rect)

// \u5224\u65AD\u86C7\u5934\u662F\u5426\u4E0E\u98DF\u7269\u91CD\u53E0\uFF0C\u91CD\u53E0\u5C31\u662F\u5403\u5230\u4E86\uFF0C\u6CA1\u91CD\u53E0\u5C31\u662F\u6CA1\u5403\u5230
        isEatFood = food &amp;&amp; this.head.x === food.x &amp;&amp; this.head.y === food.y

// \u54B1\u4EEC\u4E0A\u9762\u5728\u86C7\u8EAB\u9996\u90E8\u63D2\u5165\u65B9\u683C
        if (!isEatFood) {
// \u6CA1\u5403\u5230\u5C31\u8981\u53BB\u5C3E\uFF0C\u76F8\u5F53\u4E8E\u6574\u6761\u86C7\u6CA1\u53D8\u957F
            this.body.pop()
        } else {
// \u5403\u5230\u4E86\u5C31\u4E0D\u53BB\u5C3E\uFF0C\u76F8\u5F53\u4E8E\u6574\u6761\u86C7\u5EF6\u957F\u4E00\u4E2A\u65B9\u683C

// \u5E76\u4E14\u5403\u5230\u4E86\uFF0C\u5C31\u8981\u91CD\u65B0\u751F\u6210\u4E00\u4E2A\u968F\u673A\u98DF\u7269
            food = randomFood(this)
            food.draw()
            isEatFood = false
        }

// \u6839\u636E\u65B9\u5411\uFF0C\u63A7\u5236\u86C7\u5934\u7684\u5750\u6807
        switch (this.direction) {
            case 0:
                this.head.x -= this.head.width
                break
            case 1:
                this.head.y -= this.head.height
                break
            case 2:
                this.head.x += this.head.width
                break
            case 3:
                this.head.y += this.head.height
                break
        }
    }

    document.onkeydown = function (e) {
// \u952E\u76D8\u4E8B\u4EF6
        e = e || window.event
// \u5DE637  \u4E0A38  \u53F339  \u4E0B40
        switch (e.keyCode) {
            case 37:
                console.log(37)
// \u4E09\u5143\u8868\u8FBE\u5F0F\uFF0C\u9632\u6B62\u53F3\u79FB\u52A8\u65F6\u6309\u5DE6\uFF0C\u4E0B\u9762\u540C\u7406(\u8D2A\u5403\u86C7\u53EF\u4E0D\u80FD\u76F4\u63A5\u6389\u5934)
                snake.direction = snake.direction === 2 ? 2 : 0
                snake.moveSnake()
                break
            case 38:
                console.log(38)
                snake.direction = snake.direction === 3 ? 3 : 1
                break
            case 39:
                console.log(39)
                snake.direction = snake.direction === 0 ? 0 : 2
                break
            case 40:
                console.log(40)
                snake.direction = snake.direction === 1 ? 1 : 3
                break

        }
    }

    function randomFood(snake) {
        let isInSnake = true
        let rect
        while (isInSnake) {
            const x = Math.round(Math.random() * (canvas.width - 40) / 40) * 40
            const y = Math.round(Math.random() * (canvas.height - 40) / 40) * 40
            console.log(x, y)
// \u4FDD\u8BC1\u662F40\u7684\u500D\u6570\u554A
            rect = new Rect(x, y, 40, 40, &#39;blue&#39;)
// \u5224\u65AD\u98DF\u7269\u662F\u5426\u4E0E\u86C7\u5934\u86C7\u8EAB\u91CD\u53E0
            if ((snake.head.x === x &amp;&amp; snake.head.y === y) || snake.body.find(item =&gt; item.x === x &amp;&amp; item.y === y)) {
                isInSnake = true
                continue
            } else {
                isInSnake = false
            }
        }
        return rect
    }

    function isHit(snake) {
        const head = snake.head
// \u662F\u5426\u78B0\u5230\u5DE6\u53F3\u8FB9\u754C
        const xLimit = head.x &lt; 0 || head.x &gt;= canvas.width
// \u662F\u5426\u78B0\u5230\u4E0A\u4E0B\u8FB9\u754C
        const yLimit = head.y &lt; 0 || head.y &gt;= canvas.height
// \u662F\u5426\u649E\u5230\u86C7\u8EAB
        const hitSelf = snake.body.find(({ x, y }) =&gt; head.x === x &amp;&amp; head.y === y)
// \u4E09\u8005\u5176\u4E2D\u4E00\u4E2A\u4E3Atrue\u5219\u6E38\u620F\u7ED3\u675F
        return xLimit || yLimit || hitSelf
    }

    const snake = new Snake(3)
// \u9ED8\u8BA4direction\u4E3A2\uFF0C\u4E5F\u5C31\u662F\u53F3
    snake.direction = 2
    snake.drawSnake()
// \u521B\u5EFA\u968F\u673A\u98DF\u7269\u5B9E\u4F8B
    var food = randomFood(snake)
// \u753B\u51FA\u98DF\u7269
    food.draw()

    function animate() {
// \u5148\u6E05\u7A7A
        ctx.clearRect(0, 0, canvas.width, canvas.height)
// \u79FB\u52A8
        snake.moveSnake()
// \u518D\u753B
        snake.drawSnake()
        food.draw()
    }

    var timer = setInterval(() =&gt; {
        animate()
    }, 100)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function q(A,M){const e=c("ExternalLinkIcon");return a(),v("div",null,[t,m,i("p",null,[i("a",b,[u,s(e)])]),o,i("p",null,[i("a",h,[p,s(e)])]),x,i("p",null,[i("a",g,[w,s(e)])]),f,i("p",null,[i("a",k,[y,s(e)])]),_,i("p",null,[i("a",S,[B,s(e)])]),R,i("p",null,[i("a",z,[L,s(e)])]),Z])}var T=l(r,[["render",q],["__file","\u8D2A\u5403\u86C7.html.vue"]]);export{T as default};
