// "use strict"
function foo(name,age) {
    console.log('参数', name, age)
    console.log('foo被调用时this的指向', this)
}
// 默认调用时this指向window，严格模式时默认调用this指向undefined
// foo('张佳佳', 24)
// 参数 张佳佳 24
// foo被调用时this的指向 Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// apply
// 第一个参数：绑定this
// 第二个参数：已数组形式的实参
// foo.apply('apply', ['张佳佳', 24])


// call
// 第一个参数： 绑定this
// 第二个参数：以逗号隔开的参数序列

// foo.call('call', '张佳佳', 24)
// 参数 张佳佳 24
// foo被调用时this的指向 String {'call'}

// bind
const changethis = foo.bind('bind', '张佳佳', 24)
changethis()