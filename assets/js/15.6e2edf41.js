(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{440:function(e,t,s){e.exports=s.p+"assets/img/chrome.cd083523.jpg"},441:function(e,t,s){e.exports=s.p+"assets/img/browser.eaa2c7f1.jpg"},442:function(e,t,s){e.exports=s.p+"assets/img/nginx.212ab80e.jpg"},487:function(e,t,s){"use strict";s.r(t);var r=s(2),a=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"浏览器知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器知识"}},[e._v("#")]),e._v(" 浏览器知识")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6916157109906341902",target:"_blank",rel:"noopener noreferrer"}},[e._v("浏览器原理篇"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6981588276356317214",target:"_blank",rel:"noopener noreferrer"}},[e._v("垃圾回收机制"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6947841638118998029",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何排查内存泄漏导致的页面卡顿现象"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"进程与线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程与线程"}},[e._v("#")]),e._v(" 进程与线程")]),e._v(" "),t("p",[t("strong",[e._v("进程是资源分配的最小单位，线程是CPU调度的最小单位")])]),e._v(" "),t("p",[e._v("Chrome浏览器的架构图：\n"),t("img",{attrs:{src:s(440),alt:""}})]),e._v(" "),t("ul",[t("li",[e._v("浏览器进程：主要负责界面显示、用户交互、子进程管理，同时提供存储等功能。")]),e._v(" "),t("li",[e._v("渲染进程：核心任务是将 HTML、CSS 和 JavaScript 转换为用户可以与之交互的网页，排版引擎 Blink 和 JavaScript 引擎 V8 都是运行在该进程中，默认情况下，Chrome 会为每个 Tab 标签创建一个渲染进程。出于安全考虑，渲染进程都是运行在沙箱模式下。")]),e._v(" "),t("li",[e._v("GPU 进程：其实， GPU 的使用初衷是为了实现 3D CSS 的效果，只是随后网页、Chrome 的 UI 界面都选择采用 GPU 来绘制，这使得 GPU 成为浏览器普遍的需求。最后，Chrome 在其多进程架构上也引入了 GPU 进程。")]),e._v(" "),t("li",[e._v("网络进程：主要负责页面的网络资源加载，之前是作为一个模块运行在浏览器进程里面的，直至最近才独立出来，成为一个单独的进程。")]),e._v(" "),t("li",[e._v("插件进程：主要是负责插件的运行，因插件易崩溃，所以需要通过插件进程来隔离，以保证插件进程崩溃不会对浏览器和页面造成影响。")])]),e._v(" "),t("h3",{attrs:{id:"进程和线程的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程和线程的区别"}},[e._v("#")]),e._v(" 进程和线程的区别")]),e._v(" "),t("ul",[t("li",[e._v("进程可以看做独立应用，线程不能")]),e._v(" "),t("li",[e._v("资源：进程是cpu资源分配的最小单位（是能拥有资源和独立运行的最小单位）；线程是cpu调度的最小单位（线程是建立在进程的基础上的一次程序运行单位，一个进程中可以有多个线程）。")]),e._v(" "),t("li",[e._v("通信方面：线程间可以通过直接共享同一进程中的资源，而进程通信需要借助 进程间通信。")]),e._v(" "),t("li",[e._v("调度：进程切换比线程切换的开销要大。线程是CPU调度的基本单位，线程的切换不会引起进程切换，但某个进程中的线程切换到另一个进程中的线程时，会引起进程切换。")]),e._v(" "),t("li",[e._v("系统开销：由于创建或撤销进程时，系统都要为之分配或回收资源，如内存、I/O 等，其开销远大于创建或撤销线程时的开销。同理，在进行进程切换时，涉及当前执行进程 CPU 环境还有各种各样状态的保存及新调度进程状态的设置，而线程切换时只需保存和设置少量寄存器内容，开销较小。")])]),e._v(" "),t("h3",{attrs:{id:"浏览器渲染进程的线程有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染进程的线程有哪些"}},[e._v("#")]),e._v(" 浏览器渲染进程的线程有哪些")]),e._v(" "),t("p",[e._v("浏览器的渲染进程的线程总共有五种：\n"),t("img",{attrs:{src:s(441),alt:""}})]),e._v(" "),t("p",[t("strong",[e._v("（1）GUI渲染线程")]),e._v("\n负责渲染浏览器页面，解析HTML、CSS，构建DOM树、构建CSSOM树、构建渲染树和绘制页面；当界面需要重绘或由于某种操作引发回流时，该线程就会执行。")]),e._v(" "),t("blockquote",[t("p",[e._v("注意：GUI渲染线程和JS引擎线程是互斥的，当JS引擎执行时GUI线程会被挂起，GUI更新会被保存在一个队列中等到JS引擎空闲时立即被执行。")])]),e._v(" "),t("p",[t("strong",[e._v("（2）JS引擎线程")]),e._v("\nJS引擎线程也称为JS内核，负责处理Javascript脚本程序，解析Javascript脚本，运行代码；JS引擎线程一直等待着任务队列中任务的到来，然后加以处理，一个Tab页中无论什么时候都只有一个JS引擎线程在运行JS程序；")]),e._v(" "),t("blockquote",[t("p",[e._v("注意：GUI渲染线程与JS引擎线程的互斥关系，所以如果JS执行的时间过长，会造成页面的渲染不连贯，导致页面渲染加载阻塞。")])]),e._v(" "),t("p",[t("strong",[e._v("（3）事件触发线程")]),e._v("\n时间触发线程属于浏览器而不是JS引擎，用来控制事件循环；当JS引擎执行代码块如setTimeOut时（也可是来自浏览器内核的其他线程,如鼠标点击、AJAX异步请求等），会将对应任务添加到事件触发线程中；当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理队列的队尾，等待JS引擎的处理；")]),e._v(" "),t("blockquote",[t("p",[e._v("注意：由于JS的单线程关系，所以这些待处理队列中的事件都得排队等待JS引擎处理（当JS引擎空闲时才会去执行）；")])]),e._v(" "),t("p",[t("strong",[e._v("（4）定时器触发进程")]),e._v("\n定时器触发进程即setInterval与setTimeout所在线程；浏览器定时计数器并不是由JS引擎计数的，因为JS引擎是单线程的，如果处于阻塞线程状态就会影响记计时的准确性；因此使用单独线程来计时并触发定时器，计时完毕后，添加到事件队列中，等待JS引擎空闲后执行，所以定时器中的任务在设定的时间点不一定能够准时执行，定时器只是在指定时间点将任务添加到事件队列中；")]),e._v(" "),t("blockquote",[t("p",[e._v("注意：W3C在HTML标准中规定，定时器的定时时间不能小于4ms，如果是小于4ms，则默认为4ms。")])]),e._v(" "),t("p",[t("strong",[e._v("（5）异步http请求线程")])]),e._v(" "),t("ul",[t("li",[e._v("XMLHttpRequest连接后通过浏览器新开一个线程请求；")]),e._v(" "),t("li",[e._v("检测到状态变更时，如果设置有回调函数，异步线程就产生状态变更事件，将回调函数放入事件队列中，等待JS引擎空闲后执行；")])]),e._v(" "),t("h3",{attrs:{id:"如何实现浏览器内多个标签页之间的通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何实现浏览器内多个标签页之间的通信"}},[e._v("#")]),e._v(" 如何实现浏览器内多个标签页之间的通信?")]),e._v(" "),t("p",[e._v("实现多个标签页之间的通信，本质上都是通过中介者模式来实现的。因为标签页之间没有办法直接通信，因此我们可以找一个中介者，让标签页和中介者进行通信，然后让这个中介者来进行消息的转发。通信方法如下：")]),e._v(" "),t("ul",[t("li",[e._v("使用 websocket 协议，因为 websocket 协议可以实现服务器推送，所以服务器就可以用来当做这个中介者。标签页通过向服务器发送数据，然后由服务器向其他标签页推送转发。")]),e._v(" "),t("li",[e._v("使用 ShareWorker 的方式，shareWorker 会在页面存在的生命周期内创建一个唯一的线程，并且开启多个页面也只会使用同一个线程。这个时候共享线程就可以充当中介者的角色。标签页间通过共享一个线程，然后通过这个共享的线程来实现数据的交换。")]),e._v(" "),t("li",[e._v("使用 localStorage 的方式，我们可以在一个标签页对 localStorage 的变化事件进行监听，然后当另一个标签页修改数据的时候，我们就可以通过这个监听事件来获取到数据。这个时候 localStorage 对象就是充当的中介者的角色。")]),e._v(" "),t("li",[e._v("使用 postMessage 方法，如果我们能够获得对应标签页的引用，就可以使用postMessage 方法，进行通信。")])]),e._v(" "),t("h3",{attrs:{id:"对service-worker的理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对service-worker的理解"}},[e._v("#")]),e._v(" 对Service Worker的理解")]),e._v(" "),t("p",[e._v("Service Worker 是运行在浏览器背后的"),t("strong",[e._v("独立线程")]),e._v("，一般可以用来实现缓存功能。使用 Service Worker的话，传输协议必须为 HTTPS。因为 Service Worker 中涉及到请求拦截，所以必须使用 HTTPS 协议来保障安全。")]),e._v(" "),t("p",[e._v("Service Worker 实现缓存功能一般分为三个步骤：首先需要先注册 Service Worker，然后监听到 install 事件以后就可以缓存需要的文件，那么在下次用户访问的时候就可以通过拦截请求的方式查询是否存在缓存，存在缓存的话就可以直接读取缓存文件，否则就去请求数据。以下是这个步骤的实现：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// index.js\nif (navigator.serviceWorker) {\n  navigator.serviceWorker\n    .register('sw.js')\n    .then(function(registration) {\n      console.log('service worker 注册成功')\n    })\n    .catch(function(err) {\n      console.log('servcie worker 注册失败')\n    })\n}\n// sw.js\n// 监听 `install` 事件，回调中缓存所需文件\nself.addEventListener('install', e => {\n  e.waitUntil(\n    caches.open('my-cache').then(function(cache) {\n      return cache.addAll(['./index.html', './index.js'])\n    })\n  )\n})\n// 拦截所有请求事件\n// 如果缓存中已经有请求的数据就直接用缓存，否则去请求数据\nself.addEventListener('fetch', e => {\n  e.respondWith(\n    caches.match(e.request).then(function(response) {\n      if (response) {\n        return response\n      }\n      console.log('fetch source')\n    })\n  )\n})\n\n")])])]),t("h2",{attrs:{id:"浏览器渲染原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染原理"}},[e._v("#")]),e._v(" 浏览器渲染原理")]),e._v(" "),t("h3",{attrs:{id:"浏览器渲染优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染优化"}},[e._v("#")]),e._v(" 浏览器渲染优化")]),e._v(" "),t("p",[t("strong",[e._v("针对JavaScript：")])]),e._v(" "),t("p",[e._v("JavaScript既会阻塞HTML的解析，也会阻塞CSS的解析。因此我们可以对JavaScript的加载方式进行改变，来进行优化：\n（1）尽量将JavaScript文件放在body的最后\n（2） body中间尽量不要写"),t("code",[e._v("<script>")]),e._v("标签\n（3）"),t("code",[e._v("<script>")]),e._v("标签的引入资源方式有三种，有一种就是我们常用的直接引入，还有两种就是使用 async 属性和 defer 属性来异步引入，两者都是去异步加载外部的JS文件，不会阻塞DOM的解析（尽量使用异步加载）。三者的区别如下：")]),e._v(" "),t("ul",[t("li",[e._v("script 立即停止页面渲染去加载资源文件，当资源加载完毕后立即执行js代码，js代码执行完毕后继续渲染页面；")]),e._v(" "),t("li",[e._v("async 是在下载完成之后，立即异步加载，加载好后立即执行，多个带async属性的标签，不能保证加载的顺序；")]),e._v(" "),t("li",[e._v("defer 是在下载完成之后，立即异步加载。加载好后，如果 DOM 树还没构建好，则先等 DOM 树解析好再执行；如果DOM树已经准备好，则立即执行。多个带defer属性的标签，按照顺序执行。")])]),e._v(" "),t("p",[t("strong",[e._v("针对CSS：")])]),e._v(" "),t("p",[e._v("使用CSS有三种方式：使用link、@import、内联样式，其中link和@import都是导入外部样式。它们之间的区别：")]),e._v(" "),t("ul",[t("li",[e._v("link：浏览器会派发一个新等线程(HTTP线程)去加载资源文件，与此同时GUI渲染线程会继续向下渲染代码")]),e._v(" "),t("li",[e._v("@import：GUI渲染线程会暂时停止渲染，去服务器加载资源文件，资源文件没有返回之前不会继续渲染(阻碍浏览器渲染)")]),e._v(" "),t("li",[e._v("style：GUI直接渲染")])]),e._v(" "),t("p",[e._v("外部样式如果长时间没有加载完毕，浏览器为了用户体验，会使用浏览器会默认样式，确保首次渲染的速度。所以CSS一般写在headr中，让浏览器尽快发送请求去获取css样式。\n所以，在开发过程中，导入外部样式使用link，而不用@import。如果css少，尽可能采用内嵌样式，直接写在style标签中。")]),e._v(" "),t("p",[t("strong",[e._v("针对DOM树、CSSOM树：")])]),e._v(" "),t("p",[e._v("可以通过以下几种方式来减少渲染的时间：")]),e._v(" "),t("ul",[t("li",[e._v("HTML文件的代码层级尽量不要太深")]),e._v(" "),t("li",[e._v("使用语义化的标签，来避免不标准语义化的特殊处理")]),e._v(" "),t("li",[e._v("减少CSSD代码的层级，因为选择器是从右向左进行解析的")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/7207685141324890170",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("减少回流与重绘：")]),t("OutboundLink")],1)]),e._v(" "),t("ul",[t("li",[e._v("操作DOM时，尽量在低层级的DOM节点进行操作")]),e._v(" "),t("li",[e._v("不要使用table布局， 一个小的改动可能会使整个table进行重新布局")]),e._v(" "),t("li",[e._v("少使用CSS的表达式")]),e._v(" "),t("li",[e._v("不要频繁操作元素的样式，对于静态页面，可以修改类名，而不是样式。")]),e._v(" "),t("li",[e._v("使用absolute或者fixed，使元素脱离文档流，这样他们发生变化就不会影响其他元素")]),e._v(" "),t("li",[e._v("避免频繁操作DOM，可以创建一个文档片段documentFragment，在它上面应用所有DOM操作，最后再把它添加到文档中")]),e._v(" "),t("li",[e._v("将元素先设置display: none，操作结束后再把它显示出来。因为在display属性为none的元素上进行的DOM操作不会引发回流和重绘。")]),e._v(" "),t("li",[e._v("将DOM的多个读操作（或者写操作）放在一起，而不是读写操作穿插着写。")])]),e._v(" "),t("p",[e._v("浏览器针对页面的回流与重绘，进行了自身的优化——"),t("strong",[e._v("渲染队列")]),e._v("\n浏览器会将所有的回流、重绘的操作放在一个队列中，当队列中的操作到了一定的数量或者到了一定的时间间隔，浏览器就会对队列进行批处理。这样就会让多次的回流、重绘变成一次回流重绘。")]),e._v(" "),t("h3",{attrs:{id:"渲染过程中遇到-js-文件如何处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#渲染过程中遇到-js-文件如何处理"}},[e._v("#")]),e._v(" 渲染过程中遇到 JS 文件如何处理？")]),e._v(" "),t("p",[e._v("JavaScript 的加载、解析与执行会阻塞文档的解析，也就是说，在构建 DOM 时，HTML 解析器若遇到了 JavaScript，那么它会暂停文档的解析，将控制权移交给 JavaScript 引擎，等 JavaScript 引擎运行完毕，浏览器再从中断的地方恢复继续解析文档。也就是说，如果想要首屏渲染的越快，就越不应该在首屏就加载 JS 文件，这也是都建议将 script 标签放在 body 标签底部的原因。当然在当下，并不是说 script 标签必须放在底部，因为你可以给 script 标签添加 defer 或者 async 属性。")]),e._v(" "),t("h3",{attrs:{id:"css-如何阻塞文档解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-如何阻塞文档解析"}},[e._v("#")]),e._v(" CSS 如何阻塞文档解析？")]),e._v(" "),t("p",[e._v("理论上，既然样式表不改变 DOM 树，也就没有必要停下文档的解析等待它们。然而，存在一个问题，JavaScript 脚本执行时可能在文档的解析过程中请求样式信息，如果样式还没有加载和解析，脚本将得到错误的值，显然这将会导致很多问题。所以如果浏览器尚未完成 CSSOM 的下载和构建，而我们却想在此时运行脚本，那么浏览器将延迟 JavaScript 脚本执行和文档的解析，直至其完成 CSSOM 的下载和构建。也就是说，在这种情况下，浏览器会先下载和构建 CSSOM，然后再执行 JavaScript，最后再继续文档的解析。")]),e._v(" "),t("h2",{attrs:{id:"浏览器本地储存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器本地储存"}},[e._v("#")]),e._v(" 浏览器本地储存")]),e._v(" "),t("h3",{attrs:{id:"前端储存的方式有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端储存的方式有哪些"}},[e._v("#")]),e._v(" 前端储存的⽅式有哪些")]),e._v(" "),t("ul",[t("li",[e._v("cookies： 在HTML5标准前本地储存的主要⽅式，优点是兼容性好，请求头⾃带cookie⽅便，缺点是⼤⼩只有4k，⾃动请求头加⼊cookie浪费流量，每个domain限制20个cookie，使⽤起来麻烦，需要⾃⾏封装；")]),e._v(" "),t("li",[e._v("localStorage：HTML5加⼊的以键值对(Key-Value)为标准的⽅式，优点是操作⽅便，永久性储存（除⾮⼿动删除），⼤⼩为5M，兼容IE8+ ；")]),e._v(" "),t("li",[e._v("sessionStorage：与localStorage基本类似，区别是sessionStorage当⻚⾯关闭后会被清理，⽽且与cookie、localStorage不同，他不能在所有同源窗⼝中共享，是会话级别的储存⽅式；")]),e._v(" "),t("li",[e._v("Web SQL：2010年被W3C废弃的本地数据库数据存储⽅案，但是主流浏览器（⽕狐除外）都已经有了相关的实现，web sql类似于SQLite，是真正意义上的关系型数据库，⽤sql进⾏操作，当我们⽤JavaScript时要进⾏转换，较为繁琐；")]),e._v(" "),t("li",[e._v("IndexedDB： 是被正式纳⼊HTML5标准的数据库储存⽅案，它是NoSQL数据库，⽤键值对进⾏储存，可以进⾏快速读取操作，⾮常适合web场景，同时⽤JavaScript进⾏操作会⾮常便。")])]),e._v(" "),t("h3",{attrs:{id:"indexeddb有哪些特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#indexeddb有哪些特点"}},[e._v("#")]),e._v(" IndexedDB有哪些特点")]),e._v(" "),t("ul",[t("li",[e._v('键值对储存：IndexedDB 内部采用对象仓库（object store）存放数据。所有类型的数据都可以直接存入，包括 JavaScript 对象。对象仓库中，数据以"键值对"的形式保存，每一个数据记录都有对应的主键，主键是独一无二的，不能有重复，否则会抛出一个错误。')]),e._v(" "),t("li",[e._v("异步：IndexedDB 操作时不会锁死浏览器，用户依然可以进行其他操作，这与 LocalStorage 形成对比，后者的操作是同步的。异步设计是为了防止大量数据的读写，拖慢网页的表现。")]),e._v(" "),t("li",[e._v("支持事务：IndexedDB 支持事务（transaction），这意味着一系列操作步骤之中，只要有一步失败，整个事务就都取消，数据库回滚到事务发生之前的状态，不存在只改写一部分数据的情况。")]),e._v(" "),t("li",[e._v("同源限制： IndexedDB 受到同源限制，每一个数据库对应创建它的域名。网页只能访问自身域名下的数据库，而不能访问跨域的数据库。")]),e._v(" "),t("li",[e._v("储存空间大：IndexedDB 的储存空间比 LocalStorage 大得多，一般来说不少于 250MB，甚至没有上限。")]),e._v(" "),t("li",[e._v("支持二进制储存：IndexedDB 不仅可以储存字符串，还可以储存二进制数据（ArrayBuffer 对象和 Blob 对象）。")])]),e._v(" "),t("h2",{attrs:{id:"浏览器同源策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器同源策略"}},[e._v("#")]),e._v(" 浏览器同源策略")]),e._v(" "),t("h3",{attrs:{id:"简单请求和非简单请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单请求和非简单请求"}},[e._v("#")]),e._v(" 简单请求和非简单请求")]),e._v(" "),t("p",[e._v("若该请求满足以下两个条件，就可以看作是简单请求：")]),e._v(" "),t("p",[e._v("1）请求方法是以下三种方法之一：")]),e._v(" "),t("blockquote",[t("p",[e._v("HEAD\nGET\nPOST")])]),e._v(" "),t("p",[e._v("2）HTTP的头信息不超出以下几种字段：")]),e._v(" "),t("blockquote",[t("p",[e._v("Accept\nAccept-Language\nContent-Language\nLast-Event-ID\nContent-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain")])]),e._v(" "),t("p",[t("strong",[e._v("简单请求过程：")]),e._v("\n对于简单请求，浏览器会直接发出CORS请求，它会在请求的头信息中增加一个Orign字段，该字段用来说明本次请求来自哪个源（协议+端口+域名），服务器会根据这个值来决定是否同意这次请求。如果Orign指定的域名在许可范围之内，服务器返回的响应就会多出以下信息头：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Access-Control-Allow-Origin: http://api.bob.com  // 和Orign一直\nAccess-Control-Allow-Credentials: true   // 表示是否允许发送Cookie\nAccess-Control-Expose-Headers: FooBar   // 指定返回其他字段的值\nContent-Type: text/html; charset=utf-8   // 表示文档类型\n")])])]),t("p",[e._v("如果Orign指定的域名不在许可范围之内，服务器会返回一个正常的HTTP回应，浏览器发现没有上面的Access-Control-Allow-Origin头部信息，就知道出错了。这个错误无法通过状态码识别，因为返回的状态码可能是200。")]),e._v(" "),t("p",[t("strong",[e._v("在简单请求中，在服务器内，至少需要设置字段：Access-Control-Allow-Origin")])]),e._v(" "),t("p",[t("strong",[e._v("非简单请求过程")])]),e._v(" "),t("p",[e._v("非简单请求是对服务器有特殊要求的请求，比如请求方法为DELETE或者PUT等。非简单请求的CORS请求会在正式通信之前进行一次HTTP查询请求，称为"),t("strong",[e._v("预检请求")]),e._v("。")]),e._v(" "),t("p",[e._v("浏览器会询问服务器，当前所在的网页是否在服务器允许访问的范围内，以及可以使用哪些HTTP请求方式和头信息字段，只有得到肯定的回复，才会进行正式的HTTP请求，否则就会报错。")]),e._v(" "),t("p",[e._v("预检请求使用的请求方法是OPTIONS，表示这个请求是来询问的。他的头信息中的关键字段是Orign，表示请求来自哪个源。除此之外，头信息中还包括两个字段：")]),e._v(" "),t("ul",[t("li",[e._v("Access-Control-Request-Method：该字段是必须的，用来列出浏览器的CORS请求会用到哪些HTTP方法。")]),e._v(" "),t("li",[e._v("Access-Control-Request-Headers： 该字段是一个逗号分隔的字符串，指定浏览器CORS请求会额外发送的头信息字段。")])]),e._v(" "),t("p",[e._v("服务器在收到浏览器的预检请求之后，会根据头信息的三个字段来进行判断，如果返回的头信息在中有Access-Control-Allow-Origin这个字段就是允许跨域请求，如果没有，就是不同意这个预检请求，就会报错。")]),e._v(" "),t("p",[e._v("服务器回应的CORS的字段如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Access-Control-Allow-Origin: http://api.bob.com  // 允许跨域的源地址\nAccess-Control-Allow-Methods: GET, POST, PUT // 服务器支持的所有跨域请求的方法\nAccess-Control-Allow-Headers: X-Custom-Header  // 服务器支持的所有头信息字段\nAccess-Control-Allow-Credentials: true   // 表示是否允许发送Cookie\nAccess-Control-Max-Age: 1728000  // 用来指定本次预检请求的有效期，单位为秒\n")])])]),t("p",[e._v("只要服务器通过了预检请求，在以后每次的CORS请求都会自带一个Origin头信息字段。服务器的回应，也都会有一个Access-Control-Allow-Origin头信息字段。")]),e._v(" "),t("p",[e._v("在非简单请求中，至少需要设置以下字段：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("'Access-Control-Allow-Origin'  \n'Access-Control-Allow-Methods'\n'Access-Control-Allow-Headers'\n")])])]),t("p",[t("strong",[e._v("减少OPTIONS请求次数：")])]),e._v(" "),t("p",[e._v("OPTIONS请求次数过多就会损耗页面加载的性能，降低用户体验度。所以尽量要减少OPTIONS请求次数，可以后端在请求的返回头部添加：Access-Control-Max-Age：number。它表示预检请求的返回结果可以被缓存多久，单位是秒。该字段只对完全一样的URL的缓存设置生效，所以设置了缓存时间，在这个时间范围内，再次发送请求就不需要进行预检请求了。")]),e._v(" "),t("p",[t("strong",[e._v("CORS中Cookie相关问题：")]),e._v("\n在CORS请求中，如果想要传递Cookie，就要满足以下三个条件：")]),e._v(" "),t("ul",[t("li",[e._v("在请求中设置 withCredentials:默认情况下在跨域请求，浏览器是不带 cookie 的。但是我们可以通过设置 withCredentials 来进行传递 cookie.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 原生 xml 的设置方式\nvar xhr = new XMLHttpRequest();\nxhr.withCredentials = true;\n// axios 设置方式\naxios.defaults.withCredentials = true;\n")])])]),t("ul",[t("li",[e._v("Access-Control-Allow-Credentials 设置为 true")]),e._v(" "),t("li",[e._v("Access-Control-Allow-Origin 设置为非 *")])]),e._v(" "),t("h3",{attrs:{id:"cors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[e._v("#")]),e._v(" CORS")]),e._v(" "),t("blockquote",[t("p",[e._v("跨域资源共享(CORS) 是一种机制，它使用额外的 HTTP 头来告诉浏览器  让运行在一个 origin (domain)上的Web应用被准许访问来自不同源服务器上的指定的资源。当一个资源从与该资源本身所在的服务器不同的域、协议或端口请求一个资源时，资源会发起一个跨域HTTP 请求。")])]),e._v(" "),t("p",[e._v("CORS需要浏览器和服务器同时支持，整个CORS过程都是浏览器完成的，无需用户参与。因此实现CORS的关键就是服务器，只要服务器实现了CORS请求，就可以跨源通信了。")]),e._v(" "),t("h3",{attrs:{id:"jsonp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jsonp"}},[e._v("#")]),e._v(" JSONP")]),e._v(" "),t("p",[e._v("jsonp的原理就是利用"),t("code",[e._v("<script>")]),e._v("标签没有跨域限制，通过"),t("code",[e._v("<script>")]),e._v("标签src属性，发送带有callback参数的GET请求，服务端将接口返回数据拼凑到callback函数中，返回给浏览器，浏览器解析执行，从而前端拿到callback函数返回的数据。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<script>\n    var script = document.createElement('script');\n    script.type = 'text/javascript';\n    // 传参一个回调函数名给后端，方便后端返回时执行这个在前端定义的回调函数\n    script.src = 'http://www.domain2.com:8080/login?user=admin&callback=handleCallback';\n    document.head.appendChild(script);\n    // 回调执行函数\n    function handleCallback(res) {\n        alert(JSON.stringify(res));\n    }\n <\/script>\n\n\n// 服务端返回如下（返回时即执行全局函数）：\nhandleCallback({\"success\": true, \"user\": \"admin\"})\n\n// Vue axios实现：\nthis.$http = axios;\nthis.$http.jsonp('http://www.domain2.com:8080/login', {\n    params: {},\n    jsonp: 'handleCallback'\n}).then((res) => {\n    console.log(res); \n})\n\n")])])]),t("p",[t("strong",[e._v("JSONP的缺点：")])]),e._v(" "),t("ul",[t("li",[e._v("具有局限性， 仅支持get方法")]),e._v(" "),t("li",[e._v("不安全，可能会遭受XSS攻击")])]),e._v(" "),t("h3",{attrs:{id:"postmessage-跨域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#postmessage-跨域"}},[e._v("#")]),e._v(" postMessage 跨域")]),e._v(" "),t("p",[e._v("postMessage是HTML5 XMLHttpRequest Level 2中的API，且是为数不多可以跨域操作的window属性之一，它可用于解决以下方面的问题：")]),e._v(" "),t("ul",[t("li",[e._v("页面和其打开的新窗口的数据传递")]),e._v(" "),t("li",[e._v("多窗口之间消息传递")]),e._v(" "),t("li",[t("strong",[e._v("页面与嵌套的iframe消息传递")])]),e._v(" "),t("li",[e._v("上面三个场景的跨域数据传递")])]),e._v(" "),t("p",[e._v("用法：postMessage(data,origin)方法接受两个参数：")]),e._v(" "),t("ul",[t("li",[e._v("data： html5规范支持任意基本类型或可复制的对象，但部分浏览器只支持字符串，所以传参时最好用JSON.stringify()序列化。")]),e._v(" "),t("li",[e._v('origin： 协议+主机+端口号，也可以设置为"*"，表示可以传递给任意窗口，如果要指定和当前窗口同源的话设置为"/"。')])]),e._v(" "),t("h3",{attrs:{id:"websocket协议跨域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#websocket协议跨域"}},[e._v("#")]),e._v(" WebSocket协议跨域")]),e._v(" "),t("p",[e._v("WebSocket protocol是HTML5一种新的协议。它实现了浏览器与服务器全双工通信，同时允许跨域通讯，是server push技术的一种很好的实现。\n原生WebSocket API使用起来不太方便，我们使用Socket.io，它很好地封装了webSocket接口，提供了更简单、灵活的接口，也对不支持webSocket的浏览器提供了向下兼容。")]),e._v(" "),t("h3",{attrs:{id:"nginx代理跨域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx代理跨域"}},[e._v("#")]),e._v(" nginx代理跨域")]),e._v(" "),t("p",[e._v("nginx反向代理接口跨域\n跨域问题：同源策略仅是针对浏览器的安全策略。服务器端调用HTTP接口只是使用HTTP协议，不需要同源策略，也就不存在跨域问题。\n实现思路：通过Nginx配置一个代理服务器域名与domain1相同，端口不同）做跳板机，反向代理访问domain2接口，并且可以顺便修改cookie中domain信息，方便当前域cookie写入，实现跨域访问。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("#proxy服务器\nserver {\n    listen       81;\n    server_name  www.domain1.com;\n    location / {\n        proxy_pass   http://www.domain2.com:8080;  #反向代理\n        proxy_cookie_domain www.domain2.com www.domain1.com; #修改cookie里域名\n        index  index.html index.htm;\n        # 当用webpack-dev-server等中间件代理接口访问nignx时，此时无浏览器参与，故没有同源限制，下面的跨域配置可不启用\n        add_header Access-Control-Allow-Origin http://www.domain1.com;  #当前端只跨域不带cookie时，可为*\n        add_header Access-Control-Allow-Credentials true;\n    }\n}\n\n")])])]),t("h3",{attrs:{id:"正向代理和反向代理的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正向代理和反向代理的区别"}},[e._v("#")]),e._v(" 正向代理和反向代理的区别")]),e._v(" "),t("p",[t("strong",[e._v("正向代理：")])]),e._v(" "),t("p",[e._v("客户端想获得一个服务器的数据，但是因为种种原因无法直接获取。于是客户端设置了一个代理服务器，并且指定目标服务器，之后代理服务器向目标服务器转交请求并将获得的内容发送给客户端。这样本质上起到了对真实服务器隐藏真实客户端的目的。实现正向代理需要修改客户端，比如修改浏览器配置。")]),e._v(" "),t("p",[t("strong",[e._v("反向代理：")])]),e._v(" "),t("p",[e._v("服务器为了能够将工作负载分不到多个服务器来提高网站性能 (负载均衡)等目的，当其受到请求后，会首先根据转发规则来确定请求应该被转发到哪个服务器上，然后将请求转发到对应的真实服务器上。这样本质上起到了对客户端隐藏真实服务器的作用。\n一般使用反向代理后，需要通过修改 DNS 让域名解析到代理服务器 IP，这时浏览器无法察觉到真正服务器的存在，当然也就不需要修改配置了。")]),e._v(" "),t("p",[t("img",{attrs:{src:s(442),alt:""}})]),e._v(" "),t("p",[e._v("正向代理和反向代理的结构是一样的，都是 client-proxy-server 的结构，它们主要的区别就在于中间这个 proxy 是哪一方设置的。在正向代理中，proxy 是 client 设置的，用来隐藏 client；而在反向代理中，proxy 是 server 设置的，用来隐藏 server。")]),e._v(" "),t("h2",{attrs:{id:"浏览器事件机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器事件机制"}},[e._v("#")]),e._v(" 浏览器事件机制")]),e._v(" "),t("h3",{attrs:{id:"事件委托"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件委托"}},[e._v("#")]),e._v(" 事件委托")]),e._v(" "),t("p",[t("strong",[e._v("局限性")]),e._v("\n当然，事件委托也是有局限的。比如 focus、blur 之类的事件没有事件冒泡机制，所以无法实现事件委托；mousemove、mouseout 这样的事件，虽然有事件冒泡，但是只能不断通过位置去计算定位，对性能消耗高，因此也是不适合于事件委托的。")]),e._v(" "),t("h3",{attrs:{id:"宏任务和微任务分别有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#宏任务和微任务分别有哪些"}},[e._v("#")]),e._v(" 宏任务和微任务分别有哪些")]),e._v(" "),t("p",[e._v("微任务包括： promise 的回调、node 中的 process.nextTick 、对 Dom 变化监听的 MutationObserver。\n宏任务包括： script 脚本的执行、setTimeout ，setInterval ，setImmediate 一类的定时事件，还有如 I/O 操作、UI 渲染等。")])])}),[],!1,null,null,null);t.default=a.exports}}]);