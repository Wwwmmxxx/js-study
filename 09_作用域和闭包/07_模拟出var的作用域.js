// 在JS历史中 , 使用立即执行函数 , 通过函数的方式模拟出作用域
for (var i = 1; i < 4; i++) {
  (function (a) {
    setTimeout(function () {
      console.log(a);
    }, 1000)
  })(i);
}
