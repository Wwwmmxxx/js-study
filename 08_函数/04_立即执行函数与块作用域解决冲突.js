// 当使用第三方库时,容易将自己的函数与第三方库的函数崇明,产生冲突

// 1.可以使用立即执行函数,将其放到私有作用域中

(function (window) {
  function hd() {
    console.log("4.2-hd()");
  }
  function show() {
    console.log("4.2-show()")
  }
  window.xyf = { hd, show };
})(window);

// 通过window下面的xyf属性,调用方法,防止重名
// 现在更推荐模块化
xyf.hd()

// 2.使用let,块级作用域
{
  let hd = function () {
    console.log("4.2-hd()");
  };
  window.xyf2 = { hd };
}

xyf2.hd();