(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{490:function(e,t,s){"use strict";s.r(t);var n=s(2),a=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"websocket"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#websocket"}},[e._v("#")]),e._v(" WebSocket")]),e._v(" "),t("h2",{attrs:{id:"对-websocket-的理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对-websocket-的理解"}},[e._v("#")]),e._v(" 对 WebSocket 的理解")]),e._v(" "),t("p",[e._v("WebSocket是HTML5提供的一种浏览器与服务器进行"),t("strong",[e._v("全双工通讯")]),e._v("的网络技术，属于应用层协议。它基于TCP传输协议，并复用HTTP的握手通道。浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接， 并进行双向数据传输。")]),e._v(" "),t("p",[e._v("它最大的特点是："),t("strong",[e._v("服务器可以向客户端主动推动消息，客户端也可以主动向服务器推送消息")]),e._v("。")]),e._v(" "),t("p",[t("strong",[e._v("WebSocket原理")]),e._v("：客户端向 WebSocket 服务器通知（notify）一个带有所有接收者ID（recipients IDs）的事件（event），服务器接收后立即通知所有活跃的（active）客户端，只有ID在接收者ID序列中的客户端才会处理这个事件。")]),e._v(" "),t("h3",{attrs:{id:"websocket-特点的如下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#websocket-特点的如下"}},[e._v("#")]),e._v(" WebSocket 特点的如下：")]),e._v(" "),t("ul",[t("li",[e._v("支持双向通信，实时性更强")]),e._v(" "),t("li",[e._v("可以发送文本，也可以发送二进制数据‘’")]),e._v(" "),t("li",[e._v("建立在TCP协议之上，服务端的实现比较容易")]),e._v(" "),t("li",[e._v("数据格式比较轻量，性能开销小，通信高效")]),e._v(" "),t("li",[e._v("没有同源限制，客户端可以与任意服务器通信")]),e._v(" "),t("li",[e._v("协议标识符是ws（如果加密，则为wss），服务器网址就是 URL")]),e._v(" "),t("li",[e._v("与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。")])]),e._v(" "),t("h2",{attrs:{id:"websocket使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#websocket使用"}},[e._v("#")]),e._v(" WebSocket使用")]),e._v(" "),t("p",[e._v("前端")]),e._v(" "),t("ol",[t("li",[e._v("open")]),e._v(" "),t("li",[e._v("close")]),e._v(" "),t("li",[e._v("error")]),e._v(" "),t("li",[e._v("message")])]),e._v(" "),t("p",[e._v("后端")]),e._v(" "),t("ol",[t("li",[e._v("open")]),e._v(" "),t("li",[e._v("close")]),e._v(" "),t("li",[e._v("error")]),e._v(" "),t("li",[e._v("message")]),e._v(" "),t("li",[e._v("connection\nws nodejs-websocket")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('  \\\\client.js\n  const ws = new WebSocket("ws:localhost:8000")\n  ws.addEventListener("open", handleOpen)\n  ws.addEventListener("close", handleClose)\n  ws.addEventListener("error", handleError)\n  ws.addEventListener("message", handleMessage)\n  function handleSendClick() {\n    const msg = oMsg.value \n    if(!msg.trim().length) return\n    ws.send(JSON.stringify({\n      username: username,\n      dateTime: new Date().getTime(),\n      msg: msg\n    }))\n    oMsg.value = ""\n  }\n  function handleMessage (e) {\n    const data = e.data\n    data.text().then(function(text) {\n      console.log(text);\n    });\n  }\n')])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('  \\\\server.js\n  const Ws = require("ws");\n  const server = new Ws.Server({ port: 8000 });\n  server.on("open", handleOpen);\n  server.on("close", handleClose);\n  server.on("error", handleError);\n  server.on("connection", handleConnction);\n  function handleConnction(ws) {\n  console.log("server connected");\n  ws.on("message", handleMessage);\n\n  function handleMessage(msg) {\n    console.log("server get message: " + msg);\n    server.clients.forEach((c)=>{\n      c.send(msg)\n    })\n  }\n')])])]),t("h2",{attrs:{id:"如何进行心跳检测和重连"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何进行心跳检测和重连"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://www.jianshu.com/p/02435e77f94c",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何进行心跳检测和重连"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("思路是：")]),e._v(" "),t("ol",[t("li",[e._v("每隔一段指定的时间（计时器），向服务器发送一个数据，服务器收到数据后再发送给客户端，正常情况下客户端通过onmessage事件是能监听到服务器返回的数据的，说明请求正常。")]),e._v(" "),t("li",[e._v("如果再这个指定时间内，客户端没有收到服务器端返回的响应消息，就判定连接断开了，使用websocket.close关闭连接。")]),e._v(" "),t("li",[e._v("这个关闭连接的动作可以通过onclose事件监听到，因此在 onclose 事件内，我们可以调用reconnect事件进行重连操作。")])]),e._v(" "),t("h2",{attrs:{id:"即时通讯的其他实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#即时通讯的其他实现"}},[e._v("#")]),e._v(" 即时通讯的其他实现")]),e._v(" "),t("h3",{attrs:{id:"短轮询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#短轮询"}},[e._v("#")]),e._v(" 短轮询")]),e._v(" "),t("p",[t("strong",[e._v("短轮询的基本思路：")]),e._v(" 浏览器每隔一段时间向浏览器发送 http 请求，服务器端在收到请求后，不论是否有数据更新，都直接进行响应。这种方式实现的即时通信，本质上还是浏览器发送请求，服务器接受请求的一个过程，通过让客户端不断的进行请求，使得客户端能够模拟实时地收到服务器端的数据的变化。这种方式的优点是比较简单，易于理解。缺点是这种方式由于需要不断的建立 http 连接，严重浪费了服务器端和客户端的资源。当用户增加时，服务器端的压力就会变大，这是很不合理的。")]),e._v(" "),t("h3",{attrs:{id:"长轮询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#长轮询"}},[e._v("#")]),e._v(" 长轮询")]),e._v(" "),t("p",[t("strong",[e._v("长轮询的基本思路：")]),e._v(" 首先由客户端向服务器发起请求，当服务器收到客户端发来的请求后，服务器端不会直接进行响应，而是先将这个请求挂起，然后判断服务器端数据是否有更新。如果有更新，则进行响应，如果一直没有数据，则到达一定的时间限制才返回。客户端 JavaScript 响应处理函数会在处理完服务器返回的信息后，再次发出请求，重新建立连接。长轮询和短轮询比起来，它的优点是明显减少了很多不必要的 http 请求次数，相比之下节约了资源。长轮询的缺点在于，连接挂起也会导致资源的浪费。")]),e._v(" "),t("h3",{attrs:{id:"服务器推送事件-sse"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务器推送事件-sse"}},[e._v("#")]),e._v(" 服务器推送事件（SSE）")]),e._v(" "),t("p",[t("strong",[e._v("SSE 的基本思想：")]),e._v(" 服务器推送事件(Sever-Sent Event)服务器使用流信息向服务器推送信息。严格地说，http 协议无法做到服务器主动推送信息。但是，有一种变通方法，就是服务器向客户端声明，接下来要发送的是流信息。也就是说，发送的不是一次性的数据包，而是一个数据流，会连续不断地发送过来。这时，客户端不会关闭连接，会一直等着服务器发过来的新的数据流，视频播放就是这样的例子。SSE 就是利用这种机制，使用流信息向浏览器推送信息。它相对于前面两种方式来说，不需要建立过多的 http 请求，相比之下节约了资源。")]),e._v(" "),t("p",[t("strong",[e._v("缺点：")])]),e._v(" "),t("ul",[t("li",[e._v("单向通道，只能服务器向浏览器发送，因为流信息本质上就是下载。")]),e._v(" "),t("li",[e._v("一般只用来传送文本，二进制数据需要编码后传送。")])]),e._v(" "),t("p",[t("strong",[e._v("http长连接 keep-alive")]),e._v("\nkeep-alive机制：若开启后，在一次http请求中，服务器进行响应后，不再直接断开TCP连接，而是将TCP连接维持一段时间。在这段时间内，如果同一客户端再次向服务端发起http请求，便可以复用此TCP连接，向服务端发起请求，并重置timeout时间计数器，在接下来一段时间内还可以继续复用。这样无疑省略了反复创建和销毁TCP连接的损耗。")])])}),[],!1,null,null,null);t.default=a.exports}}]);