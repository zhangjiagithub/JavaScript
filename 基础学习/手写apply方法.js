Function.prototype.changeThis = function (obj, args) {
    // 判断调用者是否为function类型
    if (typeof this !== 'function') {
        throw new Error('调用者不是一个函数')

    }
    const fn = Symbol()
    // 判断obj是否为null或者undefined
    if (obj == null || obj == undefined) {
        window[fn] = this
        window[fn](...args)
        delete window[fn]
    }
    // 判断obj是 number类型
    if (typeof obj === 'number') {
        Number.prototype[fn] = this
        Number.prototype[fn](...args)
        delete Number.prototype[fn]
    }
    // 判断obj是 string类型
    if (typeof obj === 'string') {
        String.prototype[fn] = this
        String.prototype[fn](...args)
        delete String.prototype[fn]
    }
    // 判断obj是boolean类型
    if (typeof obj === 'boolean') {
        Boolean.prototype[fn] = this
        Boolean.prototype[fn](...args)
        delete Boolean.prototype[fn]
    }
    // 判断obj是object类型
    if (typeof obj === 'object') {
        obj[fn] = this
        obj[fn](...args)
        delete obj[fn]
    }
}
function foo(name) {
    this.name = name
    console.log(this, 'this')
}
foo.changeThis(123, ['张佳佳'])
foo.changeThis('123', ['张佳佳'])
foo.changeThis(true, ['张佳佳'])
foo.changeThis({ age: 123 }, ['张佳佳'])
// Number {0, name: '张佳佳', constructor: ƒ, toExponential: ƒ, toFixed: ƒ, …} 'this'
// String {'', name: '张佳佳', constructor: ƒ, anchor: ƒ, big: ƒ, …} 'this'
// Boolean {false, name: '张佳佳', constructor: ƒ, toString: ƒ, valueOf: ƒ, …} 'this'
// {age: 123, name: '张佳佳', Symbol(): ƒ} 'this'