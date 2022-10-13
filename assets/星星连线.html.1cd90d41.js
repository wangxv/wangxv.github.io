import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as l,c as t,a as i,d as s,e as n,b as d,r}from"./app.6533dd40.js";const v={},c=n(`<h1 id="\u661F\u661F\u8FDE\u7EBF" tabindex="-1"><a class="header-anchor" href="#\u661F\u661F\u8FDE\u7EBF" aria-hidden="true">#</a> \u661F\u661F\u8FDE\u7EBF</h1><h2 id="\u661F\u661F\u8FDE\u7EBF-1" tabindex="-1"><a class="header-anchor" href="#\u661F\u661F\u8FDE\u7EBF-1" aria-hidden="true">#</a> <strong>\u661F\u661F\u8FDE\u7EBF</strong></h2><p>\u8FD9\u4E2A\u5C0F\u6E38\u620F\u53EF\u5206\u4E3A\u4EE5\u4E0B\u51E0\u6B65\uFF1A</p><ul><li>1\u3001\u753B\u51FA\u5355\u4E2A\u5C0F\u661F\u661F\u5E76\u4F7F\u4ED6<code>\u79FB\u52A8</code></li><li>2\u3001\u9020\u51FA<code>\u4E00\u767E\u4E2A</code>\u5C0F\u661F\u661F</li><li>3\u3001\u661F\u661F\u4E4B\u95F4\u9760\u8FD1\u65F6\uFF0C\u8FDB\u884C<code>\u8FDE\u7EBF</code></li><li>4\u3001\u9F20\u6807<code>\u79FB\u52A8\u751F\u6210</code>\u5C0F\u661F\u661F</li><li>5\u3001\u9F20\u6807\u70B9\u51FB\u4EA7\u751F<code>5\u4E2A\u5C0F\u661F\u661F</code></li></ul><h3 id="_1-\u753B\u51FA\u5355\u4E2A\u5C0F\u661F\u661F-\u5E76\u4F7F\u4ED6\u79FB\u52A8" tabindex="-1"><a class="header-anchor" href="#_1-\u753B\u51FA\u5355\u4E2A\u5C0F\u661F\u661F-\u5E76\u4F7F\u4ED6\u79FB\u52A8" aria-hidden="true">#</a> <strong>1. \u753B\u51FA\u5355\u4E2A\u5C0F\u661F\u661F\uFF0C\u5E76\u4F7F\u4ED6\u79FB\u52A8</strong></h3><p>\u5176\u5B9E\u79FB\u52A8\u661F\u661F\u5F88\u7B80\u5355\uFF0C\u5C31\u662F\u6E05\u9664\u540E\u91CD\u65B0\u7ED8\u5236\u661F\u661F\uFF0C\u5E76\u5229\u7528\u5B9A\u65F6\u5668\uFF0C\u5C31\u4F1A\u6709\u79FB\u52A8\u7684\u89C6\u89C9\u4E86\u3002\u6CE8\u610F\u70B9\u5728\u4E8E\uFF1A<code>\u78B0\u5230\u8FB9\u754C\u8981\u53CD\u5F39</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// html
&lt;style&gt;
    #canvas {
            background: url(./\u5149\u80FD\u4F7F\u8005.jpg) 0 0/cover no-repeat;
        }
&lt;/style&gt;
&lt;canvas id=&quot;canvas&quot;&gt;&lt;/canvas&gt;

// js

const canvas = document.getElementById(&#39;canvas&#39;)

const ctx = canvas.getContext(&#39;2d&#39;)

// \u83B7\u53D6\u5F53\u524D\u89C6\u56FE\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6
let aw = document.documentElement.clientWidth || document.body.clientWidth
let ah = document.documentElement.clientHeight || document.body.clientHeight
// \u8D4B\u503C\u7ED9canvas
canvas.width = aw
canvas.height = ah

// \u5C4F\u5E55\u53D8\u52A8\u65F6\u4E5F\u8981\u76D1\u542C\u5B9E\u65F6\u5BBD\u9AD8
window.onresize = function () {
    aw = document.documentElement.clientWidth || document.body.clientWidth
    ah = document.documentElement.clientHeight || document.body.clientHeight
// \u8D4B\u503C\u7ED9canvas
    canvas.width = aw
    canvas.height = ah
}

// \u672C\u6E38\u620F\u65E0\u8BBA\u662F\u5B9E\u5FC3\uFF0C\u8FD8\u662F\u7EBF\u6761\uFF0C\u8272\u8C03\u90FD\u662F\u767D\u8272
ctx.fillStyle = &#39;white&#39;
ctx.strokeStyle = &#39;white&#39;

function Star(x, y, r) {
// x\uFF0Cy\u662F\u5750\u6807\uFF0Cr\u662F\u534A\u5F84
    this.x = x
    this.y = y
    this.r = r
// speed\u53C2\u6570\uFF0C\u5728  -3 ~ 3 \u4E4B\u95F4\u53D6\u503C
    this.speedX = (Math.random() * 3) * Math.pow(-1, Math.round(Math.random()))
    this.speedY = (Math.random() * 3) * Math.pow(-1, Math.round(Math.random()))
}

Star.prototype.draw = function () {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
    ctx.fill()
    ctx.closePath()
}

Star.prototype.move = function () {
    this.x -= this.speedX
    this.y -= this.speedY
// \u78B0\u5230\u8FB9\u754C\u65F6\uFF0C\u53CD\u5F39\uFF0C\u53EA\u9700\u8981\u628Aspeed\u53D6\u53CD\u5C31\u884C
    if (this.x &lt; 0 || this.x &gt; aw) this.speedX *= -1
    if (this.y &lt; 0 || this.y &gt; ah) this.speedY *= -1
}

// \u968F\u673A\u5728canvas\u8303\u56F4\u5185\u627E\u4E00\u4E2A\u5750\u6807\u753B\u661F\u661F
const star = new Star(Math.random() * aw, Math.random() * ah, 3)
star

// \u661F\u661F\u7684\u79FB\u52A8
setInterval(() =&gt; {
    ctx.clearRect(0, 0, aw, ah)
    star.move()
    star.draw()
}, 50)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FBE\u5230\u4EE5\u4E0B<code>\u79FB\u52A8\u4EE5\u53CA\u53CD\u5F39</code>\u7684\u6548\u679C\uFF1A</p>`,8),m={href:"https://mmbiz.qpic.cn/mmbiz_gif/TZL4BdZpLdiaBRsZRWSaaB9lb992ic2icpUGJjibj2ohKKLzRxdshtKeCJuvb305DMjbsLfrBbK9t43R0JAc03lfzQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1",target:"_blank",rel:"noopener noreferrer"},u=d("https://mmbiz.qpic.cn/mmbiz_gif/TZL4BdZpLdiaBRsZRWSaaB9lb992ic2icpUGJjibj2ohKKLzRxdshtKeCJuvb305DMjbsLfrBbK9t43R0JAc03lfzQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1"),b=n(`<p>\u661F\u661F\u53CD\u5F39.gif</p><h3 id="_2\u3001\u753B100\u4E2A\u5C0F\u661F\u661F" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u753B100\u4E2A\u5C0F\u661F\u661F" aria-hidden="true">#</a> <strong>2\u3001\u753B100\u4E2A\u5C0F\u661F\u661F</strong></h3><p>\u521B\u5EFA\u4E00\u4E2A<code>\u6570\u7EC4stars</code>\u6765\u5B58\u50A8\u8FD9\u4E9B\u661F\u661F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const stars = []
for (let i = 0; i &lt; 100; i++) {
// \u968F\u673A\u5728canvas\u8303\u56F4\u5185\u627E\u4E00\u4E2A\u5750\u6807\u753B\u661F\u661F
    stars.push(new Star(Math.random() * aw, Math.random() * ah, 3))
}

// \u661F\u661F\u7684\u79FB\u52A8
setInterval(() =&gt; {
    ctx.clearRect(0, 0, aw, ah)
// \u904D\u5386\u79FB\u52A8\u6E32\u67D3
    stars.forEach(star =&gt; {
        star.move()
        star.draw()
    })
}, 50)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6548\u679C\u5982\u4E0B\uFF1A</p>`,5),o={href:"https://mmbiz.qpic.cn/mmbiz_gif/TZL4BdZpLdiaBRsZRWSaaB9lb992ic2icpUtiakm1HwIibB0Cggr6JDGKXLXYCBm3gGyahoYEtibb1RniaBXaQvMHXNicA/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1",target:"_blank",rel:"noopener noreferrer"},h=d("https://mmbiz.qpic.cn/mmbiz_gif/TZL4BdZpLdiaBRsZRWSaaB9lb992ic2icpUtiakm1HwIibB0Cggr6JDGKXLXYCBm3gGyahoYEtibb1RniaBXaQvMHXNicA/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1"),p=n(`<p>100\u4E2A\u661F\u661F.gif</p><h3 id="_3-\u661F\u661F\u4E4B\u95F4\u9760\u8FD1\u65F6-\u8FDB\u884C\u8FDE\u7EBF" tabindex="-1"><a class="header-anchor" href="#_3-\u661F\u661F\u4E4B\u95F4\u9760\u8FD1\u65F6-\u8FDB\u884C\u8FDE\u7EBF" aria-hidden="true">#</a> <strong>3. \u661F\u661F\u4E4B\u95F4\u9760\u8FD1\u65F6\uFF0C\u8FDB\u884C\u8FDE\u7EBF</strong></h3><p>\u5F53\u4E24\u4E2A\u661F\u661F\u7684x\u548Cy\u76F8\u5DEE\u90FD\u5C0F\u4E8E50\u65F6\uFF0C\u5C31\u8FDB\u884C\u8FDE\u7EBF\uFF0C\u8FDE\u7EBF\u53EA\u9700\u8981\u4F7F\u7528<code>ctx.moveTo\u548Cctx.lineTo</code>\u5C31\u53EF\u4EE5\u4E86</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function drawLine(startX, startY, endX, endY) {
    ctx.beginPath()
    ctx.moveTo(startX, startY)
    ctx.lineTo(endX, endY)
    ctx.stroke()
    ctx.closePath()
}

// \u661F\u661F\u7684\u79FB\u52A8
setInterval(() =&gt; {
    ctx.clearRect(0, 0, aw, ah)
// \u904D\u5386\u79FB\u52A8\u6E32\u67D3
    stars.forEach(star =&gt; {
        star.move()
        star.draw()
    })
    stars.forEach((star, index) =&gt; {
// \u7C7B\u4F3C\u4E8E\u5192\u6CE1\u6392\u5E8F\u90A3\u6837\uFF0C\u53BB\u6BD4\u8F83\uFF0C\u786E\u4FDD\u6240\u6709\u661F\u661F\u4E24\u4E24\u4E4B\u95F4\u90FD\u6BD4\u8F83\u5230
        for (let i = index + 1; i &lt; stars.length; i++) {
            if (Math.abs(star.x - stars[i].x) &lt; 50 &amp;&amp; Math.abs(star.y - stars[i].y) &lt; 50) {
                drawLine(star.x, star.y, stars[i].x, stars[i].y)
            }
        }
    })
}, 50)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5927\u5BB6\u53EF\u4EE5\u60F3\u4E00\u60F3\uFF0C\u4E3A\u4EC0\u4E48<code>\u4E24\u4E2AforEach</code>\u4E0D\u80FD\u4F55\u5728\u4E00\u8D77\u53BB\u6267\u884C\u3002\u8FD9\u662F\u4E2A\u503C\u5F97\u601D\u8003\u7684\u95EE\u9898\uFF0C\u6216\u8005\u5927\u5BB6\u53EF\u4EE5\u5408\u5E76\u5728\u4E00\u8D77\u6267\u884C\uFF0C\u8BD5\u8BD5\u6548\u679C\uFF0C\u83B7\u53D6\u5C31\u61C2\u4E86\u3002\u7B97\u662F\u7ED9\u5927\u5BB6\u7559\u7684\u4E00\u4E2A\u4F5C\u4E1A\u54C8\uFF01</p><p>\u6548\u679C\u5982\u4E0B\uFF1A</p>`,6),x={href:"https://mmbiz.qpic.cn/mmbiz_gif/TZL4BdZpLdiaBRsZRWSaaB9lb992ic2icpUEXhFLNB4njheUiczJ4oibGpuiaEaQBaEMznQSxUibd2f3JmoaSOBbQCKhA/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1",target:"_blank",rel:"noopener noreferrer"},f=d("https://mmbiz.qpic.cn/mmbiz_gif/TZL4BdZpLdiaBRsZRWSaaB9lb992ic2icpUEXhFLNB4njheUiczJ4oibGpuiaEaQBaEMznQSxUibd2f3JmoaSOBbQCKhA/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1"),g=n(`<p>\u8FDE\u7EBF\u661F\u661F.gif</p><h3 id="_4-\u9F20\u6807\u79FB\u52A8\u65F6\u5E26\u7740\u5C0F\u661F\u661F" tabindex="-1"><a class="header-anchor" href="#_4-\u9F20\u6807\u79FB\u52A8\u65F6\u5E26\u7740\u5C0F\u661F\u661F" aria-hidden="true">#</a> <strong>4.\u9F20\u6807\u79FB\u52A8\u65F6\u5E26\u7740\u5C0F\u661F\u661F</strong></h3><p>\u4E5F\u5C31\u662F\u9F20\u6807\u5230\u54EA\uFF0C\u90A3\u4E2A\u5C0F\u661F\u661F\u5C31\u5230\u54EA\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u5C0F\u661F\u661F\u8D70\u5230\u54EA\u90FD\u4F1A\u8DDF\u8DDD\u79BB\u8FD1\u7684\u5C0F\u661F\u661F<code>\u8FDE\u7EBF</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const mouseStar = new Star(0, 0, 3)

canvas.onmousemove = function (e) {
    mouseStar.x = e.clientX
    mouseStar.y = e.clientY
}

// \u661F\u661F\u7684\u79FB\u52A8
setInterval(() =&gt; {
    ctx.clearRect(0, 0, aw, ah)
// \u9F20\u6807\u661F\u661F\u6E32\u67D3
    mouseStar.draw()
// \u904D\u5386\u79FB\u52A8\u6E32\u67D3
    stars.forEach(star =&gt; {
        star.move()
        star.draw()
    })
    stars.forEach((star, index) =&gt; {
// \u7C7B\u4F3C\u4E8E\u5192\u6CE1\u6392\u5E8F\u90A3\u6837\uFF0C\u53BB\u6BD4\u8F83\uFF0C\u786E\u4FDD\u6240\u6709\u661F\u661F\u4E24\u4E24\u4E4B\u95F4\u90FD\u6BD4\u8F83\u5230
        for (let i = index + 1; i &lt; stars.length; i++) {
            if (Math.abs(star.x - stars[i].x) &lt; 50 &amp;&amp; Math.abs(star.y - stars[i].y) &lt; 50) {
                drawLine(star.x, star.y, stars[i].x, stars[i].y)
            }
        }
// \u5224\u65AD\u9F20\u6807\u661F\u661F\u8FDE\u7EBF
        if (Math.abs(mouseStar.x - star.x) &lt; 50 &amp;&amp; Math.abs(mouseStar.y - star.y) &lt; 50) {
            drawLine(mouseStar.x, mouseStar.y, star.x, star.y)
        }
    })
}, 50)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6548\u679C\u5982\u4E0B\uFF1A</p>`,5),w={href:"https://mmbiz.qpic.cn/mmbiz_gif/TZL4BdZpLdiaBRsZRWSaaB9lb992ic2icpUIsQUowa3EoAs2lGAHB7J6t73tZSj8BEzy7DXphicN6TSwqOhUibnPEBQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1",target:"_blank",rel:"noopener noreferrer"},_=d("https://mmbiz.qpic.cn/mmbiz_gif/TZL4BdZpLdiaBRsZRWSaaB9lb992ic2icpUIsQUowa3EoAs2lGAHB7J6t73tZSj8BEzy7DXphicN6TSwqOhUibnPEBQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1"),y=n(`<p>\u9F20\u6807\u661F\u661F.gif</p><h3 id="_5-\u9F20\u6807\u70B9\u51FB\u751F\u6210\u4E94\u4E2A\u5C0F\u661F\u661F" tabindex="-1"><a class="header-anchor" href="#_5-\u9F20\u6807\u70B9\u51FB\u751F\u6210\u4E94\u4E2A\u5C0F\u661F\u661F" aria-hidden="true">#</a> <strong>5. \u9F20\u6807\u70B9\u51FB\u751F\u6210\u4E94\u4E2A\u5C0F\u661F\u661F</strong></h3><p>\u601D\u8DEF\u5C31\u662F\uFF0C\u9F20\u6807\u70B9\u51FB\uFF0C\u751F\u62105\u4E2A\u5C0F\u661F\u661F\uFF0C\u5E76\u52A0\u5230<code>\u6570\u7EC4stars</code>\u4E2D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>window.onclick = function (e) {
    for (let i = 0; i &lt; 5; i++) {
        stars.push(new Star(e.clientX, e.clientY, 3))
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6548\u679C\u5982\u4E0B\uFF1A</p>`,5),B={href:"https://mmbiz.qpic.cn/mmbiz_gif/TZL4BdZpLdiaBRsZRWSaaB9lb992ic2icpU6N1ia4EibtkcoftHImWmkBRMX5Bl0GO7RkSmuomfT8cYrMORWKrkHBWA/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1",target:"_blank",rel:"noopener noreferrer"},S=d("https://mmbiz.qpic.cn/mmbiz_gif/TZL4BdZpLdiaBRsZRWSaaB9lb992ic2icpU6N1ia4EibtkcoftHImWmkBRMX5Bl0GO7RkSmuomfT8cYrMORWKrkHBWA/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1"),M=n(`<p>\u70B9\u51FB\u751F\u6210\u661F\u661F.gif</p><h3 id="_6-\u5168\u90E8\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_6-\u5168\u90E8\u4EE3\u7801" aria-hidden="true">#</a> <strong>6. \u5168\u90E8\u4EE3\u7801</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const canvas = document.getElementById(&#39;canvas&#39;)

const ctx = canvas.getContext(&#39;2d&#39;)

// \u83B7\u53D6\u5F53\u524D\u89C6\u56FE\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6
let aw = document.documentElement.clientWidth || document.body.clientWidth
let ah = document.documentElement.clientHeight || document.body.clientHeight
// \u8D4B\u503C\u7ED9canvas
canvas.width = aw
canvas.height = ah

// \u5C4F\u5E55\u53D8\u52A8\u65F6\u4E5F\u8981\u76D1\u542C\u5B9E\u65F6\u5BBD\u9AD8
window.onresize = function () {
    aw = document.documentElement.clientWidth || document.body.clientWidth
    ah = document.documentElement.clientHeight || document.body.clientHeight
// \u8D4B\u503C\u7ED9canvas
    canvas.width = aw
    canvas.height = ah
}

// \u672C\u6E38\u620F\u65E0\u8BBA\u662F\u5B9E\u5FC3\uFF0C\u8FD8\u662F\u7EBF\u6761\uFF0C\u8272\u8C03\u90FD\u662F\u767D\u8272
ctx.fillStyle = &#39;white&#39;
ctx.strokeStyle = &#39;white&#39;

function Star(x, y, r) {
// x\uFF0Cy\u662F\u5750\u6807\uFF0Cr\u662F\u534A\u5F84
    this.x = x
    this.y = y
    this.r = r
// speed\u53C2\u6570\uFF0C\u5728  -3 ~ 3 \u4E4B\u95F4\u53D6\u503C
    this.speedX = (Math.random() * 3) * Math.pow(-1, Math.round(Math.random()))
    this.speedY = (Math.random() * 3) * Math.pow(-1, Math.round(Math.random()))
}

Star.prototype.draw = function () {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
    ctx.fill()
    ctx.closePath()
}

Star.prototype.move = function () {
    this.x -= this.speedX
    this.y -= this.speedY
// \u78B0\u5230\u8FB9\u754C\u65F6\uFF0C\u53CD\u5F39\uFF0C\u53EA\u9700\u8981\u628Aspeed\u53D6\u53CD\u5C31\u884C
    if (this.x &lt; 0 || this.x &gt; aw) this.speedX *= -1
    if (this.y &lt; 0 || this.y &gt; ah) this.speedY *= -1
}

function drawLine(startX, startY, endX, endY) {
    ctx.beginPath()
    ctx.moveTo(startX, startY)
    ctx.lineTo(endX, endY)
    ctx.stroke()
    ctx.closePath()
}

const stars = []
for (let i = 0; i &lt; 100; i++) {
// \u968F\u673A\u5728canvas\u8303\u56F4\u5185\u627E\u4E00\u4E2A\u5750\u6807\u753B\u661F\u661F
    stars.push(new Star(Math.random() * aw, Math.random() * ah, 3))
}

const mouseStar = new Star(0, 0, 3)

canvas.onmousemove = function (e) {
    mouseStar.x = e.clientX
    mouseStar.y = e.clientY
}
window.onclick = function (e) {
    for (let i = 0; i &lt; 5; i++) {
        stars.push(new Star(e.clientX, e.clientY, 3))
    }
}

// \u661F\u661F\u7684\u79FB\u52A8
setInterval(() =&gt; {
    ctx.clearRect(0, 0, aw, ah)
// \u9F20\u6807\u661F\u661F\u6E32\u67D3
    mouseStar.draw()
// \u904D\u5386\u79FB\u52A8\u6E32\u67D3
    stars.forEach(star =&gt; {
        star.move()
        star.draw()
    })
    stars.forEach((star, index) =&gt; {
// \u7C7B\u4F3C\u4E8E\u5192\u6CE1\u6392\u5E8F\u90A3\u6837\uFF0C\u53BB\u6BD4\u8F83\uFF0C\u786E\u4FDD\u6240\u6709\u661F\u661F\u4E24\u4E24\u4E4B\u95F4\u90FD\u6BD4\u8F83\u5230
        for (let i = index + 1; i &lt; stars.length; i++) {
            if (Math.abs(star.x - stars[i].x) &lt; 50 &amp;&amp; Math.abs(star.y - stars[i].y) &lt; 50) {
                drawLine(star.x, star.y, stars[i].x, stars[i].y)
            }
        }

        if (Math.abs(mouseStar.x - star.x) &lt; 50 &amp;&amp; Math.abs(mouseStar.y - star.y) &lt; 50) {
            drawLine(mouseStar.x, mouseStar.y, star.x, star.y)
        }
    })
}, 50)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function z(E,L){const e=r("ExternalLinkIcon");return l(),t("div",null,[c,i("p",null,[i("a",m,[u,s(e)])]),b,i("p",null,[i("a",o,[h,s(e)])]),p,i("p",null,[i("a",x,[f,s(e)])]),g,i("p",null,[i("a",w,[_,s(e)])]),y,i("p",null,[i("a",B,[S,s(e)])]),M])}var Z=a(v,[["render",z],["__file","\u661F\u661F\u8FDE\u7EBF.html.vue"]]);export{Z as default};
