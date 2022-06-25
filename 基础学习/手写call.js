Function.prototype.autoCall = function(_this, ...arg) {
    // 1、处理_this,当传进来的第一个参数是基本类型的数据时会转为包装对象，是null或者undefined时会指向window
    _this = _this ? Object(_this) : window
    // 2、绑定调用的函数
    _this.changeThis = this // 谁调用autoApply,this就指向谁,所以此时this指向foo函数
    // 4、掉用changThis函数
    let newThis = _this.changeThis(...arg || '')
    delete _this.changeThis
    return newThis
}
function foo(a) {
    console.log('参数', a)
    console.log("this", this)
}
foo.autoCall('apply', 1)
foo.autoCall(123, 1)
foo.autoCall(true, 1)
foo.autoCall(null, 1)
foo.autoCall(undefined, 1)
foo.autoCall({a: 1}, 1)