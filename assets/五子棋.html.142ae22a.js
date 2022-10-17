import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{o as c,c as v,a as i,d as l,b as n,e as s,r as a}from"./app.da104442.js";const r={},t=i("h1",{id:"\u4E94\u5B50\u68CB",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#\u4E94\u5B50\u68CB","aria-hidden":"true"},"#"),n(" \u4E94\u5B50\u68CB")],-1),m=i("h2",{id:"\u4E94\u5B50\u68CB-1",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#\u4E94\u5B50\u68CB-1","aria-hidden":"true"},"#"),n(),i("strong",null,"\u4E94\u5B50\u68CB")],-1),u=i("p",null,"\u770B\u770B\u5C06\u5B9E\u73B0\u7684\u6548\u679C\uFF1A",-1),b={href:"https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdiaBRsZRWSaaB9lb992ic2icpUyZ7T8UHcRgYdMyPeLCxLGzetnrlGklgyNOJO5INd7uuuZjMTux10wg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},o=n("https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdiaBRsZRWSaaB9lb992ic2icpUyZ7T8UHcRgYdMyPeLCxLGzetnrlGklgyNOJO5INd7uuuZjMTux10wg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),p=s(`<p>\u4E94\u5B50\u68CB\u5206\u4E3A\u4EE5\u4E0B\u6B65\u9AA4\uFF1A</p><ul><li>1\u3001\u753B\u51FA\u68CB\u76D8</li><li>2\u3001\u9ED1\u767D\u68CB\u5207\u6362\u7740\u4E0B\uFF0C<code>\u4E0D\u80FD\u8986\u76D6\u5DF2\u4E0B\u7684\u5751\u4F4D</code></li><li>3\u3001\u5224\u65AD\u662F\u5426<code>\u4E94\u8FDE\u5B50</code>\uFF0C\u662F\u7684\u8BDD\u5C31\u8D62\u4E86</li><li>4\u3001\u5F69\u86CB\uFF1A\u8DDF<code>AI\u4E0B\u68CB</code>\uFF08\u5B9E\u73B0\u5355\u4EBA\u73A9\u6E38\u620F\uFF09</li></ul><h3 id="_1-\u753B\u51FA\u68CB\u76D8" tabindex="-1"><a class="header-anchor" href="#_1-\u753B\u51FA\u68CB\u76D8" aria-hidden="true">#</a> <strong>1. \u753B\u51FA\u68CB\u76D8</strong></h3><p>\u5176\u5B9E\u5F88\u7B80\u5355\uFF0C\u5229\u7528<code>ctx.moveTo\u548Cctx.lineTo</code>\uFF0C\u6A2A\u7740\u753B15\u6761\u7EBF\uFF0C\u7AD6\u7740\u753B15\u6761\u7EBF\uFF0C\u5C31OK\u4E86\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// html
#canvas {
            background: #e3cdb0;
        }
&lt;canvas id=&quot;canvas&quot; width=&quot;600&quot; height=&quot;600&quot;&gt;&lt;/canvas&gt;

// js
play()

function play() {
    const canvas = document.getElementById(&#39;canvas&#39;)

    const ctx = canvas.getContext(&#39;2d&#39;)

    // \u7ED8\u5236\u68CB\u76D8

    // \u6C34\u5E73\uFF0C\u603B\u517115\u6761\u7EBF
    for (let i = 0; i &lt; 15; i++) {
        ctx.beginPath()
        ctx.moveTo(20, 20 + i * 40)
        ctx.lineTo(580, 20 + i * 40)
        ctx.stroke()
        ctx.closePath()
    }

    // \u5782\u76F4\uFF0C\u603B\u517115\u6761\u7EBF
    for (let i = 0; i &lt; 15; i++) {
        ctx.beginPath()
        ctx.moveTo(20 + i * 40, 20)
        ctx.lineTo(20 + i * 40, 580)
        ctx.stroke()
        ctx.closePath()
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u5C31\u753B\u51FA\u4E86\u68CB\u76D8\uFF1A</p>`,6),h={href:"https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdiaBRsZRWSaaB9lb992ic2icpUOy9NGNkFauooBzYXx88BSyw0qHWJkGYiaoFhUbicPH2AmpJBPpXxW2NQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},x=n("https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdiaBRsZRWSaaB9lb992ic2icpUOy9NGNkFauooBzYXx88BSyw0qHWJkGYiaoFhUbicPH2AmpJBPpXxW2NQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),f=s('<p>\u622A\u5C4F2021-07-25 \u4E0B\u534812.25.09.png</p><h3 id="_2-\u9ED1\u767D\u68CB\u5207\u6362\u7740\u4E0B" tabindex="-1"><a class="header-anchor" href="#_2-\u9ED1\u767D\u68CB\u5207\u6362\u7740\u4E0B" aria-hidden="true">#</a> <strong>2. \u9ED1\u767D\u68CB\u5207\u6362\u7740\u4E0B</strong></h3><ul><li>1\u3001\u9F20\u6807\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u83B7\u53D6\u5750\u6807\uFF0C\u5C06\u68CB\u753B\u51FA\u6765\uFF08<code>ctx.arc</code>\uFF09</li><li>2\u3001\u786E\u4FDD\u5DF2\u4E0B\u7684\u68CB\u4F4D\u4E0D\u80FD\u91CD\u590D\u4E0B</li></ul><p>\u7B2C\u4E00\u6B65\uFF0C\u83B7\u53D6\u9F20\u6807\u5750\u6807\uFF0C\u4F46\u662F\u6211\u4EEC\u8981\u6CE8\u610F\u4E00\u4EF6\u4E8B\uFF0C\u68CB\u5B50\u53EA\u80FD\u4E0B\u5728\u7EBF\u7684<code>\u4EA4\u53C9\u5904</code>\uFF0C\u6240\u4EE5\u62FF\u5230\u9F20\u6807\u5750\u6807\u540E\uFF0C\u8981\u505A\u4E00\u4E0B\u5904\u7406\uFF0C\u56DB\u820D\u4E94\u5165\uFF0C\u4EE5<code>\u6700\u8FD1</code>\u7684\u4E00\u4E2A<code>\u7EBF\u4EA4\u53C9\u70B9</code>\u4E3A\u5706\u7684<code>\u5706\u5FC3</code></p><p>\u7B2C\u4E8C\u6B65\uFF0C\u5982\u4F55\u786E\u4FDD\u68CB\u4F4D\u4E0D\u91CD\u590D\u4E0B\u5462\uFF1F\u54B1\u4EEC\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A<code>\u4E8C\u7EF4\u6570\u7EC4</code>\u6765\u8BB0\u5F55\uFF0C\u521D\u59CB\u662F0\uFF0C\u4E0B\u8FC7\u9ED1\u68CB\u5C31\u53D8\u4E3A1\uFF0C\u4E0B\u8FC7\u767D\u68CB\u5C31\u53D8\u4E3A2\uFF0C\u4F46\u662F\u8FD9\u91CC\u8981\u6CE8\u610F\u4E00\u70B9\uFF0C<code>\u6570\u7EC4\u7D22\u5F15\u7684x\uFF0Cy\u8DDF\u753B\u5E03\u5750\u6807\u7684x\uFF0Cy\u662F\u76F8\u53CD\u7684</code>\uFF0C\u6240\u4EE5\u540E\u9762\u4EE3\u7801\u91CC\u5750\u6807\u53CD\u8FC7\u6765\uFF0C\u5E0C\u671B\u5927\u5BB6\u80FD\u601D\u8003\u4E00\u4E0B\u4E3A\u5565\u3002</p>',5),g={href:"https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdiaBRsZRWSaaB9lb992ic2icpUGycaFfcdCCcMq7Tq5NRMIFaVCB50fAtZwrtLmV4zeTWClLtUcGpCvg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},_=n("https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdiaBRsZRWSaaB9lb992ic2icpUGycaFfcdCCcMq7Tq5NRMIFaVCB50fAtZwrtLmV4zeTWClLtUcGpCvg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),k=s(`<p>\u622A\u5C4F2021-07-25 \u4E0B\u534812.33.29.png</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u662F\u5426\u4E0B\u9ED1\u68CB
// \u9ED1\u68CB\u5148\u8D70
    let isBlack = true

// \u68CB\u76D8\u4E8C\u7EF4\u6570\u7EC4
    let cheeks = []

    for (let i = 0; i &lt; 15; i++) {
        cheeks[i] = new Array(15).fill(0)
    }

    canvas.onclick = function (e) {
        const clientX = e.clientX
        const clientY = e.clientY
// \u5BF940\u8FDB\u884C\u53D6\u6574\uFF0C\u786E\u4FDD\u68CB\u5B50\u843D\u5728\u4EA4\u53C9\u5904
        const x = Math.round((clientX - 20) / 40) * 40 + 20
        const y = Math.round((clientY - 20) / 40) * 40 + 20
// cheeks\u4E8C\u7EF4\u6570\u7EC4\u7684\u7D22\u5F15
// \u8FD9\u4E48\u5199\u6709\u70B9\u5197\u4F59\uFF0C\u8FD9\u4E48\u5199\u4F60\u4EEC\u597D\u7406\u89E3\u4E00\u70B9
        const cheeksX = (x - 20) / 40
        const cheeksY = (y - 20) / 40
// \u5BF9\u5E94\u5143\u7D20\u4E0D\u4E3A0\u8BF4\u660E\u6B64\u5730\u65B9\u5DF2\u6709\u68CB\uFF0C\u8FD4\u56DE
        if (cheeks[cheeksY][cheeksX]) return
// \u9ED1\u68CB\u4E3A1\uFF0C\u767D\u68CB\u4E3A2
        cheeks[cheeksY][cheeksX] = isBlack ? 1 : 2
        ctx.beginPath()
// \u753B\u5706
        ctx.arc(x, y, 20, 0, 2 * Math.PI)
// \u5224\u65AD\u8D70\u9ED1\u8FD8\u662F\u767D
        ctx.fillStyle = isBlack ? &#39;black&#39; : &#39;white&#39;
        ctx.fill()
        ctx.closePath()
// \u5207\u6362\u9ED1\u767D
        isBlack = !isBlack
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),w={href:"https://mmbiz.qpic.cn/mmbiz_gif/TZL4BdZpLdiaBRsZRWSaaB9lb992ic2icpUZH9VCg1DBmgIic7iaLwdojp2qAesxMW8gj98XFWKyrEAiaolRWZKAeicjw/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1",target:"_blank",rel:"noopener noreferrer"},y=n("https://mmbiz.qpic.cn/mmbiz_gif/TZL4BdZpLdiaBRsZRWSaaB9lb992ic2icpUZH9VCg1DBmgIic7iaLwdojp2qAesxMW8gj98XFWKyrEAiaolRWZKAeicjw/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1"),B=i("p",null,"\u6548\u679C\u5982\u4E0B\uFF1A",-1),X=i("h3",{id:"_3-\u5224\u65AD\u662F\u5426\u4E94\u8FDE\u5B50",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#_3-\u5224\u65AD\u662F\u5426\u4E94\u8FDE\u5B50","aria-hidden":"true"},"#"),n(),i("strong",null,"3. \u5224\u65AD\u662F\u5426\u4E94\u8FDE\u5B50")],-1),Y=i("p",null,[n("\u5982\u4F55\u5224\u65AD\u5462\uFF1F\u6709\u56DB\u79CD\u60C5\u51B5\uFF1A"),i("code",null,"\u4E0A\u4E0B\u4E94\u8FDE\u5B50\uFF0C\u5DE6\u53F3\u5434\u8FDE\u5B50\uFF0C\u5DE6\u4E0A\u53F3\u4E0B\u4E94\u8FDE\u5B50\uFF0C\u53F3\u4E0A\u5DE6\u4E0B\u4E94\u8FDE\u5B50"),n("\uFF0C\u53EA\u8981\u54B1\u4EEC\u6BCF\u6B21\u843D\u5B50\u7684\u65F6\u5019\u5168\u90E8\u5224\u65AD\u4E00\u6B21\u5C31\u597D\u4E86\u3002")],-1),Z={href:"https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdiaBRsZRWSaaB9lb992ic2icpUAAc9CeTxs0Ribuwd0Xa3UpWEyD1ibgJBq6v7DxPXubvhy8TqhrtVV3SA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",target:"_blank",rel:"noopener noreferrer"},z=n("https://mmbiz.qpic.cn/mmbiz_png/TZL4BdZpLdiaBRsZRWSaaB9lb992ic2icpUAAc9CeTxs0Ribuwd0Xa3UpWEyD1ibgJBq6v7DxPXubvhy8TqhrtVV3SA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"),T=s(`<p>\u622A\u5C4F2021-07-25 \u4E0B\u534812.55.53.png</p><p>\u987A\u4FBF\u9644\u4E0A\u6240\u6709\u4EE3\u7801</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>play()

function play() {
    const canvas = document.getElementById(&#39;canvas&#39;)

    const ctx = canvas.getContext(&#39;2d&#39;)

// \u7ED8\u5236\u68CB\u76D8

// \u6C34\u5E73\uFF0C\u603B\u517115\u6761\u7EBF
    for (let i = 0; i &lt; 15; i++) {
        ctx.beginPath()
        ctx.moveTo(20, 20 + i * 40)
        ctx.lineTo(580, 20 + i * 40)
        ctx.stroke()
        ctx.closePath()
    }

// \u5782\u76F4\uFF0C\u603B\u517115\u6761\u7EBF
    for (let i = 0; i &lt; 15; i++) {
        ctx.beginPath()
        ctx.moveTo(20 + i * 40, 20)
        ctx.lineTo(20 + i * 40, 580)
        ctx.stroke()
        ctx.closePath()
    }

// \u662F\u5426\u4E0B\u9ED1\u68CB
// \u9ED1\u68CB\u5148\u8D70
    let isBlack = true

// \u68CB\u76D8\u4E8C\u7EF4\u6570\u7EC4
    let cheeks = []

    for (let i = 0; i &lt; 15; i++) {
        cheeks[i] = new Array(15).fill(0)
    }

    canvas.onclick = function (e) {
        const clientX = e.clientX
        const clientY = e.clientY
// \u5BF940\u8FDB\u884C\u53D6\u6574\uFF0C\u786E\u4FDD\u68CB\u5B50\u843D\u5728\u4EA4\u53C9\u5904
        const x = Math.round((clientX - 20) / 40) * 40 + 20
        const y = Math.round((clientY - 20) / 40) * 40 + 20
// cheeks\u4E8C\u7EF4\u6570\u7EC4\u7684\u7D22\u5F15
// \u8FD9\u4E48\u5199\u6709\u70B9\u5197\u4F59\uFF0C\u8FD9\u4E48\u5199\u4F60\u4EEC\u597D\u7406\u89E3\u4E00\u70B9
        const cheeksX = (x - 20) / 40
        const cheeksY = (y - 20) / 40
// \u5BF9\u5E94\u5143\u7D20\u4E0D\u4E3A0\u8BF4\u660E\u6B64\u5730\u65B9\u5DF2\u6709\u68CB\uFF0C\u8FD4\u56DE
        if (cheeks[cheeksY][cheeksX]) return
// \u9ED1\u68CB\u4E3A1\uFF0C\u767D\u68CB\u4E3A2
        cheeks[cheeksY][cheeksX] = isBlack ? 1 : 2
        ctx.beginPath()
// \u753B\u5706
        ctx.arc(x, y, 20, 0, 2 * Math.PI)
// \u5224\u65AD\u8D70\u9ED1\u8FD8\u662F\u767D
        ctx.fillStyle = isBlack ? &#39;black&#39; : &#39;white&#39;
        ctx.fill()
        ctx.closePath()

// canvas\u753B\u56FE\u662F\u5F02\u6B65\u7684\uFF0C\u4FDD\u8BC1\u753B\u51FA\u6765\u518D\u53BB\u68C0\u6D4B\u8F93\u8D62
        setTimeout(() =&gt; {
            if (isWin(cheeksX, cheeksY)) {
                const con = confirm(\`\${isBlack ? &#39;\u9ED1\u68CB&#39; : &#39;\u767D\u68CB&#39;}\u8D62\u4E86\uFF01\u662F\u5426\u91CD\u65B0\u5F00\u5C40\uFF1F\`)
// \u91CD\u65B0\u5F00\u5C40
                ctx.clearRect(0, 0, 600, 600)
                con &amp;&amp; play()
            }
// \u5207\u6362\u9ED1\u767D
            isBlack = !isBlack
        }, 0)
    }
// \u5224\u65AD\u662F\u5426\u4E94\u8FDE\u5B50
    function isWin(x, y) {
        const flag = isBlack ? 1 : 2
// \u4E0A\u548C\u4E0B
        if (up_down(x, y, flag)) {
            return true
        }

// \u5DE6\u548C\u53F3
        if (left_right(x, y, flag)) {
            return true
        }
// \u5DE6\u4E0A\u548C\u53F3\u4E0B
        if (lu_rd(x, y, flag)) {
            return true
        }

// \u53F3\u4E0A\u548C\u5DE6\u4E0B
        if (ru_ld(x, y, flag)) {
            return true
        }

        return false
    }

    function up_down(x, y, flag) {
        let num = 1
// \u5411\u4E0A\u627E
        for (let i = 1; i &lt; 5; i++) {
            let tempY = y - i
            console.log(x, tempY)
            if (tempY &lt; 0 || cheeks[tempY][x] !== flag) break
            if (cheeks[tempY][x] === flag) num += 1
        }
// \u5411\u4E0B\u627E
        for (let i = 1; i &lt; 5; i++) {
            let tempY = y + i
            console.log(x, tempY)
            if (tempY &gt; 14 || cheeks[tempY][x] !== flag) break
            if (cheeks[tempY][x] === flag) num += 1
        }
        return num &gt;= 5
    }

    function left_right(x, y, flag) {
        let num = 1
// \u5411\u5DE6\u627E
        for (let i = 1; i &lt; 5; i++) {
            let tempX = x - i
            if (tempX &lt; 0 || cheeks[y][tempX] !== flag) break
            if (cheeks[y][tempX] === flag) num += 1
        }
// \u5411\u53F3\u627E
        for (let i = 1; i &lt; 5; i++) {
            let tempX = x + i
            if (tempX &gt; 14 || cheeks[y][tempX] !== flag) break
            if (cheeks[y][tempX] === flag) num += 1
        }
        return num &gt;= 5

    }

    function lu_rd(x, y, flag) {
        let num = 1
// \u5411\u5DE6\u4E0A\u627E
        for (let i = 1; i &lt; 5; i++) {
            let tempX = x - i
            let tempY = y - i
            if (tempX &lt; 0 || tempY &lt; 0 || cheeks[tempY][tempX] !== flag) break
            if (cheeks[tempY][tempX] === flag) num += 1
        }
// \u5411\u53F3\u4E0B\u627E
        for (let i = 1; i &lt; 5; i++) {
            let tempX = x + i
            let tempY = y + i
            if (tempX &gt; 14 || tempY &gt; 14 || cheeks[tempY][tempX] !== flag) break
            if (cheeks[tempY][tempX] === flag) num += 1
        }

        return num &gt;= 5
    }

    function ru_ld(x, y, flag) {
        let num = 1
// \u5411\u53F3\u4E0A\u627E
        for (let i = 1; i &lt; 5; i++) {
            let tempX = x - i
            let tempY = y + i
            if (tempX &lt; 0 || tempY &gt; 14 || cheeks[tempY][tempX] !== flag) break
            if (cheeks[tempY][tempX] === flag) num += 1
        }
// \u5411\u5DE6\u4E0B\u627E
        for (let i = 1; i &lt; 5; i++) {
            let tempX = x + i
            let tempY = y - i
            if (tempX &gt; 14 || tempY &lt; 0 || cheeks[tempY][tempX] !== flag) break
            if (cheeks[tempY][tempX] === flag) num += 1
        }

        return num &gt;= 5
    }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-\u5F69\u86CB-\u4E0Eai\u4E0B\u68CB" tabindex="-1"><a class="header-anchor" href="#_4-\u5F69\u86CB-\u4E0Eai\u4E0B\u68CB" aria-hidden="true">#</a> <strong>4. \u5F69\u86CB\uFF1A\u4E0EAI\u4E0B\u68CB</strong></h3><p>\u5176\u5B9E\u5F88\u7B80\u5355\uFF0C\u6BCF\u6B21\u4E0B\u5B8C\u68CB\uFF0C\u8BBE\u7F6E\u4E00\u4E2A\u51FD\u6570\uFF1A\u968F\u673A\u627E\u4F4D\u7F6E\u4E0B\u68CB\u3002\u8FD9\u6837\u5C31\u5B9E\u73B0\u4E86\u548C\u7535\u8111\u4E0B\u68CB\uFF0C\u5355\u4EBA\u6E38\u620F\u7684\u529F\u80FD\u4E86\u3002</p>`,5);function L(R,q){const e=a("ExternalLinkIcon");return c(),v("div",null,[t,m,u,i("p",null,[i("a",b,[o,l(e)])]),p,i("p",null,[i("a",h,[x,l(e)])]),f,i("p",null,[i("a",g,[_,l(e)])]),k,i("p",null,[i("a",w,[y,l(e)])]),B,X,Y,i("p",null,[i("a",Z,[z,l(e)])]),T])}var A=d(r,[["render",L],["__file","\u4E94\u5B50\u68CB.html.vue"]]);export{A as default};
