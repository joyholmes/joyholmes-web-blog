(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{468:function(e,t,n){e.exports=n.p+"assets/img/2022-05-29-18-00-24.56f076ee.png"},469:function(e,t,n){e.exports=n.p+"assets/img/2022-05-29-18-14-44.82e75268.png"},470:function(e,t,n){e.exports=n.p+"assets/img/2022-05-31-15-18-02.6eba8c66.png"},471:function(e,t,n){e.exports=n.p+"assets/img/2022-05-31-17-41-06.cdfb1758.png"},496:function(e,t,n){"use strict";n.r(t);var a=n(2),v=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"vue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[e._v("#")]),e._v(" vue")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/weixin_44757863/article/details/123255145",target:"_blank",rel:"noopener noreferrer"}},[e._v("尚硅谷Vue.js从入门到精通基础笔记（理论+实操+知识点速查）"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"数据绑定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据绑定"}},[e._v("#")]),e._v(" 数据绑定")]),e._v(" "),t("p",[e._v("1、v-bind：单向数据")]),e._v(" "),t("p",[e._v("2、v-model: 双向数据绑定，v-model:value 的简写，因为 v-model 默认收集的就是 value 的值；所以 v-model 一般用在表单类元素上，这些元素都有 value 属性。")]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"object-defineproperty"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#object-defineproperty"}},[e._v("#")]),e._v(" Object.defineProperty")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    let person = {\n        name: "joy",\n        sex: "男",\n\n    }\n    let number = 18\n    Object.defineProperty(person, "age", {\n        value: 26,\n        enumerable: true,\n        writable: true,\n        configurable: true, //是否可删\n\n        // 读取person的age的时候，get函数（getter）会被调用，并且返回的就是age\n        get: function(){\n            console.log("读取age属性")\n            return number\n        },\n        // 修改person的age的时候，set函数（setter）会被调用，并收到修改的具体值\n        set(value){\n            console.log("修改age属性", value)\n            number = value\n        }\n    })\n')])])]),t("hr"),e._v(" "),t("h2",{attrs:{id:"vue双向绑定代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue双向绑定代码"}},[e._v("#")]),e._v(" vue双向绑定代码")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('  class Vue {\n    // 参数为对象实例 这个对象用于告知vue需要挂载到哪个元素并挂载数据\n    constructor(obj_instance) {\n      // 给实例赋值对象的data属性\n      this.$data = obj_instance.data;\n      // 进行数据劫持 监听对象里属性的变化\n      Observer(this.$data);\n      Complie(obj_instance.el, this);\n    }\n  }\n\n  //数据劫持 —— 监听实例里的数据\n  function Observer(data_instance) {\n    // 递归出口\n    if (!data_instance || typeof data_instance !== "object") return;\n    // 每次数据劫持一个对象时都创建Dependency实例 用于区分哪个对象对应哪个依赖实例和收集依赖\n    const dependency = new Dependency();\n    Object.keys(data_instance).forEach((key) => {\n      // 使用defineProperty后属性里的值会被修改 需要提前保存属性的值\n      let value = data_instance[key];\n      // 递归劫持data里的子属性\n      Observer(value);\n      Object.defineProperty(data_instance, key, {\n        enumerable: true,\n        configurable: true,\n        // 收集数据依赖\n        get() {\n          console.log(`获取了属性值 ${value}`);\n          Dependency.temp && dependency.addSub(Dependency.temp);\n          return value;\n        },\n        // 触发视图更新\n        set(newVal) {\n          console.log(`修改了属性值`);\n          value = newVal;\n          // 处理赋值是对象时的情况\n          Observer(newVal);\n          dependency.notify();\n        },\n      });\n    });\n  }\n\n  //模板解析 —— 替换DOM内容 把vue实例上的数据解析到页面上\n  // 接收两个参数 1.vue实例挂载的元素<div id="app"> 2.vue实例\n  function Complie(element, vm) {\n    vm.$el = document.querySelector(element);\n    // 使用文档碎片来临时存放DOM元素 减少DOM更新\n    const fragment = document.createDocumentFragment();\n    let child;\n    // 将页面里的子节点循环放入文档碎片\n    while ((child = vm.$el.firstChild)) {\n      fragment.appendChild(child);\n    }\n    fragment_compile(fragment);\n    // 替换fragment里文本节点的内容\n    function fragment_compile(node) {\n      // 使用正则表达式去匹配并替换节点里的{{}}\n      const pattern = /\\{\\{\\s*(\\S+)\\s*\\}\\}/;\n      if (node.nodeType === 3) {\n        // 提前保存文本内容 否则文本在被替换一次后 后续的操作都会不生效\n        // 打工人: {{name}}  => 打工人：西维 如果不保存后续修改name会匹配不到{{name}} 因为已经被替换\n        const texts = node.nodeValue;\n        // 获取正则表达式匹配文本字符串获得的所有结果\n        const result_regex = pattern.exec(node.nodeValue);\n        if (result_regex) {\n          const arr = result_regex[1].split("."); // more.salary => [\'more\', \'salary\']\n          // 使用reduce归并获取属性对应的值 = vm.$data[\'more\'] => vm.$data[\'more\'][\'salary\']\n          const value = arr.reduce((total, current) => total[current], vm.$data);\n          node.nodeValue = texts.replace(pattern, value);\n          // 在节点值替换内容时 即模板解析的时候 添加订阅者\n          // 在替换文档碎片内容时告诉订阅者如何更新 即告诉Watcher如何更新自己\n          new Watcher(vm, result_regex[1], (newVal) => {\n            node.nodeValue = texts.replace(pattern, newVal);\n          });\n        }\n      }\n      // 替换绑定了v-model属性的input节点的内容\n      if (node.nodeType === 1 && node.nodeName === "INPUT") {\n        const attr = Array.from(node.attributes);\n        attr.forEach((item) => {\n          if (item.nodeName === "v-model") {\n            const value = item.nodeValue\n              .split(".")\n              .reduce((total, current) => total[current], vm.$data);\n            node.value = value;\n            new Watcher(vm, item.nodeValue, (newVal) => {\n              node.value = newVal;\n            });\n            node.addEventListener("input", (e) => {\n              // [\'more\', \'salary\']\n              const arr1 = item.nodeValue.split(".");\n              // [\'more\']\n              const arr2 = arr1.slice(0, arr1.length - 1);\n              // vm.$data.more\n              const final = arr2.reduce(\n                (total, current) => total[current],\n                vm.$data\n              );\n              // vm.$data.more[\'salary\'] = e.target.value\n              final[arr1[arr1.length - 1]] = e.target.value;\n            });\n          }\n        });\n      }\n      // 对子节点的所有子节点也进行替换内容操作\n      node.childNodes.forEach((child) => fragment_compile(child));\n    }\n    // 操作完成后将文档碎片添加到页面\n    // 此时已经能将vm的数据渲染到页面上 但还未实现数据变动的及时更新\n    vm.$el.appendChild(fragment);\n  }\n\n  //依赖 —— 实现发布-订阅模式 用于存放订阅者和通知订阅者更新\n  class Dependency {\n    constructor() {\n      this.subscribers = []; // 用于收集依赖data的订阅者信息\n    }\n    addSub(sub) {\n      this.subscribers.push(sub);\n    }\n    notify() {\n      this.subscribers.forEach((sub) => sub.update());\n    }\n  }\n\n  // 订阅者\n  class Watcher {\n    // 需要vue实例上的属性 以获取更新什么数据\n    constructor(vm, key, callback) {\n      this.vm = vm;\n      this.key = key;\n      this.callback = callback;\n      //临时属性 —— 触发getter 把订阅者实例存储到Dependency实例的subscribers里面\n      Dependency.temp = this;\n      key.split(".").reduce((total, current) => total[current], vm.$data);\n      Dependency.temp = null; // 防止订阅者多次加入到依赖实例数组里\n    }\n    update() {\n      const value = this.key\n        .split(".")\n        .reduce((total, current) => total[current], this.vm.$data);\n      this.callback(value);\n    }\n  }\n')])])]),t("h2",{attrs:{id:"vue-数据代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-数据代理"}},[e._v("#")]),e._v(" vue 数据代理")]),e._v(" "),t("p",[t("img",{attrs:{src:n(468),alt:""}})]),e._v(" "),t("p",[t("strong",[e._v("vue 中的数据代理")]),e._v("：把 vm 中 data 的数据放在 vm 中一份，以便编码方便")]),e._v(" "),t("p",[e._v("1、数据代理：通过 vm 对象来代理 data 对象中属性的操作（读和写）")]),e._v(" "),t("p",[e._v("2、好处：方便操作 data 中的数据")]),e._v(" "),t("p",[e._v("3、基本原理：通过 Object.defineProperty（）把 data 对象上的所有属性添加到 vm 上。为每一个添加到 vm 上的属性都设置 getter/setter，在 getter/setter 中操作 data 中对应的属性。")]),e._v(" "),t("p",[t("strong",[e._v("vm._data 通过进行数据被劫持，进行响应式更新视图")])]),e._v(" "),t("p",[t("img",{attrs:{src:n(469),alt:""}})]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.cnblogs.com/kidney/p/6052935.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js双向绑定的实现原理"),t("OutboundLink")],1)]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"vue-事件处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-事件处理"}},[e._v("#")]),e._v(" vue 事件处理")]),e._v(" "),t("p",[e._v('@click($event, "hjy"),$event 表示点击事件，\n事件的基本使用:')]),e._v(" "),t("ol",[t("li",[e._v("使用 v-on :xxx 或@xxx 绑定事件，其中 xxx 是事件名;")]),e._v(" "),t("li",[e._v("事件的回调需要配置在 methods 对象中，最终会在 vm 上;")]),e._v(" "),t("li",[e._v("methods 中配置的函数，不要用箭头函数!否则 this 就不是 vm 了;")]),e._v(" "),t("li",[e._v("methods 中配置的函数，都是被 Vue 所管理的函数，this 的指向是 vm,或组件实例对象;")]),e._v(" "),t("li",[e._v('@click="demo”和@click="demo($event)”效果一致，但后者可以传参;')])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"vue-事件修饰符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-事件修饰符"}},[e._v("#")]),e._v(" vue 事件修饰符")]),e._v(" "),t("p",[e._v("vue 中的事件修饰符:")]),e._v(" "),t("ol",[t("li",[e._v("prevent:阻止默认事件（常用）;")]),e._v(" "),t("li",[e._v("stop:阻止事件冒泡（常用);")]),e._v(" "),t("li",[e._v("once:事件只触发一次（常用）;")]),e._v(" "),t("li",[e._v("capture:使用事件的捕获模式;")]),e._v(" "),t("li",[e._v("self:只有 event.target 是当前操作的元素是才触发事件;")]),e._v(" "),t("li",[e._v("passive:事件的默认行为立即执行，无需等待事件回调执行完毕;\n"),t("strong",[e._v("修饰符可以连续写，链式")])])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"键盘事件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#键盘事件"}},[e._v("#")]),e._v(" 键盘事件")]),e._v(" "),t("p",[e._v("1.Vue 中常用的按键别名：\n回车 => enter\n删除 => delete (捕获“删除”和“退格”键)\n退出 => esc\n空格 => space\n换行 => tab (特殊，必须配合 keydown 去使用)\n上 => up\n下 => down\n左 => left\n右 => right")]),e._v(" "),t("p",[e._v("2.Vue 未提供别名的按键，可以使用按键原始的 key 值去绑定，但注意要转为 kebab-case（短横线命名）")]),e._v(" "),t("p",[e._v("3.系统修饰键（用法特殊）：ctrl、alt、shift、meta\n(1).配合 keyup 使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。\n(2).配合 keydown 使用：正常触发事件。")]),e._v(" "),t("p",[e._v("4.也可以使用 keyCode 去指定具体的按键（不推荐）")]),e._v(" "),t("p",[e._v("5.Vue.config.keyCodes.自定义键名 = 键码，可以去定制按键别名")]),e._v(" "),t("p",[t("strong",[e._v("键盘事件可以连续写，链式")])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"计算属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算属性"}},[e._v("#")]),e._v(" 计算属性")]),e._v(" "),t("p",[t("strong",[e._v("计算属性：")]),e._v(" 1.定义：要用的属性不存在，要通过已有属性计算得来。 2.原理：底层借助了 Objcet.defineproperty 方法提供的 getter 和 setter。\n3.get 函数什么时候执行？\n(1).初次读取时会执行一次。\n(2).当依赖的数据发生改变时会被再次调用。 4.优势：与 methods 实现相比，内部有缓存机制（复用），效率更高，调试方便。 5.备注： 1.计算属性最终会出现在 vm 上，直接读取使用即可。 2.如果计算属性要被修改，那必须写 set 函数去响应修改，且 set 中要引起计算时依赖的数据发生改变。")]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"监视属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#监视属性"}},[e._v("#")]),e._v(" 监视属性")]),e._v(" "),t("p",[t("strong",[e._v("监视属性 watch：")]),e._v(" 1.当被监视的属性变化时, 回调函数自动调用, 进行相关操作 2.监视的属性必须存在，才能进行监视！！ 3.监视的两种写法：\n(1).new Vue 时传入 watch 配置\n(2).通过 vm.$watch 监视")]),e._v(" "),t("p",[t("strong",[e._v("深度监视：")]),e._v("\n(1).Vue 中的 watch 默认不监测对象内部值的改变（一层）。\n(2).配置 deep:true 可以监测对象内部值改变（多层）。\n备注：\n(1).Vue 自身可以监测对象内部值的改变，但 Vue 提供的 watch 默认不可以！\n(2).使用 watch 时根据数据的具体结构，决定是否采用深度监视。")]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"计算属性与监视属性对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算属性与监视属性对比"}},[e._v("#")]),e._v(" 计算属性与监视属性对比")]),e._v(" "),t("p",[e._v("computed 和 watch 之间的区别：\n1.computed 能完成的功能，watch 都可以完成。\n2.watch 能完成的功能，computed 不一定能完成，例如：watch 可以进行异步操作。\n两个重要的小原则： 1.所被 Vue 管理的函数，最好写成普通函数，这样 this 的指向才是 vm 或 组件实例对象。 2.所有不被 Vue 所管理的函数（定时器的回调函数、ajax 的回调函数等、Promise 的回调函数），最好写成箭头函数，\n这样 this 的指向才是 vm 或 组件实例对象。")]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"绑定样式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#绑定样式"}},[e._v("#")]),e._v(" 绑定样式")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('1. class样式\n    写法:class="xxx" xxx可以是字符串、对象、数组。\n            字符串写法适用于：类名不确定，要动态获取。\n            对象写法适用于：要绑定多个样式，个数不确定，名字也不确定。\n            数组写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用。\n2. style样式\n        :style="{fontSize: xxx}"其中xxx是动态值。\n        :style="[a,b]"其中a、b是样式对象。\n')])])]),t("hr"),e._v(" "),t("h2",{attrs:{id:"条件渲染"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#条件渲染"}},[e._v("#")]),e._v(" 条件渲染")]),e._v(" "),t("p",[t("strong",[e._v("1.v-if")]),e._v('\n写法：\n(1).v-if="表达式"\n(2).v-else-if="表达式"\n(3).v-else="表达式"\n适用于：切换频率较低的场景。\n特点：不展示的 DOM 元素直接被移除。\n注意：v-if 可以和:v-else-if、v-else 一起使用，但要求结构不能被“打断”。')]),e._v(" "),t("p",[t("strong",[e._v("2.v-show")]),e._v('\n写法：v-show="表达式"\n适用于：切换频率较高的场景。\n特点：不展示的 DOM 元素未被移除，仅仅是使用样式隐藏掉')]),e._v(" "),t("p",[e._v("3.备注：使用 v-if 的时，元素可能无法获取到，而使用 v-show 一定可以获取到。")]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"列表渲染"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#列表渲染"}},[e._v("#")]),e._v(" 列表渲染")]),e._v(" "),t("p",[e._v('v-for 指令: 1.用于展示列表数据 2.语法：v-for="(item, index) in xxx" :key="yyy" 3.可遍历：数组、对象、字符串（用的很少）、指定次数（用的很少）')]),e._v(" "),t("p",[t("strong",[e._v("key 作用与原理")])]),e._v(" "),t("p",[e._v("面试题：react、vue 中的 key 有什么作用？（key 的内部原理）")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("虚拟 DOM 中 key 的作用：\nkey 是虚拟 DOM 对象的标识，当数据发生变化时，Vue 会根据【新数据】生成【新的虚拟 DOM】,\n随后 Vue 进行【新虚拟 DOM】与【旧虚拟 DOM】的差异比较，比较规则如下：")])]),e._v(" "),t("li",[t("p",[e._v("对比规则：\n(1). 旧虚拟 DOM 中找到了与新虚拟 DOM 相同的 key：\n①.若虚拟 DOM 中内容没变, 直接使用之前的真实 DOM！\n②.若虚拟 DOM 中内容变了, 则生成新的真实 DOM，随后替换掉页面中之前的真实 DOM。\n(2). 旧虚拟 DOM 中未找到与新虚拟 DOM 相同的 key\n创建新的真实 DOM，随后渲染到到页面。")])]),e._v(" "),t("li",[t("p",[e._v("用 index 作为 key 可能会引发的问题：")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("若对数据进行：逆序添加、逆序删除等破坏顺序操作:\n会产生没有必要的真实 DOM 更新 ==> 界面效果没问题, 但效率低。")])]),e._v(" "),t("li",[t("p",[e._v("如果结构中还包含输入类的 DOM：\n会产生错误 DOM 更新 ==> 界面有问题。")])])])]),e._v(" "),t("li",[t("p",[e._v("开发中如何选择 key?:")]),e._v(" "),t("ol",[t("li",[e._v("最好使用每条数据的唯一标识作为 key, 比如 id、手机号、身份证号、学号等唯一值。")]),e._v(" "),t("li",[e._v("如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，\n使用 index 作为 key 是没有问题的。")])])])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"vue-监测数据改变的原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-监测数据改变的原理"}},[e._v("#")]),e._v(" vue 监测数据改变的原理")]),e._v(" "),t("p",[t("strong",[e._v("1、模拟对象数据检测")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    let data = {\n        name: "joy",\n        age: 12\n    }\n    let vm = {}\n    let obs = new Observer(data)\n    vm._data = data = obs\n\n    function Observer(obj){\n        let keys = Object.keys(obj)\n        keys.forEach((key) => {\n            Object.defineProperty(this, key, {\n                get() {\n                    return obj[key]\n                },\n                set(val) {\n                    obj[key] = val\n                }\n            })\n        })\n    }\n')])])]),t("p",[t("strong",[e._v("2、Vue.set()")])]),e._v(" "),t("p",[e._v("参数：")]),e._v(" "),t("ul",[t("li",[e._v("{Object | Array} target")]),e._v(" "),t("li",[e._v("{string | number} propertyName/index")]),e._v(" "),t("li",[e._v("{any} value\n返回值：设置的值。")])]),e._v(" "),t("p",[e._v("用法：")]),e._v(" "),t("p",[e._v("向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新 property，因为 Vue 无法探测普通的新增 property (比如 this.myObject.newProperty = 'hi')")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    Vue.set(vm.student, "age", 12)\n    vm.$set(vm.student, "age", 12)\n')])])]),t("blockquote",[t("p",[e._v("注意对象不能是 Vue 实例，或者 Vue 实例的根数据对象。(不能是 vm 和 v._data)")])]),e._v(" "),t("p",[t("strong",[e._v("3、模拟数组数据检测")]),e._v("\nVue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。这些被包裹过的方法包括：")]),e._v(" "),t("blockquote",[t("p",[e._v("push()")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("pop()\nshift()\nunshift()\nsplice()\nsort()\nreverse()\n或 this.$set(this.students,4,'xiaming')\n")])])]),t("p",[t("strong",[e._v("4、总结 Vue 检测数据")]),e._v("\nVue 监视数据的原理：\n1.vue 会监视 data 中所有层次的数据。 2. 如何监测对象中的数据？\n通过 setter 实现监视，且要在 new Vue 时就传入要监测的数据。\n(1).对象中后追加的属性，Vue 默认不做响应式处理\n(2).如需给后添加的属性做响应式，请使用如下 API：\nVue.set(target，propertyName/index，value) 或 vm.$set(target，propertyName/index，value) 3. 如何监测数组中的数据？\n通过包裹数组更新元素的方法实现，本质就是做了两件事：\n(1).调用原生对应的方法对数组进行更新。\n(2).重新解析模板，进而更新页面。 4.在 Vue 修改数组中的某个元素一定要用如下方法： 1.使用这些 API:push()、pop()、shift()、unshift()、splice()、sort()、revere()\n2.Vue.set() 或 vm.$set()\n特别注意：Vue.set() 和 vm.$set() 不能给 vm 或 vm 的根数据对象 添加属性！！！")]),e._v(" "),t("hr"),e._v(" "),t("p",[t("strong",[e._v("收集表单数据")]),e._v("\n收集表单数据：")]),e._v(" "),t("ul",[t("li",[e._v("若："),t("code",[e._v('<input type="text"/>')]),e._v("，则 v-model 收集的是 value 值，用户输入的就是 value 值。")]),e._v(" "),t("li",[e._v("若："),t("code",[e._v('<input type="radio"/>')]),e._v("，则 v-model 收集的是 value 值，且要给标签配置 value 值。")]),e._v(" "),t("li",[e._v("若："),t("code",[e._v('<input type="checkbox"/>')]),e._v(" 1.没有配置 input 的 value 属性，那么收集的就是 checked（勾选 or 未勾选，是布尔值） 2.配置 input 的 value 属性:\n(1)v-model 的初始值是非数组，那么收集的就是 checked（勾选 or 未勾选，是布尔值）\n(2)v-model 的初始值是数组，那么收集的的就是 value 组成的数组\n"),t("strong",[e._v("备注")]),e._v("：v-model 的三个修饰符：\nlazy：失去焦点再收集数据\nnumber：输入字符串转为有效的数字\ntrim：输入首尾空格过滤")])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"过滤器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#过滤器"}},[e._v("#")]),e._v(" 过滤器")]),e._v(" "),t("p",[e._v("定义：对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）。\n语法： 1.注册过滤器：Vue.filter(name,callback) 或 new Vue{filters:{}} 2.使用过滤器："+e._s(e._f("过滤器名")(e.xxx))+' 或 v-bind:属性 = "xxx | 过滤器名"\n'),t("strong",[e._v("备注：")]),e._v(" 1.过滤器也可以接收额外参数、多个过滤器也可以串联 2.并没有改变原本的数据, 是产生新的对应的数据")]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"内置指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内置指令"}},[e._v("#")]),e._v(" 内置指令")]),e._v(" "),t("ul",[t("li",[e._v("v-bind : 单向绑定解析表达式, 可简写为 :xxx")]),e._v(" "),t("li",[e._v("v-model : 双向数据绑定")]),e._v(" "),t("li",[e._v("v-for : 遍历数组/对象/字符串")]),e._v(" "),t("li",[e._v("v-on : 绑定事件监听, 可简写为@")]),e._v(" "),t("li",[e._v("v-if : 条件渲染（动态控制节点是否存存在）")]),e._v(" "),t("li",[e._v("v-else : 条件渲染（动态控制节点是否存存在）")]),e._v(" "),t("li",[e._v("v-show : 条件渲染 (动态控制节点是否展示)")]),e._v(" "),t("li",[e._v("v-text: 向其所在的节点中渲染文本内容;v-text 会替换掉节点中的内容，"+e._s(e.xx)+"则不会。")]),e._v(" "),t("li",[e._v("v-html: 向指定节点中渲染包含 html 结构的内容。\n"),t("ul",[t("li",[e._v("严重注意：v-html 有安全性问题！！！！\n(1).在网站上动态渲染任意 HTML 是非常危险的，容易导致 XSS 攻击。\n(2).一定要在可信的内容上使用 v-html，永不要用在用户提交的内容上！")])])]),e._v(" "),t("li",[e._v("v-cloak 指令（没有值）：\n"),t("ol",[t("li",[e._v("本质是一个特殊属性，Vue 实例创建完毕并接管容器后，会删掉 v-cloak 属性。")]),e._v(" "),t("li",[e._v("使用 css([]属性选择器)配合 v-cloak 可以解决网速慢时页面展示出"+e._s(e.xxx)+"的问题。")])])]),e._v(" "),t("li",[e._v("v-once 指令：\n"),t("ol",[t("li",[e._v("v-once 所在节点在初次动态渲染后，就视为静态内容了。")]),e._v(" "),t("li",[e._v("以后数据的改变不会引起 v-once 所在结构的更新，可以用于优化性能。")])])]),e._v(" "),t("li",[e._v("v-pre 指令：\n"),t("ol",[t("li",[e._v("跳过其所在节点的编译过程。")]),e._v(" "),t("li",[e._v("可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译。")])])])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"自定义指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义指令"}},[e._v("#")]),e._v(" 自定义指令")]),e._v(" "),t("p",[t("strong",[e._v("自定义指令何时调用")])]),e._v(" "),t("ol",[t("li",[e._v("指令与元素成功绑定时（一上来）。")]),e._v(" "),t("li",[e._v("指令所在的模板被重新解析时。")])]),e._v(" "),t("p",[t("strong",[e._v("总结")]),e._v("\n注意指令内部的 this 是 window")]),e._v(" "),t("p",[e._v("一、定义语法：\n(1).局部指令：\n(2).全局指令：\nVue.directive(指令名,配置对象) 或 Vue.directive(指令名,回调函数)")]),e._v(" "),t("p",[e._v("二、配置对象中常用的 3 个回调：\n(1).bind：指令与元素成功绑定时调用。\n(2).inserted：指令所在元素被插入页面时调用。\n(3).update：指令所在模板结构被重新解析时调用。")]),e._v(" "),t("p",[e._v("三、备注： 1.指令定义时不加 v-，但使用时要加 v-； 2.指令名如果是多个单词，要使用 kebab-case 命名方式，不要用 camelCase 命名。")]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"vue-生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-生命周期"}},[e._v("#")]),e._v(" Vue 生命周期")]),e._v(" "),t("p",[t("img",{attrs:{src:n(470),alt:""}})]),e._v(" "),t("p",[e._v("常用的生命周期钩子：")]),e._v(" "),t("ol",[t("li",[e._v("mounted: 发送 ajax 请求、启动定时器、绑定自定义事件、订阅消息等【初始化操作】。")]),e._v(" "),t("li",[e._v("beforeDestroy: 清除定时器、解绑自定义事件、取消订阅消息等【收尾工作】。")])]),e._v(" "),t("p",[e._v("关于销毁 Vue 实例")]),e._v(" "),t("ol",[t("li",[e._v("销毁后借助 Vue 开发者工具看不到任何信息。")]),e._v(" "),t("li",[e._v("销毁后自定义事件会失效，但原生 DOM 事件依然有效。")]),e._v(" "),t("li",[e._v("一般不会在 beforeDestroy 操作数据，因为即便操作数据，也不会再触发更新流程了。")])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"非单文件组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#非单文件组件"}},[e._v("#")]),e._v(" 非单文件组件")]),e._v(" "),t("p",[t("strong",[e._v("Vue 中使用组件的三大步骤：")])]),e._v(" "),t("p",[e._v("一、 如何定义一个组件？")]),e._v(" "),t("ul",[t("li",[e._v("使用 Vue.extend(options)创建，其中 options 和 new Vue(options)时传入的那个 options 几乎一样，但也有点区别；")]),e._v(" "),t("li",[e._v("区别如下：\n"),t("ol",[t("li",[e._v("el 不要写，为什么？ ——— 最终所有的组件都要经过一个 vm 的管理，由 vm 中的 el 决定服务哪个容器。")]),e._v(" "),t("li",[e._v("data 必须写成函数，为什么？ ———— 避免组件被复用时，数据存在引用关系。\n备注：使用 template 可以配置组件结构。")])])])]),e._v(" "),t("p",[e._v("二、如何注册组件？")]),e._v(" "),t("ol",[t("li",[e._v("局部注册：靠 new Vue 的时候传入 components 选项")]),e._v(" "),t("li",[e._v("全局注册：靠 Vue.component('组件名',组件)")])]),e._v(" "),t("p",[e._v("三、编写组件标签：")]),e._v(" "),t("p",[t("strong",[e._v("注意点：")])]),e._v(" "),t("ol",[t("li",[t("p",[e._v("关于组件名:")]),e._v(" "),t("ul",[t("li",[e._v("一个单词组成：\n"),t("ul",[t("li",[e._v("第一种写法(首字母小写)：school")]),e._v(" "),t("li",[e._v("第二种写法(首字母大写)：School")])])]),e._v(" "),t("li",[e._v("多个单词组成： - 第一种写法(kebab-case 命名)：my-school - 第二种写法(CamelCase 命名)：MySchool (需要 Vue 脚手架支持)\n备注：\n(1).组件名尽可能回避 HTML 中已有的元素名称，例如：h2、H2 都不行。\n(2).可以使用 name 配置项指定组件在开发者工具中呈现的名字。")])])]),e._v(" "),t("li",[t("p",[e._v("关于组件标签:\n第一种写法："),t("code",[e._v("<school></school>")]),e._v("\n第二种写法："),t("code",[e._v("<school/>")]),e._v("\n备注：不用使用脚手架时，"),t("code",[e._v("<school/>")]),e._v("会导致后续组件不能渲染。")])]),e._v(" "),t("li",[t("p",[e._v("一个简写方式：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    const school = Vue.extend(options)\n    可简写为：const school = options\n")])])])])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"vuecomponent"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuecomponent"}},[e._v("#")]),e._v(" VueComponent")]),e._v(" "),t("p",[t("strong",[e._v("关于 VueComponent：")])]),e._v(" "),t("ol",[t("li",[e._v("school 组件本质是一个名为 VueComponent 的构造函数，且不是程序员定义的，是 Vue.extend 生成的。")]),e._v(" "),t("li",[e._v("我们只需要写"),t("code",[e._v("<school/>或<school></school>")]),e._v("，Vue 解析时会帮我们创建 school 组件的实例对象，即 Vue 帮我们执行的：new VueComponent(options)。")]),e._v(" "),t("li",[e._v("特别注意：每次调用 Vue.extend，返回的都是一个全新的 VueComponent！！！！")]),e._v(" "),t("li",[e._v("关于 this 指向：\n"),t("ul",[t("li",[e._v("组件配置中：\ndata 函数、methods 中的函数、watch 中的函数、computed 中的函数 它们的 this 均是【VueComponent 实例对象】。")]),e._v(" "),t("li",[e._v("new Vue(options)配置中：\ndata 函数、methods 中的函数、watch 中的函数、computed 中的函数 它们的 this 均是【Vue 实例对象】。")])])]),e._v(" "),t("li",[e._v("VueComponent 的实例对象，以后简称 vc（也可称之为：组件实例对象）。Vue 的实例对象，以后简称 vm。")])]),e._v(" "),t("p",[t("strong",[e._v("一个重要的内置关系")])]),e._v(" "),t("ol",[t("li",[e._v("一个重要的内置关系：")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("VueComponent.prototype.__proto__ === Vue.prototype\n\n\\\\ school.prototype instanceof Vue  ----true\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("为什么要有这个关系：让组件实例对象（vc）可以访问到 Vue 原型上的属性、方法。\n"),t("img",{attrs:{src:n(471),alt:""}})])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"单文件组件-single-file-components"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单文件组件-single-file-components"}},[e._v("#")]),e._v(" 单文件组件( single-file components )")]),e._v(" "),t("p",[e._v(".vue")]),e._v(" "),t("h2",{attrs:{id:"render-函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#render-函数"}},[e._v("#")]),e._v(" render 函数")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("vue.js 与 vue.runtime.xxx.js 的区别：\n(1). vue.js 是完整版的 Vue，包含：核心功能+模板解析器。\n(2). vue.runtime.xxx.js 是运行版的 Vue，只包含：核心功能；没有模板解析器。")])]),e._v(" "),t("li",[t("p",[e._v("因为 vue.runtime.xxx.js 没有模板解析器，所以不能使用 template 配置项，需要使用\nrender 函数接收到的 createElement 函数去指定具体内容。")])])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"vue-组件传值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-组件传值"}},[e._v("#")]),e._v(" vue 组件传值")]),e._v(" "),t("ol",[t("li",[e._v("父子组件通信")])]),e._v(" "),t("ul",[t("li",[e._v("父向子传递数据是通过 props，子向父是通过"),t("code",[e._v("$emit")]),e._v("触发事件")]),e._v(" "),t("li",[e._v("通过父链/子链也可以通信（"),t("code",[e._v("$parent/$children）")])]),e._v(" "),t("li",[t("code",[e._v("ref")]),e._v("也可以访问组件实例；")]),e._v(" "),t("li",[t("code",[e._v("provide/inject；$attrs/$listeners")]),e._v("。\n"),t("blockquote",[t("p",[t("a",{attrs:{href:"https://blog.csdn.net/Dax1_/article/details/122825387",target:"_blank",rel:"noopener noreferrer"}},[e._v("浅析 provide/inject 用法、响应式、全局传递"),t("OutboundLink")],1)])])])]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("兄弟组件通信：")])]),e._v(" "),t("ul",[t("li",[e._v("全局事件总线 EventBus\n"),t("blockquote",[t("p",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/72777951/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue 事件总线（EventBus）使用详细介绍"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[e._v("Vuex。")])]),e._v(" "),t("h2",{attrs:{id:"子组件与父组件-v-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#子组件与父组件-v-model"}},[e._v("#")]),e._v(" 子组件与父组件 v-model")]),e._v(" "),t("h3",{attrs:{id:"model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#model"}},[e._v("#")]),e._v(" model")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("类型：{ prop?: string, event?: string }")])]),e._v(" "),t("li",[t("p",[e._v("详细：允许一个自定义组件在使用 v-model 时定制 prop 和 event。默认情况下，一个组件上的 v-model 会把 value 用作 prop 且把 input 用作 event，但是一些输入类型比如单选框和复选框按钮可能想使用 value prop 来达到不同的目的。使用 model 选项可以回避这些情况产生的冲突。")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('  Vue.component(\'my-checkbox\', {\n    model: {\n      prop: \'checked\',\n      event: \'change\'\n    },\n    props: {\n      // this allows using the `value` prop for a different purpose\n      value: String,\n      // use `checked` as the prop which take the place of `value`\n      checked: {\n        type: Number,\n        default: 0\n      }\n    },\n    // ...\n  })\n\n  <my-checkbox v-model="foo" value="some value"></my-checkbox>\n\n  //相当于\n  <my-checkbox\n    :checked="foo"\n    @change="val => { foo = val }"\n    value="some value">\n  </my-checkbox>\n')])])]),t("h3",{attrs:{id:"sync修饰符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sync修饰符"}},[e._v("#")]),e._v(" .sync修饰符")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('//子组件 触发更新\nthis.$emit(\'update:title\', newTitle)\n\n//父组件 执行更新\n<text-document\n  v-bind:title="doc.title"\n  v-on:update:title="doc.title = $event"\n></text-document>\n\n\n//为了方便起见，为这种模式提供一个缩写，即 .sync 修饰符：\n<text-document v-bind:title.sync="doc.title"></text-document>\n')])])]),t("p",[e._v("可以同时传递多个双向绑定的数据")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(' <ModalInput :value.sync="value" :show.sync="show" />\n')])])]),t("h2",{attrs:{id:"router的理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#router的理解"}},[e._v("#")]),e._v(" router的理解")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/UxJev3IZzv18o_77d0q8Tw",target:"_blank",rel:"noopener noreferrer"}},[e._v("深入揭秘前端路由本质，手写 mini-router"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"路由的本质"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路由的本质"}},[e._v("#")]),e._v(" 路由的本质")]),e._v(" "),t("p",[e._v("简单来说，浏览器端路由其实并不是真实的网页跳转（和服务器没有任何交互），而是纯粹在浏览器端发生的一系列行为，本质上来说前端路由就是："),t("strong",[e._v("对 url 进行改变和监听，来让某个 dom 节点显示对应的视图。")])]),e._v(" "),t("h3",{attrs:{id:"路由的模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路由的模式"}},[e._v("#")]),e._v(" 路由的模式")]),e._v(" "),t("ul",[t("li",[e._v("hash 路由，特征是 url 后面会有 # 号，如 baidu.com/#foo/bar/baz。")]),e._v(" "),t("li",[e._v("history 路由，url 和普通路径没有差异。如 baidu.com/foo/bar/baz。")])]),e._v(" "),t("p",[e._v("只需要搞清楚两种路由分别是如何 改变，并且组件是如何监听并完成视图的展示，一切就真相大白了。")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("hash\n通过 "),t("code",[e._v("location.hash = 'foo'")]),e._v(" 这样的语法来改变，路径就会由 baidu.com 变更为 "),t("code",[e._v("baidu.com/#foo")]),e._v("。"),t("br"),e._v("\n通过 "),t("code",[e._v("window.addEventListener('hashchange')")]),e._v(" 这个事件，就可以监听到 hash 值的变化。")])]),e._v(" "),t("li",[t("p",[e._v("history\n用了 history.pushState 这个 API 语法改变"),t("code",[e._v("history.pushState(state, title[, url])")])])])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("state 代表状态对象，这让我们可以给每个路由记录创建自己的状态，并且它还会序列化后保存在用户的磁盘上，以便用户重新启动浏览器后可以将其还原。")])]),e._v(" "),t("li",[t("p",[e._v("title 当前没啥用。")])]),e._v(" "),t("li",[t("p",[e._v("url 在路由中最重要的 url 参数反而是个可选参数，放在了最后一位。")]),e._v(" "),t("p",[e._v("通过 "),t("code",[e._v("history.pushState({}, '', foo)")]),e._v("，可以让 "),t("code",[e._v("baidu.com")]),e._v(" 变化为 "),t("code",[e._v("baidu.com/foo")]),e._v("。")]),e._v(" "),t("p",[e._v("通过 location.href = 'baidu.com/foo' 这种方式来跳转，是会让浏览器重新加载页面并且请求服务器的，但是 history.pushState 的神奇之处就在于它可以让 url 改变，但是不重新加载页面，完全由用户决定如何处理这次 url 改变。因此，这种方式的前端路由必须在支持 histroy API 的浏览器上才可以使用。")]),e._v(" "),t("p",[e._v('刷新以后是带着 baidu.com/foo 这个页面去请求服务端资源的，但是服务端并没有对这个路径进行任何的映射处理，当然会返回 404，处理方式是让服务端对于"不认识"的页面,返回 index.html，这样这个包含了前端路由相关js代码的首页，就会加载你的前端路由配置表，并且此时虽然服务端给你的文件是首页文件，但是你的 url 上是 baidu.com/foo，前端路由就会加载 /foo 这个路径相对应的视图，完美的解决了 404 问题。')]),e._v(" "),t("p",[e._v("history 路由的监听也有点坑，浏览器提供了 window.addEventListener('popstate') 事件，但是它除了浏览器的几个前进后退（使用 history.back(), history.forward()和 history.go() 方法来完成在用户历史记录中向后和向前的跳转。）等操作会主动触发popstate 事件，pushState，replaceState 并不会触发popstate事件。")])])]),e._v(" "),t("h3",{attrs:{id:"javascript如何实现history路由变化监听"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javascript如何实现history路由变化监听"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://juejin.cn/first/second/first/second/third",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript如何实现history路由变化监听"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("完成一个订阅-发布模式，然后重写history.pushState, history.replaceState,并添加消息通知，这样一来只要history的无法实现监听函数就被我们加上了事件通知，只不过这里用的不是浏览器原生事件，而是通过我们创建的event-bus  来实现通知，然后触发事件订阅函数的执行。")]),e._v(" "),t("h2",{attrs:{id:"diff-算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#diff-算法"}},[e._v("#")]),e._v(" diff 算法")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/DRIYDutR2BcKzMs5CkycQg",target:"_blank",rel:"noopener noreferrer"}},[e._v("diff 算法"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6844903607913938951",target:"_blank",rel:"noopener noreferrer"}},[e._v("详解vue的diff算法"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6844903806132568072",target:"_blank",rel:"noopener noreferrer"}},[e._v("虚拟DOM和DOM-diff不再成为你的绊脚石"),t("OutboundLink")],1)]),e._v(" "),t("ol",[t("li",[e._v("首先响应式数据更新后，触发了 渲染 Watcher  的回调函数 vm._update(vm._render())去驱动视图更新")]),e._v(" "),t("li",[e._v("vm._render() 其实生成的就是 vnode，而 vm._update 就会带着新的 vnode 去走触发 "),t("code",[e._v("__patch__")]),e._v("过程。")]),e._v(" "),t("li",[t("code",[e._v("vm.__patch__")]),e._v(" 去把 VNode 转换成真正的 DOM 节点,patch 的过程会调用 createElm 创建元素节点.")])]),e._v(" "),t("p",[e._v("直接进入 ul 这个 vnode 的 patch 过程。对比新旧节点是否是相同类型的节点：")]),e._v(" "),t("ol",[t("li",[t("strong",[e._v("不是相同节点")]),e._v("：isSameNode为false的话，直接销毁旧的 vnode，渲染新的 vnode。这也解释了为什么 diff 是同层对比。")]),e._v(" "),t("li",[t("strong",[e._v("是相同节点")]),e._v("，要尽可能的做节点的复用（都是 ul，进入👈）。会调用src/core/vdom/patch.js下的patchVNode方法。")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("如果新 vnode 是文字 vnode")]),e._v("\n就直接调用浏览器的 dom api 把节点的直接替换掉文字内容就好。")]),e._v(" "),t("li",[t("strong",[e._v("如果新 vnode 不是文字 vnode")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("如果有新 children 而没有旧 children")]),e._v("\n说明是新增 children，直接 addVnodes 添加新子节点。")]),e._v(" "),t("li",[t("strong",[e._v("如果有旧 children 而没有新 children")]),e._v("\n说明是删除 children，直接 removeVnodes 删除旧子节点。")]),e._v(" "),t("li",[t("strong",[e._v("如果新旧 children 都存在（都存在 li 子节点列表，进入👈）")]),e._v("\n那么就是我们 diff算法 想要考察的最核心的点了，也就是新旧节点的 diff 过程。")])])])]),e._v(" "),t("p",[e._v("通过变量分别指向旧节点的首尾、新节点的首尾。根据这些指针，在一个 while 循环中不停的对新旧节点的两端的进行对比，直到没有节点可以对比。")]),e._v(" "),t("p",[e._v("sameVnode是用来判断节点是否可用的关键函数，可以看到，判断是否是 sameVnode，传递给节点的 key 是关键。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function sameVnode (a, b) {\n  return (\n    a.key === b.key && (\n      (\n        a.tag === b.tag &&\n        a.isComment === b.isComment &&\n        isDef(a.data) === isDef(b.data) &&\n        sameInputType(a, b)\n      )\n    )\n  )\n}\n")])])]),t("p",[e._v("接着进入 diff 过程，每一轮都是同样的对比，其中某一项命中了，就递归的进入 patchVnode 针对单个 vnode 进行的过程（如果这个 vnode 又有 children，那么还会来到这个 diff children 的过程 ）：")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("旧首节点和新首节点用 sameNode 对比。")])]),e._v(" "),t("li",[t("p",[e._v("旧尾节点和新首节点用 sameNode 对比")])]),e._v(" "),t("li",[t("p",[e._v("旧首节点和新尾节点用 sameNode 对比")])]),e._v(" "),t("li",[t("p",[e._v("旧尾节点和新尾节点用 sameNode 对比")])]),e._v(" "),t("li",[t("p",[e._v("如果以上逻辑都匹配不到，再把所有旧子节点的 key 做一个映射表，然后用新 vnode 的 key 去找出在旧节点中可以复用的位置。")])])]),e._v(" "),t("blockquote",[t("p",[e._v("diff 子节点的首尾对比如果都没有命中，就会进入 key 的详细对比过程，简单来说，就是利用旧节点的 key -> index 的关系建立一个 map 映射表，然后用新节点的 key 去匹配，如果没找到的话，就会调用 createElm 方法 重新建立 一个新节点。")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 建立旧节点的 key -> index 映射表\noldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);\n\n// 去映射表里找可以复用的 index\nidxInOld = findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);\n// 一定是找不到的，因为新节点的 key 是随机生成的。\nif (isUndef(idxInOld)) {\n  // 完全通过 vnode 新建一个真实的子节点\n  createElm();\n}\n")])])]),t("p",[e._v("然后不停的把匹配到的指针向内部收缩，直到新旧节点有一端的指针相遇（说明这个端的节点都被patch过了）。")]),e._v(" "),t("p",[e._v("在指针相遇以后，还有两种比较特殊的情况：")]),e._v(" "),t("ol",[t("li",[t("p",[t("strong",[e._v("有新节点需要加入")]),e._v("。如果更新完以后，oldStartIdx > oldEndIdx，说明旧节点都被 patch 完了，但是有可能还有新的节点没有被处理到。接着会去判断是否要新增子节点。")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("有旧节点需要删除")]),e._v("。如果新节点先patch完了，那么此时会走 newStartIdx > newEndIdx  的逻辑，那么就会去删除多余的旧子节点。")])])])])}),[],!1,null,null,null);t.default=v.exports}}]);