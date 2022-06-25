Function.prototype.autoApply = function(_this, arg) {
    console.log(this, '111111111111')
    // 1、处理_this,当传进来的第一个参数是基本类型的数据时会转为包装对象，是null或者undefined时会指向window
    _this = _this ? Object(_this) : window
    // 2、绑定调用的函数
    _this.changeThis = this // 谁调用autoApply,this就指向谁,所以此时this指向foo函数
    // 3、处理arg参数
    arg = arg || [] // 当arg为空时，默认为空数组
    // 4、掉用changThis函数
    let newThis = _this.changeThis(...arg)
    delete _this.changeThis
    return newThis
}
function foo(a) {
    console.log('参数', a)
    console.log("this", this)
}
foo.autoApply('apply', [1,2])
foo.autoApply(123, [1,2])
foo.autoApply(true, [1,2])
foo.autoApply(null, [1,2])
foo.autoApply(undefined, [1,2])
foo.autoApply({a: 1}, [1,2])